import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Formik } from "formik";
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

export default function Regis(props) {
  const classes = useStyles();
  // const [account, setAccount] = React.useState({
  //   username: "",
  //   password: "",
  // });
  function showFromRegis({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) {
    return (
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={values.username}
          onChange={handleChange}
          id="username"
          label="Email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={values.password}
          onChange={handleChange}
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Button
          onClick={() => props.history.goBack()}
          fullWidth
          size="small"
          color="primary"
        >
          Go Back
        </Button>
      </form>
    );
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`${process.env.PUBLIC_URL}/imgs/authen_header.jpg`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Register your email
        </Typography>
        <Formik
          initialValues={{ username: "admin", password: "1234" }}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values));
          }}
        >
          {(props) => showFromRegis(props)}
        </Formik>
      </CardContent>
    </Card>
  );
}
