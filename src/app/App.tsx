import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { AppRootState, useAppDispatch, useAppSelector } from './store'
import { useSelector } from 'react-redux'
import { RequestStatusType } from './app-reducer'
import { LinearLoader } from '../common/components/Loader/LinearLoader'

export const App = () => {
  const status = useSelector<AppRootState,RequestStatusType>((state)=> state.app.status)
  // const status = useAppSelector(state => state.app.status)
  return (
    <div>
      {status === 'loading' && <LinearLoader/>}
      <Decks />
      <GlobalError />
    </div>
  )
}
