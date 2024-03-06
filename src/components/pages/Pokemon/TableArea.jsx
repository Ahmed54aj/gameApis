import React, { useEffect, useState } from 'react';
import { Pagination, Form, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// autocomplete for weapon search
import { TextField, Autocomplete } from '@mui/material';

// according imports for weapon info
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// chartjs
import { Pie } from 'react-chartjs-2';

// context
import useFetch from '../../../hooks/useFetch';
import useFetchSelectedPokemon from '../../../hooks/useFetchSelectedPokemon';
import { useContext } from 'react';
import PokemonContext from '../../../Context/Pokemon';
import { light } from '@mui/material/styles/createPalette';
function TableArea() {
  const [selectedItem, setSelectedItem] = useState({
    name:"bulbasaur", url:"https://pokeapi.co/api/v2/pokemon/1/"});
  let data = [];

// Fetch data when selectedItem changes
useEffect(() => {
  if (selectedItem) {
    fetchData(selectedItem.url);
  }
}, [selectedItem]);
// Function to fetch data
const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  setFetchedPokemon(data);
};
// using chartjs states
// goals is:
// import chart
// when 
const [chartDataset, setChartDataset] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showModal, setShowModal] = useState(false);

  const [fetchedPokemon, setFetchedPokemon] = useState('');
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// getting context
  const pokemonCtx = useContext(PokemonContext)
    const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    useFetch(pokemonApiUrl, pokemonCtx.pokemonData, pokemonCtx.setNewData);
    const {pokemonData } = pokemonCtx;
data = pokemonData;
if (pokemonData.results){
  data = pokemonData.results;
} 
const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    // helper functions
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handlePokemonSearch = (value) => {
    const selectedPokemon = data.find(item => item.name === value);
    if (selectedPokemon) {
      const selectedPokemon = data.find(item => item.name === value);
      setSelectedItem(selectedPokemon);
      setShowModal(true);
    } else {
      return
    }

  }

  const closeModal = () => {
    setShowModal(false);
  };
// useFetchSelectedPokemon(selectedItem.url,  fetchedPokemon, setFetchedPokemon);
    // return component
    return (
    <section id='pokemon-table-section'>
       <div id="search-area">
          <div className='search-container' >
          <Autocomplete
          autoHighlight={true}
          disablePortal
          id="pokemon-search"
          options={data}
          onSubmit={(e) => handlePokemonSearch(e.target.innerText)}
          onSelect={(e) => handlePokemonSearch(e.target.innerText)}
          onChange={(e) => handlePokemonSearch(e.target.innerText)}
          getOptionLabel={(data) => data.name}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField  {...params} label={`Pokemon Search`} />}
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

       
 <table id='pokemon-table' style={{marginBottom:25}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr className='weapon-item' key={index} onClick={() => handleItemClick(item)}>
                <td>{item.name}</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
            ))}
          </tbody>
        </table>
{/* modal */}
<Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton className='pokemon-modal-header'>
          {/* title info */}
          <Modal.Title>{selectedItem && selectedItem.name.toUpperCase()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        <strong>Abilities</strong>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            
          {fetchedPokemon.abilities ? fetchedPokemon.abilities.map((ability) => {
          return <li key={ability.ability.name}>{ability.ability.name}</li>
        }): <li></li>}
          </ul>
       
        </AccordionDetails>
      </Accordion>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </section>
  );
}

export default TableArea;