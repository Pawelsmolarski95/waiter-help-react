
// main form in app, will pick up props action and actionText-using in Buttons and rest of props 

import { useSelector } from "react-redux";

// 
const TableForm = ({action, actionText, ...props}) => {
    
    //we download all statuses from store/server
    const statuses = useSelector(getAllStatuses);
    // each SingleTable have one's id
    const id = props.id;
    
    //data from inputs keep in state using useState
    const [tableNumber,setTableNumber] = useState(props.tableNumber || '');
    const [status,setStatus] = useState(props.status || '');
    const [maxPeople,setMaxPeople] = useState(props.maxPeople || '');
    const [people,setPeople] = useState(props.people || '');
    const [bill,setBill] = useState(props.bill || '');
    //statusError - state used in validation
    const [statusError,setStatusError] = useState(false);
    
    return ( 
        
     );
}
 
export default TableForm;