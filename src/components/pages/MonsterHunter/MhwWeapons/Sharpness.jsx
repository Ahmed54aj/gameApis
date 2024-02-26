import React from 'react';

function SharpnessGauge({durability}) {
    let totalGauge =  durability.blue + durability.green + durability.orange + durability.purple + durability.red + durability.white + durability.yellow;
    let red = Math.round((durability.red / totalGauge) * 100);
    let orange = Math.round((durability.orange / totalGauge) * 100);
    let yellow = Math.round((durability.yellow / totalGauge) * 100);
    let green = Math.round((durability.green / totalGauge) * 100);
    let blue = Math.round((durability.blue / totalGauge) * 100);
    let purple = Math.round((durability.purple / totalGauge) * 100);
    let white = Math.round((durability.white / totalGauge) * 100);
    let gaugeColors = [['red',red],['orange',orange],['yellow',yellow],['green',green],['blue',blue],['purple',purple],['white',white]];
    const gaugeStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        width: '15rem',
        height: '1rem', 
    };
  return (
    <>
      <div id='sharpness-gauge' style={gaugeStyle}>

{gaugeColors.map((color) => {

    return (
        <div key={color} style={{backgroundColor: color[0], width: `${color[1]}%`, height: '100%'}}></div>
    )
   
})}

      </div>
    </>
  );
}

export default SharpnessGauge;