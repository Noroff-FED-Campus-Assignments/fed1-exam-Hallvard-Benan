export const addScrollEffect = function (target, threshold) {
  const scrollDetector = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("showing", entry.isIntersecting);
        if (entry.isIntersecting) scrollDetector.unobserve(entry.target);
      });
    },
    {
      threshold: threshold,
    }
  );
  target.forEach((item) => {
    scrollDetector.observe(item);
  });
};
