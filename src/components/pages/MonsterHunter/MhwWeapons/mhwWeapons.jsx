import React from 'react';
import { Image } from 'react-bootstrap';
import mhwwIceborneWallpaper from '../../../../assets/MonsterHunter/mhwIceborne.jpg'
// fetch hook
 import useMhwStore from '../../../../hooks/useMhwStore';
//  selecting the store state
import { useSelector } from 'react-redux';
// importing radial menu
import RadialMenu from './mhwRadialMenu';
import Lottie from "lottie-react";
import spinner from "../../../../assets/Lottie/loadingSpinner.json";


function MonsterHunterWorldWeapons() {
  useMhwStore('https://mhw-db.com/weapons');
// checking state
const weapons = useSelector(state => state.getAllWeapons);
// weapon type array for radial menu
let weaponTypes = []; // Your empty array
let objectsArray = [ ...weapons ];
let uniqueTypes = objectsArray.reduce((accumulator, currentObject) => {
   if (!accumulator.includes(currentObject.type)) {
       accumulator.push(currentObject.type);
   }
   return accumulator;
}, []);
weaponTypes =  [...uniqueTypes];
// getting the weapon lists
const weaponLists = [];
for (let weapon of weaponTypes) {
 const selectedIcon = weapons.filter(item => item.type === weapon);
weaponLists.push(selectedIcon);
}
// getting the weapon icons
const weaponIcons = [];
for (let weapon of weaponTypes) {
  const selectedIcon = weapons.find(item => item.type === weapon);
 weaponIcons.push(selectedIcon.assets.icon);
 }
  return (
    <main id='mhw-weapons-main'>
      <section className='intro' id='mhw-weapons-intro'>
<Image src={mhwwIceborneWallpaper} alt={'mhw iceborne wallpaper'} id='mhw-intro-image'></Image>
<h2 id='mhw-weapons-title'>Monster Hunter World Weapons</h2>
      </section>
      {weaponTypes.length > 0 ? 
      <RadialMenu weaponTypes={weaponTypes} weaponIcons={weaponIcons}
       weaponLists={weaponLists} />
        : <section id='radial-menu-area'>
             <Lottie id='controller-animation' animationData={spinner}
              loop={true} />
          </section>}
   
    </ main>
  );
}

export default MonsterHunterWorldWeapons;