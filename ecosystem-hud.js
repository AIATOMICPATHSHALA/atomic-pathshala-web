// Atomic Pathshala - Ecosystem Navigation Hub Overlay
// Injects a floating dashboard switcher to easily navigate between the different portals of the 91 pages.

(function () {
  const css = `
    .hud-trigger {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);
      box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.4), 0 0 0 1px rgba(255,255,255,0.1);
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: none;
      outline: none;
    }
    .hud-trigger:hover {
      transform: scale(1.1) rotate(45deg);
      box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.6);
    }
    .hud-trigger:active {
      transform: scale(0.95);
    }
    .hud-panel {
      position: fixed;
      top: 0;
      right: -420px;
      width: 400px;
      height: 100vh;
      background: rgba(15, 23, 42, 0.85);
      backdrop-filter: blur(20px);
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 9998;
      box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
      transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      color: #E2E8F0;
      font-family: 'Inter', sans-serif;
      display: flex;
      flex-direction: column;
    }
    .hud-panel.open {
      right: 0;
    }
    .hud-header {
      padding: 24px;
      border-b: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(37, 99, 235, 0.05);
    }
    .hud-tabs {
      display: flex;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.2);
    }
    .hud-tab {
      flex: 1;
      padding: 12px 8px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-align: center;
      cursor: pointer;
      color: #94A3B8;
      transition: all 0.2s ease;
      border-bottom: 2px solid transparent;
    }
    .hud-tab.active {
      color: #38BDF8;
      border-bottom-color: #38BDF8;
      background: rgba(56, 189, 248, 0.05);
    }
    .hud-content {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
    }
    .hud-search {
      width: 100%;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 8px 12px;
      color: white;
      font-size: 14px;
      margin-bottom: 12px;
      outline: none;
      transition: border-color 0.2s;
    }
    .hud-search:focus {
      border-color: #38BDF8;
    }
    .hud-item {
      display: block;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      padding: 12px;
      margin-bottom: 10px;
      text-decoration: none;
      color: #E2E8F0;
      transition: all 0.2s ease;
    }
    .hud-item:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: #38BDF8;
      transform: translateY(-2px);
    }
    .hud-item-title {
      font-weight: 600;
      font-size: 13px;
      color: #38BDF8;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .hud-item-desc {
      font-size: 11px;
      color: #94A3B8;
      margin-top: 4px;
      line-height: 1.4;
    }
    .hud-badge {
      font-size: 9px;
      background: rgba(37, 99, 235, 0.2);
      color: #38BDF8;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: bold;
    }
    .hud-close {
      position: absolute;
      top: 16px;
      right: 16px;
      background: transparent;
      border: none;
      color: #94A3B8;
      font-size: 20px;
      cursor: pointer;
    }
    .hud-close:hover {
      color: white;
    }
  `;

  // Inject Styles
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // Define Pages Map
  const portals = {
    public: [
      { path: '/', title: 'Premium Landing Page', desc: 'Main public entrance of Atomic Pathshala, showcasing courses, educators, features.', badge: 'Home' },
      { path: '/atomic_pathshala_homepage_with_free_resources/code.html', title: 'Free Resources Home', desc: 'Homepage highlighting free study material, PDF notes, lectures.', badge: 'Home 2' },
      { path: '/homepage_with_faculty_showcase/code.html', title: 'Faculty Landing Page', desc: 'Homepage variation showing off academic leaders and selection results.', badge: 'Faculty' },
      { path: '/neet_pyq_hub_atomic_pathshala/code.html', title: 'NEET PYQ Hub', desc: 'Public portal for downloading NEET Previous Year Questions and solutions.', badge: 'PYQs' },
      { path: '/atomic_pathshala_secure_login/code.html', title: 'Student Secure Login', desc: 'One-click email/phone OTP login interface for students.', badge: 'Auth' },
      { path: '/secure_checkout_atomic_pathshala/code.html', title: 'Premium Checkout', desc: 'Order summaries, payment option selectors, and discount coupons.', badge: 'Billing' },
      { path: '/payment_successful_atomic_pathshala/code.html', title: 'Payment Success', desc: 'Enrollment summary and transaction confirmation screen.', badge: 'Billing' }
    ],
    student: [
      { path: '/student_home_atomic_pathshala/code.html', title: 'Student Dashboard', desc: 'Central study planner, streak counter, upcoming schedule, and subjects.', badge: 'Portal' },
      { path: '/performance_analytics_dashboard_atomic_pathshala/code.html', title: 'Performance Analytics', desc: 'Score trends, topic accuracy, speed analysis, and AIR predictions.', badge: 'Analytics' },
      { path: '/dpp_test_portal_atomic_pathshala/code.html', title: 'DPP & Test Center', desc: 'Daily Practice Problems hub, status trackers, and mock exams.', badge: 'Practice' },
      { path: '/mock_test_interface_atomic_pathshala/code.html', title: 'Mock Test Simulator', desc: 'Realistic exam player with timer, question index, and interactive answers.', badge: 'Exam' },
      { path: '/ai_doubt_solver_atomic_pathshala/code.html', title: 'AI Doubt Solver', desc: '24/7 intelligent instant tutor with camera upload and step explanations.', badge: 'AI' },
      { path: '/ai_mentor_advisor_atomic_pathshala/code.html', title: 'AI Study Mentor', desc: 'Chatbot helper offering customized timetable planning and tips.', badge: 'AI' },
      { path: '/interactive_live_class_atomic_pathshala_student/code.html', title: 'Live Class Player', desc: 'Interactive streaming layout with live student chat and in-class polls.', badge: 'Live' },
      { path: '/all_rewards_catalog_atomic_pathshala/code.html', title: 'Rewards Shop', desc: 'Redeem learning streak points for study packs and mentorship sessions.', badge: 'Rewards' },
      { path: '/student_profile_atomic_pathshala/code.html', title: 'Student Profile', desc: 'Manage exam selections, batch credentials, and bookmarks.', badge: 'Profile' },
      { path: '/parent_dashboard_home_atomic_pathshala_1/code.html', title: 'Parent Portal', desc: 'Attendance metrics, weekly score logs, and tutor comments for parents.', badge: 'Parent' }
    ],
    educator: [
      { path: '/educator_console_atomic_pathshala/code.html', title: 'Educator Console', desc: 'Home dashboard for faculty showing watch hours, doubts, schedule.', badge: 'Console' },
      { path: '/educator_command_center_atomic_pathshala_1/code.html', title: 'Educator Command Center', desc: 'Doubt resolution, upload logs, and salary details.', badge: 'Overview' },
      { path: '/doubt_resolution_panel_atomic_pathshala_educator/code.html', title: 'Doubt Solver Panel', desc: 'Video recording/rich text answer board for assigned student doubts.', badge: 'Doubts' },
      { path: '/question_creation_hub_atomic_pathshala_educator/code.html', title: 'Question Creator', desc: 'Form to insert LaTeX, diagrams, and options for the global question bank.', badge: 'Creator' },
      { path: '/live_studio_setup_atomic_pathshala_educator/code.html', title: 'Live Studio Setup', desc: 'OBS stream key configuration, microphone checks, camera setup.', badge: 'Studio' },
      { path: '/educator_earnings_coupon_dashboard_atomic_pathshala/code.html', title: 'Earnings & Referrals', desc: 'Revenue calculations, referral clicks, and payouts history.', badge: 'Earnings' },
      { path: '/educator_profile_setup_phase_3/code.html', title: 'Educator Academic Setup', desc: 'Form for adding teacher achievements, experience, and certifications.', badge: 'Profile' }
    ],
    admin: [
      { path: '/admin_hub_atomic_pathshala/code.html', title: 'Admin Hub Overview', desc: 'Consolidated admin stats, recent user actions, active classes overview.', badge: 'Admin' },
      { path: '/admin_overview_dashboard_atomic_pathshala_1/code.html', title: 'Core Analytics Panel', desc: 'Revenue growth, active enrollment charts, doubt response times.', badge: 'Analytics' },
      { path: '/student_management_hub_atomic_pathshala_admin/code.html', title: 'Student Directory CRM', desc: 'Track all registered students, batch permissions, and test logs.', badge: 'CRM' },
      { path: '/faculty_management_atomic_pathshala_admin/code.html', title: 'Faculty Management', desc: 'Manage educator assignments, performance rankings, and compliance reviews.', badge: 'Staff' },
      { path: '/global_question_bank_test_builder_atomic_pathshala_admin/code.html', title: 'Test Builder Platform', desc: 'Assemble chapter-wise mock tests and assign difficulty weights.', badge: 'Creator' },
      { path: '/coupon_discount_manager_atomic_pathshala_admin/code.html', title: 'Coupon Manager', desc: 'Generate discount codes, set campaign limits, and expiry dates.', badge: 'Marketing' },
      { path: '/penalty_rule_configuration_atomic_pathshala_admin/code.html', title: 'Compliance Rule Engine', desc: 'Penalty calculations for late doubt answers or stream violations.', badge: 'Compliance' }
    ]
  };

  // Create HUD HTML Elements
  const triggerBtn = document.createElement('button');
  triggerBtn.className = 'hud-trigger';
  triggerBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>
  `;
  triggerBtn.title = 'Ecosystem Dashboard Switched';

  const panel = document.createElement('div');
  panel.className = 'hud-panel';

  let activeTab = 'public';
  let searchQuery = '';

  const renderPanelContent = () => {
    panel.innerHTML = `
      <button class="hud-close">&times;</button>
      <div class="hud-header">
        <h2 style="margin: 0; font-size: 18px; font-weight: 700; color: white;">Atomic Pathshala</h2>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #94A3B8;">Ecosystem Demo Hub</p>
      </div>
      <div class="hud-tabs">
        <div class="hud-tab ${activeTab === 'public' ? 'active' : ''}" data-tab="public">Public</div>
        <div class="hud-tab ${activeTab === 'student' ? 'active' : ''}" data-tab="student">Student</div>
        <div class="hud-tab ${activeTab === 'educator' ? 'active' : ''}" data-tab="educator">Educator</div>
        <div class="hud-tab ${activeTab === 'admin' ? 'active' : ''}" data-tab="admin">Admin</div>
      </div>
      <div style="padding: 16px 16px 0 16px;">
        <input type="text" class="hud-search" placeholder="Search pages..." value="${searchQuery}">
      </div>
      <div class="hud-content">
        <div class="hud-items-container"></div>
      </div>
    `;

    // Bind Close event
    panel.querySelector('.hud-close').addEventListener('click', () => {
      panel.classList.remove('open');
    });

    // Bind Search event
    const searchInput = panel.querySelector('.hud-search');
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      updateItemsList();
    });
    // focus input
    searchInput.focus();

    // Bind Tab switching
    panel.querySelectorAll('.hud-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        activeTab = e.target.getAttribute('data-tab');
        panel.querySelectorAll('.hud-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        updateItemsList();
      });
    });

    updateItemsList();
  };

  const updateItemsList = () => {
    const container = panel.querySelector('.hud-items-container');
    if (!container) return;

    container.innerHTML = '';
    const query = searchQuery.toLowerCase();
    const list = portals[activeTab].filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query) ||
      item.badge.toLowerCase().includes(query)
    );

    if (list.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 30px; font-size: 13px; color: #64748B;">No matching pages found</div>`;
      return;
    }

    list.forEach(item => {
      // Build correct relative path based on current path
      const currentLoc = window.location.pathname;
      let targetPath = item.path;

      // If we are in a subdirectory, adjust relative path
      const isInSubdir = currentLoc.split('/').filter(x => x).length > 1;
      if (isInSubdir) {
        if (item.path === '/') {
          targetPath = '../index.html';
        } else {
          // item.path is like '/student_home_atomic_pathshala/code.html' -> '../student_home_atomic_pathshala/code.html'
          targetPath = '..' + item.path;
        }
      } else {
        if (item.path === '/') {
          targetPath = 'index.html';
        } else {
          // remove starting slash
          targetPath = item.path.substring(1);
        }
      }

      const itemLink = document.createElement('a');
      itemLink.href = targetPath;
      itemLink.className = 'hud-item';
      itemLink.innerHTML = `
        <div class="hud-item-title">
          <span>${item.title}</span>
          <span class="hud-badge">${item.badge}</span>
        </div>
        <div class="hud-item-desc">${item.desc}</div>
      `;
      container.appendChild(itemLink);
    });
  };

  // Add Trigger Action
  triggerBtn.addEventListener('click', () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
      renderPanelContent();
    }
  });

  // Append elements to DOM
  document.body.appendChild(triggerBtn);
  document.body.appendChild(panel);

  // Close panel on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      panel.classList.remove('open');
    }
  });

})();
