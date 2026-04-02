import Button from "@/common/ui/Button";
import Card from "@/common/ui/Card";
import TextInput from "@/common/ui/TextInput";

const Login = () => {
	return (
		<div className="p-4">
		<Card>
			<div className="gap-3 flex flex-col">
			<Button>
					hello world
			</Button>
			<Button variant="secondary">
					hello world
			</Button>			
			<Button variant="ghost">
					hello world
			</Button>
			<Button isLoading={true}>
					hello world
			</Button>	
			<Button disabled={true}>
					hello world
			</Button>										
			<div className="text-white"><Button variant="link"><span className="text-correct">test link</span></Button> should not wrap</div>
			<TextInput label="test label" value="test" type="text" leftIconName="search" name="search" color="green" rightIconName="eye" onRightIconClick={() => console.log('test')} rightAriaLabel="test"/>
			<TextInput labelPos="right" label="test label" value="test" type="text" leftIconName="search" name="search" color="green" rightIconName="eye" onRightIconClick={() => console.log('test')} rightAriaLabel="test"/>
			<TextInput labelPos="left" label="test label" value="test" type="text" leftIconName="search" name="search" color="green" rightIconName="eye" onRightIconClick={() => console.log('test')} rightAriaLabel="test"/>
			<TextInput labelPos="hidden" label="test label" value="test" type="text" leftIconName="search" name="search" color="green" rightIconName="eye" onRightIconClick={() => console.log('test')} rightAriaLabel="test"/>
				</div>
		</Card>
		</div>
	)
};

export default Login;