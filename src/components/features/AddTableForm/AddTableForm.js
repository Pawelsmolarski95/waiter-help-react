import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTableRequest } from "../../../redux/tableReducer";
import TableForm from "../TableForm/TableForm";

export const AddTableForm = () => {
    
    const dispatch = useDispatch();
    let navigate = useNavigate();
    
    const handleSubmit = table => {
        dispatch(addTableRequest(table));
        navigate('/')
    };
    
    
    
    return (
        <TableForm actionText="Add Table" action={handleSubmit} />
      );
}
 
export default AddTableForm;