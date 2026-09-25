/**
 * IT Mission Alappuzha Portal Engine
 * Full Length Top News Scroller with Dual Fallback & JSON Data Loading
 */

document.addEventListener('DOMContentLoaded', () => {
  // Default updates fallback array (Guarantees ticker loads even on file:// local browsing)
  const defaultUpdates = [
    {
      // id: "up-001",
      // date: "2026-09-25",
      // badge: "URGENT",
      // badgeType: "danger",
      // title: "CMDRF Assistance Portal: Enhanced digital verification & status tracking active.",
      // category: "CMO/CMDRF",
      // link: "https://app.cmo.kerala.gov.in/cmocmdrf/login.do",
      // summary: "Applicants seeking CMDRF aid can verify document status instantly online."
    },
    {
      // id: "up-002",
      // date: "2026-09-24",
      // badge: "NEW",
      // badgeType: "success",
      // title: "eDistrict Kerala: Expedited 3-day turnaround for Income & Caste certificates.",
      // category: "eDistrict",
      // link: "https://edistrict.kerala.gov.in/edportalsignin.jsp?lang=en",
      // summary: "Taluk offices in Alappuzha integrated digital signatures for citizen certificates."
    },
    {
      // id: "up-003",
      // date: "2026-09-22",
      // badge: "REVENUE",
      // badgeType: "info",
      // title: "ReLIS Pokkuvaravu Mutation: Digital map verification active in Village Offices.",
      // category: "ReLIS",
      // link: "https://revenue.kerala.gov.in/",
      // summary: "Land revenue mutation and Pokkuvaravu records can be tracked through ReLIS."
    },
    {
      // id: "up-004",
      // date: "2026-09-20",
      // badge: "NOTICE",
      // badgeType: "warning",
      // title: "RR Online: Payment facility integrated via e-Treasury Gateway.",
      // category: "RR Online",
      // link: "https://rr.kerala.gov.in/",
      // summary: "Citizens receiving revenue recovery notices can clear dues online."
    },
    {
      // id: "up-005",
      // date: "2026-09-18",
      // badge: "IT MISSION",
      // badgeType: "info",
      // title: "District IT Mission Alappuzha launches eOffice workflow expansion.",
      // category: "eOffice",
      // link: "https://ealappuzha.kerala.gov.in/",
      // summary: "Training expanded for paperless file management in Alappuzha Civil Station."
    }
  ];

  let updatesData = [...defaultUpdates];

  const tickerTrack = document.getElementById('ticker-track');
  const viewAllUpdatesBtn = document.getElementById('view-all-updates-btn');
  const updatesModal = document.getElementById('updates-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalUpdateList = document.getElementById('modal-update-list');

  // Immediately render default updates on page load
  renderTicker(updatesData);
  renderModalUpdates(updatesData);

  // Fetch updates.json dynamically (overrides default fallback if available)
  async function loadData() {
    try {
      const res = await fetch('./data/updates.json');
      if (res.ok) {
        const json = await res.json();
        if (json.updates && json.updates.length > 0) {
          updatesData = json.updates;
          renderTicker(updatesData);
          renderModalUpdates(updatesData);
        }
      }
    } catch (err) {
      console.log('Using fallback updates array (Local file:// execution):', err);
    }
  }

  // Marquee Ticker Render Function
  function renderTicker(items) {
    if (!tickerTrack || !items || items.length === 0) return;
    const tickerList = [...items, ...items];
    tickerTrack.innerHTML = tickerList.map(item => `
      <span class="ticker-item" onclick="openUpdateDetail('${item.id}')">
        <b class="ticker-badge-mini badge-${item.badgeType || 'info'}">[${escapeHtml(item.badge || 'NOTICE')}]</b>
        <span>${escapeHtml(item.title)}</span>
      </span>
    `).join('');
  }

  // Modal Render Function
  function renderModalUpdates(items) {
    if (!modalUpdateList || !items || items.length === 0) return;
    modalUpdateList.innerHTML = items.map(item => `
      <div class="update-list-item" id="update-item-${item.id}">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span class="update-badge badge-${item.badgeType || 'primary'}">${escapeHtml(item.badge || 'NOTICE')}</span>
          <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(item.date)}</span>
        </div>
        <div class="update-item-title">${escapeHtml(item.title)}</div>
        <div class="update-item-summary">${escapeHtml(item.summary)}</div>
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="update-item-link">Open Official Circular &rarr;</a>` : ''}
      </div>
    `).join('');
  }

  if (viewAllUpdatesBtn) viewAllUpdatesBtn.addEventListener('click', () => updatesModal.classList.add('active'));
  if (closeModalBtn) closeModalBtn.addEventListener('click', () => updatesModal.classList.remove('active'));
  if (updatesModal) updatesModal.addEventListener('click', (e) => { if (e.target === updatesModal) updatesModal.classList.remove('active'); });

  window.openUpdateDetail = function(id) {
    if (updatesModal) updatesModal.classList.add('active');
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  loadData();
});
