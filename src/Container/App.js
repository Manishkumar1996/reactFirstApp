import {connect} from "react-redux";
import AppComponent from "../component/App";

const mapStateToProps = state => {
    return {
        json: state.json
    };
};

const App = connect(mapStateToProps)(AppComponent);

export default App;