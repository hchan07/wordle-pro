import LoginForm from './LoginForm';
import useLoginForm  from './useLoginForm';

const LoginFormContainer = () => {
	const form =  useLoginForm();

	return (		
		<LoginForm form={form}/>
	);
};

export default LoginFormContainer;