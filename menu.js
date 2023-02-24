const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
console.log(navbarLinks)
toggleButton.addEventListener('click', function(){
    for(var i=0; i<navbarLinks.length; i++)

    navbarLinks[i].classList.toggle('active');
    
    console.log('clicked')
});