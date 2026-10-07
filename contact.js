(function () {
  var S = window.SITE;
  var wrap = document.createElement("div");
  wrap.innerHTML =
    '<button class="fab" type="button" aria-label="Contact me">Contact me</button>' +
    '<div class="modal" id="contactModal" role="dialog" aria-modal="true" aria-labelledby="cmTitle" hidden>' +
    '<div class="mbox"><button class="mx" type="button" aria-label="Close">&times;</button>' +
    '<h3 id="cmTitle">Let\'s work together</h3><p class="msub">Tell me about your brand. I reply within a couple of days.</p>' +
    '<form id="cmForm"><label>Name<input name="name" required autocomplete="name"></label>' +
    '<label>Email<input name="email" type="email" required autocomplete="email"></label>' +
    '<label>What do you need?<select name="topic"><option>SEO</option><option>Content and blogs</option><option>Social media</option><option>Amazon listings</option><option>Automation</option><option>Something else</option></select></label>' +
    '<label>Message<textarea name="message" rows="4" required></textarea></label>' +
    '<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" style="display:none">' +
    '<button class="btn" type="submit">Send message</button><p class="mmsg" id="cmMsg" role="status"></p></form></div></div>';
  while (wrap.firstChild) document.body.appendChild(wrap.firstChild);

  var modal = document.getElementById("contactModal"), form = document.getElementById("cmForm"), msg = document.getElementById("cmMsg"), last;
  function open(e) { if (e) e.preventDefault(); last = document.activeElement; modal.hidden = false; document.body.classList.add("noscroll"); requestAnimationFrame(function () { modal.classList.add("show"); form.name.focus(); }); }
  function close() { modal.classList.remove("show"); document.body.classList.remove("noscroll"); setTimeout(function () { modal.hidden = true; if (last) last.focus(); }, 250); }
  document.querySelector(".fab").addEventListener("click", open);
  [].forEach.call(document.querySelectorAll('a[href$="#contact"]'), function (a) { a.addEventListener("click", open); });
  modal.querySelector(".mx").addEventListener("click", close);
  modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) close(); });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = new FormData(form);
    if (d.get("_gotcha")) return;
    var body = "Name: " + d.get("name") + "\nEmail: " + d.get("email") + "\nNeed: " + d.get("topic") + "\n\n" + d.get("message");
    if (S.formEndpoint) {
      msg.textContent = "Sending...";
      fetch(S.formEndpoint, { method: "POST", body: d, headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw 0; msg.textContent = "Thank you! I'll get back to you soon."; form.reset(); })
        .catch(function () { msg.textContent = "Something went wrong. Please email " + S.email + " directly."; });
    } else {
      location.href = "mailto:" + S.email + "?subject=" + encodeURIComponent("Website inquiry: " + d.get("topic")) + "&body=" + encodeURIComponent(body);
      msg.textContent = "Your email app should open with the message ready to send.";
    }
  });
})();
