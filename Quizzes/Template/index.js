let burger = document.getElementById('navTrigger'),
    nav    = document.getElementById('navMenu');

    let li = document.getElementById('li: test');

burger.addEventListener('click', function(e){
  this.classList.toggle('active');
  nav.classList.toggle('active');
  li.classList.toggle('active')
});



