import React, { useReducer, useState, useLayoutEffect} from 'react';
import AddPostForm from "./AddPostForm"
import PostList from "./PostList";
import './styles.scss'
import { useSpring, animated } from 'react-spring';

export default function App() {
  const [isFormVisible, setFormVisible] = useReducer((state) => !state, false);
  const { x } = useSpring({ from: { x: 0 }, x: isFormVisible ? 1 : 0, config: { duration: 500 } })

  const onAnimationEnd = () => {
    console.log("Animation Ended");
  }

  return (
    <>
      <h1 className="mt-5 mb-5 text-center">Bloggington: Blogging App</h1>
      { isFormVisible &&
      <animated.div
      style={{
        opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
        transform: x
          .to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 10],
            output: [0, .2, .4, .6, .8, 1]
          })
          .to(x => `scale(${x})`),
          onRest: () => onAnimationEnd(),
          onStart: () => onAnimationEnd()
      }}>
      <h3 className="mt-5 mb-5 text-center">Hey, Guest, want to write something?</h3>
      <AddPostForm onFormClose={setFormVisible}/>
    </animated.div>
    }
      <br></br>
      <PostList/>
      <button style={{position: "fixed", bottom: "30px", right: "20px"}} className="circle" onClick={setFormVisible}>+</button>
    </>
  );
}