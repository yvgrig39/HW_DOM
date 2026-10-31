const rotators = document.querySelectorAll('.rotator');

for (const rotator of rotators) {
  const cases = rotator.querySelectorAll('.rotator__case');
  let activeIndex = 0;

  setInterval(function () {
    cases[activeIndex].classList.remove('rotator__case_active');
    activeIndex++;

    if (activeIndex === cases.length) {
      activeIndex = 0;
    }

    cases[activeIndex].classList.add('rotator__case_active');
  }, 1000);
}
