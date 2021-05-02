import React, { FC, useEffect, useState } from 'react';
import { Button, VStack } from '@chakra-ui/react';

import { getForumPosts, ForumPostProperties } from 'api';
import { ForumPost } from 'components';
import { HotIcon } from 'icons';
import { Section } from './Section';
import { Link } from 'react-router-dom';

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
		<Section
			title='Најжешки теми'
			icon={<HotIcon boxSize='32px' />}
			style={{
				maxWidth: '550px',
			}}
		>
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
