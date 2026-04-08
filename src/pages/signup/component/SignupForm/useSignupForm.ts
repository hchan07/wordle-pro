import { useForm } from '@tanstack/react-form';
import { z } from 'zod';

const signupSchema = z.object({	
	username: z.string().min(3, 'Username must be at least 3 characters')
    .max(20, 'Keep it under 20 characters for the leaderboard')
    .regex(/^[a-zA-Z0-9_-]+$/, 'Only letters, numbers, and underscores allowed'),
	email: z.email('Invalid email address'),	
	password: z.string().min(1),	
	confirmPassword: z.string().min(1)
});

const useSignupForm = () => {
	const form = useForm({
		defaultValues: {
			username: '',
			email: '',			
			password: '',
			confirmPassword: '',
		},
		validators: {
			onChange: signupSchema,
		},
		onSubmit: async ({ value }) => {
			console.log('Sign up...', value);
		},
	});

	return form;
};


export default useSignupForm;

export type signupFormType = ReturnType<typeof useSignupForm>;
