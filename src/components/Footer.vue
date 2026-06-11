<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-logo">Akhal<span>Labs</span></div>
      <p class="footer-rights">{{ $t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 3rem 0;
  border-top: 1px solid var(--border-color);
  background-color: var(--bg-color);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

@media (min-width: 640px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-logo {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.02em;
}

.footer-logo span {
  font-weight: 400;
  color: var(--text-secondary);
}

.footer-rights {
  font-size: 0.85rem;
  color: var(--text-secondary);
}
</style>
