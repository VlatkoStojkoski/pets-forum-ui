import React, { FC, useEffect, useState } from 'react';
import { VStack } from '@chakra-ui/react';

import { getForumPosts, ForumPostProperties } from 'api';
import { ForumPost } from 'components';
import { HotIcon } from 'icons';
import { Section } from './Section';

export const HotPosts: FC = () => {
	const [feed, setFeed] = useState<ForumPostProperties[]>([]);

	useEffect(() => {
		(async () => {
			const feedArr = await getForumPosts({ limit: 3 });
			console.log(feedArr);
			setFeed(feedArr);
		})();
	}, []);

	return (
		<Section title='Најжешки теми' icon={<HotIcon boxSize='32px' />}>
			<VStack gridRowGap={3} maxW='550px'>
				{(feed.length &&
					feed.map((post, postI) => <ForumPost config={post} key={postI} />)) ||
					null}
			</VStack>
		</Section>
	);
};
