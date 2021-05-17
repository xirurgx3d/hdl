import React, { useEffect, useState } from 'react'; 
import Main from './routes/Main';
import { checkUser } from './api/Api_user';
import { useHistory } from 'react-router-dom';
import Loader from './components/loader';
import {observer} from "mobx-react-lite";
import UserStore from './store/UserStore';

const App: React.FC = observer(() => {
    const [loading, setLoading] = useState(true)
    const history = useHistory();
    
    useEffect(() => {
        checkUser()
            .then(e => {
                if (e) {
                    UserStore.setIsAuth(e)
                    history.push("/catalog")
                } else {
                    UserStore.setIsAuth(e)
                    history.push("/auth/login")
                }
            })
            .finally(() => setLoading(false))
    }, [UserStore._isAuth])
    
    

    return (
        <>
          
            
        {
            
          loading
            ? <Loader />
            : <Main />  
        }
        </>    
    )
})

export default App;
