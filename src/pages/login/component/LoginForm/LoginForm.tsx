import { Link } from '@tanstack/react-router';
import Button from '@/common/ui/Button';
import Card from '@/common/ui/Card';
import TextInput from '@/common/ui/TextInput';


const LoginForm = () => {
	return (
		<Card>
			<div className="gap-6 flex flex-col">
				<TextInput type="email" name="email" label="Email" placeholder="Enter your email"/>
				<TextInput 
					type="password" 
					name="password" 
					label="Password" 
					placeholder="Enter your password" 
					rightAriaLabel="password" 
					rightIconName="eye" 
					onRightIconClick={() => console.log('right icon clicked')}
				/>
				<Link to="/forgot-password"><span className="text-correct text-sm inline-block">Forget password?</span></Link>
				<Button>Sign In</Button>
				<div className="text-gray-400 text-sm text-center">Don't have an account? <Link to="/signup"><span className="text-correct text-sm inline-block">Create account</span></Link></div>
			</div>

		</Card>
	);
};

export default LoginForm;