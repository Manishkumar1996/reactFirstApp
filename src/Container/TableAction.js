import {connect} from "react-redux";
import Table from "../component/TableAction";

const mapStateToProps = state => {
    return {
        json: state.json
    };
};

const TableAction = connect(mapStateToProps)(Table);

export default TableAction;