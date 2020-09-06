import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Images from "../Images/Images";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingLeft: "20px",
    borderRadius: "10px",
    marginBottom: "5px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
}));

const Comments = (props) => {
  const classes = useStyles();

  const { name, body, email } = props.comment;

  //  for fetching image
  const [image, setImage] = useState();
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setImage(data.results[0].picture.large))
      .catch(() => setImage("https://i.ibb.co/gvN5szv/kakashi.png"));
  }, []);

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Images image={image}></Images>
            </Grid>
            <Grid item xs={9}>
              <Typography component="h5" variant="h5">
                {name}
              </Typography>
              <small>{email}</small>
            </Grid>
          </Grid>
          <hr />
          <Typography variant="subtitle2" color="textSecondary">
            {body}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default Comments;
