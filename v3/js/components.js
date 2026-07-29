class PcHeader extends HTMLElement {
  connectedCallback() {
    const path = location.pathname;
    const isHome = path.endsWith('/') || path.endsWith('/index.html') || path.endsWith('\\index.html');
    const servicesHref = isHome ? '#services' : 'index.html#services';
    const howHref = isHome ? '#how' : 'index.html#how';

    this.innerHTML = `
<nav class="nav" id="nav">
  <div class="nav__inner">
    <a href="index.html" class="nav__logo">
      <div class="nav__logo-icon">
        <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </div>
      ProformConnect
    </a>

    <ul class="nav__links">
      <li><a class="nav__link" href="${servicesHref}">Services</a></li>
      <li><a class="nav__link" href="${howHref}">How It Works</a></li>
    </ul>

    <a href="contact.html" class="nav__cta">
      Let's Talk
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </a>

    <button class="nav__burger" id="burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="nav__mobile" id="mobile-nav">
    <a href="${servicesHref}">Services</a>
    <a href="${howHref}">How It Works</a>
    <a href="contact.html" class="nav__mobile-cta">Let's Talk</a>
  </div>
</nav>`;
  }
}

class PcFooter extends HTMLElement {
  connectedCallback() {
    const path = location.pathname;
    const isHome = path.endsWith('/') || path.endsWith('/index.html') || path.endsWith('\\index.html');
    const servicesHref = isHome ? '#services' : 'index.html#services';
    const howHref = isHome ? '#how' : 'index.html#how';

    this.innerHTML = `
<footer>
  <div class="wrap">
    <div class="footer__grid">
      <div>
        <div class="footer__brand">
          <div class="footer__logo">
            <div class="footer__logo-icon">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            ProformConnect
          </div>
          <p class="footer__tagline">Outsourced client services built for law firms.</p>
        </div>
      </div>

      <div>
        <div class="footer__col-title">Services</div>
        <ul class="footer__links">
          <li><a href="${servicesHref}">Intake</a></li>
          <li><a href="${servicesHref}">Client Outreach</a></li>
          <li><a href="${servicesHref}">Document Assistance</a></li>
        </ul>
      </div>

      <div>
        <div class="footer__col-title">Company</div>
        <ul class="footer__links">
          <li><a href="${howHref}">How It Works</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
        </ul>
        <div class="footer__email">
          <div>connect@proformconnect.com</div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__bottom-brand">
        <div class="footer__logo-icon footer__logo-icon--sm">
          <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        ProformConnect
      </div>
      <a href="https://www.mammothshift-labs.com" target="_blank" rel="noopener" class="footer__powered">
        Powered by <img src="img/mammothshift-labs.png" alt="MammothShift Labs"> MammothShift Labs
      </a>
    </div>
  </div>
</footer>`;
  }
}

customElements.define('pc-header', PcHeader);
customElements.define('pc-footer', PcFooter);
