import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import * as S from "./Login.style";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../Context";
import { User } from "../../types/user";
import { users } from "../../jsons/users";

const Login = () => {
  const { setConnectedUser, setIsConnectedUser, isConnectedUser } =
    useContext(Context);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const user = isValidUser();

    if (user) {
      setIsConnectedUser(true);
      setConnectedUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/contactUsers");
    } else {
      setIsOpen(true);
      console.error("Invalid credentials. User does not exist.");
    }
  };

  const isValidUser = (): User | undefined => {
    return users.find(
      (user) => user.userName === userName && user.password === password
    );
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <S.Container>
      {!isConnectedUser ? (
        <>
          <S.Title>
            <Typography variant="h3">התחברות</Typography>
          </S.Title>
          <S.Login component="form" onSubmit={handleSubmit}>
            <TextField
              label="שם משתמש"
              variant="outlined"
              value={userName}
              style={{ width: "80%", marginBottom: "16px" }}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              label="סיסמה"
              variant="outlined"
              type="password"
              value={password}
              style={{ width: "80%", marginBottom: "16px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ width: "80%" }}
              disabled={!userName || !password}
            >
              התחברות
            </Button>
            <Dialog
              open={isOpen}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle>שם משתמש או סיסמה שגויים</DialogTitle>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  סגור
                </Button>
              </DialogActions>
            </Dialog>
          </S.Login>
        </>
      ) : (
        <Navigate to="/contactUsers" />
      )}
    </S.Container>
  );
};

export default Login;
