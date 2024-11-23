let a = document.querySelector('.transforms')
a.addEventListener('mouseover', () => {
    a.innerHTML = "Video Editor"
})
a.addEventListener('mouseleave',()=>{
    a.innerHTML = "Full Stack Web Developer"
    a.style.color = "aqua";
})
let b = document.querySelector('nav ').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
})