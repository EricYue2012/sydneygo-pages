// Optional Plausible Analytics — set PLAUSIBLE_DOMAIN in GitHub Actions secrets
(function () {
  var domain = document.currentScript && document.currentScript.getAttribute("data-domain");
  if (!domain || domain === "PLAUSIBLE_DOMAIN") return;
  var s = document.createElement("script");
  s.defer = true;
  s.dataset.domain = domain;
  s.src = "https://plausible.io/js/script.js";
  document.head.appendChild(s);
})();
