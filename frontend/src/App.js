import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "views/home";
import Login from "views/login";
import Profile from "views/profile";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { Helmet } from "react-helmet";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to ShareMemo</title>
      </Helmet>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={
              isAuth ? <Home /> : <Navigate to="/"/>
            } />
            <Route path="/profile/:userId" element={
              isAuth ? <Profile /> : <Navigate to="/"/>
            } />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
