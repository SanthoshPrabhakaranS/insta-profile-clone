import Main from "../components/main";
import Navbar from "../components/navbar";
import { Container } from "./App.styled";
import "../index.css";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";

function App() {
  const theme = createTheme();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Container>
        <Navbar />
        <Main />
      </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
