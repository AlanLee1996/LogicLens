<template>
  <div class="home">
    <div class="grid-background"></div>
    
    <section class="hero">
      <div class="logo-container">
        <svg class="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <!-- 外圆 -->
          <circle cx="100" cy="100" r="90" fill="none" stroke="#0088ff" stroke-width="4" stroke-opacity="0.7" />
          
          <!-- 内圆 -->
          <circle cx="100" cy="100" r="70" fill="none" stroke="#0088ff" stroke-width="2" stroke-opacity="0.5" />
          
          <!-- 放大镜手柄 -->
          <line x1="165" y1="165" x2="190" y2="190" stroke="#0088ff" stroke-width="18" stroke-linecap="round" />
          
          <!-- 数据点和连线 - 代表数据可视化 -->
          <circle cx="70" cy="80" r="4" fill="#0088ff" />
          <circle cx="90" cy="60" r="4" fill="#0088ff" />
          <circle cx="110" cy="90" r="4" fill="#0088ff" />
          <circle cx="130" cy="70" r="4" fill="#0088ff" />
          <circle cx="80" cy="120" r="4" fill="#0088ff" />
          <circle cx="120" cy="110" r="4" fill="#0088ff" />
          
          <line x1="70" y1="80" x2="90" y2="60" stroke="#0088ff" stroke-width="1.5" />
          <line x1="90" y1="60" x2="110" y2="90" stroke="#0088ff" stroke-width="1.5" />
          <line x1="110" y1="90" x2="130" y2="70" stroke="#0088ff" stroke-width="1.5" />
          <line x1="130" y1="70" x2="120" y2="110" stroke="#0088ff" stroke-width="1.5" />
          <line x1="120" y1="110" x2="80" y2="120" stroke="#0088ff" stroke-width="1.5" />
          <line x1="80" y1="120" x2="70" y2="80" stroke="#0088ff" stroke-width="1.5" />
          
          <!-- 动态效果 - 脉冲圆 -->
          <circle cx="100" cy="100" r="50" fill="none" stroke="#11f0e6" stroke-width="1.5" stroke-opacity="0.7">
            <animate attributeName="r" values="50;60;50" dur="3s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
          
          <!-- 中心点 - 代表焦点 -->
          <circle cx="100" cy="100" r="8" fill="#0088ff">
            <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <h2 class="glow-text">探索科学与生活的逻辑</h2>
      <p>在可互动的演示中，自由探索复杂概念</p>
      <div class="hero-buttons">
        <router-link to="/visualization/llm" class="btn btn-primary">开始探索</router-link>
        <router-link to="/about" class="btn">关于本项目</router-link>
      </div>
    </section>

    <section class="featured">
      <h3>精选可视化</h3>
      <div class="visualization-grid">
        <div class="visualization-card" v-for="viz in featuredVisualizations" :key="viz.id">
          <div class="card-image" :style="{ backgroundImage: `url(${viz.image})` }"></div>
          <div class="card-content">
            <h4>{{ viz.title }}</h4>
            <p>{{ viz.description }}</p>
            <router-link :to="`/visualization/${viz.id}`" class="btn">探索</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="categories">
      <!-- 计算机分区 -->
      <div class="category-section">
        <h3 class="category-title">计算机</h3>
        <div class="visualization-grid">
          <div class="visualization-card" v-for="viz in computerVisualizations" :key="viz.id">
            <div class="card-image" :style="{ backgroundImage: `url(${viz.image})` }"></div>
            <div class="card-content">
              <h4>{{ viz.title }}</h4>
              <p>{{ viz.description }}</p>
              <div class="card-actions">
                <router-link :to="`/visualization/${viz.id}`" class="btn">探索</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 科学分区 -->
      <div class="category-section">
        <h3 class="category-title">科学（待更新）</h3>
        <div class="visualization-grid">
          <div class="visualization-card" v-for="viz in scienceVisualizations" :key="viz.id">
            <div class="card-image" :style="{ backgroundImage: `url(${viz.image})` }"></div>
            <div class="card-content">
              <h4>{{ viz.title }}</h4>
              <p>{{ viz.description }}</p>
              <div class="card-actions">
                <router-link :to="`/visualization/${viz.id}`" class="btn">探索</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 其他分区 -->
      <div class="category-section">
        <h3 class="category-title">其他（待更新）</h3>
        <div class="visualization-grid">
          <div class="visualization-card" v-for="viz in otherVisualizations" :key="viz.id">
            <div class="card-image" :style="{ backgroundImage: `url(${viz.image})` }"></div>
            <div class="card-content">
              <h4>{{ viz.title }}</h4>
              <p>{{ viz.description }}</p>
              <div class="card-actions">
                <router-link :to="`/visualization/${viz.id}`" class="btn">探索</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useVisualizationStore } from '../store/visualizationStore';

// 使用Pinia store
const visualizationStore = useVisualizationStore();

// 从store中获取数据
const featuredVisualizations = visualizationStore.getFeaturedVisualizations;
const computerVisualizations = visualizationStore.getComputerVisualizations;
const scienceVisualizations = visualizationStore.getScienceVisualizations;
const lifeVisualizations = visualizationStore.getLifeVisualizations;
</script>

<style scoped>
.home {
  padding: 20px 0;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  margin-bottom: 40px;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.logo {
  width: 150px;
  height: 100px;
  filter: drop-shadow(0 0 10px rgba(0, 136, 255, 0.7));
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.hero h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  text-shadow: 0 0 15px rgba(0, 136, 255, 0.7);
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.featured {
  padding: 20px;
}

.featured h3 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--secondary-color);
  text-align: center;
}

.visualization-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.visualization-card {
  border: 1px solid var(--secondary-color);
  background-color: rgba(10, 10, 20, 0.8);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 136, 255, 0.3);
}

.visualization-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(0, 136, 255, 0.5);
}

.card-image {
  height: 180px;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid var(--secondary-color);
  background-color: rgba(0, 136, 255, 0.1);
}

.card-content {
  padding: 20px;
}

.card-content h4 {
  color: var(--primary-color);
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.card-content p {
  margin-bottom: 20px;
  font-size: 0.9rem;
  line-height: 1.4;
}

.category-section {
  margin-bottom: 60px;
}

.category-title {
  font-size: 1.8rem;
  margin-bottom: 25px;
  color: var(--primary-color);
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-color), transparent);
}

.categories {
  padding: 20px;
}

.card-actions {
  display: flex;
  gap: 10px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: var(--bg-color);
  border: none;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(0, 136, 255, 0.5);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(0, 136, 255, 0.8);
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--bg-color);
}

.btn-outline {
  background-color: transparent;
  border: 1px solid var(--secondary-color);
}

.btn-outline:hover {
  background-color: rgba(0, 136, 255, 0.1);
}

.grid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-size: 50px 50px;
  background-image:
    linear-gradient(to right, rgba(0, 136, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 136, 255, 0.1) 1px, transparent 1px);
  pointer-events: none;
}
</style>
