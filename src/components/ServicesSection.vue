<script setup>
const services = ['mobile', 'pc', 'uiux', 'web'];
</script>

<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title">{{ $t('nav.services') }}</h2>
        <div class="header-line"></div>
      </div>
      
      <div class="services-grid">
        <div 
          class="service-card fade-in" 
          v-for="(service, index) in services" 
          :key="service"
          :class="`delay-${index % 3 + 1}`"
        >
          <div class="service-icon">
            <!-- Distinct minimal icons for each service -->
            <svg v-if="service === 'mobile'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            <svg v-else-if="service === 'pc'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <svg v-else-if="service === 'uiux'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            <svg v-else-if="service === 'web'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h3 class="service-title">{{ $t(`services.${service}.title`) }}</h3>
          <p class="service-desc">{{ $t(`services.${service}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 6rem 0;
  position: relative;
  background-color: var(--surface-color);
}

.section-header {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 500;
}

.header-line {
  width: 40px;
  height: 2px;
  background-color: var(--text-primary);
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

.service-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  padding: 2.5rem;
  border-radius: 16px;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
}

.service-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.service-card:hover::after {
  opacity: 1;
}

.service-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 1.5rem;
}

.service-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.service-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
}
</style>
