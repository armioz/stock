import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [account, setAccount] = React.useState({
    username: "",
    password: "",
  });
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/imgs/authen_header.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Login
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            // dispatch(loginActions.login({ ...account, ...props }));
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.username}
            onChange={(e) => {
              setAccount({
                ...account,
                username: e.target.value,
              });
            }}
            value={account.username}
            onChange={(e) => {
              setAccount({ ...account, username: e.target.value });
            }}
            id="username"
            label="Username"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={account.password}
            onChange={(e) => {
              setAccount({
                ...account,
                password: e.target.value,
              });
            }}
            value={account.password}
            onChange={(e) => {
              setAccount({ ...account, password: e.target.value });
            }}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {JSON.stringify(account)}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            onClick={() => props.history.push("/regis")}
            fullWidth
            size="small"
            color="primary"
          >
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
