import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import ButtonComp from './ButtonComp';
import SpinnerComp from './SpinnerComp';
import SelectComp from './SelectComp';
import TableComp from './TableComp';

import {fetchJson} from '../Actions/JsonList';


class App extends React.Component {

    state = {
        brand: 'First React',
        link: ['Features', 'Component'],
        item: ['Action', 'About', 'Home'],
        selectedOption: null,
    };

    selectChange = selectedOption => {
        this.setState({selectedOption});
    };

    componentDidMount() {
        this.props.dispatch(fetchJson());
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
                            <SelectComp options={this.props.json} change={this.selectChange}/>
                        </div>
                        <div className="col-12 col-sm-2 col-md-4">

                        </div>
                        <div className="col-12 col-sm-2 col-md-4">

                        </div>
                    </div>

                    <div className="pt-3">
                        <TableComp rows={this.props.json} selected={this.state.selectedOption}/>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
