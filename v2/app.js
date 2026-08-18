const skus = [
  {
    name: 'Full Suite',
    sku: 'LOOP-FSBI',
    category: 'Full-suite',
    model: 'Per location / month',
    price: 499,
    unit: 'loc/mo',
    included: 'Finance, Operations, Marketing, and BI',
  },
  {
    name: 'BI',
    sku: 'LOOP-BI',
    category: 'AIBI',
    model: 'Per location / month',
    price: 199,
    unit: 'loc/mo',
    included: 'AI-powered business intelligence',
  },
  {
    name: 'Operations',
    sku: 'LOOP-OPS',
    category: 'Operations',
    model: 'Per location / month',
    price: 99,
    unit: 'loc/mo',
    included: 'Operational workflows and controls',
  },
  {
    name: 'Marketing',
    sku: 'LOOP-MKT',
    category: 'Marketing',
    model: 'Per location / month',
    price: 199,
    unit: 'loc/mo',
    included: 'Marketing performance and growth workflows',
  },
  {
    name: 'Finance',
    sku: 'LOOP-FIN',
    category: 'Finance',
    model: 'Per location / month',
    price: 99,
    unit: 'loc/mo',
    included: '3PD and full revenue reconciliation',
  },
  {
    name: 'Finance 3PD',
    sku: 'LOOP-FIN-3PD',
    category: 'Finance',
    model: 'Per location / month',
    price: 50,
    unit: 'loc/mo',
    included: 'Third-party delivery reconciliation',
  },
  {
    name: 'Full Revenue Reconciliation',
    sku: 'LOOP-FIN-FULL',
    category: 'Add-on',
    model: 'Per location / month',
    price: 50,
    unit: 'loc/mo',
    included: 'Add-on for Finance 3PD',
    addonOnly: true,
  },
  {
    name: 'Voice',
    sku: 'LOOP-VOICE',
    category: 'Add-on',
    model: 'Per location / month',
    price: 25,
    unit: 'loc/mo',
    included: 'Voice workflows',
    addonOnly: true,
  },
  {
    name: 'Platform Setup & Onboarding',
    sku: 'LOOP-IMPL',
    category: 'Implementation',
    model: 'One-time',
    price: 199,
    unit: 'loc',
    included: 'Platform setup and guided onboarding',
  },
  {
    name: 'Compass',
    sku: 'LOOP-CMP',
    category: 'Marketing',
    model: 'Per brand / month',
    price: 999,
    unit: 'brand/mo',
    included: 'Brand-level marketing intelligence',
  },
]

const legacyMappings = [
  ['Loop AI (Recover) only', 'Loop Operations'],
  ['Loop AI (Protect)', 'Loop Operations'],
  ['Loop AI (Recover) + Loop AI (Guard)', 'Loop Operations'],
  ['Loop AI (Balance)', 'Loop Finance Full'],
  ['Loop AI (TruROI)', 'Loop Marketing'],
  ['Loop AI (TruROI+)', 'Loop Marketing'],
  ['Loop AI (Re-Engage)', 'Loop Marketing'],
  ['Loop AI (Compass)', 'Loop Compass'],
  ['Agent Bundle', 'Loop BI'],
]

const locations = [
  'Hamm Org · Chelsea',
  'Hamm Org · Flatiron',
  'Hamm Org · Williamsburg',
  'Hamm Org · Park Slope',
  'Hamm Org · Astoria',
  'Hamm Org · Long Island City',
  'Hamm Org · Hoboken',
  'Hamm Org · Jersey City',
  'Hamm Org · Stamford',
  'Hamm Org · Greenwich',
  'Hamm Org · White Plains',
  'Hamm Org · New Rochelle',
]

const initialEntities = [
  {
    id: 'north',
    name: 'Hamm Org · North',
    locations: locations.slice(8),
    contact: 'kara.sandoval@hammorg.com',
    address: '100 Park Ave, New York, NY 10017',
  },
  {
    id: 'city',
    name: 'Hamm Org · New York City',
    locations: locations.slice(0, 6),
    contact: 'ap@hammorg.com',
    address: '100 Park Ave, New York, NY 10017',
  },
  {
    id: 'nj',
    name: 'Hamm Org · New Jersey',
    locations: locations.slice(6, 8),
    contact: 'tom.richards@hammorg.com',
    address: '221 River St, Hoboken, NJ 07030',
  },
]

const invoices = [
  ['INV-2026-0074', 'Hamm Org · New York City', 'Aug 1, 2026', '$3,882.00', 'Open'],
  ['INV-2026-0062', 'Hamm Org · North', 'Jul 1, 2026', '$2,588.00', 'Paid'],
  ['INV-2026-0061', 'Hamm Org · New Jersey', 'Jul 1, 2026', '$1,294.00', 'Paid'],
  ['INV-2026-0050', 'Hamm Org · New York City', 'Jun 1, 2026', '$3,882.00', 'Paid'],
  ['INV-2026-0038', 'Hamm Org · North', 'May 1, 2026', '$2,588.00', 'Paid'],
]

const statements = [
  ['August 2026', 'Aug 1 – Aug 31, 2026', '$3,882.00', 'Ready'],
  ['July 2026', 'Jul 1 – Jul 31, 2026', '$3,882.00', 'Ready'],
  ['June 2026', 'Jun 1 – Jun 30, 2026', '$3,882.00', 'Ready'],
  ['May 2026', 'May 1 – May 31, 2026', '$3,882.00', 'Ready'],
]

const existingNavigation = [
  ['overview', 'space_dashboard', 'Overview'],
  ['products', 'deployed_code', 'Products'],
  ['entities', 'account_tree', 'Billing entities'],
  ['payments', 'credit_card', 'Payment methods'],
  ['invoices', 'receipt_long', 'Invoices'],
  ['statements', 'description', 'Statements'],
  ['closure', 'store_off', 'Store closure'],
]

const onboardingStepMeta = [
  ['Review contract', 'Products, price, and locations'],
  ['Billing entities', 'Choose how invoices are organized'],
  ['Payment methods', 'Choose independent payment coverage'],
  ['Review & finish', 'Confirm your setup'],
]

const state = {
  journey: 'existing',
  page: 'overview',
  sidebarOpen: false,
  onboardingStep: 0,
  onboardingComplete: false,
  structure: 'custom',
  paymentScope: 'all',
  entities: structuredClone(initialEntities),
  paymentMethods: [
    {
      id: 'visa-4242',
      type: 'Visa',
      last4: '4242',
      expiry: '09 / 2028',
      alias: 'Corporate Visa',
      coverage: ['All billing entities'],
      default: true,
    },
    {
      id: 'ach-1686',
      type: 'ACH',
      last4: '1686',
      expiry: 'Verified bank account',
      alias: 'Operating account',
      coverage: ['Backup · no active coverage'],
      default: false,
    },
  ],
  modal: null,
  uploadPreview: [],
  replace: null,
}

const app = document.querySelector('#app')

function icon(name) {
  return `<span class="material-symbols-rounded" aria-hidden="true">${name}</span>`
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function formatPrice(sku) {
  return `$${sku.price.toLocaleString()}<small>/${sku.unit}</small>`
}

function setHash() {
  const next = state.journey === 'existing' ? `#existing/${state.page}` : `#onboarding/${state.onboardingStep + 1}`
  if (window.location.hash !== next) history.replaceState(null, '', next)
}

function readHash() {
  const [journey, value] = window.location.hash.replace('#', '').split('/')
  if (journey === 'onboarding') {
    state.journey = 'onboarding'
    state.onboardingStep = Math.min(3, Math.max(0, Number(value || 1) - 1))
  } else if (journey === 'existing') {
    state.journey = 'existing'
    state.page = existingNavigation.some(([id]) => id === value) ? value : 'overview'
  }
}

function render() {
  setHash()
  app.innerHTML = `
    <div class="shell">
      ${renderSidebar()}
      <main class="main">
        ${renderTopbar()}
        <div class="content">
          <div class="mock-note">
            ${icon('science')}
            Interactive product mock · Sample data only · No billing or payment changes are saved
          </div>
          ${state.journey === 'existing' ? renderExistingPage() : renderOnboarding()}
        </div>
      </main>
    </div>
    ${renderModal()}
  `
}

function renderSidebar() {
  const body = state.journey === 'existing'
    ? `
      <div class="sidebar-label">Billing workspace</div>
      <nav class="side-nav" aria-label="Billing navigation">
        ${existingNavigation.map(([id, iconName, label]) => `
          <button type="button" class="${state.page === id ? 'active' : ''}" data-nav="${id}">
            ${icon(iconName)} <span>${label}</span>
          </button>
        `).join('')}
      </nav>
    `
    : `
      <div class="sidebar-label">Onboarding progress</div>
      <div class="onboarding-steps">
        ${onboardingStepMeta.map(([title, subtitle], index) => `
          <div class="onboarding-step ${state.onboardingComplete || index < state.onboardingStep ? 'done' : ''} ${index === state.onboardingStep && !state.onboardingComplete ? 'active' : ''}">
            <div class="step-dot">${state.onboardingComplete || index < state.onboardingStep ? icon('check') : index + 1}</div>
            <div class="step-copy"><strong>${title}</strong><span>${subtitle}</span></div>
          </div>
        `).join('')}
      </div>
    `

  return `
    <aside class="sidebar ${state.sidebarOpen ? 'open' : ''}">
      <div class="brand">
        <img src="assets/loop-mark.png" alt="Loop" />
        <div class="brand-wordmark">LOOP<span>AI</span></div>
        <div class="version-tag">V2</div>
      </div>
      <div class="demo-switch" aria-label="Choose a journey">
        <button type="button" class="${state.journey === 'existing' ? 'active' : ''}" data-journey="existing">Existing customer</button>
        <button type="button" class="${state.journey === 'onboarding' ? 'active' : ''}" data-journey="onboarding">New onboarding</button>
      </div>
      ${body}
      <div class="sidebar-footer">
        <div class="admin-identity">
          <div class="avatar">KS</div>
          <div><strong>Kara Sandoval</strong><span>Finance administrator</span></div>
        </div>
      </div>
    </aside>
  `
}

function renderTopbar() {
  const title = state.journey === 'existing'
    ? existingNavigation.find(([id]) => id === state.page)?.[2]
    : onboardingStepMeta[state.onboardingStep][0]
  return `
    <header class="topbar">
      <button type="button" class="icon-btn mobile-menu" data-action="toggle-sidebar" aria-label="Open navigation">${icon('menu')}</button>
      <div class="breadcrumb">Hamm Org <strong>/ ${title}</strong></div>
      <div class="top-actions">
        ${state.journey === 'existing' ? `
          <select class="org-select" aria-label="Account scope">
            <option>All billing entities</option>
            ${state.entities.map((entity) => `<option>${escapeHtml(entity.name)}</option>`).join('')}
          </select>
        ` : '<span class="pill pill-teal">12 locations</span>'}
        <button type="button" class="icon-btn" data-action="help" aria-label="Get billing help">${icon('help')}</button>
      </div>
    </header>
  `
}

function renderExistingPage() {
  const pages = {
    overview: renderOverview,
    products: renderProducts,
    entities: renderEntities,
    payments: renderPayments,
    invoices: renderInvoices,
    statements: renderStatements,
    closure: renderClosure,
  }
  return pages[state.page]()
}

function pageHeader(eyebrow, title, subtitle, actions = '') {
  return `
    <div class="page-header">
      <div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="subtitle">${subtitle}</p></div>
      ${actions ? `<div class="actions">${actions}</div>` : ''}
    </div>
  `
}

function renderOverview() {
  return `
    ${pageHeader('Billing overview', 'Good afternoon, Kara', 'A consolidated view of Hamm Org’s contract, invoices, and payment status across 12 locations.')}
    <div class="grid grid-4">
      ${metric('Total billed · YTD', '$27,174', 'Jan – Aug 2026', 'receipt_long')}
      ${metric('Payments received', '$23,292', '7 of 8 invoices paid', 'check_circle')}
      ${metric('Outstanding', '$3,882', 'Due Aug 31, 2026', 'schedule')}
      ${metric('Next invoice', 'Sep 1', 'Estimated $6,288', 'event')}
    </div>
    <section class="section grid grid-2">
      <div class="card">
        <div class="card-header">
          <h2>Billed vs. paid</h2>
          <div class="legend"><span><i></i>Billed</span><span><i></i>Paid</span></div>
        </div>
        <div class="chart">
          ${[[71,71],[71,71],[75,75],[75,75],[82,82],[82,82],[91,91],[96,25]].map(([a,b]) => `<div class="chart-group"><div class="bar" style="height:${a}%"></div><div class="bar secondary" style="height:${b}%"></div></div>`).join('')}
        </div>
        <div class="chart-labels"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span></div>
      </div>
      <div class="card">
        <div class="card-header"><h2>What needs attention</h2><span class="pill pill-amber">2 items</span></div>
        <div class="list-row">
          <div class="file-icon">${icon('schedule')}</div>
          <div class="row-main"><strong>Invoice INV-2026-0074 is due in 13 days</strong><span>$3,882.00 · Auto-pay scheduled for Aug 29</span></div>
          <button class="table-action" data-nav="invoices">View</button>
        </div>
        <div class="list-row">
          <div class="file-icon">${icon('store')}</div>
          <div class="row-main"><strong>New location is not assigned</strong><span>Hamm Org · SoHo needs a billing entity</span></div>
          <button class="table-action" data-nav="entities">Assign</button>
        </div>
        <div class="list-row">
          <div class="file-icon">${icon('verified_user')}</div>
          <div class="row-main"><strong>All payment methods are healthy</strong><span>Primary and backup methods verified</span></div>
          <span class="pill pill-green">Ready</span>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-heading"><div><h2>Contract files</h2><p>Your current order form and service terms.</p></div></div>
      <div class="card">
        <div class="contract-row">
          <div class="file-icon">${icon('description')}</div>
          <div class="row-main"><strong>Hamm_Org_Loop_Order_Form_2026.pdf</strong><span>Signed Dec 15, 2025 · Annual · Renews Dec 15, 2026</span></div>
          <button type="button" class="btn btn-secondary btn-sm" data-action="download-demo">${icon('download')} Download</button>
        </div>
      </div>
    </section>
  `
}

function metric(label, value, foot, iconName) {
  return `<div class="metric-card"><div class="metric-top"><span class="metric-label">${label}</span><span class="metric-icon">${icon(iconName)}</span></div><div class="metric-value">${value}</div><div class="metric-foot">${foot}</div></div>`
}

function renderProducts() {
  const activeSkus = new Map([
    ['LOOP-FSBI', { status: 'Active', coverage: '12 Locations', total: '$5,988', cadence: '/mo' }],
    ['LOOP-VOICE', { status: 'Active', coverage: '12 Locations', total: '$300', cadence: '/mo' }],
    ['LOOP-IMPL', { status: 'Complete', coverage: '12 Locations', total: '$2,388', cadence: 'one-time' }],
  ])
  const orderedSkus = [...skus].sort((a, b) => Number(activeSkus.has(b.sku)) - Number(activeSkus.has(a.sku)))
  return `
    <div class="myloop-heading">
      <div>
        <p class="eyebrow">Products & contract</p>
        <div class="myloop-title"><h1>My Loop</h1><span class="pill pill-teal">${icon('location_on')} 12 Locations</span></div>
        <p class="subtitle">See what is active today and explore products available for your next expansion.</p>
      </div>
      <button class="btn btn-primary" data-modal="add-product">${icon('add')} Explore products</button>
    </div>
    <div class="myloop-grid">
      ${orderedSkus.map((item) => activeSkus.has(item.sku)
        ? myLoopActiveCard(item, activeSkus.get(item.sku))
        : myLoopExploreCard(item)).join('')}
    </div>
    <section class="section">
      <div class="section-heading"><div><h2>Current product catalog</h2><p>Contract-ready SKUs and list prices.</p></div><span class="pill pill-blue">2026 catalog</span></div>
      <div class="card catalog-table-wrap">
        <table>
          <thead><tr><th>Contract product</th><th>Internal SKU</th><th>Category</th><th>Billing model</th><th>List price</th><th>Included</th></tr></thead>
          <tbody>
            ${skus.map((item) => `
              <tr>
                <td><strong>${item.name}</strong>${item.addonOnly ? '<br><span class="pill pill-amber">Add-on only</span>' : ''}</td>
                <td><code>${item.sku}</code></td>
                <td>${item.category}</td>
                <td>${item.model}</td>
                <td>$${item.price.toLocaleString()}/${item.unit}</td>
                <td>${item.included}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="notice warning" style="margin-top:12px">
        ${icon('info')}
        <div><strong>Expansion rule:</strong> Full Revenue Reconciliation (LOOP-FIN-FULL) is shown only for add-on or expansion opportunities paired with Finance 3PD.</div>
      </div>
    </section>
    <section class="section">
      <div class="section-heading"><div><h2>Legacy product mapping</h2><p>Use this crosswalk when reviewing older contracts or invoices.</p></div></div>
      <div class="card">
        ${legacyMappings.map(([legacy, current]) => `<div class="legacy-map"><span>${legacy}</span>${icon('arrow_forward')}<strong>${current}</strong></div>`).join('')}
      </div>
    </section>
  `
}

const productPresentation = {
  'LOOP-FSBI': { icon: 'dashboard', tagline: 'Finance, Operations, Marketing, and BI in one connected suite.', proof: 'One contract and one workspace across the full Loop platform' },
  'LOOP-BI': { icon: 'query_stats', tagline: 'Ask business questions and get answers across every connected data source.', proof: 'Teams answer performance questions in minutes, not days' },
  'LOOP-OPS': { icon: 'settings_suggest', tagline: 'Turn operational exceptions into clear workflows for every location.', proof: 'Keep store-level issues visible from detection through resolution' },
  'LOOP-MKT': { icon: 'campaign', tagline: 'Connect campaign activity to restaurant revenue and customer behavior.', proof: 'Unify marketing performance across channels and locations' },
  'LOOP-FIN': { icon: 'account_balance_wallet', tagline: 'Automate 3PD and full revenue reconciliation in one finance workflow.', proof: 'Reconcile third-party delivery and full revenue together' },
  'LOOP-FIN-3PD': { icon: 'receipt_long', tagline: 'Reconcile third-party delivery payouts, commissions, and adjustments.', proof: 'Find delivery-platform leakage without manual spreadsheet work' },
  'LOOP-FIN-FULL': { icon: 'fact_check', tagline: 'Extend Finance 3PD into complete revenue reconciliation.', proof: 'Expansion add-on · available with Finance 3PD' },
  'LOOP-VOICE': { icon: 'graphic_eq', tagline: 'Bring voice workflows into your Loop operating system.', proof: 'Add voice coverage across every contracted location' },
  'LOOP-IMPL': { icon: 'rocket_launch', tagline: 'Guided platform setup and onboarding for every location.', proof: 'Configuration, mapping, and launch support included' },
  'LOOP-CMP': { icon: 'explore', tagline: 'Brand-level marketing intelligence for sharper growth decisions.', proof: 'See brand performance and opportunities in one view' },
}

function myLoopActiveCard(item, active) {
  const presentation = productPresentation[item.sku]
  return `
    <article class="myloop-card active">
      <div class="myloop-banner">
        <div class="myloop-icon">${icon(presentation.icon)}</div>
        <div class="myloop-banner-copy"><h2>${item.name}</h2><span>${active.coverage} · ${item.sku}</span></div>
        <span class="myloop-status">${active.status}</span>
      </div>
      <div class="myloop-active-body">
        <div class="myloop-pricing"><span>$${item.price.toLocaleString()} ${item.unit}</span><strong>${active.total}<small>${active.cadence}</small></strong></div>
        <p>${presentation.tagline}</p>
        <button class="btn btn-secondary btn-sm" data-action="share-product" data-product="${item.name}">${icon('share')} Share</button>
      </div>
    </article>
  `
}

function myLoopExploreCard(item) {
  const presentation = productPresentation[item.sku]
  return `
    <article class="myloop-card explore">
      <div class="myloop-banner">
        <div class="myloop-icon">${icon(presentation.icon)}</div>
        <div class="myloop-banner-copy"><h2>${item.name}</h2><span>${item.sku} · Not enabled</span></div>
        <span class="myloop-status">Explore</span>
      </div>
      <p class="myloop-tagline">${presentation.tagline}</p>
      <div class="myloop-proof">${icon(item.sku === 'LOOP-FIN-FULL' ? 'extension' : 'trending_up')}<strong>${presentation.proof}</strong></div>
      <div class="myloop-actions">
        <button class="myloop-action overview" data-modal="product-detail:${item.sku}">${icon('play_circle')} Watch product overview</button>
        <button class="myloop-action help" data-action="product-help" data-product="${item.name}">${icon('insights')} How can this help me?</button>
        <button class="myloop-action enable" data-action="request-product" data-product="${item.name}">${icon('bolt')} Request to enable</button>
        <button class="myloop-action share" data-action="share-product" data-product="${item.name}">${icon('share')} Share</button>
      </div>
    </article>
  `
}

function renderEntities() {
  return `
    ${pageHeader(
      'Billing administration',
      'Billing entities',
      'Decide which locations appear together on invoices. You can add or edit entities; customers cannot delete them.',
      `<button class="btn btn-secondary" data-modal="bulk">${icon('upload_file')} Bulk map</button><button class="btn btn-primary" data-modal="add-entity">${icon('add')} Add entity</button>`,
    )}
    <div class="notice info">
      ${icon('lock')}
      <div><strong>Safe editing:</strong> To retire a billing entity, first move every location to another entity. Loop Finance will archive the empty entity; no customer-facing delete action is available.</div>
    </div>
    <div class="grid grid-3 section">
      ${state.entities.map((entity) => entityCard(entity)).join('')}
      <article class="entity-card" style="border-style:dashed;display:grid;place-items:center;text-align:center;min-height:210px">
        <div><div class="choice-icon" style="margin:0 auto 12px">${icon('add_business')}</div><h3>Need another invoice group?</h3><p class="product-description">Add an entity, then reassign locations to it.</p><button class="btn btn-secondary btn-sm" data-modal="add-entity">Add entity</button></div>
      </article>
    </div>
    <section class="section">
      <div class="section-heading"><div><h2>Location coverage</h2><p>Every active location should map to at least one billing entity.</p></div><span class="pill pill-amber">1 needs mapping</span></div>
      <div class="card table-wrap">
        <table>
          <thead><tr><th>Location</th><th>Billing entity</th><th>Payment coverage</th><th>Status</th></tr></thead>
          <tbody>
            ${state.entities.flatMap((entity) => entity.locations.slice(0, 2).map((location) => `<tr><td><strong>${location}</strong></td><td>${entity.name}</td><td>Corporate Visa · •••• 4242</td><td><span class="pill pill-green">Mapped</span></td></tr>`)).join('')}
            <tr><td><strong>Hamm Org · SoHo</strong></td><td>—</td><td>—</td><td><span class="pill pill-amber">Needs mapping</span></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `
}

function entityCard(entity) {
  return `
    <article class="entity-card">
      <div class="entity-top">
        <div><h3>${escapeHtml(entity.name)}</h3><span class="sku-code">ENTITY-${entity.id.toUpperCase()}</span></div>
        <button class="icon-btn" data-modal="edit-entity:${entity.id}" aria-label="Edit ${escapeHtml(entity.name)}">${icon('edit')}</button>
      </div>
      <div class="entity-meta">
        <div class="meta-item"><span>Locations</span><strong>${entity.locations.length} assigned</strong></div>
        <div class="meta-item"><span>Invoice contact</span><strong>${escapeHtml(entity.contact)}</strong></div>
        <div class="meta-item" style="grid-column:1/-1"><span>Billing address</span><strong>${escapeHtml(entity.address)}</strong></div>
      </div>
    </article>
  `
}

function renderPayments() {
  const primaryMethod = state.paymentMethods.find((method) => method.default) || state.paymentMethods[0]
  return `
    ${pageHeader(
      'Billing administration',
      'Payment methods',
      'Payment coverage is independent of your billing entity structure. Use one method, one per entity, or custom coverage groups.',
      `<button class="btn btn-primary" data-modal="add-method">${icon('add_card')} Add method</button>`,
    )}
    <div class="notice info">
      ${icon('verified_user')}
      <div><strong>Protected replacement:</strong> A payment method with active coverage cannot be removed directly. Add a replacement, move its coverage, and then retire the old method in one guided flow.</div>
    </div>
    <div class="grid grid-2 section">
      ${state.paymentMethods.map((method) => methodCard(method)).join('')}
    </div>
    <section class="section">
      <div class="section-heading"><div><h2>Coverage by billing entity</h2><p>Payment methods can cover any combination of entities.</p></div><button class="btn btn-secondary btn-sm" data-modal="coverage">${icon('tune')} Edit coverage</button></div>
      <div class="card table-wrap">
        <table>
          <thead><tr><th>Billing entity</th><th>Locations</th><th>Primary method</th><th>Auto-pay</th></tr></thead>
          <tbody>
            ${state.entities.map((entity) => `<tr><td><strong>${escapeHtml(entity.name)}</strong></td><td>${entity.locations.length}</td><td>${escapeHtml(primaryMethod.alias)} · •••• ${primaryMethod.last4}</td><td><span class="pill pill-green">On</span></td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `
}

function methodCard(method) {
  const methodMark = method.type === 'ACH' ? 'ACH' : method.type === 'Mastercard' ? 'MC' : 'VISA'
  return `
    <article class="method-card">
      <div class="method-top">
        <div class="method-summary">
          <div class="method-logo">${methodMark}</div>
          <div class="row-main"><strong>${escapeHtml(method.alias)} · •••• ${method.last4}</strong><span>${method.type === 'ACH' ? method.expiry : `Expires ${method.expiry}`}</span></div>
        </div>
        ${method.default ? '<span class="pill pill-green">Primary</span>' : '<span class="pill pill-blue">Backup</span>'}
      </div>
      <div class="coverage"><span>Coverage</span><div class="coverage-tags">${method.coverage.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join('')}</div></div>
      <div class="actions" style="margin-top:16px">
        <button class="btn btn-secondary btn-sm" data-modal="replace-method:${method.id}">${icon('swap_horiz')} Replace</button>
        <button class="btn btn-quiet btn-sm" data-modal="coverage">Change coverage</button>
      </div>
    </article>
  `
}

function renderInvoices() {
  return `
    ${pageHeader('Billing history', 'Invoices', 'View invoice status across every billing entity and download invoice documents.', `<button class="btn btn-secondary">${icon('download')} Export CSV</button>`)}
    <div class="search-row"><div class="search-box">${icon('search')}<input aria-label="Search invoices" placeholder="Search invoice or billing entity" /></div><select class="org-select"><option>All statuses</option><option>Open</option><option>Paid</option></select></div>
    <div class="card table-wrap">
      <table>
        <thead><tr><th>Invoice</th><th>Billing entity</th><th>Invoice date</th><th>Amount</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${invoices.map(([number, entity, date, amount, status]) => `<tr><td><strong>${number}</strong></td><td>${entity}</td><td>${date}</td><td><strong>${amount}</strong></td><td><span class="pill ${status === 'Paid' ? 'pill-green' : 'pill-amber'}">${status}</span></td><td><button class="table-action" data-modal="invoice:${number}">View</button></td></tr>`).join('')}
        </tbody>
      </table>
    </div>
  `
}

function renderStatements() {
  return `
    ${pageHeader('Billing history', 'Statements of account', 'Monthly statements consolidate activity across invoices, credits, and payments.', `<button class="btn btn-primary" data-action="download-demo">${icon('download')} Download latest</button>`)}
    <div class="card table-wrap">
      <table>
        <thead><tr><th>Statement</th><th>Period</th><th>Closing balance</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${statements.map(([month, period, balance, status]) => `<tr><td><strong>${month}</strong></td><td>${period}</td><td>${balance}</td><td><span class="pill pill-green">${status}</span></td><td><button class="table-action" data-action="download-demo">Download PDF</button></td></tr>`).join('')}
        </tbody>
      </table>
    </div>
  `
}

function renderClosure() {
  return `
    ${pageHeader('Account changes', 'Report a store closure', 'Tell Loop about a permanent closure so future billing and product coverage can be reviewed.')}
    <div class="store-closure">
      <div class="card card-pad">
        <h2>Closure details</h2>
        <p class="subtitle" style="margin-bottom:20px">This sends a request to your Loop account team. It does not delete the location or change an invoice immediately.</p>
        <div class="field"><label for="closure-location">Location</label><select id="closure-location"><option value="">Choose a location</option>${locations.map((location) => `<option>${location}</option>`).join('')}</select></div>
        <div class="field-row">
          <div class="field"><label for="closure-date">Last day of operations</label><input id="closure-date" type="date" value="2026-09-30" /></div>
          <div class="field"><label for="closure-reason">Reason</label><select id="closure-reason"><option>Permanent closure</option><option>Ownership change</option><option>Temporary closure</option></select></div>
        </div>
        <div class="field"><label for="closure-notes">Notes</label><textarea id="closure-notes" placeholder="Add context for your account team"></textarea></div>
        <button class="btn btn-primary" data-action="submit-closure">Submit closure request</button>
      </div>
      <div class="card">
        <div class="card-header"><h2>What happens next</h2></div>
        <div class="info-list">
          ${infoListItem('counter_1', 'We review the request', 'Loop validates the effective date and linked products.')}
          ${infoListItem('counter_2', 'Billing impact is confirmed', 'Your finance administrator receives the proration or contract impact.')}
          ${infoListItem('counter_3', 'The location is archived', 'Historical invoices and records remain available.')}
        </div>
      </div>
    </div>
  `
}

function infoListItem(iconName, title, copy) {
  return `<div class="info-list-item">${icon(iconName)}<div><strong>${title}</strong><span>${copy}</span></div></div>`
}

function renderOnboarding() {
  if (state.onboardingComplete) return renderOnboardingComplete()
  const content = [renderPlanStep, renderEntityStep, renderPaymentStep, renderReviewStep][state.onboardingStep]()
  return `
    <div class="wizard-shell">
      ${pageHeader('New customer onboarding', onboardingStepMeta[state.onboardingStep][0], onboardingStepMeta[state.onboardingStep][1])}
      <section class="wizard-panel">${content}</section>
      <footer class="wizard-footer">
        <span class="progress-copy">Step ${state.onboardingStep + 1} of 4 · Progress saves automatically</span>
        <div class="actions">
          <button class="btn btn-secondary" data-action="onboarding-back" ${state.onboardingStep === 0 ? 'disabled' : ''}>Back</button>
          <button class="btn btn-dark" data-action="onboarding-next">${state.onboardingStep === 3 ? 'Finish setup' : 'Save & continue'} ${icon('arrow_forward')}</button>
        </div>
      </footer>
    </div>
  `
}

function renderPlanStep() {
  return `
    <div class="contract-summary">
      <div class="plan-hero">
        <p class="eyebrow">Signed order form</p>
        <h2>Full Suite</h2>
        <span class="sku-code" style="color:rgba(255,255,255,.5)">LOOP-FSBI</span>
        <p style="margin-top:17px">Finance, Operations, Marketing, and BI across every contracted location.</p>
        <div class="included-list">
          ${['Finance · 3PD & full revenue reconciliation', 'Operations', 'Marketing', 'Business intelligence'].map((item) => `<div class="included-item">${icon('check_circle')} ${item}</div>`).join('')}
        </div>
        <div class="hero-price">$5,988 <span>/ month · 12 locations</span></div>
      </div>
      <div class="summary-stack">
        <div class="summary-tile"><span>Add-on</span><strong>Voice · LOOP-VOICE</strong><small>$300 / month · 12 locations</small></div>
        <div class="summary-tile"><span>One-time</span><strong>Platform Setup & Onboarding</strong><small>$2,388 · 12 locations</small></div>
        <div class="summary-tile"><span>Contract term</span><strong>Sep 1, 2026 – Aug 31, 2027</strong><small>Annual agreement · Monthly invoicing</small></div>
        <div class="summary-tile"><span>First invoice estimate</span><strong>$8,676.00</strong><small>Recurring products + one-time implementation</small></div>
      </div>
    </div>
    <div class="notice info" style="margin-top:18px">${icon('info')}<div>Products and prices come from your signed order form. Contact your Loop account team if anything looks incorrect.</div></div>
  `
}

function renderEntityStep() {
  return `
    <h2>How should we structure your billing?</h2>
    <p class="subtitle" style="margin-bottom:18px">Choose how locations roll up into invoices. You can edit names, contacts, addresses, and location assignments later.</p>
    <div class="choice-grid">
      ${choiceCard('single', 'receipt_long', 'Single entity', 'All 12 locations on one consolidated invoice.')}
      ${choiceCard('per-location', 'storefront', 'One per location', 'Each location gets its own billing entity and invoice.')}
      ${choiceCard('custom', 'account_tree', 'Custom groups', 'Group locations into a few entities based on your preference.')}
    </div>
    <div class="bulk-callout">
      <div class="choice-icon">${icon('upload_file')}</div>
      <div class="row-main"><strong>Setting up many locations?</strong><span>Upload location, billing entity, and payment alias mappings in one spreadsheet.</span></div>
      <button class="btn btn-secondary btn-sm" data-modal="bulk">Bulk upload</button>
    </div>
    ${renderStructurePreview()}
  `
}

function choiceCard(id, iconName, title, description) {
  return `<button type="button" class="choice-card ${state.structure === id ? 'selected' : ''}" data-structure="${id}"><span class="choice-icon">${icon(iconName)}</span><h3>${title}</h3><p>${description}</p></button>`
}

function onboardingEntities() {
  if (state.structure === 'single') return [{ name: 'Hamm Org · Consolidated', locations }]
  if (state.structure === 'per-location') return locations.map((location) => ({ name: location.replace('Hamm Org · ', ''), locations: [location] }))
  return state.entities
}

function renderStructurePreview() {
  const entities = onboardingEntities()
  const shown = entities.slice(0, state.structure === 'per-location' ? 6 : entities.length)
  return `
    <div class="preview-grid">
      <div class="location-list">
        <div class="compact-heading"><strong>Locations</strong><span>12 contracted</span></div>
        ${locations.slice(0, 7).map((location) => `<div class="location-item">${icon('store')}<span>${location.replace('Hamm Org · ', '')}</span><span class="tag">Ready</span></div>`).join('')}
        <div class="location-item" style="justify-content:center;color:var(--ink-500)">+ 5 more locations</div>
      </div>
      <div class="group-list">
        <div class="compact-heading"><strong>Billing entity preview</strong><span>${entities.length} ${entities.length === 1 ? 'entity' : 'entities'}</span></div>
        ${shown.map((entity, index) => `<div class="group-row"><div class="group-row-top"><strong>${escapeHtml(entity.name)}</strong><span class="pill pill-teal">${entity.locations.length} loc.</span></div><p>${entity.locations.slice(0, 3).map((location) => location.replace('Hamm Org · ', '')).join(', ')}${entity.locations.length > 3 ? ` + ${entity.locations.length - 3} more` : ''}</p></div>`).join('')}
        ${entities.length > shown.length ? `<div class="group-row"><p style="margin:0;text-align:center">+ ${entities.length - shown.length} more entities</p></div>` : ''}
      </div>
    </div>
  `
}

function renderPaymentStep() {
  const entities = onboardingEntities()
  return `
    <h2>How should payment methods cover your invoices?</h2>
    <p class="subtitle" style="margin-bottom:18px">This choice is independent of your billing entity structure. Card and bank details are handled securely and never appear in bulk-upload files.</p>
    <div class="radio-list">
      ${radioCard('all', 'One method for everything', `One payment method covers all ${entities.length} billing ${entities.length === 1 ? 'entity' : 'entities'}.`, 'Recommended')}
      ${radioCard('entity', 'A method per billing entity', `Collect and map ${entities.length} separate payment ${entities.length === 1 ? 'method' : 'methods'}.`, '')}
      ${radioCard('groups', 'Custom payment groups', 'Create a few payment groups and map any combination of billing entities to each.', 'Independent mapping')}
    </div>
    <div class="payment-entry">
      <div class="payment-form-mock">
        <div class="method-summary" style="margin-bottom:16px"><div class="method-logo">VISA</div><div class="row-main"><strong>Secure payment details</strong><span>Card or ACH bank account</span></div>${icon('lock')}</div>
        <div class="field"><label>Payment method</label><div class="field-row"><input aria-label="Card number" value="4242 4242 4242 4242" readonly /><input aria-label="Expiry" value="09 / 28" readonly /></div></div>
        <div class="field"><label>Payment alias</label><input value="Corporate Visa" aria-label="Payment alias" /></div>
        <div class="notice success">${icon('verified')}<div>Demo method is ready. In production this is collected through Stripe.</div></div>
      </div>
      <div class="card card-pad">
        <h3>Coverage preview</h3>
        <p class="product-description">${paymentScopeDescription(entities)}</p>
        <div class="coverage-tags">
          ${paymentCoverageTags(entities).map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join('')}
        </div>
        <div class="notice info" style="margin-top:18px">${icon('autorenew')}<div>Auto-pay is on by default. ACH methods may require micro-deposit verification before setup completes.</div></div>
      </div>
    </div>
  `
}

function radioCard(id, title, copy, badge) {
  return `<label class="radio-card ${state.paymentScope === id ? 'selected' : ''}"><input type="radio" name="payment-scope" value="${id}" ${state.paymentScope === id ? 'checked' : ''} /><span class="radio-copy"><strong>${title}</strong><span>${copy}</span></span>${badge ? `<span class="pill pill-blue">${badge}</span>` : ''}</label>`
}

function paymentScopeDescription(entities) {
  if (state.paymentScope === 'all') return 'Corporate Visa will cover every current billing entity and any newly added entity by default.'
  if (state.paymentScope === 'entity') return 'Each entity receives its own method. You will collect the remaining methods after this first one.'
  return 'Two payment groups cover the selected entities, regardless of how those billing entities were formed.'
}

function paymentCoverageTags(entities) {
  if (state.paymentScope === 'all') return ['All billing entities']
  if (state.paymentScope === 'entity') return entities.slice(0, 5).map((entity) => entity.name)
  return ['Group A · City + North', 'Group B · New Jersey']
}

function renderReviewStep() {
  const entities = onboardingEntities()
  return `
    <h2>Review your billing setup</h2>
    <p class="subtitle" style="margin-bottom:18px">Confirm the contract, invoice structure, and payment coverage before finishing.</p>
    <div class="review-section">
      <div class="review-title"><h3>Products</h3><button class="table-action" data-onboarding-step="0">Review</button></div>
      <div class="review-lines"><div class="review-line"><span>Full Suite · LOOP-FSBI</span><strong>$5,988 / month</strong></div><div class="review-line"><span>Voice · LOOP-VOICE</span><strong>$300 / month</strong></div><div class="review-line"><span>Setup & Onboarding · LOOP-IMPL</span><strong>$2,388 one-time</strong></div></div>
    </div>
    <div class="review-section">
      <div class="review-title"><h3>Billing entities</h3><button class="table-action" data-onboarding-step="1">Edit</button></div>
      <div class="review-lines"><div class="review-line"><span>Structure</span><strong>${structureLabel()}</strong></div><div class="review-line"><span>Coverage</span><strong>${entities.length} entities · 12 locations</strong></div></div>
    </div>
    <div class="review-section">
      <div class="review-title"><h3>Payment methods</h3><button class="table-action" data-onboarding-step="2">Edit</button></div>
      <div class="review-lines"><div class="review-line"><span>Corporate Visa · •••• 4242</span><strong>${paymentScopeLabel()}</strong></div><div class="review-line"><span>Auto-pay</span><strong>On</strong></div></div>
    </div>
    <div class="notice success" style="margin-top:18px">${icon('check_circle')}<div><strong>Ready to finish.</strong> All 12 locations have billing and payment coverage. You can edit entities and methods later from Billing.</div></div>
  `
}

function structureLabel() {
  return { single: 'Single entity', 'per-location': 'One per location', custom: 'Custom groups' }[state.structure]
}

function paymentScopeLabel() {
  return { all: 'All entities', entity: 'One per entity', groups: 'Custom groups' }[state.paymentScope]
}

function renderOnboardingComplete() {
  return `
    <div class="wizard-shell">
      <section class="wizard-panel complete-state">
        <div class="complete-state-inner">
          <div class="success-mark">${icon('check')}</div>
          <p class="eyebrow">Setup complete</p>
          <h1>Your billing workspace is ready</h1>
          <p>All 12 locations are mapped to billing entities and covered by a verified payment method. Kara and the invoice contacts will receive a confirmation email.</p>
          <div class="actions" style="justify-content:center;margin-top:22px">
            <button class="btn btn-secondary" data-action="reset-onboarding">Review setup</button>
            <button class="btn btn-primary" data-journey="existing">Open Billing</button>
          </div>
        </div>
      </section>
    </div>
  `
}

function renderModal() {
  if (!state.modal) return ''
  const [kind, id] = state.modal.split(':')
  const renderers = {
    bulk: renderBulkModal,
    'add-entity': () => renderEntityModal(),
    'edit-entity': () => renderEntityModal(id),
    'add-method': renderAddMethodModal,
    'replace-method': () => renderReplaceMethodModal(id),
    coverage: renderCoverageModal,
    'add-product': renderAddProductModal,
    'product-detail': () => renderProductDetailModal(id),
    invoice: () => renderInvoiceModal(id),
    help: renderHelpModal,
  }
  return renderers[kind]?.() || ''
}

function modalShell(title, subtitle, body, footer, wide = false) {
  return `
    <div class="modal-backdrop" data-action="backdrop-close">
      <section class="modal ${wide ? 'wide' : ''}" role="dialog" aria-modal="true" aria-label="${escapeHtml(title)}">
        <header class="modal-head"><div><h2>${title}</h2>${subtitle ? `<p>${subtitle}</p>` : ''}</div><button class="close-btn" data-action="close-modal" aria-label="Close">${icon('close')}</button></header>
        <div class="modal-body">${body}</div>
        ${footer ? `<footer class="modal-foot">${footer}</footer>` : ''}
      </section>
    </div>
  `
}

function renderBulkModal() {
  const hasPreview = state.uploadPreview.length > 0
  const body = `
    <div class="upload-steps"><div class="upload-step active">1 · Template</div><div class="upload-step ${hasPreview ? 'active' : ''}">2 · Validate</div><div class="upload-step ${hasPreview ? 'active' : ''}">3 · Apply mapping</div></div>
    <div class="notice info" style="margin-bottom:14px">${icon('shield_lock')}<div>Use payment aliases such as “Corporate Visa,” never card numbers or bank details. Secure payment methods must be added before they can be mapped.</div></div>
    <div class="drop-zone">
      <div>${icon('upload_file')}<strong>Upload a CSV mapping file</strong><span>Required columns: location_name, billing_entity, payment_method_alias</span><input id="csv-file" type="file" accept=".csv,text/csv" hidden /><div class="actions" style="justify-content:center;margin-top:14px"><button class="btn btn-secondary btn-sm" data-action="choose-csv">Choose CSV</button><button class="btn btn-quiet btn-sm" data-action="sample-upload">Use sample data</button></div></div>
    </div>
    ${hasPreview ? `
      <div class="csv-preview table-wrap"><table><thead><tr><th>Location</th><th>Billing entity</th><th>Payment alias</th><th>Status</th></tr></thead><tbody>${state.uploadPreview.slice(0, 8).map((row) => `<tr><td>${escapeHtml(row.location_name)}</td><td>${escapeHtml(row.billing_entity)}</td><td>${escapeHtml(row.payment_method_alias)}</td><td><span class="pill pill-green">Valid</span></td></tr>`).join('')}</tbody></table></div>
      <div class="notice success" style="margin-top:12px">${icon('check_circle')}<div>${state.uploadPreview.length} rows validated. Every location, entity, and payment alias was recognized.</div></div>
    ` : ''}
  `
  const footer = `<button class="btn btn-secondary" data-action="download-template">${icon('download')} Download template</button><div class="actions"><button class="btn btn-secondary" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="apply-upload" ${hasPreview ? '' : 'disabled'}>Apply mapping</button></div>`
  return modalShell('Bulk map billing', 'Entities and payment coverage in one file', body, footer, true)
}

function renderEntityModal(id) {
  const entity = id ? state.entities.find((item) => item.id === id) : null
  const title = entity ? 'Edit billing entity' : 'Add billing entity'
  const selectedLocations = entity?.locations || []
  const body = `
    <div class="field"><label for="entity-name">Entity name</label><input id="entity-name" value="${escapeHtml(entity?.name || '')}" placeholder="e.g. Hamm Org · Southeast" /></div>
    <div class="field"><label for="entity-contact">Invoice contact</label><input id="entity-contact" type="email" value="${escapeHtml(entity?.contact || 'ap@hammorg.com')}" /></div>
    <div class="field"><label for="entity-address">Billing address</label><input id="entity-address" value="${escapeHtml(entity?.address || '100 Park Ave, New York, NY 10017')}" /></div>
    <div class="field"><label>Locations</label><div class="grid grid-2" style="gap:7px">${locations.map((location) => `<label class="radio-card" style="grid-template-columns:20px 1fr;padding:9px 10px"><input class="entity-location" type="checkbox" value="${escapeHtml(location)}" ${selectedLocations.includes(location) ? 'checked' : ''} /><span class="radio-copy"><strong>${location.replace('Hamm Org · ', '')}</strong></span></label>`).join('')}</div><small>A location can be linked to more than one entity; that may create multiple invoices for it.</small></div>
    <div class="notice info">${icon('lock')}<div>Billing entities cannot be deleted by customers. Move locations out of an entity and contact Loop Finance to archive it.</div></div>
  `
  const footer = `<span></span><div class="actions"><button class="btn btn-secondary" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-entity" data-entity-id="${id || ''}">${entity ? 'Save changes' : 'Add entity'}</button></div>`
  return modalShell(title, entity ? 'Update invoice organization and contacts' : 'Create another invoice group', body, footer, true)
}

function renderAddMethodModal() {
  const body = `
    <div class="field"><label for="method-type">Method type</label><select id="method-type"><option>Card</option><option>ACH bank account</option></select></div>
    <div class="field"><label for="method-alias">Payment alias</label><input id="method-alias" value="New payment method" /><small>This alias can be used in bulk mapping files.</small></div>
    <div class="field"><label>Demo card</label><div class="field-row"><input value="4242 4242 4242 4242" readonly /><input value="09 / 28" readonly /></div></div>
    <div class="field"><label for="method-coverage">Initial coverage</label><select id="method-coverage"><option>Backup · no active coverage</option><option>All billing entities</option>${state.entities.map((entity) => `<option>${escapeHtml(entity.name)}</option>`).join('')}</select></div>
    <div class="notice info">${icon('lock')}<div>Payment details are managed securely by Stripe. The payment alias is the only value exposed to mapping tools.</div></div>
  `
  const footer = `<span></span><div class="actions"><button class="btn btn-secondary" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-method">Add payment method</button></div>`
  return modalShell('Add payment method', 'Card or ACH bank account', body, footer)
}

function renderReplaceMethodModal(id) {
  const method = state.paymentMethods.find((item) => item.id === id)
  if (!method) return ''
  const stage = state.replace?.id === id ? state.replace.stage : 1
  let body
  let primary
  if (stage === 1) {
    body = `
      <div class="notice warning" style="margin-bottom:15px">${icon('shield')}<div>${escapeHtml(method.alias)} cannot be removed while it covers invoices. Add its replacement first.</div></div>
      <div class="field"><label>New payment alias</label><input id="replacement-alias" value="Replacement for ${escapeHtml(method.alias)}" /></div>
      <div class="field"><label>Demo card</label><div class="field-row"><input value="5555 5555 5555 4444" readonly /><input value="11 / 29" readonly /></div></div>
      <div class="notice success">${icon('verified')}<div>The new payment method will be added before any coverage changes.</div></div>
    `
    primary = `<button class="btn btn-primary" data-action="replace-next" data-method-id="${id}">Add replacement</button>`
  } else {
    body = `
      <div class="notice success" style="margin-bottom:15px">${icon('check_circle')}<div>Replacement Mastercard · •••• 4444 was added successfully.</div></div>
      <h3>Move coverage before retiring the old method</h3>
      <div class="review-lines" style="margin-top:13px"><div class="review-line"><span>Current method</span><strong>${escapeHtml(method.alias)} · •••• ${method.last4}</strong></div><div class="review-line"><span>Coverage to move</span><strong>${escapeHtml(method.coverage.join(', '))}</strong></div><div class="review-line"><span>New method</span><strong>Replacement Mastercard · •••• 4444</strong></div></div>
      <div class="notice info" style="margin-top:17px">${icon('swap_horiz')}<div>This action moves coverage atomically. The old method is retired only after the new method is active.</div></div>
    `
    primary = `<button class="btn btn-primary" data-action="finish-replace" data-method-id="${id}">Move coverage & retire old method</button>`
  }
  const footer = `<button class="btn btn-secondary" data-action="close-modal">Cancel</button>${primary}`
  return modalShell(`Replace ${escapeHtml(method.alias)}`, 'Add first, move coverage, then retire', body, footer)
}

function renderCoverageModal() {
  const body = `
    <div class="notice info" style="margin-bottom:15px">${icon('account_tree')}<div>Coverage groups are independent of billing entities. One method can cover any mix of entities.</div></div>
    ${state.entities.map((entity, index) => `<div class="field"><label>${escapeHtml(entity.name)}</label><select class="coverage-select" data-entity-name="${escapeHtml(entity.name)}">${state.paymentMethods.map((method) => `<option ${index === 0 && !method.default ? '' : method.default ? 'selected' : ''}>${escapeHtml(method.alias)} · •••• ${method.last4}</option>`).join('')}</select></div>`).join('')}
  `
  const footer = `<span></span><div class="actions"><button class="btn btn-secondary" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-coverage">Save coverage</button></div>`
  return modalShell('Edit payment coverage', 'Map each billing entity to a payment method', body, footer)
}

function renderAddProductModal() {
  const body = `
    <div class="notice warning" style="margin-bottom:15px">${icon('info')}<div>Full Revenue Reconciliation appears only for an add-on or expansion deal paired with Finance 3PD.</div></div>
    <div class="grid grid-2">
      ${skus.filter((item) => !['LOOP-FSBI','LOOP-VOICE','LOOP-IMPL'].includes(item.sku)).map((item) => `<article class="product-card ${item.addonOnly ? 'addon-product' : ''}" style="min-height:215px"><div class="product-top"><div><h3>${item.name}</h3><span class="sku-code">${item.sku}</span></div>${item.addonOnly ? '<span class="pill pill-amber">Expansion</span>' : ''}</div><div class="price">${formatPrice(item)}</div><p class="product-description">${item.included}</p><button class="btn btn-secondary btn-sm" data-action="request-product" data-product="${item.name}">Request quote</button></article>`).join('')}
    </div>
  `
  return modalShell('Explore Loop products', 'List pricing shown before contract adjustments', body, '', true)
}

function renderProductDetailModal(skuCode) {
  const item = skus.find((sku) => sku.sku === skuCode)
  if (!item) return ''
  const presentation = productPresentation[item.sku]
  const body = `
    <div class="plan-hero" style="min-height:250px">
      <p class="eyebrow">${item.category} · ${item.sku}</p>
      <h2>${item.name}</h2>
      <p>${presentation.tagline}</p>
      <div class="hero-price">$${item.price.toLocaleString()} <span>/${item.unit} list price</span></div>
      <div class="included-list">
        <div class="included-item">${icon('check_circle')} ${item.included}</div>
        <div class="included-item">${icon('check_circle')} ${presentation.proof}</div>
      </div>
    </div>
    ${item.sku === 'LOOP-FIN-FULL' ? `<div class="notice warning" style="margin-top:14px">${icon('extension')}<div>Full Revenue Reconciliation is available only as an expansion add-on paired with Finance 3PD.</div></div>` : ''}
  `
  const footer = `<button class="btn btn-secondary" data-action="close-modal">Close</button><button class="btn btn-primary" data-action="request-product" data-product="${item.name}">${icon('bolt')} Request to enable</button>`
  return modalShell(`${item.name} overview`, 'Product preview', body, footer)
}

function renderInvoiceModal(id) {
  const invoice = invoices.find(([number]) => number === id) || invoices[0]
  const body = `
    <div class="review-lines"><div class="review-line"><span>Billing entity</span><strong>${invoice[1]}</strong></div><div class="review-line"><span>Invoice date</span><strong>${invoice[2]}</strong></div><div class="review-line"><span>Full Suite · LOOP-FSBI</span><strong>$3,594.00</strong></div><div class="review-line"><span>Voice · LOOP-VOICE</span><strong>$180.00</strong></div><div class="review-line"><span>Tax</span><strong>$108.00</strong></div><div class="review-line" style="padding-top:12px;border-top:1px solid var(--ink-100)"><strong>Total</strong><strong>${invoice[3]}</strong></div></div>
    <div class="notice info" style="margin-top:17px">${icon('event')}<div>Auto-pay is scheduled two days before the due date using Corporate Visa · •••• 4242.</div></div>
  `
  const footer = `<button class="btn btn-secondary" data-action="close-modal">Close</button><button class="btn btn-primary" data-action="download-demo">${icon('download')} Download PDF</button>`
  return modalShell(`Invoice ${invoice[0]}`, invoice[4], body, footer)
}

function renderHelpModal() {
  const body = `<div class="field"><label>How can our billing team help?</label><textarea placeholder="Describe your billing question"></textarea></div><div class="notice info">${icon('mail')}<div>A billing specialist will reply to kara.sandoval@hammorg.com within one business day.</div></div>`
  const footer = `<button class="btn btn-secondary" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="send-help">Send request</button>`
  return modalShell('Get billing help', 'Contact Loop Finance', body, footer)
}

function toast(message) {
  const region = document.querySelector('#toast-region')
  const element = document.createElement('div')
  element.className = 'toast'
  element.innerHTML = `${icon('check_circle')}<span>${escapeHtml(message)}</span>`
  region.appendChild(element)
  window.setTimeout(() => element.remove(), 3400)
}

function openModal(value) {
  state.modal = value
  state.uploadPreview = value === 'bulk' ? [] : state.uploadPreview
  state.replace = value.startsWith('replace-method:') ? { id: value.split(':')[1], stage: 1 } : null
  render()
}

function closeModal() {
  state.modal = null
  state.replace = null
  render()
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean)
  if (lines.length < 2) return []
  const headers = lines[0].split(',').map((item) => item.trim().replace(/^"|"$/g, ''))
  return lines.slice(1).map((line) => {
    const values = line.split(',').map((item) => item.trim().replace(/^"|"$/g, ''))
    return Object.fromEntries(headers.map((header, index) => [header, values[index] || '']))
  }).filter((row) => row.location_name && row.billing_entity && row.payment_method_alias)
}

function downloadTemplate() {
  const csv = [
    'location_name,billing_entity,payment_method_alias',
    'Hamm Org · Chelsea,Hamm Org · New York City,Corporate Visa',
    'Hamm Org · Hoboken,Hamm Org · New Jersey,Operating account',
  ].join('\n')
  const link = document.createElement('a')
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
  link.download = 'loop-billing-mapping-template.csv'
  link.click()
  URL.revokeObjectURL(link.href)
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('button, [data-action], [data-modal], [data-nav], [data-journey], [data-structure], [data-onboarding-step]')
  if (!target) return

  if (target.dataset.journey) {
    state.journey = target.dataset.journey
    state.sidebarOpen = false
    if (state.journey === 'existing') state.page = 'overview'
    render()
    return
  }

  if (target.dataset.nav) {
    state.page = target.dataset.nav
    state.sidebarOpen = false
    render()
    return
  }

  if (target.dataset.structure) {
    state.structure = target.dataset.structure
    render()
    return
  }

  if (target.dataset.onboardingStep) {
    state.onboardingStep = Number(target.dataset.onboardingStep)
    render()
    return
  }

  if (target.dataset.modal) {
    openModal(target.dataset.modal)
    return
  }

  const action = target.dataset.action
  if (!action) return

  if (action === 'toggle-sidebar') {
    state.sidebarOpen = !state.sidebarOpen
    render()
  } else if (action === 'close-modal') {
    closeModal()
  } else if (action === 'backdrop-close' && event.target === target) {
    closeModal()
  } else if (action === 'help') {
    openModal('help')
  } else if (action === 'onboarding-back') {
    state.onboardingStep = Math.max(0, state.onboardingStep - 1)
    render()
  } else if (action === 'onboarding-next') {
    if (state.onboardingStep === 3) {
      state.onboardingComplete = true
      toast('Billing setup completed.')
    } else {
      state.onboardingStep += 1
    }
    render()
  } else if (action === 'reset-onboarding') {
    state.onboardingComplete = false
    state.onboardingStep = 0
    render()
  } else if (action === 'choose-csv') {
    document.querySelector('#csv-file')?.click()
  } else if (action === 'sample-upload') {
    state.uploadPreview = locations.map((location, index) => ({
      location_name: location,
      billing_entity: index < 6 ? 'Hamm Org · New York City' : index < 8 ? 'Hamm Org · New Jersey' : 'Hamm Org · North',
      payment_method_alias: index < 8 ? 'Corporate Visa' : 'Operating account',
    }))
    render()
  } else if (action === 'download-template') {
    downloadTemplate()
    toast('Billing mapping template downloaded.')
  } else if (action === 'apply-upload') {
    closeModal()
    toast(`${state.uploadPreview.length} location mappings applied.`)
  } else if (action === 'save-entity') {
    const id = target.dataset.entityId
    const name = document.querySelector('#entity-name')?.value.trim()
    const contact = document.querySelector('#entity-contact')?.value.trim()
    const address = document.querySelector('#entity-address')?.value.trim()
    const mappedLocations = [...document.querySelectorAll('.entity-location:checked')].map((input) => input.value)
    if (!name || !contact || mappedLocations.length === 0) {
      toast('Add a name, invoice contact, and at least one location.')
      return
    }
    if (id) {
      const entity = state.entities.find((item) => item.id === id)
      Object.assign(entity, { name, contact, address, locations: mappedLocations })
    } else {
      state.entities.push({ id: `entity-${Date.now()}`, name, contact, address, locations: mappedLocations })
    }
    closeModal()
    toast(id ? 'Billing entity updated.' : 'Billing entity added.')
  } else if (action === 'save-method') {
    const alias = document.querySelector('#method-alias')?.value.trim() || 'New payment method'
    const coverage = document.querySelector('#method-coverage')?.value || 'Backup · no active coverage'
    state.paymentMethods.push({ id: `card-${Date.now()}`, type: 'Visa', last4: '4242', expiry: '09 / 2028', alias, coverage: [coverage], default: false })
    closeModal()
    toast(`${alias} added securely.`)
  } else if (action === 'replace-next') {
    state.replace = { id: target.dataset.methodId, stage: 2 }
    render()
  } else if (action === 'finish-replace') {
    const id = target.dataset.methodId
    const old = state.paymentMethods.find((item) => item.id === id)
    const replacement = { ...old, id: `mastercard-${Date.now()}`, type: 'Mastercard', last4: '4444', expiry: '11 / 2029', alias: 'Replacement Mastercard' }
    state.paymentMethods = state.paymentMethods.filter((item) => item.id !== id)
    state.paymentMethods.unshift(replacement)
    closeModal()
    toast('Coverage moved. The old method was retired safely.')
  } else if (action === 'save-coverage') {
    closeModal()
    toast('Payment coverage updated.')
  } else if (action === 'request-product') {
    const product = target.dataset.product
    closeModal()
    toast(`${product} quote requested from your account team.`)
  } else if (action === 'product-help') {
    const product = target.dataset.product
    state.modal = 'help'
    render()
    window.setTimeout(() => toast(`${product} context added to your request.`), 0)
  } else if (action === 'share-product') {
    toast(`${target.dataset.product} summary is ready to share.`)
  } else if (action === 'download-demo') {
    toast('Demo document download started.')
  } else if (action === 'submit-closure') {
    const location = document.querySelector('#closure-location')?.value
    toast(location ? `Closure request submitted for ${location}.` : 'Choose a location before submitting.')
  } else if (action === 'send-help') {
    closeModal()
    toast('Billing support request sent.')
  }
})

document.addEventListener('change', (event) => {
  if (event.target.matches('input[name="payment-scope"]')) {
    state.paymentScope = event.target.value
    render()
  }

  if (event.target.matches('#csv-file')) {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      state.uploadPreview = parseCsv(String(reader.result || ''))
      render()
      if (state.uploadPreview.length === 0) toast('No valid mapping rows were found in that CSV.')
    })
    reader.readAsText(file)
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && state.modal) closeModal()
})

window.addEventListener('hashchange', () => {
  state.modal = null
  state.replace = null
  readHash()
  render()
})

readHash()
render()
