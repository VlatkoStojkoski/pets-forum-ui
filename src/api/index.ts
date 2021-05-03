import { nanoid } from 'nanoid';

const timeoutPromise = (ms: number) =>
	new Promise((res) => setTimeout(res, ms));

export interface SignUpParameters {
	displayName: string;
	email: string;
	username: string;
	password: string;
}

export const signUp = async (
	newUser: SignUpParameters
): Promise<SignUpParameters> => {
	await timeoutPromise(2000);

	return newUser;
};

export interface SignInParameters {
	username: string;
	password: string;
}

export const signIn = async (
	user: SignInParameters
): Promise<SignInParameters> => {
	await timeoutPromise(1000);

	return user;
};

export interface ForumPostsQuery {
	limit: number;
}

export interface ForumPostProperties {
	title: string;
	likes: number;
	author: {
		displayName: string;
		username: string;
		avatar: string;
	};
	date: Date;
	type: 'image' | 'video' | 'text';
	keywords: string[];
	content: string;
	liked: boolean;
	id: string;
}

const randomPost = async (): Promise<ForumPostProperties> => {
	await timeoutPromise(500);

	return {
		title: 'Наслов',
		likes: Math.floor(Math.random() * 1000),
		liked: !!Math.floor(Math.random() * 2),
		author: {
			displayName: 'Марта Стојкоска',
			username: 'super_martha_69',
			avatar: `https://i.pravatar.cc/64?u=${Math.floor(
				Math.random() * 999999
			)}`,
		},
		date: new Date(),
		type: 'text',
		keywords: ['key1', 'word2', 'lol1'],
		content:
			'lorem ipsum dolor1 sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.',
		id: nanoid(),
	};
};

export const getForumPosts = async (
	{ limit = 20 }: ForumPostsQuery = { limit: 20 }
): Promise<ForumPostProperties[]> => {
	await timeoutPromise(500);

	return await Promise.all(
		Array.from({ length: limit }, async () => await randomPost())
	);
};
