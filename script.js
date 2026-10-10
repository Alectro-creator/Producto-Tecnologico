
/* ========================================
   XBOX SERIES X - SCROLLYTELLING
   GSAP + SCROLLTRIGGER
======================================== */

// Registrar el plugin
gsap.registerPlugin(ScrollTrigger);

// Detectar las tres secciones
const secciones = gsap.utils.toArray(".section");

// Adaptar animaciones a cada pantalla
const mm = gsap.matchMedia();

// Escritorio y tablets grandes
mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {

    // SECCIÓN 1: PRESENTACIÓN
    const inicio = gsap.timeline({
        scrollTrigger: {
            trigger: "#inicio",
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });

    inicio
        .from("#inicio .etiqueta", {
            opacity: 0,
            y: 30,
            duration: 0.5
        })
        .from("#inicio h1", {
            opacity: 0,
            x: -80,
            duration: 0.8
        })
        .from("#inicio h2, #inicio p, #inicio .boton", {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.6
        })
        .from("#inicio .imagen", {
            opacity: 0,
            x: 100,
            duration: 0.9
        }, "<");

    // Parallax de la imagen de portada
    gsap.to("#inicio .imagen img", {
        y: -65,
        ease: "none",
        scrollTrigger: {
            trigger: "#inicio",
            start: "top top",
            end: "bottom top",
            scrub: 1
        }
    });

    // SECCIÓN 2: INNOVACIÓN
    // Pin + scrub + timeline
    const tecnologia = gsap.timeline({
        scrollTrigger: {
            trigger: "#tecnologia",
            start: "top top",
            end: "+=1200",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
        }
    });

    tecnologia
    .from("#tecnologia .etiqueta, #tecnologia h2, #tecnologia p", {
        opacity: 0,
        x: -80,
        duration: 1,
        stagger: 0.15
    })
        .from("#tecnologia .imagen", {
            opacity: 0,
            scale: 0.7,
            duration: 1
        }, "<")
        .from("#tecnologia .caracteristica", {
            opacity: 0,
            y: 60,
            stagger: 0.25,
            duration: 1
        })
        .to("#tecnologia .imagen img", {
            scale: 1.08,
            duration: 1
        });

    // SECCIÓN 3: EXPERIENCIA
    const experiencia = gsap.timeline({
        scrollTrigger: {
            trigger: "#experiencia",
            start: "top 75%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
        }
    });

    experiencia
        .from("#experiencia .etiqueta", {
            opacity: 0,
            y: 30,
            duration: 0.5
        })
        .from("#experiencia h2", {
            opacity: 0,
            y: 60,
            duration: 0.8
        })
        .from("#experiencia p", {
            opacity: 0,
            y: 40,
            stagger: 0.2,
            duration: 0.7
        })
        .from("#experiencia .imagen", {
            opacity: 0,
            x: 90,
            duration: 0.8
        }, "<")
        .from("#experiencia .boton", {
            opacity: 0,
            scale: 0.8,
            duration: 0.5
        });

});

// Celulares
mm.add("(max-width: 768px) and (prefers-reduced-motion: no-preference)", () => {

    secciones.forEach((seccion) => {

        gsap.from(seccion.querySelectorAll(
            ".etiqueta, h1, h2, p, .caracteristica, .imagen, .boton"
        ), {
            opacity: 0,
            y: 25,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: {
                trigger: seccion,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

    });

});

// Movimiento reducido:
// sin animaciones para quienes lo prefieran
