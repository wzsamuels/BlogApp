import React, {useState} from "react";
import {usePosts} from "./PostProvider";
import parseDateTime from "./lib/parsedatetime";

export default function Post(props) {
  const [isVisible, setIsVisible] = useState(true);
  const { removePost } = usePosts();
  return (
    <>
      <div className="container box p-3 mb-5 rounded">
        <h2>{props.title}</h2>
        <h4>by {props.author}</h4>
        { isVisible && <PostBody {...props}/> }
        <button className="button-primary mt-3" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"}</button>
        <button className="button-cancel ms-3 mt-3" onClick={() => removePost(props._id)}>
                Delete</button>
      </div>
    </>
  );
}
function PostBody({ text = "Empty", created = new Date() }) {                  
  return (
    <>
      <div className="content-text">
        <p>{text}</p>
      </div>
      <div className="mt-2">
        Posted {parseDateTime(created)}
      </div>
    </>
  );
}