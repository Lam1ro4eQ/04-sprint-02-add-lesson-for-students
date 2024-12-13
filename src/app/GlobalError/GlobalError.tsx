import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../store'
import { selectAppError } from '../app-selectors'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectAppError)

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
