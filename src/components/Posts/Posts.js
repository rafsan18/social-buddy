import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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
  const { title, body } = props.post;

  const classes = useStyles();

  return (
    <Grid item xs>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.end}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Post
          </Typography>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Posts;
