import React from 'react';
// diamond animation
import Lottie from "lottie-react";
import diamond from '../../../../assets/Lottie/diamond.json';
import SlotImage from '../../../../assets/MonsterHunter/gemSlot.png';
function JewelSlot({slot}) {
const options = {

        loop: true,
        autoplay: true,  
        rendererSettings: {
           preserveAspectRatio: "xMidYMid slice",
        }
}
        return (
            <div className='jewel-slot'>
                 
            <span style={{ 
            }} className='slot-jewel'> <Lottie id='controller-animation' animationData={diamond} options={options} /><p className='slot-number'>{slot.rank}</p></span>
        </div>
        )
 
}

export default JewelSlot;