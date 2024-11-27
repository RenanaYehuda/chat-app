import { Button, Typography } from "@mui/material";
import * as S from "./ChatPage.style";
import CardMessage from "../CardMessage/CardMessage";
import { useContext } from "react";
import { Context } from "../../Context";
import { ReactComponent as Chevron } from "../../icons/chevron.svg";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const { contactUser } = useContext(Context);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.TopCard>
        <Typography variant="h6">
          {contactUser.firstName} {contactUser.lastName}
        </Typography>
        <Button onClick={() => navigate(-1)}>
          <Chevron stroke="black" width={30} height={30} />
        </Button>
      </S.TopCard>
      <CardMessage />
    </S.Container>
  );
};

export default ChatPage;
