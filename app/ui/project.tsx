import Link from "next/link";

import Image from "next/image"; // Import the Image component from the correct package

export type ProjectType = { 
  title: string;
  description: string;
  image: string;
  link: string;
  category: "UX/UI Design" | "Frontend" | "Backend" | "Fullstack";
}

export const Project = (props: { project: ProjectType }) => {
  return (
    <Link href={props.project.link} target="_blank">
      <div className="bg-white w-80 h-96 border-solid border-2 border-slate-200 transition-all duration-300 hover:drop-shadow-xl m-3 rounded-lg">
        <Image
          src={props.project.image} // Update the image source path
          width={0}
          height={0}
          alt={props.project.title}
          sizes="100vw"
          className="rounded-t-lg"
          style={{ width: "auto", height: "auto" }} // optional
        />
        <div className="p-5">
          <h2 className="text-black text-lg">{props.project.title}</h2>
          <h3 className="text-black text-md font-bold">{props.project.category}</h3>
          <p className="text-slate-600"> {props.project.description}</p>
        </div>
      </div>
    </Link>
  );
};
