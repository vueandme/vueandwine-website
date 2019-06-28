<template>
  <div class="leading-normal tracking-normal text-white gradient">
    <Navbar :scrolled="scrolled" />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      scrolled: false
    }
  },
  beforeDestroy() {
    if (this._scrollListener) {
      window.document.removeEventListener('scroll', this.scrollHandler)
    }
  },
  mounted() {
    this._scrollListener = window.document.addEventListener(
      'scroll',
      this.scrollHandler
    )
    this.scrollHandler()
  },
  methods: {
    scrollHandler() {
      this.scrolled = window.scrollY > 10
    }
  }
}
</script>

<style></style>
