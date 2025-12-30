import React from "react";
import { useRouter } from "next/router";
import BlogPostPage from "../../../components/Blog/Mobile_application_development";
import { blogPosts } from "../../../constant/blog/blog-list";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  // id ko number me convert karo
  const blog = blogPosts.find((b) => b.id == id);
  console.log(blog);
  if (!blog) {
    return (
      <p style={{ textAlign: "center", padding: "500px" }}>
        Blog not found
      </p>
    );
  }
 
  return <BlogPostPage data={blog} />;
}
