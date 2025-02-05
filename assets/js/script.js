$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");
    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");
      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });
  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
  // <!-- emailjs to mail contact form data -->
  $("#contact-form").submit(function (event) {
    emailjs.init("user_fsWKaKP1OJzSf4zl8");
    emailjs
      .sendForm("service_bbo5qt6", "template_knkp7gd", "#contact-form")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          document.getElementById("contact-form").reset();
          alert("Form Submitted Successfully");
        },
        function (error) {
          console.log("FAILED...", error);
          alert(
            "Submission Failed! Please Send Me Mail At ~ mdbakerfarhad@gmail.com"
          );
        }
      );
    event.preventDefault();
  });
  // <!-- emailjs to mail contact form data -->
});
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Baker";
    $("#favicon").attr("href", "assets/images/Baker1.png");
  } else {
    document.title = "Portfolio | Baker";
    $("#favicon").attr("href", "assets/images/Baker1.png");
  }
});
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["Md. Baker..."],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
var typed = new Typed(".typing-text1", {
  strings: [
    "✨ Living in the Moment ⚡",
    "✨ Turning Dreams into Reality 💟",
    "✨ Disappearing into the Unknown Tomorrow 🌙 ",
  ],
  loop: true,
  typeSpeed: 60,
  backSpeed: 1,
  backDelay: 300,
});
// <!-- typed js effect ends -->
async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects.json"));
  const data = await response.json();
  return data;
}
function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
    <div class="bar">
    <div class="info">
    <img src=${skill.icon} alt="skill" />
    <span>${skill.name}</span>
    </div>
    </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}
// fetch projects start
function getProjects() {
  return fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
function showProjects(projects) {
  let projectsContainer = document.querySelector(".projects .box-container");
  let projectsHTML = "";
  projects.forEach((project) => {
    projectsHTML += `
    <div class="grid-item ${project.category}">
    <div class="box tilt" style="width: 480px; margin: 1rem">
    <img draggable="false" src="https://raw.githubusercontent.com/mdbakerfarhad/mdbaker/refs/heads/main/assets/images/projects/${project.image}.png" alt="project" />
    <div class="content">
    <div class="tag">
    <h3>${project.name}</h3>
    </div>
    <div class="desc">
    <p>${project.desc}</p>
    <div class="btns">
    <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
    <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
    </div>
    </div>
    </div>
    </div>
    </div>`;
  });
  projectsContainer.innerHTML = projectsHTML;
  // vanilla tilt.js
  // VanillaTilt.init(document.querySelectorAll(".tilt"), {
  // max: 20,
  // });
  // // vanilla tilt.js
  // /* ===== SCROLL REVEAL ANIMATION ===== */
  // const srtop = ScrollReveal({
  // origin: 'bottom',
  // distance: '80px',
  // duration: 1000,
  // reset: true
  // });
  // /* SCROLL PROJECTS */
  // srtop.reveal('.projects .box', { interval: 200 });
  // isotope filter products
  var $grid = $(".projects .box-container").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    masonry: {
      columnWidth: 200,
    },
  });
  // filter items on button click
  $(".button-group").on("click", "button", function () {
    $(".button-group").find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
  // <!-- tilt js effect starts -->
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
  });
  // <!-- tilt js effect ends -->
  /* ===== SCROLL REVEAL ANIMATION ===== */
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });
  /* SCROLL PROJECTS */
  srtop.reveal(".projects .box", { interval: 200 });
}

// <!-- tilt js effect ends -->
// pre loader start
// function loader() {
// document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
// setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end
// disable developer mode


// fetch Certificates start

function getCertificates() {
  return fetch("certificates.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function showCertificates(certificates) {
  let certificatesContainer = document.querySelector(".certificates .box-container");
  let certificatesHTML = "";

  certificates.forEach((certificate) => {
    certificatesHTML += `
      <div class="grid-item ${certificate.category.toLowerCase().replace(/\s/g, '')}">
        <figure class="certifications-banner-box">
          <img src="${certificate.image}" alt="${certificate.title}">
        </figure>
        <div class="certifications-content">
          <div class="certifications-meta">
            <p class="certifications-category">${certificate.category}</p>
            <span class="dot"></span>
            <time datetime="${certificate.date}">${new Date(certificate.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
          <h3 class="h3 certifications-item-title">${certificate.title}</h3>
          <p class="certifications-text">${certificate.description || certificate.description}</p>
        </div>
      </div>`;
  });

  certificatesContainer.innerHTML = certificatesHTML;

  // Initialize Isotope
  var $grid = $(".certificates .box-container").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    masonry: {
      columnWidth: 200,
    },
  });

  // Filter items on button click
  $(".button-group").on("click", "button", function () {
    $(".button-group").find(".is-checked").removeClass("is-checked");
    $(this).addClass("is-checked");
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // Initialize ScrollReveal
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });
  srtop.reveal(".certificates .box", { interval: 200 });
}

// Fetch and display certificates
getCertificates().then((data) => {
  showCertificates(data);
});
fetchData().then((data) => {
  showSkills(data);
});
fetchData("projects").then((data) => {
  showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});



document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
// // Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
// var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
// s1.async = true;
// s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
// s1.charset = 'UTF-8';
// s1.setAttribute('crossorigin', '*');
// s0.parentNode.insertBefore(s1, s0);
// })();
// // End of Tawk.to Live Chat
/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});
/* SCROLL HOME */
srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });
srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .telegram", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });
srtop.reveal(".home .mail", { interval: 600 });
/* SCROLL ABOUT */
srtop.reveal(".about .image", { delay: 400 });
srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 200 });
srtop.reveal(".about .content .box-container", { delay: 200 });
srtop.reveal(".about .content .resumebtn", { delay: 200 });
/* SCROLL SKILLS */
srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });
/* SCROLL EDUCATION */
srtop.reveal(".education .box", { interval: 200 });
/* SCROLL PROJECTS */
srtop.reveal(".projects .viewall", { interval: 400 });
/* SCROLL EXPERIENCE */
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });
/* SCROLL PUBLICATIONS */
srtop.reveal(".publications-img", { delay: 400 });
srtop.reveal(".publications-title ", { delay: 400 });
srtop.reveal(".publications-subtitle ", { delay: 600 });
srtop.reveal(".publications-btns", { delay: 70 });
// /* SCROLL CERTIFICATIONS */
// // srtop.reveal('.certifications-banner-box', { delay: 200 });
// srtop.reveal(".certificates-content", { delay: 300 });
// /* SCROLL CONTACT */
// srtop.reveal(".contact .container", { delay: 400 });
// srtop.reveal(".contact .container .form-group", { delay: 400 });
