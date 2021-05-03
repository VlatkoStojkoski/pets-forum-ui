import React, { FC, useEffect, useState } from 'react';

import { Button, VStack } from '@chakra-ui/react';
import { getForumPosts, ForumPostProperties } from 'api';
import { ForumPost } from 'components';
import { HotIcon } from 'icons';
import { Link } from 'react-router-dom';

import { Section } from './Section';

export const HotPosts: FC = () => {
	const [posts, setPosts] = useState<Map<string, ForumPostProperties>>(
		new Map()
	);
	const [postsOrder, setPostsOrder] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			const postsArr = await getForumPosts({ limit: 2 });

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
		<Section title='Најжешки теми' icon={<HotIcon boxSize='32px' />}>
			<VStack gridRowGap={3}>
				{(postsOrder.length &&
					postsOrder.map((postId, postIdI) => {
						const post = posts.get(postId);

						if (!post) return null;

						return (
							<ForumPost config={post} key={postIdI} onLike={handleLike} />
						);
					})) ||
					null}
				<Link to='/forum'>
					<Button colorScheme='brand__brown'>Видете повеќе...</Button>
				</Link>
			</VStack>
		</Section>
	);
};
