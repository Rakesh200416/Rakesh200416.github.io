const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

const words = ["Software Engineer","developer", "designer", "Writer", "blogger"];
let i = 0, j = 0;
let currentWord = "";
let isDeleting = false;
const typeEffect = document.getElementById("type-effect");

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
      typeEffect.innerHTML = `<span style="color:#00ff88;">${currentWord}</span>`;
    }
    if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
      typeEffect.innerHTML = `<span style="color:#00ff88;">${currentWord}</span>`;
    }
    if (j == words[i].length) isDeleting = true;
    if (j == 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? 150 : 250);
}
type();

// Click effect for social icons
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.toggle('clicked');
  });
});

// service page starts

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Modal functionality
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");

// Modal content map
const serviceDescriptions = {
  web: {
    title: "Web Development",
    text: "Develop a responsive websites using HTML, CSS, JavaScript, React, and more. Includes both frontend and backend solutions."
  },
  software: {
    title: "Software Development",
    text: "From desktop apps to enterprise solutions built with Java, Python, and MERN, focusing on efficiency and usability."
  },
  data: {
    title: "Data Analytics",
    text: "Data cleaning, analysis, and visualization using Python, Pandas, Tableau, and Power BI to make data-driven decisions."
  },
  uiux: {
    title: "UI/UX Design",
    text: "User-centered design, wireframing, prototyping, and improving interaction flows for seamless user experience."
  },
  graphic: {
    title: "Graphic Design",
    text: "Creative branding, logo design, posters, and digital illustrations using  tools like canva and so on."
  },
  video: {
    title: "Video Editing",
    text: "Storytelling through visuals, including trimming, transitions, effects, and sound mixing using Premiere Pro or CapCut."
  }
};

// When arrow is clicked
document.querySelectorAll(".arrow").forEach(arrow => {
  arrow.addEventListener("click", () => {
    const serviceKey = arrow.getAttribute("data-service");
    const content = serviceDescriptions[serviceKey];
    if (content) {
      modalTitle.textContent = content.title;
      modalText.textContent = content.text;
      modal.style.display = "block";
    }
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});


// resume page js starts

function showTab(event, tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}