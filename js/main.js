/* AI and Media Literacy — Erasmus+ landing page
   Vanilla JS: sticky nav, mobile toggle, smooth scroll, contact form, toast.
   No build step. No dependencies. */

(function () {
    "use strict";

    // ---- Footer year ----
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---- Sticky nav scrolled state ----
    var nav = document.getElementById("nav");
    function onScroll() {
        if (!nav) return;
        if (window.scrollY > 8) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ---- Mobile menu toggle ----
    var toggle = document.getElementById("mobile-toggle");
    var menu = document.getElementById("mobile-menu");
    var iconMenu = document.getElementById("icon-menu");
    var iconClose = document.getElementById("icon-close");

    function closeMenu() {
        if (!menu) return;
        menu.classList.remove("open");
        menu.classList.add("hidden");
        if (iconMenu) iconMenu.classList.remove("hidden");
        if (iconClose) iconClose.classList.add("hidden");
    }
    function openMenu() {
        if (!menu) return;
        menu.classList.remove("hidden");
        menu.classList.add("open");
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        if (iconMenu) iconMenu.classList.add("hidden");
        if (iconClose) iconClose.classList.remove("hidden");
    }
    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            if (menu.classList.contains("open")) closeMenu();
            else openMenu();
        });
        // Close menu when clicking a link inside
        menu.querySelectorAll("a").forEach(function (a) {
            a.addEventListener("click", closeMenu);
        });
    }

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (e) {
            var href = link.getAttribute("href");
            if (!href || href === "#") return;
            var target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // ---- Toast ----
    var toast = document.getElementById("toast");
    var toastTimer = null;
    function showToast(message, type) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.remove("success", "error");
        toast.classList.add(type === "error" ? "error" : "success");
        toast.classList.add("show");
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            toast.classList.remove("show");
        }, 3800);
    }

    // ---- Contact form (static) ----
    var form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var data = new FormData(form);
            var name = (data.get("name") || "").toString().trim();
            var email = (data.get("email") || "").toString().trim();
            var message = (data.get("message") || "").toString().trim();
            if (!name || !email || !message) {
                showToast("Please fill in your name, email and message.", "error");
                return;
            }
            showToast("Thank you for your interest. A project contact will be published here soon.", "success");
            form.reset();
        });
    }
})();
