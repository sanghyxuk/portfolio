import { Link } from "react-router-dom"; // Link 추가
import { projectData } from "../data/projects";

function ProjectGrid() {
  return (
    <section id="projects" className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12 text-black text-center tracking-tight">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="bg-white rounded-2xl border border-gray-200 hover:-translate-y-2 hover:shadow-2xl hover:border-gray-300 transition-all duration-500 group flex flex-col overflow-hidden cursor-pointer block">
              {project.video ? (
                <video src={project.video} autoPlay loop muted playsInline className="w-full h-56 object-cover border-b border-gray-100 grayscale group-hover:grayscale-0 transition-all duration-500" />
              ) : project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover border-b border-gray-100 grayscale group-hover:grayscale-0 transition-all duration-500" />
              ) : (
                <div className="w-full h-56 bg-gray-100 border-b border-gray-200 flex items-center justify-center text-gray-400 text-sm font-bold tracking-widest">
                  NO IMAGE
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 block">Project</span>
                <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-gray-600 transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-gray-100 text-black text-[10px] rounded-md font-bold uppercase tracking-wide">{t}</span>
                  ))}
                </div>
                {/* 카드에서는 설명이 너무 길면 잘리도록 line-clamp 적용 */}
                <p className="text-gray-600 mb-8 leading-relaxed flex-1 line-clamp-3">{project.description}</p>
                <div className="pt-5 border-t border-gray-100 mt-auto">
                  <span className="text-sm font-bold text-black group-hover:text-gray-500 transition-colors flex items-center gap-1">
                    자세히 보기 →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;