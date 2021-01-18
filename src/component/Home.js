import React from 'react';
import '../App.css';
import Logo from '../logo.svg';
import Slider from 'react-slick';
import {usersDetail} from "../Actions/UsersDetail";

class HomePage extends React.Component {

    state = {
        selectedOption: null,
    };

    componentDidMount() {
        this.props.dispatch(usersDetail());
    }

    render() {

        const settings = {
            arrows: true,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            className: 'mt-4 customSlick',
        };

        const users = this.props.users;

        return (

            <div className="container">
                <Slider {...settings}>
                    {users.map(user => {
                        return (
                            <div className="px-3" key={user._id}>
                                <div className="card">
                                    <img className="card-img-top w-50 m-auto" src={Logo} alt="Card image"/>
                                    <div className="card-body text-center">
                                        <h4 className="card-title">{user.name}</h4>
                                        <p className="card-text m-0">{user.address}</p>
                                        <p className="card-text m-0"><strong>Balance: </strong>{user.balance}</p>
                                        <p className="card-text m-0"><strong>Company: </strong>{user.company}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}

export default HomePage;
