// 기준 사전. vi/en은 이 타입을 그대로 따라야 함(빠진 키는 타입 에러).
const ko = {
  meta: { title: "GLOCARE 학습 대시보드", desc: "요양보호사 자격 학습 플랫폼 GLOCARE" },
  nav: {
    main: "주 메뉴", study: "학습 메뉴", homeAria: "GLOCARE 홈",
    learn: "학습하기", myHome: "내 학습 홈", courses: "교육과정", cbt: "CBT 문제풀이", lectures: "강의영상",
    wrongNotes: "오답노트", stats: "학습 통계", jobs: "취업지원",
  },
  header: { hi: "안녕하세요, 민지님!", bell: "알림 (새 알림 있음)", lang: "언어 선택" },
  side: {
    hello: "Xin chào,", name: "민지님!", sub: "오늘도 조금 더 가까워지고 있어요.",
    helpTitle: "궁금한 점이 있으신가요?", helpSub: "언제든지 도와드릴게요!", helpCta: "1:1 문의하기",
  },
  common: { back: "뒤로 가기", seeAll: "전체 보기 ›", today: "오늘", prevDate: "이전 날짜", nextDate: "다음 날짜", retryForm: "다시 작성하기" },
  home: {
    heroTitle1: "요양보호사의", heroTitle2: "새로운 시작, GLOCARE와 함께",
    heroSub: "Hôm nay học, ngày mai tốt đẹp hơn.", heroSubLang: "vi", heroCta: "오늘의 학습 시작하기",
    heroAlt: "밝게 웃으며 교재를 안고 있는 요양보호사 학습자",
    status: "나의 학습 현황", toExam: "요양보호사 자격시험까지", doingWell: "지금, 잘하고 있어요!",
    today: "오늘의 학습", inProgress: "진행 중", progress: "진도율", continue: "이어 학습하기",
    cbtSub: "오늘의 20문제", solveNow: "바로 풀기", resumeLecture: "강의 이어보기", resumeLectureSub: "요양보호 실무 3강", resume: "이어 보기",
    rec: "추천 학습 콘텐츠", recTabs: "콘텐츠 분류", empty: "준비 중인 콘텐츠예요.",
    dday: "시험 D-42", ddaySub: "지금처럼 꾸준히 해요!",
    goals: "이번 주 학습 목표", goalRate: "이번 주 달성률",
    goalItems: ["CBT 200문제 풀기", "강의 5강 수강하기", "오답노트 복습하기", "모의고사 1회 풀기"],
    jobs: "취업 지원", jobsSub: "더 나은 내일을 응원합니다.",
    jobLinks: [["이력서 작성 도구", "AI가 도와드려요"], ["채용 공고 보기", "맞춤 공고를 확인하세요"], ["취업 가이드", "면접 팁부터 실무 정보까지"]] as [string, string][],
    bottomAlt: "함께, 더 따뜻한 내일로 — 요양보호사가 어르신을 돌보는 일러스트",
  },
  stats: { days: "학습 일수", daysV: "32일", solved: "푼 문제", solvedV: "1,240개", accuracy: "정답률", time: "총 학습 시간", timeV: "24시간" },
  tabs: { all: "전체", cbt: "CBT 문제풀이", lecture: "강의영상", guide: "실무 가이드", job: "취업준비" },
  courses: {
    title: "교육과정", desc: "요양보호사 표준교재 순서대로 학습해요.",
    done: "완료", doing: "학습 중", todo: "시작 전", chapters: (n: number) => `${n}개 단원`,
    note: "교육과정은 표준교재 기준 예시입니다. 실제 과정 데이터는 API 연결 시 교체돼요.",
    chapterNo: (n: number) => `${n}단원`, placeholder: "[학습 콘텐츠: 본문·이미지·영상이 들어갈 영역]",
    prev: "← 이전 단원", next: "다음 단원", quiz: "단원 문제 풀기", list: "단원 목록", progress: "과정 진도율",
  },
  cbt: {
    title: "CBT 문제풀이", desc: "실제 시험과 같은 4지선다형 샘플 문제예요.",
    count: (i: number, n: number) => `문제 ${i} / ${n}`, correctCount: (n: number) => `정답 ${n}개`,
    progress: "문제 진행률", options: "보기", correct: "정답이에요!", wrong: "아쉬워요, 오답이에요.",
    next: "다음 문제", result: "결과 보기", resultLabel: "결과",
    summary: (n: number, s: number) => `${n}문제 중 ${s}문제 정답`, score: (p: number) => `${p}점`,
    pass: "합격선(60점)을 넘었어요. 이대로만 가요!", fail: "틀린 문제는 오답노트에 저장됐어요.",
    retry: "다시 풀기", toWrong: "오답노트 보기",
  },
  lectures: {
    title: "강의영상", desc: "현직 강사의 실무 중심 강의", about: "강의 소개",
    placeholder: "[강의 설명과 학습 자료 링크가 들어갈 영역]", next: "다음 강의",
    play: (t: string) => `${t} 재생`, pause: "일시정지",
  },
  wrong: { title: "오답노트", desc: (n: number) => `틀린 문제 ${n}개를 다시 확인해요.`, retry: "다시 풀기", mine: "내 답", answer: "정답" },
  statsPage: {
    title: "학습 통계", desc: "이번 주 학습 흐름을 한눈에 봐요.", weekly: "이번 주 학습 시간",
    total: (n: number) => `총 ${n}분`, minutes: (n: number) => `${n}분`, bySubject: "과목별 진도",
    days: ["월", "화", "수", "목", "금", "토", "일"],
  },
  jobs: {
    title: "취업 지원", desc: "자격 취득 이후까지 함께해요.", menu: "취업 지원 메뉴",
    resumeTab: "이력서 작성", postingsTab: "채용 공고", guideTab: "취업 가이드",
    resume: "이력서 작성 도구", resumeDesc: "기본 정보를 입력하면 이력서 초안을 만들어 드려요.",
    name: "이름", phone: "연락처", date: "자격증 취득 예정일", type: "희망 근무 형태",
    types: ["시설 정규직", "방문요양", "병원"], career: "경력·실습 내용", careerPh: "예: OO요양원 실습 80시간",
    submit: "이력서 초안 만들기", success: "이력서 초안이 만들어졌어요. (프로토타입: 실제 생성 기능은 연결 전)",
    postings: "채용 공고", guide: "취업 가이드",
  },
  help: {
    title: "1:1 문의하기", desc: "한국어·베트남어로 문의할 수 있어요. 평일 기준 하루 안에 답변드려요.",
    type: "문의 유형", types: ["학습 내용", "시험 일정", "결제·계정", "취업 지원", "기타"],
    lang: "답변 언어", body: "내용", bodyPh: "궁금한 점을 자유롭게 적어 주세요.",
    submit: "문의 보내기", success: "문의가 접수됐어요. 답변은 알림으로 알려 드릴게요.",
  },
  exam: {
    title: "요양보호사 자격시험", desc: "시험까지 남은 기간과 준비 현황", until: "시험까지",
    info: "[시험일 · 시험장 정보]", mock: "모의고사 풀기", readiness: "합격 준비도",
    readinessMsg: "지금, 잘하고 있어요! 정답률을 80%까지 올려 볼까요?", guide: "시험 안내",
    bullets: ["필기·실기 각 35문항, 45문항으로 구성 (총 80문항)", "필기·실기 모두 60점 이상이면 합격", "컴퓨터로 응시하는 CBT 방식"],
    note: "세부 일정은 한국보건의료인국가시험원 공지를 확인하세요.",
  },
  notifications: { title: "알림", unread: (n: number) => `읽지 않은 알림 ${n}개` },
  profile: {
    title: "내 정보", name: "민지", sub: "요양보호사 자격 준비 중 · 학습 32일째",
    links: [["학습 통계", "학습 시간과 정답률"], ["오답노트", "틀린 문제 다시 보기"], ["알림", "새 소식 확인"], ["1:1 문의", "궁금한 점 물어보기"]] as [string, string][],
  },
};

export default ko;
export type Dict = typeof ko;
