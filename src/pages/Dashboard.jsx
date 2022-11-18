import React from 'react'
import {MainSection} from "../components/mainSection/MainSection"
import { RightSideBar } from '../components/RightSideBar/RightSideBar'

import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className="content__screen">
        <div className="main__dash">
       <MainSection/>
        </div>
        <div className="right_sidebar">
          <RightSideBar />
        </div>
      </div>
    </>
  )
}

export default Dashboard