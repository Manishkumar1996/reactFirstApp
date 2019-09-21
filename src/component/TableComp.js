import React from 'react';
import {Table} from 'react-bootstrap';


class TableComp extends React.Component {

    render() {
        const {rows} = this.props;
        const {selected} = this.props;

        return (
            <Table responsive striped bordered hover size='sm'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Age</th>
                    <th>Company</th>
                    <th>Balance</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                {
                    rows.map(row => {
                        if (!selected || row.name === selected.value) {
                            return (
                                <tr key={row._id}>
                                    <td>{row.name}</td>
                                    <td>{row.address}</td>
                                    <td>{row.age}</td>
                                    <td>{row.company}</td>
                                    <td>{row.balance}</td>
                                    <td>{row.email}</td>
                                    <td>{row.gender}</td>
                                </tr>
                            )
                        }
                    })
                }
                </tbody>
            </Table>
        );
    }
}

export default TableComp;
