const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export function matrixEffect(elementId, gsap) {
  const elements = document.querySelectorAll(elementId);

  elements.forEach((element, index) => {
    let text = element.innerText;
    element.innerText = "";

    generateSpans(text, element);

    const charSpans = document.querySelectorAll(".char-" + text);
    
    gsap.to(charSpans, {
      opacity: 1,
      duration: 0.1,
      scrollTrigger: {
        id: "reveal",
        //todo esse trigger deve ser único
        trigger: "#skills",
        start: "top 10%",
        //end: "bottom 70%",
        toggleActions: "restart none none none",
      },
      stagger: {
        each: 0.5,
        from: "random",
        onStart: function () {
          scrambleEffect(
            this.targets()[0],
            this.targets()[0].textContent,
            this.targets()[0].dataset.index
          );
        },
      },
      ease: "power2.out",
    });
  });
}

function generateSpans(text, element) {
  text.split("").forEach((char) => {
    let span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char; // Keep spaces
    span.classList.add("char");
    span.classList.add(`char-${text}`);
    element.appendChild(span);
  });
}

function scrambleEffect(span, finalChar) {
  let iterations = 0;
  const scramble = setInterval(() => {
    span.textContent = chars[Math.floor(Math.random() * chars.length)];
    iterations++;
    if (iterations > 10) {
      // Stop after some time
      clearInterval(scramble);
      span.textContent = finalChar;
    }
  }, 50);
}
