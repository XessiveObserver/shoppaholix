import React from 'react';

import { AboutBoxes } from '../About/AboutBoxes/AboutBoxes';
import { AboutWrapper,
} from './AboutStyles';
import { Mission } from './AboutBoxes/Mission'
import { Vision } from './AboutBoxes/Vision'

export const About = () => {
	return (
		<AboutWrapper>
			<Mission />
			<Vision />
			<AboutBoxes	/>
		</AboutWrapper>
	)
}


