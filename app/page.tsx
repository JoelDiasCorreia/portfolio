"use client";
import Image from "next/image";
import { Project } from "./ui/project";

import Testimonial from "./ui/testimonial";
import Contact from "./ui/contact";
import { ProjectType } from "./ui/project"; // Import the ProjectType interface
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";

export default function Home() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const projects: ProjectType[] = [
    {
      title: "Dengue app",
      description:
        "This is an application idea with the purpose of help to mitigate and prevent dengue cases in Latin-America.",
      image: "/projects/dengue.png",
      link: "https://www.behance.net/gallery/106649775/Dengue-Tracker",
      category: "UX/UI Design",
    },
    {
      title: "DCM Indusrial Services",
      description:
        "This is a web page for a company that provides industrial services.",
      image: "/projects/dcm web page.png",
      link: "https://www.dcmindustrialservices.com/",
      category: "Frontend",
    },
    {
      title: "Oasis Real State",
      description:
        "This is a Real State Web Page Prototype made with the collaboration of Zoe Preiti Tasat and Camilla Regueira Aspitarte",
      image: "/projects/oasis.png",
      link: "https://zoepreititasat.github.io/oasis_real_state/",
      category: "Frontend",
    },
  ];

  const companies = [
    {
      image: "/brands/MillerKnoll-Logo.png",
      name: "MillerKnoll",
    },
    {
      image: "/brands/opendevpro.png",
      name: "OpenDevPro",
    },
    {
      image: "/brands/siemens.png",
      name: "Siemens",
    },
  ];

  const options = useMemo(
    () => ({
      "autoPlay": true,
      "background": {
        "color": {
          "value": "#19191e"
        },
        "image": "",
        "position": "",
        "repeat": "",
        "size": "",
        "opacity": 1
      },
      "backgroundMask": {
        "composite": "destination-out",
        "cover": {
          "color": {
            "value": "#fff"
          },
          "opacity": 1
        },
        "enable": false
      },
      "clear": true,
      "defaultThemes": {},
      "delay": 0,
      "fullScreen": {
        "enable": true,
        "zIndex": 0
      },
      "detectRetina": true,
      "duration": 0,
      "fpsLimit": 45,
      "interactivity": {
        "detectsOn": "window",
        "events": {
          "onClick": {
            "enable": false,
            "mode": "push"
          },
          "onDiv": {
            "selectors": {},
            "enable": false,
            "mode": {},
            "type": "circle"
          },
          "onHover": {
            "enable": false,
            "mode": "grab",
            "parallax": {
              "enable": true,
              "force": 60,
              "smooth": 10
            }
          },
          "resize": {
            "delay": 0.5,
            "enable": false
          }
        },
        "modes": {
          "trail": {
            "delay": 1,
            "pauseOnStop": false,
            "quantity": 1
          },
          "attract": {
            "distance": 100,
            "duration": 0.4,
            "easing": "ease-out-quad",
            "factor": 1,
            "maxSpeed": 50,
            "speed": 1
          },
          "bounce": {
            "distance": 200
          },
          "bubble": {
            "distance": 400,
            "duration": 2,
            "mix": false,
            "opacity": 0.8,
            "size": 40,
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "mix": false,
              "selectors": {}
            }
          },
          "connect": {
            "distance": 80,
            "links": {
              "opacity": 0.5
            },
            "radius": 10
          },
          "grab": {
            "distance": 150,
            "links": {
              "blink": false,
              "consent": false,
              "opacity": 1
            }
          },
          "push": {
            "default": true,
            "groups": [],
            "quantity": 4
          },
          "remove": {
            "quantity": 2
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "selectors": {}
            }
          },
          "slow": {
            "factor": 3,
            "radius": 200
          },
          "light": {
            "area": {
              "gradient": {
                "start": {
                  "value": "#ffffff"
                },
                "stop": {
                  "value": "#000000"
                }
              },
              "radius": 1000
            },
            "shadow": {
              "color": {
                "value": "#000000"
              },
              "length": 2000
            }
          }
        }
      },
      "manualParticles": [],
      "particles": {
        "bounce": {
          "horizontal": {
            "value": 1
          },
          "vertical": {
            "value": 1
          }
        },
        "collisions": {
          "absorb": {
            "speed": 2
          },
          "bounce": {
            "horizontal": {
              "value": 1
            },
            "vertical": {
              "value": 1
            }
          },
          "enable": false,
          "maxSpeed": 50,
          "mode": "bounce",
          "overlap": {
            "enable": true,
            "retries": 0
          }
        },
        "color": {
          "value": "#68f7e2",
          "animation": {
            "h": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": true,
              "offset": 0
            },
            "s": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": true,
              "offset": 0
            },
            "l": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": true,
              "offset": 0
            }
          }
        },
        "effect": {
          "close": true,
          "fill": true,
          "options": {},
          "type": {}
        },
        "groups": [],
        "move": {
          "angle": {
            "offset": 0,
            "value": 90
          },
          "attract": {
            "distance": 200,
            "enable": false,
            "rotate": {
              "x": 3000,
              "y": 3000
            }
          },
          "center": {
            "x": 50,
            "y": 50,
            "mode": "percent",
            "radius": 0
          },
          "decay": 0,
          "distance": {},
          "direction": "none",
          "drift": 0,
          "enable": true,
          "gravity": {
            "acceleration": 5,
            "enable": false,
            "inverse": false,
            "maxSpeed": 10
          },
          "path": {
            "clamp": true,
            "delay": {
              "value": 0
            },
            "enable": false,
            "options": {}
          },
          "outModes": {
            "default": "out",
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "random": false,
          "size": false,
          "speed": 2,
          "spin": {
            "acceleration": 0,
            "enable": false
          },
          "straight": false,
          "trail": {
            "enable": false,
            "length": 10,
            "fill": {}
          },
          "vibrate": false,
          "warp": false
        },
        "number": {
          "density": {
            "enable": true,
            "width": 1920,
            "height": 1080
          },
          "limit": {
            "mode": "delete",
            "value": 100
          },
          "value":50
        },
        "opacity": {
          "value": {
            "min": 0.1,
            "max": 0.5
          },
          "animation": {
            "count": 0,
            "enable": true,
            "speed": 3,
            "decay": 0,
            "delay": 0,
            "sync": false,
            "mode": "auto",
            "startValue": "random",
            "destroy": "none"
          }
        },
        "reduceDuplicates": false,
        "shadow": {
          "blur": 0,
          "color": {
            "value": "#000"
          },
          "enable": false,
          "offset": {
            "x": 0,
            "y": 0
          }
        },
        "shape": {
          "close": true,
          "fill": true,
          "options": {},
          "type": "circle"
        },
        "size": {
          "value": {
            "min": 1,
            "max": 5
          },
          "animation": {
            "count": 0,
            "enable": true,
            "speed": 20,
            "decay": 0,
            "delay": 0,
            "sync": false,
            "mode": "auto",
            "startValue": "random",
            "destroy": "none"
          }
        },
        "stroke": {
          "width": 0
        },
        "zIndex": {
          "value": 0,
          "opacityRate": 1,
          "sizeRate": 1,
          "velocityRate": 1
        },
        "destroy": {
          "bounds": {},
          "mode": "none",
          "split": {
            "count": 1,
            "factor": {
              "value": 3
            },
            "rate": {
              "value": {
                "min": 4,
                "max": 9
              }
            },
            "sizeOffset": true,
            "particles": {}
          }
        },
        "roll": {
          "darken": {
            "enable": false,
            "value": 0
          },
          "enable": false,
          "enlighten": {
            "enable": false,
            "value": 0
          },
          "mode": "vertical",
          "speed": 25
        },
        "tilt": {
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "decay": 0,
            "sync": false
          },
          "direction": "clockwise",
          "enable": false
        },
        "twinkle": {
          "lines": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          },
          "particles": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          }
        },
        "wobble": {
          "distance": 5,
          "enable": false,
          "speed": {
            "angle": 50,
            "move": 10
          }
        },
        "life": {
          "count": 0,
          "delay": {
            "value": 0,
            "sync": false
          },
          "duration": {
            "value": 30,
            "sync": false
          }
        },
        "rotate": {
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "decay": 0,
            "sync": false
          },
          "direction": "clockwise",
          "path": false
        },
        "orbit": {
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": false
          },
          "enable": false,
          "opacity": 1,
          "rotation": {
            "value": 45
          },
          "width": 1
        },
        "links": {
          "blink": false,
          "color": {
            "value": "#2ef9e6"
          },
          "consent": false,
          "distance": 150,
          "enable": true,
          "frequency": 1,
          "opacity": 0.4,
          "shadow": {
            "blur": 5,
            "color": {
              "value": "#000"
            },
            "enable": false
          },
          "triangles": {
            "enable": false,
            "frequency": 1
          },
          "width": 1,
          "warp": false
        },
        "repulse": {
          "value": 0,
          "enabled": false,
          "distance": 1,
          "duration": 1,
          "factor": 1,
          "speed": 1
        }
      },
      "pauseOnBlur": false,
      "pauseOnOutsideViewport": false,
      "responsive": [],
      "smooth": false,
      "style": {},
      "themes": [],
      "zLayers": 100,
      "name": "Parallax",
      "motion": {
        "disable": false,
        "reduce": {
          "factor": 4,
          "value": true
        }
      }
    }),
    []
  );

  return (
    <main className="bg-transparent min-h-screen pt-16 flex flex-1 flex-col items-center justify-center w-full text-center">
      <style>
        {`
        #tsparticles {
            z-index: -100;
        }
        `}
      </style>

      <div className="flex flex-col items-center m-5 mb-10 h-fit">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h2 className="mt-4 text-2xl text-white">
          Hello, I am Joel Dias Correia
        </h2>
        <p className="mt-2 text-lg text-white">
          Welcome to my portfolio website. I am a full stack developer with a
          passion for solving business problems with technology.
        </p>

        <div className="p-5">
          <a
            href="#contact"
            className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 m-2.5"
          >
            Get in Touch
          </a>

          <a
            href="#projects"
            className="mt-4 px-4 py-2 text-green-600 rounded border-green-600 border m-2.5 hover:text-white hover:bg-green-600 backdrop-blur-md bg-black/30"
          >
            Check my Projects
          </a>
        </div>
        <div className="flex flex-wrap flex-row items-stretch justify-center w-full m-10">

          <div className="border  border-green-600 p-5 w-80 rounded-l-lg  backdrop-blur-md bg-black/30">
            <h2 className="text-2xl font-bold">Frontend Developer</h2>
            <br></br>

            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>

            <div className="m-5">
              <p className="text-bold text-green-500">Languages</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Typescript</li>
              </ul>
            </div>
            <div className="m-5">
              <p className="text-bold text-green-500">Frameworks I use</p>
              <ul>
                <li>Angular</li>
                <li>ReactJS</li>
                <li>NextJS</li>
              </ul>
            </div>

            <div className="m-5">
              <p className="text-bold text-green-500">Dev Tools</p>
              <ul>
                <li>Figma</li>
                <li>Github</li>
                <li>Tailwind CSS</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
          <div className="border  border-green-600 p-5 w-80 rounded-r-lg backdrop-blur-md bg-black/30">
            <h2 className="text-2xl font-bold">Backend Developer</h2>
            <br></br>

            <p>
              I build and maintain the server-side components of web applications, 
              ensuring they run smoothly and efficiently.
            </p>

            <div className="m-5">
              <p className="text-bold text-green-500">Languages</p>
              <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>Typescript</li>
              </ul>
            </div>
            <div className="m-5">
              <p className="text-bold text-green-500">Frameworks I use</p>
              <ul>
                <li>Spring-Boot</li>
                <li>NodeJS</li>
                <li>ExpressJS</li>
              </ul>
            </div>

            <div className="m-5">
              <p className="text-bold text-green-500">Dev Tools</p>
              <ul>
                <li>3rd Party APIs</li>
                <li>Swagger UI</li>
                <li>Jmeter</li>
                <li>Postman</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>

        </div>

        <div 
        id="projects" 
        className="border border-green-600 p-5 w-80 rounded-t-lg backdrop-blur-md bg-black/30  w-fit pb-10 mb-15">
        <h1 className="text-4xl font-bold mb-8 text-white pt-16">Projects</h1>

        <p>
          Here are a few projects I&lsquo;ve worked on recently. Want to see more?
          Email me.
        </p>
        <div className=" flex flex-wrap flex-1 flex-row items-center justify-center w-full">
          {projects.map((project: ProjectType, index: number) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </div>


        <div id="companies" className="border border-green-600 p-5 w-80 rounded-b-lg backdrop-blur-md bg-black/30 w-full">
          <h1 className="text-xl font-bold mb-8 text-white pt-16">
            I am proud to have collaborated with some awesome companies:
          </h1>
          <div className="flex flex-wrap flex-1 flex-row items-center justify-center w-full">
            {companies.map(
              (company: { image: string; name: string }, index: number) => {
                return (
                  <div className="bg-white w-fit m-auto px-10 rounded-lg" key={index}>
                    <Image
                      
                      src={company.image}
                      alt={company.name}
                      height={200}
                      width={200}
                      className="m-4 cursor-pointer"
                    />

                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>


      <div className="sm:w-full md:w-1/2 m-5">
        <Contact></Contact>
      </div>

 
      <div className="sm:w-full md:w-1/2 m-5">
        <Testimonial></Testimonial>
      </div>
      <Particles id="tsparticles" options={options as any} />
    </main>
  );
}
