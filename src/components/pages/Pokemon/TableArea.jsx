import React, { useEffect, useState } from 'react';
import { Pagination, Form, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// autocomplete for weapon search
import { TextField, Autocomplete } from '@mui/material';
// background imgage for table area
import nx from './nx.png'; 
// according imports for weapon info
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// chartjs
import { Pie } from 'react-chartjs-2';
import { Chart, Tooltip, Legend } from 'chart.js';
import { ArcElement } from "chart.js";
// Register ArcElement
Chart.register(ArcElement,Tooltip, Legend);
// context
import useFetch from '../../../hooks/useFetch';
import useFetchSelectedPokemon from '../../../hooks/useFetchSelectedPokemon';
import { useContext } from 'react';
import PokemonContext from '../../../Context/Pokemon';
import { light } from '@mui/material/styles/createPalette';
import zIndex from '@mui/material/styles/zIndex';
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
  setFetchedPokemon(data);
};
const [chartData, setChartData] = useState({
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: `${selectedItem.name}`,
    data: [20, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
});
const [chartOptions, setChartOptions] = useState({
  responsive: true,
  plugins: {
    legend: {
      enabled: true,
    },
    tooltip: {
      enabled: true, // Enable tooltips
  },
    title: {
      display: true,
      text: 'Pie Chart Example'
    }
  }
});

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


function getStats(fetchedPokemon) {
  let statsLabels = [];
  let statData = [];
  setStatLabels(fetchedPokemon.stats, statsLabels);
  setStatData(fetchedPokemon.stats, statData);
setChartData({
  labels: statsLabels,
  datasets: [{
    label: `Base Stat`,
    data: statData,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
})
}
// setting stat labels
function setStatLabels(stats, statsLabels) {
stats.forEach((stat) => {
statsLabels.push(stat.stat.name)
  })
  return statsLabels;
}
// setting stat data
function setStatData(stats, statData) {
  stats.forEach((stat) => {
  statData.push(stat.base_stat)
    })
    return statData;
  }
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
    getStats(fetchedPokemon);
  };

  const handlePokemonSearch = (value) => {
    const selectedPokemon = data.find(item => item.name === value);
    if (selectedPokemon) {
      const selectedPokemon = data.find(item => item.name === value);
      setSelectedItem(selectedPokemon);
      setShowModal(true);
      getStats(fetchedPokemon);
      console.log(fetchedPokemon)
    } else {
      return
    }

  }

  const closeModal = () => {
    setShowModal(false);
  };
    // return component
    return (
    <section id='pokemon-table-section' 
    style={{backgroundColor:'rgba(0,0,0,0.4)',
    position: 'absolute',
    width:'50%',
    borderRadius: '5vh',
    height: '50%',
     display:'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
       justifyContent: 'center',
        alignItems:'center'}}>


       <div id="pokedex-search-area" 
           style={{
            backgroundColor:'rgba(255,255,255,0.8)',
     display:'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'center', 
         alignItems: 'center'
        }} 
     >
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
{/* modal */}
<Modal show={showModal} onHide={closeModal} >
        <Modal.Header closeButton className='pokemon-modal-header'>
          {/* title info */}
          <Modal.Title>{selectedItem && selectedItem.name.toUpperCase()}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundImage: fetchedPokemon.sprites && `url(${fetchedPokemon.sprites.front_default})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', zIndex:0}  }>
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
      <Pie data={chartData} options={chartOptions}/>
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