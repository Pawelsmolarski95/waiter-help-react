import { useState } from "react";

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
    const handleRemove = e => {}
    e.preventDefault();
    dispatch(deleteTableRequest(id))
    handleCloseModal();
    
    return (
        
      );
}
 
export default SingleTable;