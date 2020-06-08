import React, { Component } from "react";
import Employee from "./components/Employee";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees: employees,
  };

  removeEmployee = (id) => {
    const employees = this.state.employees.filter(
      (employee) => employee.id !== id
    );
    this.setState({ employees });
  };

  render() {
    return (
      <Wrapper>
        <Title className="title">Employee Directory</Title>
        {this.state.employees.map((employee) => (
          <Employee
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            position={employee.position}
            email={employee.email}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
