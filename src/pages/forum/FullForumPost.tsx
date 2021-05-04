import React, { FC, useEffect, useState } from 'react';

import { Grid, VStack } from '@chakra-ui/react';
import { ForumPostProperties, getForumPost } from 'api';
import { ForumPost, ForumComments } from 'components';
import { RouteComponentProps } from 'react-router-dom';

export interface FullForumPostProps extends RouteComponentProps {
	match: RouteComponentProps['match'] & {
		params: {
			postId: string;
		};
	};
}

export const FullForumPost: FC<FullForumPostProps> = ({
	match: {
		params: { postId },
	},
}: FullForumPostProps) => {
	const [post, setPost] = useState<ForumPostProperties | null>(null);

	useEffect(() => {
		(async () => setPost(await getForumPost(postId)))();
	}, []);

	const handleLike = () =>
		post &&
		setPost({
			...post,
			liked: !post.liked,
			likes: post.likes + (post.liked ? -1 : 1),
		});

	return (
		<Grid px={7} maxW='700px' mx='auto'>
			{post && (
				<>
					<ForumPost
						config={post}
						showComments={false}
						onLike={handleLike}
						showAll={true}
						mb={8}
					/>
					<VStack gridRowGap={3}>
						<ForumComments postId={postId} />
					</VStack>
				</>
			)}
		</Grid>
	);
};
