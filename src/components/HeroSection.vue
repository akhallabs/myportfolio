<script setup>
// Hero section logic
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero-content">
      <div class="hero-badge fade-in">Akhal Labs</div>
      <h1 class="hero-title fade-in delay-1">{{ $t('hero.title') }}</h1>
      <p class="hero-subtitle fade-in delay-2">{{ $t('hero.subtitle') }}</p>
      
      <div class="hero-actions fade-in delay-3">
        <a href="#services" class="btn btn-primary">{{ $t('nav.services') }}</a>
        <a href="#contact" class="btn btn-secondary">{{ $t('nav.contact') }}</a>
      </div>
    </div>
    
    <div class="hero-gradient"></div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px; /* offset for navbar */
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
}

.hero-badge {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  /* Clean gradient text effect, no neon */
  background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: 3rem;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: #ffffff;
  color: #000000;
  border: 1px solid #ffffff;
}

.btn-primary:hover {
  background: #e0e0e0;
  color: #000000;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.hero-gradient {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%);
  z-index: 1;
  pointer-events: none;
}

@media (max-width: 640px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
}
</style>
