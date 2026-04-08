import SignupForm from './component/SignupForm';

const Signup = () => {
	return (
		<div className="w-full md:w-2/3">
			<header className="text-center mb-5">
  			<h1 className="text-4xl font-extrabold text-correct mb-2">WORDLE <span className="text-white">Pro</span></h1>
  			<p className="text-lg text-gray-400">Create your account</p>
			</header>
			<SignupForm />
		</div>
	)
};

export default Signup;