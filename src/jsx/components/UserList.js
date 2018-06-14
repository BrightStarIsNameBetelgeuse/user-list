import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from 'jsx/actions';
import Loader from 'react-loader-spinner';
import UserCard from './UserCard';
import './UserList.scss';

const mapStateToProps = state => ({
    loading: state.main.ui.loading,
    userlist: state.main.payload.userlist,
});
const mapDispatchToProps = dispatch => ({
    getUsers: () => {
        dispatch(getUsers());
    },
});

@connect(mapStateToProps, mapDispatchToProps)
class UserList extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        getUsers: PropTypes.func,
        userlist: PropTypes.array,
    }

    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        const { loading, userlist } = this.props;
        return (
            <div className="userlist">
                {
                    loading ?
                        <Loader type="Puff"
                            color="#00BFFF"
                            height="100"
                            width="100"
                        />
                        : userlist.map((el, i) => (<UserCard key={i}
                            img={el.avatar_url}
                            firstName={el.simonjefford}
                            link={el.lastName}
                        />)
                        )
                }
            </div>
        );
    }
}

export default UserList;
