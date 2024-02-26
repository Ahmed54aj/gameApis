import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
function AgentModal({ currentAgent, show, onHide}) {

// styling
const modal_style = {
        backgroundColor:  `black`,
}

const inside_modal_style = {
    padding: '1rem',
    background: currentAgent !== '' ? ` linear-gradient( #${currentAgent.backgroundGradientColors[0]}, white)` : 'white',
    color: currentAgent !== '' ? `#${currentAgent.backgroundGradientColors[2]}`  : 'black',
    border: '1px solid #' + ( currentAgent !== '' ? currentAgent.backgroundGradientColors[2] : '1px solid black' ),
    
}




  return (
    <Modal show={show} onHide={onHide} style={modal_style} className='modals'>
    <Modal.Header closeButton style={inside_modal_style}>
      <Modal.Title >Agent: {currentAgent.displayName}</Modal.Title>
    </Modal.Header>
    <Modal.Body >
<>
<p>{currentAgent !== '' ? currentAgent.description : null}</p>
</>



        <>
        <Image className='agent-port' src={currentAgent.fullPortrait} alt={currentAgent.displayName} />
        <h4>Abilities</h4>
        {currentAgent !== '' ? currentAgent.abilities.map(ability => {
        return (
            <>
            <div className='abilities' key={ability.displayName} style={inside_modal_style}>
            <p><Image className='ability-icons' src={ability.displayIcon} alt={ability.displayName}></Image>     <strong>{ability.displayName}</strong></p>
            <p> {ability.description}</p>
            </div>
            </>
        )
    }) : null}
        </>
     
    </Modal.Body>
    <Modal.Footer style={inside_modal_style}>
      <Button variant="secondary" onClick={onHide}>
        Close
      </Button>
  
    </Modal.Footer>
  </Modal>
  );
}

export default AgentModal;