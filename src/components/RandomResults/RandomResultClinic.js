import React, { Component } from 'react'
import data from '../../constants/test.json'
import Map from '../../components/Map/Map'
import ClinicList from '../SearchResultLists/ClinicList'
import { connect } from 'react-redux'
import styles from  '../SearchResult/search-result.scss'


import 'rc-checkbox/assets/index.css'


class RandomResultClinic extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clinics: [],
      doctors: [],
    }
  }

  componentDidMount () {
    var th = this
    th.setState({
      clinics: data.clinics
    })
  }

  render () {
    return (
      <div style={{display:'flex'}}>
        <div style={{width:'50%', height:'700px', overflow:'scroll'}}>
          <h4 style={{textAlign:'center'}} className={styles.title__random}>
            <img src={require('../../images/Hospital Reception.png')} alt=''/>
            Клиники в Одессе:</h4>
          <ClinicList {...this.state}/>
        </div>
        <div className={styles.map}>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmv7tub3MW1M58aLBrLKhSi06BeXXNrNI&libraries=geometry,drawing,places"
            loadingElement={<div style={{height: `700px`}}/>}
            containerElement={<div style={{height: `800px`}}/>}
            mapElement={<div style={{height: `700px`, width: '700px'}}/>}
            {...this.state}
          />
        </div>

      </div>
    )
  }
}
const mapStateToProps = state => ({
  someProp: state.someProp
})

export default connect(mapStateToProps)(RandomResultClinic)