import React, { FC } from 'react';
import { Center, Button, Stack, Heading, Text, Box } from '@chakra-ui/react';

import { Dog, Magnifier } from 'icons';
import { Link } from 'react-router-dom';

export const Landing: FC = () => {
	return (
		<Center flexDirection='column' py={7} mx='auto' w='100%' textAlign='center'>
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
			<Stack gridGap={5} w='clamp(12ch, 10ch, 20ch)' alignItems='center'>
				<Link to='/users/signup'>
					<Button colorScheme='accent' size='xl' rounded='2xl'>
						Започнете
					</Button>
				</Link>
				<Link to='/users/signin'>
					<Button size='xl' rounded='2xl'>
						Логирај се
					</Button>
				</Link>
			</Stack>
		</Center>
	);
};
