import * as React from 'react';

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);
	const [name , setName] = React.useState();
	const [lat , setLat] = React.useState();
	const [lon , setLon] = React.useState();
	const [dname , setDname] = React.useState();
	const [dlat , setDlat] = React.useState();
	const [dlon , setDlon] = React.useState();
	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				const name= ''
				setName(name)
				const lat= ''
				setLat(lat)
				const lon= ''
				setLon(lon)
				const dname= ''
				setDname(dname)
				const dlat= ''
				setDlat(dlat)
				const dlon= ''
				setDlon(dlon)
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
		name, setName,
		lat, setLat,
		lon, setLon,
		dname, setDname,
		dlat, setDlat,
		dlon, setDlon
	};
}
