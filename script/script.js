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
    document.querySelector('#god'),{
        opacity: '0%',
    },{
        opacity: '100%',
    }
)

.fromTo(
    document.querySelector('#god-2'),{
        y: 0,
    },{
        y: 100,
    }
)


.fromTo(
    document.querySelector('#luci1'),{
        opacity: '0%',
        y:100,
    },{
        opacity: '100%',
        y:0,
    }
)

.fromTo(
    document.querySelector('#god-3'),{
        y: 0,
    },{
        y: 100,
    }
)

.fromTo(
    document.querySelector('#luci2'),{
        opacity: '0%',
        x:0,
    },{
        opacity: '100%',
        x:100,
    }
)

.fromTo(
    document.querySelector('#god-4'),{
        y: 0,
    },{
        y: 100,
    }
)

.fromTo(
    document.querySelector('#luci3'),{
        opacity: '0%',
        y:0,
    },{
        opacity: '100%',
        y: 100,
    }
)

.fromTo(
    document.querySelector('#luci3'),{
        opacity: '0%',
        y:0,
    },{
        opacity: '100%',
        y: 100,
    }
)







