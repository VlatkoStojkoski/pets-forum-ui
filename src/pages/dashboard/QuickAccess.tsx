import React, { FC } from 'react';

import { Grid, Stack, Text } from '@chakra-ui/react';
import { NeuContainer } from 'components';
import { LightningBolt, Poison, PawEmergency, Rocket, Person } from 'icons';
import { Link } from 'react-router-dom';

import { Section } from './Section';

export const QuickAccess: FC = () => {
	const iconsConfig = [
		{
			color: '#a5d653',
			title: 'Опасности',
			url: '/danger',
			icon: Poison,
		},
		{
			color: '#f33a3a',
			title: 'Блиски ветеринари',
			url: '/emergency',
			icon: PawEmergency,
		},
		{
			color: '#5465ff',
			title: 'Форум',
			url: '/forum',
			icon: Rocket,
		},
		{
			color: '#8563bf',
			title: 'Профил',
			url: '/profile',
			icon: Person,
		},
	];

	return (
		<Section title='Брз пристап' icon={<LightningBolt boxSize='32px' />}>
			<Grid
				gridGap={5}
				gridTemplateColumns='repeat(auto-fill, 110px)'
				placeContent='center'
			>
				{iconsConfig.map(({ icon: Icon, color, title, url }, iconI) => (
					<NeuContainer
						asContainer={Stack}
						boxSize='100%'
						h='max-content'
						rounded='3xl'
						py={4}
						zIndex={1}
						key={iconI}
					>
						<Link to={url}>
							<Icon boxSize='100%' color={color} px={4} />
						</Link>
						<Text textAlign='center' fontSize='sm' wordBreak='keep-all'>
							{title}
						</Text>
					</NeuContainer>
				))}
			</Grid>
		</Section>
	);
};
