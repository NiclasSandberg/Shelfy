import "./css/App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductView from "./components/ProductView";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import {
  AppBar,
  Toolbar,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  ThemeProvider
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import logo from './images/shelfy-logo.png'

const theme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#D9D9D9",
      dark: "#ccc",
    },
    secondary: {
      main: "#ddd",
      dark: "#333"
    },
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // fontSize: "3rem"
          padding: "1rem",
          minWidth: "6rem"
        }
      }

    }
  }
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box display={"flex"} flexDirection="column">
          <BrowserRouter>
         
            <header>
            <Link to={"/"} style={{ textDecoration: 'none', color: "black" }}>
              <img src={logo} alt="shelfy-logo" />
              </Link>
            </header>
            <div className="main-wrapper">
            <div className="main-wrapper2">
              <Box component="main" sx={{ p: 2 }}>
                <Routes>
                  <Route path="/" element={<ProductList />} />
                  <Route path="/products/:productId" element={<ProductView />} />
                  <Route path="/products/new" element={<CreateProduct />} />
                  <Route
                    path="/products/:productId/edit"
                    element={<EditProduct />}
                  />
                </Routes>

              </Box>

              </div>
            </div>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
