import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     
        <Routes>


          {/* <Route path="/varta" element={<VartaPage />} />
          <Route path="/detail" element={<AstrologerDetails />} />
          <Route path="/rechargenow" element={<WalletMoneyAdd />} /> */}

          {/* FALLBACK */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
