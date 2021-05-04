import merge from 'lodash/merge';
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

export interface ForumGetQuery {
	limit?: number;
}

export interface AuthorInfo {
	displayName: string;
	username: string;
	avatar: string;
}

export interface ForumPostProperties {
	title: string;
	likes: number;
	author: AuthorInfo;
	date: Date;
	type: 'image' | 'video' | 'text';
	keywords: string[];
	content: string;
	liked: boolean;
	id: string;
}

const randomPost = async (
	defaultValues?: Partial<ForumPostProperties>
): Promise<ForumPostProperties> => {
	await timeoutPromise(500);

	return merge<ForumPostProperties, Partial<ForumPostProperties>>(
		{
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
				'lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.',
			id: nanoid(),
		},
		defaultValues || {}
	);
};

export const getForumPosts = async (
	{ limit = 20 }: ForumGetQuery = { limit: 20 }
): Promise<ForumPostProperties[]> => {
	await timeoutPromise(500);

	return await Promise.all(
		Array.from({ length: limit }, async () => await randomPost())
	);
};

export const getForumPost = async (id: string): Promise<ForumPostProperties> =>
	await randomPost({ id });

export interface ForumCommentProperties {
	likes: number;
	author: AuthorInfo;
	date: Date;
	content: string;
	liked: boolean;
	id: string;
}

const randomComment = async (
	defaultValues?: Partial<ForumCommentProperties>
): Promise<ForumCommentProperties> => {
	await timeoutPromise(500);

	return merge<ForumCommentProperties, Partial<ForumCommentProperties>>(
		{
			likes: Math.floor(Math.random() * 100),
			author: {
				displayName: 'Коментар Човек',
				username: 'comment_guy_123',
				avatar: `https://i.pravatar.cc/64?u=${Math.floor(
					Math.random() * 999999
				)}`,
			},
			date: new Date(),
			content:
				'lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.',
			liked: !!Math.floor(Math.random() * 2),
			id: nanoid(),
		},
		defaultValues || {}
	);
};

export const getPostComments = async (
	postId: string,
	{ limit = 20 }: ForumGetQuery = { limit: 20 }
): Promise<ForumCommentProperties[]> => {
	await timeoutPromise(500);

	return await Promise.all(
		Array.from({ length: limit }, async () => await randomComment())
	);
};
