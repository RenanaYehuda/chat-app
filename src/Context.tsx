import { createContext, useState } from "react";
import { User } from "./types/user";
import { Message } from "./types/message";

interface ContextProps {
  connectedUser: User;
  setConnectedUser: React.Dispatch<React.SetStateAction<User>>;
  contactUser: User;
  setContactUser: React.Dispatch<React.SetStateAction<User>>;
  isConnectedUser: boolean;
  setIsConnectedUser: React.Dispatch<React.SetStateAction<boolean>>;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export const Context = createContext({} as ContextProps);

export default function ContextProvider(props: any) {
  const user = localStorage.getItem("user");
  const contact = localStorage.getItem("userContact");
  const [connectedUser, setConnectedUser] = useState<User>(
    user ? JSON.parse(user) : ({} as User)
  );
  const [contactUser, setContactUser] = useState<User>(
    contact ? JSON.parse(contact) : ({} as User)
  );
  const [isConnectedUser, setIsConnectedUser] = useState<boolean>(
    user ? true : false
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const value = {
    connectedUser,
    setConnectedUser,
    isConnectedUser,
    setIsConnectedUser,
    contactUser,
    setContactUser,
    messages,
    setMessages,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
