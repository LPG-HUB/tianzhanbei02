<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue'
import { ref, computed } from 'vue'
import { useTravelStore } from '@/stores/travel.store'
import { marked } from 'marked'
import type { Trip } from '@/api/types/travel'

const travelStore = useTravelStore()
const message = ref('')
const isLoading = ref(false)
const chatHistory = ref<Array<{ sender: string; content: string }>>([])
const showImportModal = ref(false)
const tripToImport = ref<Trip | null>(null)

// 从 AI 响应中提取行程数据（假设 AI 返回的内容包含行程信息）
const extractTripFromResponse = (response: string): Partial<Trip> | null => {
  try {
    // 尝试解析 JSON 格式的行程数据
    const jsonMatch = response.match(/```json\s*([\s\S]*?)\s*```/)
    if (jsonMatch) {
      const tripData = JSON.parse(jsonMatch[1])
      return tripData
    }
    
    // 如果没有 JSON 格式，返回 null，需要手动创建
    return null
  } catch (error) {
    console.error('解析行程数据失败:', error)
    return null
  }
}

// 将 Markdown 转换为 HTML
const renderMarkdown = (content: string) => {
  return marked(content)
}

async function sendMessage() {
  if (!message.value.trim()) return

  const userMessage = message.value.trim()
  chatHistory.value.push({ sender: 'user', content: userMessage })
  const currentMessage = userMessage

  message.value = ''
  isLoading.value = true

  try {
    const response = await travelStore.chatWithAI(currentMessage)
    chatHistory.value.push({ sender: 'ai', content: response })
    
    // 检查响应中是否包含行程数据
    const extractedTrip = extractTripFromResponse(response)
    if (extractedTrip) {
      tripToImport.value = {
        id: '',
        title: extractedTrip.title || 'AI 生成行程',
        start: extractedTrip.start || new Date().toISOString().split('T')[0],
        end: extractedTrip.end || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: 'draft',
        source: 'ai',
        description: extractedTrip.description || '',
        days: extractedTrip.days || [],
        budget: extractedTrip.budget,
        transportation: extractedTrip.transportation,
        note: extractedTrip.note || '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      showImportModal.value = true
    }
  } catch {
    chatHistory.value.push({ sender: 'ai', content: '抱歉，AI 暂时无法响应，请稍后再试。' })
  } finally {
    isLoading.value = false
  }
}

function clearChat() {
  chatHistory.value = []
}

function startNewChat() {
  travelStore.resetSession()
  chatHistory.value = []
}

// 导入行程到行程列表
function importTrip() {
  if (tripToImport.value) {
    const savedTrip = travelStore.saveTrip(tripToImport.value)
    showImportModal.value = false
    tripToImport.value = null
    
    // 跳转到行程详情页
    import('@/router').then(router => {
      router.push(`/trip/${savedTrip.id}`)
    })
  }
}

// 取消导入
function cancelImport() {
  showImportModal.value = false
  tripToImport.value = null
}

// 显示导入按钮的计算属性
const canImportTrip = computed(() => tripToImport.value !== null)

// 格式化日期
function formatDate(dateString: string) {
  if (!dateString) return '未设置'
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 计算天数
function calculateDays(start: string, end: string): number {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays + 1 // 包含首尾两天
}
</script>

<template>
  <AppLayout>
    <div class="ai-chat-container">
      <div class="container">
        <div class="ai-chat-header">
          <div class="header-content">
            <h1>AI 智能规划</h1>
            <p class="subtitle">文字、语音、图片对话，路线推荐与方案优化</p>
          </div>
          <div class="header-actions">
            <button class="btn btn-outline" @click="startNewChat">
              <span>+</span> 新会话
            </button>
          </div>
        </div>

        <div class="ai-chat-main">
          <!-- 聊天和输入区域 -->
          <div class="chat-container">
            <div v-if="chatHistory.length === 0" class="empty-chat">
              <div class="empty-icon">🤖</div>
              <h3>开始与AI对话</h3>
              <p>告诉我您的旅行需求，我会为您推荐合适的路线和方案。</p>
              <div class="example-prompts">
                <p>例如：</p>
                <ul>
                  <li>"我想去上海玩3天，有什么推荐？"</li>
                  <li>"帮我规划一个北京5日游的行程"</li>
                  <li>"云南旅游的最佳季节是什么时候？"</li>
                </ul>
              </div>
            </div>

            <div v-else class="chat-messages">
              <div
                v-for="(msg, index) in chatHistory"
                :key="index"
                :class="['chat-message', `chat-message-${msg.sender}`]"
              >
                <div class="message-avatar">
                  <span v-if="msg.sender === 'user'">👤</span>
                  <span v-else>🤖</span>
                </div>
                <div class="message-content">
                  <div class="message-text" v-html="renderMarkdown(msg.content)"></div>
                  <div class="message-time">{{ new Date().toLocaleTimeString() }}</div>
                </div>
              </div>
            </div>

          </div>

          <!-- 输入区域 -->
          <div class="chat-input-area">
            <div class="input-wrapper">
              <textarea
                v-model="message"
                placeholder="告诉我您的旅行需求..."
                rows="3"
                @keydown.enter.exact.prevent="sendMessage"
              ></textarea>
              <div class="input-actions">
                <button
                  class="btn btn-secondary"
                  @click="clearChat"
                  :disabled="chatHistory.length === 0"
                >
                  清空对话
                </button>
                <div class="action-group">
                  <button
                    class="btn btn-icon"
                    title="发送图片"
                  >
                    📷
                  </button>
                  <button
                    class="btn btn-icon"
                    title="发送语音"
                  >
                    🎤
                  </button>
                  <button
                    class="btn btn-primary"
                    @click="sendMessage"
                    :disabled="!message.trim() || isLoading"
                  >
                    <span v-if="isLoading">发送中...</span>
                    <span v-else>发送消息</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 导入行程提示按钮 -->
        <div v-if="canImportTrip" class="import-hint-bar">
          <div class="hint-content">
            <span class="hint-icon">✨</span>
            <span class="hint-text">AI 已生成行程，点击导入到行程列表</span>
            <button class="btn btn-primary btn-small" @click="showImportModal = true">
              查看并导入
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 导入确认模态框 -->
    <div v-if="showImportModal" class="modal-overlay" @click="cancelImport">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h2>导入行程</h2>
          <button class="modal-close" @click="cancelImport">×</button>
        </div>
        <div class="modal-body">
          <div v-if="tripToImport" class="trip-preview">
            <h3>{{ tripToImport.title }}</h3>
            <div class="trip-info">
              <div class="info-item">
                <span class="label">📅 日期:</span>
                <span class="value">{{ formatDate(tripToImport.start) }} - {{ formatDate(tripToImport.end) }}</span>
              </div>
              <div class="info-item">
                <span class="label">⏱️ 时长:</span>
                <span class="value">{{ calculateDays(tripToImport.start, tripToImport.end) }}天</span>
              </div>
              <div class="info-item">
                <span class="label">💰 预算:</span>
                <span class="value">{{ tripToImport.budget?.total ? `¥${tripToImport.budget.total}` : '未设置' }}</span>
              </div>
              <div class="info-item">
                <span class="label">📝 天数:</span>
                <span class="value">{{ tripToImport.days?.length || 0 }}天</span>
              </div>
            </div>
            <div v-if="tripToImport.description" class="trip-description">
              <p>{{ tripToImport.description }}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline" @click="cancelImport">取消</button>
          <button class="btn btn-primary" @click="importTrip">
            确认导入
          </button>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>
.ai-chat-container {
  padding: 40px 0 60px;
  background: linear-gradient(135deg, #f5f7ff 0%, #e3e9ff 100%);
  min-height: calc(100vh - 140px);
  transition: padding 0.3s ease;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.ai-chat-header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.header-content {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(74, 108, 247, 0.15);
  display: inline-block;
  border: 1px solid #e0e7ff;
}

.ai-chat-header h1 {
  font-size: 36px;
  font-weight: 700;
  color: #222;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin: 0;
}

.ai-chat-main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100vh - 180px);
}

.chat-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 30px;
  flex: 1;
  overflow-y: auto;
  border: 1px solid #e0e7ff;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
}

.empty-chat {
  text-align: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.empty-chat h3 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.empty-chat p {
  color: #666;
  margin-bottom: 30px;
}

.example-prompts {
  text-align: left;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #e9ecef;
}

.example-prompts p {
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.example-prompts ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.example-prompts li {
  color: #666;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
  border-radius: 6px;
  margin-bottom: 5px;
  background: white;
  transition: all 0.2s;
}

.example-prompts li:hover {
  background: #f5f7ff;
  transform: translateX(5px);
}

.example-prompts li:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.chat-message {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.chat-message-user {
  flex-direction: row-reverse;
}

.message-avatar {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #4a6cf7 0%, #3a5ce5 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 2px 8px rgba(74, 108, 247, 0.3);
}

.chat-message-ai .message-avatar {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.message-content {
  flex: 1;
  max-width: 80%;
  min-width: 0;
}

.message-text {
  background: #f5f7ff;
  padding: 18px;
  border-radius: 16px;
  color: #333;
  line-height: 1.6;
  white-space: pre-wrap;
  position: relative;
  box-shadow: 0 2px 10px rgba(74, 108, 247, 0.1);
  border: 1px solid #e0e7ff;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.chat-message-user .message-text {
  background: linear-gradient(135deg, #4a6cf7 0%, #3a5ce5 100%);
  color: white;
  box-shadow: 0 2px 10px rgba(74, 108, 247, 0.2);
  border: none;
}

/* 消息时间戳 */
.message-time {
  font-size: 12px;
  color: #9ca3af;
  margin-top: 6px;
  text-align: right;
  padding: 0 10px;
}

.chat-message-user .message-time {
  color: rgba(255, 255, 255, 0.7);
  text-align: left;
}

/* 图片消息样式 */
.message-image {
  max-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid #e0e7ff;
}

.message-image img {
  width: 100%;
  height: auto;
  display: block;
}

.chat-message-user .message-image {
  border-color: rgba(255, 255, 255, 0.3);
}

/* Markdown表格样式 */
.message-text :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 14px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.chat-message-user .message-text :deep(table) {
  background: rgba(255, 255, 255, 0.1);
}

.message-text :deep(th),
.message-text :deep(td) {
  border: 1px solid #e5e7eb;
  padding: 10px;
  text-align: left;
}

.chat-message-user .message-text :deep(th),
.chat-message-user .message-text :deep(td) {
  border-color: rgba(255, 255, 255, 0.2);
}

.message-text :deep(th) {
  background-color: #4a6cf7;
  color: white;
  font-weight: 600;
}

.chat-message-user .message-text :deep(th) {
  background-color: rgba(255, 255, 255, 0.2);
}

.message-text :deep(tr:nth-child(even)) {
  background-color: #f9f9fa;
}

.chat-message-user .message-text :deep(tr:nth-child(even)) {
  background-color: rgba(255, 255, 255, 0.05);
}

.message-text :deep(tr:hover) {
  background-color: #f0f0f0;
}

.chat-message-user .message-text :deep(tr:hover) {
  background-color: rgba(255, 255, 255, 0.1);
}

.chat-input-area {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 25px;
  border: 1px solid #e0e7ff;
  transition: padding 0.3s ease;
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

textarea {
  width: 100%;
  padding: 18px;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
  transition: all 0.2s;
  background: #f9fafb;
  -webkit-appearance: none;
}

textarea:focus {
  outline: none;
  border-color: #4a6cf7;
  background: white;
  box-shadow: 0 0 0 3px rgba(74, 108, 247, 0.1);
}

.input-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.action-group {
  display: flex;
  gap: 10px;
  align-items: center;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
}

.btn-primary {
  background: linear-gradient(135deg, #4a6cf7 0%, #3a5ce5 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(74, 108, 247, 0.3);
  font-weight: 600;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(74, 108, 247, 0.4);
}

.btn-primary:disabled {
  background: #e5e7eb;
  color: #9ca3af;
  box-shadow: none;
  cursor: not-allowed;
}

.btn-secondary {
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  color: #4b5563;
  border: 1px solid #d1d5db;
}

.btn-secondary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-secondary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-icon {
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  color: #6b7280;
  border: 1px solid #d1d5db;
  font-size: 18px;
  transition: all 0.2s;
}

.btn-icon:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
}

.input-hint {
  font-size: 12px;
  color: #9ca3af;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
}

/* 导入行程提示栏 */
.import-hint-bar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #4a6cf7 0%, #3a5ce5 100%);
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(74, 108, 247, 0.4);
  z-index: 100;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.hint-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hint-icon {
  font-size: 20px;
}

.hint-text {
  font-size: 14px;
  font-weight: 500;
}

/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-container {
  background: white;
  border-radius: 16px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: scaleIn 0.3s ease-out;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h2 {
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin: 0;
}

.modal-close {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.modal-close:hover {
  background: #f3f4f6;
  color: #222;
}

.modal-body {
  padding: 24px;
}

.trip-preview h3 {
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin: 0 0 16px 0;
}

.trip-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-item .label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.info-item .value {
  font-size: 14px;
  color: #222;
  font-weight: 500;
}

.trip-description {
  background: #f9fafb;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.trip-description p {
  margin: 0;
  color: #4b5563;
  line-height: 1.6;
}

.modal-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 24px;
  border-top: 1px solid #e5e7eb;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .ai-chat-container {
    padding: 10px 0 20px;
  }

  .container {
    padding: 0 10px;
  }

  .header-content {
    padding: 20px 15px;
  }

  .ai-chat-header h1 {
    font-size: 28px;
  }

  .subtitle {
    font-size: 16px;
  }

  .ai-chat-main {
    height: calc(100vh - 160px);
  }

  .chat-container {
    padding: 15px;
    border-radius: 16px 16px 0 0;
  }

  .empty-chat {
    padding: 40px 15px;
  }

  .empty-icon {
    font-size: 48px;
  }

  .empty-chat h3 {
    font-size: 20px;
  }

  .example-prompts {
    max-width: 100%;
    padding: 15px;
  }

  .chat-message {
    gap: 8px;
  }

  .message-avatar {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  .message-content {
    max-width: 85%;
  }

  .message-text {
    padding: 14px;
    border-radius: 12px;
    font-size: 14px;
  }

  .chat-input-area {
    padding: 15px;
    border-radius: 0 0 16px 16px;
  }

  textarea {
    padding: 12px;
    min-height: 60px;
    font-size: 16px;
  }

  .input-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .action-group {
    justify-content: space-between;
    margin-top: 10px;
  }

  .btn {
    width: 100%;
    padding: 12px 16px;
    font-size: 15px;
  }

  .btn-icon {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }

  .input-hint {
    font-size: 11px;
  }

  .message-image {
    max-width: 100%;
  }

  /* 移动端模态框样式 */
  .import-hint-bar {
    left: 10px;
    right: 10px;
    transform: none;
    bottom: 10px;
  }

  .hint-content {
    flex-direction: column;
    gap: 8px;
  }

  .hint-text {
    font-size: 13px;
  }

  .modal-container {
    width: 95%;
    max-height: 90vh;
  }

  .trip-info {
    grid-template-columns: 1fr;
  }
}
</style>