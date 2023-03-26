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
  createTheme,
  ThemeProvider
} from "@mui/material";
import { Box } from "@mui/system";

const theme = createTheme({

  palette: {
    // mode: "dark",
    primary: {
      main: "#333",
      dark: "#ccc"
    },
    secondary: {
      main: "#ddd",
      dark: "#333"
    }
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
            <AppBar>
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Shelfy
                </Typography>
              </Toolbar>
            </AppBar>

            <Box component="main" sx={{ pt: 8 }}>
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
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default App;
