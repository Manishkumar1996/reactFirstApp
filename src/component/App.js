import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import TableAction from "../Container/TableAction";
import HomePage from "../Container/HomeContainer";


class App extends React.Component {

    state = {
        brand: 'First React',
        link: ['Buttons', 'Spinners', 'Table'],
        currentPage: 'Home',
    };

    changePage = currentPage => {
        this.setState({currentPage});
    };

    render() {
        return (
            <div>
                <Navbar option={this.state} changePage={this.changePage}/>

                {this.state.currentPage === 'Home' ? <HomePage/> : false}
                {this.state.currentPage === 'Table' ? <TableAction/> : false}
            </div>
        );
    }
}

export default App;
