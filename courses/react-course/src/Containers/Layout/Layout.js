import React, {Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getData, getDataSuccess, getDataFailure } from './LayoutActions';
import UserItem from './components/UserItem/UserItem';
import {Link, browserHistory} from 'react-router';

import './layout.css';

class Layout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      active: false,
    };
  }

  shouldComponentUpdate(prevProps, nextProps) {
    return JSON.stringify(prevProps.data) !==
      JSON.stringify(nextProps.data);
  }

  componentWillMount() {
    const { getData, getDataSuccess, getDataFailure } = this.props;
    getData();
    fetch(`https://randomuser.me/api/?results=10`, {
      method: 'GET',
    }).then(response => {
      return response.json();
    }).then(data => {
      getDataSuccess(data.results);
    }).catch((error) => {
      getDataFailure(error);
    });
  }

  handleRedirectToAuthPage() {
    browserHistory.push('/auth')
  }

  handleActiveUser() {
    this.setState({
      active: !this.state.active,
    });
    this.props.getData({1: 2});
  }

  getCls() {
    return classNames({
      'user-item-wrap': true,
      'active-user': this.state.active,
    });
  }

  render() {
    const { data, error, isFetching } = this.props;
    console.log('RENDER');
    if (data) return (
      <div className="page-wrapper">
        <Header/>
        {
          !isFetching ?
            <div className="content-wrap">
              {
                data.map((item, idx) => (
                  <UserItem
                    key={idx}
                    user={item}
                    userCls={this.getCls.bind(this)}
                    handleActive={this.handleActiveUser.bind(this)}
                  />
                ))
              }
              <Link to="/auth" activeClassName="active-link">Go To Auth PAge</Link>
              <button onClick={this.handleRedirectToAuthPage}>Got to Auth Page</button>
            </div> :
            <div>LOADER</div>
        }
        <Footer/>
      </div>
      return (
        <img src="" alt=""/>
        {name}
        {last}
      )
    );
    return false;
  }
}

const mapStateToProps = (store) => {
  return {
    data: store.layoutReducer.data,
    error: store.layoutReducer.error,
    isFetching: store.layoutReducer.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    getDataSuccess: payload => dispatch(getDataSuccess(payload)),
    getDataFailure: payload => dispatch(getDataFailure(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
