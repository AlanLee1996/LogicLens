<template>
  <div class="app-container">
    <header>
      <div class="header-logo">
        <svg class="mini-logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <!-- 外圆 -->
          <circle cx="100" cy="100" r="90" fill="none" stroke="#0088ff" stroke-width="4" stroke-opacity="0.7" />
          
          <!-- 内圆 -->
          <circle cx="100" cy="100" r="70" fill="none" stroke="#0088ff" stroke-width="2" stroke-opacity="0.5" />
          
          <!-- 放大镜手柄 -->
          <line x1="160" y1="160" x2="190" y2="190" stroke="#0088ff" stroke-width="12" stroke-linecap="round" />
          
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
          
          <!-- 中心点 - 代表焦点 -->
          <circle cx="100" cy="100" r="8" fill="#0088ff" />
        </svg>
      </div>
      <h1 class="neon-title">逻辑透镜 <span>LogicLens</span></h1>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>逻辑透镜 - 在可互动的演示中，自由探索复杂概念</p>
      <a href="https://github.com/AlanLee1996/LogicLens" target="_blank" style="color: var(--params-color);">GitHub</a>
    </footer>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style>
:root {
  --primary-color: #0088ff;
  --secondary-color: #11f0e6;
  --bg-color: #0a0a14;
  --input-color: #11f0e6;
  --attention-color: #0088ff;
  --params-color: #0088ff;
  --output-color: #44ff44;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  font-family: "Courier New", monospace;
  color: var(--secondary-color);
  overflow-x: hidden;
  min-height: 100vh;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid rgba(17, 240, 230, 0.3);
  margin-bottom: 20px;
}

.header-logo {
  margin-right: 15px;
}

.mini-logo {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 0 5px rgba(0, 136, 255, 0.7));
}

h1 {
  color: var(--primary-color);
  font-size: 2.5rem;
}

h1 span {
  color: var(--secondary-color);
  font-size: 2rem;
}

/* 三色投影效果 */
.neon-title {
  position: relative;
  color: white;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
  animation: textFlicker 5s infinite alternate;
}

.neon-title span {
  position: relative;
  color: white;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
}

/* 中文部分的投影 */
.neon-title::before,
.neon-title::after {
  content: "逻辑透镜";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* 英文部分的投影 */
.neon-title span::before,
.neon-title span::after {
  content: "LogicLens";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* 红色投影 - 中文 */
.neon-title::before {
  left: -3px;
  color: rgba(255, 0, 128, 0.8);
  filter: blur(1.5px);
  animation: chromaShift1 3s infinite alternate;
}

/* 青色投影 - 中文 */
.neon-title::after {
  left: 3px;
  color: rgba(0, 255, 255, 0.8);
  filter: blur(1.5px);
  animation: chromaShift2 4s infinite alternate;
}

/* 红色投影 - 英文 */
.neon-title span::before {
  left: -3px;
  color: rgba(255, 0, 128, 0.8);
  filter: blur(1.5px);
  animation: chromaShift1 3.5s infinite alternate;
}

/* 青色投影 - 英文 */
.neon-title span::after {
  left: 3px;
  color: rgba(0, 255, 255, 0.8);
  filter: blur(1.5px);
  animation: chromaShift2 4.5s infinite alternate;
}

@keyframes textFlicker {
  0%, 100% {
    opacity: 0.95;
  }
  50% {
    opacity: 1;
  }
}

@keyframes chromaShift1 {
  0%, 100% {
    transform: translateX(-0.3px);
    opacity: 0.8;
  }
  50% {
    transform: translateX(-1px);
    opacity: 0.9;
  }
}

@keyframes chromaShift2 {
  0%, 100% {
    transform: translateX(0.3px);
    opacity: 0.8;
  }
  50% {
    transform: translateX(1px);
    opacity: 0.9;
  }
}

@keyframes chromaShift3 {
  0%, 100% {
    transform: translateY(0.3px);
    opacity: 0.7;
  }
  50% {
    transform: translateY(1px);
    opacity: 0.8;
  }
}

main {
  flex: 1;
  width: 100%;
}

footer {
  padding: 20px 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: auto;
}
</style>
