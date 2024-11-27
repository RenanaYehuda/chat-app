import { Button, Input, InputAdornment, Typography } from "@mui/material";
import * as S from "./CardMessage.style";
import { useContext, useEffect, useRef, useState } from "react";
import { ReactComponent as User } from "../../icons/user.svg";
import { ReactComponent as Send } from "../../icons/chevron.svg";
import { Context } from "../../Context";
import { Message } from "../../types/message";
import { addMessage, getMessages } from "../../utils";
import moment from "moment";
import _ from "lodash";

const CardMessage = () => {
  const { messages, setMessages, connectedUser, contactUser } =
    useContext(Context);
  const [message, setMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const mes: Message = {
      send: connectedUser.userName,
      receive: contactUser.userName,
      date: new Date(),
      message,
    };
    await addMessage(mes);
    setMessages((prevMessages) => [...prevMessages, mes]);
    setMessage("");
  };

  const filteredMessages = messages.filter(
    (msg: Message) =>
      (msg.send === connectedUser.userName &&
        msg.receive === contactUser.userName) ||
      (msg.receive === connectedUser.userName &&
        msg.send === contactUser.userName)
  );

  const groupedMessages = _.groupBy(filteredMessages, (msg: Message) =>
    moment(msg.date).format("YYYY-MM-DD")
  );

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const dbMessages = await getMessages(connectedUser);
        setMessages(dbMessages as Message[]);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    scrollToBottom();
  }, [messages]);
  return (
    <S.Container>
      <S.ContainerMessages>
        {filteredMessages.length > 0 ? (
          Object.entries(groupedMessages).map(([date, messages]) => (
            <S.CardMessageContainer key={date}>
              <S.DateLabel>{moment(date).format("DD/MM/YYYY")}</S.DateLabel>
              {messages.map((msg: Message, index: number) => (
                <S.CardMessage
                  key={index}
                  isMe={msg.send === connectedUser.userName}
                >
                  <S.Text>{msg.message}</S.Text>
                </S.CardMessage>
              ))}
            </S.CardMessageContainer>
          ))
        ) : (
          <Typography variant="h6" style={{ margin: "20% 5% 0 0" }}>
            היי, מוזמנ/ת להתחיל שיחה...
          </Typography>
        )}
        <div ref={messagesEndRef}></div>
      </S.ContainerMessages>

      <S.Send component="form" onSubmit={handleSubmit}>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <User color="rgb(162 162 162)" />
            </InputAdornment>
          }
          placeholder="הודעה"
          value={message}
          style={{ width: "80%", marginBottom: "16px" }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button disabled={!message} type="submit">
          <Send stroke={message ? "#0f74d8" : "rgb(162 162 162)"} />
        </Button>
      </S.Send>
    </S.Container>
  );
};

export default CardMessage;
