import React from 'react'
import Styles from "../Styles/Landing/Landing.module.css"

import Knots_Ropes from '../Page-Sections/Knots_Ropes'

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Knots_Ropes />
    </div>
  )
}

export default Landing