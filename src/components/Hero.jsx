function Hero() {
  return (
    <section className="relative bg-white pt-24 pb-32 sm:pt-32 sm:pb-40 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block mb-6 text-xs font-bold text-black border border-black px-4 py-1.5 rounded-full uppercase tracking-widest">
          Software Developer
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-6 leading-tight">
          사람을 위한 서비스와 <br className="hidden sm:block" />
          AI 기술을 연결하는 개발자, <br />
          표상혁입니다.
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
          다양한 서비스 개발 경험과 AI 기술 활용 능력을 겸비했습니다.
          사용자에게 실질적인 가치를 주는 서비스를 만듭니다.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/10">
            프로젝트 보기 ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;