import React, { FC, useState, useEffect } from 'react';
import { Heading, VStack } from '@chakra-ui/react';

import { getForumPosts, ForumPostProperties } from 'api';
import { ForumPost } from 'components';

export const Forum: FC = () => {
	const [feed, setFeed] = useState<ForumPostProperties[]>([]);

	useEffect(() => {
		(async () => {
			const feedArr = await getForumPosts({ limit: 15 });
			setFeed(feedArr);
		})();
	}, []);

	return (
		<>
			<Heading textAlign='center' fontSize='6xl' mb={6}>
				Форум
			</Heading>
			<VStack gridRowGap={3} px={5} maxW='600px' w='100%' mx='auto'>
				{(feed.length &&
					feed.map((post, postI) => <ForumPost config={post} key={postI} />)) ||
					null}
			</VStack>
		</>
	);
};
