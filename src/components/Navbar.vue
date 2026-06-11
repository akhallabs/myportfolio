<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isOpen = ref(false);
const langs = ['en', 'ru', 'tr', 'tk'];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const changeLang = (l) => {
  locale.value = l;
  isOpen.value = false;
};
</script>

<template>
  <header class="navbar fade-in">
    <div class="container nav-container">
      <div class="logo">Akhal<span>Labs</span></div>
      
      <nav class="nav-links">
        <a href="#home" class="nav-item">{{ $t('nav.home') }}</a>
        <a href="#services" class="nav-item">{{ $t('nav.services') }}</a>
        <a href="#contact" class="nav-item">{{ $t('nav.contact') }}</a>
      </nav>
      
      <div class="lang-switcher">
        <button class="current-lang" @click="toggleMenu">
          <span class="lang-text">{{ locale.toUpperCase() }}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        
        <div class="lang-menu" v-if="isOpen">
          <button 
            v-for="lang in langs" 
            :key="lang" 
            @click="changeLang(lang)" 
            :class="{ active: locale === lang }"
            class="lang-option"
          >
            {{ lang.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: rgba(15, 15, 17, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: #fff;
}
.logo span {
  color: var(--text-secondary);
  font-weight: 400;
}

.nav-links {
  display: none;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
    gap: 2.5rem;
  }
}

.nav-item {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
}

.nav-item:hover {
  color: #fff;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 1px;
  background-color: #fff;
  transition: width 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}

.lang-switcher {
  position: relative;
}

.current-lang {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.current-lang:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.lang-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #161619;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  min-width: 100px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  animation: slideDown 0.2s ease forwards;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.lang-option {
  padding: 0.5rem 1rem;
  text-align: left;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.2s;
}

.lang-option:hover {
  background: var(--surface-hover);
  color: #fff;
}

.lang-option.active {
  color: #fff;
  background: rgba(255,255,255,0.05);
}
</style>
