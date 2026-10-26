
/* ========================================
   STUDIO M&D — JAVASCRIPT
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {

  // MOBILE NAVIGATION
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");

  if (menuButton && navigation) {

    function closeMenu() {
      navigation.classList.remove("is-open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Otwórz menu");
    }

    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Zamknij menu" : "Otwórz menu"
      );
    });

    // Close menu after clicking a navigation link
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close menu with the Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Close mobile navigation when returning to desktop layout
    window.addEventListener("resize", () => {
      if (window.innerWidth > 850) {
        closeMenu();
      }
    });

  }


  // AUTOMATIC YEAR IN THE FOOTER
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

});


/* Rozwijanie szczegółów usług */

document.querySelectorAll(".offer-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    details.hidden = isExpanded;
    button.setAttribute("aria-expanded", String(!isExpanded));
    button.textContent = isExpanded
      ? "Poznaj szczegóły"
      : "Ukryj szczegóły";
  });
});


/* Filtrowanie kategorii usług */
const serviceFilters = document.querySelectorAll(".service-filter");
const serviceCards = document.querySelectorAll(".offer-card[data-category]");

serviceFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    serviceFilters.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    serviceCards.forEach((card) => {
      const shouldShow =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.hidden = !shouldShow;
    });
  });
});


/* ===== FILTROWANIE KATEGORII USLUG ===== */

document.querySelectorAll(".service-filter").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    document.querySelectorAll(".service-filter").forEach((filter) => {
      const isActive = filter === button;

      filter.classList.toggle("active", isActive);
      filter.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll(".service-card").forEach((card) => {
      const shouldShow =
        category === "all" || card.dataset.category === category;

      card.hidden = !shouldShow;
    });
  });
});


/* ===== ROZWIJANIE SZCZEGÓLOW USLUG ===== */

document.querySelectorAll(".service-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    details.hidden = isExpanded;

    button.setAttribute("aria-expanded", String(!isExpanded));

    button.textContent = isExpanded
      ? "Poznaj szczegóły"
      : "Ukryj szczegóły";
  });
});
