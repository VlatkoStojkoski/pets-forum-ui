import React, { FC, useState, useEffect } from 'react';
import { Heading, VStack } from '@chakra-ui/react';

import { getForumPosts, ForumPostProperties } from 'api';
import { ForumPost } from 'components';

export const Forum: FC = () => {
	const [posts, setPosts] = useState<Map<string, ForumPostProperties>>(
		new Map()
	);
	const [postsOrder, setPostsOrder] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			const postsArr = await getForumPosts({ limit: 15 });

			const postsOrderArr: string[] = [];

			const keyValueArr: [string, ForumPostProperties][] = postsArr.map(
				({ id, ...p }) => {
					postsOrderArr.push(id);
					return [id, { id, ...p }];
				}
			);

			setPosts(new Map(keyValueArr));

			setPostsOrder(postsOrderArr);
		})();
	}, []);

	const updatePostsOrded = () => setPostsOrder([...postsOrder]);

	const handleLike = (id: string) => {
		const post = posts.get(id);

		if (!post) return;

		posts.set(id, {
			...post,
			liked: !post.liked,
			likes: post.likes + (post.liked ? -1 : 1),
		});

		updatePostsOrded();
	};

	return (
		<>
			<Heading textAlign='center' fontSize='6xl' mb={6}>
				Форум
			</Heading>
			<VStack gridRowGap={3} px={5} maxW='600px' w='100%' mx='auto'>
				{(postsOrder.length &&
					postsOrder.map((postId, postIdI) => {
						const post = posts.get(postId);

						if (!post) return null;

						return (
							<ForumPost config={post} key={postIdI} onLike={handleLike} />
						);
					})) ||
					null}
			</VStack>
		</>
	);
};
