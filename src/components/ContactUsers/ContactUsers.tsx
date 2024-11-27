import { Button, Typography } from "@mui/material";
import * as S from "./ContactUsers.style";
import CardContactUser from "../CardContactUser/CardContactUser";
import { users } from "../../jsons/users";
import { User } from "../../types/user";
import { useContext } from "react";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

const ContactUsers = () => {
  const { connectedUser, setConnectedUser, setIsConnectedUser } =
    useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    setConnectedUser({} as User);
    setIsConnectedUser(false);
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <S.Container>
      <S.TopCard>
        <S.Title>
          <Typography variant="h6">אנשי הקשר שלי</Typography>
        </S.Title>
        <Button onClick={logOut}>
          <S.TextButton>התנתק</S.TextButton>
        </Button>
      </S.TopCard>
      <S.BottomCard>
        {users
          .filter((user) => user.userName !== connectedUser.userName)
          .map((user: User, index: number) => (
            <CardContactUser key={index} user={user} />
          ))}
      </S.BottomCard>
    </S.Container>
  );
};

export default ContactUsers;
