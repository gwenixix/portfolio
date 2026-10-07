(function () {
  var S = window.SITE;
  var esc = function (s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; };
  var initials = function (n) { return n.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase(); };
  var slug = new URLSearchParams(location.search).get("b");
  var i = S.brands.findIndex(function (b) { return b.slug === slug; });
  document.getElementById("logo").textContent = S.name;
  document.getElementById("logo").href = "index.html";
  document.getElementById("copy").textContent = "© " + new Date().getFullYear() + " " + S.name;
  var page = document.getElementById("page");
  if (i < 0) { page.innerHTML = '<h1 class="bh">Brand not found</h1><p><a href="index.html#work">Back to all brands</a></p>'; return; }
  var b = S.brands[i];
  document.title = b.name + " | " + S.name;

  var list = function (title, arr, cls) {
    return arr && arr.length ? '<section class="bsec"><h2>' + title + '</h2><ul class="' + (cls || "bul") + '">' + arr.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></section>" : "";
  };
  var chips = function (title, arr) {
    return arr && arr.length ? '<section class="bsec"><h2>' + title + '</h2><div class="chips">' + arr.map(function (x) { return '<span class="chip">' + esc(x) + "</span>"; }).join("") + "</div></section>" : "";
  };
  var hero = b.image ? '<img src="' + esc(b.image) + '" alt="' + esc(b.name) + '">' : esc(initials(b.name));
  var links = (b.links || []).map(function (l) { return '<a class="btn ghost" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + " ↗</a>"; }).join("");
  var gallery = b.gallery && b.gallery.length ? '<section class="bsec"><h2>Samples</h2><div class="gal">' + b.gallery.map(function (g) { return '<img src="' + esc(g) + '" alt="" loading="lazy">'; }).join("") + "</div></section>" : "";
  var prev = S.brands[(i + S.brands.length - 1) % S.brands.length], next = S.brands[(i + 1) % S.brands.length];

  page.innerHTML =
    '<p class="eyebrow">' + esc(b.category) + (b.years ? " · " + esc(b.years) : "") + "</p>" +
    '<h1 class="bh">' + esc(b.name) + "</h1>" +
    '<p class="brole">' + esc(b.role) + "</p>" +
    '<div class="bhero">' + hero + "</div>" +
    '<div class="bcols"><div>' +
      '<section class="bsec"><h2>Overview</h2><p>' + esc(b.overview) + "</p></section>" +
      list("What I did", b.did) + list("Results", b.results) + gallery +
    "</div><aside>" +
      chips("Tools", b.tools) + chips("Platforms", b.platforms) +
      (links ? '<section class="bsec"><h2>Links</h2><div class="blinks">' + links + "</div></section>" : "") +
    "</aside></div>" +
    '<nav class="bnav"><a href="brand.html?b=' + esc(prev.slug) + '">← ' + esc(prev.name) + '</a><a href="brand.html?b=' + esc(next.slug) + '">' + esc(next.name) + " →</a></nav>";
  [].forEach.call(page.querySelectorAll(".bsec,.bhero,.bh,.brole"), function (el) { el.classList.add("rv", "in"); });
})();
