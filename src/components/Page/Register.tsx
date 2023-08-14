import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Label } from "@mui/icons-material";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import { useState, useContext, useEffect } from "react";
import { type } from "os";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { FiCamera } from "react-icons/fi";
import Stack from "@mui/material/Stack";
import { UserContext } from "../../App";
import { async } from "q";
import React, { Fragment } from "react";

function Register() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Fragment>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            React Hook Form - Material UI - Validation
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="fullname"
                label="Full Name"
                fullWidth
                margin="dense"
                {...register("fullname")}
                error={errors.fullname ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.fullname?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="username"
                label="Username"
                fullWidth
                margin="dense"
                {...register("username")}
                error={errors.username ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.username?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                {...register("password")}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Fragment>
    </Container>
  );
}

export default Register;
