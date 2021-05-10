import React, { FC } from 'react';

import {
	AspectRatio,
	Box,
	BoxProps,
	Flex,
	Heading,
	Image,
	StackProps,
	Text,
	VStack,
} from '@chakra-ui/react';
import { UserPet } from 'api';

export interface PetPreviewProps extends BoxProps {
	config: UserPet;
}

interface PetDataProps extends StackProps {
	desc: string;
	value: string;
}

const PetData: FC<PetDataProps> = ({ desc, value, ...props }: PetDataProps) => (
	<VStack
		w='calc(100% / 3)'
		bg='white'
		borderRadius='md'
		placeContent='center'
		p={2}
		{...props}
	>
		<Text fontSize='lg' fontWeight='700' wordBreak='break-all'>
			{value}
		</Text>
		<Text m='0 !important' fontSize='xs'>
			{desc}
		</Text>
	</VStack>
);

export const PetPreview: FC<PetPreviewProps> = ({
	config,
	...props
}: PetPreviewProps) => {
	return (
		<Box p={5} bg='brand.200' borderRadius='xl' {...props}>
			<AspectRatio ratio={2}>
				<Image src={config.image} objectFit='cover' borderRadius='xl' />
			</AspectRatio>
			<Heading textAlign='left' fontSize='3xl' mt={4}>
				{config.name}
			</Heading>
			<Text>{config.bio}</Text>
			<Flex gridColumnGap={3} mt={4}>
				<PetData value={config.name} desc='Име' />
				<PetData
					value={String(
						Math.floor((Date.now() - config.birthday.getTime()) / 31536000000)
					)}
					desc='Возраст'
				/>
				<PetData value={config.breed} desc='Раса' />
			</Flex>
		</Box>
	);
};
