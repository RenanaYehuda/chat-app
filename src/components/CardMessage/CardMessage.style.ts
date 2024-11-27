import { Box } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div<{ isMe?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMe ? "flex-end" : "flex-start")};
  height: 90%;
  padding: 10px 10px 10px 0;
`;

export const ContainerMessages = styled.div`
  width: 100%;
  overflow-y: auto;
  max-height: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const CardMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateLabel = styled.div`
  align-self: center;
  display: flex;
  color: rgb(162 162 162);
`;

export const CardMessage = styled.div<{ isMe: boolean }>`
  max-width: 80%;
  width: fit-content;
  margin: 10px;
  padding: 10px;
  word-wrap: break-word;
  border-radius: ${(props) =>
    props.isMe ? "10px 10px 0 10px" : "10px 10px 10px 0"};
  background-color: ${(props) => (props.isMe ? "#dcf8c6" : "#fff")};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  align-self: ${(props) => (props.isMe ? "flex-end" : "flex-start")};
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div``;

export const Send = styled(Box)`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-items: center;
  justify-content: space-between;
  flex: auto;
  position: sticky;
  bottom: 0;
`;
