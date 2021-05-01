import React, { FC } from 'react';
import {
	Avatar,
	BoxProps,
	Grid,
	Heading,
	HStack,
	Text,
	VStack,
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';

import { ForumPostProperties } from 'api';
import { PawLike } from 'icons';

export interface ForumPostProps extends BoxProps {
	config: ForumPostProperties;
}

export const ForumPost: FC<ForumPostProps> = ({
	config: {
		title,
		likes,
		author: { displayName, username, avatar },
		date,
		type,
		keywords,
		content,
	},
	...props
}) => {
	return (
		<Grid
			templateColumns='max-content auto'
			templateRows='max-content minmax(100px, auto)'
			w='100%'
			bg='#ffead5'
			padding={3}
			rounded='lg'
			columnGap={3}
			{...props}
		>
			<HStack gridColumn='2/3' gridRow='1/2'>
				<Text
					my='auto'
					w='max-content'
					isTruncated={true}
					maxW={['14ch', '15ch', '100%']}
				>
					{displayName}
				</Text>
				<SmallAddIcon background='#ff9e53' color='bg' rounded='50%' my='auto' />
			</HStack>
			<Avatar gridColumn='1/2' gridRow='1/2' name={displayName} src={avatar} />
			<PawLike
				gridColumn='1/2'
				gridRow='2/3'
				boxSize='2rem'
				color='gray.400'
				placeSelf='center'
			/>
			<VStack gridColumn='2/3' gridRow='2/3' alignItems='normal'>
				<Heading fontSize='xl'>{title}</Heading>
				<Text fontSize='sm' noOfLines={3}>
					{content}
				</Text>
			</VStack>
		</Grid>
	);
};
