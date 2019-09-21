import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

class ButtonComp extends React.Component {
    render() {
        let buttons = [];
        let outline = this.props.variant;
        buttons = [
            {variant: "primary", value: "Primary"},
            {variant: "secondary", value: "Secondary"},
            {variant: "success", value: "Success"},
            {variant: "warning", value: "Warning"},
            {variant: "danger", value: "Danger"},
            {variant: "info", value: "Info"},
            {variant: "light", value: "Light"},
            {variant: "dark", value: "Dark"},
            {variant: "link", value: "Link"}
        ];

        return (
            <div>
                <h3>{this.props.option} Buttons</h3>
                <ButtonToolbar>
                    {buttons.map(function (val) {
                        return <Button key={val.value}
                                       variant={!!outline ? outline + '-' + val.variant : val.variant}
                        >{val.value}</Button>;
                    })}
                </ButtonToolbar>
            </div>
        );
    }
}

export default ButtonComp;
