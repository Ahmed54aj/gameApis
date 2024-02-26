import { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";
// react router

function RadialMenu({ weaponTypes, weaponIcons, weaponLists }) {
 const [isOpen, setIsOpen] = useState(false);
 const navigate = useNavigate();

 const MenuItem = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  padding: 2rem;
  height: 70px;
  border-radius: 50%;
  transform: rotate(${(props) => props.angle}deg) translateY(-300%) scale(${(props) => (isOpen ? 1 : 0)});
 `;

//  function for selecting a weapon
function handleWeaponSelect(e) {
  const selectedWeaponList = weaponLists.filter(innerArr => {
    return innerArr.some(obj => obj.type === e);
 });
 navigate('/mhwWeapons/weaponList', { state: selectedWeaponList });
}

 return (
  <section id='radial-menu-area'>
      <button id='radial-center' onClick={() => setIsOpen(!isOpen)} />
      {weaponTypes.map((type, index) => (
        <MenuItem key={index} angle={(360 / weaponTypes.length) * index}
         value={type}  >
         <button className="radial-btns"   style={{  backgroundImage: `url(${weaponIcons[index]})`,height: '40px', width: '40px'}} value={type} onClick={e => handleWeaponSelect(e.target.value)}></button>
        </MenuItem>
      ))}
  </section>
 );
}

export default RadialMenu;
