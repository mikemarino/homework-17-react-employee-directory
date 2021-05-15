import React from "react";

function ShowResults(props) {
    return (
      <li><img src={props.image}></img>{props.firstName} {props.lastName} - {props.phone} - {props.email} - {(new Date(props.dob)).toLocaleDateString()}</li>
      
 
    // <ul className="list-group search-results">
    //   {props.results.map(result => (
    //     <li className="list-group-item">
    //       {result.results.name.first}
    //     </li>
    //   ))}
    // </ul>
  );
}

export default ShowResults;
