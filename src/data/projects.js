export const historyData = [
  {
    date: "2025.12",
    event: "수원대학교 SW개발 프로젝트 금상 수상 (PHANTOM)", // [cite: 35, 41]
    role: "수원대학교 ICT학장 수여 / 지능형 안드로이드 통합 보안 서비스 개발 " // [cite: 88]
  },
  {
    date: "2025.06",
    event: "SK 쉴더스 지능형 애플리케이션 개발자 양성과정 수료", // [cite: 58]
    role: "K-Digital 선도인력 양성과정 960시간 이수" // [cite: 66]
  },
  {
    date: "2024.06",
    event: "수원대학교 지능형 SW융합대학 아이디어 공모전 장려상", // [cite: 43, 47]
    role: "수원대학교 ICT학장 수여" // [cite: 56]
  },
  {
    date: "2024.06",
    event: "현대 오토에버 배리어프리 앱 개발 콘테스트 본선 진출", // [cite: 60]
    role: "체어맨(CHAIR MAN) 프로젝트" // [cite: 79, 716]
  }
];

export const projectData = [
  {
    id: "phantom",
    title: "팬텀 (PHANTOM)", // [cite: 85]
    tech: ["Spring Boot", "Flask", "MongoDB", "AWS", "XGBoost", "MSA"], // [cite: 125, 131, 135, 137, 138, 141]
    description: "지능형 안드로이드 통합 보안 애플리케이션입니다. 악성코드/스팸 피싱 탐지 및 챗봇 AI 모델을 구축하고 MSA 지향 API 서버를 개발했습니다.", // [cite: 86, 92, 93, 94, 126]
    github: "https://github.com/sanghyxuk", // 
    link: "#",
    image: "/images/phantom.png", // 👈 public/images 폴더에 실제 캡처본을 넣고 이름을 맞춰주세요!
    detailImages: [] 
  },
  {
    id: "purgo",
    title: "푸르고 (PURGO)", // [cite: 305]
    tech: ["React", "Spring Boot", "Flask", "KoBERT", "FastText", "Redis"], // [cite: 504, 513, 543, 577, 581, 610]
    description: "LLM 기반 실시간 욕설/비속어 필터링 서비스입니다. 욕설 필터링 AI 파인튜닝과 MSA 구조 기반의 프록시 및 채팅 서버를 설계했습니다.", // [cite: 306, 312, 454]
    github: "https://github.com/sanghyxuk", // 
    link: "#",
    image: "/images/purgo.png",
    detailImages: []
  },
  {
    id: "shield-hub",
    title: "쉴드허브 (SHIELD HUB)", // [cite: 546]
    tech: ["React", "Spring Boot", "Flask", "AES-256", "Google OTP"], // [cite: 561, 577, 581, 610, 641]
    description: "파일 보안 및 지능형 웹 취약점 분석 서비스입니다. 카오스 이론 기반 파일 암호화 알고리즘과 TF-IDF 기반 취약점 추론 모델을 개발했습니다.", // [cite: 547, 559, 560, 619, 679]
    github: "https://github.com/sanghyxuk", // 
    link: "https://frontend-chi-lake-23.vercel.app/", // [cite: 571]
    image: "/images/shield-hub.png",
    detailImages: []
  },
  {
    id: "chair-man",
    title: "체어맨 (CHAIR MAN)", // [cite: 716]
    tech: ["Android", "Spring Boot", "MySQL", "Cafe24"], // [cite: 804, 808, 817, 819]
    description: "전국 휠체어 대여 서비스 앱입니다. 원터치 대여 및 예약 시스템을 구축하고 DBA 및 백엔드 개발을 담당했습니다.", // [cite: 717, 722, 725]
    github: "https://github.com/sanghyxuk", // 
    link: "http://www.chairman123.com", // [cite: 739]
    image: "/images/chair-man.png",
    detailImages: []
  },
  {
    id: "peace-cat",
    title: "피쓰냥 (Peace Cat)",
    tech: ["Java 11", "Python 3.12.10", "FastAPI", "React"],
    description: "URL 분석 AI를 활용한 스미싱 방지 크롬 확장 프로그램입니다. 악성 URL을 판별하는 AI 모델과 빠르고 안정적인 FastAPI 백엔드 서버를 구축했습니다.",
    github: "https://github.com/Sanghyuk/peace-cat",
    link: "#",
    image: "/images/peace-cat.png", // 👈 이건 메인 카드에 보이는 대표 썸네일 1장
    
    // 👇 상세 페이지에 보여줄 추가 사진들 (여러 장 가능!)
    detailImages: [
      "/images/peace-cat-detail1.png",
      "/images/peace-cat-detail2.png"
    ] 
  }
];