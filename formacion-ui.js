/* Utilidades compartidas de Formación Continua (formacion.html y alianza.html) */
const $ = id => document.getElementById(id);
const byId = Object.fromEntries(ALIANZAS.map(a => [a.id, a]));

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function spotlight(node) {
  node.addEventListener("mousemove", e => {
    const r = node.getBoundingClientRect();
    node.style.setProperty("--mx", (e.clientX - r.left) + "px");
    node.style.setProperty("--my", (e.clientY - r.top) + "px");
  });
}

function courseCard(c, rec) {
  const a = byId[c.alianza] || { nombre: c.alianza, color: "#C49B4C" };
  const card = el("article", "course pop");
  card.style.setProperty("--c", a.color);
  const top = el("div", "course-top");
  top.append(el("span", "ally", a.nombre));
  const right = el("div", "course-top-r");
  if (c.ejemplo) right.append(el("span", "chip ex", "Ejemplo"));
  else if (c.proximamente) right.append(el("span", "chip ex", "Próximamente"));
  else if (rec || c.destacado) right.append(el("span", "chip", "Recomendado"));
  top.append(right);
  spotlight(card);
  card.append(top, el("h3", "", c.titulo), el("p", "", c.desc));
  const meta = el("div", "meta");
  [c.categoria, c.duracion].filter(Boolean).forEach(t => meta.append(el("span", "", t)));
  card.append(meta);
  const btn = el("a", "btn-gold", c.proximamente ? "Próximamente" : "Ir al curso");
  if (c.proximamente) btn.classList.add("off");
  else { btn.href = c.url || a.url || "#"; btn.target = "_blank"; btn.rel = "noopener"; }
  card.append(btn);
  if (!c.proximamente) {
    const link = c.url || a.url || "";
    const share = el("button", "share-btn");
    share.type = "button";
    share.innerHTML = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>';
    share.append(" Compartir este curso");
    share.onclick = () => shareCourse(c, a, link);
    card.append(share);
  }
  return card;
}

function shareCourse(c, a, link) {
  const text = c.titulo + " (" + a.nombre + ") — te lo recomendamos en Formación Continua GEB: " + link;
  if (navigator.share) {
    navigator.share({ title: c.titulo, text: c.titulo + " (" + a.nombre + ")", url: link }).catch(() => {});
  } else {
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank", "noopener");
  }
}

function logoBadge(a) {
  const b = el("div", "badge" + (a.logo ? " has-logo" : "") + (a.logoAncho ? " wide" : ""));
  if (a.logo) { const img = el("img"); img.src = a.logo; img.alt = ""; b.append(img); }
  else b.textContent = a.corto[0];
  return b;
}

function exploreCard(a) {
  const card = el("article", "course explore pop");
  card.style.setProperty("--c", a.color);
  spotlight(card);
  card.append(logoBadge(a), el("h3", "", "Explora todo " + a.nombre),
    el("p", "", "Descubre la oferta completa de cursos directamente en su sitio."));
  const btn = el("a", "btn-gold", a.url ? "Explorar todo el sitio" : "Próximamente");
  if (a.url) { btn.href = a.url; btn.target = "_blank"; btn.rel = "noopener"; } else btn.classList.add("off");
  card.append(btn);
  return card;
}

function allianceTile(a) {
  const n = CURSOS.filter(c => c.alianza === a.id).length;
  const t = el("button", "alliance");
  t.type = "button";
  t.style.setProperty("--c", a.color);
  spotlight(t);
  t.append(logoBadge(a), el("h3", "", a.nombre), el("p", "", a.descripcion),
    el("span", "n", n + (n === 1 ? " curso" : " cursos")), el("span", "go", "Ver →"));
  t.onclick = () => openAlliance(a);
  return t;
}

// ── Pop-up de alianza: carrusel de 3 espacios + "explora el sitio completo" ──
let modalEl = null;
function closeAlliance() {
  if (!modalEl) return;
  modalEl.remove();
  modalEl = null;
  document.body.style.overflow = "";
}
function openAlliance(a) {
  closeAlliance();
  const ov = el("div", "modal-ov");
  ov.onclick = e => { if (e.target === ov) closeAlliance(); };
  const m = el("div", "modal");
  m.style.setProperty("--c", a.color);
  m.setAttribute("role", "dialog");
  m.setAttribute("aria-label", a.nombre);
  const x = el("button", "x", "✕");
  x.type = "button";
  x.setAttribute("aria-label", "Cerrar");
  x.onclick = closeAlliance;

  const head = el("div", "modal-head");
  const txt = el("div");
  txt.append(el("h2", "", a.nombre), el("p", "", a.descripcion));
  head.append(logoBadge(a), txt);

  const list = CURSOS.filter(c => c.alianza === a.id);
  const track = el("div", "track");
  list.forEach(c => track.append(courseCard(c, true)));
  for (let i = list.length; i < 3; i++) {
    const ph = el("div", "course slot");
    ph.append(el("p", "", "Próximamente: más cursos recomendados por UGEB"));
    track.append(ph);
  }
  const prev = el("button", "arrow", "‹"), next = el("button", "arrow", "›");
  prev.type = next.type = "button";
  prev.setAttribute("aria-label", "Anterior");
  next.setAttribute("aria-label", "Siguiente");
  const step = dir => track.scrollBy({ left: dir * track.clientWidth, behavior: "smooth" });
  prev.onclick = () => step(-1);
  next.onclick = () => step(1);
  const sync = () => {
    prev.disabled = track.scrollLeft < 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  track.addEventListener("scroll", sync);
  const car = el("div", "car");
  car.append(prev, track, next);

  const cta = el("a", "btn-gold explore-all", a.url ? "Explora el sitio completo" : "Sitio completo próximamente");
  if (a.url) { cta.href = a.url; cta.target = "_blank"; cta.rel = "noopener"; } else cta.classList.add("off");

  m.append(x, head, car, cta);
  ov.append(m);
  document.body.append(ov);
  document.body.style.overflow = "hidden";
  modalEl = ov;
  sync();
  x.focus();
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeAlliance(); });

function uniq(key) { return [...new Set(CURSOS.map(c => c[key]).filter(Boolean))].sort(); }

function countUp(id, to) {
  const e = $(id), t0 = performance.now();
  (function step(t) {
    const p = Math.min((t - t0) / 1200, 1);
    e.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}

function initChrome() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".section-head,.groups,.filters,.reveal-me").forEach(n => { n.classList.add("reveal"); io.observe(n); });

  let lastY = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY, nb = $("navbar");
    if (y > 80) {
      nb.classList.add("scrolled");
      if (y > lastY + 8) { nb.classList.add("hidden"); nb.classList.remove("visible"); }
      else if (y < lastY - 4) { nb.classList.remove("hidden"); nb.classList.add("visible"); }
    } else nb.classList.remove("scrolled", "hidden", "visible");
    lastY = y;
  });
  $("navToggle").onclick = () => { $("navToggle").classList.toggle("open"); $("navLinks").classList.toggle("open"); };
}
