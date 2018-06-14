import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserCard.scss';

class UserCard extends Component {
    static propTypes = {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        link: PropTypes.string,
        img: PropTypes.string,
    };
    render() {
        const { firstName, lastName, img, link } = this.props;
        return (
            <div className="user">
                <img src={img} />
                <div><a href={link}>{`${firstName} ${lastName}`}</a></div>
                <div></div>
            </div>
        );
    }
}

export default UserCard;
