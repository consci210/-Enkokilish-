import React from 'react'
import enkokilish from '../images/enkokilish-two.png'
const HomePage = () => {
  return (
    
    <div className='homepage'>
    <div className='left-homepage'>
        <div className='homepage-title'>
            <div className='enko'>እንቆ</div>
            <div className='kilish'>ቅልሽ</div>
        </div>
        <div className='motto-english' >
            <pre>Challenge your mind and test your limits with our <br />
                 interactive IQ and knowledge-testing web app!</pre>
           
        </div>
        <div className='motto-amh'> እየተዝናኑ የእውቀትዎን ጥግ ይፈትሹ </div>
        <div className='get-started'> <button> Get Started /ይጀምሩ</button></div>
    </div>
    <div className='right-homepage'><img className='enkokilish' src={enkokilish} alt="" /></div>
    </div>
  )
}

export default HomePage