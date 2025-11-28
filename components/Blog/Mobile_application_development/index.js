import Image from "next/image";
import styles from "./blog.module.scss";
import RelevantPosts from "../RelevantPosts";
import Link from "next/link";

export default function BlogPostPage({ data }) {
  return (
    <main className={styles.pageContainer}>
      <div className="container">
        {/* Top Banner + Meta Info */}
        <article className={styles.mainHeader}>
          <Link href="/blog" className={styles.button_link}>
            <div className={styles.button_icon}>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8332 10.0003H4.1665M4.1665 10.0003L9.99984 15.8337M4.1665 10.0003L9.99984 4.16699"
                  stroke="CurrentColor"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>All posts</div>
          </Link>

          <p className={styles.category}>{data.category}</p>
          <div className={styles.post_title_wrapper}>
            <h1>{data.title}</h1>
            <p className={styles.intro}>{data.intro}</p>
          </div>
          <div className={styles.imagePlaceholder}>
            <Image
              src={data.banner}
              alt={data.title}
              width={1270}
              height={508}
            />
          </div>
          <div className={styles.authorInfo}>
            <span>
              Written by <strong>{data.author}</strong>
            </span>
            <span>
              Published on <strong>{data.date}</strong>
            </span>
          </div>
        </article>

        {/* Blog Layout with Sidebar */}
        <div className={styles.blogLayout}>
          {/* Left Column: Main Content */}
          <article className={styles.mainContent}>
            {data.content.map((block, index) => {
              if (block.type === "p")
                return <p key={index}>{block.text}</p>;

              if (block.type === "h2")
                return <h2 key={index}>{block.text}</h2>;

              if (block.type === "h3")
                return <h3 key={index}>{block.text}</h3>;

              if (block.type === "h5")
                return <h5 key={index}>{block.text}</h5>;

              if (block.type === "image") {
                return (
                  <figure key={index} className={styles.figure_type_image}>
                    <Image
                      src={block.src}
                      alt={block.caption}
                      width={828}
                      height={566}
                    />
                    <figcaption>{block.caption}</figcaption>
                  </figure>
                );
              }

              return null;
            })}
          </article>

          {/* Right Column: Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Newsletter signup</h3>
              <p>
                No spam. Just the latest releases and tips, interesting
                articles, and exclusive interviews in your inbox every week.
              </p>
              <div className={styles.newsletterForm}>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
              <div className={styles.text_size_small}>
                Read about our{" "}
                <Link
                  target="_blank"
                  href="#"
                  className={styles.text_style_link}
                >
                  privacy policy
                </Link>
                .
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3>Looking to hire?</h3>
              <p>
                Based on your job role requirements, our data-driven
                algorithm will automatically shortlist candidates.
              </p>
              <div className={styles.post_free_credit_text}>
                Get 3 free credits to unlock full candidate details when
                you sign up
              </div>
              <button className={styles.ctaButton}>Register Free</button>
            </div>
          </aside>
        </div>
        <RelevantPosts />
      </div>
    </main>
  );
}
