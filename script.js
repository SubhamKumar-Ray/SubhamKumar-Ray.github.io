// Contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});

// Admission form submission
document.getElementById('admissionForm')?.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your admission form has been submitted successfully.');
    this.reset();
});
<!-- ===== Feedback JS ===== -->
// Tab switching
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(c => c.classList.remove('active'));
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });
  

function toggleDropdown(event) {
  event.preventDefault();
  const menu = event.currentTarget.nextElementSibling;
  menu.classList.toggle('show'); // show/hide on click
}

// Hide dropdown when clicked outside
window.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.classList.remove('show');
    });
  }
});
