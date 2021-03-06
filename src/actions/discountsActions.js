import axios from 'axios'
import * as constants from '../constants/constants'

export function getAllDiscounts () {
  return function (dispatch) {
    dispatch(getDiscountsRequest())
    axios.get(`${constants.ROOT_URL}/discount/getall`)
      .then(response => {
        let discounts = response.data
        dispatch(getDiscountsSuccess(discounts))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function getDiscountsSuccess (discounts) {
  return {
    type: constants.GET_ALL_DISCOUNTS,
    payload: discounts
  }
}

export function getDiscountsRequest () {
  return {
    type: constants.GET_ALL_DISCOUNTS_REQUEST,
    isLoading: true
  }
}