import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { routes as appRoutes } from "./routes/routes";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./pages/Root";
import ReactReleases, { releasesLoader } from "./pages/Releases";

function App() {
  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route key="root" path="/" element={<Root />}>
        <Route key="home" index element={<Home />} />
        <Route key="about" path="about" element={<About />} />
        <Route
          key="releases"
          path="releases"
          element={<ReactReleases />}
          loader={releasesLoader}
        />
      </Route>
      // appRoutes.map((route) => (
      //   <Route
      //     key={route.key}
      //     path={route.path}
      //     element={<route.component />}
      //     loader={route.loader}
      //   />
      // ))
    )
  );

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline component from MUI. As per the documentation, MUI uses this class to reset CSS. */}
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
