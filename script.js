const navItems = document.querySelectorAll("nav h4");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = item.className; // earth, launch...

    document.getElementById(target).scrollIntoView({
      behavior: "smooth"
    });
  });
});
const sections = document.querySelectorAll("div[id]");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.id;
    }
  });

  navItems.forEach(item => {
    item.classList.remove("active");
    if (item.classList.contains(current)) {
      item.classList.add("active");
    }
  });
});
const launchSection = document.querySelector("#launch");
const video = document.querySelector(".launch-video");
const countdownEl = document.querySelector(".countdown");

let played = false;

window.addEventListener("scroll", () => {
  const rect = launchSection.getBoundingClientRect();

  if (rect.top < window.innerHeight / 2 && !played) {
    played = true;

    // Play video
    video.play();

    // Countdown animation
    let count = 3;
    countdownEl.innerText = count;

    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        countdownEl.innerText = count;
      } else {
        countdownEl.innerText = "🚀 Lift Off!";
        clearInterval(interval);
      }
    }, 1000);
  }
});
gsap.from(".launch-content h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#launch",
    start: "top 60%"
  }
});
const spaceSection = document.querySelector("#space");
const rocket = document.querySelector(".rocket");

window.addEventListener("scroll", () => {
  const rect = spaceSection.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom > 0) {
    let progress = (window.innerHeight - rect.top) / window.innerHeight;

    // Move rocket upward
    rocket.style.transform = `translate(-50%, -${progress * 300}px)`;
  }
});gsap.from(".title", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#space",
    start: "top 70%"
  }
});

gsap.from(".text", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#space",
    start: "top 70%"
  }
});

gsap.to(".rocket", {
  y: -300,
  scrollTrigger: {
    trigger: "#space",
    scrub: true
  }
});
const speedEl = document.getElementById("speed");
const distanceEl = document.getElementById("distance");
const timeEl = document.getElementById("time");

let started = false;

window.addEventListener("scroll", () => {
  const section = document.querySelector("#space");
  const rect = section.getBoundingClientRect();

  if (rect.top < window.innerHeight / 2 && !started) {
    started = true;

    let speed = 0;
    let distance = 0;
    let time = 300;

    const interval = setInterval(() => {
      speed += 2;
      distance += 5000;
      time -= 1;

      speedEl.innerText = speed;
      distanceEl.innerText = distance.toLocaleString();
      timeEl.innerText = time;

      if (time <= 0) clearInterval(interval);
    }, 50);
  }
});
gsap.from(".card", {
  x: 200,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#space",
    start: "top 70%"
  }
});
const marsSection = document.querySelector("#mars");
const marsVideo = document.querySelector(".mars-video");

let marsPlayed = false;

window.addEventListener("scroll", () => {
  const rect = marsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight / 2 && !marsPlayed) {
    marsPlayed = true;
    marsVideo.play();
  }
});gsap.from(".mars-content h1", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#mars",
    start: "top 70%"
  }
});

gsap.from(".mars-content p", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#mars",
    start: "top 70%"
  }
});
const btn = document.querySelector(".explore-btn");
const rover = document.querySelector(".rover");

btn.addEventListener("click", () => {
  rover.style.left = "70%"; // rover moves
});gsap.from(".explore-content", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#explore",
    start: "top 70%"
  }
});

gsap.from(".rover", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#explore",
    start: "top 70%"
  }
});
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#space").appendChild(renderer.domElement);

// Stars
const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 5000; i++) {
  vertices.push(
    Math.random() * 2000 - 1000,
    Math.random() * 2000 - 1000,
    Math.random() * 2000 - 1000
  );
}

geometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(vertices, 3)
);

const material = new THREE.PointsMaterial({ size: 2, color: 0xffffff });

const stars = new THREE.Points(geometry, material);
scene.add(stars);

camera.position.z = 5;

// Animation
function animate() {
  requestAnimationFrame(animate);

  stars.rotation.y += 0.0005;
  stars.rotation.x += 0.0002;

  renderer.render(scene, camera);
}

animate();
function shakeScreen() {
  gsap.to("body", {
    x: 10,
    repeat: 10,
    yoyo: true,
    duration: 0.05
  });
}
gsap.from(".earth-text", {
  y: 100,
  opacity: 0,
  duration: 1.5
});

gsap.to(".earthvid", {
  scale: 1.2,
  scrollTrigger: {
    trigger: "#earth",
    scrub: true
  }
});
function shakeScreen() {
  gsap.to("body", {
    x: 10,
    repeat: 10,
    yoyo: true,
    duration: 0.05
  });
}window.addEventListener("scroll", () => {
  camera.position.z = 5 + window.scrollY * 0.01;
});
gsap.to(".mars-video", {
  scale: 1.3,
  scrollTrigger: {
    trigger: "#mars",
    scrub: true
  }
});
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
const startBtn = document.querySelector(".start-btn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    document.getElementById("launch").scrollIntoView({
      behavior: "smooth"
    });
  });
}
gsap.from(".earth-content", {
  y: 100,
  opacity: 0,
  duration: 1.5
});