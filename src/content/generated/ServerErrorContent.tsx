import { PageShell } from "@/components/landing/PageShell";

export function ServerErrorContent() {
  return (
    <PageShell>
      <main>
        <section className="article-section">
          <div className="site-container">
            <div className="status-panel">
              <h1>Trang đang tạm gián đoạn</h1>
              <p>Vui lòng gọi hotline hoặc nhắn Zalo để được hỗ trợ đặt xe ngay.</p>
              <a className="btn btn-primary" href="/">Về trang chủ</a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
