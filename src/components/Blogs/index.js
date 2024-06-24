import React from "react";
import { blogs } from "../../data/blogs";
import "./styles.css";

export const Blogs = () => {
  return (
    <section className="blogs">
      <h1>Blogs</h1>
      <div className="blog-cards">
        {blogs.map((blog) => {
          let { id, title, intro, link } = blog;
          intro = intro.substring(0, 700) + "...";
          return (
            <article key={id} className="blog-card">
              <h3>{title}</h3>
              <p>
                {intro}{" "}
                <a
                  href={link}
                  className="blog-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More
                </a>{" "}
              </p>
            </article>
          );
        })}
      </div>
      {/* medium ka link idhr */}
      <a
        href="https://mitulgarg.medium.com/"
        className="hero-btn"
        target="_blank"
        rel="noreferrer"
      >
        All Blogs
      </a>
    </section>
  );
};
