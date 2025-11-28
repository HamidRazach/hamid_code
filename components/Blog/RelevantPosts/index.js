"use client";
import Image from "next/image";
import styles from "./RelevantPosts.module.scss";
import Link from "next/link";

const posts = [
  {
    category: "Web Development",
    title: "What is Web Development",
    link: "/blog/what-is-web-development",
    author: "Malvika Lahiri",
    date: "september 29, 2025",
    authorImg:
      "/images/blog/author.webp",
  },
  {
    category: "Mobile Application",
    title: "What is Mobile App Development",
    link: "/blog/what-is-mobile-application-development",
    author: "Malvika Lahiri",
    date: "september 28, 2025",
    authorImg:
      "/images/blog/authorsmen.webp",
  },
  {
    category: "Wordpress Developement",
    title:
      "What is Wordpress Development",
    link: "/blog/what-is-wordpress-development",
    author: "Malvika Lahiri",
    date: "November 28, 2025",
    authorImg:
      "/images/blog/author.webp",
  },
  {
    category: "Mobile Application",
    title:
      "What is Application Development? A Detailed Guide to 2025",
    link: "/blog/What-is-application-development-a-detailed-guide-to-2025",
    author: "Malvika Lahiri",
    date: "November 25, 2025",
    authorImg:
      "/images/blog/authorsmen.webp",
  },
  {
    category: "Web Developement",
    title:
      "Expert Web Development Company in USA",
    link: "https://shortlistme.com/blog/post/understanding-and-addressing-skill-mismatch-challenge",
    author: "Malvika Lahiri",
    date: "september 26, 2025",
    authorImg:
      "/images/blog/author.webp",
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
