import React, { ReactElement, FC } from "react";
import { Box } from "@mui/material";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root: FC<any> = (): ReactElement => {
  const { state } = useNavigation();

  return (
    <Box
      sx={{
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "top",
        alignItems: "left",
      }}
    >
      <Navbar />
      {state === "loading" ? "LOADING" : ""}
      <Box
        sx={{
          flexGrow: 1,
          padding: "1rem",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Root;
