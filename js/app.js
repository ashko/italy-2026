/* ============================================================
   איטליה 2026 — App logic (vanilla, no build)
   ============================================================ */
(function () {
  "use strict";
  const T = window.TRIP;
  const $ = (s, r = document) => r.querySelector(s);
  const screen = $("#screen");
  const topTitle = $("#topbarTitle");

  /* ---------------- Icons ---------------- */
  const I = {
    home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6" stroke-linecap="round"/></svg>`,
    route: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="6" cy="19" r="2.4"/><circle cx="18" cy="5" r="2.4"/><path d="M8.4 19H14a3 3 0 0 0 3-3V8" stroke-linecap="round"/><path d="M6 16.6V8a3 3 0 0 1 3-3h6.6"/></svg>`,
    bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" stroke-linecap="round"/><path d="M3 14h18M3 18v2M21 18v2"/><path d="M7 10V8a2 2 0 0 1 2-2h2v4"/></svg>`,
    ticket: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4Z"/><path d="M14 6v12" stroke-dasharray="2 2.5"/></svg>`,
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01" stroke-linecap="round"/></svg>`,
    plane: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10.5 13.5 3 11l1-2 7 1 4.5-5.5a2 2 0 0 1 3 2.5L13 12l1 7-2 1-2.5-6.5Z" stroke-linejoin="round"/></svg>`,
    car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"/><path d="M4 11h16a1 1 0 0 1 1 1v4H3v-4a1 1 0 0 1 1-1Z"/><circle cx="7" cy="16.5" r="1.4"/><circle cx="17" cy="16.5" r="1.4"/></svg>`,
    train: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="6" y="3" width="12" height="13" rx="3"/><path d="M6 10h12M9 20l-2 2M15 20l2 2"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/></svg>`,
    fork: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 3v7a2 2 0 0 0 4 0V3M8 11v10M16 3c-1.5 0-2 2-2 4s.5 4 2 4m0 0V3m0 12v6" stroke-linecap="round"/></svg>`,
    mountain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 19 6-11 4 7 2-3 6 7z" stroke-linejoin="round"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m12 3 2.6 5.5 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.5l1.1-6L3.4 9.3l6-.8L12 3Z" stroke-linejoin="round"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m5 13 4 4 10-11" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    chev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 9 6 6 6-6" stroke-linecap="round"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V21a2 2 0 0 1-2 2C9 23 1 15 1 5a2 2 0 0 1 2-2Z" transform="translate(2 0)"/></svg>`,
    doc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v4h4M8 13h8M8 17h6"/></svg>`,
    plug: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 3v6M15 3v6M6 9h12v2a6 6 0 0 1-12 0V9ZM12 17v4" stroke-linecap="round"/></svg>`,
    cash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/></svg>`,
    lang: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/></svg>`,
    nav: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 11 21 3l-8 18-2-7-8-3Z" stroke-linejoin="round"/></svg>`,
    bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 8h14l-1 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>`,
    spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3Z" stroke-linejoin="round"/><path d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14Z" stroke-linejoin="round"/></svg>`,
    cake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 20h16v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7Z"/><path d="M4 15c1.5 1.2 3 1.2 4 0s2.5-1.2 4 0 2.5 1.2 4 0 2.5-1.2 4 0" /><path d="M12 8V5M8.5 8V6M15.5 8V6" stroke-linecap="round"/></svg>`,
  };
  const typeIcon = { flight: I.plane, drive: I.car, car: I.car, train: I.train, food: I.fork, sight: I.star, hike: I.mountain, stay: I.bed, free: I.star, note: I.info, birthday: I.cake };
  const typeLabel = { flight: "טיסה", drive: "נסיעה", car: "רכב", train: "רכבת", food: "אוכל", sight: "אתר", hike: "טיול רגלי", stay: "צ׳ק־אין", free: "חופשי", note: "הערה", birthday: "יום הולדת" };
  const typeColor = { flight: "var(--sky)", drive: "var(--terra)", car: "var(--terra)", train: "var(--plum)", food: "var(--gold)", sight: "var(--terra)", hike: "var(--olive)", stay: "var(--olive)", free: "var(--ink-faint)", note: "var(--ink-faint)", birthday: "#D6457E" };

  /* ---------------- Helpers ---------------- */
  const HE_DAYS = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
  const HE_MON = ["ינו'", "פבר'", "מרץ", "אפר'", "מאי", "יוני", "יולי", "אוג'", "ספט'", "אוק'", "נוב'", "דצמ'"];
  function d(iso) { const [y, m, day] = iso.split("-").map(Number); return new Date(y, m - 1, day); }
  function fmtDate(iso) { const x = d(iso); return `${x.getDate()} ${HE_MON[x.getMonth()]}`; }
  function fmtFull(iso) { const x = d(iso); return `יום ${HE_DAYS[x.getDay()]}, ${x.getDate()} ${HE_MON[x.getMonth()]}`; }
  function regionOf(id) { return T.regions.find(r => r.id === id) || { name: "", color: "var(--ink-faint)" }; }
  function mapsUrl(it) {
    if (it.lat && it.lng) return `https://www.google.com/maps/search/?api=1&query=${it.lat},${it.lng}`;
    const q = encodeURIComponent(it.address || it.place || it.title || "");
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }
  function wazeUrl(it) {
    if (it.lat && it.lng) return `https://waze.com/ul?ll=${it.lat},${it.lng}&navigate=yes`;
    return `https://waze.com/ul?q=${encodeURIComponent(it.address || it.place || "")}`;
  }
  function qUrl(q) { return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q || "")}`; }
  function stars(r) { return r ? `<span class="rate">★ ${Number(r).toFixed(1)}</span>` : ""; }
  function levelColor(l) { return ({ "רגוע": "var(--olive)", "כיף": "var(--sky)", "אתגר": "var(--terra)", "אקסטרים": "#C0392B" })[l] || "var(--terra)"; }
  function daysUntil(iso) { const ms = d(iso) - new Date(new Date().toDateString()); return Math.round(ms / 86400000); }
  function nights(a, b) { return Math.round((d(b) - d(a)) / 86400000); }
  const esc = s => (s == null ? "" : String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])));

  /* ---------------- Tabs ---------------- */
  const TABS = [
    { id: "home", label: "בית", icon: I.home, title: T.meta.title },
    { id: "itinerary", label: "מסלול", icon: I.route, title: "המסלול" },
    { id: "stays", label: "לינה", icon: I.bed, title: "לינה" },
    { id: "recos", label: "המלצות", icon: I.spark, title: "המלצות לטיול" },
    { id: "tickets", label: "כרטיסים", icon: I.ticket, title: "כרטיסים ומסמכים" },
    { id: "info", label: "מידע", icon: I.info, title: "מידע שימושי" },
  ];

  function renderTabs(active) {
    $("#tabbar").innerHTML = TABS.map(t =>
      `<button class="tab ${t.id === active ? "is-active" : ""}" data-tab="${t.id}">${t.icon}<span>${t.label}</span></button>`
    ).join("");
  }

  /* ---------------- Screens ---------------- */
  function screenHome() {
    const left = daysUntil(T.meta.startDate);
    const totalDays = T.days.length || (nights(T.meta.startDate, T.meta.endDate) + 1);
    const cd = left > 0 ? `<div class="countdown">${I.plane}<span>עוד</span><b>${left}</b><span>ימים</span></div>`
      : left === 0 ? `<div class="countdown">${I.star}<b>היום יוצאים!</b></div>` : "";

    const regionChips = T.regions.map(r =>
      `<span class="chip"><span class="dot" style="background:${r.color}"></span>${esc(r.name)}</span>`).join("");

    // Birthday reminder
    const bIdx = T.days.findIndex(x => x.celebration);
    const bDay = bIdx >= 0 ? T.days[bIdx] : null;
    const bdayHome = bDay ? `
      <div class="bday bday--home" data-goday="${bIdx}">
        <div class="bday__emoji">${bDay.celebration.emoji || "🎂"}</div>
        <div class="bday__txt"><b>אל תשכחו! ${esc(bDay.celebration.title)}</b><span>${esc(fmtFull(bDay.date))} · ${esc(regionOf(bDay.region).name)}</span></div>
        <span class="chev">‹</span>
      </div>` : "";

    // Next up
    const next = nextItem();
    const nextCard = next ? `
      <div class="section-title">${I.star} מה הלאה <small>${esc(fmtFull(next.date))}</small></div>
      ${itemCard(next.item, next.date)}` : "";

    // Stays summary
    const stays = (T.lodging || []).map(s => `
      <div class="list-link" data-go="stays">
        <div class="ll-ico" style="background:${regionOf(s.region).color}22;color:${regionOf(s.region).color}">${I.bed}</div>
        <div><div>${esc(s.name)}</div><small>${esc(regionOf(s.region).name)} · ${nights(s.checkIn, s.checkOut)} לילות</small></div>
        <span class="chev">‹</span>
      </div>`).join("");

    return `
      <section class="hero">
        <div class="hero__kicker">${esc(T.meta.subtitle || "")}</div>
        <div class="hero__title">${esc(T.meta.title)}</div>
        <div class="hero__sub">${esc(fmtDate(T.meta.startDate))} – ${esc(fmtDate(T.meta.endDate))} · ${esc(T.meta.homeCity)} ⇄ Italia</div>
        ${cd}
        <div class="hero__stats">
          <div class="hero__stat"><b>${totalDays || "–"}</b><span>ימים</span></div>
          <div class="hero__stat"><b>${T.regions.length}</b><span>יעדים</span></div>
          <div class="hero__stat"><b>${(T.lodging || []).length}</b><span>לינות</span></div>
        </div>
      </section>

      <div class="chips">${regionChips}</div>
      ${bdayHome}
      ${nextCard}

      <div class="section-title">${I.bed} איפה ישנים</div>
      ${stays || `<div class="card muted">פרטי הלינה יתווספו מהאישורים.</div>`}

      <div class="section-title">${I.route} מבט מהיר</div>
      <div class="list-link" data-go="itinerary"><div class="ll-ico" style="background:var(--terra)22;color:var(--terra)">${I.route}</div><div>המסלול המלא<small>יום אחר יום</small></div><span class="chev">‹</span></div>
      <div class="list-link" data-go="tickets"><div class="ll-ico" style="background:var(--sky)22;color:var(--sky)">${I.ticket}</div><div>כרטיסים ומסמכים<small>טיסות, רכבות, כניסות</small></div><span class="chev">‹</span></div>
    `;
  }

  function nextItem() {
    const today = new Date().toISOString().slice(0, 10);
    for (const day of T.days) {
      if (day.date >= today && day.items && day.items.length) return { date: day.date, item: day.items[0] };
    }
    return T.days[0] && T.days[0].items[0] ? { date: T.days[0].date, item: T.days[0].items[0] } : null;
  }

  function ticketBlock(tk) {
    return `<div class="ticketinfo">
      <div class="ticketinfo__head">${I.ticket}<b>כרטיסים</b>${tk.bookAhead ? `<span class="ticketinfo__ahead">להזמין מראש</span>` : ""}</div>
      <div class="ticketinfo__price">${esc(tk.price)}${tk.freeAge ? ` <b>· ${esc(tk.freeAge)}</b>` : ""}</div>
      ${tk.coupon ? `<div class="ticketinfo__coupon">🎟️ ${esc(tk.coupon)}</div>` : ""}
      ${tk.url ? `<a class="btn btn--accent btn-block" href="${esc(tk.url)}" target="_blank" rel="noopener">${I.ticket} לרכישת כרטיסים</a>` : ""}
    </div>`;
  }
  function itemCard(it, date) {
    const color = typeColor[it.type] || "var(--terra)";
    const hasMap = it.lat || it.address || it.place;
    const place = (it.pid && T.places) ? T.places[it.pid] : null;
    const photo = place && place.img
      ? `<div class="tl-photo"><img loading="lazy" src="${esc(place.img)}" alt="${esc(place.name || "")}"><span class="tl-photo__cap">${esc(place.name || "")}</span></div>` : "";
    const desc = place && place.desc ? `<div class="tl-desc">${esc(place.desc)}</div>` : "";
    const ticket = place && place.ticket ? ticketBlock(place.ticket) : "";
    return `
      <div class="tl-card ${photo ? "tl-card--photo" : ""}" style="--accent:${color}">
        ${photo}
        <div class="tl-card__body">
          <div class="tl-time">${esc(it.time || "")} ${it.time ? "·" : ""} <span class="type-badge" style="color:${color};background:${color}1a">${typeIcon[it.type] || ""}${typeLabel[it.type] || ""}</span></div>
          <div class="tl-title">${esc(it.title)}</div>
          ${it.place ? `<div class="tl-place">${I.pin}${esc(it.place)}</div>` : ""}
          ${desc}
          ${it.notes ? `<div class="tl-notes">${esc(it.notes)}</div>` : ""}
          ${ticket}
          <div class="tl-row">
            ${hasMap ? `<a class="btn btn--ghost" href="${mapsUrl(it)}" target="_blank" rel="noopener">${I.nav}מפה</a>` : ""}
            ${it.confirmation ? `<span class="btn" style="pointer-events:none">אישור: ${esc(it.confirmation)}</span>` : ""}
          </div>
        </div>
      </div>`;
  }

  let activeDayIdx = 0;
  const HE_MON_FULL = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
  const HE_WD_SHORT = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];
  const pad2 = n => String(n).padStart(2, "0");

  function renderCalendar() {
    const first = d(T.days[0].date);
    const year = first.getFullYear(), month = first.getMonth();
    const startWd = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayIso = new Date().toISOString().slice(0, 10);

    const byDate = {};
    T.days.forEach((dd, i) => { byDate[dd.date] = i; });

    const wdRow = HE_WD_SHORT.map(w => `<div class="cal__wd">${w}</div>`).join("");
    let cells = "";
    for (let i = 0; i < startWd; i++) cells += `<div class="cal__cell cal__cell--blank"></div>`;
    for (let n = 1; n <= daysInMonth; n++) {
      const iso = `${year}-${pad2(month + 1)}-${pad2(n)}`;
      const idx = byDate[iso];
      const isTrip = idx !== undefined;
      const isActive = idx === activeDayIdx;
      const isToday = iso === todayIso;
      if (isTrip) {
        const reg = regionOf(T.days[idx].region);
        const cake = T.days[idx].celebration ? `<i class="cal__cake">🎂</i>` : "";
        cells += `<button class="cal__cell cal__cell--trip ${isActive ? "is-active" : ""} ${isToday ? "is-today" : ""}"
          data-day="${idx}" style="--rc:${reg.color}"><span>${n}</span>${cake}<i class="cal__dot"></i></button>`;
      } else {
        cells += `<div class="cal__cell cal__cell--out ${isToday ? "is-today" : ""}">${n}</div>`;
      }
    }

    const legend = T.regions.map(r =>
      `<span class="cal__leg"><i style="background:${r.color}"></i>${esc(r.name)}</span>`).join("");

    return `
      <div class="cal">
        <div class="cal__head"><b>${HE_MON_FULL[month]} ${year}</b><small>${T.days.length} ימים</small></div>
        <div class="cal__grid cal__wds">${wdRow}</div>
        <div class="cal__grid">${cells}</div>
        <div class="cal__legend">${legend}</div>
      </div>`;
  }

  function renderDayDetail() {
    const day = T.days[activeDayIdx];
    const reg = regionOf(day.region);
    const items = (day.items || []).map(it =>
      `<div class="tl-item" style="--accent:${typeColor[it.type] || "var(--terra)"}">${itemCard(it, day.date)}</div>`).join("");
    const navBtns = `
      <div class="day-nav">
        <button class="day-nav__btn" data-day="${Math.max(0, activeDayIdx - 1)}" ${activeDayIdx === 0 ? "disabled" : ""}>›</button>
        <div class="day-nav__label"><b>${esc(day.title || fmtFull(day.date))}</b><small style="color:${reg.color}">● ${esc(reg.name)} · ${esc(fmtFull(day.date))}</small></div>
        <button class="day-nav__btn" data-day="${Math.min(T.days.length - 1, activeDayIdx + 1)}" ${activeDayIdx === T.days.length - 1 ? "disabled" : ""}>‹</button>
      </div>`;
    const bday = day.celebration ? `
      <div class="bday">
        <div class="bday__emoji">${day.celebration.emoji || "🎂"}</div>
        <div class="bday__txt"><b>${esc(day.celebration.title)}</b><span>${esc(day.celebration.note || "")}</span></div>
      </div>` : "";
    const meals = (T.meals && T.meals[day.date]) || [];
    const mealsBlock = meals.length ? `
      <div class="section-title" style="margin:22px 4px 10px">${I.fork} ארוחות היום</div>
      ${meals.map(mealCard).join("")}` : "";
    return `${navBtns}${bday}<div class="timeline">${items || `<div class="card muted">יום חופשי 🌿</div>`}</div>${mealsBlock}`;
  }

  function mealCard(m) {
    const sub = [m.town, m.price, m.note].filter(Boolean).map(esc).join(" · ");
    return `<div class="meal">
      <div class="meal__tag">${esc(m.meal)}</div>
      <div class="meal__body">
        <div class="meal__name">${esc(m.name)} ${m.rating ? `<span class="rate rate--sm">★ ${Number(m.rating).toFixed(1)}</span>` : ""}</div>
        ${sub ? `<div class="meal__sub">${sub}</div>` : ""}
      </div>
      ${m.q ? `<a class="meal__map" href="${qUrl(m.q)}" target="_blank" rel="noopener" aria-label="מפה">${I.nav}</a>` : ""}
    </div>`;
  }

  /* ---------------- Recommendations screen ---------------- */
  let activeRecRegion = (T.regions[0] && T.regions[0].id) || "milan";
  function recKidCard(k, color) {
    return `<div class="rec" style="--rc:${color}">
      <div class="rec__head"><div class="rec__name">${esc(k.name)}</div>${stars(k.rating)}</div>
      <div class="rec__tags">
        <span class="rec__tag">${esc(k.cat)}</span>
        <span class="rec__tag rec__age">גיל ${esc(k.ages)}</span>
        <span class="rec__tag" style="color:${levelColor(k.level)};background:${levelColor(k.level)}1a">${esc(k.level)}</span>
        ${k.price ? `<span class="rec__tag">${esc(k.price)}</span>` : ""}
      </div>
      <div class="rec__why">${esc(k.why)}</div>
      ${k.tip ? `<div class="rec__tip">💡 ${esc(k.tip)}</div>` : ""}
      <div class="rec__foot"><span class="rec__town">${I.pin}${esc(k.town)}</span>
        <a class="btn btn--ghost" href="${qUrl(k.q)}" target="_blank" rel="noopener">${I.nav} מפה</a></div>
    </div>`;
  }
  function recFoodCard(f, color) {
    return `<div class="rec rec--food" style="--rc:${color}">
      <div class="rec__head"><div class="rec__name">${esc(f.name)}</div>${stars(f.rating)}</div>
      <div class="rec__tags">
        <span class="rec__tag rec__meal">${esc(f.meal)}</span>
        <span class="rec__tag">${esc(f.cuisine)}</span>
        <span class="rec__tag">${esc(f.price)}${f.per ? " · " + esc(f.per) : ""}</span>
      </div>
      <div class="rec__why">${esc(f.why)}</div>
      <div class="rec__foot"><span class="rec__town">${I.pin}${esc(f.town)}</span>
        <a class="btn btn--ghost" href="${qUrl(f.q)}" target="_blank" rel="noopener">${I.nav} מפה</a></div>
    </div>`;
  }
  function screenRecommendations() {
    const recs = T.recommendations || {};
    const switcher = T.regions.map(r =>
      `<button class="recreg ${r.id === activeRecRegion ? "is-active" : ""}" data-recreg="${r.id}" style="--rc:${r.color}">${esc(r.name)}</button>`).join("");
    const data = recs[activeRecRegion] || { kids: [], food: [] };
    const color = regionOf(activeRecRegion).color;
    const kids = (data.kids || []).map(k => recKidCard(k, color)).join("");
    const food = (data.food || []).map(f => recFoodCard(f, color)).join("");
    return `
      <div class="recreg-row">${switcher}</div>
      <div class="section-title">${I.spark} כיף לילדים <small>3 · 7 · 10½</small></div>
      ${kids || `<div class="card muted">בקרוב.</div>`}
      <div class="section-title">${I.fork} מסעדות מומלצות</div>
      ${food || `<div class="card muted">בקרוב.</div>`}
    `;
  }

  function screenItinerary() {
    if (!T.days.length) return emptyState("המסלול יתווסף בקרוב", "שובל הימים יופיע כאן עם כל הפעילויות.");
    if (screenItinerary._init !== true) {
      const today = new Date().toISOString().slice(0, 10);
      const idx = T.days.findIndex(x => x.date >= today);
      activeDayIdx = idx >= 0 ? idx : 0; screenItinerary._init = true;
    }
    return renderCalendar() + renderDayDetail();
  }

  function screenStays() {
    if (!(T.lodging || []).length) return emptyState("פרטי הלינה בדרך", "האישורים מ-Booking/Airbnb יוצגו כאן.");
    return T.lodging.map(s => {
      const reg = regionOf(s.region);
      return `
      <div class="stay">
        <div class="stay__top">
          <span class="stay__city" style="background:${reg.color}">${esc(reg.name)}</span>
          <div class="eyebrow">${nights(s.checkIn, s.checkOut)} לילות</div>
          <div class="stay__name">${esc(s.name)}</div>
          <div class="stay__addr">${I.pin} ${esc(s.address || "")}</div>
        </div>
        <div class="stay__dates">
          <div class="stay__date"><small>צ׳ק־אין</small><b>${esc(fmtDate(s.checkIn))}</b><small>${esc(s.checkInTime || "")}</small></div>
          <div class="stay__arrow">←</div>
          <div class="stay__date"><small>צ׳ק־אאוט</small><b>${esc(fmtDate(s.checkOut))}</b><small>${esc(s.checkOutTime || "")}</small></div>
        </div>
        <div class="stay__meta">
          ${s.guests ? `<span class="kv">${s.guests} אורחים</span>` : ""}
          ${s.confirmation ? `<span class="kv">אישור ${esc(s.confirmation)}</span>` : ""}
          ${s.host ? `<span class="kv">מארח: ${esc(s.host)}</span>` : ""}
          ${s.notes ? `<span class="kv">${esc(s.notes)}</span>` : ""}
        </div>
        <div class="stay__actions">
          <a class="btn btn--accent" href="${mapsUrl(s)}" target="_blank" rel="noopener">${I.nav} ניווט</a>
          ${s.doc ? `<a class="btn" href="${esc(s.doc)}" data-doc="${esc(s.doc)}" data-docname="${esc(s.name)}">${I.doc} מסמך</a>` : ""}
          ${s.phone ? `<a class="btn" href="tel:${esc(s.phone)}">${I.phone} התקשר</a>` : ""}
        </div>
        ${s.bookingUrl ? `<a class="stay__weblink" href="${esc(s.bookingUrl)}" target="_blank" rel="noopener">${esc(s.linkLabel || "קישור להזמנה")} ‹</a>` : ""}
      </div>`;
    }).join("");
  }

  function screenTickets() {
    const t = T.tickets || [];
    if (!t.length) return emptyState("הכרטיסים בדרך", "טיסות, רכבות וכרטיסי כניסה יופיעו כאן.");
    return t.map(k => {
      const ic = typeIcon[k.category] || I.ticket;
      const route = (k.from || k.to) ? `
        <div class="ticket__route">
          <div class="ticket__node"><b>${esc(k.from || "")}</b><small>${esc(k.fromName || "")}</small></div>
          <div class="ticket__line"></div>
          <div class="ticket__node" style="text-align:end"><b>${esc(k.to || "")}</b><small>${esc(k.toName || "")}</small></div>
        </div>` : "";
      return `
      <div class="ticket">
        <div class="ticket__bar" style="background:${typeColor[k.category] || "var(--terra)"}"></div>
        <div class="ticket__body">
          <div class="ticket__head">
            <div class="ticket__icon">${ic}</div>
            <div><div class="ticket__title">${esc(k.title)}</div><div class="ticket__sub">${esc(fmtFull(k.date))}${k.time ? " · " + esc(k.time) : ""}</div></div>
          </div>
          ${route}
          ${k.notes ? `<div class="tl-notes">${esc(k.notes)}</div>` : ""}
          <div class="ticket__perf">
            <span class="ticket__conf">קוד הזמנה: <b>${esc(k.confirmation || "—")}</b></span>
            ${k.doc ? `<a class="btn btn--accent" href="${esc(k.doc)}" data-doc="${esc(k.doc)}" data-docname="${esc(k.title)}">${I.doc} מסמך מקורי</a>`
              : (k.url ? `<a class="btn btn--ghost" href="${esc(k.url)}" target="_blank" rel="noopener">פתיחה</a>` : "")}
          </div>
        </div>
      </div>`;
    }).join("") + documentsBlock();
  }

  function documentsBlock() {
    const docs = T.documents || [];
    if (!docs.length) return "";
    return `<div class="section-title">${I.doc} מסמכים</div>` + docs.map(dc =>
      `<a class="list-link" href="${esc(dc.url)}" data-doc="${esc(dc.url)}" data-docname="${esc(dc.name)}">
        <div class="ll-ico" style="background:var(--ink)11;color:var(--ink)">${I.doc}</div>
        <div>${esc(dc.name)}<small>${esc(dc.note || "")}</small></div><span class="chev">‹</span>
      </a>`).join("");
  }

  function screenInfo() {
    const facts = (T.facts || []).map(f =>
      `<div class="info-tile"><div class="ico">${I[f.icon] || I.info}</div><b style="font-size:16px">${esc(f.value)}</b><span>${esc(f.label)}</span></div>`).join("");

    const contacts = (T.contacts || []).map(c =>
      `<a class="list-link" href="tel:${esc(c.value)}"><div class="ll-ico" style="background:var(--terra)18;color:var(--terra)">${I.phone}</div><div>${esc(c.label)}<small>${esc(c.value)}</small></div><span class="chev">‹</span></a>`).join("");

    const tips = (T.tips || []).map((tp, i) =>
      `<div class="acc-item" data-acc="${i}">
        <button class="acc-head">${esc(tp.q)}<span class="tw">${I.chev}</span></button>
        <div class="acc-body"><div class="acc-body-inner">${esc(tp.a)}</div></div>
      </div>`).join("");

    const packing = (T.packing || []).map((p, i) =>
      `<li data-pack="${i}"><span class="box">${I.check}</span><span class="label">${esc(p)}</span></li>`).join("");

    return `
      <div class="section-title" style="margin-top:6px">${I.info} מבט מהיר</div>
      <div class="info-grid">${facts}</div>

      <div class="section-title">${I.phone} טלפונים חשובים</div>
      ${contacts}

      <div class="section-title">${I.star} טיפים</div>
      <div class="accordion">${tips}</div>

      <div class="section-title">${I.bag} רשימת ציוד <small>נשמר במכשיר</small></div>
      <ul class="check" id="packlist">${packing}</ul>
    `;
  }

  function emptyState(title, sub) {
    return `<div class="empty">${I.route}<h3 style="margin:0 0 6px">${esc(title)}</h3><p class="faint">${esc(sub)}</p></div>`;
  }

  /* ---------------- Router ---------------- */
  const RENDER = { home: screenHome, itinerary: screenItinerary, stays: screenStays, recos: screenRecommendations, tickets: screenTickets, info: screenInfo };
  let current = "home";

  function go(tab) {
    if (!RENDER[tab]) tab = "home";
    current = tab;
    const def = TABS.find(t => t.id === tab);
    topTitle.textContent = def ? def.title : T.meta.title;
    screen.innerHTML = RENDER[tab]();
    renderTabs(tab);
    screen.scrollTop = 0; window.scrollTo(0, 0);
    history.replaceState({ tab }, "", "#" + tab);
    bindScreen();
  }

  function bindScreen() {
    // packing checklist (persisted)
    const pack = $("#packlist");
    if (pack) {
      const saved = JSON.parse(localStorage.getItem("pack") || "{}");
      pack.querySelectorAll("[data-pack]").forEach(li => {
        if (saved[li.dataset.pack]) li.classList.add("done");
        li.addEventListener("click", () => {
          li.classList.toggle("done");
          saved[li.dataset.pack] = li.classList.contains("done");
          localStorage.setItem("pack", JSON.stringify(saved));
        });
      });
    }
    // accordion
    screen.querySelectorAll(".acc-item").forEach(item => {
      const head = item.querySelector(".acc-head");
      const body = item.querySelector(".acc-body");
      head.addEventListener("click", () => {
        const open = item.classList.toggle("open");
        body.style.maxHeight = open ? body.scrollHeight + "px" : "0";
      });
    });
    // day strip
    screen.querySelectorAll("[data-day]").forEach(b =>
      b.addEventListener("click", () => { activeDayIdx = +b.dataset.day; go("itinerary"); }));
    // internal go links
    screen.querySelectorAll("[data-go]").forEach(el =>
      el.addEventListener("click", () => go(el.dataset.go)));
    // jump to a specific day in the itinerary
    screen.querySelectorAll("[data-goday]").forEach(el =>
      el.addEventListener("click", () => { activeDayIdx = +el.dataset.goday; screenItinerary._init = true; go("itinerary"); }));
    // recommendations region switcher
    screen.querySelectorAll("[data-recreg]").forEach(b =>
      b.addEventListener("click", () => { activeRecRegion = b.dataset.recreg; go("recos"); }));
  }

  /* ---------------- Events ---------------- */
  document.addEventListener("click", e => {
    const tab = e.target.closest("[data-tab]");
    if (tab) go(tab.dataset.tab);
  });

  /* ---------------- Document viewer ---------------- */
  const docview = document.getElementById("docview");
  function openDoc(url, name) {
    document.getElementById("docviewTitle").textContent = name || "מסמך";
    document.getElementById("docviewExt").href = url;
    const body = document.getElementById("docviewBody");
    const isImg = /\.(jpe?g|png|gif|webp)$/i.test(url);
    body.innerHTML = isImg
      ? `<img src="${esc(url)}" alt="${esc(name || "")}">`
      : `<iframe src="${esc(url)}" title="${esc(name || "")}"></iframe>`;
    docview.hidden = false;
    document.body.style.overflow = "hidden";
    history.pushState({ doc: true }, "");
  }
  function closeDoc() {
    if (docview.hidden) return;
    docview.hidden = true;
    document.getElementById("docviewBody").innerHTML = "";
    document.body.style.overflow = "";
  }
  document.getElementById("docviewBack").addEventListener("click", () => history.back());
  window.addEventListener("popstate", () => { if (!docview.hidden) closeDoc(); });
  window.addEventListener("keydown", e => { if (e.key === "Escape" && !docview.hidden) history.back(); });
  document.addEventListener("click", e => {
    const dl = e.target.closest("[data-doc]");
    if (dl) { e.preventDefault(); openDoc(dl.dataset.doc, dl.dataset.docname || ""); }
  });

  /* ---------------- Install prompt ---------------- */
  let deferred;
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault(); deferred = e;
    const b = $("#installBtn"); b.hidden = false;
    b.onclick = async () => { b.hidden = true; deferred.prompt(); await deferred.userChoice; deferred = null; };
  });

  /* ---------------- Service worker ---------------- */
  const isLocal = ["localhost", "127.0.0.1", ""].includes(location.hostname);
  if ("serviceWorker" in navigator) {
    if (isLocal) {
      // Dev: never cache — unregister any existing SW and clear caches.
      navigator.serviceWorker.getRegistrations().then(rs => rs.forEach(r => r.unregister()));
      if (window.caches) caches.keys().then(ks => ks.forEach(k => caches.delete(k)));
    } else {
      // Auto-reload once when a new service worker takes control (only on updates,
      // not first install) so users never get stuck on a half-updated version.
      if (navigator.serviceWorker.controller) {
        let reloaded = false;
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          if (reloaded) return; reloaded = true; location.reload();
        });
      }
      window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
    }
  }

  /* ---------------- Passcode gate ---------------- */
  function bootApp() {
    document.getElementById("app").hidden = false;
    const initial = (location.hash || "#home").slice(1);
    go(RENDER[initial] ? initial : "home");
  }

  function initLock(onUnlock) {
    const code = String((T.meta && T.meta.passcode) || "").trim();
    const KEY = "unlocked_v1";
    if (!code || localStorage.getItem(KEY) === code) { onUnlock(); return; }

    const lock = document.getElementById("lock");
    const dotsWrap = document.getElementById("lockDots");
    const pad = document.getElementById("lockPad");
    const err = document.getElementById("lockErr");
    lock.hidden = false;
    let entry = "";

    const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"];
    pad.innerHTML = keys.map(k =>
      k === "" ? `<span></span>` :
      `<button class="lock__key ${k === "⌫" ? "lock__key--fn" : ""}" data-k="${k}">${k}</button>`
    ).join("");

    function paint() {
      [...dotsWrap.children].forEach((d, i) => d.classList.toggle("on", i < entry.length));
    }
    function fail() {
      lock.classList.add("shake"); err.textContent = "קוד שגוי, נסו שוב";
      setTimeout(() => { lock.classList.remove("shake"); entry = ""; paint(); }, 450);
    }
    function success() {
      localStorage.setItem(KEY, code);
      lock.style.transition = "opacity .35s"; lock.style.opacity = "0";
      setTimeout(() => { lock.hidden = true; lock.style.opacity = ""; onUnlock(); }, 350);
    }

    pad.addEventListener("click", e => {
      const b = e.target.closest("[data-k]"); if (!b) return;
      const k = b.dataset.k;
      err.textContent = "";
      if (k === "⌫") { entry = entry.slice(0, -1); paint(); return; }
      if (entry.length >= 4) return;
      entry += k; paint();
      if (entry.length === 4) setTimeout(() => entry === code ? success() : fail(), 140);
    });
    // physical keyboard support
    window.addEventListener("keydown", e => {
      if (lock.hidden) return;
      if (/^[0-9]$/.test(e.key) && entry.length < 4) { entry += e.key; paint(); if (entry.length === 4) setTimeout(() => entry === code ? success() : fail(), 140); }
      else if (e.key === "Backspace") { entry = entry.slice(0, -1); paint(); }
    });
  }

  /* ---------------- Boot ---------------- */
  initLock(bootApp);
})();
