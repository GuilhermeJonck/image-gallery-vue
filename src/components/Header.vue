<script>
export default {
  name: 'ImageItem',
  props: {
    image: Object
  }
}
</script>

<template>
<header>
    <div id="header">
      <h1>Galeria de Imagens</h1>
    </div>
</header>
</template>

<style scoped>
#header {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin: 20px auto 16px;
    font-family: 'Open Sans', 'sans-serif';
    text-align: center; 
    width: 100%; 
}

#header h1 {
    color: var(--text-color);
    border-bottom: solid 1px var(--text-color);
    margin: 0;
    padding: 0 20px;
    max-width: 100%;
    box-sizing: border-box; 
}
</style>