import { useParams, Link } from "react-router-dom";
import { projectData } from "../data/projects";

function ProjectDetail() {
  // 주소창에서 id 값을 가져옵니다. (예: /project/peace-cat 이면 id는 'peace-cat')
  const { id } = useParams(); 
  
  // 전체 데이터 중 id가 일치하는 프로젝트 하나만 찾습니다.
  const project = projectData.find(p => p.id === id);

  // 프로젝트를 못 찾았을 때 보여줄 화면
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-black">프로젝트를 찾을 수 없습니다.</h2>
        <Link to="/" className="text-gray-500 hover:text-black underline">← 메인으로 돌아가기</Link>
      </div>
    );
  }

  // 실제 상세 페이지 화면 (블랙 앤 화이트 테마 유지)
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <Link to="/" className="inline-block mb-10 text-sm font-bold text-gray-400 hover:text-black transition-colors">
        ← Back to Home
      </Link>
      
      <div className="mb-10">
        <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-3 block">Project Detail</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-gray-100 text-black text-xs rounded-md font-bold uppercase tracking-wide">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* 📸 사진이나 영상이 있다면 크게 보여줍니다 */}
      {(project.image || project.video) && (
        <div className="mb-12 rounded-2xl overflow-hidden border border-gray-200">
          {project.video ? (
            <video src={project.video} autoPlay loop muted playsInline className="w-full h-auto object-cover" />
          ) : (
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          )}
        </div>
      )}

      {/* 📝 상세 설명 영역 */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <h3 className="text-2xl font-bold text-black mb-4 border-b border-gray-200 pb-2">프로젝트 소개</h3>
        <p className="mb-10">{project.description}</p>
        
        {/* 추후 projects.js에 detailContent 같은 긴 글을 추가하면 여기에 보여줄 수 있습니다 */}
        {project.detailContent && (
           <div className="whitespace-pre-wrap">{project.detailContent}</div>
        )}
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 flex gap-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
          GitHub Repository →
        </a>
        {project.link !== "#" && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-300 text-black font-bold rounded-lg hover:bg-gray-50 transition-colors">
            Live Demo
          </a>
        )}
      </div>
    </section>
  );
}

export default ProjectDetail;