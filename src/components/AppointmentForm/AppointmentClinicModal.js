import React, { Component, Fragment } from 'react'
import * as Icons from '../SvgIcons/SvgIcons.js'
import styles from  '../SignUpModal/sign-up-modal.scss'
import Modal from '../customComponents/Modal'
import AppointmentClinicForm from './AppointmentClinicForm'

class AppointmentClinicModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isModalOpen: false,
      isInnerModalOpen: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({doctor: nextProps.data})
  }

  closeModal () {
    this.setState({
      isModalOpen: false
    })
    document.body.style.overflow = this.state.originalBodyOverflow;
  }

  openModal () {
    this.setState({
      isModalOpen: true,
      originalBodyOverflow: document.body.style.overflow
    })
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed'
  }

  render () {
    console.log(this.props)
    return (
      <Fragment>
        <button onClick={this.openModal} className={styles.login__button}>Записаться на прием</button>

        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}>
          <img width="100%" style={{borderRadius: 3}} src={require('../../images/sign-up.png')} alt="unsplash"/>
          <AppointmentClinicForm {...this.props}/>

          <button
            className={styles.close}
            onClick={this.closeModal}>
            <Icons.IconCloseModal/>
          </button>
        </Modal>
      </Fragment>
    )
  }
}

export default AppointmentClinicModal;
