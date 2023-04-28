import React, { Component } from 'react';
import { AppInfo, AppFilter, EmployeesList, EmployeesAddForm, SearchPanel } from '../';

import './app.css';

class App extends Component {
  state = {
    employees: [
      {
        id: 1,
        name: 'Azizbek Shukurov',
        salary: 3000,
        rise: false,
        increase: true,
      },
      {
        id: 2,
        name: 'Abdulaziz Nashvandov',
        salary: 3500,
        rise: false,
        increase: false,
      }
    ]
  }
  addItem = (itemInfo) => {
    this.setState(() => {
      return {
        employees: [ ...this.state.employees, itemInfo ]
      }
    })
  }
  deleteItem = (idEl) => {
    this.setState(({ employees }) => {
      return {
        employees: employees.filter((el) => el.id !== idEl)
      }
    })
  }

  onToggleIncrease = (increase, id) => {
    let data = this.state.employees.map((employee) => {
      if(employee.id === id){
        return {...employee, increase: increase }
      }
      return employee
    })
    this.setState(() => {
      return {
        employees: data
      }
    })
  }

  render(){
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
          </div>
          
          <EmployeesList 
            onDeleteOne={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease} 
            employeers={this.state.employees}/>
          <EmployeesAddForm addEmployee={this.addItem}/>
      </div>
    );
  }
}

export default App;