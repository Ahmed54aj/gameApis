// bootstrap
import { Container, Row } from 'react-bootstrap';
// fetch call
import useFetch from '../../../hooks/useFetch';
// agent cards
import AgentCard from './AgentCard';
// context
import { useContext } from 'react';
import ValorantContext from '../../../Context/ValorantContext';
// modules
import AgentModal from './AgentModal';
export default function Valorant() {
const valorantCtx = useContext(ValorantContext)
    const valorantApiUrl = 'https://valorant-api.com/v1/agents';
    useFetch(valorantApiUrl, valorantCtx.valorantData, valorantCtx.setNewData);
    // log for clarification
    const {valorantData, showModal, handleClose,  currentAgent, } = valorantCtx;
    // return component
    return (
        <main id='valorant-main' >
        <Container  id='valorant-container' fluid={true} className="p-0">
        <section id="valorant-intro">   
        <h2>Valorant Agents</h2>
        </section>
        <section id="valorant-agent-container">
        <AgentModal currentAgent={currentAgent} show={showModal} onHide={handleClose} />
          <Row  style={{ marginLeft: 0, marginRight: 0 , padding: 5}}>
          {valorantData.data ? valorantData.data.map(agent => {
            return (  <AgentCard agent={agent} key={agent.uuid} valorantCtx={valorantCtx}/> )
           }) : <>Fetching Valorant Agents Data</> }
        </Row>
        </section>
        </Container>
        </main>
    )
}