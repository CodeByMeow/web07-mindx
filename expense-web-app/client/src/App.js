import { GlobalStyle } from "./global/styles/Global.style";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Chart from "./pages/Chart";
import Footer from "./components/Footer";
import TransactionProvider from "./contexts/GlobalState";
import CategoriesContextProvider from "./contexts/CategoriesContext";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CategoriesContextProvider>
        <TransactionProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
          <Footer />
        </TransactionProvider>
      </CategoriesContextProvider>
    </LocalizationProvider>
  );
}

export default App;
