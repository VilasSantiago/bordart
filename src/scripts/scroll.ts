export function scrollToSection(event: Event, id: string) {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", window.location.pathname);
    }
  }