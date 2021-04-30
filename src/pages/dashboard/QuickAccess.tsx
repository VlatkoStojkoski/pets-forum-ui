import React, { FC } from 'react';

import { Section } from './Section';
import { LightningBolt, Poison, PawEmergency, Rocket, Person } from 'icons';
import { NeuContainer } from 'components';
import { Grid, Stack, Text } from '@chakra-ui/react';

export const QuickAccess: FC = () => {
	const iconsConfig = [
		{
			color: '#a5d653',
			title: 'Опасности',
			icon: Poison,
		},
		{
			color: '#f33a3a',
			title: 'Блиски ветеринари',
			icon: PawEmergency,
		},
		{
			color: '#5465ff',
			title: 'Форум',
			icon: Rocket,
		},
		{
			color: '#8563bf',
			title: 'Профил',
			icon: Person,
		},
	];

	return (
		<>
			<Section title='Брз пристап' icon={<LightningBolt boxSize='32px' />}>
				<Grid
					gridGap={5}
					gridTemplateColumns='repeat(auto-fill, 110px)'
					placeContent='center'
				>
					{iconsConfig.map(({ icon: Icon, color, title }, iconI) => (
						<NeuContainer
							asContainer={Stack}
							boxSize='100%'
							h='max-content'
							rounded='3xl'
							py={4}
							zIndex={1}
							key={iconI}
						>
							<Icon boxSize='100%' color={color} px={4} />
							<Text textAlign='center' fontSize='sm' wordBreak='keep-all'>
								{title}
							</Text>
						</NeuContainer>
					))}
				</Grid>
			</Section>
		</>
	);
};
