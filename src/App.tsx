import { Route, Routes } from "react-router";
import { MainLayout } from "./layout/MainLayout";
import { CartPage, Home, ProductPage } from "./pages";
import { LoginPage } from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Route>
        
      </Routes>
    </>
  );
}

export default App;
