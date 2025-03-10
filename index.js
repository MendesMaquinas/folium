
document.addEventListener("DOMContentLoaded", function () {

  //let title = document.getElementById("")

  gsap.registerPlugin(ScrollTrigger)

  gsap.from(".name", {
    opacity: 0,
    y: -250,
    duration: 1.5,
    ease: "slow(0.7,0.7,false)",
  });

  gsap.from(".degree", {
    opacity: 0,
    duration: 7.5,
    ease: "steps(12)",
  });

  gsap.from(".header .title", {
    opacity: 0,
    y: 250,
    duration: 1.5,
    ease: "slow(0.7,0.7,false)",
  });

  gsap.from("#hero", {
    duration: 2, // start the animation when ".box" enters the viewport (once)
    x: "100%",
  });


  const cards = [
    {id: "#card-1", endTranslateX: -2000, rotate: 45},
    {id: "#card-2", endTranslateX: -1000, rotate: -30},
    {id: "#card-3", endTranslateX: -2000, rotate: 45},
    {id: "#card-4", endTranslateX: -1500, rotate: -30},
  ]

  ScrollTrigger.create({
    trigger: ".wrapper-404",
    start: "top top",
    end: "+=900vh",
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      gsap.to(".wrapper-404", {
        x: `${-350 * self.progress}vw`,
        duration: 0.5,
        ease: "power3.out",
      })
    }
  })

  cards.forEach((card) => {
    ScrollTrigger.create({
      trigger: "card.id",
      start: "top top",
      start: "+=1200vh",
      rotate: "+=100",
      onUpdate: (self) => {
        gsap.to(card.id, {
          x: `${card.endTranslateX * self.progress}px`,
          rotation: `${card.rotate * self.progress * 10}`,
          duration: 0.5,
          ease: "power3.out",
        })
      }
    })
  })
});


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about .box:nth-child(2)",
    start: "top 70%",
    end: "+=100vh",
    toggleActions: "restart none none reverse"
  }
});

tl.from(gsap.utils.toArray("#about .box:nth-child(2) div"), {
  opacity: 0,
  duration: 1.5,
  x: "100%",
  ease: "slow(0.7,0.7,false)",
  stagger: 0.5 // Adiciona um atraso de 0.5s entre cada animação
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills .box:nth-child(2)",
    start: "top 70%",
    end: "+=100vh",
    toggleActions: "restart none none reverse"
  }
});

tl2.from(gsap.utils.toArray("#skills .box:nth-child(2) .container"), {
  opacity: 0,
  duration: 1.5,
  x: "100%",
  ease: "slow(0.7,0.7,false)",
  stagger: 0.5 // Adiciona um atraso de 0.5s entre cada animação
});