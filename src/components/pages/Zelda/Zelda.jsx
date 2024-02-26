// bootstrap
import { Container, Row } from 'react-bootstrap';
// fetch call
import useFetch from '../../../hooks/useFetch';
import GameItem from './GameItem';
// context
import { useContext } from 'react';
import ZeldaContext from '../../../Context/ZeldaContext';
export default function Zelda() {
const zeldaCtx = useContext(ZeldaContext)
    const zeldaApiUrl = ' https://zelda.fanapis.com/api/games';
    useFetch(zeldaApiUrl, zeldaCtx.zeldaData, zeldaCtx.setNewData);
    return (
        <main id='zelda-main'>
        <Container  id='zelda-container' fluid={true} className="p-0">
        <section id="zelda-intro">   
        <h2>List of Zelda Games</h2>
        </section>
        <section id="zelda-games-list">
          <Row  style={{ marginLeft: 0, marginRight: 0 , padding: 5}}>
          {zeldaCtx.zeldaData.data ? zeldaCtx.zeldaData.data.map(game => {
            return (  <GameItem game={game} key={game.id}/> )
           }) : <>Fetching Zelda Data</> }
        </Row>
        </section>
        </Container>
        </main>
    )
}