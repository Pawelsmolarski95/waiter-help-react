import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
   //here we will download the info about all tables from redux using useSelector
    
    return (
        <div>
            <Row className="align-items-center justify-content-end">
                <Col>
                    <h1 className="my-5">All tables</h1>
                </Col>
                <Col className="d-flex flex-row-reverse p-2">
                    <Link to="tables/add">
                        <Button variant="info">Add New Table</Button>
                    </Link>
                </Col>
            </Row>
            {/* here we will map on each element in tables and create SingleTable */}
            <SingleTable/>
            
        </div>
      );
}
 
export default Home;