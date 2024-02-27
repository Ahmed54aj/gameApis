// bootstrap
import{ Row, Col} from 'react-bootstrap';
// using lottie
import Lottie from "lottie-react";
import api from "../../assets/Lottie/api.json";
import data from "../../assets/Lottie/data.json";
import web_design from "../../assets/Lottie/web_design.json";
export default function HomeSection() {
    return (
        < >
        <div id='home-content'>
        <section id="home-intro">
            <h2>Working with game APIs</h2>
        </section>
        <section id="step-by-step">
           <Row>
            <Col> 1) Find game related APIs </Col>
            <Col>
            <Lottie className='lottie-animation' animationData={api} loop={true} />
            </Col>
           </Row>
           <Row>
            <Col>
            <Lottie className='lottie-animation' animationData={data} loop={true} />
            </Col>
            <Col> 2) Fetch data to utilize datasets </Col>
           </Row>
           <Row>
            <Col> 3) Create content with them</Col>
            <Col>
            <Lottie className='lottie-animation' animationData={web_design} loop={true} />
          </Col>
           </Row>
        </section>
 
        </div>
        </>
    )
}