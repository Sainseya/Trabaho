const particlesConfig = {
   particles: {
      number: {
         value: 80,
         density: {
            enable: true,
            value_area: 800,
         },
      },
      color: {
         value: '#ffffff',
      },
      shape: {
         type: 'circle',
         stroke: {
            width: 0,
            color: '#000000',
         },
         polygon: {
            nb_sides: 5,
         },
      },
      opacity: {
         value: 1,
         random: true,
         anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
         },
      },
      size: {
         value: { min: 3, max: 5},
         random: false,
         anim: {
            enable: true,
            speed: 0,
            size_min: 10,
            sync: false,
         },
      },
      line_linked: {
         enable: false,
         distance: 25,
         color: '#ffffff',
         opacity: 0.4,
         width: 1.5,
      },
      move: {
         enable: true,
         speed: 5,
         direction: 'none',
         random: true,
         straight: false,
         out_mode: 'out',
         bounce: false,
         attract: {
            enable: true,
            rotateX: 2998.8083682536653,
            rotateY: 1200,
         },
      },
   },
   interactivity: {
      detect_on: 'canvas',
      events: {
         onhover: {
            enable: true,
            mode: 'grab',
         },
         resize: true,
      },
      modes: {
         grab: {
            distance: 250,
            line_linked: {
               opacity: 1,
            },
         },
         bubble: {
            distance: 400,
            size: 50,
            duration: 2,
            opacity: 8,
            speed: 3,
         },
         push: {
            particles_nb: 4,
         },
         remove: {
            particles_nb: 2,
         },
      },
   },
   retina_detect: true,
};

export default particlesConfig;
