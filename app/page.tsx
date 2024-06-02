
import Image from 'next/image'
import { Project } from "./ui/project";

import Testimonial from "./ui/testimonial";
import Contact from "./ui/contact";
import { ProjectType } from "./ui/project"; // Import the ProjectType interface

export default function Home() {
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
    }
];
  return (
    <main className="min-h-screen py-16 bg-white flex flex-1 flex-col items-center justify-center w-full text-center">
      <Image
        src="/profile.png"
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full"
      />
      <h2 className="mt-4 text-2xl text-black">
        Hello, I am Joel Dias Correia
      </h2>
      <p className="mt-2 text-lg text-slate-400">
        Welcome to my portfolio website. I am a full stack developer with a passion for solving business problems with technology.
      </p>
      <a href="#contact" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Get in Touch</a>
  
      <h1 id='projects' className="text-4xl font-bold mb-8 text-black pt-16">Projects</h1>
        <div className=" flex flex-wrap flex-1 flex-row items-center justify-center w-full">
            <Project project={projects[0]}></Project>
            <Project project={projects[1]}></Project>
        </div>


        <Contact></Contact>

        <Testimonial></Testimonial>
   </main>

  );
}
