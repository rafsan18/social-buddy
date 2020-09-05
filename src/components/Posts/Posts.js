import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  end: {
    height: "100%",
  },
});

const Posts = (props) => {
  const { title, body, id } = props.post;

  const classes = useStyles();

  const history = useHistory();

  const handleButton = (postId) => {
    const url = `/posts/${postId}`;
    history.push(url);
  };

  return (
    <Grid item xs>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.end}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Post: {id}
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleButton(id)} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Posts;
