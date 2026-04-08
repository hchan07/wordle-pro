import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import Button from "@/common/ui/Button";
import Card from "@/common/ui/Card";
import TextInput from "@/common/ui/TextInput";
import  { type signupFormType} from './useSignupForm';

type SignupFormProp = {
	form: signupFormType
};

const SignupForm = ({form }: SignupFormProp) => {
	const {
		Field,
		Subscribe,
		handleSubmit
	} = form;

	const [hidePassword, setHidePassword] = useState(true);
	const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

	return (
		<Card>
			<form
				onSubmit={(e) => {
        	e.preventDefault();
        	e.stopPropagation();
					console.log('submitting')
        	handleSubmit();
      	}}				
			>
			<div className="gap-6 mb-6 flex flex-col">
				<Field
					name="username"
					children={(field) => {
						return (
							<TextInput 
								type="text"
								label="Username"
								name="username"
								placeholder="Choose a username"
								value={field.state.value}
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}
						/>);
					}}
				/>

				<Field
					name="email"
					children={(field) => {
						return (
							<TextInput 
								type="email" 
								name="email" 
								label="Email" 
								placeholder="Enter your email"
								value={field.state.value}
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}										
							/>
						);
					}}
				/>

				<Field
					name="password"
					children={(field) => {
						return (
							<TextInput 
								name="password" 
								label="Password" 					
								placeholder="Enter your password" 
								type={hidePassword ? 'password' : 'text'} 
								rightAriaLabel={hidePassword ? 'Show password' : 'Hide password'}
								rightIconName={hidePassword ? 'eye' : 'eye-off'}							
								onRightIconClick={() => setHidePassword(!hidePassword)}
								value={field.state.value}
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}										
							/>
						);
					}}
				/>
				<Field
					name="confirmPassword"
					children={(field) => {
						return (
							<TextInput 
								name="confirm-password" 
								label="Confirm Password" 
								placeholder="Confirm your password" 
								type={hideConfirmPassword ? 'password' : 'text'} 
								rightAriaLabel={hideConfirmPassword ? 'Show password' : 'Hide password'}
								rightIconName={hideConfirmPassword ? 'eye' : 'eye-off'}
								onRightIconClick={() => setHideConfirmPassword(!hideConfirmPassword)}
								value={field.state.value}
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}										
							/>
						);
					}}
				/>

				<Subscribe 
				  selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => {
						return ( 
								<Button
									disabled={!canSubmit}
									isLoading={isSubmitting}
									type="submit"
								>Create Account</Button>
							);
					}} />									
			</div>
			</form>
			<div className="text-gray-400 text-sm text-center">Already have an account? <Link to="/login"><span className="text-correct text-sm inline-block">Sign in</span></Link></div>
		</Card>
	);
};

export default SignupForm;