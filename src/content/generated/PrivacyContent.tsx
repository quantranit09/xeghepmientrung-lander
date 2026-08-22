import { PageShell } from "@/components/landing/PageShell";

export function PrivacyContent() {
  return (
    <PageShell>
      <main>
        <section className="article-section">
          <div className="site-container">
            <article className="article-panel">
              <h1>Chính sách bảo mật</h1>
              <p>
                Chúng tôi chỉ thu thập thông tin cần thiết để tư vấn và xác nhận chuyến xe riêng hoặc xe hợp đồng.
              </p>
              <h2>Thông tin được thu thập</h2>
              <p>Họ tên, số điện thoại, điểm đón trả, ngày giờ đi, số khách, loại xe mong muốn và ghi chú chuyến đi.</p>
              <h2>Mục đích sử dụng</h2>
              <p>Thông tin được dùng để báo giá, xác nhận lịch trình, phân công tài xế và hỗ trợ khách hàng trước/sau chuyến.</p>
              <h2>Chia sẻ dữ liệu</h2>
              <p>Thông tin chuyến đi chỉ được chia sẻ cho bộ phận tư vấn và tài xế liên quan đến chuyến đã xác nhận.</p>
              <h2>Liên hệ</h2>
              <p>Nếu cần cập nhật hoặc xoá thông tin đã gửi, vui lòng liên hệ hotline hoặc Zalo trên website.</p>
            </article>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
