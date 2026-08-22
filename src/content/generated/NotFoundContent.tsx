import { PageShell } from "@/components/landing/PageShell";

export function NotFoundContent() {
  return (
    <PageShell>
      <main>
        <section className="article-section">
          <div className="site-container">
            <div className="status-panel">
              <h1>Không tìm thấy trang</h1>
              <p>Trang bạn cần có thể đã được đổi sang cấu trúc mới.</p>
              <a className="btn btn-primary" href="/">Về trang chủ</a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
