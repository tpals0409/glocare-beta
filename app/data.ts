// 프로토타입용 샘플 데이터. 텍스트는 { ko, vi, en }. API 붙이면 이 파일을 fetch로 교체.
import type { L, LList } from "./i18n/config";

export const COURSES: { id: string; progress: number; title: L; desc: L; chapters: LList }[] = [
  {
    id: "1", progress: 60,
    title: { ko: "노인의 신체 변화와 간호", vi: "Thay đổi cơ thể người cao tuổi và chăm sóc", en: "Physical changes in older adults & care" },
    desc: { ko: "노화에 따른 신체 변화와 간호 원칙", vi: "Thay đổi cơ thể do lão hóa và nguyên tắc chăm sóc", en: "Age-related changes and care principles" },
    chapters: {
      ko: ["노화에 따른 신체 변화", "소화기계 변화와 간호", "호흡기계 변화와 간호", "심혈관계 변화와 간호", "근골격계 변화와 간호"],
      vi: ["Thay đổi cơ thể do lão hóa", "Thay đổi hệ tiêu hóa và chăm sóc", "Thay đổi hệ hô hấp và chăm sóc", "Thay đổi hệ tim mạch và chăm sóc", "Thay đổi hệ cơ xương và chăm sóc"],
      en: ["Physical changes with aging", "Digestive changes & care", "Respiratory changes & care", "Cardiovascular changes & care", "Musculoskeletal changes & care"],
    },
  },
  {
    id: "2", progress: 100,
    title: { ko: "요양보호 개론", vi: "Tổng quan chăm sóc", en: "Introduction to caregiving" },
    desc: { ko: "요양보호사의 역할과 직업윤리", vi: "Vai trò và đạo đức nghề nghiệp của chăm sóc viên", en: "The caregiver's role and professional ethics" },
    chapters: {
      ko: ["노인장기요양보험제도", "요양보호사의 역할", "직업윤리와 인권"],
      vi: ["Chế độ bảo hiểm chăm sóc dài hạn", "Vai trò của chăm sóc viên", "Đạo đức nghề nghiệp và nhân quyền"],
      en: ["Long-term care insurance", "The caregiver's role", "Ethics and human rights"],
    },
  },
  {
    id: "3", progress: 35,
    title: { ko: "신체활동 지원", vi: "Hỗ trợ vận động", en: "Physical activity support" },
    desc: { ko: "이동·체위 변경·식사 돕기", vi: "Di chuyển, đổi tư thế, hỗ trợ ăn uống", en: "Moving, repositioning, assisting meals" },
    chapters: {
      ko: ["체위 변경", "이동 돕기", "휠체어 이동", "식사 돕기"],
      vi: ["Thay đổi tư thế", "Hỗ trợ di chuyển", "Di chuyển bằng xe lăn", "Hỗ trợ ăn uống"],
      en: ["Repositioning", "Assisting movement", "Wheelchair transfers", "Assisting meals"],
    },
  },
  {
    id: "4", progress: 10,
    title: { ko: "일상생활 지원", vi: "Hỗ trợ sinh hoạt hằng ngày", en: "Daily living support" },
    desc: { ko: "식사·청결·가사 지원 실무", vi: "Thực hành hỗ trợ ăn uống, vệ sinh, việc nhà", en: "Meals, hygiene and housework in practice" },
    chapters: {
      ko: ["식사 준비", "개인 위생", "세탁과 정리"],
      vi: ["Chuẩn bị bữa ăn", "Vệ sinh cá nhân", "Giặt giũ và dọn dẹp"],
      en: ["Preparing meals", "Personal hygiene", "Laundry and tidying"],
    },
  },
  {
    id: "5", progress: 0,
    title: { ko: "의사소통과 여가 지원", vi: "Giao tiếp và hỗ trợ giải trí", en: "Communication & leisure support" },
    desc: { ko: "대상자와의 관계 형성", vi: "Xây dựng mối quan hệ với người được chăm sóc", en: "Building rapport with care recipients" },
    chapters: {
      ko: ["의사소통 기술", "여가 활동 지원"],
      vi: ["Kỹ năng giao tiếp", "Hỗ trợ hoạt động giải trí"],
      en: ["Communication skills", "Supporting leisure activities"],
    },
  },
  {
    id: "6", progress: 0,
    title: { ko: "응급상황 대처", vi: "Xử lý tình huống khẩn cấp", en: "Emergency response" },
    desc: { ko: "응급처치와 감염 예방", vi: "Sơ cứu và phòng nhiễm khuẩn", en: "First aid and infection prevention" },
    chapters: {
      ko: ["심폐소생술", "감염 예방", "낙상 대처"],
      vi: ["Hồi sức tim phổi (CPR)", "Phòng nhiễm khuẩn", "Xử lý té ngã"],
      en: ["CPR", "Infection prevention", "Responding to falls"],
    },
  },
];

export const QUESTIONS: { q: L; options: LList; answer: number; explain: L }[] = [
  {
    answer: 1,
    q: { ko: "노인장기요양보험제도의 보험자는?", vi: "Cơ quan bảo hiểm của chế độ bảo hiểm chăm sóc dài hạn cho người cao tuổi là?", en: "Who is the insurer of Korea's Long-Term Care Insurance for older adults?" },
    options: {
      ko: ["보건복지부", "국민건강보험공단", "지방자치단체", "근로복지공단"],
      vi: ["Bộ Y tế và Phúc lợi", "Tổng công ty Bảo hiểm Y tế Quốc gia", "Chính quyền địa phương", "Tổng công ty Phúc lợi Người lao động"],
      en: ["Ministry of Health and Welfare", "National Health Insurance Service", "Local governments", "Korea Workers' Compensation & Welfare Service"],
    },
    explain: {
      ko: "노인장기요양보험의 보험자는 국민건강보험공단이며, 등급 판정과 급여 관리를 맡습니다.",
      vi: "Cơ quan bảo hiểm là Tổng công ty Bảo hiểm Y tế Quốc gia, phụ trách đánh giá cấp độ và quản lý chi trả.",
      en: "The insurer is the National Health Insurance Service, which handles grade assessments and benefit management.",
    },
  },
  {
    answer: 1,
    q: { ko: "욕창 예방을 위한 체위 변경 간격으로 가장 적절한 것은?", vi: "Khoảng thời gian thay đổi tư thế phù hợp nhất để phòng loét do tì đè là?", en: "What is the best repositioning interval to prevent pressure ulcers?" },
    options: {
      ko: ["30분마다", "2시간마다", "6시간마다", "하루 1회"],
      vi: ["Mỗi 30 phút", "Mỗi 2 giờ", "Mỗi 6 giờ", "Mỗi ngày 1 lần"],
      en: ["Every 30 minutes", "Every 2 hours", "Every 6 hours", "Once a day"],
    },
    explain: {
      ko: "같은 부위에 압력이 계속 가지 않도록 최소 2시간마다 체위를 바꿔 줍니다.",
      vi: "Thay đổi tư thế ít nhất mỗi 2 giờ để áp lực không dồn liên tục vào một vùng.",
      en: "Reposition at least every 2 hours so pressure doesn't stay on one area.",
    },
  },
  {
    answer: 1,
    q: { ko: "편마비 대상자의 옷을 입힐 때 올바른 순서는?", vi: "Thứ tự đúng khi mặc áo cho người bị liệt nửa người là?", en: "What is the correct order when dressing a person with hemiplegia?" },
    options: {
      ko: ["건강한 쪽부터 입힌다", "마비된 쪽부터 입힌다", "순서는 상관없다", "양쪽을 동시에 입힌다"],
      vi: ["Mặc bên khỏe trước", "Mặc bên bị liệt trước", "Thứ tự không quan trọng", "Mặc cả hai bên cùng lúc"],
      en: ["Unaffected side first", "Affected side first", "The order doesn't matter", "Both sides at once"],
    },
    explain: {
      ko: "입힐 때는 마비된 쪽부터, 벗길 때는 건강한 쪽부터 합니다.",
      vi: "Khi mặc: bên bị liệt trước; khi cởi: bên khỏe trước.",
      en: "Dress the affected side first; undress the unaffected side first.",
    },
  },
  {
    answer: 1,
    q: { ko: "휠체어로 경사로를 내려갈 때 올바른 방법은?", vi: "Cách đúng khi đẩy xe lăn xuống dốc là?", en: "What is the correct way to take a wheelchair down a ramp?" },
    options: {
      ko: ["앞으로 빠르게 내려간다", "휠체어를 뒤로 하여 천천히 내려간다", "대상자를 내리게 한다", "옆으로 비스듬히 내려간다"],
      vi: ["Đi xuống nhanh theo chiều tiến", "Quay ngược xe lăn và đi xuống từ từ", "Cho người được chăm sóc xuống xe", "Đi chéo xuống dốc"],
      en: ["Go forward quickly", "Turn it backward and descend slowly", "Have the person get out", "Go down diagonally"],
    },
    explain: {
      ko: "요양보호사가 뒤에서 휠체어를 뒤로 향하게 해 천천히 내려가야 대상자가 앞으로 쏠리지 않습니다.",
      vi: "Người chăm sóc đi phía sau, quay ngược xe lăn và xuống từ từ để người được chăm sóc không bị chúi về phía trước.",
      en: "Turn the wheelchair backward with you behind it and descend slowly so the person doesn't pitch forward.",
    },
  },
  {
    answer: 2,
    q: { ko: "흐르는 물에 비누로 손을 씻을 때 권장 시간은?", vi: "Thời gian rửa tay với xà phòng dưới vòi nước được khuyến nghị là?", en: "How long should you wash your hands with soap under running water?" },
    options: {
      ko: ["5초 이상", "10초 이상", "30초 이상", "3분 이상"],
      vi: ["Từ 5 giây", "Từ 10 giây", "Từ 30 giây", "Từ 3 phút"],
      en: ["5+ seconds", "10+ seconds", "30+ seconds", "3+ minutes"],
    },
    explain: {
      ko: "감염 예방을 위해 흐르는 물에 비누로 30초 이상 꼼꼼히 씻습니다.",
      vi: "Để phòng nhiễm khuẩn, rửa kỹ với xà phòng dưới vòi nước ít nhất 30 giây.",
      en: "To prevent infection, wash thoroughly with soap under running water for at least 30 seconds.",
    },
  },
  {
    answer: 1,
    q: { ko: "식사 중 사레를 예방하는 자세로 옳은 것은?", vi: "Tư thế đúng để phòng sặc khi ăn là?", en: "Which posture helps prevent choking while eating?" },
    options: {
      ko: ["누운 채로 고개를 젖힌다", "앉은 자세에서 턱을 약간 당긴다", "옆으로 누워 먹는다", "고개를 뒤로 젖히고 삼킨다"],
      vi: ["Nằm và ngửa đầu ra sau", "Ngồi và hơi cúi cằm xuống", "Nằm nghiêng khi ăn", "Ngửa đầu ra sau khi nuốt"],
      en: ["Lying down, head tilted back", "Sitting, chin slightly tucked", "Eating while lying on one side", "Tilting the head back to swallow"],
    },
    explain: {
      ko: "앉은 자세에서 턱을 약간 당기면 기도가 좁아져 음식이 기도로 넘어가는 것을 줄일 수 있습니다.",
      vi: "Ngồi và hơi cúi cằm giúp hạn chế thức ăn đi vào đường thở.",
      en: "Sitting with the chin slightly tucked helps keep food out of the airway.",
    },
  },
];

export type LectureCat = "cbt" | "lecture" | "guide" | "job";

export const LECTURES: { id: string; img: string; duration: string; cat: LectureCat; title: L; meta: L }[] = [
  { id: "1", img: "/img/t1.png", duration: "12:34", cat: "lecture",
    title: { ko: "요양보호사의 역할과 윤리", vi: "Vai trò và đạo đức của chăm sóc viên", en: "The caregiver's role and ethics" },
    meta: { ko: "요양보호 개론 | 기초", vi: "Tổng quan chăm sóc | Cơ bản", en: "Intro to caregiving | Basics" } },
  { id: "2", img: "/img/t2.png", duration: "18:20", cat: "guide",
    title: { ko: "이동 보조 및 체위 변경", vi: "Hỗ trợ di chuyển và đổi tư thế", en: "Mobility assistance & repositioning" },
    meta: { ko: "신체활동 지원 | 실무", vi: "Hỗ trợ vận động | Thực hành", en: "Physical support | Practice" } },
  { id: "3", img: "/img/t3.png", duration: "20:00", cat: "cbt",
    title: { ko: "CBT 실전 모의고사 1회 해설", vi: "Giải đề thi thử CBT số 1", en: "CBT mock exam 1 walkthrough" },
    meta: { ko: "실전 문제풀이 | CBT", vi: "Luyện đề | CBT", en: "Exam practice | CBT" } },
  { id: "4", img: "/img/t4.png", duration: "15:12", cat: "guide",
    title: { ko: "식사 지원 실무", vi: "Thực hành hỗ trợ ăn uống", en: "Meal assistance in practice" },
    meta: { ko: "일상생활 지원 | 실무", vi: "Hỗ trợ sinh hoạt | Thực hành", en: "Daily living | Practice" } },
  { id: "5", img: "/img/t2.png", duration: "09:48", cat: "job",
    title: { ko: "면접에서 자주 묻는 질문", vi: "Câu hỏi phỏng vấn thường gặp", en: "Common interview questions" },
    meta: { ko: "취업 준비 | 면접", vi: "Chuẩn bị việc làm | Phỏng vấn", en: "Job prep | Interview" } },
];

/** 오답: 문제 번호 + 고른 보기 + 날짜 */
export const WRONG_NOTES = [
  { qi: 2, picked: 0, date: "2026-10-05" },
  { qi: 3, picked: 0, date: "2026-10-04" },
  { qi: 0, picked: 0, date: "2026-10-02" },
];

export const POSTINGS: { org: L; place: L; type: L; pay: L }[] = [
  { org: { ko: "[OO요양원]", vi: "[Viện dưỡng lão OO]", en: "[OO Nursing Home]" },
    place: { ko: "서울 마포구", vi: "Mapo-gu, Seoul", en: "Mapo-gu, Seoul" },
    type: { ko: "정규직 · 주 5일", vi: "Toàn thời gian · 5 ngày/tuần", en: "Full-time · 5 days/week" },
    pay: { ko: "[급여 협의]", vi: "[Lương thỏa thuận]", en: "[Salary negotiable]" } },
  { org: { ko: "[OO재가복지센터]", vi: "[Trung tâm chăm sóc tại nhà OO]", en: "[OO Home Care Center]" },
    place: { ko: "경기 수원시", vi: "Suwon, Gyeonggi", en: "Suwon, Gyeonggi" },
    type: { ko: "방문요양 · 시간제", vi: "Chăm sóc tại nhà · Bán thời gian", en: "Home care · Part-time" },
    pay: { ko: "[시급 협의]", vi: "[Lương giờ thỏa thuận]", en: "[Hourly rate negotiable]" } },
  { org: { ko: "[OO노인전문병원]", vi: "[Bệnh viện lão khoa OO]", en: "[OO Geriatric Hospital]" },
    place: { ko: "인천 남동구", vi: "Namdong-gu, Incheon", en: "Namdong-gu, Incheon" },
    type: { ko: "정규직 · 3교대", vi: "Toàn thời gian · 3 ca", en: "Full-time · 3 shifts" },
    pay: { ko: "[급여 협의]", vi: "[Lương thỏa thuận]", en: "[Salary negotiable]" } },
];

export const GUIDES: { title: L; desc: L }[] = [
  { title: { ko: "요양보호사 이력서, 이렇게 쓰세요", vi: "Cách viết CV chăm sóc viên", en: "How to write a caregiver résumé" },
    desc: { ko: "자격증·실습 경력을 잘 보이게 정리하는 법", vi: "Trình bày chứng chỉ và kinh nghiệm thực tập thật nổi bật", en: "Make your certificate and practicum stand out" } },
  { title: { ko: "면접 단골 질문 10가지", vi: "10 câu hỏi phỏng vấn thường gặp", en: "10 common interview questions" },
    desc: { ko: "한국어로 자신 있게 답하는 연습", vi: "Luyện trả lời tự tin bằng tiếng Hàn", en: "Practice answering confidently in Korean" } },
  { title: { ko: "근로계약서 꼭 확인할 것", vi: "Những điều cần kiểm tra trong hợp đồng lao động", en: "What to check in your employment contract" },
    desc: { ko: "근무 시간, 휴게, 4대 보험 체크리스트", vi: "Danh sách kiểm tra: giờ làm, nghỉ giải lao, 4 loại bảo hiểm", en: "Checklist: hours, breaks, the four social insurances" } },
];

export const NOTIFICATIONS: { title: L; time: L; unread: boolean }[] = [
  { unread: true,
    title: { ko: "이번 주 학습 목표 50% 달성!", vi: "Đã đạt 50% mục tiêu tuần này!", en: "You've reached 50% of this week's goal!" },
    time: { ko: "방금 전", vi: "Vừa xong", en: "Just now" } },
  { unread: true,
    title: { ko: "새 강의 '요양보호사의 역할과 윤리'가 올라왔어요", vi: "Bài giảng mới 'Vai trò và đạo đức của chăm sóc viên' đã được đăng", en: "New lecture: 'The caregiver's role and ethics'" },
    time: { ko: "2시간 전", vi: "2 giờ trước", en: "2 hours ago" } },
  { unread: false,
    title: { ko: "1:1 문의에 답변이 도착했어요", vi: "Câu hỏi 1:1 của bạn đã có câu trả lời", en: "Your 1:1 inquiry has been answered" },
    time: { ko: "어제", vi: "Hôm qua", en: "Yesterday" } },
  { unread: false,
    title: { ko: "시험 D-42, 모의고사를 풀어 보세요", vi: "Còn 42 ngày đến kỳ thi, hãy làm đề thi thử nhé", en: "42 days to the exam — try a mock test" },
    time: { ko: "2일 전", vi: "2 ngày trước", en: "2 days ago" } },
];

/** 월~일 학습 분 */
export const WEEKLY_MINUTES = [40, 65, 30, 80, 55, 20, 45];
