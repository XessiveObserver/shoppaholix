import React from 'react'
import Typewriter from "typewriter-effect";

import { AboutHeroImage, AboutAutoText } from './AboutHeroStyles';

export const AboutHero = () => {
    return (
        <div>
            <AboutHeroImage>
				<AboutAutoText>
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
						}}
					/>
				</AboutAutoText>
			</AboutHeroImage>
        </div>
    )
}
