particlesJS("particles-js", {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 600,
            },
        },
        color: {
            value: ["#ffffff"]
        },
        shape: {
            type: "star",
        },
        opacity: {
            value: 0.9,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3.5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.1,
            bounce: true,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
});