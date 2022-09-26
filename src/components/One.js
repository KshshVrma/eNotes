import React from 'react'
import notes from './images/notes.jpeg'
function One() {
  return (
    <div>
    {/* import image from './path-to-image'; */}
    <h1><i>
Create your Notes,remove them,or delete them for future reference</i></h1>
<img src={notes} height={500} width={1200} alt="cur" class="center"/>
{/* <img src={notes}  /> */}
    </div>
  )
}

export default One