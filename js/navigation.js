/* AlagaLegal PH – GitHub Pages Safe Hash Routing with View Transitions API */
(function (global) {
  'use strict';

  const VALID_ROUTES = [
    'home',
    'situations',
    'guides',
    'checklist',
    'directory',
    'costs',
    'faq',
    'plan'
  ];

  const AlagaNav = {
    historyStack: ['home'],

    init() {
      document.addEventListener('click', (event) => {
        const routeTrigger = event.target.closest('[data-route]');
        if (routeTrigger) {
          event.preventDefault();
          const targetRoute = routeTrigger.getAttribute('data-route');
          this.navigate(targetRoute);
          return;
        }

        const backTrigger = event.target.closest('[data-back]');
        if (backTrigger) {
          event.preventDefault();
          this.goBack();
        }
      });

      window.addEventListener('hashchange', () => {
        const hashRoute = this.getRouteFromHash();
        this.activateView(hashRoute, false);
      });

      const initialRoute = this.getRouteFromHash();
      this.activateView(initialRoute, false);
    },

    getRouteFromHash() {
      const raw = (window.location.hash || '').replace(/^#/, '').split('?')[0].trim().toLowerCase();
      return VALID_ROUTES.includes(raw) ? raw : 'home';
    },

    navigate(route) {
      const clean = VALID_ROUTES.includes(route) ? route : 'home';
      if (window.location.hash !== `#${clean}`) {
        window.location.hash = `#${clean}`;
      } else {
        this.activateView(clean, true);
      }
    },

    goBack() {
      if (this.historyStack.length > 1) {
        this.historyStack.pop();
        const previous = this.historyStack[this.historyStack.length - 1] || 'home';
        this.navigate(previous);
      } else {
        this.navigate('home');
      }
    },

    activateView(route, pushHistory = true) {
      const target = VALID_ROUTES.includes(route) ? route : 'home';

      if (pushHistory && this.historyStack[this.historyStack.length - 1] !== target) {
        this.historyStack.push(target);
      }

      const performDomUpdate = () => {
        document.querySelectorAll('.app-view').forEach((section) => {
          const isMatch = section.id === `view-${target}`;
          section.hidden = !isMatch;
          section.classList.toggle('active', isMatch);
        });

        document.querySelectorAll('[data-route]').forEach((link) => {
          const isCurrent = link.getAttribute('data-route') === target;
          if (link.classList.contains('nav-link') || link.classList.contains('bottom-nav-item')) {
            link.classList.toggle('active', isCurrent);
            if (isCurrent) {
              link.setAttribute('aria-current', 'page');
            } else {
              link.removeAttribute('aria-current');
            }
          }
        });
      };

      const prefersReducedMotion =
        window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (typeof document.startViewTransition === 'function' && !prefersReducedMotion) {
        document.startViewTransition(() => performDomUpdate());
      } else {
        performDomUpdate();
      }

      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      const main = document.getElementById('main-content');
      if (main) {
        main.focus({ preventScroll: true });
      }

      document.dispatchEvent(new CustomEvent('alagalegal:routechange', { detail: { route: target } }));
    }
  };

  global.AlagaNav = AlagaNav;
})(window);