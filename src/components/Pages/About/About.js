import React from 'react';
import Typewriter from "typewriter-effect";
import { AboutBoxes } from '../About/AboutBoxes/AboutBoxes';
import { AboutWrapper,
	Image,
	AutoText,
} from './AboutStyles';
import { Mission } from './AboutBoxes/Mission'
import { Vision } from './AboutBoxes/Vision'
import { green } from '@material-ui/core/colors';


export const About = () => {
	return (
		<AboutWrapper>
			<Image>
				<AutoText>
					<Typewriter
						textStyle={{
							display: 'flex',
							flexDirection: 'column',
						}}
						options={{
							strings: ['Welcome to Shoppaholix ...',
								'Shoppaholix is your number one source for all electronics.'],
							autoStart: true,
							loop: true,
							nextTextDelay: 1000,
							typeSpeed: 30,
							color: green,
						}}
					/>
				</AutoText>
			</Image>

			<Mission />
			<Vision />
			<AboutBoxes	/>

		</AboutWrapper>
	)
}


