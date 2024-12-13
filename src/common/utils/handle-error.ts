import { isAxiosError } from 'axios'
import { setAppErrorAC } from '../../app/app-reducer'
import { Dispatch } from 'redux'

export const HandleError = (e: unknown, dispatch: Dispatch) => {
  let errorMessages: string
  if (isAxiosError(e)) {
    errorMessages = e.response ? e.response.data.errorMessages[0].message : e.message
  } else {
    errorMessages = (e as Error).message
  }
  dispatch(setAppErrorAC(errorMessages))
}