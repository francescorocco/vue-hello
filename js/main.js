const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      immage: 'https://avatars.githubusercontent.com/u/6128107?s=280&v=4'
    }
  }
}).mount('#app')