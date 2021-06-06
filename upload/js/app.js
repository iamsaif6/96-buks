// Owl Carousel

$('.testimonial__wrap').owlCarousel({
    items: 1,
    loop:true,
    nav:false,
    dots:false,
    margin:80
});

// Offcanvas Menu Trigger

let trigger = document.querySelector('.offset__menu-wrap')
let overlay = document.querySelector('.offcanvas__overlay')
let offcanvas = document.querySelector('.offcanvas')
let offcanvasTrigger = document.querySelector('.offcanvas__trigger')
let nav = document.querySelector('.nav')
let navLink = document.querySelectorAll('.nav__link')




navLink.forEach(link2 => {
    link2.addEventListener('click' , function(){
        navLink.forEach(link => link.classList.remove('active'))
        this.classList.add('active')
    })
})






window.addEventListener('scroll' , function(){
    let scrollPosition = Math.floor(pageYOffset)

    if(scrollPosition > 200){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
});


trigger.addEventListener('click' , function(){
    this.classList.toggle('active')
    offcanvas.classList.toggle('active')
    overlay.classList.toggle('active')
});

overlay.addEventListener('click' , function(){
    this.classList.remove('active')
    offcanvas.classList.remove('active')
    trigger.classList.remove('active')
});

offcanvasTrigger.addEventListener('click' , function(){
    offcanvas.classList.remove('active')
    trigger.classList.remove('active')
    overlay.classList.remove('active')
})