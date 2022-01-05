import React from "react";
import Navigations from "./routes/Navigations";
import { AuthProvider } from './/context/AuthContext'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigations />
      </AuthProvider>
    </div>
  );
}

export default App;
