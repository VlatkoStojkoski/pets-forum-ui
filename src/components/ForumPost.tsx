import React, { FC } from 'react';

import { ChatIcon, SmallAddIcon } from '@chakra-ui/icons';
import {
	Avatar,
	Box,
	BoxProps,
	Grid,
	Heading,
	HStack,
	IconButton,
	Text,
	VStack,
} from '@chakra-ui/react';
import { ForumPostProperties } from 'api';
import { PawLike } from 'icons';
import millify from 'millify';
import { Link } from 'react-router-dom';

export interface ForumPostProps extends BoxProps {
	config: ForumPostProperties;
	onLike(id: string): void;
	showComments?: boolean;
	showAll?: boolean;
}

export const ForumPost: FC<ForumPostProps> = ({
	config: {
		title,
		author: { displayName, username, avatar },
		content,
		likes,
		liked,
		id,
	},
	onLike,
	showComments = true,
	showAll = false,
	...props
}: ForumPostProps) => {
	return (
		<Grid
			templateColumns='max-content auto'
			templateRows='max-content minmax(100px, auto) auto'
			w='100%'
			bg='brand.150'
			padding={3}
			rounded='lg'
			columnGap={3}
			{...props}
		>
			<HStack gridColumn='2/3' gridRow='1/2'>
				<Link to={`/${username}`}>
					<Text
						my='auto'
						w='max-content'
						isTruncated={true}
						maxW={['14ch', '15ch', '100%']}
						fontWeight='550'
					>
						{displayName}
					</Text>
				</Link>
				<SmallAddIcon bg='brand.800' color='bg' rounded='50%' my='auto' />
			</HStack>
			<Avatar
				gridColumn='1/2'
				gridRow='1/2'
				name={displayName}
				src={avatar}
				placeSelf='center'
				size='sm'
			/>
			<Grid placeSelf='center' placeItems='center'>
				<Text
					textAlign='center'
					fontWeight={liked ? '700' : 'normal'}
					fontSize='sm'
				>
					{millify(likes, {
						precision: 1,
						decimalSeparator: '.',
					})}
				</Text>
				<IconButton
					aria-label='Like button'
					variant='unstyled'
					_focus={{ outline: 'none' }}
					onClick={() => onLike(id)}
					size='sm'
					icon={
						<PawLike
							gridColumn='1/2'
							gridRow='2/3'
							boxSize='1.625rem'
							color={`${liked ? 'accent' : 'gray'}.400`}
							_hover={{
								color: `${liked ? 'accent' : 'gray'}.500`,
							}}
							placeSelf='center'
						/>
					}
				/>
			</Grid>
			<VStack gridColumn='2/3' gridRow='2/3' alignItems='normal'>
				<Heading fontSize='xl'>{title}</Heading>
				<Box pos='relative'>
					<Text fontSize='sm' {...(!showAll && { noOfLines: 4 })} zIndex={-5}>
						{content}
					</Text>
					{!showAll && (
						<Box
							zIndex={5}
							w='100%'
							h='100%'
							pos='absolute'
							top={0}
							bg='linear-gradient(rgba(0, 0, 0, 0), rgb(255, 234, 213))'
						/>
					)}
				</Box>
			</VStack>
			{showComments && (
				<Box
					gridColumn='1/3'
					gridRow='3/4'
					color='brand__brown.800'
					fontWeight='600'
					placeSelf='center'
				>
					<Link to={`/forum/posts/${id}`}>
						<HStack>
							<ChatIcon boxSize='16px' />
							<Text>Коментари</Text>
						</HStack>
					</Link>
				</Box>
			)}
		</Grid>
	);
};
