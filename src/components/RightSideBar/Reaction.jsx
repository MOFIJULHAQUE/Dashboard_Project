import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./RightSideBarCSS_Files/Reaction.css";
//Importing Chatbot Component
import Config from "./ChatBotComponents/Config";
import MessageParser from "./ChatBotComponents/MessageParser";
import ActionProvider from "./ChatBotComponents/ActionProvider";

export const Reaction = () => {
  return (
    <>
      <div >
        <Chatbot
        classNmae="ChatBot_section"
          config={Config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </>
  );
};
