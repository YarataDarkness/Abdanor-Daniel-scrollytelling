gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);


let isbody = document.querySelector('body');
//const istime = new seconds(0.1);


//iswindow.addEventListener('scroll' , function, 
    //setTimeout(toscroll,100),

//);

window.addEventListener("scroll", function() {    
    console.log("test");
    isbody.classList.add("is-scrolling");
    window.clearTimeout(timer);
    timer = setTimeout(toscroll, 100);

});
let timer = setTimeout(toscroll, 100);

function toscroll(){isbody.classList.remove('is-scrolling');}

gsap.to("#begin", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: "#begin",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
});

//timeline starts here - CHAPTER 1
gsap.timeline({
    duration: 1,
    scrollTrigger:{
        scrub: true,
        markers:true,
        end: "bottom",
        pin: true,

        trigger: '#begin',
    }

})


gsap.to(".texto-scrollio",{
    xPercent:200,
    ease: "none",
    scrollTrigger: {
      trigger: "#begin",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
})

//deal with the animation --- les deux premier sont animer puis apres les autres ne veulent pas animer.:3c

.fromTo(
    document.querySelector('#god'),{
        opacity: '0%',
    },{
        opacity: '100%', 
    }, 
)

.fromTo(
    document.querySelector('#god-2'),{
        y: 0,
    },{
        y: 100, 
    },
)


.fromTo(
    document.querySelector('#luci1'),{
        opacity: '0%',
        y:100,
    },{
        opacity: '100%',
        y:0, 
    },
)

.fromTo(
    document.querySelector('#god-3'),{
        y: 0,
    },{
        y: 100, 
    },
)

.fromTo(
    document.querySelector('#luci2'),{
        opacity: '0%',
        x:0,
    },{
        opacity: '100%',
        x:100, 
    },
)



.fromTo(
    document.querySelector('#god-2-a'),{
        y: 0,
    },{
        y: 100, 
    },
)

.fromTo(
    document.querySelector('#luci3'),{
        opacity: '0%',
        y:0,
    },{
        opacity: '100%',
        y: 150, 
    },
)

//timeline starts here - CHAPTER 2

gsap.timeline({
    duration: 1,
    scrollTrigger:{
        scrub: true,
        markers:true,
        end: "bottom",
        trigger: '#commencus',
        pin: true,
    }

})


gsap.to("#commencus", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: "#commencus",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
})

.fromTo(
    document.querySelector('#god-3'),{
        y: 0,
    },{
        y: 100, 
    },
)


.fromTo(
    document.querySelector('#luci4'),{
        opacity: '0%',
        x:0,
    },{
        opacity: '100%',
        x:100, 
    },
)


.fromTo(
    document.querySelector('#god-2-b'),{
        y: 0,
    },{
        y: 100, 
    },
)


.fromTo(
    document.querySelector('#luci5'),{
        opacity: '0%',
        y: 0,
    },{
        opacity: '100%',
        y: 100, 
    },
)


.fromTo(
    document.querySelector('#god-4'),{
        y: 0,
    },{
        y: 100, 
    },
)

.fromTo(
    document.querySelector('#luci6'),{
        opacity: '0%',
        x:0,
    },{
        opacity: '100%',
        x:-100, 
    },
)

.fromTo(
    document.querySelector('#god-2'),{
        y: 0,
    },{
        y: 100,
    },
)

.fromTo(
    document.querySelector('#luci7'),{
        opacity: '0%',
        y: 0,
    },{
        opacity: '100%',
        y: 150, 
    },
)

.fromTo(
    document.querySelector('#luci8'),{
        opacity: '0%',
        y: 0,
    },{
        opacity: '100%',
        y: 150, 
    },
)

.fromTo(
    document.querySelector('#god-hand'),{
        y: 50,
    },{
        y: -150, 
    },
)

.fromTo(
    document.querySelector('#luci9'),{
        opacity: '0%',
        y: 0,
    },{
        opacity: '100%',
        y: -10,
        rotation: 180, 
    },
)

//timeline starts here - CHAPTER 3

gsap.timeline({
    duration: 1,
    scrollTrigger:{
        scrub: true,
        markers:true,
        end: "bottom",
        trigger: '#fall',
        pin: true,
    }

})

gsap.to("#fall", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
        trigger: "#fall",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true
    }
})

.fromTo(
    document.querySelector('#luci10'),{
        opacity: '0%',
        y: 0,
    },{
        opacity: '100%',
        y: '-100%', 
       
    },
)


.fromTo(
    document.querySelector('#luci11'),{
        
        y: 0,
    },{
        
        y: -100, 
       
    },
)

.fromTo(
    document.querySelector('#luci12'),{
        opacity: '0%',
    },{
        
        opacity: '100%', 
       
    },
)


.fromTo(
    document.querySelector('#luci13'),{
        opacity: '0%',
    },{
        
        opacity: '100%', 
       
    },
)

.fromTo(
    document.querySelector('#luci13'),{
        x:0,
    },{
        
        x:-100, 
       
    },
)

.fromTo(
    document.querySelector('#dia-papa'),{
        rotation: 0,
        opacity: '0%',
        y: 50,
    },{
        
        rotation: 50,
        opacity: '100%',
        y: 150, 
    },
)



.fromTo(document.querySelector('.stary'),{
 drawSVG:'0% 0%'
},{
    drawSVG:'0% 0%',
    duration: 2

}
)


//ouin  nothing works ouin (つ﹏<。)//