const PHONE = "919313626302"; // CHANGE THIS

function showToast(msg, type = "info") {
  const c = document.getElementById("toast-container");
  if (!c) return;
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  const icons = { success:"fa-check-circle", error:"fa-times-circle", info:"fa-info-circle" };
  t.innerHTML = `<i class="fas ${icons[type]||icons.info}"></i> ${msg}`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function applyNow(serviceName) {
  const msg = encodeURIComponent(`Hello BHAGWATI CSC CENTRE, I want to apply for ${serviceName}. Please guide me.`);
  window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
}

function copyUPI() {
  const el = document.getElementById("upi-id-text");
  if (el) navigator.clipboard.writeText(el.innerText).then(() => showToast("UPI ID copied!", "success"));
}

document.addEventListener("DOMContentLoaded", () => {
  const ham = document.getElementById("hamburger");
  const nl  = document.getElementById("nav-links");
  if (ham) ham.addEventListener("click", () => nl.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nl.classList.remove("open")));

  const si = document.getElementById("service-search");
  if (si) si.addEventListener("input", filterCards);

  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      filterCards();
    });
  });

  renderAllServices();

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { countUp(e.target, parseInt(e.target.dataset.target)); obs.unobserve(e.target); }});
  }, { threshold: 0.3 });
  document.querySelectorAll(".count-up").forEach(el => obs.observe(el));
});

function renderAllServices() {
  const services = getServices();
  const categories = {
    driving:      { label:"Driving Licence Services",       icon:"fa-car" },
    pan:          { label:"PAN Card Services",               icon:"fa-credit-card" },
    aadhaar:      { label:"Aadhaar Services",                icon:"fa-fingerprint" },
    voter:        { label:"Voter ID Services",               icon:"fa-vote-yea" },
    passport:     { label:"Passport Services",               icon:"fa-passport" },
    certificates: { label:"Certificate Services",            icon:"fa-file-alt" },
    govt:         { label:"Government Scheme Services",      icon:"fa-landmark" },
    bills:        { label:"Bill Payment & Utility",          icon:"fa-file-invoice-dollar" },
    travel:       { label:"Travel & Banking Services",       icon:"fa-train" },
    forms:        { label:"Form Filling Services",           icon:"fa-file-signature" },
  };
  const container = document.getElementById("all-services-container");
  if (!container) return;
  container.innerHTML = "";
  Object.entries(categories).forEach(([cat, {label, icon}]) => {
    const items = services[cat] || [];
    const sec = document.createElement("div");
    sec.className = "services-section"; sec.dataset.cat = cat;
    sec.innerHTML = `
      <div class="cat-header">
        <div class="cat-header-icon"><i class="fas ${icon}"></i></div>
        <h3>${label}</h3>
      </div>
      <div class="cat-divider"></div>
      <div class="cards-grid">${items.map(renderCard).join("")}</div>`;
    container.appendChild(sec);
  });
}

function renderCard(s) {
  return `<div class="service-card" data-title="${s.title.toLowerCase()}" data-cat="${s.category}">
    <div class="card-icon"><i class="fas ${s.icon}"></i></div>
    <div class="card-title">${s.title}</div>
    <div class="card-desc">${s.desc}</div>
    <div class="card-footer">
      <div class="card-price">&#8377;${s.price}<small>Service charge</small></div>
      <button class="btn-apply" onclick="applyNow('${s.title}')"><i class="fab fa-whatsapp"></i> Apply</button>
    </div>
  </div>`;
}

function filterCards() {
  const q = (document.getElementById("service-search")?.value || "").toLowerCase();
  const active = document.querySelector(".chip.active")?.dataset.cat || "all";
  document.querySelectorAll(".services-section").forEach(sec => {
    const show = active === "all" || active === sec.dataset.cat;
    sec.style.display = show ? "" : "none";
    if (show) sec.querySelectorAll(".service-card").forEach(card => {
      card.style.display = (!q || card.dataset.title.includes(q)) ? "" : "none";
    });
  });
}

function countUp(el, target, dur = 1200) {
  const start = performance.now(), suf = el.dataset.suffix || "";
  const tick = now => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.floor(p * target).toLocaleString("en-IN") + suf;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const qrImage = document.getElementById('qr-image');
const payBtn = document.getElementById('pay-btn');
let blurTimer;

// Calculate 5 minutes in milliseconds (5 * 60 seconds * 1000)
const FIVE_MINUTES = 5 * 60 * 1000; 

payBtn.addEventListener('click', function() {
  // 1. Remove the blur class to reveal the QR
  qrImage.classList.remove('blurred-qr');
  
  // 2. Hide the "Pay" button so the user can scan the QR
  payBtn.classList.add('hidden');

  // 3. Clear any existing timer to prevent bugs if clicked multiple times
  clearTimeout(blurTimer); 
  
  // 4. Set a timer to blur the QR again after 5 minutes
  blurTimer = setTimeout(function() {
    
    // Re-apply the blur
    qrImage.classList.add('blurred-qr');
    
    // Bring the "Pay" button back
    payBtn.classList.remove('hidden');
    
  }, FIVE_MINUTES); 
});