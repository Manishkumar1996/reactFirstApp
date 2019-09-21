import React from 'react';
import Select from 'react-select';

class SelectComp extends React.Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({selectedOption});
        this.props.change(selectedOption);
    };

    render() {
        const {selectedOption} = this.state;
        const {options} = this.props;

        return (
            <Select isClearable
                    name='select'
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={
                        options.map(option => {
                            return (
                                {'value': option.name, 'label': option.name}
                            )
                        })
                    }
            />
        );
    }
}

export default SelectComp;
