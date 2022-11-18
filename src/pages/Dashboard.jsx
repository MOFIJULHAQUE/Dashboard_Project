import React from 'react'
import { RightSideBar } from '../components/RightSideBar/RightSideBar'

import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className="content__screen">
        <div className="main__dash"></div>
        <div className="right_sidebar">
          <RightSideBar />
        </div>
      </div>
    </>
  )
}

export default Dashboard