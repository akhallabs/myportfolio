<script setup>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

/* Optional global smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}
</style>
