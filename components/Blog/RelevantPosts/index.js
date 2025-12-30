"use client";
import Image from "next/image";
import styles from "./RelevantPosts.module.scss";
import Link from "next/link";

const posts = [
  {
    category: "Web Development",
    title: "What is Web Development",
    link: "/blog/what-is-web-development",
    author: "Mr. Saif",
    date: "september 29, 2025",
    authorImg:
      "/images/blog/authorsmen.png",
  },
  {
    category: "Mobile Application",
    title: "What is Mobile App Development",
    link: "/blog/what-is-mobile-application-development",
    author: "Mr. Saif",
    date: "september 28, 2025",
    authorImg:
      "/images/blog/authorsmen.png",
  },
  {
    category: "Wordpress Developement",
    title:
      "What is Wordpress Development",
    link: "/blog/what-is-wordpress-development",
    author: "Mr. Saif",
    date: "November 28, 2025",
    authorImg:
      "/images/blog/authorsmen.png",
  },
  {
    category: "Mobile Application",
    title:
      "What is Application Development? A Detailed Guide to 2025",
    link: "/blog/What-is-application-development-a-detailed-guide-to-2025",
    author: "Mr. Saif",
    date: "November 25, 2025",
    authorImg:
      "/images/blog/authorsmen.png",
  },
  {
    category: "Web Developement",
    title:
      "Expert Web Development Company in USA",
    link: "Professional-Web-Development-Company",
    author: "Mr. Saif",
    date: "september 26, 2025",
    authorImg:
      "/images/blog/authorsmen.png",
  },
  // 👉 add rest of posts in same format
];

export default function RelevantPosts() {
  return (
    <section className={styles.container}>
      <h3 className={styles.heading}>Other posts you may enjoy</h3>
      <div className={styles.grid}>
        {posts.map((post, idx) => (
          <div key={idx} className={styles.card}>
            <Link href={post.link} className={styles.titleLink}>
              <h4 className={styles.title}>{post.title}</h4>
            </Link>
            <div className={styles.meta}>
              <div className={styles.authorImage}>
                <Image
                  src={post.authorImg}
                  alt={post.author}
                  width={38}
                  height={38}
                />
              </div>
              <div>
                <p className={styles.author}>{post.author}</p>
                <p className={styles.date}>{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
