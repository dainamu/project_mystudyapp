import React from "react";
import Link from "next/link";

const Form = ({ type, post, setpost, submitting, handleSubmit }) => {
  return (
    <section>
      <h1>
        <span className="">{type} Content</span>
      </h1>
      <p>学習内容を記録します</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Your Study Record</span>
        </label>
        <textarea
          value={post.content}
          placeholder="学習記録を記載"
          onChange={(e) => setpost({ ...post, content: e.target.value })}
          required
        ></textarea>
        <label htmlFor="">
          Tag <span>(#product, #webdevelopment)</span>
        </label>
        <textarea
          value={post.tag}
          placeholder="#tag"
          onChange={(e) => setpost({ ...post, tag: e.target.value })}
          required
          className="form_input"
        ></textarea>
        <div>
          <Link href="/">Cancel</Link>
          <button type="submit" disabled={submitting}>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
