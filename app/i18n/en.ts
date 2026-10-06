import type { Dict } from "./ko";

const en: Dict = {
  meta: { title: "GLOCARE Learning Dashboard", desc: "GLOCARE — caregiver certification learning platform" },
  nav: {
    main: "Main menu", study: "Study menu", homeAria: "GLOCARE home",
    learn: "Learn", myHome: "My home", courses: "Courses", cbt: "CBT practice", lectures: "Lectures",
    wrongNotes: "Wrong answers", stats: "Statistics", jobs: "Jobs",
  },
  header: { hi: "Hi, Minji!", bell: "Notifications (new)", lang: "Choose language" },
  side: {
    hello: "Hello,", name: "Minji!", sub: "You're getting a little closer every day.",
    helpTitle: "Have a question?", helpSub: "We're always here to help!", helpCta: "1:1 inquiry",
  },
  common: { back: "Back", seeAll: "See all ›", today: "Today", prevDate: "Previous day", nextDate: "Next day", retryForm: "Write again" },
  home: {
    heroTitle1: "A new start as a caregiver,", heroTitle2: "together with GLOCARE",
    heroSub: "Learn today, for a better tomorrow.", heroSubLang: "en", heroCta: "Start today's lesson",
    heroAlt: "A smiling caregiver trainee holding textbooks",
    status: "My progress", toExam: "Toward the caregiver exam", doingWell: "You're doing great!",
    today: "Today's study", inProgress: "In progress", progress: "Progress", continue: "Continue",
    cbtSub: "Today's 20 questions", solveNow: "Start now", resumeLecture: "Resume lecture", resumeLectureSub: "Care practice, lesson 3", resume: "Resume",
    rec: "Recommended for you", recTabs: "Content categories", empty: "Coming soon.",
    dday: "Exam D-42", ddaySub: "Keep it up!",
    goals: "This week's goals", goalRate: "Weekly completion",
    goalItems: ["Solve 200 CBT questions", "Watch 5 lectures", "Review wrong answers", "Take 1 mock exam"],
    jobs: "Job support", jobsSub: "Cheering for a better tomorrow.",
    jobLinks: [["Résumé builder", "AI helps you write"], ["Job postings", "See postings for you"], ["Career guide", "From interview tips to on-the-job info"]],
    bottomAlt: "Together, toward a warmer tomorrow — a caregiver looking after an older adult",
  },
  stats: { days: "Study days", daysV: "32 days", solved: "Solved", solvedV: "1,240", accuracy: "Accuracy", time: "Total time", timeV: "24 hrs" },
  tabs: { all: "All", cbt: "CBT practice", lecture: "Lectures", guide: "Practice guides", job: "Job prep" },
  courses: {
    title: "Courses", desc: "Study in the order of the standard caregiver textbook.",
    done: "Done", doing: "In progress", todo: "Not started", chapters: (n) => `${n} chapters`,
    note: "These courses are samples based on the standard textbook. Real data will replace them once the API is connected.",
    chapterNo: (n) => `Chapter ${n}`, placeholder: "[Lesson content area: text, images, video]",
    prev: "← Previous", next: "Next chapter", quiz: "Chapter quiz", list: "Chapters", progress: "Course progress",
  },
  cbt: {
    title: "CBT practice", desc: "Sample multiple-choice questions, just like the real exam.",
    count: (i, n) => `Question ${i} / ${n}`, correctCount: (n) => `${n} correct`,
    progress: "Quiz progress", options: "Choices", correct: "Correct!", wrong: "Not quite.",
    next: "Next question", result: "See results", resultLabel: "Results",
    summary: (n, s) => `${s} of ${n} correct`, score: (p) => `${p} pts`,
    pass: "You're above the 60-point pass mark. Keep going!", fail: "Missed questions were saved to Wrong answers.",
    retry: "Try again", toWrong: "Wrong answers",
  },
  lectures: {
    title: "Lectures", desc: "Practical lectures from working instructors", about: "About this lecture",
    placeholder: "[Lecture description and study materials]", next: "Up next",
    play: (t) => `Play ${t}`, pause: "Pause",
  },
  wrong: { title: "Wrong answers", desc: (n) => `Review the ${n} questions you missed.`, retry: "Try again", mine: "Your answer", answer: "Answer" },
  statsPage: {
    title: "Statistics", desc: "Your week of study at a glance.", weekly: "Study time this week",
    total: (n) => `${n} min total`, minutes: (n) => `${n} min`, bySubject: "Progress by subject",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  jobs: {
    title: "Job support", desc: "We're with you after certification, too.", menu: "Job support menu",
    resumeTab: "Résumé", postingsTab: "Postings", guideTab: "Guide",
    resume: "Résumé builder", resumeDesc: "Enter your basics and we'll draft a résumé.",
    name: "Name", phone: "Phone", date: "Expected certification date", type: "Preferred work type",
    types: ["Full-time at a facility", "Home care", "Hospital"], career: "Experience & practicum", careerPh: "e.g. 80-hour practicum at OO Nursing Home",
    submit: "Draft my résumé", success: "Your résumé draft is ready. (Prototype: generation isn't connected yet)",
    postings: "Job postings", guide: "Career guide",
  },
  help: {
    title: "1:1 inquiry", desc: "Ask in Korean or Vietnamese. We reply within one business day.",
    type: "Topic", types: ["Course content", "Exam schedule", "Payment & account", "Job support", "Other"],
    lang: "Reply language", body: "Message", bodyPh: "Tell us what you'd like to know.",
    submit: "Send", success: "We've received your inquiry. We'll notify you when we reply.",
  },
  exam: {
    title: "Caregiver certification exam", desc: "Time left and how ready you are", until: "Until the exam",
    info: "[Exam date · venue]", mock: "Take a mock exam", readiness: "Readiness",
    readinessMsg: "You're doing great! Shall we push accuracy to 80%?", guide: "About the exam",
    bullets: ["35 written + 45 practical questions (80 total)", "Pass with 60+ points in both sections", "Computer-based test (CBT)"],
    note: "Check the Korea Health Personnel Licensing Examination Institute for the detailed schedule.",
  },
  notifications: { title: "Notifications", unread: (n) => `${n} unread` },
  profile: {
    title: "My profile", name: "Minji", sub: "Preparing for caregiver certification · Day 32",
    links: [["Statistics", "Study time and accuracy"], ["Wrong answers", "Review missed questions"], ["Notifications", "See what's new"], ["1:1 inquiry", "Ask a question"]],
  },
};

export default en;
