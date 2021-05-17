import React, {  Component } from "react";
import API from "../utils/API";
import ShowResults from "./ShowResults";
import Wrapper from "./Wrapper";
import Header from "./Header";
import TableBody from './TableBody';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
var ReactBsTable = require('react-bootstrap-table');
// var BootstrapTable = ReactBsTable.BootstrapTable;
// var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
let order = 'desc';

class TableHeader extends Component {
  state = {
    resultAPI: [],
    search: ""
  };

  // When the component mounts, load the next getRandomEmployee to be displayed
  componentDidMount() {
    this.loadEmployeeList();
    //  console.log(this.state.resultAPI)
  }

  loadEmployeeList = () => {
    API.getRandomEmployee()
      .then(res => this.setState({
        resultAPI: res.data.results
      }))
      .catch(err => console.log(err));
  };

  showDOB(cell, row) { // String example
    return cell.date;
  }

    constructor(props) {
      super(props);

      this.options = {
        defaultSortName: 'name', // default sort column name
        defaultSortOrder: 'desc' // default sort order
      };
    }
  
  render() {

    const options = {
      searchPosition: 'left',// right or left
      width: '20px' 
    };
    
    function showImg(cell, row) { // String example
    return `<img src="` + [cell.medium] + `"></img>`;
    };

    function showName(cell, row) { // String example
      return [cell.first] + " " + [cell.last];
    };
    
    function showDOB(cell, row) { // String example
      return (new Date([cell.date])).toLocaleDateString();
    }
    return (
 <BootstrapTable ref='table' data = {this.state.resultAPI} options={this.options} search striped hover exportCSV >
      <TableHeaderColumn dataField='picture' dataFormat={showImg}>Image</TableHeaderColumn>
        <TableHeaderColumn isKey dataSort dataField='name' dataFormat={showName} >Full Name</TableHeaderColumn>
        <TableHeaderColumn dataField='phone' dataSort >Phone</TableHeaderColumn>
        <TableHeaderColumn dataField='email' dataSort >Email</TableHeaderColumn>
        <TableHeaderColumn dataField='dob' dataFormat={showDOB} >DoB</TableHeaderColumn> 
  </BootstrapTable>
   )
}
}


export default TableHeader;



    // return(
    //   <table id="dtOrderExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
    //     <thead>
    //       <tr>
    //         <th class="th-sm">Image
    //   </th>
    //         <th class="th-sm">Full Name
    //   </th>
    //         <th class="th-sm">Phone
    //   </th>
    //         <th class="th-sm">Email
    //   </th>
    //         <th class="th-sm">DoB
    //   </th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {this.state.resultAPI.map(result => (
    //         < TableBody
    //           image={result.picture.thumbnail}
    //           firstName={result.name.first}
    //           lastName={result.name.last}
    //           phone={result.phone}
    //           email={result.email}
    //           dob={result.dob.date}
    //         />
                    
    //       ))}
    //     </tbody>
    //   </table>
    // );

