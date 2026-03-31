import { forwardRef, type InputHTMLAttributes } from 'react'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import  clsx from 'clsx';

type IconProps<Side extends 'left' | 'right'> = 
  | (Record<`${Side}IconName`, IconName> & 
     Record<`on${Capitalize<Side>}IconClick`, React.MouseEventHandler<HTMLElement>> & 
     Record<`${Side}AriaLabel`, string>)
  | (Record<`${Side}IconName`, IconName> & 
     Partial<Record<`on${Capitalize<Side>}IconClick`, never>> & 
     Partial<Record<`${Side}AriaLabel`, never>>)
  | (Partial<Record<`${Side}IconName`, never>> & 
     Partial<Record<`on${Capitalize<Side>}IconClick`, never>> & 
     Partial<Record<`${Side}AriaLabel`, never>>);

export type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  type: 'email' | 'password' | 'search' | 'text' | 'url',
  name: string,  
} & IconProps<'left'> & IconProps<'right'>

const INPUT_BASE_CLASSES = clsx(
  // Layout & Typography
  'w-full text-base py-3 rounded-md outline-none transition-all',
  'text-white caret-white placeholder:text-gray-500',
  
  // Border States (Normal)
  'border border-zinc-700',
  
  // Border States (Interactive)
  'focus:border-white focus:ring-1 focus:ring-white',
  'active:border-white focus-within:border-white'
);
    
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, leftIconName, rightIconName, onLeftIconClick, onRightIconClick, leftAriaLabel, rightAriaLabel, ...props }, ref) => {
    const baseIconClassNames = clsx(
      'absolute', 
      'top-1/2', 
      '-translate-y-1/2'
    );

    const leftIconClassNames = clsx(
      baseIconClassNames,
      'left-4', 
      onLeftIconClick && 'cursor-pointer hover:text-gray-300'
    )

    const rightIconClassNames = clsx(
      baseIconClassNames,
      'right-4', 
      onRightIconClick && 'cursor-pointer hover:text-gray-300'
    )

  const inputClassNames = clsx(
    INPUT_BASE_CLASSES,
    leftIconName ? 'pl-12' : 'pl-4',
    rightIconName ? 'pr-12' : 'pr-4',
  );

    const LeftWrapper = onLeftIconClick ? 'button' : 'span';
    const RightWrapper = onRightIconClick ? 'button' : 'span';

    
    return (
      <div className="relative w-full">
        {leftIconName && (
          <LeftWrapper className={leftIconClassNames} onClick={onLeftIconClick} aria-label={leftAriaLabel}>          
            <DynamicIcon name={leftIconName} size={24} />          
          </LeftWrapper>
        )}

        <input
          className={inputClassNames}
          ref={ref}
          {...props}
        />

        {rightIconName && (
          <RightWrapper className={rightIconClassNames} onClick={onRightIconClick} aria-label={rightAriaLabel}>
            <DynamicIcon name={rightIconName} size={24}  />          
          </RightWrapper>
        )}
      </div>
    )
  }
)

TextInput.displayName = 'TextInput';

export default TextInput;