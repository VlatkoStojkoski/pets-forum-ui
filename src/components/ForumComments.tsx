import React, { FC, useState, useEffect } from 'react';

import { getPostComments, ForumCommentProperties, ForumGetQuery } from 'api';
import { ForumComment } from 'components';

export interface ForumCommentsProps {
	postId: string;
	query?: ForumGetQuery;
}

export const ForumComments: FC<ForumCommentsProps> = ({
	postId,
	query,
}: ForumCommentsProps) => {
	const [comments, setComments] = useState<Map<string, ForumCommentProperties>>(
		new Map()
	);
	const [commentsOrder, setCommentsOrder] = useState<string[]>([]);

	useEffect(() => {
		(async () => {
			const commentsArr = await getPostComments(postId, query);

			const commentsOrderArr: string[] = [];

			const keyValueArr: [string, ForumCommentProperties][] = commentsArr.map(
				({ id, ...p }) => {
					commentsOrderArr.push(id);
					return [id, { id, ...p }];
				}
			);

			setComments(new Map(keyValueArr));

			setCommentsOrder(commentsOrderArr);
		})();
	}, []);

	const updateCommentsOrder = () => setCommentsOrder([...commentsOrder]);

	const handleLike = (id: string) => {
		const comment = comments.get(id);

		if (!comment) return;

		comments.set(id, {
			...comment,
			liked: !comment.liked,
			likes: comment.likes + (comment.liked ? -1 : 1),
		});

		updateCommentsOrder();
	};

	return (
		<>
			{(commentsOrder.length &&
				commentsOrder.map((postId, postIdI) => {
					const comment = comments.get(postId);

					if (!comment) return null;

					return (
						<ForumComment config={comment} key={postIdI} onLike={handleLike} />
					);
				})) ||
				null}
		</>
	);
};
