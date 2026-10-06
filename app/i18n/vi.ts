import type { Dict } from "./ko";

const vi: Dict = {
  meta: { title: "GLOCARE – Bảng học tập", desc: "Nền tảng ôn thi chứng chỉ chăm sóc viên GLOCARE" },
  nav: {
    main: "Menu chính", study: "Menu học tập", homeAria: "Trang chủ GLOCARE",
    learn: "Học tập", myHome: "Trang học của tôi", courses: "Chương trình học", cbt: "Luyện đề CBT", lectures: "Video bài giảng",
    wrongNotes: "Sổ câu sai", stats: "Thống kê học tập", jobs: "Hỗ trợ việc làm",
  },
  header: { hi: "Xin chào, Minji!", bell: "Thông báo (có thông báo mới)", lang: "Chọn ngôn ngữ" },
  side: {
    hello: "Xin chào,", name: "Minji!", sub: "Hôm nay bạn lại tiến gần hơn một chút.",
    helpTitle: "Bạn có thắc mắc gì không?", helpSub: "Chúng tôi luôn sẵn sàng giúp bạn!", helpCta: "Hỏi đáp 1:1",
  },
  common: { back: "Quay lại", seeAll: "Xem tất cả ›", today: "Hôm nay", prevDate: "Ngày trước", nextDate: "Ngày sau", retryForm: "Viết lại" },
  home: {
    heroTitle1: "Khởi đầu mới của nghề chăm sóc,", heroTitle2: "cùng GLOCARE",
    heroSub: "Hôm nay học, ngày mai tốt đẹp hơn.", heroSubLang: "vi", heroCta: "Bắt đầu học hôm nay",
    heroAlt: "Học viên chăm sóc mỉm cười, ôm giáo trình",
    status: "Tình hình học tập", toExam: "Đến kỳ thi chứng chỉ chăm sóc viên", doingWell: "Bạn đang làm rất tốt!",
    today: "Bài học hôm nay", inProgress: "Đang học", progress: "Tiến độ", continue: "Học tiếp",
    cbtSub: "20 câu hôm nay", solveNow: "Làm ngay", resumeLecture: "Xem tiếp bài giảng", resumeLectureSub: "Thực hành chăm sóc – Bài 3", resume: "Xem tiếp",
    rec: "Nội dung đề xuất", recTabs: "Phân loại nội dung", empty: "Nội dung đang được chuẩn bị.",
    dday: "Thi D-42", ddaySub: "Hãy tiếp tục chăm chỉ nhé!",
    goals: "Mục tiêu tuần này", goalRate: "Tỷ lệ hoàn thành",
    goalItems: ["Làm 200 câu CBT", "Xem 5 bài giảng", "Ôn lại sổ câu sai", "Làm 1 đề thi thử"],
    jobs: "Hỗ trợ việc làm", jobsSub: "Đồng hành vì ngày mai tốt đẹp hơn.",
    jobLinks: [["Công cụ viết CV", "AI hỗ trợ bạn"], ["Xem tin tuyển dụng", "Tin phù hợp với bạn"], ["Cẩm nang việc làm", "Từ mẹo phỏng vấn đến thực tế công việc"]],
    bottomAlt: "Cùng nhau, hướng tới ngày mai ấm áp hơn — minh họa chăm sóc viên chăm sóc người cao tuổi",
  },
  stats: { days: "Số ngày học", daysV: "32 ngày", solved: "Câu đã làm", solvedV: "1.240 câu", accuracy: "Tỷ lệ đúng", time: "Tổng thời gian", timeV: "24 giờ" },
  tabs: { all: "Tất cả", cbt: "Luyện đề CBT", lecture: "Video bài giảng", guide: "Hướng dẫn thực hành", job: "Chuẩn bị việc làm" },
  courses: {
    title: "Chương trình học", desc: "Học theo thứ tự giáo trình chuẩn chăm sóc viên.",
    done: "Hoàn thành", doing: "Đang học", todo: "Chưa bắt đầu", chapters: (n) => `${n} chương`,
    note: "Đây là chương trình mẫu theo giáo trình chuẩn. Dữ liệu thật sẽ được thay khi kết nối API.",
    chapterNo: (n) => `Chương ${n}`, placeholder: "[Khu vực nội dung bài học: văn bản, hình ảnh, video]",
    prev: "← Chương trước", next: "Chương sau", quiz: "Làm bài tập chương", list: "Danh sách chương", progress: "Tiến độ khóa học",
  },
  cbt: {
    title: "Luyện đề CBT", desc: "Câu hỏi mẫu 4 lựa chọn giống đề thi thật.",
    count: (i, n) => `Câu ${i} / ${n}`, correctCount: (n) => `Đúng ${n} câu`,
    progress: "Tiến độ làm bài", options: "Lựa chọn", correct: "Chính xác!", wrong: "Tiếc quá, chưa đúng.",
    next: "Câu tiếp theo", result: "Xem kết quả", resultLabel: "Kết quả",
    summary: (n, s) => `Đúng ${s} / ${n} câu`, score: (p) => `${p} điểm`,
    pass: "Bạn đã vượt mức đạt (60 điểm). Cứ thế phát huy nhé!", fail: "Các câu sai đã được lưu vào sổ câu sai.",
    retry: "Làm lại", toWrong: "Xem sổ câu sai",
  },
  lectures: {
    title: "Video bài giảng", desc: "Bài giảng thực tế từ giảng viên đang hành nghề", about: "Giới thiệu bài giảng",
    placeholder: "[Khu vực mô tả bài giảng và tài liệu học tập]", next: "Bài giảng tiếp theo",
    play: (t) => `Phát ${t}`, pause: "Tạm dừng",
  },
  wrong: { title: "Sổ câu sai", desc: (n) => `Xem lại ${n} câu bạn đã làm sai.`, retry: "Làm lại", mine: "Bạn chọn", answer: "Đáp án" },
  statsPage: {
    title: "Thống kê học tập", desc: "Xem nhanh việc học trong tuần này.", weekly: "Thời gian học tuần này",
    total: (n) => `Tổng ${n} phút`, minutes: (n) => `${n} phút`, bySubject: "Tiến độ theo môn",
    days: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
  },
  jobs: {
    title: "Hỗ trợ việc làm", desc: "Đồng hành cùng bạn cả sau khi có chứng chỉ.", menu: "Menu hỗ trợ việc làm",
    resumeTab: "Viết CV", postingsTab: "Tin tuyển dụng", guideTab: "Cẩm nang",
    resume: "Công cụ viết CV", resumeDesc: "Nhập thông tin cơ bản để tạo bản nháp CV.",
    name: "Họ tên", phone: "Số điện thoại", date: "Ngày dự kiến có chứng chỉ", type: "Hình thức làm việc mong muốn",
    types: ["Toàn thời gian tại cơ sở", "Chăm sóc tại nhà", "Bệnh viện"], career: "Kinh nghiệm · thực tập", careerPh: "VD: Thực tập 80 giờ tại viện dưỡng lão OO",
    submit: "Tạo bản nháp CV", success: "Đã tạo bản nháp CV. (Bản mẫu: chức năng thật chưa được kết nối)",
    postings: "Tin tuyển dụng", guide: "Cẩm nang việc làm",
  },
  help: {
    title: "Hỏi đáp 1:1", desc: "Bạn có thể hỏi bằng tiếng Hàn hoặc tiếng Việt. Chúng tôi trả lời trong 1 ngày làm việc.",
    type: "Loại câu hỏi", types: ["Nội dung học", "Lịch thi", "Thanh toán · tài khoản", "Hỗ trợ việc làm", "Khác"],
    lang: "Ngôn ngữ trả lời", body: "Nội dung", bodyPh: "Hãy viết thắc mắc của bạn.",
    submit: "Gửi câu hỏi", success: "Đã nhận câu hỏi. Chúng tôi sẽ báo khi có câu trả lời.",
  },
  exam: {
    title: "Kỳ thi chứng chỉ chăm sóc viên", desc: "Thời gian còn lại và mức độ chuẩn bị", until: "Còn đến kỳ thi",
    info: "[Ngày thi · địa điểm thi]", mock: "Làm đề thi thử", readiness: "Mức độ sẵn sàng",
    readinessMsg: "Bạn đang làm rất tốt! Cùng nâng tỷ lệ đúng lên 80% nhé?", guide: "Thông tin kỳ thi",
    bullets: ["Gồm 35 câu lý thuyết và 45 câu thực hành (tổng 80 câu)", "Đạt khi cả lý thuyết và thực hành đều từ 60 điểm", "Thi trên máy tính (CBT)"],
    note: "Xem lịch chi tiết trong thông báo của Viện Thi Quốc gia về Nhân lực Y tế Hàn Quốc.",
  },
  notifications: { title: "Thông báo", unread: (n) => `${n} thông báo chưa đọc` },
  profile: {
    title: "Thông tin của tôi", name: "Minji", sub: "Đang ôn thi chứng chỉ chăm sóc viên · Ngày học thứ 32",
    links: [["Thống kê học tập", "Thời gian học và tỷ lệ đúng"], ["Sổ câu sai", "Xem lại câu sai"], ["Thông báo", "Xem tin mới"], ["Hỏi đáp 1:1", "Đặt câu hỏi"]],
  },
};

export default vi;
