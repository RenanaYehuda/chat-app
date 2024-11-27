import { openDB } from "idb";
import { Message } from "./types/message";
import { User } from "./types/user";
import moment from "moment";
import _ from "lodash";

interface MessageDB {
  messages: {
    key: number;
    value: Message;
  };
}

const dbPromise = openDB<MessageDB>("messageDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("messages")) {
      db.createObjectStore("messages", {
        autoIncrement: true,
      });
    }
  },
});

export const addMessage = async (
  message: Omit<MessageDB["messages"]["value"], "id">
) => {
  const db = await dbPromise;
  await db.add("messages", { ...message });
};

export const getMessages = async (connectedUser: User) => {
  const db = await dbPromise;
  const allMessages = await db.getAll("messages");
  const result = _.groupBy(allMessages, (item: Message) =>
    moment(item.date).format("YYYY-MM-DD")
  );

  return allMessages.filter(
    (msg) =>
      msg.send === connectedUser.userName ||
      msg.receive === connectedUser.userName
  );
};

export const clearMessages = async () => {
  const db = await dbPromise;
  await db.clear("messages");
};
