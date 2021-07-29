import React, { useEffect, useRef } from "react";
import { useInput } from "./lib/hooks";
import { fetchPost } from "./lib/usefetch";
import { usePosts } from "./PostProvider";

export default function AddPostForm({onFormClose}) {
  const [titleProps, resetTitle] = useInput("");
  const [textProps, resetText] = useInput("");
  const { addPost } = usePosts();

  // Focus on form when it renders
  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  // On submitting the form
  const submit = e => {
    e.preventDefault();
    onFormClose();
    fetchPost('http://localhost:3000/blog/api/add', {title: titleProps.value, text: textProps.value})
      .then(result => {
        if(result) {
          console.log(`POST result: ${result}`)
          addPost(result._id, result.title, result.text, result.author, result.created);
        }
      }
    );
    resetTitle();
    resetText();
  };

  // The post POST form
  return (
      <div className="box shadow p-3 mb-5 rounded">
          <form method="POST" id="post-form" onSubmit={submit}>
              <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input {...titleProps} type="text" ref={inputElement} required placeholder="Say something..."
                      className="form-control" maxLength="50"/>
              </div>
               <div className="mb-3">
                  <label className="form-label">Text</label>
                  <textarea {...textProps} id="post-text" required
                      placeholder="Say something..." />
               </div>
               <button  type="submit" className="button-submit">Submit</button>
              <button className="button-cancel m-3" onClick={onFormClose}>Cancel</button>
           </form>
      </div>
  );
}