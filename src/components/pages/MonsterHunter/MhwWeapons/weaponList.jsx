import React, { useState } from 'react';
import { Pagination, Form, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
// autocomplete for weapon search
import { TextField, Autocomplete } from '@mui/material';

// according imports for weapon info
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// slots component
import JewelSlot from './Slot';
// sharpness component
import SharpnessGauge from './Sharpness';
function WeaponList() {
  const location = useLocation();
  const { state } = location;
  const data = state[0];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);



  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleWeaponSearch = (value) => {
    const selectedWeapon = data.find(item => item.name === value);
    if (selectedWeapon) {
      const selectedWeapon = data.find(item => item.name === value);
      setSelectedItem(selectedWeapon);
      console.log(value)
      setShowModal(true);
    } else {
      return
    }

  }

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <section id='weapon-list-section'>
        <div id="search-area">
          <div className='search-container' >
          <Autocomplete
          disablePortal
          id="weapon-search"
          options={data}
          onChange={(e) => handleWeaponSearch(e.target.innerText)}
          getOptionLabel={(data) => data.name}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField  {...params} label={`${data[0].type} search`} />}
        />
          </div>
          {/* items per page */}
        <Form.Group controlId="itemsPerPageSelect">
        <div className='search-container' >
        <Form.Label style={{color:'white'}}>Rows:</Form.Label>
          <Form.Control style={{margin:'10px'}} as="select" onChange={handleItemsPerPageChange} value={itemsPerPage}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={data.length}>All</option>
          </Form.Control>
        </div>
        
        </Form.Group>
{/* page changiong buttons */}
        <Pagination id='page-number-container'>
          <div id="pagination-btn-container">
          <Button onClick={() => { setCurrentPage(1)}}>&#60;&#60;</Button>
          <Button onClick={() => { if (currentPage !== 1) {setCurrentPage(currentPage - 1)}}}>&#60;</Button>
          <p style={{color: 'white', width: '2rem', textAlign: 'center'}}>{currentPage}</p>
          <Button onClick={() => { if (currentPage < (data.length / itemsPerPage)) {setCurrentPage(currentPage + 1)}}}>&#62;</Button>
          <Button onClick={() => { setCurrentPage(Math.ceil((data.length / itemsPerPage)))}}>&#62;&#62;</Button>
          </div>
        </Pagination>
        </div>
        <table style={{marginBottom:25}}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Rarity</th>
              <th>Damage</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr className='weapon-item' key={index} onClick={() => handleItemClick(item)}>
                <td>
                  {item.assets && item.assets.image && item.assets.image !== '' && (
                    <img className='weapon-image' src={item.assets.image} alt={`${item.name}`} />
                  )}
                </td>
                <td>{item.name}</td>
                <td>Rarity: {item.rarity}</td>
                <td>Display: {item.attack.display} ({item.attack.raw} raw)</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton className='weapon-modal-header'>
          {/* title info */}
          <Modal.Title>{selectedItem && selectedItem.name} - Rarity {selectedItem && selectedItem.rarity}</Modal.Title>
        {/* slot info */}
        <div className="slots-header">
        <p><strong>SLOTS</strong></p>
        <div className="slots-container">

          {selectedItem && selectedItem.slots.map(slot => {
            return <JewelSlot slot={slot} key={selectedItem.slots.indexOf(slot)}/>
          })}
                  </div>
        </div>
      
      
        </Modal.Header>
        {console.log(selectedItem)}
        <Modal.Body>
         { selectedItem &&   <img src={selectedItem.assets !== null ? selectedItem.assets.image : ''} alt="monster hunter weapon" />}
        
          {selectedItem && (
               <div>
                {/* damage info */}
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <strong>Damage Information</strong>
        </AccordionSummary>
        <AccordionDetails>
          {/* include damage, sharpness, damage type,  elements, elderseal, affinity */}
          <ul>
            {/* attack display */}
            {selectedItem.attack.display &&  <li><strong>Damage:</strong> {selectedItem.attack.display} ({selectedItem.attack.raw} raw)</li>}
       {/* damage type */}
       {selectedItem.damageType && <li><strong>Damage Type: </strong>{selectedItem.damageType}</li>}
        {/* elderseal */}
         {selectedItem.elderseal !== null &&  <li><strong>Elderseal: </strong>{selectedItem.elderseal ? selectedItem.elderseal: 'None'}</li>}
        {/* elemental damage */}
         {selectedItem.elements.length > 0 &&   <li><strong>Elemental Damage: </strong>{selectedItem.elements.length > 0 ? selectedItem.elements.map((element) => {
          return (
              element.type.toUpperCase() + ` (${element.damage})` + ` (Hidden: ${element.hidden})`
          )
         }) : 'None'}</li>}
          {/* phial for charge blade */}
          {selectedItem.phial && <li><strong>Phial Type: </strong>{selectedItem.phial.type}</li>}
       {/* shelling for gunlance */}
      {selectedItem.shelling && <><li><strong>Shelling Type: </strong>{selectedItem.shelling.type}</li>
      <li><strong>Shelling Level: </strong>{selectedItem.shelling.level}</li></>}

         {/* durability */}
      {selectedItem.durability &&  <li ><strong>Sharpness Gauge: </strong><SharpnessGauge durability={selectedItem.durability[selectedItem.durability.length - 1]}/></li>}
        {/* deviation */}
        {selectedItem.deviation && <li><strong>Deviation: </strong>{selectedItem.deviation}</li>}
         {/* special ammo for bowgun */}
         {selectedItem.specialAmmo && <li><strong>Special Ammo: </strong>{selectedItem.specialAmmo}</li>}
        {/* ammo types for bowguns */}
         {selectedItem.ammo && <li><strong>Ammo: </strong><ul>{selectedItem.ammo && selectedItem.ammo.map((ammo) => {
          return (
            <li key={selectedItem.ammo.indexOf(ammo)}>{ammo.type}: {ammo.capacities.map((ammoType) => {
              return (
                `Level ${ammo.capacities.indexOf(ammoType) + 1} (${ammoType}) `
              )
            })}</li>
          )
         })}</ul></li>}
         {/* coatings for bow */}
         {selectedItem.coatings && <li><strong>Coatings: </strong>  <ul>{selectedItem.coatings.map((coating) => {
return (
 <li key={selectedItem.coatings.indexOf(coating)}>{coating}</li>
)
         })}</ul></li> }
        
          </ul>



        </AccordionDetails>
      </Accordion>
     {/* crafting info */}
       {selectedItem.crafting.craftingMaterials.length > 0 && <>  <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
      <strong>Crafting Information</strong>
        </AccordionSummary>
        <AccordionDetails>       <p><strong>Crafting Materials:</strong></p><ul>{selectedItem.crafting.craftingMaterials.map(craftingMats => {
        return (
          <li key={selectedItem.crafting.craftingMaterials.indexOf(craftingMats)}><strong>Quantity:</strong> {craftingMats.quantity} <br/> <strong>Item:</strong> {craftingMats.item.name}</li>
        )
       })}</ul>     </AccordionDetails>
       </Accordion></>}
       {/* upgrade info */}
       {selectedItem.crafting.upgradeMaterials.length > 0 && <>  <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
       <strong>Upgrade Information</strong>
        </AccordionSummary>
        <AccordionDetails>       <p><strong>Upgrade Materials:</strong></p><ul>{selectedItem.crafting.upgradeMaterials.map(upgradeMats => {
        return (
          <li key={selectedItem.crafting.upgradeMaterials.indexOf(upgradeMats)}><strong>Quantity:</strong> {upgradeMats.quantity} <br/><strong>Item:</strong> {upgradeMats.item.name}</li>
        )
  
       })}</ul>     </AccordionDetails>
       </Accordion></>}   
    </div>
  
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WeaponList;

