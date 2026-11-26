/**
 * A3 INTERACTIVE VERTICAL COMIC BOOK — 8 PAGES
 * - Page 1: Cover (cover page.mp4, 1.5cm play button)
 * - Page 2: 3-panel vertical comic (2.1, 2.2, 2.3)
 * - Page 3: 3-panel vertical comic (3.1, 3.2, and 3.3 frame with manual swipe 3.3.2 -> 3.3.1)
 * - Page 4: 3-panel vertical comic (4.1, 4.2, 4.3)
 * - Page 5: Full A3 video (5.mp4, plays on play button click)
 * - Page 6: 3-panel vertical comic (6.1, 6.2, 6.3)
 * - Page 7: Full A3 image (7.png)
 * - Page 8: 8.1 scroll -> 1.5cm scroll-up icon -> 8.2 slide-up -> 1cm zoom-in -> 8.3 zoom
 * - Manual realistic analog page turn + iPad support
 */

(function () {
  'use strict';

  // =========================================================================
  // COMIC PAGES MANIFEST (8 PAGES TOTAL)
  // =========================================================================
  const PAGES = [
    {
      id: 'cover',
      label: 'Page 1',
      fullBleed: true,
      panels: [{ type: 'video', src: 'assets/cover page.mp4', loop: true }]
    },
    {
      id: 'page-1b',
      label: 'Page 2',
      panels: [
        { type: 'video', src: 'assets/with_border.mp4', flex: 5.0, loop: true },
        { type: 'video', src: 'assets/page_not_trans.mp4', flex: 7.5, loop: true },
        { type: 'video', src: 'assets/version 4.mp4', flex: 14.0, loop: true }
      ]
    },
    {
      id: 'page-2',
      label: 'Page 3',
      fitPanels: true,
      panels: [
        { type: 'video', src: 'assets/page 2.1.mp4', flex: 15, aspectRatio: '3508 / 1500', loop: true },
        { type: 'video', src: 'assets/page 2.2.mp4', flex: 23, aspectRatio: '3508 / 2300', loop: true },
        { type: 'video', src: 'assets/page 2.3.mp4', flex: 18, aspectRatio: '3508 / 1800', loop: true }
      ]
    },
    {
      id: 'page-3',
      label: 'Page 3',
      panels: [
        { type: 'video', src: 'assets/page 3.1.mp4', flex: 17, loop: true },
        { type: 'image', src: 'assets/page 3.2.png', flex: 16 },
        {
          type: 'swipe-panel',
          flex: 17,
          frameSrc: 'assets/page 3.3 frame.png',
          slides: [
            { type: 'video', src: 'assets/page 3.3.2.mp4', loop: true },
            { type: 'video', src: 'assets/page 3.3.1.mp4', loop: true }
          ]
        }
      ]
    },
    {
      id: 'page-4',
      label: 'Page 4',
      panels: [
        { type: 'video', src: 'assets/page 4.1.mp4', flex: 15, loop: true },
        { type: 'video', src: 'assets/page 4.2.mp4', flex: 23.5, loop: true },
        { type: 'video', src: 'assets/page 4.3.mp4', flex: 12, loop: true }
      ]
    },
    {
      id: 'page-5',
      label: 'Page 5',
      fullBleed: true,
      panels: [{ type: 'video', src: 'assets/page 5.mp4', loop: true }]
    },
    {
      id: 'page-6',
      label: 'Page 6',
      panels: [
        { type: 'video', src: 'assets/page 6.1.mp4', flex: 14, loop: true },
        { type: 'video', src: 'assets/page 6.2.mp4', flex: 20.5, loop: true },
        { type: 'video', src: 'assets/page 6.3.mp4', flex: 15, loop: true }
      ]
    },
    {
      id: 'page-7',
      label: 'Page 7',
      fullBleed: true,
      panels: [{ type: 'image', src: 'assets/page 7.png', contain: true }]
    },
    {
      id: 'page-8',
      label: 'Page 8',
      layout: 'page8',
      scroll1Src: 'assets/page 8.1 scroll.mp4',
      scroll2Src: 'assets/page 8.2 scrool.mp4',
      zoom3Src: 'assets/page 8.3 zoom.mp4'
    },
    {
      id: 'page-9',
      label: 'Page 9',
      layout: 'page9',
      videos: [
        'assets/page 9.1.mp4',
        'assets/page 9.2.mp4',
        'assets/page 9.3.mp4',
        'assets/page 9.4.mp4',
        'assets/page 9.5.mp4'
      ]
    },
    {
      id: 'page-10',
      label: 'Page 11',
      fullBleed: true,
      panels: [{ type: 'video', src: 'assets/page 10 comp 3.mp4', loop: true }]
    },
    {
      id: 'page-11',
      label: 'Page 11',
      panels: [
        { type: 'video', src: 'assets/page 11.mp4', flex: 25, loop: true },
        { type: 'video', src: 'assets/page 11.2.mp4', flex: 23, loop: true }
      ]
    },
    {
      id: 'page-12',
      label: 'Page 13',
      fitPanels: true,
      panels: [
        { type: 'video', src: 'assets/page 12.1.mp4', flex: 18, aspectRatio: '3508 / 1800', loop: true },
        { type: 'video', src: 'assets/page 12.2.mp4', flex: 20, aspectRatio: '3508 / 2000', loop: true },
        { type: 'video', src: 'assets/page 12.3.mp4', flex: 18, aspectRatio: '3508 / 1800', loop: true }
      ]
    },
    {
      id: 'page-14',
      label: 'Page 14',
      fullBleed: true,
      panels: [{ type: 'video', src: 'assets/page 14 new comp.mp4', loop: true }]
    },
    {
      id: 'page-15',
      label: 'Page 15',
      layout: 'page15',
      bgSrc: 'assets/page 15 bg.mp4',
      topVideoSrc: 'assets/page 15 new.mp4',
      gifSrc: 'assets/page 15.3 web.gif'
    },
    {
      id: 'page-16',
      label: 'Page 16',
      fullBleed: true,
      panels: [{ type: 'image', src: 'assets/credits-new.jpg', contain: true }]
    },
    {
      id: 'page-17',
      label: 'Page 17',
      fullBleed: true,
      panels: [{ type: 'image', src: 'assets/credits-02.jpg', contain: true }]
    }
  ];

  // =========================================================================
  // PAPER AUDIO
  // =========================================================================
  class PaperAudio {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (AC) this.ctx = new AC();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    }

    playTurn() {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const dur = 0.34;
      const buf = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * dur), this.ctx.sampleRate);
      const data = buf.getChannelData(0);

      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < data.length; i++) {
        const w = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + w * 0.0555179;
        b1 = 0.99332 * b1 + w * 0.0750759;
        b2 = 0.96900 * b2 + w * 0.1538520;
        data[i] = (b0 + b1 + b2 + w * 0.5362) * 0.15;
      }

      const src = this.ctx.createBufferSource();
      src.buffer = buf;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, now);
      filter.frequency.exponentialRampToValueAtTime(720, now + 0.1);
      filter.frequency.exponentialRampToValueAtTime(300, now + dur);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      src.start(now);
      src.stop(now + dur);
    }
  }

  const paperAudio = new PaperAudio();

  // =========================================================================
  // EXCLUSIVE VIDEO CONTROLLER
  // =========================================================================
  class ComicVideoController {
    constructor() {
      this.entries = []; // { video, btn, pageIndex }
      this.ambientEntries = []; // { video, pageIndex } auto-looping page backgrounds
      this.stopCallbacks = []; // extra stop handlers (e.g. Page 15 GIF)
    }

    register(video, btn, pageIndex) {
      video.pause();
      video.currentTime = 0;

      const syncUI = () => {
        const playing = !video.paused && !video.ended;
        btn.textContent = playing ? '❚❚' : '▶';
        btn.classList.toggle('is-playing', playing);
        btn.setAttribute('aria-label', playing ? 'Pause video' : 'Play video');
      };

      const onActivate = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggle(video);
      };

      btn.addEventListener('click', onActivate);
      video.addEventListener('play', syncUI);
      video.addEventListener('pause', syncUI);
      video.addEventListener('ended', syncUI);

      syncUI();
      this.entries.push({ video, btn, pageIndex });
    }

    playExclusive(targetVideo) {
      this.pauseAllExcept(targetVideo);
      if (targetVideo.ended) {
        targetVideo.currentTime = 0;
      }
      targetVideo.play().catch(() => {
        targetVideo.muted = true;
        targetVideo.play().catch(() => {});
      });
    }

    toggle(targetVideo) {
      if (targetVideo.paused || targetVideo.ended) {
        this.playExclusive(targetVideo);
      } else {
        targetVideo.pause();
      }
    }

    pauseAllExcept(activeVideo) {
      for (const entry of this.entries) {
        if (entry.video !== activeVideo && !entry.video.paused) {
          entry.video.pause();
        }
      }
      if (activeVideo !== null) {
        for (const fn of this.stopCallbacks) fn();
      }
    }

    pauseAll() {
      this.pauseAllExcept(null);
      for (const fn of this.stopCallbacks) fn();
    }

    updatePreload(activeIndex) {
      for (const entry of this.entries) {
        const near = Math.abs(entry.pageIndex - activeIndex) <= 1;
        const desired = near ? 'auto' : 'metadata';
        if (entry.video.preload !== desired) {
          entry.video.preload = desired;
        }
      }
      for (const amb of this.ambientEntries) {
        const near = Math.abs(amb.pageIndex - activeIndex) <= 1;
        amb.video.preload = near ? 'auto' : 'metadata';
        if (amb.pageIndex === activeIndex) {
          amb.video.play().catch(() => {
            amb.video.muted = true;
            amb.video.play().catch(() => {});
          });
        } else if (!amb.video.paused) {
          amb.video.pause();
        }
      }
    }

    startAmbientForPage(pageIndex) {
      for (const amb of this.ambientEntries) {
        if (amb.pageIndex === pageIndex && amb.video.paused) {
          amb.video.play().catch(() => {
            amb.video.muted = true;
            amb.video.play().catch(() => {});
          });
        }
      }
    }
  }

  // =========================================================================
  // VIDEO ELEMENT HELPER
  // =========================================================================
  function createVideoWithButton(src, pageIndex, videoCtrl, loop) {
    const video = document.createElement('video');
    video.className = 'panel-video';
    video.src = encodeURI(src);
    video.playsInline = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.loop = Boolean(loop);
    video.preload = pageIndex <= 1 ? 'auto' : 'metadata';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'panel-play-btn';
    btn.textContent = '▶';
    btn.setAttribute('aria-label', 'Play video');

    videoCtrl.register(video, btn, pageIndex);
    return { video, btn };
  }

  // =========================================================================
  // PAGE 3 PANEL 3: FIXED FRAME + MANUAL HORIZONTAL SWIPE (3.3.2 <-> 3.3.1)
  // =========================================================================
  function createSwipePanel(panelSpec, pageIndex, videoCtrl) {
    const box = document.createElement('div');
    box.className = 'panel-box swipe-panel-box';
    if (panelSpec.flex) box.style.flex = String(panelSpec.flex);

    const track = document.createElement('div');
    track.className = 'swipe-track';

    const slideVideos = [];
    panelSpec.slides.forEach((slideSpec) => {
      const slide = document.createElement('div');
      slide.className = 'swipe-slide';
      const { video, btn } = createVideoWithButton(slideSpec.src, pageIndex, videoCtrl, slideSpec.loop);
      slideVideos.push(video);
      slide.appendChild(video);
      slide.appendChild(btn);
      track.appendChild(slide);
    });

    const frame = document.createElement('img');
    frame.className = 'panel-frame-overlay';
    frame.src = encodeURI(panelSpec.frameSrc);
    frame.alt = '';
    frame.draggable = false;

    box.appendChild(track);
    box.appendChild(frame);

    let currentSlide = 0;
    let dragging = false;
    let hasMoved = false;
    let startX = 0;
    let startY = 0;
    let deltaX = 0;
    let lockedAxis = null;

    const setSlide = (idx, autoPlay) => {
      const clamped = Math.max(0, Math.min(slideVideos.length - 1, idx));
      const changed = clamped !== currentSlide;
      if (changed) {
        slideVideos[currentSlide].pause();
        slideVideos[currentSlide].currentTime = 0;
      }
      currentSlide = clamped;
      track.classList.remove('is-dragging');
      track.style.transform = `translate3d(${-currentSlide * 50}%, 0, 0)`;

      if (autoPlay && changed) {
        videoCtrl.playExclusive(slideVideos[currentSlide]);
      }
    };

    const onStart = (e) => {
      if (e.target.closest('.panel-play-btn')) return;
      const pt = e.touches ? e.touches[0] : e;
      dragging = true;
      hasMoved = false;
      startX = pt.clientX;
      startY = pt.clientY;
      deltaX = 0;
      lockedAxis = null;
      if (e.touches) e.stopPropagation();
    };

    const onMove = (e) => {
      if (!dragging) return;
      const pt = e.touches ? e.touches[0] : e;
      const dx = pt.clientX - startX;
      const dy = pt.clientY - startY;

      if (!lockedAxis && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        lockedAxis = Math.abs(dx) >= Math.abs(dy) ? 'x' : 'y';
      }
      if (lockedAxis !== 'x') return;

      if (Math.abs(dx) > 4) hasMoved = true;
      if (e.cancelable) e.preventDefault();
      e.stopPropagation();
      track.classList.add('is-dragging');

      const panelW = box.getBoundingClientRect().width || 300;
      const basePx = -currentSlide * panelW;
      let nextPx = basePx + dx;
      if (nextPx > 0) nextPx *= 0.25;
      if (nextPx < -panelW) nextPx = -panelW + (nextPx + panelW) * 0.25;

      deltaX = dx;
      track.style.transform = `translate3d(${nextPx}px, 0, 0)`;
    };

    const onEnd = (e) => {
      if (!dragging) return;
      dragging = false;
      if (lockedAxis === 'x' && hasMoved) {
        if (e.stopPropagation) e.stopPropagation();
        const panelW = box.getBoundingClientRect().width || 300;
        const threshold = Math.min(60, panelW * 0.18);
        if (deltaX < -threshold && currentSlide < slideVideos.length - 1) {
          setSlide(currentSlide + 1, true);
        } else if (deltaX > threshold && currentSlide > 0) {
          setSlide(currentSlide - 1, true);
        } else {
          setSlide(currentSlide, false);
        }
      } else {
        setSlide(currentSlide, false);
      }
      lockedAxis = null;
    };

    box.addEventListener('mousedown', onStart);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);

    box.addEventListener('touchstart', onStart, { passive: true });
    box.addEventListener('touchmove', onMove, { passive: false });
    box.addEventListener('touchend', onEnd, { passive: true });
    box.addEventListener('touchcancel', onEnd, { passive: true });

    return box;
  }

  // =========================================================================
  // PAGE 8: SCROLL-UP -> SLIDE 8.2 -> PINCH/TAP ZOOM-IN -> 8.3 ZOOM
  // =========================================================================
  function createPage8Stage(pageSpec, pageIndex, videoCtrl) {
    const stage = document.createElement('div');
    stage.className = 'page8-stage';

    // Layer 1: page 8.1 scroll.mp4
    const layer1 = document.createElement('div');
    layer1.className = 'page8-layer page8-layer-1';
    const v1 = createVideoWithButton(pageSpec.scroll1Src, pageIndex, videoCtrl, false);
    layer1.appendChild(v1.video);
    layer1.appendChild(v1.btn);

    // Layer 2: page 8.2 scrool.mp4
    const layer2 = document.createElement('div');
    layer2.className = 'page8-layer page8-layer-2';
    const v2 = createVideoWithButton(pageSpec.scroll2Src, pageIndex, videoCtrl, false);
    layer2.appendChild(v2.video);
    layer2.appendChild(v2.btn);

    // Layer 3: page 8.3 zoom.mp4
    const layer3 = document.createElement('div');
    layer3.className = 'page8-layer page8-layer-3';
    const v3 = createVideoWithButton(pageSpec.zoom3Src, pageIndex, videoCtrl, false);
    layer3.appendChild(v3.video);
    layer3.appendChild(v3.btn);

    // 1.5cm scroll-up icon at top of page (shown when 8.1 ends)
    const scrollUpBtn = document.createElement('button');
    scrollUpBtn.type = 'button';
    scrollUpBtn.className = 'p8-scroll-up-btn';
    scrollUpBtn.innerHTML = '&#8593;';
    scrollUpBtn.setAttribute('aria-label', 'Scroll up to continue');

    // 1cm low-opacity zoom-in button at bottom of page (shown when 8.2 ends)
    const zoomInBtn = document.createElement('button');
    zoomInBtn.type = 'button';
    zoomInBtn.className = 'p8-zoom-in-btn';
    zoomInBtn.setAttribute('aria-label', 'Zoom in');
    zoomInBtn.innerHTML =
      '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>';

    // Reset button at the top-left corner of Page 9 to restart the sequence
    const resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'p8-reset-btn';
    resetBtn.innerHTML = '&#8634;';
    resetBtn.setAttribute('aria-label', 'Reset page');

    stage.appendChild(layer1);
    stage.appendChild(layer2);
    stage.appendChild(layer3);
    stage.appendChild(resetBtn);
    stage.appendChild(scrollUpBtn);
    stage.appendChild(zoomInBtn);

    let step = 1; // 1 = on 8.1, 2 = on 8.2, 3 = on 8.3
    let canScrollUp = false;
    let canZoomIn = false;

    const resetPage = () => {
      [v1.video, v2.video, v3.video].forEach((vid) => {
        vid.pause();
        vid.currentTime = 0;
      });
      step = 1;
      canScrollUp = false;
      canZoomIn = false;
      scrollUpBtn.classList.remove('is-ready');
      zoomInBtn.classList.remove('is-ready');
      layer1.classList.remove('is-scrolled-away');
      layer2.classList.remove('is-visible');
      layer3.classList.remove('is-visible');
    };

    resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      resetPage();
    });

    const triggerSlideUpTo2 = () => {
      if (step !== 1 || !canScrollUp) return;
      step = 2;
      canScrollUp = false;
      scrollUpBtn.classList.remove('is-ready');
      layer1.classList.add('is-scrolled-away');
      layer2.classList.add('is-visible');
      videoCtrl.playExclusive(v2.video);
    };

    const triggerZoomInTo3 = () => {
      if (step !== 2 || !canZoomIn) return;
      step = 3;
      canZoomIn = false;
      zoomInBtn.classList.remove('is-ready');
      layer3.classList.add('is-visible');
      videoCtrl.playExclusive(v3.video);
    };

    v1.video.addEventListener('ended', () => {
      if (step === 1) {
        canScrollUp = true;
        scrollUpBtn.classList.add('is-ready');
      }
    });

    v2.video.addEventListener('ended', () => {
      if (step === 2) {
        canZoomIn = true;
        zoomInBtn.classList.add('is-ready');
      }
    });

    scrollUpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      triggerSlideUpTo2();
    });

    zoomInBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      triggerZoomInTo3();
    });

    // Vertical scroll/swipe up gesture for Step 1 -> Step 2
    let touchStartY = 0;
    let pinchStartDist = 0;

    stage.addEventListener('touchstart', (e) => {
      if (
        e.target.closest('.panel-play-btn') ||
        e.target.closest('.p8-reset-btn') ||
        e.target.closest('.p8-scroll-up-btn') ||
        e.target.closest('.p8-zoom-in-btn')
      ) {
        return;
      }
      if (e.touches.length === 1 && step === 1 && canScrollUp) {
        touchStartY = e.touches[0].clientY;
      } else if (e.touches.length === 2 && step === 2 && canZoomIn) {
        pinchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    stage.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && step === 1 && canScrollUp) {
        const dy = e.touches[0].clientY - touchStartY;
        if (dy < -36) {
          e.preventDefault();
          e.stopPropagation();
          triggerSlideUpTo2();
        }
      } else if (e.touches.length === 2 && step === 2 && canZoomIn && pinchStartDist > 0) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        if (dist > pinchStartDist * 1.18) {
          e.preventDefault();
          e.stopPropagation();
          triggerZoomInTo3();
        }
      }
    }, { passive: false });

    // Mouse wheel / trackpad scroll & pinch-zoom support on desktop
    stage.addEventListener('wheel', (e) => {
      if (step === 1 && canScrollUp && Math.abs(e.deltaY) > 12) {
        e.preventDefault();
        triggerSlideUpTo2();
      } else if (step === 2 && canZoomIn && e.ctrlKey && e.deltaY < -4) {
        e.preventDefault();
        triggerZoomInTo3();
      }
    }, { passive: false });

    return stage;
  }

  // =========================================================================
  // PAGE 9: FULL-PAGE SEQUENTIAL VIDEO PLAYER (9.1 -> 9.2 -> 9.3 -> 9.4 -> 9.5)
  // =========================================================================
  function createPage9Stage(pageSpec, pageIndex, videoCtrl) {
    const stage = document.createElement('div');
    stage.className = 'page9-stage';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'panel-play-btn';
    btn.textContent = '▶';
    btn.setAttribute('aria-label', 'Play video');

    let currentSeq = 0;
    let hasFinishedCurrent = false;

    const videos = pageSpec.videos.map((src, i) => {
      const video = document.createElement('video');
      video.className = 'page9-video' + (i === 0 ? ' is-current' : '');
      video.src = encodeURI(src);
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.loop = false;
      video.preload = 'metadata';
      video.pause();
      video.currentTime = 0;

      const syncBtn = () => {
        if (i !== currentSeq) return;
        const playing = !video.paused && !video.ended;
        btn.textContent = playing ? '❚❚' : '▶';
        btn.classList.toggle('is-playing', playing);
        btn.setAttribute('aria-label', playing ? 'Pause video' : 'Play next video');
      };

      video.addEventListener('play', syncBtn);
      video.addEventListener('pause', syncBtn);
      video.addEventListener('ended', () => {
        if (i === currentSeq) {
          hasFinishedCurrent = true;
          syncBtn();
        }
      });

      videoCtrl.entries.push({ video, btn, pageIndex });
      stage.appendChild(video);
      return video;
    });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const activeVid = videos[currentSeq];
      if (!activeVid.paused && !activeVid.ended) {
        activeVid.pause();
        return;
      }

      if (hasFinishedCurrent) {
        activeVid.classList.remove('is-current');
        currentSeq = (currentSeq + 1) % videos.length;
        hasFinishedCurrent = false;
        const nextVid = videos[currentSeq];
        nextVid.currentTime = 0;
        nextVid.classList.add('is-current');
        videoCtrl.playExclusive(nextVid);
      } else {
        videoCtrl.playExclusive(activeVid);
      }
    });

    stage.appendChild(btn);
    return stage;
  }

  // =========================================================================
  // PAGE 15: LOOPING BG + TOP-LEFT 15.1 (PLAY AT 3cm/4cm) + SLIDE-UP 15.3 GIF
  // =========================================================================
  function createPage15Stage(pageSpec, pageIndex, videoCtrl) {
    const stage = document.createElement('div');
    stage.className = 'page15-stage';

    // 1. Full-page looping background video (loops automatically on page turn)
    const bgVideo = document.createElement('video');
    bgVideo.className = 'page15-bg-video panel-video';
    bgVideo.src = encodeURI(pageSpec.bgSrc);
    bgVideo.playsInline = true;
    bgVideo.setAttribute('playsinline', '');
    bgVideo.setAttribute('webkit-playsinline', '');
    bgVideo.loop = true;
    bgVideo.muted = true;
    bgVideo.preload = 'metadata';
    videoCtrl.ambientEntries.push({ video: bgVideo, pageIndex });
    stage.appendChild(bgVideo);

    // 2. Top-left video page 15.1.mp4 (1cm from top, 2cm from left)
    //    with its play button placed at 3cm from top, 4cm from left of the page
    const topPanel = document.createElement('div');
    topPanel.className = 'page15-panel-1';
    const { video: topVideo, btn: topPlayBtn } = createVideoWithButton(
      pageSpec.topVideoSrc,
      pageIndex,
      videoCtrl,
      true
    );
    topPlayBtn.classList.add('page15-play-btn');
    topPanel.appendChild(topVideo);
    stage.appendChild(topPanel);
    stage.appendChild(topPlayBtn);

    // 3. Bottom-right page 15.3.gif (plays on pressing slide-up button, stops on pressing again)
    const gifBox = document.createElement('div');
    gifBox.className = 'page15-gif-box';

    const gifImg = document.createElement('img');
    gifImg.className = 'page15-gif-img panel-image';
    gifImg.alt = '';
    gifImg.draggable = false;

    const freezeCanvas = document.createElement('canvas');
    freezeCanvas.className = 'page15-gif-canvas';

    gifBox.appendChild(gifImg);
    gifBox.appendChild(freezeCanvas);
    stage.appendChild(gifBox);

    const slideUpBtn = document.createElement('button');
    slideUpBtn.type = 'button';
    slideUpBtn.className = 'page15-slide-up-btn';
    slideUpBtn.innerHTML = '&#8593;';
    slideUpBtn.setAttribute('aria-label', 'Play or stop animation');

    let isGifPlaying = false;

    const stopGif = () => {
      if (!isGifPlaying) return;
      isGifPlaying = false;
      if (gifImg.complete && gifImg.naturalWidth > 0) {
        freezeCanvas.width = gifImg.naturalWidth;
        freezeCanvas.height = gifImg.naturalHeight;
        const cctx = freezeCanvas.getContext('2d');
        cctx.clearRect(0, 0, freezeCanvas.width, freezeCanvas.height);
        try {
          cctx.drawImage(gifImg, 0, 0);
        } catch (_) {}
        freezeCanvas.style.display = 'block';
        gifImg.style.display = 'none';
      }
      gifImg.removeAttribute('src');
      slideUpBtn.classList.remove('is-active');
      slideUpBtn.innerHTML = '&#8593;';
    };

    const startGif = () => {
      videoCtrl.pauseAllExcept(null);
      isGifPlaying = true;
      freezeCanvas.style.display = 'none';
      gifImg.style.display = 'block';
      gifImg.src = encodeURI(pageSpec.gifSrc) + '?t=' + Date.now();
      gifBox.classList.add('is-visible');
      slideUpBtn.classList.add('is-active');
      slideUpBtn.innerHTML = '❚❚';
    };

    videoCtrl.stopCallbacks.push(stopGif);

    slideUpBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isGifPlaying) {
        stopGif();
      } else {
        startGif();
      }
    });
    stage.appendChild(slideUpBtn);

    return stage;
  }

  // =========================================================================
  // DOM BUILDER FOR ALL COMIC PAGES
  // =========================================================================
  function createMediaPanel(panelSpec, pageIndex, videoCtrl) {
    if (panelSpec.type === 'swipe-panel') {
      return createSwipePanel(panelSpec, pageIndex, videoCtrl);
    }

    const box = document.createElement('div');
    box.className = 'panel-box';
    if (panelSpec.flex) box.style.flex = String(panelSpec.flex);
    if (panelSpec.aspectRatio) box.style.aspectRatio = panelSpec.aspectRatio;

    if (panelSpec.type === 'video') {
      const { video, btn } = createVideoWithButton(panelSpec.src, pageIndex, videoCtrl, panelSpec.loop);
      box.appendChild(video);
      box.appendChild(btn);
    } else {
      const img = document.createElement('img');
      img.className = 'panel-image' + (panelSpec.contain ? ' contain' : '');
      img.src = encodeURI(panelSpec.src);
      img.alt = '';
      img.decoding = 'async';
      img.draggable = false;
      box.appendChild(img);
    }

    return box;
  }

  function buildPages(stackEl, videoCtrl) {
    return PAGES.map((pageSpec, idx) => {
      const layer = document.createElement('div');
      layer.className = 'page-layer';
      layer.dataset.pageIndex = String(idx);

      if (pageSpec.layout === 'page8') {
        layer.appendChild(createPage8Stage(pageSpec, idx, videoCtrl));
      } else if (pageSpec.layout === 'page9') {
        layer.appendChild(createPage9Stage(pageSpec, idx, videoCtrl));
      } else if (pageSpec.layout === 'page15') {
        layer.appendChild(createPage15Stage(pageSpec, idx, videoCtrl));
      } else {
        const sheet = document.createElement('div');
        sheet.className =
          'a3-sheet' +
          (pageSpec.fullBleed ? ' full-bleed' : '') +
          (pageSpec.fitPanels ? ' fit-panels-sheet' : '');

        const container = document.createElement('div');
        container.className = 'panels-container' + (pageSpec.fitPanels ? ' fit-panels' : '');
        pageSpec.panels.forEach((p) => {
          container.appendChild(createMediaPanel(p, idx, videoCtrl));
        });

        sheet.appendChild(container);
        layer.appendChild(sheet);
      }

      stackEl.appendChild(layer);
      return layer;
    });
  }

  // =========================================================================
  // CLIP POLYGON HELPER (Sutherland-Hodgman half-plane clip)
  // =========================================================================
  function clipByHalfPlane(poly, nx, ny, ox, oy) {
    const out = [];
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % poly.length];
      const da = (a.x - ox) * nx + (a.y - oy) * ny;
      const db = (b.x - ox) * nx + (b.y - oy) * ny;
      if (da <= 0) out.push({ x: a.x, y: a.y });
      if ((da < 0) !== (db < 0)) {
        const t = da / (da - db);
        out.push({ x: a.x + t * (b.x - a.x), y: a.y + t * (b.y - a.y) });
      }
    }
    return out;
  }

  function toCSSPolygon(pts) {
    if (!pts.length) return 'polygon(0px 0px)';
    return 'polygon(' + pts.map((p) => `${p.x.toFixed(2)}px ${p.y.toFixed(2)}px`).join(', ') + ')';
  }

  // =========================================================================
  // MANUAL ANALOG BOOK PAGE-TURN ENGINE
  // =========================================================================
  class AnalogComicBook {
    constructor(pageLayers, videoCtrl) {
      this.layers = pageLayers;
      this.videoCtrl = videoCtrl;
      this.book = document.getElementById('comicBook');
      this.canvas = document.getElementById('curlCanvas');
      this.ctx = this.canvas.getContext('2d');

      this.gripBR = document.getElementById('gripBR');
      this.gripTR = document.getElementById('gripTR');
      this.gripBL = document.getElementById('gripBL');
      this.gripTL = document.getElementById('gripTL');

      this.currentIndex = 0;
      this.turningLayer = null;
      this.revealLayer = null;

      this.isDragging = false;
      this.activeCorner = null;
      this.dragPos = { x: 0, y: 0 };
      this.pageRect = { width: 0, height: 0, left: 0, top: 0 };
      this.animId = null;

      this.init();
    }

    init() {
      this.updateSize();
      window.addEventListener('resize', () => this.updateSize());

      this.bindGrip(this.gripBR, 'br');
      this.bindGrip(this.gripTR, 'tr');
      this.bindGrip(this.gripBL, 'bl');
      this.bindGrip(this.gripTL, 'tl');
      this.bindEdgeManualDrag();

      window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') this.turnBy(1);
        else if (e.key === 'ArrowLeft') this.turnBy(-1);
      });

      this.commitPage(0);
    }

    updateSize() {
      const rect = this.book.getBoundingClientRect();
      this.pageRect = rect;
      this.canvas.width = rect.width;
      this.canvas.height = rect.height;
    }

    isOverInteractiveControl(clientX, clientY) {
      const els = document.elementsFromPoint(clientX, clientY);
      return els.some((el) =>
        el.classList && (
          el.classList.contains('panel-play-btn') ||
          el.classList.contains('p8-reset-btn') ||
          el.classList.contains('p8-scroll-up-btn') ||
          el.classList.contains('p8-zoom-in-btn') ||
          el.classList.contains('page15-slide-up-btn')
        )
      );
    }

    canTurn(corner) {
      if (corner === 'br' || corner === 'tr') return this.currentIndex < this.layers.length - 1;
      if (corner === 'bl' || corner === 'tl') return this.currentIndex > 0;
      return false;
    }

    prepareTurnLayers(direction) {
      const targetIndex = this.currentIndex + direction;
      if (targetIndex < 0 || targetIndex >= this.layers.length) return false;

      // Immediately stop any playing video when starting a page turn
      this.videoCtrl.pauseAll();

      this.turningLayer = this.layers[this.currentIndex];
      this.revealLayer = this.layers[targetIndex];
      this.videoCtrl.startAmbientForPage(targetIndex);

      this.layers.forEach((layer, idx) => {
        layer.style.clipPath = '';
        layer.classList.remove('is-active', 'is-under');
        if (idx === this.currentIndex) {
          layer.style.zIndex = '10';
          layer.classList.add('is-active');
        } else if (idx === targetIndex) {
          layer.style.zIndex = '5';
          layer.classList.add('is-under');
        } else {
          layer.style.zIndex = '1';
        }
      });

      return true;
    }

    clearTurnVisuals() {
      if (this.turningLayer) this.turningLayer.style.clipPath = '';
      if (this.revealLayer) this.revealLayer.style.clipPath = '';
      this.ctx.clearRect(0, 0, this.pageRect.width, this.pageRect.height);
    }

    applyTurningPageClip(dragAngle, midX, midY) {
      if (!this.turningLayer) return;
      const W = this.pageRect.width;
      const H = this.pageRect.height;
      const rect = [{ x: 0, y: 0 }, { x: W, y: 0 }, { x: W, y: H }, { x: 0, y: H }];
      const nx = -Math.cos(dragAngle);
      const ny = -Math.sin(dragAngle);
      const clipped = clipByHalfPlane(rect, nx, ny, midX, midY);
      this.turningLayer.style.clipPath = toCSSPolygon(clipped);
    }

    startManualDrag(corner, clientX, clientY) {
      if (this.animId || !this.canTurn(corner)) return;
      paperAudio.init();
      this.updateSize();

      const dir = corner === 'bl' || corner === 'tl' ? -1 : 1;
      if (!this.prepareTurnLayers(dir)) return;

      this.isDragging = true;
      this.activeCorner = corner;
      let hasMoved = false;

      this.dragPos = {
        x: clientX - this.pageRect.left,
        y: clientY - this.pageRect.top
      };

      const onMove = (ev) => {
        if (!this.isDragging) return;
        ev.preventDefault();
        hasMoved = true;

        const m = ev.touches ? ev.touches[0] : ev;
        let rawX = m.clientX - this.pageRect.left;
        let rawY = m.clientY - this.pageRect.top;

        const W = this.pageRect.width;
        const H = this.pageRect.height;
        const anchorX = corner === 'bl' || corner === 'tl' ? W : 0;
        const anchorY = corner === 'tr' || corner === 'tl' ? 0 : H;
        const maxD = Math.hypot(W, H);
        const curD = Math.hypot(rawX - anchorX, rawY - anchorY);

        if (curD > maxD) {
          const r = maxD / curD;
          rawX = anchorX + (rawX - anchorX) * r;
          rawY = anchorY + (rawY - anchorY) * r;
        }

        this.dragPos = {
          x: Math.max(-W * 0.35, Math.min(W * 1.35, rawX)),
          y: Math.max(0, Math.min(H, rawY))
        };
        this.renderTurn();
      };

      const onEnd = () => {
        if (!this.isDragging) return;
        this.isDragging = false;
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onEnd);
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('touchend', onEnd);
        window.removeEventListener('touchcancel', onEnd);

        if (!hasMoved) {
          this.clearTurnVisuals();
          this.activeCorner = null;
          this.commitPage(this.currentIndex);
          return;
        }
        this.finishDrag();
      };

      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('touchend', onEnd);
      window.addEventListener('touchcancel', onEnd);
    }

    bindGrip(elem, corner) {
      if (!elem) return;
      const onStart = (e) => {
        const pt = e.touches ? e.touches[0] : e;
        if (this.isOverInteractiveControl(pt.clientX, pt.clientY)) return;
        e.preventDefault();
        e.stopPropagation();
        this.startManualDrag(corner, pt.clientX, pt.clientY);
      };
      elem.addEventListener('mousedown', onStart);
      elem.addEventListener('touchstart', onStart, { passive: false });
    }

    // Also allow grabbing the outer 22px right/left edge of the page to peel manually
    bindEdgeManualDrag() {
      const onEdgeStart = (e) => {
        if (this.isDragging || this.animId) return;
        if (e.touches && e.touches.length !== 1) return;
        const pt = e.touches ? e.touches[0] : e;
        if (this.isOverInteractiveControl(pt.clientX, pt.clientY)) return;

        this.updateSize();
        const relX = pt.clientX - this.pageRect.left;
        const relY = pt.clientY - this.pageRect.top;
        const W = this.pageRect.width;
        const H = this.pageRect.height;

        if (relX >= W - 22 && this.canTurn('br')) {
          e.preventDefault();
          this.startManualDrag(relY < H * 0.4 ? 'tr' : 'br', pt.clientX, pt.clientY);
        } else if (relX <= 22 && this.canTurn('bl')) {
          e.preventDefault();
          this.startManualDrag(relY < H * 0.4 ? 'tl' : 'bl', pt.clientX, pt.clientY);
        }
      };

      this.book.addEventListener('mousedown', onEdgeStart);
      this.book.addEventListener('touchstart', onEdgeStart, { passive: false });
    }

    renderTurn() {
      const W = this.pageRect.width;
      const H = this.pageRect.height;
      const ctx = this.ctx;
      ctx.clearRect(0, 0, W, H);

      const mx = this.dragPos.x;
      const my = this.dragPos.y;
      const cornerX = this.activeCorner === 'bl' || this.activeCorner === 'tl' ? 0 : W;
      const cornerY = this.activeCorner === 'tr' || this.activeCorner === 'tl' ? 0 : H;
      const dx = mx - cornerX;
      const dy = my - cornerY;
      const dist = Math.hypot(dx, dy);

      if (dist < 4) {
        if (this.turningLayer) this.turningLayer.style.clipPath = '';
        return;
      }

      const midX = (cornerX + mx) / 2;
      const midY = (cornerY + my) / 2;
      const dragAngle = Math.atan2(dy, dx);
      const foldAngle = dragAngle + Math.PI / 2;
      const perpLen = Math.max(W, H) * 2.4;

      this.applyTurningPageClip(dragAngle, midX, midY);

      const f1x = midX - Math.cos(foldAngle) * perpLen;
      const f1y = midY - Math.sin(foldAngle) * perpLen;
      const f2x = midX + Math.cos(foldAngle) * perpLen;
      const f2y = midY + Math.sin(foldAngle) * perpLen;

      // Soft cast shadow
      ctx.save();
      const sD = Math.min(90, dist * 0.38);
      const sh = ctx.createLinearGradient(
        midX, midY,
        midX - Math.cos(dragAngle) * sD,
        midY - Math.sin(dragAngle) * sD
      );
      sh.addColorStop(0, 'rgba(0,0,0,0.26)');
      sh.addColorStop(0.25, 'rgba(0,0,0,0.12)');
      sh.addColorStop(0.6, 'rgba(0,0,0,0.03)');
      sh.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = sh;
      ctx.beginPath();
      ctx.moveTo(f1x, f1y);
      ctx.lineTo(f2x, f2y);
      ctx.lineTo(cornerX, cornerY);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Curled paper back face
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(f1x, f1y);
      ctx.lineTo(f2x, f2y);

      const cpX = midX + Math.cos(dragAngle) * (dist * 0.52);
      const cpY = midY + Math.sin(dragAngle) * (dist * 0.52);
      ctx.quadraticCurveTo(
        cpX + Math.cos(foldAngle) * (perpLen * 0.42),
        cpY + Math.sin(foldAngle) * (perpLen * 0.42),
        mx, my
      );
      ctx.quadraticCurveTo(
        cpX - Math.cos(foldAngle) * (perpLen * 0.42),
        cpY - Math.sin(foldAngle) * (perpLen * 0.42),
        f1x, f1y
      );
      ctx.closePath();
      ctx.clip();

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, W, H);

      // Low-GSM show-through of turning page's media
      if (this.turningLayer) {
        ctx.save();
        ctx.translate(midX, midY);
        ctx.rotate(dragAngle);
        ctx.scale(-1, 1);
        ctx.rotate(-dragAngle);
        ctx.translate(-midX, -midY);
        ctx.globalAlpha = 0.12;

        const bookRect = this.pageRect;
        const mediaEls = this.turningLayer.querySelectorAll('.panel-video, .panel-image');
        mediaEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          const x = r.left - bookRect.left;
          const y = r.top - bookRect.top;
          if (r.width <= 0 || r.height <= 0) return;
          try {
            if (el.tagName === 'VIDEO' && el.readyState >= 2) {
              ctx.drawImage(el, x, y, r.width, r.height);
            } else if (el.tagName === 'IMG' && el.complete && el.naturalWidth > 0) {
              ctx.drawImage(el, x, y, r.width, r.height);
            }
          } catch (_) {}
        });
        ctx.restore();
      }

      const cl = ctx.createLinearGradient(midX, midY, mx, my);
      cl.addColorStop(0, 'rgba(170,170,170,0.44)');
      cl.addColorStop(0.05, 'rgba(220,220,220,0.22)');
      cl.addColorStop(0.14, 'rgba(255,255,255,0.68)');
      cl.addColorStop(0.4, 'rgba(255,255,255,0.04)');
      cl.addColorStop(0.86, 'rgba(238,238,238,0.14)');
      cl.addColorStop(1, 'rgba(200,200,200,0.32)');
      ctx.fillStyle = cl;
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = 'rgba(0,0,0,0.09)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();
    }

    finishDrag() {
      const W = this.pageRect.width;
      const mx = this.dragPos.x;
      const isForward = this.activeCorner === 'br' || this.activeCorner === 'tr';
      const shouldTurn = isForward ? mx < W * 0.56 : mx > W * 0.44;

      if (shouldTurn) {
        this.animateFullFlip(this.currentIndex + (isForward ? 1 : -1));
      } else {
        this.animateSnapBack();
      }
    }

    animateSnapBack() {
      const startX = this.dragPos.x;
      const startY = this.dragPos.y;
      const tX = this.activeCorner === 'bl' || this.activeCorner === 'tl' ? 0 : this.pageRect.width;
      const tY = this.activeCorner === 'tr' || this.activeCorner === 'tl' ? 0 : this.pageRect.height;
      const t0 = performance.now();
      const dur = 240;

      const step = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        this.dragPos.x = startX + (tX - startX) * e;
        this.dragPos.y = startY + (tY - startY) * e;
        this.renderTurn();

        if (p < 1) {
          this.animId = requestAnimationFrame(step);
        } else {
          this.animId = null;
          this.clearTurnVisuals();
          this.activeCorner = null;
          this.commitPage(this.currentIndex);
        }
      };

      this.animId = requestAnimationFrame(step);
    }

    turnBy(delta) {
      const target = this.currentIndex + delta;
      if (this.animId || this.isDragging || target < 0 || target >= this.layers.length) return;
      this.updateSize();
      if (!this.prepareTurnLayers(delta)) return;

      const W = this.pageRect.width;
      const H = this.pageRect.height;
      this.activeCorner = delta > 0 ? 'br' : 'bl';
      this.dragPos = { x: delta > 0 ? W - 4 : 4, y: H - 4 };
      this.animateFullFlip(target);
    }

    animateFullFlip(toIndex) {
      if (this.animId) cancelAnimationFrame(this.animId);
      paperAudio.playTurn();
      this.updateSize();

      const W = this.pageRect.width;
      const H = this.pageRect.height;
      const isForward = toIndex > this.currentIndex;
      const startX = this.dragPos.x;
      const startY = this.dragPos.y;
      const endX = isForward ? -W * 0.38 : W * 1.38;
      const endY = H * 0.88;
      this.activeCorner = isForward ? 'br' : 'bl';

      const t0 = performance.now();
      const dur = 460;

      const step = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        this.dragPos.x = startX + (endX - startX) * e;
        this.dragPos.y = startY + (endY - startY) * e;
        this.renderTurn();

        if (p < 1) {
          this.animId = requestAnimationFrame(step);
        } else {
          this.animId = null;
          this.clearTurnVisuals();
          this.activeCorner = null;
          this.videoCtrl.pauseAll();
          this.commitPage(toIndex);
        }
      };

      this.animId = requestAnimationFrame(step);
    }

    commitPage(index) {
      this.currentIndex = index;
      this.turningLayer = null;
      this.revealLayer = null;

      this.layers.forEach((layer, idx) => {
        layer.style.clipPath = '';
        layer.classList.remove('is-active', 'is-under');
        if (idx === index) {
          layer.style.zIndex = '10';
          layer.classList.add('is-active');
        } else if (idx === index + 1) {
          layer.style.zIndex = '5';
          layer.classList.add('is-under');
        } else {
          layer.style.zIndex = '1';
        }
      });

      const hasPrev = index > 0;
      const hasNext = index < this.layers.length - 1;
      this.gripBL.style.display = hasPrev ? 'block' : 'none';
      this.gripTL.style.display = hasPrev ? 'block' : 'none';
      this.gripBR.style.display = hasNext ? 'block' : 'none';
      this.gripTR.style.display = hasNext ? 'block' : 'none';

      this.videoCtrl.updatePreload(index);
    }
  }

  // =========================================================================
  // BOOTSTRAP
  // =========================================================================
  window.addEventListener('DOMContentLoaded', () => {
    const stackEl = document.getElementById('pagesStack');
    const videoCtrl = new ComicVideoController();
    const layers = buildPages(stackEl, videoCtrl);
    new AnalogComicBook(layers, videoCtrl);
  });
})();
