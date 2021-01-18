import {connect} from "react-redux";
import Home from "../component/Home";

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

const HomePage = connect(mapStateToProps)(Home);

export default HomePage;