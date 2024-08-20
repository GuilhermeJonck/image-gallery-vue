<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import { getImages } from '@/services/ImageService.js'

const images = ref(getImages())
const visible = ref(false)
const lightboxIndex = ref(0) 

const showLightbox = (i) => {   
  lightboxIndex.value = i 
  visible.value = true
}
</script>

<template>
     <div class="grid-container">
       <div class="grid-item" 
       v-for="(image, i) in images" :key="i">
         <img class="item" 
         :src="image.src" 
         :alt="image.alt" 
         @click="showLightbox(i)" />
       </div>
     </div>
     <vue-easy-lightbox
       :visible="visible"
       :imgs="images.map(img => img.src)"
       :index="lightboxIndex" 
       @hide="visible = false"
     />
</template>

<style scoped>
.grid-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: dense;
    grid-gap: 20px;
}

.grid-item {
    position: relative;
    background-color: #efefef;
    overflow: hidden;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.grid-container .grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: zoom-in;
}

.grid-item:hover img {
    transform: scale(1.1);
}

.grid-item:nth-child(3n - 2) {
  grid-column: span 2;
  grid-row: span 2;
}

@media (max-width: 768px) {
    .grid-container{
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 250px;
    max-width: 500px;
    }

    .grid-container .grid-item:nth-child(3n - 2){
        grid-column: unset;
        grid-row: unset;
    }
}
</style>
