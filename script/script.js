gsap.registerPlugin(ScrollTrigger);

const iswindow = document.querySelector('window');
const isbody = document.querySelector('body');
const istime = new seconds(0.1);
let toscroll = function(){isbody.classList.add('is-scrolling');}

//iswindow.addEventListener('scroll' , function, 
    //setTimeout(toscroll,100),

//);

iswindow.addEventListener("scroll", function() {
    setTimeout(toscroll,100);
  });



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
    document.querySelector('#luci2'),{
        opacity: '0%',
        x:0,
    },{
        opacity: '100%',
        x:-100,
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
    document.querySelector('#luci3'),{
        opacity: '0%',
        y:0,
    },{
        opacity: '100%',
        y: 150,
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
    document.querySelector('#luci4'),{
        opacity: '0%',
        x:0,
    },{
        opacity: '100%',
        x:100,
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
    document.querySelector('#luci5'),{
        opacity: '0%',
        y: 0,
    },{
        opacity: '100%',
        y: 100,
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
    document.querySelector('#luci6'),{
        opacity: '0%',
        x:0,
    },{
        opacity: '100%',
        x:-100,
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
    document.querySelector('#luci7'),{
        opacity: '0%',
        y: 0,
    },{
        opacity: '100%',
        y: 150,
    }
)

.fromTo(
    document.querySelector('#luci8'),{
        opacity: '0%',
        y: 0,
    },{
        opacity: '100%',
        y: 150,
    }
)

.fromTo(
    document.querySelector('#god-hand'),{
        y: 50,
    },{
        y: -150,
    }
)

.fromTo(
    document.querySelector('#luci9'),{
        opacity: '0%',
        y: 0,
    },{
        opacity: '100%',
        y: -10,
        rotation: 180,
    }
)

.fromTo(
    document.querySelector('#luci10'),{
        opacity: '0%',
        y: 0,
    },{
        opacity: '100%',
        y: -100,
       
    }
)


.fromTo(
    document.querySelector('#luci11'),{
        
        y: 0,
    },{
        
        y: -100,
       
    }
)

.fromTo(
    document.querySelector('#luci12'),{
        opacity: '0%',
    },{
        
        opacity: '100%',
       
    }
)


.fromTo(
    document.querySelector('#luci13'),{
        opacity: '0%',
    },{
        
        opacity: '100%',
       
    }
)

.fromTo(
    document.querySelector('#luci13'),{
        x:0,
    },{
        
        x:-100,
       
    }
)

.fromTo(
    document.querySelector('#dia-papa'),{
        rotation: 50,
        opacity: '0%',
        y: 50,
    },{
        
        rotation: 80,
        opacity: '100%',
        y: 150,
    }
)