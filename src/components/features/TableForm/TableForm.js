
// main form in app, will pick up props action and actionText-using in Buttons and rest of props 

import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import shortid from "shortid";
import { getAllStatuses } from "../../../redux/statusReducer";


const TableForm = ({ action, actionText, ...props }) => {
    
    
    console.log(props)
    // download all statuses from store/server
    const statuses = useSelector(getAllStatuses);
    // each SingleTable have one's id
    const id = props.id;
    
    //data from inputs keep in state using useState
    const [tableNumber, setTableNumber] = useState(props.tableNumber || '');
    const [status, setStatus] = useState(props.status || '');
    const [maxPeople, setMaxPeople] = useState(props.maxPeople || '');
    const [people, setPeople] = useState(props.people || '');
    const [bill, setBill] = useState(props.bill || 0);
    //statusError - state used in validation
    const [statusError, setStatusError] = useState(false);
    
    if(people > maxPeople) {
        setPeople(maxPeople)
    };
    if(maxPeople > 10 ) {
        setMaxPeople(10)
    }
    
    //validation form
    const { register, handleSubmit: validate, formState: {errors} } = useForm();
    
    //handleSubmit - func will execute func 'action'  received in the param from component-parents 
    const handleSubmit = () => {
        setStatusError(!status);
        if(maxPeople && tableNumber) {
            action({ id, status, tableNumber, bill, people, maxPeople});
        } 
    }
    
    return ( 
        <Row>
            <h1 className="my-5">Table {props.tableNumber}</h1>
            <Form onSubmit={validate(handleSubmit)}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="1"><b>Table number:</b></Form.Label>
                    <Col sm="1">
                        <Form.Control 
                            {...register("number", {required: true})}
                            value={tableNumber}
                            type="number"
                            onChange={e => setTableNumber(e.target.value)}
                        />
                        {errors.number && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="1"><b>Status: </b></Form.Label>
                    <Col sm="2">
                    <Form.Select id="statusSelect" onChange={(e) => setStatus(e.target.value)} value={status}>
                        {statuses.map(status => <option key={shortid()} value={status} >{status}</option>)}
                    </Form.Select>
                    </Col>
                    {statusError && <small className="d-block form-text text-danger mt-2">Please choose status</small>}
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="1"><b>People:</b></Form.Label>
                    <Col sm="1">
                        <Form.Control
                            {...register("people", {required: true})}
                            value={people}
                            type="text"
                            onChange={e => setPeople(e.target.value)}
                        />
                        {errors.people && <small className="d-block form-text text-danger mt-2">This field is required</small>}                         
                    </Col>
                    /
                    <Col sm="1">
                    <Form.Control
                            {...register("maxPeople", {required: true})}
                            value={maxPeople}
                            type="text"
                            onChange={e => setMaxPeople(e.target.value)}
                        />
                        {errors.maxPeople && <small className="d-block form-text text-danger mt-2">This field is required</small>}          
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="1"><b>Bill: </b></Form.Label>
                    <Col sm="1">
                        <Form.Control
                            {...register("bill", {required: true})}
                            value={bill}
                            type="number"
                            onChange={e => setBill(e.target.value)}
                        /> 
                    </Col>
                    {errors.bill && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                </Form.Group>
                <Button className="mt-3"  type="submit" value={actionText}>{actionText}</Button>
            </Form>
        </Row>
     );
}

export default TableForm;