import { historyData } from "../data/projects";

function Timeline() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-extrabold text-black tracking-tight">Career & Experience</h2>
        <div className="h-[2px] flex-1 bg-gray-100"></div>
      </div>
      <div className="space-y-10">
        {historyData.map((item, index) => (
          <div key={index} className="flex gap-6 border-l-2 border-gray-200 pl-6 relative hover:border-black transition-colors duration-300 group">
            <div className="absolute w-3 h-3 bg-black rounded-full -left-[7px] top-1.5 shadow-[0_0_0_4px_white] group-hover:scale-125 transition-transform"></div>
            <span className="text-sm font-mono text-black w-32 shrink-0 font-bold pt-1">{item.date}</span>
            <div>
              <h3 className="font-bold text-black text-lg">{item.event}</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">{item.role || item.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;