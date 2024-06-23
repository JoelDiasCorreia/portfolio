"use client";
import Image from "next/image";
import { Project } from "./ui/project";
import Testimonial from "./ui/testimonial";
import Contact from "./ui/contact";
import { ProjectType } from "./ui/project"; // Import the ProjectType interface
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";
import { CodeBracketIcon, ServerStackIcon } from "@heroicons/react/24/outline";
// import json file 
import ParticlesConfigMap from "./particles.config.json";


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
    () => (

      ParticlesConfigMap as any
    ),
    []
  );

  return (
    <main className="font-mono bg-transparent min-h-screen pt-16 flex flex-1 flex-col items-center justify-center w-full text-center">
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
          Hello, I am 
          <strong className="text-green-600 mx-2.5">Joel Dias Correia</strong>
          
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
            className="mt-4 px-4 py-2 text-green-600 rounded border-green-600 border m-2.5 hover:text-white hover:bg-green-600 backdrop-blur-sm bg-black/30"
          >
            Check my Projects
          </a>
        </div>
        <div className="flex flex-wrap  flex-row items-stretch justify-center w-full m-10">

          <div className="flex items-center flex-col border  border-green-600 p-5 w-80 rounded-l-lg  backdrop-blur-sm bg-black/30">
            
            <CodeBracketIcon className="h-9 stroke-green-500"/>

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
          <div className="flex items-center flex-col border  border-green-600 p-5 w-80 rounded-r-lg backdrop-blur-sm bg-black/30">
            
            <ServerStackIcon className="h-9  stroke-green-500"/>
            <h2 className="text-2xl font-bold">Backend Developer</h2>
            <br></br>

            <p>
              I build server-side components of web applications, 
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
        className="border border-green-600 p-5 w-80 rounded-t-lg backdrop-blur-sm bg-black/30  w-fit pb-10 mb-15">
        <h1 className="text-4xl font-bold mb-8 text-white pt-16">Projects</h1>

        <p>
          Here are a few projects I&lsquo;ve worked on recently.
        </p>
        <div className=" flex flex-wrap flex-1 flex-row items-center justify-center w-full">
          {projects.map((project: ProjectType, index: number) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </div>


        <div id="companies" className="border border-green-600 p-5 w-80 rounded-b-lg backdrop-blur-sm bg-black/30 w-full">
          <h1 className="text-xl font-bold mb-8 text-white pt-16">
            I am proud to have collaborated with some awesome companies:
          </h1>
          <div className="flex flex-wrap flex-1 flex-row items-center justify-center w-full">
            {companies.map(
              (company: { image: string; name: string }, index: number) => {
                return (
                  <div className="bg-white flex min-h-36 items'-enter w-fit m-auto px-10 rounded-lg" key={index}>
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
