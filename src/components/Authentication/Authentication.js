import React, { Component } from 'react'
import { connect } from 'react-redux'
import { history } from '../../history';

export default function (ComposedComponent) {

  class Authentication extends Component {
    constructor(props){
      super(props);
    }

    componentWillMount () {
      if (!this.props.authenticated) {
        history.push('/')
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.authenticated) {
        history.push('/')
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    return {authenticated: state.auth.authenticated}
  }

  return connect(mapStateToProps)(Authentication)
}