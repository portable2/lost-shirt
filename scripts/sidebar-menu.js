(function() {
  let openingBtn = document.querySelector('.sidebar__hamburger');
  let closingBtn = document.querySelector('.sidebar__close');
  let sidebar = document.querySelector('.sidebar');
  
  
  openingBtn.addEventListener("click", function () {
  sidebar.classList.add('sidebar--opened');
  })
  
  closingBtn.addEventListener("click", function() {
  sidebar.classList.remove('sidebar--opened');
  });  
})();