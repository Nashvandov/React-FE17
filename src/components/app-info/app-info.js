import { Component } from "react";
import "./app-info.css";

class AppInfo extends Component {
	render(){
		return (
			<div className="app-info">
				<h1>Учет сотрудников в компании Open Web</h1>
				<h2>Общее число сотрудников: {this.props.employeesCount}</h2>
				<h2>Премию получат: {this.props.increaseCount}</h2>
			</div>
		)
	}
}

// export default AppInfo;
export { AppInfo }
