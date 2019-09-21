import React from 'react';
import {Spinner} from 'react-bootstrap';

class SpinnerComp extends React.Component {
    render() {
        let spinner = {};
        spinner = {
            animation: this.props.animation,
            variant: ["primary", "secondary", "success", "warning", "danger", "info", "light", "dark", "link"]
        };

        return (
            <div>
                <h3>{this.props.option} Spinners</h3>
                {spinner.variant.map(function (val) {
                    return <Spinner key={val} animation={spinner.animation} variant={val}/>;
                })}
            </div>
        );
    }
}

export default SpinnerComp;
