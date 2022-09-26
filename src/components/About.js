import React from 'react'
import styles from "../App.css";

import background from "./images/no.jpeg";
import eContext from '../context/notes/NoteContext'
import{useContext,useEffect}from 'react'
export default function About() {
  // useEffect(()=>{
  //   a.update();
  //   //eslint-disable-next-line
  // },[])
  // const a=useContext(eContext)
  return (
    <div>  <article
    className={styles.article}
    style={{ backgroundImage: `url(${background})` }}
  >
    <h1 className={styles.header}><p><b>this is about page </b></p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima repellat tempora natus aliquid odio voluptates, repellendus pariatur vitae? Amet repellat autem soluta et eligendi cupiditate odit, facere asperiores id aperiam!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat assumenda nulla molestiae architecto repellat itaque maxime laborum deleniti quis, vero enim, recusandae rem voluptatibus fugit porro rerum sint saepe quos.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid fuga quis harum expedita? Quisquam temporibus sed soluta asperiores, ut, dolorum est veniam molestias dignissimos placeat, cupiditate unde. Quod, qui explicabo.
  </h1>
  </article></div>
  )
}
