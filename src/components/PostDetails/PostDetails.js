import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Comments from "../Comments/Comments";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
});

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const { title, body } = post;
  const classes = useStyles();
  const [comments, setComments] = useState([]);

  // for individual post
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  // for comments fetching
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Post: {postId}
            </Typography>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <hr />

            <Typography variant="body2" component="p">
              {body}
            </Typography>
          </CardContent>
        </Card>
        {comments.map((comment) => (
          <Comments key={comment.id} comment={comment}></Comments>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default PostDetails;
