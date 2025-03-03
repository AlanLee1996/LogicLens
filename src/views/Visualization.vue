<template>
  <div class="visualization-page">
    <div class="grid-background"></div>
    
    <div class="back-button-container">
      <router-link to="/" class="btn btn-back">
        <span class="back-icon">←</span> 返回
      </router-link>
    </div>
    
    <div v-if="visualization" class="visualization-container">
      <h2>{{ visualization.title }}</h2>
      
      <div class="viz-content">
        <div class="viz-display" @click="toggleFullscreen" style="cursor: pointer;">
          <div v-if="visualization && visualization.image" class="viz-image-container">
            <img :src="visualization.image" :alt="visualization.title" class="viz-image" />
          </div>
          
          <!-- 全屏按钮 -->
          <div class="fullscreen-controls">
            <button class="btn btn-primary fullscreen-btn" @click="toggleFullscreen">
              {{ isFullscreen ? '退出全屏' : '全屏查看' }}
            </button>
          </div>
        </div>
        
        <div class="viz-sidebar">
          <div class="card">
            <h3 class="card-title">{{ visualization.title }}</h3>
            <p>{{ visualization.fullDescription }}</p>
            
            <div class="controls">
              <h4>参与修改本页面</h4>
              <button class="btn" @click="jumpToGit()">跳转GIT仓库</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="not-found">
      <h2>未找到可视化</h2>
      <p>抱歉，您请求的可视化内容不存在。</p>
      <router-link to="/" class="btn">返回首页</router-link>
    </div>
    
    <!-- 全屏iframe容器 -->
    <div v-if="isFullscreen" class="fullscreen-iframe-container">
      <iframe 
        v-if="visualization"
        ref="fullscreenLlmIframe"
        class="fullscreen-iframe"
        :src="visualization.path"
        frameborder="0"></iframe>
        
      <button class="btn btn-close" @click="exitFullscreen">关闭</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useVisualizationStore } from '../store/visualizationStore';

const route = useRoute();
const vizId = computed(() => route.params.id);

// 使用Pinia store
const visualizationStore = useVisualizationStore();

const visualization = ref(null);
const isFullscreen = ref(false);

// 获取可视化数据
onMounted(() => {
  // 根据路由参数获取可视化数据
  if (vizId.value) {
    visualization.value = visualizationStore.getVisualizationById(vizId.value);
  }
});

// 切换全屏状态
function toggleFullscreen() {
  isFullscreen.value = true;
}

// 退出全屏
function exitFullscreen() {
  isFullscreen.value = false;
}

// 跳转到GitHub仓库
function jumpToGit() {
  window.open('https://github.com/AlanLee1996/LogicLens', '_blank');
}
</script>

<style scoped>
.visualization-page {
  padding: 20px;
  position: relative;
  min-height: calc(100vh - 200px);
}

.back-button-container {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
}

.btn-back {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: rgba(10, 10, 20, 0.7);
}

.back-icon {
  margin-right: 5px;
  font-size: 1.2em;
}

.visualization-container {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 40px;
}

.visualization-container h2 {
  text-align: center;
  margin-bottom: 30px;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(0, 136, 255, 0.5);
}

.viz-content {
  display: flex;
  gap: 20px;
}

.viz-display {
  flex: 1;
  min-height: 400px;
  background-color: rgba(10, 10, 20, 0.8);
  border: 1px solid var(--secondary-color);
  box-shadow: 0 0 20px rgba(17, 240, 230, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.fullscreen-controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.fullscreen-btn {
  padding: 8px 16px;
}

.viz-sidebar {
  width: 350px;
}

.controls {
  margin-top: 20px;
}

.controls h4 {
  margin-bottom: 10px;
  color: var(--primary-color);
}

.controls .btn {
  margin-right: 10px;
  margin-bottom: 10px;
}

.speed-control {
  margin-top: 15px;
}

.speed-control label {
  display: block;
  margin-bottom: 5px;
}

.speed-control input {
  width: 100%;
}

.explanation {
  margin-top: 20px;
}

.not-found {
  text-align: center;
  padding: 50px 20px;
}

.not-found h2 {
  color: var(--primary-color);
  margin-bottom: 20px;
}

.not-found p {
  margin-bottom: 30px;
}

/* 全屏iframe样式 */
.fullscreen-iframe-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.btn-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(10, 10, 20, 0.8);
  z-index: 1001;
}

/* 响应式调整 */
@media (max-width: 900px) {
  .viz-content {
    flex-direction: column;
  }
  
  .viz-sidebar {
    width: 100%;
  }
}
.viz-image {
  max-width: 600px;
}
</style>
