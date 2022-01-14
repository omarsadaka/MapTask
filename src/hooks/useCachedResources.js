import * as React from 'react';
import  AsyncStorage from '@react-native-community/async-storage';

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);
	const [auth , setAuth] = React.useState();
	const [lat , setLat] = React.useState();
	const [lon , setLon] = React.useState();
	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				const auth= await AsyncStorage.getItem('@auth');
				setAuth(auth)
				const lat= ''
				setLat(lat)
				const lon= ''
				setLon(lon)
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setLoadingComplete(true);
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return {
		isLoadingComplete,setLoadingComplete,
		auth, setAuth,
		lat, setLat,
		lon, setLon,
	};
}
