import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          { 
            this.props.employees.map((employee)=>{
              return(
                <li className="listText" key={employee.id} onClick={()=>{this.props.selectEmployee(employee)}}>{employee.name}</li>
              )
            })
            // Map over this.props.employees
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;