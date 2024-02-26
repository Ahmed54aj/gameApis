// bootstrap/react imports
import {Container, Row, Col} from 'react-bootstrap';


export default function Footer () {
    return (
        <footer >
            <Container  fluid  style={{ marginLeft: 0, marginRight: 0 }} data-bs-theme="dark">
      <Row  style={{ marginLeft: 0, marginRight: 0 }}>
        <Col ><p><a href="https://es2cs.com/" target='_blank' rel="noreferrer" >©CodingAndQuesting2023</a></p></Col>
        <Col>Resources</Col>
        <Col>Outsource links</Col>
      </Row>
    </Container>
        </footer>
    )
}