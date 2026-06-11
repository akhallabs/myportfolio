<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title">{{ $t('nav.contact') }}</h2>
        <div class="header-line"></div>
      </div>
      
      <div class="contact-links fade-in delay-1">
        <a href="mailto:akhallabs@proton.me" class="contact-card">
          <div class="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div class="contact-info">
            <h3>Email</h3>
            <p>akhallabs@proton.me</p>
          </div>
        </a>
        
        <a href="tg://openmessage?user_id=6706824344" class="contact-card">
          <div class="contact-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </div>
          <div class="contact-info">
            <h3>Telegram</h3>
            <p>Direct Message</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 6rem 0;
  background-color: var(--surface-color);
  border-top: 1px solid var(--border-color);
}

.section-header {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .contact-links {
    flex-direction: row;
  }
}

.contact-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: var(--bg-color);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.contact-info h3 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.contact-info p {
  font-size: 0.9rem;
  color: var(--text-secondary);
}
</style>
