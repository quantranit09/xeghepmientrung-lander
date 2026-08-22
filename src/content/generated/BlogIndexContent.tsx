import { PageShell } from "@/components/landing/PageShell";
import { articleLinks } from "./Shared";

export function BlogIndexContent() {
  return (
    <PageShell>
      <main>
        <section className="article-hero">
          <div className="site-container article-hero__inner">
              <p className="section-kicker">Cẩm nang</p>
              <h1>Cẩm nang xe Đà Nẵng ⇄ Quảng Trị</h1>
              <p>
                Hướng dẫn chọn xe 4 chỗ, 5 chỗ, 7 chỗ, chuẩn bị lịch trình và đặt xe hợp đồng theo chuyến một cách rõ ràng.
              </p>
          </div>
        </section>
        <section className="content-section">
          <div className="site-container article-list-grid">
              {articleLinks.map((article) => (
                <a className="guide-card" href={article.href} key={article.href}>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <span>Đọc bài</span>
                </a>
              ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
