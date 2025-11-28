"use client";
import React, { useState } from "react";
import styles from "./blog.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { blogPosts } from "../../../constant/data";

export default function BlogList() {
    const router = useRouter();

 const handleClick = (id) => {
    router.push(`/blog/${id}`);
  };


  // Unique categories
  // const categories = ["All posts", ...new Set(blogs.map((b) => b.category))];
  const categories =[
    'All Posts',
    'Web Developement',
    'Mobile Application',
    'Wordpress Developement',
  ]

  const [activeCategory, setActiveCategory] = useState("All Posts");

  // Filtered blogs
  const filteredBlogs =
    activeCategory === "All Posts"
      ? blogPosts
      : blogPosts.filter((b) => b.category === activeCategory);

  return (
    <section className={styles.blogList}>
      <div className="container">
        {/* Navigation Tabs */}
        <div className={styles.navTabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tabBtn} ${
                activeCategory === cat ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="row mt-4">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="col-xl-4 col-lg-4 col-md-6 col-12" onClick={()=>{handleClick(blog.id)}}>
              <div className={styles.card}>
                {/* Blog Image */}
                <div className={styles.imgBox}>
                  <Image
                    src={blog.banner}
                    alt={blog.title}
                    width={500}
                    height={300}
                  />
                </div>

                {/* Blog Content */}
                <div className={styles.content}>
                  <span className={styles.category}>{blog.category}</span>
                  <h3 className={styles.title}>{blog.title}</h3>

                  {/* Author Info */}
                  <div className={styles.authorBox}>
                    <Image
                      src={blog.authorImg}
                      alt={blog.author}
                      width={40}
                      height={40}
                      className={styles.authorImg}
                    />
                    <div>
                      <p className={styles.author}>{blog.author}</p>
                      <span className={styles.date}>{blog.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredBlogs.length === 0 && (
            <p className="text-center">No blogs found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}
