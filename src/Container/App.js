import {connect} from "react-redux";
import AppComp from "../component/App";

const mapStateToProps = state => {
    return {
        json: state.json
    };
};

const App = connect()(AppComp);

export default App;