import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Posts from "../Posts/Posts";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const classes = useStyles();

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Posts key={post.id} post={post}></Posts>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
