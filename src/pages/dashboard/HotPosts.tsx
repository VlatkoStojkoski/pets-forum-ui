import React, { FC, useEffect, useState } from 'react';

import { Button, VStack } from '@chakra-ui/react';
import { getForumPosts, ForumPostProperties } from 'api';
import { ForumPost } from 'components';
import { HotIcon } from 'icons';
import { Link } from 'react-router-dom';

import { Section } from './Section';

export const HotPosts: FC = () => {
	const [feed, setFeed] = useState<ForumPostProperties[]>([]);

	useEffect(() => {
		(async () => {
			const feedArr = await getForumPosts({ limit: 2 });
			setFeed(feedArr);
		})();
	}, []);

	return (
		<Section title='Најжешки теми' icon={<HotIcon boxSize='32px' />}>
			<VStack gridRowGap={3}>
				{(feed.length &&
					feed.map((post, postI) => <ForumPost config={post} key={postI} />)) ||
					null}
				<Link to='/forum'>
					<Button colorScheme='brand__brown'>Видете повеќе...</Button>
				</Link>
			</VStack>
		</Section>
	);
};
