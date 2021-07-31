import React, {useState} from "react";
import {usePosts} from "./PostProvider";
import parseDateTime from "./lib/parsedatetime";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import {Box, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./material-styles";
import {KeyboardArrowDown, KeyboardArrowUp, ThumbUp} from "@material-ui/icons";

export default function Post(props) {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(true);
  const { removePost } = usePosts();
  return (
    <Grid container>
      <Grid item xs={1}>
        <IconButton onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <KeyboardArrowUp/> : <KeyboardArrowDown/>}
        </IconButton>
      </Grid>
      <Grid item xs={11}>
        <div className="box p-3 mb-5 rounded">
          <Box component="span" className={classes.box}>
            <Typography variant="h4">{props.title}</Typography>
            <IconButton edge="end" aria-label="delete" onClick={() => removePost(props._id)}>
              <DeleteIcon color="error"/>
            </IconButton>
          </Box>
          <h4>by {props.author}</h4>
          { isVisible && <PostBody {...props}/> }
        </div>
      </Grid>
    </Grid>
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
        <IconButton color="secondary"><ThumbUp/></IconButton>
      </div>
    </>
  );
}

