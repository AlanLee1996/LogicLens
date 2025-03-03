<template>
  <div class="about">
    <div class="grid-background"></div>
    
    <div class="back-button-container">
      <router-link to="/" class="btn btn-back">
        <span class="back-icon">←</span> 返回
      </router-link>
    </div>
    
    <div class="card">
      <h2 class="card-title">关于逻辑透镜</h2>
      <p>LogicLens（逻辑透镜）是一个致力于通过可交互的可视化演示，将复杂的科学和生活逻辑以深入浅出的方式呈现给大众的项目。</p>
      <p>希望本项目能:</p>
      <ul>
        <li>打破知识壁垒，让复杂概念变得易于理解</li>
        <li>通过视觉化的方式激发学习兴趣</li>
        <li>展示科学与艺术的完美结合</li>
        <li>结合AI提升学习效率</li>
      </ul>
      <p>无论您是科学爱好者、学生、教育工作者，还是对世界运作原理充满好奇的人，LogicLens都能为您提供一个全新的视角，探索各种现象背后的逻辑。</p>
      <p>您可以提交pr，丰富本项目的内容：<a href="https://github.com/AlanLee1996/LogicLens" target="_blank" style="color: var(--params-color);">GitHub</a></p>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
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

.card {
  background-color: rgba(10, 10, 20, 0.8);
  border: 1px solid var(--secondary-color);
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 136, 255, 0.3);
  margin-top: 30px;
}

h2 {
  margin-bottom: 20px;
  color: var(--primary-color);
  text-shadow: 0 0 10px rgba(0, 136, 255, 0.5);
}

p {
  margin-bottom: 20px;
  line-height: 1.6;
}

ul {
  margin-bottom: 20px;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
  line-height: 1.6;
}
</style>
