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
    return '<article class="card" data-c="' + esc(b.category) + '"><div class="img">' + img + '</div><div class="body">' +
      '<div class="meta">' + esc(b.category) + (b.years ? " · " + esc(b.years) : "") + "</div>" +
      "<h3>" + esc(b.name) + "</h3><p>" + esc(b.summary) + "</p>" +
      "<ul>" + (b.did || []).map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("") + "</ul>" +
      (b.link ? '<a class="visit" href="' + esc(b.link) + '" target="_blank" rel="noopener">Visit →</a>' : "") + "</div></article>";
  }).join("");
  $("filters").addEventListener("click", function (e) {
    var c = e.target.getAttribute("data-c"); if (!c) return;
    [].forEach.call($("filters").children, function (b) { b.classList.toggle("on", b === e.target); });
    [].forEach.call($("brands").children, function (card) { card.classList.toggle("hide", c !== "All" && card.getAttribute("data-c") !== c); });
  });

  $("services-grid").innerHTML = S.services.map(function (s) { return "<div><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></div>"; }).join("");
  $("timeline").innerHTML = S.experience.map(function (x) { return "<li><b>" + esc(x.role) + "</b><span>" + esc(x.org) + " · " + esc(x.when) + "</span></li>"; }).join("");
  $("tools").innerHTML = S.tools.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("");
  $("certs").innerHTML = S.certs.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("");
  $("pubs").textContent = S.publications;

  $("email").href = "mailto:" + S.email; $("email").textContent = S.email;
  $("phone").textContent = S.phone;
  $("linkedin").href = S.linkedin;
  $("copy").textContent = "© " + new Date().getFullYear() + " " + S.name;
})();
