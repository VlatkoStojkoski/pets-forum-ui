import React, { FC, useState, useEffect } from 'react';

import { getForumPosts, ForumPostProperties, ForumGetQuery } from 'api';
import { ForumPost } from 'components';

export interface ForumPostsProps {
	query?: ForumGetQuery;
}

export const ForumPosts: FC<ForumPostsProps> = ({ query }: ForumPostsProps) => {
	const [posts, setPosts] = useState<Map<string, ForumPostProperties>>(
		new Map()
	);
	const [postsOrder, setPostsOrder] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			const postsArr = await getForumPosts(query);

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

	const updatePostsOrder = () => setPostsOrder([...postsOrder]);

	const handleLike = (id: string) => {
		const post = posts.get(id);

		if (!post) return;

		posts.set(id, {
			...post,
			liked: !post.liked,
			likes: post.likes + (post.liked ? -1 : 1),
		});

		updatePostsOrder();
	};

	return (
		<>
			{(postsOrder.length &&
				postsOrder.map((postId, postIdI) => {
					const post = posts.get(postId);

					if (!post) return null;

					return <ForumPost config={post} key={postIdI} onLike={handleLike} />;
				})) ||
				null}
		</>
	);
};
