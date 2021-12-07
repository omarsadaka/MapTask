import { ENDPOINTS } from './EndPoints';
import { Network } from './Network';

export class User {
	static getDestinationData() {
		return Network.fetch(
			ENDPOINTS.getDestinationData.url,
			{
				method: ENDPOINTS.getDestinationData.method,
			},
			false,
		);
	}
}
