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
        scrub: 1,
        markers:true,
        start: '50% bottom'
    }
})

.fromTo(
    document.querySelector('.god'),{
        opacity: '0%',
    },{
        opacity: '100%',
    }
)

.fromTo(
    document.querySelector('.luci1'),{
        opacity: '0%',
    },{
        opacity: '100%',
    }
)



