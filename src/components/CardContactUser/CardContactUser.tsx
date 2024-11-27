import { Button, Typography } from "@mui/material";
import * as S from "./CardContactUser.style";
import { ReactComponent as UserIcon } from "../../icons/user.svg";
import { ReactComponent as Chevron } from "../../icons/chevron.svg";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/user";
import { FC, useContext } from "react";
import { Context } from "../../Context";

interface CardContactUserProps {
  user: User;
}

const CardContactUser: FC<CardContactUserProps> = (
  props: CardContactUserProps
) => {
  const { user } = props;
  const { setContactUser } = useContext(Context);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    setContactUser(user);
    localStorage.setItem("userContact", JSON.stringify(user));
    navigate("/chat");
  };
  return (
    <S.Container>
      <S.RightCard>
        <S.Icon>
          <UserIcon width={30} height={30} />
        </S.Icon>
        <Typography variant="h6">
          {user.firstName} {user.lastName}
        </Typography>
      </S.RightCard>
      <S.LeftCard>
        <Button onClick={handleButtonClick}>
          <Chevron stroke="black" width={30} height={30} />
        </Button>
      </S.LeftCard>
    </S.Container>
  );
};

export default CardContactUser;
