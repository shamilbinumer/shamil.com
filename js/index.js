AOS.init();
document.addEventListener('scroll', function() {
    updateProgressBar();
  });
  
  function updateProgressBar() {
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById("myBar").style.width = scrollPercentage + "%";
  }
  
window.addEventListener("hashchange", function() {
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });
    var currentHash = window.location.hash;
    var activeLink = document.querySelector('.nav-links a[href="' + currentHash + '"]');
    if (activeLink) {
        activeLink.classList.add('active');
    }
});