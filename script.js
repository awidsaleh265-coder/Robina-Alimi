/* =========================================================
   ROBINA ALIMI — PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   INTRO SCREEN
========================================================= */

const intro = document.getElementById("intro");

document.body.classList.add("locked");


window.addEventListener("load", () => {

    setTimeout(() => {

        intro.classList.add("hide");

        document.body.classList.remove("locked");

    }, 3200);

});


/* =========================================================
   HEADER ON SCROLL
========================================================= */

const header = document.getElementById("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================================================
   PROJECT IMAGE PARALLAX
========================================================= */

const heroImage =
    document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

    if (!heroImage) return;


    const scrollPosition = window.scrollY;


    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    }

});


/* =========================================================
   PROJECT HOVER EFFECT
========================================================= */

const projects =
    document.querySelectorAll(".project");


projects.forEach((project) => {

    project.addEventListener("mousemove", (event) => {

        const rect =
            project.getBoundingClientRect();


        const x =
            event.clientX - rect.left;


        const y =
            event.clientY - rect.top;


        const rotateX =
            ((y / rect.height) - 0.5) * -3;


        const rotateY =
            ((x / rect.width) - 0.5) * 3;


        project.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    project.addEventListener("mouseleave", () => {

        project.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

const navLinks =
    document.querySelectorAll('a[href^="#"]');


navLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (targetId === "#") return;


        const target =
            document.querySelector(targetId);


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =========================================================
   CV BUTTON EFFECT
========================================================= */

const cvButton =
    document.querySelector(".cv-button");


if (cvButton) {

    cvButton.addEventListener("mouseenter", () => {

        cvButton.style.letterSpacing = "3px";

    });


    cvButton.addEventListener("mouseleave", () => {

        cvButton.style.letterSpacing = "2px";

    });

}


/* =========================================================
   MOUSE MOVE — HERO
========================================================= */

const hero =
    document.querySelector(".hero");


if (hero) {

    hero.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 10;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 10;


        const decoration =
            document.querySelector(".hero-decoration");


        if (decoration) {

            decoration.style.transform =
                `translate(${25 + x}px, ${25 + y}px)`;

        }

    });

}


/* =========================================================
   DISABLE IMAGE DRAG
========================================================= */

document.querySelectorAll("img").forEach((image) => {

    image.addEventListener("dragstart", (event) => {

        event.preventDefault();

    });

});