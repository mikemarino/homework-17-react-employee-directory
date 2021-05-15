import React from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


function TableBody(props) {
  console.log(props);
    return (
      
   <tr>                
                    
      <td><img src={props.image}></img></td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{(new Date(props.dob)).toLocaleDateString()}</td>
    </tr>
  );
}

export default TableBody;