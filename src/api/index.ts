const timeoutPromise = (ms: number) =>
	new Promise((res) => setTimeout(res, ms));

export interface SignUpParameters {
	displayName: string;
	email: string;
	username: string;
	password: string;
}

export const signUp = async (newUser: SignUpParameters) => {
	await timeoutPromise(2000);

	return newUser;
};

export interface SignInParameters {
	username: string;
	password: string;
}

export const signIn = async (user: SignInParameters) => {
	await timeoutPromise(1000);

	return user;
};
