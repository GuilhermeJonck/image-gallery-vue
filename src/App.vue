<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    ThemeSwitcher
  }
}
</script>

<template>
  <div id="app">
    <Header />
    <ThemeSwitcher />
    <router-view />
    <Footer />
  </div>
</template>

