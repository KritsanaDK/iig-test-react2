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
import { useState } from "react";
import { type } from "os";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";

export default function Login() {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters")
      .max(12, "Username must not exceed 12 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
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
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
