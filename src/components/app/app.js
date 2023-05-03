import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AppInfo, AppFilter, EmployeesList, EmployeesAddForm, SearchPanel, Empty } from '../';

import './app.css';

class App extends Component {
  state = {
    employees: [
      {
        id:  uuidv4(),
        name: 'Azizbek Shukurov',
        salary: 1000,
        rise: false,
        increase: true,
      },
      {
        id: uuidv4(),
        name: 'Abdulaziz Nashvandov',
        salary: 2500,
        rise: false,
        increase: false,
      },
      {
        id: uuidv4(),
        name: 'John Smith',
        salary: 500,
        rise: false,
        increase: false,
      },
      {
        id: uuidv4(),
        name: 'Barry Allen',
        salary: 3500,
        rise: false,
        increase: false,
      }

    ],
    temp: "",
    filter: "all", 
  }
  addItem = (itemInfo) => {
    let userData = {
      id: uuidv4(),
      ...itemInfo
    }

    this.setState(() => {
      return {
        employees: [ ...this.state.employees, userData ],
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
  searchItem = (temp, data) => {
    if(temp){
      return data.filter((emp) => {
        return emp.name.toLowerCase().includes(temp.toLowerCase())
      })
    }else{
      return data
    }
  }
  onChangeSearch = (str) => {
    this.setState({temp: str})
  }
  onToggleStatus = (prop ,status, id) => {
    let data = this.state.employees.map((employee) => {
      if(employee.id === id){
        return {...employee, [prop]: status }
      }
      return employee
    })
    this.setState(() => {
      return {
        employees: data
      }
    })
  }
  onChangeFilter = (filterStatus) => {
    this.setState({filter: filterStatus})
  }

  employeesFilter = (filterStatus, data) => {
    switch(filterStatus){
      case "rise":
        return data.filter(item => item.rise)
      case "more": 
        return data.filter(item => item.salary > 1000)
      default:
        return data
    }
  }

  render(){
    let { employees, temp, filter } = this.state
    let increaseCount = employees.filter((emp) => emp.increase).length
    let newData = this.employeesFilter(filter, this.searchItem(temp, employees))
    // let newData = this.searchItem(temp, employees)
    return (
      <div className="app">
          <AppInfo employeesCount={employees.length} increaseCount={increaseCount}/>
  
          <div className="search-panel">
            <SearchPanel searchValue={temp} onChangeSearch={this.onChangeSearch} />
            <AppFilter filter={filter} onChangeFilter={this.onChangeFilter}/>
          </div>
          {
            newData.length ? 
              <EmployeesList 
                onDeleteOne={this.deleteItem}
                onToggleStatus={this.onToggleStatus} 
                employeers={newData}/>
              :
              <Empty/>
          }
          <EmployeesAddForm addEmployee={this.addItem}/>
      </div>
    );
  }
}

export default App;