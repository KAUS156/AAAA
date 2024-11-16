import React from 'react'

import Card from './../components/AdminComponents/components/Prince/Card/Card'
import RightSide from '../components/AdminComponents/components/Prince/Bord/RightSide/RightSide'

const Dashboard = () => {
  return (
    <div className='dashbordhome'>
        <h1>
          <Card/>
          <RightSide/>
          
        </h1>
    </div>
  )
}

export default Dashboard