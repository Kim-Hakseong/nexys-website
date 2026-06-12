/* =========================================================
   NEXYS — shared interactions
   ========================================================= */
(function () {
  'use strict';

  /* ---- Sticky header background on scroll ---- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile overlay menu ---- */
  var burger = document.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
      var open = document.body.classList.contains('menu-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.querySelectorAll('.mobile-menu a').forEach(function (a) {
      a.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Stat count-up ---- */
  var stats = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && stats.length) {
    var sio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = parseFloat(el.getAttribute('data-count')), dur = 1300, t0 = null;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toString();
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target.toString();
        }
        requestAnimationFrame(step);
        sio.unobserve(el);
      });
    }, { threshold: 0.6 });
    stats.forEach(function (el) { sio.observe(el); });
  }

  /* ---- Case slider (drag + buttons + progress) ---- */
  document.querySelectorAll('[data-slider]').forEach(function (slider) {
    var track = slider.querySelector('.slider__track');
    var prev = slider.querySelector('[data-prev]');
    var next = slider.querySelector('[data-next]');
    var bar = slider.querySelector('.slider__progress span');
    if (!track) return;

    function stepSize() {
      var card = track.querySelector('.case-card');
      if (!card) return 320;
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 22);
      return card.getBoundingClientRect().width + gap;
    }
    function update() {
      var max = track.scrollWidth - track.clientWidth;
      var ratio = max > 0 ? track.scrollLeft / max : 0;
      if (bar) {
        var vis = Math.max(0.12, track.clientWidth / track.scrollWidth);
        bar.style.width = (vis * 100) + '%';
        bar.style.left = (ratio * (100 - vis * 100)) + '%';
      }
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max - 2;
    }
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -stepSize(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: stepSize(), behavior: 'smooth' }); });
    track.addEventListener('scroll', function () { window.requestAnimationFrame(update); }, { passive: true });
    window.addEventListener('resize', update);
    update();

    /* drag to scroll */
    var down = false, startX = 0, startScroll = 0, moved = 0;
    track.addEventListener('pointerdown', function (e) {
      down = true; moved = 0; startX = e.clientX; startScroll = track.scrollLeft;
      track.classList.add('dragging'); track.setPointerCapture(e.pointerId);
    });
    track.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX; moved += Math.abs(dx);
      track.scrollLeft = startScroll - dx;
    });
    function release() { down = false; track.classList.remove('dragging'); }
    track.addEventListener('pointerup', release);
    track.addEventListener('pointercancel', release);
    track.addEventListener('click', function (e) { if (moved > 8) { e.preventDefault(); } }, true);
  });

  /* ---- Cases filter ---- */
  var filterBar = document.querySelector('[data-filter]');
  if (filterBar) {
    var grid = document.querySelector('[data-filter-grid]');
    filterBar.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBar.querySelectorAll('button').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var f = btn.getAttribute('data-cat');
        grid.querySelectorAll('[data-cats]').forEach(function (item) {
          var show = f === 'all' || item.getAttribute('data-cats').split(' ').indexOf(f) > -1;
          item.classList.toggle('hidden', !show);
        });
      });
    });
  }

  /* ---- Contact form (front-end only) ---- */
  var form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = form.querySelector('[data-form-ok]');
      form.querySelectorAll('input,textarea,select,button').forEach(function (el) { el.disabled = true; });
      if (ok) { ok.hidden = false; ok.scrollIntoView ? null : null; }
    });
  }

  /* ---- Footer year ---- */
  var yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Accordion (challenges) ---- */
  document.querySelectorAll('[data-accordion]').forEach(function (acc) {
    var items = [].slice.call(acc.querySelectorAll('.acc-item'));
    function setOpen(item, open) {
      var panel = item.querySelector('.acc-panel');
      var head = item.querySelector('.acc-head');
      item.classList.toggle('is-open', open);
      panel.style.maxHeight = open ? panel.scrollHeight + 'px' : '0px';
      if (head) head.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    items.forEach(function (item) {
      setOpen(item, item.classList.contains('is-open'));
      var head = item.querySelector('.acc-head');
      head.addEventListener('click', function () {
        var willOpen = !item.classList.contains('is-open');
        items.forEach(function (o) { if (o !== item) setOpen(o, false); });
        setOpen(item, willOpen);
      });
    });
    window.addEventListener('resize', function () {
      items.forEach(function (o) { if (o.classList.contains('is-open')) setOpen(o, true); });
    });
  });

  /* ---- Industries (horizontal accordion + sector toggle) ---- */
  document.querySelectorAll('[data-industries]').forEach(function (ind) {
    var title = ind.querySelector('[data-ind-title]');
    var sectors = [].slice.call(ind.querySelectorAll('.ind__sector'));
    var sets = [].slice.call(ind.querySelectorAll('.ind__set'));

    function setTitle(panel) {
      if (!title || !panel) return;
      var t = panel.getAttribute('data-title') || '';
      title.innerHTML = '<span class="lo">' + t + '</span><span class="accent">.</span>';
    }
    function activatePanel(set, panel) {
      set.querySelectorAll('.ind-panel').forEach(function (p) { p.classList.toggle('is-active', p === panel); });
      setTitle(panel);
    }
    sets.forEach(function (set) {
      var panels = [].slice.call(set.querySelectorAll('.ind-panel'));
      panels.forEach(function (panel) {
        panel.addEventListener('mouseenter', function () { activatePanel(set, panel); });
        panel.addEventListener('click', function () { activatePanel(set, panel); });
      });
    });
    function showSector(name) {
      sectors.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-sector') === name); });
      sets.forEach(function (set) {
        var on = set.getAttribute('data-sector') === name;
        set.classList.toggle('is-active', on);
        if (on) {
          var first = set.querySelector('.ind-panel');
          activatePanel(set, first);
        }
      });
    }
    sectors.forEach(function (b) {
      b.addEventListener('click', function () { showSector(b.getAttribute('data-sector')); });
    });
    // init
    var initSet = sets[0];
    if (initSet) { initSet.classList.add('is-active'); activatePanel(initSet, initSet.querySelector('.ind-panel')); }
  });
})();
