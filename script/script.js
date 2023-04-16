gsap.registerPlugin(ScrollTrigger);

const iswindow = document.querySelector('window');
const isbody = document.querySelector('body');
const istime = new seconds(0.1);


iswindow.addEventListener('scroll' (), 
    isbody.classList.add('is-scrolling')
);

gsap.timeline({
    duration:0.5,
    ScrollTrigger:{
        markers:true,
        start: '80% bottom'
    }
})

