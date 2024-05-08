import Projects from "../data/Projects.jsx";
import ProjectItems from "../components/ProjectItems.jsx";

function Project() {
  return (
    <div id="project">
      <h1 className="text-center mb-4 hover:underline hover:underline-offset-8 dark:hover:text-white">
        <span className="text-4xl font-bold bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 bg-clip-text text-transparent dark:text-white">
          Projects
        </span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 dark:text-white">
          {Projects.map((project, index) => (
            <ProjectItems
              key={index}
              imgURL={project.imgURL}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;