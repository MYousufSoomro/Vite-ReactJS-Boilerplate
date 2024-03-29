import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

function Copyright() {
  const navigate = useNavigate();

  const navigationHandler = (url) => {
    navigate(url);
  };

  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Typography
        variant="span"
        sx={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => navigationHandler("/")}
      >
        Muhammad Yousuf
      </Typography>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              <q>
                Life is really simple, but we insist on making it complicated.
              </q>
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
