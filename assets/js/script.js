window.addEventListener('scroll', function () {
  const slogon = document.querySelector('.slogon');
  const slogon2 = document.querySelector('.slogon2')
  const bounding = slogon.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const revealPoint = 50; // Adjust this value to control when the text appears

  // Check if the slogon is within the viewport
  if (bounding.top < windowHeight - revealPoint) AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
    duration: 3000, // values from 0 to 3000, with step 50ms
  })
});