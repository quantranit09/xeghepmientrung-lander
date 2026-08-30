export type CampaignPageId =
  | "xeRieng"
  | "xeGhep"
  | "serviceArea"
  | "pricing"
  | "fleet"
  | "contact";

export type CampaignFact = {
  label: string;
  value: string;
};

export type CampaignSection = {
  title: string;
  body: string;
};

export type CampaignPage = {
  id: CampaignPageId;
  navLabel: string;
  route: string;
  title: string;
  description: string;
  kicker: string;
  headline: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  answerTitle: string;
  answer: string;
  facts: CampaignFact[];
  detailsTitle: string;
  details: string[];
  planningTitle: string;
  planning: string[];
  sections: CampaignSection[];
  llmsDescription: string;
};

export const campaignPageIds = [
  "xeRieng",
  "xeGhep",
  "serviceArea",
  "pricing",
  "fleet",
  "contact",
] as const satisfies readonly CampaignPageId[];

export const campaignPages = {
  xeRieng: {
    id: "xeRieng",
    navLabel: "Xe riêng",
    route: "/xe-rieng-da-nang-quang-tri",
    title: "Xe riêng Đà Nẵng Quảng Trị | Bảo Trang",
    description:
      "Đặt xe riêng Đà Nẵng - Quảng Trị, đón trả tận nơi bằng xe 4, 5, 7 chỗ hoặc 16 chỗ khi cần. Gửi lịch trình để nhận báo giá.",
    kicker: "Xe riêng theo chuyến",
    headline: "Xe riêng Đà Nẵng ⇄ Quảng Trị",
    summary:
      "Phù hợp với khách cần đi riêng theo lịch trình đã chốt, chủ động giờ đón, điểm trả và loại xe. Bảo Trang nhận thông tin chuyến đi, tư vấn xe 4-16 chỗ và báo giá trước khi xác nhận.",
    heroImage: "/assets/bao-trang/hero-dragon-bridge-transfer.webp",
    heroAlt: "Xe riêng Đà Nẵng đi Quảng Trị đón trả tận nơi",
    answerTitle: "Xe riêng Đà Nẵng - Quảng Trị là dịch vụ gì?",
    answer:
      "Đây là dịch vụ xe riêng / xe hợp đồng theo chuyến cho khách cần đón tại sân bay, khách sạn, nhà riêng ở Đà Nẵng và trả tại Hải Lăng, TX Quảng Trị, Đông Hà, La Vang, Lao Bảo hoặc địa chỉ cụ thể. Khách gửi lịch trình, Bảo Trang tư vấn loại xe và báo giá trước khi xác nhận.",
    facts: [
      { label: "Dịch vụ", value: "Xe riêng / xe hợp đồng theo chuyến" },
      { label: "Tuyến chính", value: "Đà Nẵng ⇄ Quảng Trị" },
      { label: "Xe phục vụ", value: "Xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ, xe 16 chỗ" },
    ],
    detailsTitle: "Khi nào nên chọn xe riêng?",
    details: [
      "Bạn cần có mặt đúng giờ cho công tác, khám bệnh, sự kiện gia đình hoặc chuyến bay.",
      "Nhóm có trẻ em, người lớn tuổi, nhiều vali, hàng hóa hoặc cần dừng nghỉ trên đường.",
      "Điểm đón/trả nằm ngoài bến xe hoặc cần tài xế đón tận nơi tại sảnh sân bay, khách sạn, nhà riêng.",
      "Bạn muốn chốt trước chi phí theo chuyến thay vì phụ thuộc vào lịch xe tuyến cố định.",
    ],
    planningTitle: "Thông tin nên gửi để nhận giá nhanh",
    planning: [
      "Điểm đón cụ thể tại Đà Nẵng: sân bay, ga, khách sạn, nhà riêng hoặc vị trí Google Maps.",
      "Điểm trả tại Quảng Trị: Hải Lăng, Đông Hà, La Vang, Lao Bảo, Vĩnh Linh hoặc địa chỉ chi tiết.",
      "Ngày giờ đi, giờ cần có mặt, số khách, số vali và nhu cầu dừng nghỉ.",
      "Chiều đi một chiều, khứ hồi, cần xe chờ hay lịch trình nhiều điểm.",
    ],
    sections: [
      {
        title: "Chủ động giờ đi",
        body:
          "Khách tự chọn giờ đón theo chuyến bay, lịch họp, lịch khám bệnh hoặc kế hoạch gia đình. Tài xế đi theo lịch trình đã xác nhận trước.",
      },
      {
        title: "Đón trả tận nơi",
        body:
          "Có thể đón tại sân bay, ga, khách sạn, nhà riêng ở Đà Nẵng và trả tại địa chỉ cụ thể ở Quảng Trị hoặc các chặng lân cận.",
      },
      {
        title: "Báo giá rõ trước khi đi",
        body:
          "Bảo Trang xác nhận chi phí theo loại xe, điểm đón/trả, giờ đi và nhu cầu chờ hoặc ghé thêm điểm trước khi khách đặt xe.",
      },
    ],
    llmsDescription:
      "Xe riêng / xe hợp đồng Đà Nẵng - Quảng Trị, đón trả tận nơi theo lịch trình đã xác nhận.",
  },
  xeGhep: {
    id: "xeGhep",
    navLabel: "Xe ghép",
    route: "/xe-ghep-da-nang-quang-tri",
    title: "Xe ghép Đà Nẵng Quảng Trị | Kiểm tra chỗ nhanh",
    description:
      "Đặt xe ghép Đà Nẵng - Quảng Trị, kiểm tra chuyến phù hợp theo điểm đón/trả, giờ đi, số khách và hành lý. Gửi lịch trình để giữ chỗ.",
    kicker: "Xe ghép Đà Nẵng - Quảng Trị",
    headline: "Xe ghép Đà Nẵng ⇄ Quảng Trị",
    summary:
      "Gửi điểm đón/trả, ngày giờ đi, số khách và hành lý để Bảo Trang kiểm tra chuyến ghép phù hợp. Nếu lịch cần chủ động hơn, đội tư vấn sẽ báo thêm phương án xe riêng / bao chuyến.",
    heroImage: "/assets/bao-trang/journey-quang-tri.webp",
    heroAlt: "Xe ghép Đà Nẵng Quảng Trị cho khách đi cùng tuyến",
    answerTitle: "Xe ghép Đà Nẵng - Quảng Trị phù hợp với ai?",
    answer:
      "Xe ghép phù hợp với khách đi 1-2 người, hành lý gọn, muốn tối ưu chi phí và có thể linh hoạt theo chuyến phù hợp trong ngày. Bảo Trang kiểm tra lịch dựa trên điểm đón, điểm trả, giờ đi, số khách và hành lý; nếu khách cần đúng giờ hoặc đón trả riêng hơn, đội tư vấn sẽ báo thêm phương án xe riêng / bao chuyến.",
    facts: [
      { label: "Tuyến ghép", value: "Đà Nẵng ⇄ Quảng Trị" },
      { label: "Phù hợp", value: "1-2 khách, hành lý gọn" },
      { label: "Giữ chỗ", value: "Gửi lịch trình để kiểm tra chuyến" },
    ],
    detailsTitle: "Thông tin cần chốt trước khi đi xe ghép",
    details: [
      "Điểm đón tại Đà Nẵng và điểm trả tại Quảng Trị càng cụ thể càng dễ kiểm tra chuyến phù hợp.",
      "Ngày giờ đi nên gửi sớm, nhất là khi cần đón sân bay hoặc đi vào khung giờ cao điểm.",
      "Số khách và số vali giúp Bảo Trang kiểm tra xe còn chỗ và khoang hành lý có phù hợp không.",
      "Giá, điểm hẹn, giờ đón và điều kiện đi kèm cần được xác nhận lại trước khi chốt chuyến.",
    ],
    planningTitle: "Cách hỏi để được tư vấn đúng",
    planning: [
      "Gửi một tin nhắn gồm: điểm đón, điểm trả, ngày giờ đi, số khách và số vali.",
      "Nói rõ bạn muốn đi ghép để tối ưu chi phí hay sẵn sàng đổi sang xe riêng nếu cần đúng giờ.",
      "Nếu đi sân bay Đà Nẵng, gửi thêm giờ hạ cánh hoặc mã chuyến bay để căn thời gian đón.",
      "Hỏi rõ điểm hẹn, giờ đón dự kiến, giá và cách liên hệ tài xế trước khi xuất phát.",
    ],
    sections: [
      {
        title: "Cách đặt xe ghép",
        body:
          "Điền form hoặc nhắn Zalo với lịch trình cụ thể. Bảo Trang kiểm tra chuyến phù hợp rồi phản hồi giờ đón, điểm hẹn và chi phí dự kiến.",
      },
      {
        title: "Khi nào dễ ghép chuyến?",
        body:
          "Các chặng phổ biến như sân bay Đà Nẵng, trung tâm Đà Nẵng, Hải Lăng, Đông Hà hoặc TX Quảng Trị thường dễ kiểm tra phương án hơn.",
      },
      {
        title: "Khi nào nên chọn xe riêng?",
        body:
          "Nếu cần đi đúng giờ, có trẻ em, người lớn tuổi, nhiều hành lý hoặc lịch trình nhiều điểm, xe riêng / bao chuyến sẽ chủ động hơn.",
      },
    ],
    llmsDescription:
      "Xe ghép Đà Nẵng - Quảng Trị cho khách đi ít người, hành lý gọn và muốn kiểm tra chuyến phù hợp.",
  },
  serviceArea: {
    id: "serviceArea",
    navLabel: "Khu vực phục vụ",
    route: "/khu-vuc-phuc-vu-xe-da-nang-quang-tri",
    title: "Khu vực phục vụ xe Đà Nẵng Quảng Trị",
    description:
      "Khu vực phục vụ xe Đà Nẵng - Quảng Trị: Hải Lăng, Đông Hà, La Vang, Lao Bảo, Huế, Quảng Bình. Đón trả tận nơi, nhận giá nhanh.",
    kicker: "Khu vực phục vụ",
    headline: "Khu vực phục vụ xe Đà Nẵng ⇄ Quảng Trị",
    summary:
      "Khách có thể kiểm tra nhanh Bảo Trang phục vụ những điểm đón/trả nào ở Đà Nẵng, Quảng Trị và các chặng miền Trung liên quan trước khi gửi lịch trình nhận báo giá.",
    heroImage: "/assets/bao-trang/journey-da-nang.webp",
    heroAlt: "Khu vực phục vụ xe Đà Nẵng Quảng Trị và miền Trung",
    answerTitle: "Bảo Trang phục vụ những khu vực nào?",
    answer:
      "Bảo Trang tập trung tuyến Đà Nẵng ⇄ Quảng Trị, gồm sân bay Đà Nẵng, trung tâm Đà Nẵng, Hải Lăng, TX Quảng Trị, Đông Hà, La Vang, Gio Linh, Vĩnh Linh, Lao Bảo và một số chặng liên quan như Huế, Quảng Bình khi khách cần đi tiếp.",
    facts: [
      { label: "Khu vực chính", value: "Đà Nẵng, Hải Lăng, Đông Hà, Quảng Trị" },
      { label: "Điểm đón/trả", value: "Sân bay, ga, khách sạn, nhà riêng" },
      { label: "Chặng mở rộng", value: "Huế, Lao Bảo, Quảng Bình khi phù hợp" },
    ],
    detailsTitle: "Các điểm thường được yêu cầu",
    details: [
      "Sân bay Đà Nẵng, ga Đà Nẵng, khách sạn ven biển, trung tâm thành phố và nhà riêng.",
      "Hải Lăng, Diên Sanh, Mỹ Chánh, TX Quảng Trị, La Vang và các xã lân cận.",
      "Đông Hà, Cam Lộ, Gio Linh, Vĩnh Linh, Cửa Việt, Lao Bảo, Hướng Hóa.",
      "Huế hoặc Quảng Bình cho lịch trình kết hợp, khứ hồi hoặc đi tiếp trong ngày.",
    ],
    planningTitle: "Nên gửi vị trí như thế nào?",
    planning: [
      "Gửi tên khách sạn, nhà ga, sân bay hoặc địa chỉ càng cụ thể càng tốt.",
      "Nếu điểm đón/trả khó tìm, gửi định vị Google Maps hoặc mô tả mốc gần nhất.",
      "Nếu có nhiều điểm dừng, hãy gửi toàn bộ thứ tự lịch trình từ đầu.",
      "Nói rõ giờ cần có mặt để tư vấn giờ xuất phát phù hợp.",
    ],
    sections: [
      {
        title: "Đón tại Đà Nẵng",
        body:
          "Bảo Trang thường nhận đón tại sân bay Đà Nẵng, ga Đà Nẵng, trung tâm thành phố, khách sạn ven biển và địa chỉ nhà riêng.",
      },
      {
        title: "Trả tại Quảng Trị",
        body:
          "Các điểm thường được hỏi gồm Hải Lăng, TX Quảng Trị, La Vang, Đông Hà, Cam Lộ, Gio Linh, Vĩnh Linh, Cửa Việt và Lao Bảo.",
      },
      {
        title: "Chặng miền Trung liên quan",
        body:
          "Nếu lịch trình cần ghé Huế, đi Quảng Bình hoặc kết hợp nhiều điểm trong ngày, hãy gửi thứ tự điểm dừng để được tư vấn xe và giá phù hợp.",
      },
    ],
    llmsDescription:
      "Các điểm đón/trả chính tại Đà Nẵng, Quảng Trị và những chặng miền Trung có thể tư vấn thêm.",
  },
  pricing: {
    id: "pricing",
    navLabel: "Bảng giá",
    route: "/bang-gia-xe-da-nang-quang-tri",
    title: "Bảng giá xe Đà Nẵng Quảng Trị | Bảo Trang",
    description:
      "Xem bảng giá xe Đà Nẵng - Quảng Trị tham khảo theo chuyến: Hải Lăng, Đông Hà, Gio Linh, Vĩnh Linh, Lao Bảo, Quảng Bình. Gửi lịch trình để chốt giá.",
    kicker: "Bảng giá xe",
    headline: "Bảng giá xe Đà Nẵng ⇄ Quảng Trị",
    summary:
      "Tham khảo nhanh giá xe Đà Nẵng - Quảng Trị theo chuyến: sân bay Đà Nẵng về Hải Lăng, Đông Hà, La Vang, Lao Bảo hoặc các chặng miền Trung liên quan.",
    heroImage: "/assets/bao-trang/vehicle-innova.webp",
    heroAlt: "Bảng giá xe Đà Nẵng Quảng Trị theo chuyến",
    answerTitle: "Giá xe được tính theo chuyến như thế nào?",
    answer:
      "Giá phụ thuộc vào điểm đón, điểm trả, loại xe, giờ đi, chiều đi, thời gian chờ, số điểm ghé và hành lý. Bảng giá trên website là khung tham khảo để khách ước tính nhanh; giá cuối cùng nên được xác nhận qua hotline hoặc Zalo theo lịch trình cụ thể.",
    facts: [
      { label: "Giá hiển thị", value: "Khung tham khảo theo chuyến" },
      { label: "Cách báo giá", value: "Theo loại xe, giờ đi và lịch trình" },
      { label: "Nhận giá chính xác", value: "Gửi điểm đón/trả để chốt giá" },
    ],
    detailsTitle: "Yếu tố làm giá thay đổi",
    details: [
      "Loại xe: xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ hoặc xe 16 chỗ.",
      "Điểm đón/trả cụ thể: sân bay, khách sạn, nhà riêng, xã xa trung tâm hoặc nhiều điểm dừng.",
      "Khung giờ đi: sáng sớm, tối muộn, lễ Tết hoặc ngày cao điểm có thể cần xác nhận riêng.",
      "Lịch trình: một chiều, khứ hồi trong ngày, cần xe chờ hoặc ghé thêm Huế, La Vang, Cửa Việt.",
    ],
    planningTitle: "Cách hỏi giá nhanh và rõ",
    planning: [
      "Gửi điểm đón và điểm trả chi tiết trong một tin nhắn.",
      "Gửi ngày giờ đi, giờ cần có mặt, số khách và hành lý.",
      "Nói rõ có cần xe chờ, quay về trong ngày hoặc xuất hóa đơn không.",
      "Nếu đi sân bay, gửi giờ hạ cánh hoặc mã chuyến bay để tài xế căn thời gian.",
    ],
    sections: [
      {
        title: "Bảng giá giúp ước tính nhanh",
        body:
          "Khách có thể xem trước khoảng chi phí theo tuyến phổ biến trước khi gọi, nhắn Zalo hoặc gửi form báo giá.",
      },
      {
        title: "Giá thay đổi theo lịch trình",
        body:
          "Điểm đón/trả xa trung tâm, nhiều điểm ghé, xe chờ, đi sớm hoặc đi muộn có thể cần xác nhận lại giá theo chuyến thực tế.",
      },
      {
        title: "Chốt giá trước khi đặt xe",
        body:
          "Bảo Trang sẽ báo lại loại xe, chi phí dự kiến và điều kiện đi kèm để khách chủ động quyết định trước khi xác nhận.",
      },
    ],
    llmsDescription:
      "Giá xe Đà Nẵng - Quảng Trị tham khảo theo chuyến và cách gửi lịch trình để chốt giá rõ hơn.",
  },
  fleet: {
    id: "fleet",
    navLabel: "Dòng xe",
    route: "/dong-xe-da-nang-quang-tri",
    title: "Dòng xe Đà Nẵng Quảng Trị | Xe 4-16 chỗ",
    description:
      "Dòng xe phục vụ tuyến Đà Nẵng - Quảng Trị: xe điện 5 chỗ, xe 4 chỗ, xe 7 chỗ, xe 16 chỗ khi cần. Chọn xe phù hợp và nhận giá.",
    kicker: "Dòng xe phục vụ",
    headline: "Dòng xe đi Đà Nẵng ⇄ Quảng Trị",
    summary:
      "Khách có thể xem trước các dòng xe thường phục vụ tuyến Đà Nẵng - Quảng Trị để chọn xe phù hợp với số người, hành lý và mức thoải mái mong muốn.",
    heroImage: "/assets/bao-trang/vehicle-everest.webp",
    heroAlt: "Dòng xe 4 chỗ 5 chỗ 7 chỗ đi Đà Nẵng Quảng Trị",
    answerTitle: "Nên chọn dòng xe nào cho chuyến Đà Nẵng - Quảng Trị?",
    answer:
      "Nhóm 1-3 khách ít hành lý có thể chọn xe 4 chỗ hoặc xe điện 5 chỗ. Gia đình 4-6 khách, nhiều vali hoặc có trẻ em nên cân nhắc xe 7 chỗ để ngồi thoải mái hơn. Nhóm đông có thể hỏi trước xe 16 chỗ để được điều phối theo lịch.",
    facts: [
      { label: "Nhóm nhỏ", value: "Xe 4 chỗ hoặc xe điện 5 chỗ" },
      { label: "Gia đình", value: "Xe 7 chỗ rộng hơn cho vali và trẻ em" },
      { label: "Đoàn đông", value: "Xe 16 chỗ khi báo lịch trước" },
    ],
    detailsTitle: "Chọn xe theo nhu cầu",
    details: [
      "Xe 4 chỗ hoặc xe điện 5 chỗ phù hợp khách công tác, cặp đôi, nhóm nhỏ ít hành lý.",
      "Xe 7 chỗ phù hợp gia đình, nhóm bạn, khách có vali lớn hoặc muốn không gian rộng hơn.",
      "Xe 16 chỗ nên báo trước nếu đi đoàn, sự kiện, đi lễ hoặc có nhiều điểm đón.",
      "Nếu chưa chắc chọn xe nào, gửi số khách và hành lý để Bảo Trang tư vấn.",
    ],
    planningTitle: "Thông tin giúp chọn xe chính xác",
    planning: [
      "Số người lớn, trẻ em, người lớn tuổi hoặc khách cần hỗ trợ lên xuống xe.",
      "Số vali lớn, thùng hàng, xe đẩy em bé hoặc đồ dễ vỡ.",
      "Chặng đi thẳng hay có dừng nghỉ, ghé điểm lễ, ăn uống hoặc tham quan.",
      "Mức ưu tiên: tiết kiệm, rộng rãi, xe mới, xe điện hoặc trải nghiệm cao cấp hơn.",
    ],
    sections: [
      {
        title: "Xe nhỏ cho khách ít hành lý",
        body:
          "Xe 4 chỗ hoặc xe điện 5 chỗ phù hợp khách công tác, cặp đôi, nhóm 1-3 khách và hành trình cần di chuyển gọn.",
      },
      {
        title: "Xe 7 chỗ cho gia đình",
        body:
          "Xe 7 chỗ phù hợp nhóm có nhiều vali, trẻ em, người lớn tuổi hoặc muốn không gian ngồi thoải mái hơn trên chặng dài.",
      },
      {
        title: "Xe 16 chỗ cần báo trước",
        body:
          "Với đoàn đông, lịch lễ, lịch sự kiện hoặc nhiều điểm đón, khách nên gửi thông tin sớm để Bảo Trang kiểm tra xe phù hợp.",
      },
    ],
    llmsDescription:
      "Các dòng xe tuyến Đà Nẵng - Quảng Trị, gồm xe điện 5 chỗ, xe 4 chỗ, xe 7 chỗ và xe 16 chỗ.",
  },
  contact: {
    id: "contact",
    navLabel: "Liên hệ",
    route: "/lien-he-dat-xe-da-nang-quang-tri",
    title: "Liên hệ đặt xe Đà Nẵng Quảng Trị | Bảo Trang",
    description:
      "Liên hệ đặt xe Đà Nẵng - Quảng Trị qua hotline, Zalo hoặc form báo giá. Gửi điểm đón, điểm trả, ngày giờ, số khách để nhận tư vấn.",
    kicker: "Liên hệ đặt xe",
    headline: "Liên hệ đặt xe Đà Nẵng ⇄ Quảng Trị",
    summary:
      "Gọi hotline, nhắn Zalo hoặc gửi form để Bảo Trang tư vấn xe Đà Nẵng - Quảng Trị theo điểm đón/trả, ngày giờ đi, số khách và hành lý.",
    heroImage: "/assets/bao-trang/hero-dragon-bridge-transfer.webp",
    heroAlt: "Liên hệ đặt xe Đà Nẵng Quảng Trị với Bảo Trang Transport",
    answerTitle: "Cách liên hệ nhanh nhất",
    answer:
      "Khách có thể gọi trực tiếp hotline, nhắn Zalo hoặc gửi form báo giá trên website. Để được phản hồi nhanh, hãy gửi đủ điểm đón, điểm trả, ngày giờ đi, số khách, hành lý và loại xe mong muốn nếu đã có lựa chọn.",
    facts: [
      { label: "Kênh liên hệ", value: "Hotline, Zalo và form báo giá" },
      { label: "Phản hồi nhanh", value: "Gửi đủ lịch trình ngay từ đầu" },
      { label: "Cần chuẩn bị", value: "Điểm đón/trả, ngày giờ, số khách" },
    ],
    detailsTitle: "Nên gọi hay gửi form?",
    details: [
      "Gọi hotline khi chuyến đi gần giờ khởi hành hoặc cần xác nhận xe gấp.",
      "Nhắn Zalo khi muốn gửi vị trí, ảnh vé máy bay, số vali hoặc lịch trình nhiều điểm.",
      "Gửi form khi muốn để lại đầy đủ thông tin và chờ Bảo Trang gọi lại.",
      "Nếu cần khứ hồi, xe chờ, hóa đơn hoặc xe 16 chỗ, hãy ghi rõ ngay từ đầu.",
    ],
    planningTitle: "Mẫu thông tin nên chuẩn bị",
    planning: [
      "Đón tại đâu, trả tại đâu, đi ngày nào và khoảng mấy giờ.",
      "Có bao nhiêu khách, bao nhiêu vali hoặc hàng hóa đi cùng.",
      "Muốn xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ hay để Bảo Trang tư vấn.",
      "Có cần ghé Huế, La Vang, Cửa Việt, Lao Bảo hoặc quay về trong ngày không.",
    ],
    sections: [
      {
        title: "Gọi khi cần đi gấp",
        body:
          "Nếu chuyến đi gần giờ khởi hành hoặc cần xác nhận xe ngay, gọi hotline là cách nhanh nhất để được kiểm tra lịch.",
      },
      {
        title: "Nhắn Zalo để gửi vị trí",
        body:
          "Zalo phù hợp khi bạn muốn gửi định vị Google Maps, ảnh vé máy bay, số vali hoặc lịch trình có nhiều điểm dừng.",
      },
      {
        title: "Gửi form để được gọi lại",
        body:
          "Nếu chưa cần gọi ngay, hãy để lại lịch trình trong form. Bảo Trang sẽ liên hệ lại qua SĐT/Zalo để tư vấn và báo giá.",
      },
    ],
    llmsDescription:
      "Hotline, Zalo và form báo giá cho khách cần đặt xe Đà Nẵng - Quảng Trị.",
  },
} satisfies Record<CampaignPageId, CampaignPage>;
