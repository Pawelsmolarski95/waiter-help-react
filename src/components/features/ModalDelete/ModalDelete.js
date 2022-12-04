import { Button, Modal } from "react-bootstrap";

const ModalDelete = props => {
    return (
        <Modal show={props.showModal} onHide={props.handleCloseModal}>
            <Modal.Header>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                This operation will comlitely remove table from app.<br></br>
                Are you sure you want to do that?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleCloseModal}>Cancel</Button>
                <Button variant="danger" onClick={props.handleRemove}>Confirm</Button>
            </Modal.Footer>
        </Modal>
      );
}
 
export default ModalDelete;