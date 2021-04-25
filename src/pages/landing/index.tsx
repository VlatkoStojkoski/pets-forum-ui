import React, { FC } from 'react';
import { Center, Button, Stack, Heading, Text, Box } from '@chakra-ui/react';

import { Dog, Magnifier } from 'icons';

export interface LandingProps {}

export const Landing: FC<LandingProps> = (props) => {
	return (
		<Center flexDirection='column' pt={20} px={7} mx='auto' textAlign='center'>
			<Box pos='relative' w='272px' h='272px' mb={8}>
				<Dog
					w='170px'
					h='max-content'
					pos='absolute'
					left='50%'
					top='75px'
					transform='translateX(-50%)'
				/>
				<Magnifier boxSize='300px' pos='absolute' left={0} />
			</Box>
			<Stack mb={10} alignItems='center' gridRowGap={2} maxW='50ch'>
				<Heading fontSize={{ base: '4xl', sm: '5xl' }} w='100%'>
					Најдоброто за милениците
				</Heading>
				<Text
					w={{ base: '85%', sm: '65%' }}
					fontSize={{ base: 'lg', sm: 'xl' }}
				>
					Најдете точни одговори на сите ваши прашања.
				</Text>
			</Stack>
			<Stack gridGap={5} w='max-content'>
				<Button colorScheme='accent' size='xl' rounded='2xl'>
					Започнете
				</Button>
				<Button size='xl' rounded='2xl'>
					Логирај се
				</Button>
			</Stack>
		</Center>
	);
};
