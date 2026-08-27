import { ArticleShell } from "./Shared";

type QuickFact = {
  label: string;
  value: string;
};

type VehicleGuide = {
  need: string;
  vehicle: string;
  note: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type RelatedLink = {
  href: string;
  label: string;
};

type RouteKeywordArticleData = {
  title: string;
  summary: string;
  targetKeyword: string;
  supportingKeywords: string[];
  callout: string;
  quickAnswer: string;
  aiAnswer: string;
  quickFacts: QuickFact[];
  whenToChoose: string[];
  routePlanning: string[];
  bookingNotes: string[];
  vehicleGuide: VehicleGuide[];
  pricingNotes: string[];
  commonMistakes: string[];
  faq: FaqItem[];
  messageTemplate: string;
  relatedLinks: RelatedLink[];
};

const routeKeywordArticles = {
  haiLang: {
    title: "Thuê xe Đà Nẵng đi Hải Lăng",
    summary:
      "Chặng Đà Nẵng đi Hải Lăng phù hợp với xe riêng 4 chỗ, 5 chỗ hoặc 7 chỗ khi bạn cần về đúng địa chỉ tại Diên Sanh, Mỹ Chánh, Hải Thượng hoặc các xã lân cận.",
    targetKeyword: "thuê xe Đà Nẵng đi Hải Lăng",
    supportingKeywords: [
      "xe Đà Nẵng đi Hải Lăng 4 chỗ",
      "xe 7 chỗ Đà Nẵng Hải Lăng",
      "xe sân bay Đà Nẵng về Hải Lăng",
      "xe riêng Đà Nẵng đi Diên Sanh Mỹ Chánh",
    ],
    callout:
      "Nếu điểm trả nằm trong huyện Hải Lăng hoặc khu vực gần Mỹ Chánh, Diên Sanh, La Vang, hãy hỏi đúng tuyến Hải Lăng thay vì chỉ hỏi chung Đà Nẵng đi Quảng Trị. Cách hỏi cụ thể hơn giúp báo giá sát chuyến hơn.",
    quickAnswer:
      "Nên đặt xe riêng Đà Nẵng đi Hải Lăng khi bạn cần đón tận nơi tại sân bay, khách sạn, nhà riêng ở Đà Nẵng và trả đúng địa chỉ tại Hải Lăng. Chặng này thường ngắn hơn Đông Hà nên cần chốt rõ điểm trả để nhận giá đúng.",
    aiAnswer:
      "Thuê xe Đà Nẵng đi Hải Lăng là dịch vụ xe riêng hoặc xe hợp đồng theo chuyến dành cho khách cần đón tận nơi ở sân bay, ga, khách sạn hoặc nhà riêng tại Đà Nẵng và trả đúng địa chỉ tại Hải Lăng. Chặng này phù hợp với gia đình, khách về quê, khách công tác hoặc nhóm nhỏ có hành lý. Khi hỏi giá, khách nên gửi điểm đón, điểm trả như Diên Sanh, Mỹ Chánh, Hải Thượng hoặc La Vang, ngày giờ đi, số khách và số vali. Thông tin càng cụ thể thì tư vấn loại xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ hoặc xe 16 chỗ càng sát nhu cầu, giúp chuyến đi chủ động hơn và hạn chế phát sinh.",
    quickFacts: [
      { label: "Nhu cầu chính", value: "Thuê xe Đà Nẵng đi Hải Lăng" },
      { label: "Điểm đón thường gặp", value: "Sân bay Đà Nẵng, ga Đà Nẵng, khách sạn, nhà riêng" },
      { label: "Điểm trả nên ghi rõ", value: "Diên Sanh, Mỹ Chánh, Hải Thượng, La Vang hoặc địa chỉ cụ thể" },
      { label: "Thời gian dự kiến", value: "Khoảng 3-3.5 giờ tùy điểm đón/trả và giờ đi" },
      { label: "Giá tham khảo", value: "Từ 1tr5/chuyến, xác nhận lại theo loại xe và lịch trình" },
    ],
    whenToChoose: [
      "Xe riêng phù hợp khi bạn không muốn xuống ở bến hoặc điểm trung chuyển rồi gọi thêm taxi về xã, thôn, nhà riêng. Với Hải Lăng, nhiều điểm trả nằm rải quanh thị trấn Diên Sanh, Mỹ Chánh, La Vang hoặc đường về quê, nên đặt xe theo địa chỉ cụ thể giúp chuyến đi gọn hơn.",
      "Nếu đi cùng trẻ em, người lớn tuổi, nhiều vali hoặc có lịch hẹn trong ngày, xe riêng giúp chủ động giờ xuất phát và dừng nghỉ. Khách từ sân bay Đà Nẵng về Hải Lăng cũng nên gửi giờ hạ cánh để tài xế căn thời gian đón hợp lý.",
    ],
    routePlanning: [
      "Chặng Đà Nẵng đi Hải Lăng thường đi qua hầm Hải Vân, Huế rồi vào địa phận Quảng Trị. Nếu cần ghé Huế ăn uống, đón thêm người hoặc ghé La Vang trước khi về nhà, hãy gửi toàn bộ lịch trình ngay từ đầu để tránh báo giá thiếu điểm dừng.",
      "Với chuyến đi vào sáng sớm, tối muộn hoặc dịp lễ Tết, nên đặt sớm hơn bình thường vì xe 4 chỗ và 7 chỗ dễ kín lịch. Nếu muốn về đúng giờ cúng giỗ, họp gia đình, khám bệnh hoặc công việc, hãy ghi rõ giờ cần có mặt tại Hải Lăng.",
    ],
    bookingNotes: [
      "Gửi địa chỉ trả càng cụ thể càng tốt, không chỉ ghi chung Hải Lăng.",
      "Nếu điểm trả nằm sâu trong đường nhỏ, nên gửi định vị Google Maps hoặc mô tả mốc gần nhất.",
      "Ghi rõ chuyến một chiều, khứ hồi trong ngày hay cần xe chờ nhiều giờ.",
      "Báo trước số vali, thùng hàng, xe đẩy em bé hoặc đồ dễ vỡ.",
    ],
    vehicleGuide: [
      {
        need: "1-3 khách, ít hành lý",
        vehicle: "Xe 4 chỗ hoặc xe điện 5 chỗ",
        note: "Gọn, riêng tư, phù hợp về quê hoặc đi công tác cá nhân.",
      },
      {
        need: "4-6 khách hoặc nhiều vali",
        vehicle: "Xe 7 chỗ",
        note: "Thoải mái hơn cho gia đình, đặc biệt khi có trẻ em hoặc người lớn tuổi.",
      },
      {
        need: "Nhóm đông, đi lễ hoặc sự kiện",
        vehicle: "Xe 16 chỗ khi cần",
        note: "Nên báo trước để điều phối xe, giờ chờ và điểm đón tập trung.",
      },
    ],
    pricingNotes: [
      "Giá phụ thuộc vào điểm đón tại Đà Nẵng, điểm trả cụ thể ở Hải Lăng, loại xe, giờ đi và số điểm ghé.",
      "Nếu chỉ đi thẳng một chiều, giá thường dễ chốt hơn so với lịch trình có chờ hoặc nhiều điểm dừng.",
      "Khi hỏi giá, nên gửi cùng lúc số khách, số hành lý và ngày giờ đi để nhận báo giá nhanh.",
    ],
    commonMistakes: [
      "Hỏi chung Đà Nẵng đi Quảng Trị nhưng thực tế chỉ về Hải Lăng, khiến báo giá không sát.",
      "Không nói trước có ghé La Vang, Huế hoặc đón thêm người trên đường.",
      "Chọn xe 4 chỗ cho 4 người lớn kèm nhiều vali, làm chuyến đi chật hơn cần thiết.",
    ],
    faq: [
      {
        question: "Có đón sân bay Đà Nẵng về Hải Lăng không?",
        answer:
          "Có. Bạn nên gửi giờ hạ cánh, nhà ga, số khách, số vali và điểm trả tại Hải Lăng để tài xế căn giờ đón.",
      },
      {
        question: "Đi Hải Lăng nên chọn xe 4 chỗ hay 7 chỗ?",
        answer:
          "Nếu đi 1-3 khách ít hành lý, xe 4 chỗ hoặc 5 chỗ là đủ. Nếu đi gia đình 4-6 người hoặc nhiều vali, xe 7 chỗ sẽ thoải mái hơn.",
      },
      {
        question: "Có thể ghé La Vang trước khi về Hải Lăng không?",
        answer:
          "Có thể sắp xếp, nhưng nên báo trước điểm ghé và thời gian chờ để báo giá rõ ngay từ đầu.",
      },
    ],
    messageTemplate:
      "Mình cần thuê xe Đà Nẵng đi Hải Lăng, đón tại sân bay Đà Nẵng, trả tại Diên Sanh, đi ngày ..., giờ ..., ... khách, ... vali, muốn xe 7 chỗ.",
    relatedLinks: [
      { href: "/bai-viet/dat-xe-rieng-da-nang-quang-tri", label: "đặt xe riêng Đà Nẵng - Quảng Trị" },
      { href: "/bai-viet/xe-san-bay-da-nang-di-quang-tri", label: "xe sân bay Đà Nẵng đi Quảng Trị" },
      { href: "/bai-viet/meo-dat-xe-hop-dong-tiet-kiem", label: "mẹo đặt xe hợp đồng tiết kiệm" },
    ],
  },
  dongHa: {
    title: "Xe Đà Nẵng đi Đông Hà",
    summary:
      "Tư vấn đặt xe riêng Đà Nẵng đi Đông Hà cho khách công tác, gia đình, đón sân bay, khách sạn hoặc cần trả đúng địa chỉ trong thành phố Đông Hà.",
    targetKeyword: "xe Đà Nẵng đi Đông Hà",
    supportingKeywords: [
      "thuê xe Đà Nẵng đi Đông Hà",
      "xe riêng Đà Nẵng Đông Hà",
      "xe 7 chỗ Đà Nẵng đi Đông Hà",
      "xe sân bay Đà Nẵng đi Đông Hà",
    ],
    callout:
      "Đông Hà là điểm trả phổ biến nhất trên tuyến Đà Nẵng - Quảng Trị. Nếu bạn cần đến đúng khách sạn, cơ quan, nhà riêng hoặc lịch hẹn, hãy hỏi thẳng tuyến xe Đà Nẵng đi Đông Hà thay vì chỉ tìm xe đi Quảng Trị chung.",
    quickAnswer:
      "Xe riêng Đà Nẵng đi Đông Hà phù hợp khi bạn cần chủ động giờ đi, đón trả tận nơi và không muốn phụ thuộc vào lịch xe tuyến. Đây là chặng có nhu cầu cao cho công tác, về quê, khám bệnh và đón khách từ sân bay.",
    aiAnswer:
      "Xe Đà Nẵng đi Đông Hà của Bảo Trang Transport là dịch vụ xe riêng theo chuyến cho khách cần di chuyển từ Đà Nẵng, sân bay Đà Nẵng, ga hoặc khách sạn đến thành phố Đông Hà. Dịch vụ phù hợp với khách công tác, gia đình về quê, người đi khám bệnh, dự sự kiện hoặc cần có mặt đúng giờ. Khách nên gửi địa chỉ đón, địa chỉ trả tại Đông Hà, giờ cần đến, số người và hành lý để được tư vấn xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ hoặc xe 16 chỗ. Nếu có ghé Huế, La Vang, Cửa Việt hoặc Gio Linh, cần báo trước để lịch trình và giá theo chuyến được xác nhận rõ ràng.",
    quickFacts: [
      { label: "Nhu cầu chính", value: "Xe Đà Nẵng đi Đông Hà" },
      { label: "Điểm đón thường gặp", value: "Sân bay Đà Nẵng, trung tâm Đà Nẵng, khách sạn ven biển" },
      { label: "Điểm trả thường gặp", value: "Trung tâm Đông Hà, khách sạn, cơ quan, nhà riêng" },
      { label: "Thời gian dự kiến", value: "Khoảng 3.5-4 giờ tùy khung giờ và điểm trả" },
      { label: "Giá tham khảo", value: "Từ 1tr7/chuyến, xác nhận lại theo xe và lịch trình" },
    ],
    whenToChoose: [
      "Nếu chuyến đi có giờ hẹn rõ ràng như họp, khám bệnh, lịch bay nối chuyến hoặc đón người thân, xe riêng giúp bạn tránh rủi ro phải chờ chuyến xe cố định. Tài xế đón tại điểm hẹn và trả tại đúng địa chỉ ở Đông Hà.",
      "Khách đi Đông Hà thường có nhu cầu đem theo hành lý, quà quê, hồ sơ công tác hoặc đi cùng gia đình. Việc chọn xe 7 chỗ thay vì cố đi xe nhỏ có thể giúp chuyến đi dễ chịu hơn trên quãng đường dài.",
    ],
    routePlanning: [
      "Khi đặt xe Đà Nẵng đi Đông Hà, hãy ghi rõ bạn muốn đi thẳng hay có ghé Huế, Hải Lăng, La Vang, Cửa Việt hoặc Gio Linh. Một điểm ghé nhỏ cũng có thể làm thay đổi thời gian chờ và cách báo giá.",
      "Nếu đi từ sân bay, nên gửi mã chuyến bay hoặc ảnh vé để tài xế theo dõi giờ hạ cánh. Nếu đi từ khách sạn, hãy gửi tên khách sạn, số phòng hoặc số điện thoại người đi để tài xế dễ liên hệ tại sảnh.",
    ],
    bookingNotes: [
      "Ghi rõ điểm trả ở Đông Hà: tên đường, phường, khách sạn, bệnh viện hoặc cơ quan.",
      "Nếu cần có mặt trước một giờ cụ thể, hãy nói giờ cần đến thay vì chỉ nói giờ muốn đi.",
      "Báo trước nếu có nhiều vali lớn, hàng hóa, trẻ nhỏ hoặc người lớn tuổi đi cùng.",
      "Nếu muốn xuất hóa đơn hoặc đi công tác, nên nói rõ ngay khi hỏi giá.",
    ],
    vehicleGuide: [
      {
        need: "Khách công tác 1-2 người",
        vehicle: "Xe 4 chỗ hoặc xe điện 5 chỗ",
        note: "Yên tĩnh, riêng tư, dễ trao đổi lịch trình với tài xế.",
      },
      {
        need: "Gia đình 4-6 người",
        vehicle: "Xe 7 chỗ",
        note: "Phù hợp hơn nếu có vali, quà quê hoặc cần dừng nghỉ giữa đường.",
      },
      {
        need: "Đoàn nhỏ đi sự kiện",
        vehicle: "Xe 16 chỗ khi cần",
        note: "Nên gửi số khách và số điểm đón để tính xe phù hợp.",
      },
    ],
    pricingNotes: [
      "Giá theo chuyến thường rõ hơn khi bạn cung cấp đủ điểm đón, điểm trả, giờ đi và loại xe mong muốn.",
      "Khung giờ rất sớm, rất muộn hoặc ngày lễ có thể cần xác nhận xe sớm hơn.",
      "Nếu có chiều về, hãy hỏi luôn giá khứ hồi để điều phối lịch xe tốt hơn.",
    ],
    commonMistakes: [
      "Chỉ hỏi giá Đông Hà nhưng sau đó thêm điểm ghé Cửa Việt hoặc Gio Linh.",
      "Không gửi giờ cần có mặt, khiến giờ đón chưa tối ưu cho lịch công việc.",
      "Không báo trước hành lý nhiều nên chọn loại xe chưa phù hợp.",
    ],
    faq: [
      {
        question: "Xe Đà Nẵng đi Đông Hà có đón tận nơi không?",
        answer:
          "Có. Dịch vụ hỗ trợ đón tại sân bay, khách sạn, ga, nhà riêng và trả tại địa chỉ cụ thể ở Đông Hà.",
      },
      {
        question: "Có nhận chuyến Đà Nẵng đi Đông Hà trong ngày không?",
        answer:
          "Có thể sắp xếp theo lịch xe. Bạn nên gửi giờ đi và giờ cần có mặt để được tư vấn khung giờ phù hợp.",
      },
      {
        question: "Đi Đông Hà có thể ghé La Vang hoặc Huế không?",
        answer:
          "Có thể ghé theo lịch trình riêng. Nên báo trước điểm ghé và thời gian chờ để chốt giá rõ ràng.",
      },
    ],
    messageTemplate:
      "Mình cần xe Đà Nẵng đi Đông Hà, đón tại khách sạn ..., trả tại ..., đi ngày ..., cần có mặt trước ..., ... khách, ... vali.",
    relatedLinks: [
      { href: "/bai-viet/xe-san-bay-da-nang-di-quang-tri", label: "xe sân bay Đà Nẵng đi Quảng Trị" },
      { href: "/bai-viet/dat-xe-rieng-da-nang-quang-tri", label: "đặt xe riêng Đà Nẵng - Quảng Trị" },
      { href: "/bai-viet/so-sanh-xe-khach-va-xe-rieng", label: "so sánh xe khách và xe riêng" },
    ],
  },
  airportQuangTri: {
    title: "Xe sân bay Đà Nẵng đi Quảng Trị",
    summary:
      "Hướng dẫn đặt xe riêng đón sân bay Đà Nẵng đi Hải Lăng, Đông Hà, La Vang, Lao Bảo hoặc các điểm khác tại Quảng Trị theo giờ bay thực tế.",
    targetKeyword: "xe sân bay Đà Nẵng đi Quảng Trị",
    supportingKeywords: [
      "đón sân bay Đà Nẵng về Quảng Trị",
      "xe sân bay Đà Nẵng đi Đông Hà",
      "xe sân bay Đà Nẵng về Hải Lăng",
      "transfer sân bay Đà Nẵng đi Quảng Trị",
    ],
    callout:
      "Keyword sân bay thường có intent đặt xe rất rõ: khách vừa hạ cánh, cần tài xế đón đúng sảnh và đi thẳng về Quảng Trị. Đây là nhóm nên ưu tiên vì sát nhu cầu thực tế hơn các từ khóa tìm hiểu chung.",
    quickAnswer:
      "Khi đặt xe sân bay Đà Nẵng đi Quảng Trị, bạn nên gửi mã chuyến bay, giờ hạ cánh, nhà ga, số khách, hành lý và điểm trả cuối cùng. Tài xế có thể căn giờ đón theo chuyến bay để hạn chế chờ sai thời điểm.",
    aiAnswer:
      "Xe sân bay Đà Nẵng đi Quảng Trị là dịch vụ xe riêng đón khách tại sân bay quốc nội hoặc quốc tế Đà Nẵng rồi đưa về Hải Lăng, Đông Hà, La Vang, Gio Linh, Vĩnh Linh, Lao Bảo hoặc địa chỉ cụ thể tại Quảng Trị. Dịch vụ phù hợp với khách hạ cánh cần đi thẳng, gia đình có trẻ nhỏ, người lớn tuổi, khách công tác hoặc nhóm có nhiều hành lý. Khi đặt xe, khách nên gửi mã chuyến bay, giờ hạ cánh, nhà ga, số điện thoại, số khách, số vali và điểm trả cuối cùng. Tài xế căn giờ đón theo chuyến bay và tư vấn xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ hoặc xe 16 chỗ theo thực tế.",
    quickFacts: [
      { label: "Nhu cầu chính", value: "Xe sân bay Đà Nẵng đi Quảng Trị" },
      { label: "Điểm đón", value: "Sân bay quốc nội hoặc quốc tế Đà Nẵng" },
      { label: "Điểm trả", value: "Hải Lăng, Đông Hà, La Vang, Gio Linh, Vĩnh Linh, Lao Bảo" },
      { label: "Thông tin quan trọng", value: "Mã chuyến bay, giờ hạ cánh, số kiện hành lý" },
      { label: "Loại xe", value: "Xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ, xe 16 chỗ khi cần" },
    ],
    whenToChoose: [
      "Xe riêng là lựa chọn phù hợp khi bạn bay đến Đà Nẵng rồi đi thẳng về Quảng Trị, không muốn ra bến xe hoặc chờ xe đi chung. Với gia đình, khách công tác hoặc người lớn tuổi, việc có tài xế đón ở sảnh giúp giảm nhiều bước di chuyển.",
      "Nếu chuyến bay hạ cánh muộn, có trẻ nhỏ hoặc hành lý lớn, nên chọn xe có đủ khoang hành lý thay vì chỉ chọn theo số ghế. Với nhóm 4 người lớn kèm vali, xe 7 chỗ thường thực tế hơn xe 4 chỗ.",
    ],
    routePlanning: [
      "Điểm trả tại Quảng Trị quyết định nhiều đến giá và thời gian: Hải Lăng thường khác Đông Hà, còn Lao Bảo hoặc Vĩnh Linh là chặng xa hơn. Vì vậy, khi hỏi giá nên nói rõ điểm trả cuối cùng, không chỉ ghi chung Quảng Trị.",
      "Nếu chuyến bay bị trễ, bạn nên cập nhật sớm qua điện thoại hoặc Zalo. Với chuyến quốc tế, cần tính thêm thời gian làm thủ tục nhập cảnh, lấy hành lý và ra sảnh đón.",
    ],
    bookingNotes: [
      "Gửi mã chuyến bay hoặc ảnh vé để tài xế theo dõi giờ hạ cánh.",
      "Ghi rõ sân bay quốc nội hay quốc tế nếu đã biết.",
      "Báo số điện thoại có thể gọi được sau khi hạ cánh.",
      "Nếu có nhiều vali, xe đẩy hoặc thùng hàng, hãy báo trước để chọn xe đủ khoang.",
    ],
    vehicleGuide: [
      {
        need: "1-3 khách, 1-2 vali",
        vehicle: "Xe 4 chỗ hoặc xe điện 5 chỗ",
        note: "Phù hợp đi nhanh từ sân bay về Hải Lăng, Đông Hà hoặc TX Quảng Trị.",
      },
      {
        need: "Gia đình 4-6 người",
        vehicle: "Xe 7 chỗ",
        note: "Dễ sắp hành lý hơn, đặc biệt khi có trẻ em hoặc người lớn tuổi.",
      },
      {
        need: "Nhóm đông hạ cánh cùng chuyến",
        vehicle: "Xe 16 chỗ khi cần",
        note: "Nên gửi danh sách khách và số kiện hành lý để điều phối trước.",
      },
    ],
    pricingNotes: [
      "Giá phụ thuộc vào điểm trả tại Quảng Trị, loại xe, giờ hạ cánh và nhu cầu chờ.",
      "Nếu cần ghé Huế, La Vang hoặc đón thêm người, hãy gửi lịch trình đầy đủ để báo giá trọn chuyến.",
      "Với chuyến bay tối muộn hoặc dịp cao điểm, nên đặt sớm để giữ xe phù hợp.",
    ],
    commonMistakes: [
      "Không gửi mã chuyến bay nên tài xế khó theo dõi khi chuyến bay đổi giờ.",
      "Nói điểm trả chung chung là Quảng Trị trong khi thực tế đi Lao Bảo hoặc Vĩnh Linh.",
      "Không báo số vali, khiến loại xe chọn ban đầu có thể thiếu khoang hành lý.",
    ],
    faq: [
      {
        question: "Tài xế có đợi nếu chuyến bay trễ không?",
        answer:
          "Có thể hỗ trợ theo lịch đã xác nhận. Bạn nên gửi mã chuyến bay và báo ngay khi có thay đổi để tài xế căn giờ đón.",
      },
      {
        question: "Có đón ở sân bay rồi ghé Huế hoặc La Vang không?",
        answer:
          "Có thể sắp xếp theo chuyến riêng. Hãy gửi điểm ghé và thời gian chờ dự kiến để báo giá chính xác.",
      },
      {
        question: "Đi sân bay Đà Nẵng về Quảng Trị nên đặt trước bao lâu?",
        answer:
          "Nên đặt càng sớm càng tốt, đặc biệt nếu bay tối muộn, đi ngày lễ hoặc cần xe 7 chỗ, 16 chỗ.",
      },
    ],
    messageTemplate:
      "Mình cần xe sân bay Đà Nẵng đi Quảng Trị, chuyến bay ..., hạ cánh lúc ..., trả tại ..., ... khách, ... vali, cần xe ... chỗ.",
    relatedLinks: [
      { href: "/bai-viet/xe-da-nang-di-dong-ha", label: "xe Đà Nẵng đi Đông Hà" },
      { href: "/bai-viet/thue-xe-da-nang-di-hai-lang", label: "thuê xe Đà Nẵng đi Hải Lăng" },
      { href: "/bai-viet/dat-xe-rieng-da-nang-quang-tri", label: "đặt xe riêng Đà Nẵng - Quảng Trị" },
    ],
  },
  laVang: {
    title: "Xe Đà Nẵng đi La Vang",
    summary:
      "Gợi ý đặt xe riêng Đà Nẵng đi La Vang cho chuyến đi lễ, gia đình, nhóm nhỏ, có thể ghé Huế, Hải Lăng hoặc Thành cổ Quảng Trị theo lịch trình.",
    targetKeyword: "xe Đà Nẵng đi La Vang",
    supportingKeywords: [
      "thuê xe Đà Nẵng đi La Vang",
      "xe riêng đi La Vang từ Đà Nẵng",
      "xe 7 chỗ Đà Nẵng đi La Vang",
      "xe sân bay Đà Nẵng đi La Vang",
    ],
    callout:
      "La Vang là nhu cầu riêng vì người tìm thường đã có mục đích rõ: đi lễ, đưa gia đình hoặc ghé trong hành trình Quảng Trị. Trang riêng cho La Vang giúp khách đọc đúng thông tin họ cần.",
    quickAnswer:
      "Xe riêng Đà Nẵng đi La Vang phù hợp khi bạn cần chủ động giờ đi lễ, có người lớn tuổi, trẻ em hoặc muốn ghé thêm Huế, Hải Lăng, Thành cổ Quảng Trị. Nên báo trước thời gian chờ tại La Vang nếu cần xe đợi quay về.",
    aiAnswer:
      "Xe Đà Nẵng đi La Vang là dịch vụ xe riêng hoặc xe hợp đồng theo chuyến cho khách đi lễ, hành hương, về Hải Lăng hoặc ghé Trung tâm hành hương La Vang trong lịch trình Quảng Trị. Dịch vụ phù hợp với gia đình có người lớn tuổi, trẻ nhỏ, khách bay đến sân bay Đà Nẵng rồi đi La Vang hoặc nhóm muốn ghé thêm Huế, Thành cổ Quảng Trị, Hải Lăng. Khi hỏi xe, khách nên nói rõ đi một chiều, khứ hồi trong ngày hay cần xe chờ, đồng thời gửi giờ đi, số khách và hành lý. Xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ hoặc xe 16 chỗ được tư vấn theo số người và mức độ cần thoải mái.",
    quickFacts: [
      { label: "Nhu cầu chính", value: "Xe Đà Nẵng đi La Vang" },
      { label: "Nhu cầu phổ biến", value: "Đi lễ, hành hương, đi cùng gia đình, ghé nhiều điểm" },
      { label: "Điểm đón", value: "Đà Nẵng, sân bay Đà Nẵng, khách sạn, nhà riêng" },
      { label: "Điểm trả/ghé", value: "Trung tâm hành hương La Vang, Hải Lăng, Thành cổ Quảng Trị" },
      { label: "Lưu ý", value: "Cần báo trước nếu xe chờ hoặc quay về trong ngày" },
    ],
    whenToChoose: [
      "Nếu gia đình có người lớn tuổi hoặc trẻ nhỏ, xe riêng giúp chủ động thời gian nghỉ dọc đường và giảm việc phải đổi phương tiện. Đây là điểm quan trọng với chuyến đi lễ vì giờ lễ, giờ ăn uống và sức khỏe người đi thường cần linh hoạt.",
      "Nếu bạn bay đến Đà Nẵng rồi đi La Vang ngay, nên đặt xe theo giờ hạ cánh thay vì đặt giờ cố định quá sát. Tài xế cần biết số khách, hành lý và điểm hẹn tại sân bay để đón thuận hơn.",
    ],
    routePlanning: [
      "Lịch trình Đà Nẵng đi La Vang có thể đi thẳng hoặc kết hợp Huế, Hải Lăng, Thành cổ Quảng Trị. Nếu ghé nhiều điểm, nên gửi thứ tự điểm ghé để được tư vấn tuyến phù hợp và hạn chế quay đầu nhiều.",
      "Nếu cần xe chờ trong lúc đi lễ, hãy ước lượng thời gian chờ. Chuyến một chiều, khứ hồi trong ngày và xe chờ vài giờ là ba cách tính khác nhau, nên thông tin này cần chốt từ đầu.",
    ],
    bookingNotes: [
      "Gửi rõ đi một chiều hay cần xe chờ đón về Đà Nẵng.",
      "Báo trước nếu có người lớn tuổi, trẻ nhỏ hoặc cần dừng nghỉ thường xuyên.",
      "Nếu đi lễ theo đoàn, nên thống nhất một điểm đón tập trung để tiết kiệm thời gian.",
      "Nếu có ghé Huế hoặc Thành cổ Quảng Trị, hãy gửi thứ tự điểm ghé.",
    ],
    vehicleGuide: [
      {
        need: "Cặp đôi hoặc gia đình nhỏ",
        vehicle: "Xe 4 chỗ hoặc xe điện 5 chỗ",
        note: "Phù hợp đi thẳng, ít hành lý và không cần nhiều không gian.",
      },
      {
        need: "Gia đình 4-6 người",
        vehicle: "Xe 7 chỗ",
        note: "Nên chọn nếu có người lớn tuổi, trẻ em hoặc cần mang nhiều đồ lễ, vali.",
      },
      {
        need: "Nhóm đi lễ đông hơn",
        vehicle: "Xe 16 chỗ khi cần",
        note: "Nên chốt sớm, nhất là dịp lễ lớn hoặc cuối tuần.",
      },
    ],
    pricingNotes: [
      "Giá xe Đà Nẵng đi La Vang phụ thuộc vào đi thẳng hay có ghé thêm điểm.",
      "Nếu xe chờ quay về trong ngày, thời gian chờ cần được tính trong báo giá.",
      "Đi ngày lễ hoặc dịp hành hương đông khách nên đặt trước để giữ xe phù hợp.",
    ],
    commonMistakes: [
      "Không nói rõ xe chờ hay chỉ đưa một chiều đến La Vang.",
      "Thêm điểm ghé sau khi đã chốt giá, làm lịch trình kéo dài hơn dự kiến.",
      "Không báo trước có người lớn tuổi nên chưa chuẩn bị thời gian dừng nghỉ hợp lý.",
    ],
    faq: [
      {
        question: "Có thể đặt xe Đà Nẵng đi La Vang khứ hồi trong ngày không?",
        answer:
          "Có thể sắp xếp nếu lịch xe phù hợp. Bạn nên gửi giờ đi, thời gian chờ tại La Vang và giờ muốn về Đà Nẵng.",
      },
      {
        question: "Đi La Vang có ghé Huế được không?",
        answer:
          "Có thể ghé Huế, Hải Lăng hoặc Thành cổ Quảng Trị theo lịch trình riêng. Nên báo trước để tính thời gian và giá.",
      },
      {
        question: "Nên chọn xe mấy chỗ khi đi lễ La Vang?",
        answer:
          "Nhóm 1-3 khách có thể chọn xe 4 chỗ hoặc 5 chỗ. Gia đình 4-6 người, nhiều đồ hoặc có người lớn tuổi nên chọn xe 7 chỗ.",
      },
    ],
    messageTemplate:
      "Mình cần xe Đà Nẵng đi La Vang, đón tại ..., đi ngày ..., ... khách, cần ghé ..., xe chờ khoảng ... giờ rồi về Đà Nẵng.",
    relatedLinks: [
      { href: "/bai-viet/thue-xe-da-nang-di-hai-lang", label: "thuê xe Đà Nẵng đi Hải Lăng" },
      { href: "/bai-viet/transfer-da-nang-hue", label: "transfer Đà Nẵng - Huế" },
      { href: "/bai-viet/thue-xe-rieng-an-toan-cho-gia-dinh", label: "thuê xe riêng an toàn cho gia đình" },
    ],
  },
  laoBao: {
    title: "Xe Đà Nẵng đi Lao Bảo",
    summary:
      "Tư vấn đặt xe riêng Đà Nẵng đi Lao Bảo, Hướng Hóa cho chặng xa, cần chốt giờ đi, điểm dừng, hành lý và loại xe phù hợp trước chuyến.",
    targetKeyword: "xe Đà Nẵng đi Lao Bảo",
    supportingKeywords: [
      "thuê xe Đà Nẵng đi Lao Bảo",
      "xe riêng Đà Nẵng Lao Bảo",
      "xe 7 chỗ Đà Nẵng đi Lao Bảo",
      "xe Đà Nẵng đi Hướng Hóa",
    ],
    callout:
      "Lao Bảo là chặng xa hơn trong cụm Quảng Trị nên cần một trang riêng. Người tìm tuyến này thường đã biết điểm đến và cần tư vấn thực tế về thời gian, điểm dừng, hành lý và loại xe.",
    quickAnswer:
      "Xe riêng Đà Nẵng đi Lao Bảo phù hợp khi bạn cần đi Hướng Hóa, cửa khẩu Lao Bảo hoặc các điểm xa trung tâm. Nên đặt sớm, gửi rõ điểm trả cuối cùng và chọn xe đủ thoải mái vì thời gian ngồi xe dài hơn các chặng Đông Hà, Hải Lăng.",
    aiAnswer:
      "Xe Đà Nẵng đi Lao Bảo là dịch vụ xe riêng theo chuyến cho khách cần đến Hướng Hóa, Khe Sanh, cửa khẩu Lao Bảo hoặc các điểm xa trung tâm Quảng Trị. Đây là chặng dài hơn Đông Hà và Hải Lăng, nên khách nên đặt sớm, chọn xe đủ thoải mái và gửi rõ điểm trả cuối cùng. Thông tin cần có gồm điểm đón tại Đà Nẵng, ngày giờ đi, giờ cần đến, số khách, hành lý, nhu cầu dừng nghỉ, xe chờ hay quay về trong ngày. Bảo Trang Transport tư vấn xe 4 chỗ, xe điện 5 chỗ, xe 7 chỗ hoặc xe 16 chỗ theo lịch trình thực tế để báo giá theo chuyến rõ ràng hơn.",
    quickFacts: [
      { label: "Nhu cầu chính", value: "Xe Đà Nẵng đi Lao Bảo" },
      { label: "Khu vực liên quan", value: "Hướng Hóa, Khe Sanh, cửa khẩu Lao Bảo" },
      { label: "Thời gian dự kiến", value: "Khoảng 5-6 giờ tùy điểm đón/trả và thời tiết" },
      { label: "Giá tham khảo", value: "Từ 2tr3/chuyến, xác nhận theo loại xe và lịch trình" },
      { label: "Ưu tiên", value: "Chọn xe rộng nếu đi nhóm, nhiều hành lý hoặc hàng hóa" },
    ],
    whenToChoose: [
      "Với chặng Lao Bảo, xe riêng giúp bạn chủ động hơn vì điểm đến thường không nằm ngay trục trung tâm Đông Hà. Nếu phải chuyển xe nhiều lần, tổng thời gian có thể kéo dài và bất tiện khi có hành lý.",
      "Khách đi Lao Bảo thường đi công tác, về quê, giao nhận hồ sơ, thăm người thân hoặc kết hợp Khe Sanh, Hướng Hóa. Vì chặng dài, bạn nên nói rõ mục đích đi để được tư vấn giờ xuất phát và điểm dừng phù hợp.",
    ],
    routePlanning: [
      "Từ Đà Nẵng đi Lao Bảo, lịch trình nên được chốt sớm hơn các chặng gần. Hãy gửi điểm đón, điểm trả, số khách, hành lý và có cần dừng ăn uống hay không. Nếu đi cửa khẩu, cần tính thêm thời gian làm việc thực tế tại điểm đến.",
      "Nếu có thêm điểm ghé như Đông Hà, Khe Sanh hoặc Hướng Hóa, hãy gửi theo thứ tự. Với chặng xa, việc thêm điểm dừng sau khi đã xuất phát có thể ảnh hưởng đáng kể đến giờ đến nơi.",
    ],
    bookingNotes: [
      "Ghi rõ điểm trả là Lao Bảo, Khe Sanh, Hướng Hóa hay khu vực khác.",
      "Báo trước nếu có hàng hóa, vali lớn hoặc cần không gian cốp rộng.",
      "Nên chọn giờ đi đủ sớm nếu cần có mặt trong giờ hành chính.",
      "Nếu đi khứ hồi hoặc cần xe chờ, hãy nói rõ thời gian dự kiến ở điểm đến.",
    ],
    vehicleGuide: [
      {
        need: "1-2 khách công tác",
        vehicle: "Xe 4 chỗ hoặc xe điện 5 chỗ",
        note: "Phù hợp nếu hành lý ít và muốn đi gọn theo lịch riêng.",
      },
      {
        need: "3-6 khách hoặc nhiều hành lý",
        vehicle: "Xe 7 chỗ",
        note: "Nên ưu tiên vì chặng dài, khoang xe và cốp rộng hơn.",
      },
      {
        need: "Nhóm đi cửa khẩu hoặc sự kiện",
        vehicle: "Xe 16 chỗ khi cần",
        note: "Cần đặt trước để điều phối xe và thống nhất điểm đón tập trung.",
      },
    ],
    pricingNotes: [
      "Giá chặng Lao Bảo phụ thuộc nhiều vào điểm trả cuối cùng, giờ đi, chiều về và thời gian chờ.",
      "Nếu chỉ hỏi chung Quảng Trị, báo giá có thể chưa bao gồm đoạn đi xa lên Lao Bảo.",
      "Nên gửi trước nhu cầu chờ, quay về trong ngày hoặc lưu xe qua đêm nếu có.",
    ],
    commonMistakes: [
      "Hỏi giá Đà Nẵng đi Quảng Trị nhưng điểm trả thực tế là Lao Bảo.",
      "Không tính thời gian làm việc tại cửa khẩu hoặc điểm hẹn ở Hướng Hóa.",
      "Chọn xe nhỏ dù đi xa, nhiều hành lý hoặc cần ngồi thoải mái nhiều giờ.",
    ],
    faq: [
      {
        question: "Xe Đà Nẵng đi Lao Bảo mất khoảng bao lâu?",
        answer:
          "Thường khoảng 5-6 giờ tùy điểm đón/trả, khung giờ xuất phát, thời tiết và số điểm dừng trên đường.",
      },
      {
        question: "Có thể đi Lao Bảo rồi quay về Đà Nẵng trong ngày không?",
        answer:
          "Có thể tư vấn theo lịch thực tế, nhưng cần gửi giờ cần đến, thời gian ở Lao Bảo và giờ muốn quay về để tính chuyến phù hợp.",
      },
      {
        question: "Đi Lao Bảo nên chọn xe nào?",
        answer:
          "Nếu chặng dài và có hành lý, xe 7 chỗ thường thoải mái hơn. Nhóm ít người, ít đồ có thể chọn xe 4 chỗ hoặc 5 chỗ.",
      },
    ],
    messageTemplate:
      "Mình cần xe Đà Nẵng đi Lao Bảo, đón tại ..., trả tại ..., đi ngày ..., cần có mặt trước ..., ... khách, ... hành lý, có/không cần xe chờ.",
    relatedLinks: [
      { href: "/bai-viet/xe-da-nang-di-dong-ha", label: "xe Đà Nẵng đi Đông Hà" },
      { href: "/bai-viet/dat-xe-rieng-da-nang-quang-tri", label: "đặt xe riêng Đà Nẵng - Quảng Trị" },
      { href: "/bai-viet/meo-dat-xe-hop-dong-tiet-kiem", label: "mẹo đặt xe hợp đồng tiết kiệm" },
    ],
  },
} satisfies Record<string, RouteKeywordArticleData>;

function RouteKeywordArticle({ data }: { data: RouteKeywordArticleData }) {
  return (
    <ArticleShell title={data.title} summary={data.summary}>
      <div className="article-callout">
        <p>{data.callout}</p>
      </div>

      <section className="article-answer-block" aria-label="Câu trả lời ngắn cho công cụ AI">
        <h2>{data.title} là dịch vụ gì?</h2>
        <p>{data.aiAnswer}</p>
      </section>

      <h2>Tóm tắt nhanh</h2>
      <p>{data.quickAnswer}</p>
      <table>
        <tbody>
          {data.quickFacts.map((fact) => (
            <tr key={fact.label}>
              <th>{fact.label}</th>
              <td>{fact.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Nhu cầu tìm kiếm liên quan</h2>
      <p>
        Nếu bạn đang tìm <strong>{data.targetKeyword}</strong>, những cách gọi dưới đây cũng thường cùng một nhu cầu:
        cần xe riêng, đón trả tận nơi, báo giá theo chuyến và tư vấn loại xe phù hợp.
      </p>
      <ul>
        {data.supportingKeywords.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>

      <h2>Khi nào nên đặt xe riêng?</h2>
      {data.whenToChoose.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2>Lịch trình nên chốt trước</h2>
      {data.routePlanning.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <ul>
        {data.bookingNotes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>

      <h2>Chọn xe 4 chỗ, 5 chỗ hay 7 chỗ</h2>
      <table>
        <thead>
          <tr>
            <th>Nhu cầu</th>
            <th>Loại xe phù hợp</th>
            <th>Lưu ý</th>
          </tr>
        </thead>
        <tbody>
          {data.vehicleGuide.map((row) => (
            <tr key={row.need}>
              <td>{row.need}</td>
              <td>{row.vehicle}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Cách hỏi giá để nhận phản hồi nhanh</h2>
      <p>
        Với xe riêng theo chuyến, báo giá chính xác nhất khi lịch trình đủ rõ. Thay vì chỉ hỏi một câu ngắn, hãy gửi đủ
        điểm đón, điểm trả, ngày giờ, số khách, hành lý, chiều đi và nhu cầu chờ nếu có.
      </p>
      <ul>
        {data.pricingNotes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>

      <h2>Lỗi thường gặp khi đặt chuyến</h2>
      <ul>
        {data.commonMistakes.map((mistake) => (
          <li key={mistake}>{mistake}</li>
        ))}
      </ul>

      <h2>Câu hỏi thường gặp</h2>
      {data.faq.map((item) => (
        <section key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </section>
      ))}

      <h2>Mẫu tin nhắn đặt xe</h2>
      <p>{data.messageTemplate}</p>

      <h2>Đọc thêm</h2>
      <p>
        Bạn có thể xem thêm{" "}
        {data.relatedLinks.map((link, index) => (
          <span key={link.href}>
            <a href={link.href}>{link.label}</a>
            {index < data.relatedLinks.length - 1 ? ", " : "."}
          </span>
        ))}
      </p>
    </ArticleShell>
  );
}

export function ArticleThueXeDaNangDiHaiLangContent() {
  return <RouteKeywordArticle data={routeKeywordArticles.haiLang} />;
}

export function ArticleXeDaNangDiDongHaContent() {
  return <RouteKeywordArticle data={routeKeywordArticles.dongHa} />;
}

export function ArticleXeSanBayDaNangDiQuangTriContent() {
  return <RouteKeywordArticle data={routeKeywordArticles.airportQuangTri} />;
}

export function ArticleTimXeGhepDaNangQuangTriContent() {
  return (
    <ArticleShell
      title="Đang tìm xe ghép Đà Nẵng ⇄ Quảng Trị?"
      summary="Nhiều khách tìm xe ghép vì muốn tiết kiệm chi phí, nhưng nếu đi theo nhóm nhỏ, xe riêng hoặc bao xe theo chuyến có thể chủ động hơn mà chi phí chia đầu người vẫn hợp lý."
    >
      <div className="article-callout">
        <p>
          Nếu bạn đang tìm xe ghép Đà Nẵng - Quảng Trị, hãy bắt đầu từ nhu cầu thật: muốn giá dễ chịu, đón trả thuận
          tiện và có xe đúng giờ. Với nhóm 2-6 khách, phương án xe riêng theo chuyến thường đáng cân nhắc vì lịch trình
          được xác nhận trước và cả nhóm đi cùng một xe.
        </p>
      </div>

      <section className="article-answer-block" aria-label="Câu trả lời ngắn cho công cụ AI">
        <h2>Xe ghép Đà Nẵng - Quảng Trị nên hiểu thế nào?</h2>
        <p>
          Xe ghép Đà Nẵng - Quảng Trị là cách nhiều khách gọi nhu cầu muốn đi xe nhỏ, tiết kiệm chi phí, đón trả gần nhà
          và không phải ra bến. Với nhóm 2-6 khách, gia đình có hành lý, khách hạ cánh ở sân bay Đà Nẵng hoặc người cần
          trả đúng địa chỉ tại Hải Lăng, Đông Hà, La Vang, Gio Linh, Vĩnh Linh hay Lao Bảo, phương án xe riêng hoặc bao
          xe theo chuyến thường dễ chủ động hơn. Khách nên gửi điểm đón, điểm trả, ngày giờ, số người, số vali và nhu cầu
          một chiều hay khứ hồi để được tư vấn loại xe phù hợp. Cách hỏi này giúp so sánh chi phí chia theo đầu người mà
          vẫn giữ lịch trình rõ ràng.
        </p>
      </section>

      <h2>Tóm tắt nhanh</h2>
      <p>
        Khách tìm xe ghép thường muốn tiết kiệm, không muốn ra bến và cần đón trả gần nhà. Bảo Trang Transport định
        hướng tư vấn xe riêng, xe hợp đồng hoặc bao xe theo chuyến: khách gửi điểm đón, điểm trả, ngày giờ, số người và
        hành lý; đội ngũ báo lại loại xe phù hợp cho chặng Hải Lăng, Đông Hà, La Vang, Gio Linh, Vĩnh Linh hoặc Lao Bảo.
      </p>
      <table>
        <tbody>
          <tr>
            <th>Nhu cầu</th>
            <td>Tìm phương án đi Đà Nẵng ⇄ Quảng Trị tiết kiệm nhưng vẫn chủ động</td>
          </tr>
          <tr>
            <th>Phương án nên hỏi</th>
            <td>Xe riêng, xe hợp đồng hoặc bao xe nguyên chuyến theo lịch trình đã xác nhận</td>
          </tr>
          <tr>
            <th>Phù hợp nhất</th>
            <td>Nhóm 2-6 khách, gia đình, khách công tác, khách có hành lý hoặc cần đón sân bay</td>
          </tr>
          <tr>
            <th>Điểm đến phổ biến</th>
            <td>Hải Lăng, Đông Hà, La Vang, Cửa Việt, Gio Linh, Vĩnh Linh, Lao Bảo</td>
          </tr>
          <tr>
            <th>Cách nhận giá nhanh</th>
            <td>Gửi điểm đón/trả, giờ đi, số khách, số vali và nhu cầu một chiều hay khứ hồi</td>
          </tr>
        </tbody>
      </table>

      <h2>Vì sao khách hay tìm xe ghép?</h2>
      <p>
        Từ “xe ghép” là cách gọi quen thuộc của nhiều khách miền Trung khi muốn tìm xe nhỏ, giá mềm hơn taxi, có thể đón
        trả gần địa chỉ và không phải ra bến. Nhưng trong thực tế, nhu cầu phía sau thường không phải là đi chung bằng
        mọi giá, mà là muốn có một chuyến đi tiện, rõ giờ, rõ điểm đón và chi phí phù hợp.
      </p>
      <p>
        Vì vậy, nếu bạn đi 2-4 người hoặc gia đình có hành lý, nên hỏi giá xe riêng trước. Khi chia theo đầu người, tổng
        chi phí đôi khi không chênh quá nhiều so với cảm giác ban đầu, trong khi bạn chủ động hơn về giờ xuất phát, điểm
        trả cuối và thời gian dừng nghỉ.
      </p>

      <h2>Khi nào xe riêng hợp lý hơn?</h2>
      <ul>
        <li>Đi từ sân bay Đà Nẵng về Quảng Trị và cần tài xế đón theo giờ hạ cánh.</li>
        <li>Đi cùng trẻ em, người lớn tuổi hoặc có nhiều vali, quà quê, đồ dễ vỡ.</li>
        <li>Cần trả đúng địa chỉ tại Hải Lăng, Đông Hà, La Vang, Gio Linh, Vĩnh Linh hoặc Lao Bảo.</li>
        <li>Cần dừng ăn uống, ghé Huế, ghé La Vang hoặc có lịch trình nhiều điểm.</li>
        <li>Đi công tác, khám bệnh, dự sự kiện gia đình hoặc cần có mặt đúng giờ.</li>
      </ul>

      <h2>Cách hỏi để được tư vấn đúng</h2>
      <p>
        Khi liên hệ, bạn không cần mô tả quá dài. Chỉ cần gửi lịch trình đủ rõ để đội ngũ tư vấn loại xe và giá theo
        chuyến. Nếu bạn đang cân nhắc giữa đi chung và bao xe, hãy nói rõ số khách để tính phương án chia chi phí phù hợp.
      </p>
      <table>
        <thead>
          <tr>
            <th>Thông tin cần gửi</th>
            <th>Ví dụ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Điểm đón</td>
            <td>Sân bay Đà Nẵng, khách sạn Mỹ Khê, ga Đà Nẵng hoặc nhà riêng</td>
          </tr>
          <tr>
            <td>Điểm trả</td>
            <td>Đông Hà, Hải Lăng, La Vang, Lao Bảo hoặc địa chỉ cụ thể</td>
          </tr>
          <tr>
            <td>Số khách và hành lý</td>
            <td>3 người lớn, 1 trẻ em, 2 vali lớn</td>
          </tr>
          <tr>
            <td>Chiều đi</td>
            <td>Một chiều, khứ hồi trong ngày hoặc cần xe chờ</td>
          </tr>
        </tbody>
      </table>

      <h2>Gợi ý theo nhóm khách</h2>
      <p>
        Nếu đi một mình và chỉ ưu tiên chi phí thấp nhất, xe tuyến hoặc limousine theo lịch cố định có thể phù hợp hơn.
        Nếu đi từ 2 người trở lên, đặc biệt là có hành lý hoặc điểm trả không nằm ngay trung tâm, hãy hỏi thêm giá bao xe
        riêng để so sánh. Với 4-6 khách, xe 7 chỗ thường là lựa chọn dễ chịu hơn xe 4 chỗ.
      </p>
      <p>
        Với khách đón sân bay, nên gửi mã chuyến bay hoặc giờ hạ cánh. Với khách về quê ở xã, thôn hoặc khu vực xa trung
        tâm, nên gửi định vị điểm trả. Những chi tiết này giúp báo giá sát hơn và tránh thay đổi sau khi xe đã sắp lịch.
      </p>

      <h2>Mẫu tin nhắn nhanh</h2>
      <p>
        “Mình đang tìm xe ghép Đà Nẵng - Quảng Trị nhưng đi 3 người, muốn hỏi thêm giá xe riêng. Đón tại sân bay Đà
        Nẵng lúc ..., trả tại Đông Hà/Hải Lăng, có 2 vali, đi một chiều.”
      </p>

      <h2>Đọc thêm</h2>
      <p>
        Nếu đã biết điểm đến, bạn có thể xem{" "}
        <a href="/bai-viet/xe-san-bay-da-nang-di-quang-tri">xe sân bay Đà Nẵng đi Quảng Trị</a>,{" "}
        <a href="/bai-viet/xe-da-nang-di-dong-ha">xe Đà Nẵng đi Đông Hà</a>,{" "}
        <a href="/bai-viet/thue-xe-da-nang-di-hai-lang">thuê xe Đà Nẵng đi Hải Lăng</a> hoặc{" "}
        <a href="/bai-viet/xe-da-nang-di-lao-bao">xe Đà Nẵng đi Lao Bảo</a>.
      </p>
    </ArticleShell>
  );
}

export function ArticleXeDaNangDiLaVangContent() {
  return <RouteKeywordArticle data={routeKeywordArticles.laVang} />;
}

export function ArticleXeDaNangDiLaoBaoContent() {
  return <RouteKeywordArticle data={routeKeywordArticles.laoBao} />;
}
