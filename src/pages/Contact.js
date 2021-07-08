import React from "react";

export const Contact = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className="contact">
      <article className="contact-form">
        <h3>Get In Touch</h3>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="form-control"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="message"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            submit here
          </button>
        </form>
      </article>
    </div>
  );
};
