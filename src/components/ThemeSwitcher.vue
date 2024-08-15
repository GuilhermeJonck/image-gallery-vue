<template>
    <div id="switch">
          <button @click="toggleTheme" class="light"></button>
          <span></span>
        </div> 
    </template>
    
    <script setup>
    import { ref, watch } from 'vue'
    
    const theme = ref(localStorage.getItem('theme') || 'light')
    
    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
    
    watch(theme, (newTheme) => {
      document.documentElement.setAttribute('class', newTheme)
      localStorage.setItem('theme', newTheme)
    })
    
    // Initialize theme on load
    document.documentElement.setAttribute('class', theme.value)
    </script>
    
    <style scoped>
    /*Switch*/
    #switch {
      position: relative /*Posição relativa  ao switch no absoluto*/;
      width: 64px;
      margin: 4px auto; /*Alinhamento de display block*/
    }

    #switch button {
      width: 32px;
      height: 32px;
      background: white var(--switch-bg-url) no-repeat center;
      border: 1px solid black;
      border-radius: 50%;
      position: absolute; /*Sobreposição de camadas*/
      z-index: 1; /*Alterar layer do button*/
      top: 50%; /*Alinhando*/
      left: 0;
      transform: translateY(-50%); /*Alinhando*/
      animation: slide-out 0.5s;
    }
    
    .light #switch button {
      animation: slide-in 0.2s forwards;
    }

    #switch button:hover {
      outline: 8px solid var(--highlight-color);
    }

    #switch span {
      display: block;
      width: 64px;
      height: 24px;
      background: var(--surface-color);
      border: 1px solid var(--stroke-color);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 9999px;
    }
  
    #container {
      width: 100%;
  
    }

    @keyframes slide-in {
    from {
      left: 0;
    }
    to {
      left: 50%;
    }
  }
  /* animation/Mover elemento */
  @keyframes slide-out {
    from {
      left: 50%;
    }
    to {
      left: 0;
    }
    }
    </style>
    