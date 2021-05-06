import { name, internet, lorem, datatype, image } from 'faker';
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

const cammilfy = (str: string): string =>
	str.charAt(0).toUpperCase() + str.slice(1);

const randomAuthor = (): AuthorInfo => {
	const displayName = name.findName();

	return {
		displayName,
		username: internet.userName(displayName),
		avatar: internet.avatar(),
	};
};

const randomPost = async (
	defaultValues?: Partial<ForumPostProperties>
): Promise<ForumPostProperties> => {
	await timeoutPromise(500);

	return merge<ForumPostProperties, Partial<ForumPostProperties>>(
		{
			title: cammilfy(lorem.words(datatype.number({ min: 4, max: 6 }))),
			likes: datatype.number(999),
			liked: datatype.boolean(),
			author: randomAuthor(),
			date: datatype.datetime(),
			type: 'text',
			keywords: Array.from(
				{ length: datatype.number({ min: 5, max: 7 }) },
				() => lorem.word()
			),
			content: lorem.paragraph(4),
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
			likes: datatype.number(999),
			author: randomAuthor(),
			date: datatype.datetime(),
			content: lorem.paragraph(1),
			liked: datatype.boolean(),
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

export interface UserPet {
	name: string;
	bio: string;
	gender: string;
	breed: string;
	animal: string;
	image: string;
	birthday: Date;
	date: Date;
}

const randomPet = async (
	defaultValues?: Partial<UserPet>
): Promise<UserPet> => {
	await timeoutPromise(300);

	return merge<UserPet, Partial<UserPet>>(
		{
			name: name.firstName(),
			bio: lorem.sentence(),
			gender: datatype.boolean() ? 'male' : 'female',
			breed: lorem.words(2),
			animal: lorem.word(),
			birthday: datatype.datetime({ max: Date.now() }),
			date: datatype.datetime(),
			image: image.animals(
				datatype.number({ min: 500, max: 800 }),
				datatype.number({ min: 500, max: 800 })
			),
		},
		defaultValues || {}
	);
};

export const getUserPets = async (
	userId: string,
	{ limit = 3 }: ForumGetQuery = { limit: 3 }
): Promise<UserPet[]> => {
	await timeoutPromise(500);

	return await Promise.all(
		Array.from({ length: limit }, async () => await randomPet())
	);
};
