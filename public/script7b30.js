// ===== Popular search topics (from Apple Support Quick Links) =====
const searchData = [
  "If you forgot your Apple Account password",
  "If you forgot your iPhone passcode or your iPhone is disabled",
  "If you want to cancel a subscription from Apple",
  "Update your iPhone or iPad",
  "Find your lost Apple device",
  "Reset Apple Account password",
  "Change a subscription",
  "Billing and payments",
  "Back up your iPhone to iCloud",
  "Set up a new Mac",
  "Pair AirPods with your device",
  "Check your AppleCare coverage",
  "Start a repair",
  "Contact Apple Support",
];

// ===== Live search suggestions =====
const input = document.getElementById("searchInput");
const box = document.getElementById("suggestions");
const searchIcon =
  '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M10 2a8 8 0 105.3 14l5.4 5.4 1.4-1.4-5.4-5.4A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/></svg>';

function renderSuggestions(list) {
  if (!list.length) {
    box.classList.remove("show");
    return;
  }
  box.innerHTML = list
    .map((t) => `<div class="item">${searchIcon}<span>${t}</span></div>`)
    .join("");
  box.classList.add("show");
  box.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", () => {
      input.value = item.querySelector("span").textContent;
      box.classList.remove("show");
    });
  });
}

input.addEventListener("input", () => {
  const q = input.value.trim().toLowerCase();
  if (!q) {
    box.classList.remove("show");
    return;
  }
  renderSuggestions(searchData.filter((s) => s.toLowerCase().includes(q)));
});

input.addEventListener("focus", () => {
  if (input.value.trim()) input.dispatchEvent(new Event("input"));
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrap")) box.classList.remove("show");
});

// ===== Mobile menu overlay =====
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
  mobileMenu.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

if (menuToggle) {
  menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    openMenu();
  });
}
if (menuClose) menuClose.addEventListener("click", closeMenu);
// Close when a menu link is tapped
mobileMenu.querySelectorAll(".mm-list a").forEach((a) =>
  a.addEventListener("click", closeMenu)
);
// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// ===== Footer accordion (mobile) =====
document.querySelectorAll(".footer-col h3").forEach((h) => {
  h.addEventListener("click", () => {
    // Only act as an accordion on small screens
    if (window.matchMedia("(max-width: 734px)").matches) {
      h.parentElement.classList.toggle("open");
    }
  });
});

