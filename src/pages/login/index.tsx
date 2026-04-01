import Button from "@/common/ui/Button";
import TextInput from "@/common/ui/TextInput";

const Login = () => {
	return (
		<div className="m-10 bg-black gap-2 flex flex-col p-2">
			<Button>
					hello world
			</Button>
			<Button variant="secondary">
					hello world
			</Button>			
			<Button variant="ghost">
					hello world
			</Button>			
			<div className="text-white"><Button variant="link"><span className="text-correct">test link</span></Button> should not wrap</div>
			<TextInput value="test" type="text" leftIconName="search" name="search" color="green" rightIconName="eye" onRightIconClick={() => console.log('test')} rightAriaLabel="test"/>
		</div>
	)
};

export default Login;