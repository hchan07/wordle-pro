import Button from "@/common/ui/Button";
import Card from "@/common/ui/Card";
import TextInput from "@/common/ui/TextInput";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

const SignupForm = () => {
	const [hidePassword, setHidePassword] = useState(true);
	const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

	return (
		<Card>
			<div className="gap-6 mb-6 flex flex-col">
				<TextInput 
					type="text"
					label="Username"
					name="username"
					placeholder="Choose a username"
				/>
				<TextInput 
					type="email" 
					name="email" 
					label="Email" 
					placeholder="Enter your email"					
				/>
				<TextInput 					
					name="password" 
					label="Password" 					
					placeholder="Enter your password" 
					type={hidePassword ? 'password' : 'text'} 
					rightAriaLabel={hidePassword ? 'Show password' : 'Hide password'}
					rightIconName={hidePassword ? 'eye' : 'eye-off'}							
					onRightIconClick={() => setHidePassword(!hidePassword)}
				/>	
				<TextInput 
					
					name="confirm-password" 
					label="Confirm Password" 
					placeholder="Confirm your password" 
					type={hideConfirmPassword ? 'password' : 'text'} 
					rightAriaLabel={hideConfirmPassword ? 'Show password' : 'Hide password'}
					rightIconName={hideConfirmPassword ? 'eye' : 'eye-off'}
					onRightIconClick={() => setHideConfirmPassword(!hideConfirmPassword)}
				/>

				<Button
					type="submit"
				>Create Account</Button>				
			</div>
			<div className="text-gray-400 text-sm text-center">Already have an account? <Link to="/login"><span className="text-correct text-sm inline-block">Sign in</span></Link></div>
		</Card>
	);
};

export default SignupForm;