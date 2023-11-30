import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 lg:py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#07bee2] py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-5 px-5 md:px-20">
        <ProjectCard
          src="/pos.png"
          title="POS Web app"
          description="Modern Next.js Point of sale web app that handle purchase sale and stock updation"
        />
        <ProjectCard
          src="/store.png"
          title="Storesync"
          description="Next.js ecommerce CMS with advance feature"
        />
        <ProjectCard
          src="/pos-2.png"
          title="Admin dashboard"
          description="Admin dashboard including e-commerce store with complex analytics "
        />
        <ProjectCard
          src="/discord.png"
          title="Discord clone"
          description="Social media application where you can chat realtime and share your ideas with others"
        />
        <ProjectCard
          src="/port.png"
          title="My Own Portfolio"
          description="Portfolio website that your're visiting"
        />
        <ProjectCard
          src="/game.png"
          title="Game Design"
          description="Ui of a game that i have design for my client with is a frontend of a game"
        />
        
      </div>
    </div>
  );
};

export default Projects;
