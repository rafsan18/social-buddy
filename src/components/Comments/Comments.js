import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const Comments = (props) => {
  const classes = useStyles();

  const { name, body, email, id } = props.comment;
  const [image, setImage] = useState();
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setImage(data.results[0].picture.large));
  }, []);

  return (
    <Card className={classes.root}>
      <img
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          alignSelf: "center",
        }}
        src={image}
        alt=""
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {body}
          </Typography>
          <Typography>{email}</Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default Comments;
