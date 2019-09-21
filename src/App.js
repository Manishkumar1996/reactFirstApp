import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import ButtonComp from './component/ButtonComp';
import SpinnerComp from './component/SpinnerComp';
import SelectComp from './component/SelectComp';
import TableComp from './component/TableComp';


class App extends React.Component {

    state = {
        brand: 'First React',
        link: ['Features', 'Component'],
        item: ['Action', 'About', 'Home'],
        jsonResponse: [],
        selectedOption: null,
    };

    selectChange = selectedOption => {
        this.setState({selectedOption});
    };

    componentDidMount() {
        fetch('http://www.json-generator.com/api/json/get/cgeoLjEvLS?indent=2',{
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                jsonResponse: json,
            });
        })
        .catch(error => {
            console.log(error)
        })
    }


    render() {

        return (
            <div>
                <Navbar option={this.state}/>
                <div className="container">
                    <div className="row pt-3">
                        <div className="col-12 col-sm-2 col-md-4">
                            <ButtonComp option="With Out Outline"/>
                        </div>
                        <div className="col-12 col-sm-2 col-md-4">
                            <ButtonComp option="With Outline" variant="outline"/>
                        </div>
                        <div className="col-12 col-sm-2 col-md-4">
                            <SpinnerComp option="Border" animation='border'/>
                            <SpinnerComp option="Grow" animation='grow'/>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-12 col-sm-2 col-md-4">
                            <SelectComp options={this.state.jsonResponse} change={this.selectChange}/>
                        </div>
                        <div className="col-12 col-sm-2 col-md-4">

                        </div>
                        <div className="col-12 col-sm-2 col-md-4">

                        </div>
                    </div>

                    <div className="pt-3">
                        <TableComp rows={this.state.jsonResponse} selected={this.state.selectedOption}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
