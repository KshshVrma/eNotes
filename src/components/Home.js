import React from 'react'
import { useContext } from 'react';
import Notes from './Notes'

export default function Home(props) {
  const {showAlert}=props

  return (
    <div >
    <Notes showAlert={showAlert}
></Notes>
    </div>
  )
}//showAlert={showAlert}
