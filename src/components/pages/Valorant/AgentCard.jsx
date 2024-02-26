import { Card }from 'react-bootstrap';
// functional component
export default function AgentCard({agent, valorantCtx}) {
// modal imports and functions
const {   handleShow, setCurrentAgent } = valorantCtx;

    // individual styles
    // card
   const cardStyle = {
        backgroundImage: "url(" + agent.displayIcon + ")",
        backgroundColor:  `#${agent.backgroundGradientColors[0]}`,
        backgroundPosition: 'center',
        boxShadow: '0px 0px 15px #' + agent.backgroundGradientColors[2],
        cursor: 'pointer',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '15rem',
        cusor: 'pointer',
        height: '20rem',
        border: `1px solid #${agent.backgroundGradientColors[0]}`,
   }
//    title
   const titleStyle = {  
    color:  '#' + agent.backgroundGradientColors[1],
backgroundColor: '#' + agent.backgroundGradientColors[0],
boxShadow: '1px 2px 9px #' + agent.backgroundGradientColors[2],
borderRadius: '1rem',
width: '100%',
transform: 'translateY(-10px)'
}
// role
const roleStyle = {  
    color:  '#' + agent.backgroundGradientColors[1],
backgroundColor: '#' + agent.backgroundGradientColors[0],
boxShadow: '1px 2px 9px #' + agent.backgroundGradientColors[2],
width: '15rem',
transform: 'translateY(245px)'
}

// function for setting agent and module opening specific to agent
function showAgentModal () {
    setCurrentAgent(agent);
    handleShow();
}
return (
    <>
    <Card className='agent-card' style={cardStyle} onClick={showAgentModal}>
        <h2 className='agent-title' style={titleStyle}>{agent.displayName}</h2>
        <h3 className='agent-role' style={roleStyle}>{agent.role && agent.role.displayName}</h3>     
    </Card>
    </>

 )
}