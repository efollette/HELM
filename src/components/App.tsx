import * as React from 'react';
import Main from './main'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add(faInstagram, faEnvelope)

export const App = () => {

	return (
		<div>
			<Main />
		</div>
	);
}

