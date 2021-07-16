import {
  Container,
  CssBaseline,
  createTheme,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminScreen from "./screans/AdminScreen";
import ChooseScreen from "./screans/ChooseScreen";
import CompleteOrderScreen from "./screans/CompleteOrderScreen";
import HomeScreen from "./screans/HomeScreen";
import OrderScreen from "./screans/OrderScreen";
import PaymentScreen from "./screans/PaymentScreen";
import QueueScreen from "./screans/QueueScreen";
import ReviewScreen from "./screans/ReviewScreen";
import SelectPaymentScreen from "./screans/SelectPaymentScreen";
import { Store } from "./Store";

const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    },
  },
  palette: {
    primary: { main: "#ff1744" },
    secondary: {
      main: "#118e16",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  const { state } = useContext(Store);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={state.widthScreen ? "lg" : "sm"}>
          <Paper>
            <Route path="/" component={HomeScreen} exact={true}></Route>
            <Route path="/choose" component={ChooseScreen} exact={true}></Route>
            <Route path="/order" component={OrderScreen} exact={true}></Route>
            <Route path="/review" component={ReviewScreen} exact></Route>
            <Route
              path="/select-payment"
              component={SelectPaymentScreen}
              exact
            ></Route>
            <Route path="/payment" component={PaymentScreen} exact></Route>
            <Route
              path="/complete"
              component={CompleteOrderScreen}
              exact
            ></Route>
            <Route path="/admin" component={AdminScreen} exact></Route>
            <Route path="/queue" component={QueueScreen} exact></Route>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
