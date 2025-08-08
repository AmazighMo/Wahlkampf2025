/*
 * JavaScript zur Umsetzung der interaktiven Elemente der Betriebsratswahl‑Homepage.
 * Enthält die Logik für Akkordeons sowie die Fade‑In‑Effekte beim Scrollen.
 */

// Warten, bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', () => {
  // Alle Akkordeon‑Elemente auswählen
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(acc => {
    const header = acc.querySelector('.accordion-header');
    // Beim Klick auf die Kopfzeile den Zustand toggeln
    header.addEventListener('click', () => {
      acc.classList.toggle('open');
    });
  });

  // Intersection Observer für Fade‑In beim Scrollen
  const faders = document.querySelectorAll('.scroll-fade');
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, options);

  faders.forEach(el => {
    observer.observe(el);
  });
});