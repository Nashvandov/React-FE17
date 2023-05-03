import React, {Component} from "react";
import "./app-filter.css";

const buttonsData = [
    {
        title: "all",
        label: "Все сотрудники"
    },
    {
        title: "rise",
        label: "На повышение"
    },
    {
        title: "more",
        label: "З/П больше 1000$"
    },
]

class AppFilter extends Component {
    render(){
        const {filter, onChangeFilter} = this.props
        const buttons = buttonsData.map((btnData) => {
            const { title, label } = btnData

            let activeClass = filter === title ? "btn-light" : "btn-outline-light"
            return <button 
                    type="button"
                    className={`btn ${activeClass}`}
                    onClick={() => onChangeFilter(title)}>
                    {label}
                </button>
        })
        return (
            <div className="btn-group">
                {buttons}
                {/* <button type="button"
                        className="btn  btn-outline-light">
                        Все сотрудники
                </button>
                <button type="button"
                        className="btn btn-light">
                        
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        З/П больше 1000$
                </button> */}
            </div>
        )
    }
}

export { AppFilter };