import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setAppErrorAC, setAppStatusAC } from '../../app/app-reducer'
import { isAxiosError } from 'axios'
import { HandleError } from '../../common/utils/handle-error'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setAppStatusAC('succeeded'))
  } catch (e) {
    dispatch(setAppStatusAC('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {

  try {
    // throw new Error ('boom!')
    const res = await decksAPI.updateDeck(params).then((res) => {
      dispatch(updateDeckAC(res.data))
    })
  } catch (e) {
    HandleError(e,dispatch)


    // if (e.response.data.errorMessages && e.code === 'ERR_BAD_REQUEST') {
    //   err = e.response.data.errorMessages[0].message
    //   console.log(err)
    // } else if (e.code === 'ERR_NETWORK') {
    //   err = e.message
    //   console.log(err)
    // } else {
    //   console.log('Нативная ошибка:', e.message);
    // }
  }
}