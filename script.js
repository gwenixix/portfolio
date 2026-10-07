(function () {
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; };
  var initials = function (n) { return n.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase(); };

  $("logo").textContent = S.name;
  $("role").textContent = S.role;
  $("tagline").textContent = S.tagline;
  $("loc").textContent = S.owner + " · " + S.location;
  $("blogLink").href = S.blog;
  $("aboutText").innerHTML = S.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("photo").innerHTML = S.photo ? '<img src="' + esc(S.photo) + '" alt="' + esc(S.owner) + '">' : "Add your photo in content.js";
  $("stats").innerHTML = S.stats.map(function (s) { return "<div><b>" + esc(s.value) + "</b><span>" + esc(s.label) + "</span></div>"; }).join("");

  var cats = ["All"].concat(S.brands.map(function (b) { return b.category; }).filter(function (c, i, a) { return c && a.indexOf(c) === i; }));
  $("filters").innerHTML = cats.map(function (c, i) { return '<button class="' + (i ? "" : "on") + '" data-c="' + esc(c) + '">' + esc(c) + "</button>"; }).join("");
  $("brands").innerHTML = S.brands.map(function (b) {
    var img = b.image ? '<img src="' + esc(b.image) + '" alt="' + esc(b.name) + '" loading="lazy">' : esc(initials(b.name));
    return '<a class="card" href="brand.html?b=' + esc(b.slug) + '" data-c="' + esc(b.category) + '"><div class="img">' + img + '</div><div class="body">' +
      '<div class="meta">' + esc(b.category) + (b.years ? " · " + esc(b.years) : "") + "</div>" +
      "<h3>" + esc(b.name) + "</h3><p>" + esc(b.summary) + "</p>" +
      "<ul>" + (b.did || []).slice(0, 3).map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul>" +
      '<span class="visit">View details →</span></div></a>';
  }).join("");
  $("filters").addEventListener("click", function (e) {
    var c = e.target.getAttribute("data-c"); if (!c) return;
    [].forEach.call($("filters").children, function (b) { b.classList.toggle("on", b === e.target); });
    [].forEach.call($("brands").children, function (card) { card.classList.toggle("hide", c !== "All" && card.getAttribute("data-c") !== c); });
  });

  var pf=S.platforms.map(function(p){return "<span>"+esc(p)+"</span><i></i>";}).join("");
  $("marquee").innerHTML=pf+pf+pf+pf;

  $("services-grid").innerHTML = S.services.map(function (s) { return "<div><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></div>"; }).join("");
  $("timeline").innerHTML = S.experience.map(function (x) { return "<li><b>" + esc(x.role) + "</b><span>" + esc(x.org) + " · " + esc(x.when) + "</span></li>"; }).join("");
  $("tools").innerHTML = S.tools.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("");
  $("certs").innerHTML = S.certs.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("");
  $("pubs").textContent = S.publicationsIntro;
  $("pubList").innerHTML = S.publications.map(function (p) { return '<li><a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a><span>" + esc(p.venue) + "</span></li>"; }).join("");

  $("email").href = "mailto:" + S.email; $("email").textContent = S.email;
  $("phone").textContent = S.phone;
  $("linkedin").href = S.linkedin;
  $("copy").textContent = "© " + new Date().getFullYear() + " " + S.name;

  // hero tagline: rise word by word
  var words = S.tagline.split(" ");
  $("tagline").innerHTML = words.map(function (w, i) { return '<span class="w"><span style="animation-delay:' + (0.15 + i * 0.09) + 's">' + esc(w) + '</span></span>'; }).join(" ");

  // scroll reveal
  var els = document.querySelectorAll(".eyebrow,.loc,.cta,.photo,#aboutText,.stats>div,.filters,.card,.grid3>div,.timeline li,.chip,.plain li,.contact>*,h2");
  [].forEach.call(els, function (el, i) { el.classList.add("rv"); el.style.transitionDelay = (i % 6) * 60 + "ms"; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.12 });
    [].forEach.call(els, function (el) { io.observe(el); });
  } else { [].forEach.call(els, function (el) { el.classList.add("in"); }); }

  // count-up stats
  [].forEach.call(document.querySelectorAll(".stats b"), function (b) {
    var n = parseInt(b.textContent, 10), suf = b.textContent.replace(/[0-9]/g, ""); if (isNaN(n)) return;
    var done = false;
    new IntersectionObserver(function (es, o) { if (es[0].isIntersecting && !done) { done = true; o.disconnect(); var t0 = performance.now(); (function f(t) { var p = Math.min((t - t0) / 1200, 1); b.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(f); })(t0); } }).observe(b);
  });

  // sticky nav shadow + parallax hero blob
  var nav = document.querySelector(".nav"), blob = document.querySelector(".blob");
  window.addEventListener("scroll", function () { nav.classList.toggle("scrolled", scrollY > 8); if (blob) blob.style.transform = "translateY(" + scrollY * 0.25 + "px)"; }, { passive: true });
})();
