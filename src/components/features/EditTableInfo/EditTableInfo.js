import TableForm from "../TableForm/TableForm";
import { useParams, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getTableById } from "../../../redux/tableReducer";
import { updateTableRequest } from "../../../redux/tableReducer";


const EditTableInfo = () => {
    
    const dispatch = useDispatch();
    const { tableId } = useParams();
    
    
    // getTableById - func which 'map' on each tables in server/store and take the table which id === tableId
    const tableData = useSelector(state => getTableById(state, tableId));
    
    
    let navigate = useNavigate();
    
    const handleSubmit = table => {
        dispatch(updateTableRequest({ ...table }))
        navigate('/');
    }
    
    if(!tableData) return <Navigate to="/"/>
    
    return (
        <TableForm
            action={handleSubmit}
            actionText="Update"
            id={tableData.id}
            status={tableData.status}
            people={tableData.people}
            maxPeople={tableData.maxPeople}
            bill={tableData.bill}
            tableNumber={tableData.tableNumber}
        /> 
    );
};
 
export default EditTableInfo;