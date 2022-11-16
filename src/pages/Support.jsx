import React from 'react'

import ChatBot from '../components/chatbot/ChatBot'
import ContactUs from '../components/contactUS/ContactUs'

import '../styles/Support.css'

const Support = () => {
  return (
    <div className="support__screen">
      <div className="contactUs__screen">
        <ContactUs />
      </div>
      <div className="chatBot screen">
        <ChatBot />
      </div>
    </div>
  )
}

export default Support