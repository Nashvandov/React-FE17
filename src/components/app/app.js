import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  state = {
    employees: [
      {
        id: 1,
        name: 'Azizbek Shukurov',
        salary: 3000
      },
      {
        id: 2,
        name: 'Alisher Oromov',
        salary: 1200
      },
      {
        id: 3,
        name: 'Bilol Ahadilloyev',
        salary: 2000
      },
      {
        id: 4,
        name: 'Mirabror Rashidov',
        salary: 2500
      },
      {
        id: 5,
        name: 'Lutfulla Murodjonov',
        salary: 3500
      }
    ]
  }

  deleteItem = (idEl) => {
    this.setState(({ employees }) => {
      // eslint-disable-next-line
      // let index = employees.findIndex((el) => el.id == idEl)
      // let beforeArr = employees.slice(0, index)
      // let afterArr = employees.slice(index + 1)
      // return {
      //   employees: [...beforeArr, ...afterArr]
      // }

      return {
        employees: employees.filter((el) => el.id !== idEl)
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
          
          <EmployeesList onDeleteOne={this.deleteItem} employeers={this.state.employees}/>
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
