import { projectData } from "../data/projects";

function ProjectGrid() {
  return (
    <section id="projects" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12 text-black text-center tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <div key={project.id} id={project.id} className="bg-white rounded-2xl p-8 border border-gray-200 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300 transition-all duration-300 group flex flex-col">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 block">Project</span>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gray-600 transition-colors">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 bg-gray-100 text-black text-[10px] rounded-md font-bold uppercase tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed flex-1">{project.description}</p>
              <div className="flex gap-4 pt-5 border-t border-gray-100 mt-auto">
                <a href={project.github} className="text-sm font-bold text-black hover:text-gray-500 transition-colors flex items-center gap-1">
                  GitHub Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;