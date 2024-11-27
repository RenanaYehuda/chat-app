import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import ContactUsers from "./components/ContactUsers/ContactUsers";
import ChatPage from "./components/ChatPage/ChatPage";
import { Context } from "./Context";
import { useContext } from "react";

function App() {
  const { isConnectedUser } = useContext(Context);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {isConnectedUser && (
          <Route path="/contactUsers" element={<ContactUsers />} />
        )}
        {isConnectedUser && <Route path="/chat" element={<ChatPage />} />}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
