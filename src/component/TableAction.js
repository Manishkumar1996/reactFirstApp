import React from 'react';
import '../App.css';
import SelectComp from './SelectComp';
import TableComp from './TableComp';
import {fetchJson} from "../Actions/JsonList";

class TableAction extends React.Component {

    state = {
        selectedOption: null,
    };

    componentDidMount() {
        this.props.dispatch(fetchJson());
    }

    selectChange = selectedOption => {
        this.setState({selectedOption});
    };


    render() {

        return (
            <div className="container">
                <h2 className="text-center">Table With Filter Using Select</h2>
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
        );
    }
}

export default TableAction;
