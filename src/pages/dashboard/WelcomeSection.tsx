import React, { FC, useEffect, useRef, useState } from 'react';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { NeuContainer } from 'components';
import { BoneButton } from 'icons';
import ResizeObserver from 'resize-observer-polyfill';

export const WelcomeSection: FC = () => {
	const boneDescRef = useRef<HTMLDivElement>(null);
	const [boneDescHeight, setBoneDescHeight] = useState(0);

	useEffect(() => {
		if (boneDescRef.current) {
			new ResizeObserver(() =>
				setBoneDescHeight(boneDescRef.current?.offsetHeight || 0)
			).observe(boneDescRef.current);
		}
	}, [boneDescRef]);

	return (
		<Box>
			<Heading fontSize='2xl'>Здраво Влатко</Heading>
			<Text fontSize='md'>Добро утро!</Text>
			<NeuContainer
				asContainer={Flex}
				gridGap={3}
				p={4}
				rounded='3xl'
				boxShadow={`
					-15px 15px 25px 0 #f6cfa580,
					15px -15px 25px 0 #ffffff
				`}
				flexDir={{
					base: 'column',
					xs: 'row',
				}}
				mt={5}
				maxW='400px'
			>
				<BoneButton
					color='#ff9e53'
					d='block'
					w={{ base: '40%', xs: 'auto' }}
					h={{ base: 'auto', xs: boneDescHeight }}
					mx='auto'
				/>
				<Box
					w='auto'
					textAlign={{ base: 'center', xs: 'left' }}
					h='max-content'
					ref={boneDescRef}
				>
					<Heading fontSize='lg'>Стручна помош</Heading>
					<Text fontSize='xs'>
						Поврзете се со еден од нашите верифицирани ветеринари и добиете
						стручно мислење или помош.
					</Text>
				</Box>
			</NeuContainer>
		</Box>
	);
};
