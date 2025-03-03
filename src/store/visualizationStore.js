import { defineStore } from 'pinia';

export const useVisualizationStore = defineStore('visualization', {
  state: () => ({
    visualizations: {
      llm: {
        id: 'llm',
        title: '大语言模型工作原理',
        description: '探索大语言模型如何处理文本、生成回答的内部机制',
        fullDescription: '大语言模型（LLM）是一种基于Transformer架构的人工智能系统，通过分析海量文本学习语言规律和知识。本可视化展示了从输入到输出的完整流程，包括分词、注意力机制、知识检索和生成过程。',
        image: '/images/llm-preview.jpg',
        path: '/llm-visualization.html',
      },
      sorting: {
        id: 'sorting',
        title: '排序算法可视化',
        description: '直观展示各种排序算法的工作原理和性能对比',
        fullDescription: '排序算法是计算机科学中的基础算法，用于将一组数据按照特定顺序重新排列。本可视化工具展示了多种常见排序算法（冒泡排序、选择排序、插入排序、归并排序、快速排序）的执行过程，并支持算法性能的横向对比。',
        image: '/images/sorting-preview.jpg',
        path: '/sorting-visualizer.html',
      },
      pathfinding: {
        id: 'pathfinding',
        title: '路径寻找算法可视化',
        description: '探索各种路径寻找算法的工作原理和性能对比',
        fullDescription: '路径寻找算法是计算机科学中的基础算法，用于在网格或图形中找到最短路径。本可视化工具展示了多种常见路径寻找算法（A*算法、Dijkstra算法、真菌算法等）的执行过程，并支持算法性能的横向对比。',
        image: '/images/pathfinding-preview.jpg',
        path: '/pathfinding-visualization.html',
      },
      tsp: {
        id: 'tsp',
        title: '旅行商问题算法可视化',
        description: '探索旅行商问题的算法工作原理和性能对比',
        fullDescription: '旅行商问题是指在一个给定的地图上，找到一系列点所构成的路径，使得这些点连续且不重复，且这些点的总距离最小。本可视化工具展示了多种常见旅行商问题算法的执行过程，并支持算法性能的对比。',
        image: '/images/tsp-preview.jpg',
        path: '/tsp-visualization.html',
      }
    },
    
    // 分类数据
    featuredVisualizations: [
      {
        id: 'llm',
        title: '大语言模型工作原理',
        description: '探索大语言模型如何处理文本、生成回答的内部机制',
        image: '/images/llm-preview.jpg',
      },
      {
        id: 'sorting',
        title: '排序算法可视化',
        description: '直观展示各种排序算法的工作原理和性能对比',
        image: '/images/sorting-preview.jpg',
      },
      {
        id: 'pathfinding',
        title: '路径寻找算法可视化',
        description: '探索各种路径寻找算法的工作原理和性能对比',
        image: '/images/pathfinding-preview.jpg',
      },
    ],
    
    computerVisualizations: [
      {
        id: 'sorting',
        title: '排序算法可视化',
        description: '直观展示各种排序算法的工作原理和性能对比',
        image: '/images/sorting-preview.jpg',
      },
      {
        id: 'llm',
        title: '大语言模型工作原理',
        description: '探索大语言模型如何处理文本、生成回答的内部机制',
        image: '/images/llm-preview.jpg',
      },
      {
        id: 'pathfinding',
        title: '路径寻找算法可视化',
        description: '探索各种路径寻找算法的工作原理和性能对比',
        image: '/images/pathfinding-preview.jpg',
      },
      {
        id: 'tsp',
        title: '旅行商问题算法可视化',
        description: '探索旅行商问题的算法工作原理和性能对比',
        image: '/images/tsp-preview.jpg',
      }
    ],
    
    scienceVisualizations: [
      
    ],
    
    lifeVisualizations: [
      
    ]
  }),
  
  getters: {
    getVisualizationById: (state) => (id) => {
      return state.visualizations[id] || null;
    },
    getAllVisualizations: (state) => {
      return Object.values(state.visualizations);
    },
    getFeaturedVisualizations: (state) => {
      return state.featuredVisualizations;
    },
    getComputerVisualizations: (state) => {
      return state.computerVisualizations;
    },
    getScienceVisualizations: (state) => {
      return state.scienceVisualizations;
    },
    getLifeVisualizations: (state) => {
      return state.lifeVisualizations;
    }
  }
});
