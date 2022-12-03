import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalDelete from "../ModalDelete/ModalDelete";

const SingleTable = ({number, status, id}) => {
    
    // Modal -- using state to close and open modal
    const [showModal, setShowModal] = useState(false)
    const handleShowModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    
    // dispatch deleteTableRequest with arg "id"  we pass the "id" to redux
    const handleRemove = e => {
        e.preventDefault();
        dispatch(deleteTableRequest(id));
        handleCloseModal();
    }
    
    if(showModal) return (
        <ModalDelete showModal={showModal} handleCloseModal={handleCloseModal} handleRemove={handleRemove} />
    );
    return (
        <Row>
            <Row className="align-items-end mb-3">
                <Col className="col-2 d-flex align-items-end jusdity-between">
                    <h2 className="mb-0">Table {number}</h2>
                </Col>
                <Col className="col-4">
                    <p className="mb-0 pl-3"><strong>Status:</strong>{status}</p>
                </Col>
                <Col className="col-6 d-flex justify-content-end">
                    <Link to={"/tables/" + id}>
                        <Button variant="primary" size="sm" className="mx-3">Show more</Button>
                    </Link>
                    <Button variant="outline-danger" size="sm" className="mx-3" onClick={handleShowModal}>Delete</Button>
                </Col>
                
            </Row>
        </Row>
      );
}
 
export default SingleTable;