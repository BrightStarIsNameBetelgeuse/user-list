import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from 'jsx/actions';
import Loader from 'react-loader-spinner';

const mapStateToProps = state => ({
    loading: state.main.ui.loading,
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
    }

    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        return (
            <div>
                {this.props.loading &&
                <Loader type="Puff"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />}
            </div>
        );
    }
}

export default UserList;
