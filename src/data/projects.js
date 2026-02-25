// src/data/projects.js

export const historyData = [
  {
    date: "2026.02",
    event: "유아 관찰 일지 작성 보조 시스템 기획",
    role: "4~5세 유아 대상 행동 발달 관찰 일지 자동화 로직 설계"
  },
  {
    date: "2026.01 - 2026.02",
    event: "스미싱 방지 크롬 확장 프로그램 '피쓰냥' 개발",
    role: "URL 분석 AI 모델 및 Python 3.12.10 기반 FastAPI 서버 개발"
  },
  {
    date: "2026.01",
    event: "데이터 유니버스 주관 AI 서비스 개발 경진대회",
    note: "경찰청 후원 공모전 참여"
  }
];

export const projectData = [
  {
    id: "peace-cat",
    title: "피쓰냥 (Peace Cat)",
    tech: ["Java 11", "Python 3.12.10", "FastAPI", "React"],
    description: "URL 분석 AI를 활용한 스미싱 방지 크롬 확장 프로그램입니다. 악성 URL을 판별하는 AI 모델과 빠르고 안정적인 FastAPI 백엔드 서버를 구축했습니다.",
    github: "https://github.com/Sanghyuk/peace-cat",
    link: "#",
    image: "/images/peace-cat.png" // 👈 경로가 이렇게 들어가야 합니다. (이름은 상혁님 파일명에 맞게 수정!)
  },
  {
    id: "ai-competition",
    title: "AI 서비스 경진대회 출품작",
    tech: ["Java 11", "AI", "Data Analysis"],
    description: "경찰청이 후원하고 데이터 유니버스가 주관한 경진대회 프로젝트입니다. 사회적 문제를 해결하는 AI 서비스를 기획 및 개발했습니다.",
    github: "https://github.com/Sanghyuk/ai-competition",
    link: "#"
  },
  {
    id: "kids-log",
    title: "유아 관찰 일지 시스템",
    tech: ["Java 11", "Prompt Engineering"],
    description: "만 4~5세 유아들의 행동 발달 특성을 기반으로, 교육 현장의 관찰 일지 작성을 자동화하고 돕는 업무 보조 시스템입니다.",
    github: "https://github.com/Sanghyuk/kids-log",
    link: "#"
  }
];