import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./global/styles/Global.style";
import HomePage from "./pages/HomePage";
import ChartPage from "./pages/ChartPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TransactionProvider from "./contexts/GlobalState";
import CategoriesContextProvider from "./contexts/CategoriesContext";
import AuthState from "./contexts/Auth/AuthState";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CategoriesContextProvider>
          <TransactionProvider>
            <GlobalStyle />
            <AuthState>
              <Routes>
                <Route
                  path="/"
                  element={<PrivateRoute component={HomePage} />}
                />
                <Route path="/chart" element={<ChartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </AuthState>
          </TransactionProvider>
        </CategoriesContextProvider>
      </LocalizationProvider>
    </HelmetProvider>
  );
}
export default App;
