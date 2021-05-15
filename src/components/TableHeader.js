import React, {  Component } from "react";
import API from "../utils/API";
import ShowResults from "./ShowResults";
import Wrapper from "./Wrapper";
import Header from "./Header";
import TableBody from './TableBody';


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
  
  render() {
    return(
      <table id="dtOrderExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th class="th-sm">Image
      </th>
            <th class="th-sm">Full Name
      </th>
            <th class="th-sm">Phone
      </th>
            <th class="th-sm">Email
      </th>
            <th class="th-sm">DoB
      </th>
          </tr>
        </thead>
        <tbody>
          {this.state.resultAPI.map(result => (
            < TableBody
              image={result.picture.thumbnail}
              firstName={result.name.first}
              lastName={result.name.last}
              phone={result.phone}
              email={result.email}
              dob={result.dob.date}
            />
                    
          ))}
        </tbody>
      </table>
    );
  }
}


export default TableHeader;