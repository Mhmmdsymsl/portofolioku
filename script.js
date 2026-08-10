/**
 * Graphic Design Portfolio - Main Application Logic
 * Senior UI/UX & Lead Web Developer Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize lucide icons if library loaded
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Project Case Study Data Store
  const projectsData = [
    {
      id: 'lumina-neobank',
      category: 'branding',
      categoryLabel: 'Branding & Visual Identity',
      title: 'Lumina - Neobank Visual Identity & Brand System',
      shortDesc: 'Complete brand ecosystem, logo system, and design guidelines for a next-gen fintech platform.',
      heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      client: 'Lumina Technologies Inc.',
      year: '2025',
      role: 'Lead Brand Strategist & Visual Designer',
      tools: ['Figma', 'Illustrator', 'Photoshop', 'Cinema 4D'],
      problem: 'Lumina was launching a crypto-fiat hybrid banking app but suffered from low brand credibility and fragmented visual assets across web, mobile, and print touchpoints.',
      solution: 'Designed a sleek, futuristic visual identity built on glowing cyan gradients, precise geometric typography, and an icon system optimized for micro-screens and financial dashboards.',
      deliverables: [
        'Master Logo & Iconography Suite',
        '65-Page Brand Guidelines & Design Tokens',
        'Physical & Virtual Matte-Black Metal Cards',
        'Digital Ad Templates & OOH Billboards'
      ],
      metrics: [
        { label: 'Brand Recognition Boost', value: '+140%' },
        { label: 'Series A Funding Raised', value: '$12.5M' },
        { label: 'User Signups in Month 1', value: '45,000+' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'aether-suite',
      category: 'uiux',
      categoryLabel: 'UI/UX & Web Graphics',
      title: 'Aether - AI Creative Suite Interface',
      shortDesc: 'Dark-mode web application design system and high-fidelity UI for generative AI workflows.',
      heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      client: 'Aether Cloud Labs',
      year: '2025',
      role: 'Principal UI/UX Designer',
      tools: ['Figma', 'Protopie', 'Tailwind CSS', 'Framer'],
      problem: 'Complex multi-modal AI generation tools were confusing creators with overloaded parameter sliders and unclear canvas navigation.',
      solution: 'Created an intuitive canvas-first workbench featuring floating glassmorphism control panels, contextual hotkeys, and real-time generation previews with dark mode aesthetics.',
      deliverables: [
        'End-to-End Web App UI Design',
        'Design System with 120+ Accessible Components',
        'Interactive High-Fidelity Prototypes',
        'Custom Dark Mode Color Palette'
      ],
      metrics: [
        { label: 'User Onboarding Time', value: '-65%' },
        { label: 'Daily Active Users', value: '120k+' },
        { label: 'App Store Design Award', value: 'Nominated' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'cyberpulse-art',
      category: 'illustration',
      categoryLabel: 'Illustration & Vector Art',
      title: 'CyberPulse - Futuristic Vector Series',
      shortDesc: 'Vibrant cyberpunk illustrations and key visual key art for global music festival branding.',
      heroImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
      client: 'Pulse Music Festival',
      year: '2024',
      role: 'Lead Illustrator & Art Director',
      tools: ['Adobe Illustrator', 'Procreate', 'Photoshop'],
      problem: 'Pulse Music Festival needed an iconic visual identity for its Tokyo event that would stand out across dense urban billboards, stage visualizers, and NFT tickets.',
      solution: 'Engineered a striking neon vector artwork series combining Japanese typography, synthwave geometry, and isometric cyberpunk cityscapes.',
      deliverables: [
        'Main Stage Key Art Illustration',
        'Vector Badge System & Merchandise Art',
        'Animated LED Screen Visual Loops',
        'Limited Edition Poster Collection'
      ],
      metrics: [
        { label: 'Ticket Sold Out In', value: '4 Minutes' },
        { label: 'Merchandise Sales', value: '+210%' },
        { label: 'Social Impressions', value: '3.8 Million' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'verve-coffee',
      category: 'packaging',
      categoryLabel: 'Print & Packaging',
      title: 'Verve - Craft Coffee Eco-Packaging Line',
      shortDesc: 'Sustainable tactile packaging design and typography for single-origin specialty coffee beans.',
      heroImage: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=80',
      client: 'Verve Artisan Roasters',
      year: '2024',
      role: 'Packaging & Editorial Designer',
      tools: ['Illustrator', 'InDesign', 'KeyShot 3D'],
      problem: 'Verve wanted to transition to 100% compostable packaging while elevating its price tier to compete in luxury retail stores like Whole Foods and Dean & DeLuca.',
      solution: 'Created an unboxing experience featuring blind-embossed typography, custom color-coded origin labels, and plant-based metallic ink foils.',
      deliverables: [
        'Compostable Coffee Bag Packaging Line',
        'Custom Die-Cut Label System',
        'Retail Display Stands & Merch Boxes',
        'Product Photography Style Guide'
      ],
      metrics: [
        { label: 'Retail Shelf Velocity', value: '+85%' },
        { label: 'Plastic Saved Annually', value: '4.2 Tons' },
        { label: 'Pentawards Finalist', value: '2024 Gold' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'solstice-ad-suite',
      category: 'social',
      categoryLabel: 'Digital & Social Media Assets',
      title: 'Solstice - High-Impact Social Campaign & Ad Suite',
      shortDesc: 'Conversion-focused motion graphics and social media ad templates for luxury apparel launch.',
      heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
      client: 'Solstice Apparel Co.',
      year: '2025',
      role: 'Creative Lead & Motion Designer',
      tools: ['After Effects', 'Figma', 'Photoshop'],
      problem: 'Solstice needed a high-volume social ad suite across Instagram Reels, TikTok, and Meta Ads for their autumn collection rollout.',
      solution: 'Crafted a modular kinetic typography template system with high-contrast motion cuts, carousel templates, and interactive stories.',
      deliverables: [
        '45+ Motion Ad Assets (9:16 & 4:5)',
        'Editable Figma Social Template Kit',
        'Influencer PR Box Graphics',
        'Campaign Media Asset Library'
      ],
      metrics: [
        { label: 'Click-Through Rate (CTR)', value: '4.8%' },
        { label: 'Return On Ad Spend (ROAS)', value: '5.2x' },
        { label: 'Total Campaign Reach', value: '8.4M' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'apex-athletics',
      category: 'branding',
      categoryLabel: 'Branding & Visual Identity',
      title: 'Apex Athletics - Performance Brand Identity',
      shortDesc: 'Dynamic athletic brand identity, custom emblem design, and technical sportswear graphics.',
      heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      client: 'Apex Performance Group',
      year: '2024',
      role: 'Lead Brand Identity Designer',
      tools: ['Illustrator', 'Photoshop', 'Substance 3D'],
      problem: 'Apex needed to rebrand from a local gym chain into an international technical apparel and fitness hardware brand.',
      solution: 'Developed an aggressive, forward-leaning chevron mark representing human peak performance, paired with sharp custom typography.',
      deliverables: [
        'Apex Mark & Dynamic Typography System',
        'Technical Apparel Heat-Transfer Specs',
        'Gym Franchise Interior Signage System',
        'E-Commerce Design Language'
      ],
      metrics: [
        { label: 'E-Commerce Conversion', value: '+92%' },
        { label: 'Global Retail Outlets', value: '35 Store Locations' },
        { label: 'Brand Value Surge', value: '+300%' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1517836832903-3fa722ce5b40?auto=format&fit=crop&w=1000&q=80'
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 1. PORTFOLIO FILTERING SYSTEM
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('hidden-card');
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 2. MODAL CASE STUDY DIALOG SYSTEM (Native <dialog>)
  // --------------------------------------------------------------------------
  const modal = document.getElementById('case-study-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Helper to open case study modal
  window.openCaseStudy = function(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modal) return;

    modalContent.innerHTML = `
      <!-- Hero Banner Image -->
      <div class="relative h-64 sm:h-80 w-full overflow-hidden">
        <img src="${project.heroImage}" alt="${project.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6">
          <span class="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 rounded-full mb-2">
            ${project.categoryLabel}
          </span>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            ${project.title}
          </h2>
        </div>
      </div>

      <!-- Main Modal Body (Scrollable) -->
      <div class="p-6 sm:p-8 space-y-8 overflow-y-auto max-h-[60vh]">
        <!-- Meta Details Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-900/80 border border-white/5 text-sm">
          <div>
            <span class="text-slate-400 block text-xs uppercase tracking-wider font-medium">Client</span>
            <span class="font-semibold text-slate-200">${project.client}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-xs uppercase tracking-wider font-medium">Year</span>
            <span class="font-semibold text-slate-200">${project.year}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-xs uppercase tracking-wider font-medium">Role</span>
            <span class="font-semibold text-slate-200">${project.role}</span>
          </div>
          <div>
            <span class="text-slate-400 block text-xs uppercase tracking-wider font-medium">Tools</span>
            <div class="flex flex-wrap gap-1 mt-1">
              ${project.tools.map(t => `<span class="px-2 py-0.5 text-xs bg-slate-800 text-cyan-300 rounded">${t}</span>`).join('')}
            </div>
          </div>
        </div>

        <!-- Problem & Solution Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 rounded-xl bg-slate-900/40 border border-white/5 space-y-2">
            <h3 class="text-lg font-bold text-red-400 flex items-center gap-2">
              <i data-lucide="alert-circle" class="w-5 h-5"></i> The Challenge
            </h3>
            <p class="text-slate-300 text-sm leading-relaxed">${project.problem}</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-900/40 border border-white/5 space-y-2">
            <h3 class="text-lg font-bold text-cyan-400 flex items-center gap-2">
              <i data-lucide="check-circle" class="w-5 h-5"></i> The Solution
            </h3>
            <p class="text-slate-300 text-sm leading-relaxed">${project.solution}</p>
          </div>
        </div>

        <!-- Impact Metrics Grid -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Key Results & Business Impact</h3>
          <div class="grid grid-cols-3 gap-4">
            ${project.metrics.map(m => `
              <div class="p-4 rounded-xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/20 text-center">
                <div class="text-xl sm:text-3xl font-extrabold text-cyan-400">${m.value}</div>
                <div class="text-xs text-slate-400 mt-1">${m.label}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Key Deliverables List -->
        <div>
          <h3 class="text-lg font-bold text-white mb-3">Project Deliverables</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${project.deliverables.map(d => `
              <li class="flex items-center gap-2 text-sm text-slate-300">
                <i data-lucide="check" class="w-4 h-4 text-cyan-400 shrink-0"></i>
                <span>${d}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Full Mockup Gallery -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Design Showcase & Mockups</h3>
          <div class="space-y-4">
            ${project.gallery.map(img => `
              <div class="rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <img src="${img}" alt="Case Study Mockup" class="w-full h-auto object-cover">
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Re-initialize icons inside modal
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    modal.showModal();
    document.body.style.overflow = 'hidden';
  };

  // Close Modal Handler
  function closeModal() {
    if (modal) {
      modal.close();
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Fallback for light-dismiss (click backdrop to close)
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    modal.addEventListener('close', () => {
      document.body.style.overflow = '';
    });
  }

  // --------------------------------------------------------------------------
  // 3. MOBILE MENU & BACKDROP DRAWER
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenuDrawer.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuDrawer.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. SCROLLSPY & STICKY NAV HIGHLIGHTING
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active-link');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active-link');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // --------------------------------------------------------------------------
  // 5. ANIMATED METRICS COUNTER
  // --------------------------------------------------------------------------
  const statsCounters = document.querySelectorAll('.stat-counter');
  let animatedStats = false;

  function animateCounters() {
    if (animatedStats) return;

    statsCounters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      const step = Math.max(1, Math.floor(target / 40));

      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          counter.textContent = `${prefix}${target}${suffix}`;
          clearInterval(interval);
        } else {
          counter.textContent = `${prefix}${count}${suffix}`;
        }
      }, 35);
    });

    animatedStats = true;
  }

  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(aboutSection);
  }

  // --------------------------------------------------------------------------
  // 6. TESTIMONIAL CAROUSEL SLIDER
  // --------------------------------------------------------------------------
  const testimonials = [
    {
      quote: "syam transformed our fintech brand completely. The visual identity system he created helped us secure our $12.5M Series A funding. He is hands down the best designer we have collaborated with.",
      author: "Sarah Jenkins",
      title: "CEO & Co-Founder",
      company: "Lumina Neobank",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "Working with syam on Aether AI was an absolute masterclass in UI design. He simplified complex AI workflows into an intuitive canvas that our users adore.",
      author: "Marcus Vance",
      title: "Creative Director",
      company: "Aether Cloud Labs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "The packaging design syam delivered for Verve exceeded all expectations. Our retail shelf velocity skyrocketed by 85% within two months of launch!",
      author: "Elena Rostova",
      title: "VP of Product",
      company: "Verve Artisan Coffee",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ];

  let currentTestimonial = 0;
  const testimonialContainer = document.getElementById('testimonial-card-content');
  const prevTestimonialBtn = document.getElementById('prev-testimonial');
  const nextTestimonialBtn = document.getElementById('next-testimonial');
  const testimonialDotsContainer = document.getElementById('testimonial-dots');

  function renderTestimonial(index) {
    if (!testimonialContainer) return;
    const t = testimonials[index];

    const stars = Array(t.rating).fill('<i data-lucide="star" class="w-5 h-5 text-amber-400 fill-amber-400"></i>').join('');

    testimonialContainer.innerHTML = `
      <div class="flex items-center gap-1 mb-6">
        ${stars}
      </div>
      <p class="text-lg sm:text-xl text-slate-200 italic leading-relaxed mb-8">
        "${t.quote}"
      </p>
      <div class="flex items-center gap-4">
        <img src="${t.avatar}" alt="${t.author}" class="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/40">
        <div>
          <h4 class="text-base font-bold text-white">${t.author}</h4>
          <p class="text-xs text-cyan-400 font-medium">${t.title} — ${t.company}</p>
        </div>
      </div>
    `;

    // Render Dots
    if (testimonialDotsContainer) {
      testimonialDotsContainer.innerHTML = testimonials.map((_, i) => `
        <button onclick="setTestimonial(${i})" class="w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-cyan-400 w-8' : 'bg-slate-700 hover:bg-slate-500'}" aria-label="Go to testimonial ${i+1}"></button>
      `).join('');
    }

    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  window.setTestimonial = function(index) {
    currentTestimonial = index;
    renderTestimonial(currentTestimonial);
  };

  if (prevTestimonialBtn && nextTestimonialBtn) {
    prevTestimonialBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      renderTestimonial(currentTestimonial);
    });

    nextTestimonialBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      renderTestimonial(currentTestimonial);
    });
  }

  // Initial render
  renderTestimonial(0);

  // --------------------------------------------------------------------------
  // 7. CONTACT FORM SUBMISSION & VALIDATION
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Show loading spinner
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i>
        <span>Sending Message...</span>
      `;
      if (typeof lucide !== 'undefined') lucide.createIcons();

      setTimeout(() => {
        submitBtn.innerHTML = `
          <i data-lucide="check" class="w-5 h-5 text-emerald-400"></i>
          <span>Message Sent Successfully!</span>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();

        showToast('Thank you! Your message has been received. syam will get back to you within 24 hours.', 'success');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 3000);
      }, 1500);
    });
  }

  // --------------------------------------------------------------------------
  // 8. TOAST NOTIFICATION HELPER
  // --------------------------------------------------------------------------
  window.showToast = function(message, type = 'info') {
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    if (toastIcon) {
      toastIcon.setAttribute('data-lucide', type === 'success' ? 'check-circle' : 'info');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  };

  // --------------------------------------------------------------------------
  // 9. COPY EMAIL TO CLIPBOARD HELPER
  // --------------------------------------------------------------------------
  window.copyEmail = function() {
    const email = 'syam.morgan@auradesign.io';
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied "${email}" to clipboard!`, 'success');
    }).catch(() => {
      showToast(`Email: ${email}`, 'info');
    });
  };

  // --------------------------------------------------------------------------
  // 10. SIMULATE CV DOWNLOAD HELPER
  // --------------------------------------------------------------------------
  window.downloadCV = function() {
    showToast('Downloading syam Morgan — Senior Graphic Designer Resume (PDF)...', 'success');
  };
});
