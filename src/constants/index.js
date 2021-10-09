import NetInfo from '@react-native-community/netinfo';
import { setUser } from '../redux/actions';

export const themeStyleSheet = {
    mainColor: '#0B5351',
    secondaryColor: '#00A9A5',
    white: '#FFFFFF',
    darkGray: '#414143',
    lightgray: 'lightgray',
    red: '#ff1717',
    skyBlue: '#27aae1',
    extraLightGray: '#ebebeb',
}

export const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const isInternetConnected = () => {
    return new Promise((resolve, reject) => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                console.log("Internet is Connected")
                resolve(state.isConnected);
            } else {
                console.log("Internet is Not Connected")
                reject(state.isConnected)
            }
        }).catch(err => {
            console.log('isInternetConnected Err : ', err);
            reject(err)
        })
    })
}

export const handleLogout = (dispatch, navigation) => {
    dispatch(setUser({})).then(() => {
    })
}