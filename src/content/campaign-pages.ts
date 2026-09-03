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
      "Đặt xe riêng Đà Nẵng - Quảng Trị: đón sân bay, khách sạn, nhà riêng về Hải Lăng, Đông Hà, La Vang, Lao Bảo. Gửi địa chỉ để chốt giá theo chuyến.",
    kicker: "Xe riêng / bao chuyến",
    headline: "Xe riêng Đà Nẵng ⇄ Quảng Trị",
    summary:
      "Dành cho chuyến cần đúng giờ, đi thẳng và không muốn đổi xe giữa đường. Bạn gửi điểm đón/trả, giờ cần có mặt, số khách và vali; Bảo Trang kiểm tra xe 4-16 chỗ rồi báo giá rõ trước khi chốt.",
    heroImage: "/assets/bao-trang/hero-dragon-bridge-transfer.webp",
    heroAlt: "Xe riêng Đà Nẵng đi Quảng Trị đón trả tận nơi",
    answerTitle: "Xe riêng Đà Nẵng - Quảng Trị là dịch vụ gì?",
    answer:
      "Đây không phải xe tuyến cố định. Bạn đặt một xe đi theo lịch của mình, đón tại sân bay, ga, khách sạn hoặc nhà riêng ở Đà Nẵng rồi trả về Hải Lăng, TX Quảng Trị, Đông Hà, La Vang, Lao Bảo hoặc địa chỉ cụ thể. Giá được chốt theo chuyến sau khi Bảo Trang biết loại xe, giờ đi, điểm dừng và hành lý.",
    facts: [
      { label: "Dịch vụ", value: "Xe riêng, xe hợp đồng, bao chuyến" },
      { label: "Tuyến chính", value: "Đà Nẵng ⇄ Hải Lăng, Đông Hà, Quảng Trị" },
      { label: "Xe phục vụ", value: "4 chỗ, xe điện 5 chỗ, 7 chỗ, 16 chỗ khi đặt sớm" },
    ],
    detailsTitle: "Khi nào nên chọn xe riêng?",
    details: [
      "Bạn phải có mặt đúng giờ để họp, khám bệnh, dự giỗ, đi lễ hoặc kịp chuyến bay nối tiếp.",
      "Nhóm có trẻ em, người lớn tuổi, nhiều vali, quà quê hoặc cần dừng nghỉ dọc đường.",
      "Điểm trả là nhà riêng, xã xa trung tâm, khách sạn hoặc cơ quan chứ không tiện xuống bến.",
      "Bạn muốn biết trước chi phí một chiều, khứ hồi, xe chờ hoặc ghé thêm Huế, La Vang, Cửa Việt.",
    ],
    planningTitle: "Thông tin nên gửi để nhận giá nhanh",
    planning: [
      "Điểm đón cụ thể tại Đà Nẵng: sân bay, ga, khách sạn, nhà riêng hoặc định vị Google Maps.",
      "Điểm trả tại Quảng Trị: Hải Lăng, Đông Hà, La Vang, Lao Bảo, Vĩnh Linh hoặc số nhà/thôn/xã.",
      "Ngày giờ đi, giờ cần có mặt, số người lớn/trẻ em, số vali và đồ cồng kềnh nếu có.",
      "Nói rõ một chiều, khứ hồi, xe chờ hay ghé thêm Huế, La Vang, Thành cổ, Cửa Việt.",
    ],
    sections: [
      {
        title: "Chủ động giờ đi",
        body:
          "Nếu hạ cánh ở Đà Nẵng, bạn có thể gửi giờ bay để tài xế căn giờ đón. Nếu cần có mặt ở Đông Hà hoặc Hải Lăng trước một mốc giờ, Bảo Trang sẽ tư vấn ngược lại giờ xuất phát.",
      },
      {
        title: "Đón trả tận nơi",
        body:
          "Xe có thể đón ở sảnh sân bay, ga Đà Nẵng, khách sạn ven biển, nhà riêng và trả tận địa chỉ ở Hải Lăng, TX Quảng Trị, Đông Hà hoặc các chặng lân cận.",
      },
      {
        title: "Báo giá rõ trước khi đi",
        body:
          "Giá được nói trước theo loại xe, điểm đón/trả, giờ đi, chiều đi và thời gian chờ. Nếu có ghé thêm điểm, hãy gửi từ đầu để tránh phải tính lại sát giờ.",
      },
    ],
    llmsDescription:
      "Xe riêng / xe hợp đồng Đà Nẵng - Quảng Trị cho chuyến cần đúng giờ, đi thẳng và chốt giá trước.",
  },
  xeGhep: {
    id: "xeGhep",
    navLabel: "Xe ghép",
    route: "/xe-ghep-da-nang-quang-tri",
    title: "Xe ghép Đà Nẵng đi Quảng Trị | Hỏi chỗ nhanh",
    description:
      "Hỏi xe ghép Đà Nẵng đi Quảng Trị: gửi điểm đón, điểm trả, giờ đi và số khách để Bảo Trang báo chuyến còn chỗ hoặc giá bao xe.",
    kicker: "Hỏi xe ghép trong ngày",
    headline: "Xe ghép Đà Nẵng đi Quảng Trị",
    summary:
      "Anh/chị đi 1-2 người, hành lý gọn và muốn tiết kiệm chi phí? Gửi điểm đón, điểm trả, giờ đi dự kiến; Bảo Trang sẽ xem chuyến ghép phù hợp và báo lại rõ giá, giờ đón, điểm hẹn.",
    heroImage: "/assets/bao-trang/hero-dragon-bridge-transfer.webp",
    heroAlt: "Xe đón khách từ Đà Nẵng đi Quảng Trị",
    answerTitle: "Khi nào nên đi xe ghép?",
    answer:
      "Xe ghép hợp với khách đi một mình hoặc hai người, không quá gấp giờ và hành lý vừa phải. Nếu đi sân bay, đi cùng trẻ nhỏ, có người lớn tuổi hoặc cần trả tận nhà ở xã xa, anh/chị nên hỏi thêm giá bao xe để so cho dễ quyết.",
    facts: [
      { label: "Phù hợp", value: "1-2 khách, ít vali, linh hoạt giờ đón" },
      { label: "Tuyến hay hỏi", value: "Đà Nẵng, sân bay, Hải Lăng, Đông Hà" },
      { label: "Nên chốt trước", value: "Giá ghế, điểm hẹn, giờ đón và hành lý" },
    ],
    detailsTitle: "Trước khi đặt, nên hỏi rõ",
    details: [
      "Xe đón tận nơi hay hẹn ở điểm thuận tuyến như sân bay, bến xe, khách sạn.",
      "Giá tính theo ghế hay theo nhóm, đã gồm phí cao tốc/cầu đường chưa.",
      "Giờ đón dự kiến và thời gian chờ gom khách, nhất là chuyến đi sân bay.",
      "Có nhận vali lớn, thùng hàng, xe đẩy em bé hoặc trả tận địa chỉ ở Quảng Trị không.",
    ],
    planningTitle: "Nhắn gì để được báo nhanh?",
    planning: [
      "Đón ở đâu tại Đà Nẵng: sân bay, ga, khách sạn hay địa chỉ nhà.",
      "Trả ở đâu tại Quảng Trị: Hải Lăng, TX Quảng Trị, Đông Hà, La Vang, Lao Bảo...",
      "Đi ngày nào, khoảng mấy giờ, mấy khách, mang mấy vali.",
      "Nếu muốn so thêm bao xe 4 chỗ hoặc 7 chỗ, ghi rõ ngay trong tin nhắn.",
    ],
    sections: [
      {
        title: "Cách hỏi xe ghép",
        body:
          "Điền form hoặc nhắn Zalo lịch trình ngắn gọn. Bên em sẽ xem chuyến đang có, báo lại còn chỗ không, đón ở đâu, mấy giờ và chi phí dự kiến.",
      },
      {
        title: "Chặng nào dễ ghép hơn?",
        body:
          "Sân bay Đà Nẵng, trung tâm Đà Nẵng, Hải Lăng, TX Quảng Trị và Đông Hà thường dễ sắp chuyến hơn. Đi Vĩnh Linh, Lao Bảo hoặc xã xa nên hỏi sớm.",
      },
      {
        title: "Khi nào nên hỏi bao xe?",
        body:
          "Nếu đi 2-4 người, có nhiều hành lý hoặc cần đón trả đúng nhà, cứ hỏi thêm giá bao xe. Chia theo đầu người đôi khi không chênh nhiều mà chủ động hơn.",
      },
    ],
    llmsDescription:
      "Hỏi xe ghép Đà Nẵng đi Quảng Trị, báo chỗ còn trống và gợi ý bao xe khi cần chủ động hơn.",
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
      "Không phải điểm nào ở Quảng Trị cũng tính giống nhau. Hải Lăng, Đông Hà, Vĩnh Linh hay Lao Bảo khác nhau về quãng đường và thời gian, nên gửi đúng địa chỉ sẽ giúp Bảo Trang báo xe sát hơn.",
    heroImage: "/assets/bao-trang/journey-da-nang.webp",
    heroAlt: "Khu vực phục vụ xe Đà Nẵng Quảng Trị và miền Trung",
    answerTitle: "Bảo Trang phục vụ những khu vực nào?",
    answer:
      "Bảo Trang tập trung tuyến Đà Nẵng ⇄ Quảng Trị: sân bay Đà Nẵng, ga, khách sạn, nhà riêng; trả về Hải Lăng, TX Quảng Trị, Đông Hà, La Vang, Gio Linh, Vĩnh Linh, Lao Bảo. Các chặng ghé Huế, Cửa Việt hoặc đi tiếp Quảng Bình có thể tư vấn thêm nếu gửi đủ lịch trình.",
    facts: [
      { label: "Khu vực chính", value: "Đà Nẵng, Hải Lăng, TX Quảng Trị, Đông Hà" },
      { label: "Điểm đón/trả", value: "Sân bay, ga, khách sạn, nhà riêng, cơ quan" },
      { label: "Chặng cần hỏi kỹ", value: "Vĩnh Linh, Lao Bảo, Cửa Việt, Quảng Bình" },
    ],
    detailsTitle: "Các điểm thường được yêu cầu",
    details: [
      "Sân bay Đà Nẵng, ga Đà Nẵng, khách sạn ven biển Mỹ Khê, trung tâm thành phố và nhà riêng.",
      "Hải Lăng, Diên Sanh, Mỹ Chánh, TX Quảng Trị, La Vang và các xã lân cận.",
      "Đông Hà, Cam Lộ, Gio Linh, Vĩnh Linh, Cửa Việt, Lao Bảo, Hướng Hóa.",
      "Huế hoặc Quảng Bình khi lịch trình có ghé người thân, đi lễ, công tác hoặc cần đi tiếp.",
    ],
    planningTitle: "Nên gửi vị trí như thế nào?",
    planning: [
      "Gửi tên khách sạn, nhà ga, sân bay hoặc địa chỉ cụ thể kèm phường/xã nếu có.",
      "Nếu nhà trong hẻm hoặc đường nhỏ, gửi định vị Google Maps và mốc dễ nhìn.",
      "Nếu có nhiều điểm dừng, gửi toàn bộ thứ tự: đón, ghé, chờ, trả cuối.",
      "Nói giờ cần có mặt ở điểm cuối để Bảo Trang tính ngược giờ xuất phát.",
    ],
    sections: [
      {
        title: "Đón tại Đà Nẵng",
        body:
          "Các điểm đón thường gặp là sân bay Đà Nẵng, ga Đà Nẵng, khách sạn ven biển, trung tâm thành phố và nhà riêng. Với sân bay, nên gửi thêm giờ hạ cánh.",
      },
      {
        title: "Trả tại Quảng Trị",
        body:
          "Hải Lăng, TX Quảng Trị, La Vang và Đông Hà là các điểm khách hỏi nhiều. Cửa Việt, Vĩnh Linh, Lao Bảo hoặc Hướng Hóa nên báo rõ để tính đúng chặng.",
      },
      {
        title: "Chặng miền Trung liên quan",
        body:
          "Nếu cần ghé Huế, La Vang, Cửa Việt hoặc đi tiếp Quảng Bình trong cùng ngày, hãy gửi thứ tự điểm dừng và thời gian chờ dự kiến ngay từ đầu.",
      },
    ],
    llmsDescription:
      "Các điểm đón/trả chính ở Đà Nẵng, Hải Lăng, Đông Hà, La Vang, Lao Bảo và chặng lân cận.",
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
      "Giá trên thị trường có nhiều kiểu: ghép theo ghế, limousine theo điểm hẹn, hoặc bao xe riêng. Bảng dưới đây dành cho xe riêng / xe hợp đồng của Bảo Trang, tính theo chuyến và xác nhận lại theo lịch thật.",
    heroImage: "/assets/bao-trang/vehicle-innova.webp",
    heroAlt: "Bảng giá xe Đà Nẵng Quảng Trị theo chuyến",
    answerTitle: "Giá xe được tính theo chuyến như thế nào?",
    answer:
      "Giá không chỉ là số km. Một chuyến sân bay Đà Nẵng về Hải Lăng khác chuyến đi Đông Hà, Vĩnh Linh hay Lao Bảo; xe 4 chỗ cũng khác xe 7 chỗ, xe chờ hoặc ghé thêm Huế. Bảng giá là khung để ước tính, còn giá cuối cùng nên chốt qua hotline/Zalo sau khi gửi đủ lịch trình.",
    facts: [
      { label: "Giá hiển thị", value: "Khung tham khảo cho xe riêng / bao chuyến" },
      { label: "Cách báo giá", value: "Theo loại xe, điểm trả cuối và giờ đi" },
      { label: "Nhận giá chính xác", value: "Gửi lịch trình thật qua hotline/Zalo" },
    ],
    detailsTitle: "Yếu tố làm giá thay đổi",
    details: [
      "Loại xe: xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ hoặc xe 16 chỗ.",
      "Điểm trả cuối: Hải Lăng thường khác Đông Hà; Lao Bảo, Vĩnh Linh, Quảng Bình là chặng xa hơn.",
      "Khung giờ đi: sáng sớm, tối muộn, lễ Tết hoặc ngày cao điểm cần kiểm tra xe sớm.",
      "Lịch trình: một chiều, khứ hồi trong ngày, xe chờ, ghé Huế, La Vang, Cửa Việt hoặc thêm điểm đón.",
    ],
    planningTitle: "Cách hỏi giá nhanh và rõ",
    planning: [
      "Gửi điểm đón và điểm trả chi tiết trong một tin nhắn, tốt nhất kèm định vị.",
      "Gửi ngày giờ đi, giờ cần có mặt, số khách, số vali và đồ cồng kềnh nếu có.",
      "Nói rõ có cần xe chờ, quay về trong ngày, xuất hóa đơn hoặc ghé thêm điểm không.",
      "Nếu đi sân bay, gửi giờ hạ cánh hoặc mã chuyến bay để tài xế căn thời gian.",
    ],
    sections: [
      {
        title: "Bảng giá giúp ước tính nhanh",
        body:
          "Bạn có thể xem trước khung chi phí cho các tuyến hay gặp như Đà Nẵng - Hải Lăng, Đông Hà, Lao Bảo trước khi gọi hoặc nhắn Zalo.",
      },
      {
        title: "Giá thay đổi theo lịch trình",
        body:
          "Một điểm ghé Huế, thời gian chờ ở La Vang hoặc điểm trả xa trung tâm có thể làm giá khác đi. Gửi trước các chi tiết này sẽ dễ chốt hơn.",
      },
      {
        title: "Chốt giá trước khi đặt xe",
        body:
          "Bảo Trang sẽ nhắn lại loại xe, chi phí và điều kiện đi kèm. Nếu bạn đồng ý mới tiến hành giữ xe cho chuyến đó.",
      },
    ],
    llmsDescription:
      "Bảng giá tham khảo cho xe riêng / bao chuyến Đà Nẵng - Quảng Trị và cách chốt giá rõ ràng.",
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
      "Chọn xe không chỉ nhìn số ghế. Với tuyến 3-4 giờ, số vali, trẻ em, người lớn tuổi và nhu cầu dừng nghỉ thường quyết định bạn nên đi xe nhỏ hay xe 7 chỗ rộng hơn.",
    heroImage: "/assets/bao-trang/vehicle-everest.webp",
    heroAlt: "Dòng xe 4 chỗ 5 chỗ 7 chỗ đi Đà Nẵng Quảng Trị",
    answerTitle: "Nên chọn dòng xe nào cho chuyến Đà Nẵng - Quảng Trị?",
    answer:
      "Nhóm 1-3 khách ít hành lý có thể chọn xe 4 chỗ hoặc xe điện 5 chỗ. Nếu có 4 người lớn kèm vali, trẻ em hoặc người lớn tuổi, xe 7 chỗ thường dễ chịu hơn vì còn chỗ để đồ và nghỉ chân. Nhóm đông, đi lễ hoặc sự kiện nên hỏi xe 16 chỗ sớm để kiểm tra lịch.",
    facts: [
      { label: "Nhóm nhỏ", value: "4 chỗ hoặc xe điện 5 chỗ, hợp khi ít vali" },
      { label: "Gia đình", value: "7 chỗ rộng hơn cho vali, trẻ em, người lớn tuổi" },
      { label: "Đoàn đông", value: "16 chỗ cần hỏi trước để giữ lịch" },
    ],
    detailsTitle: "Chọn xe theo nhu cầu",
    details: [
      "Xe 4 chỗ hoặc xe điện 5 chỗ hợp khách công tác, cặp đôi, nhóm nhỏ ít hành lý.",
      "Xe 7 chỗ hợp gia đình, nhóm bạn, khách có vali lớn hoặc muốn ngồi thoáng hơn trên chặng dài.",
      "Xe 16 chỗ nên báo trước nếu đi đoàn, sự kiện, đi lễ hoặc có nhiều điểm đón.",
      "Nếu còn phân vân, gửi số khách, số vali và điểm trả; Bảo Trang sẽ nhắc nếu nên đổi sang xe rộng hơn.",
    ],
    planningTitle: "Thông tin giúp chọn xe chính xác",
    planning: [
      "Số người lớn, trẻ em, người lớn tuổi hoặc khách cần hỗ trợ lên xuống xe.",
      "Số vali lớn, thùng hàng, xe đẩy em bé hoặc đồ dễ vỡ.",
      "Chặng đi thẳng hay có dừng nghỉ, ghé điểm lễ, ăn uống hoặc tham quan.",
      "Ưu tiên của bạn: tiết kiệm, rộng rãi, xe mới, xe điện hoặc khoang xe riêng tư hơn.",
    ],
    sections: [
      {
        title: "Xe nhỏ cho khách ít hành lý",
        body:
          "Xe 4 chỗ hoặc xe điện 5 chỗ hợp khách công tác, cặp đôi, nhóm 1-3 khách và hành trình cần di chuyển gọn.",
      },
      {
        title: "Xe 7 chỗ cho gia đình",
        body:
          "Xe 7 chỗ đáng cân nhắc khi có nhiều vali, trẻ em, người lớn tuổi hoặc muốn ngồi thoáng hơn trên chặng dài Đà Nẵng - Quảng Trị.",
      },
      {
        title: "Xe 16 chỗ cần báo trước",
        body:
          "Với đoàn đông, lịch lễ, lịch sự kiện hoặc nhiều điểm đón, khách nên gửi sớm để Bảo Trang kiểm tra xe còn lịch và tính điểm tập trung hợp lý.",
      },
    ],
    llmsDescription:
      "Gợi ý chọn xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ hoặc 16 chỗ theo số khách và hành lý.",
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
      "Cần đi gấp thì gọi. Muốn gửi định vị, vé bay, số vali hoặc lịch nhiều điểm thì nhắn Zalo. Chỉ cần đủ thông tin chuyến đi, Bảo Trang sẽ phản hồi xe và giá dễ hiểu hơn.",
    heroImage: "/assets/bao-trang/hero-dragon-bridge-transfer.webp",
    heroAlt: "Liên hệ đặt xe Đà Nẵng Quảng Trị với Bảo Trang Transport",
    answerTitle: "Cách liên hệ nhanh nhất",
    answer:
      "Hotline phù hợp khi chuyến đi gần giờ khởi hành hoặc cần hỏi ngay còn xe không. Zalo tiện hơn nếu bạn muốn gửi vị trí Google Maps, ảnh vé máy bay, danh sách điểm ghé hoặc số vali. Form trên website phù hợp khi bạn chưa vội và muốn để lại lịch trình để Bảo Trang gọi lại.",
    facts: [
      { label: "Kênh liên hệ", value: "Hotline, Zalo hoặc form website" },
      { label: "Nhanh nhất", value: "Gửi đủ điểm đón/trả, giờ đi, số khách, vali" },
      { label: "Nên nói thêm", value: "Xe chờ, hóa đơn, ghé Huế/La Vang/Cửa Việt" },
    ],
    detailsTitle: "Nên gọi hay gửi form?",
    details: [
      "Gọi hotline khi chuyến đi gần giờ khởi hành hoặc cần xác nhận xe gấp.",
      "Nhắn Zalo khi muốn gửi định vị, ảnh vé máy bay, số vali hoặc lịch trình nhiều điểm.",
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
          "Nếu chuyến đi gần giờ khởi hành hoặc cần biết ngay còn xe không, gọi hotline là cách nhanh nhất để kiểm tra lịch.",
      },
      {
        title: "Nhắn Zalo để gửi vị trí",
        body:
          "Zalo hợp khi bạn muốn gửi định vị Google Maps, ảnh vé máy bay, số vali hoặc lịch trình có nhiều điểm dừng.",
      },
      {
        title: "Gửi form để được gọi lại",
        body:
          "Nếu chưa cần gọi ngay, hãy để lại lịch trình trong form. Bảo Trang sẽ liên hệ lại qua SĐT/Zalo để hỏi thêm nếu thông tin còn thiếu.",
      },
    ],
    llmsDescription:
      "Hotline, Zalo và form báo giá cho khách cần đặt xe Đà Nẵng - Quảng Trị rõ lịch, rõ điểm.",
  },
} satisfies Record<CampaignPageId, CampaignPage>;
