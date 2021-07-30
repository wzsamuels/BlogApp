import React, { useState } from 'react';
import AddPostForm from "./AddPostForm"
import PostList from "./PostList";
import './styles.scss'
import { useSpring, animated } from 'react-spring';
import BottomAppBar from "./nav";
import { ThemeProvider } from '@material-ui/styles';
import Typography from "@material-ui/core/Typography";
import { darkTheme} from "./material-styles"

export default function App() {
  const [isFormVisible, setFormVisible] = useState(false);
  const { x } = useSpring({ from: { x: 0 }, x: isFormVisible ? 1 : 0, config: { duration: 500 } })

  const openForm = () => {
    setFormVisible(true);
  }

  const closeForm = () => {
    setFormVisible(false);
  }

  const onAnimationEnd = () => {
    console.log("Animation Ended");
  }


  return (
    <div className="App">

      <ThemeProvider theme={darkTheme}>
        <Typography style={{marginTop: "5px", textAlign: "center"}} variant="h3" color="inherit" noWrap>
          Bloggington
        </Typography>
        { isFormVisible &&
          <animated.div
            style={{
              opacity: x.to({ range: [0, 1], output: [0, 1] }),
              transform: x
                .to({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 10],
                  output: [0, .2, .4, .6, .8, 1.2]
                })
                .to(x => `scale(${x})`),
                onRest: () => onAnimationEnd(),
                onStart: () => onAnimationEnd()
            }}>
            <h3 className="mt-5 mb-5 text-center">Hey, Guest, want to write something?</h3>
            <AddPostForm onCloseForm={closeForm}/>
          </animated.div>
        }
        <br/>
        <PostList/>
        <BottomAppBar onAddClick={openForm}/>
      </ThemeProvider>
    </div>
  );
}//<button style={{position: "fixed", bottom: "30px", right: "20px"}} className="circle" onClick={setFormVisible}>+</button>