$(".nav_link").on("click", function (event) {
  event.preventDefault();
  let $this = $(this);
  let blockId = $this.attr("href");
  let headerHeight = $(".header").outerHeight();
  let blockOffset = $(blockId).offset().top - headerHeight;

  $("html, body").animate(
    {
      scrollTop: blockOffset,
    },
    500,
  );
});

const sections = document.querySelectorAll("section");
function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const _class = section.getAttribute("class");
    const currentNavLink = document.querySelector(
      `.nav_items a[href*="#${_class}"]`,
    );
    const currentSidebarLink = document.querySelector(
      `.sidebar_nav a[href*="#${_class}"]`,
    );

    if (
      currentYScroll > sectionTop - 80 &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("active");
      currentSidebarLink.classList.add("active");
    } else {
      currentNavLink.classList.remove("active");
      currentSidebarLink.classList.remove("active");
    }
  });
}
scrollTracker();
window.addEventListener("scroll", scrollTracker);
