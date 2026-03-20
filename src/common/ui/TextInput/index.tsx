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
  type: 'email' | 'password' | 'search' | 'text' | 'url'  
} & IconProps<'left'> & IconProps<'right'>

const INPUT_BASE_CLASSES = clsx(
  // Layout & Typography
  'w-full text-base py-3 rounded-md outline-none transition-all',
  'text-white caret-white placeholder:text-gray-500',
  
  // Border States (Normal)
  'border border-zinc-700',
  
  // Border States (Interactive)
  'focus:border-correct focus:ring-1 focus:ring-correct',
  'active:border-correct focus-within:border-correct'
);
    

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, leftIconName, rightIconName, onLeftIconClick, onRightIconClick, leftAriaLabel, rightAriaLabel, ...props }, ref) => {
    const leftIconClassNames = clsx(
      'absolute inset-y-0 flex items-center left-4 text-gray-400', 
      onLeftIconClick && 'cursor-pointer hover:text-gray-300'
    )

    const rightIconClassNames = clsx(
      'absolute inset-y-0 flex items-center right-4 text-gray-400', 
      onRightIconClick && 'cursor-pointer hover:text-gray-300'
    )

  const inputClassNames = clsx(
    INPUT_BASE_CLASSES,
    leftIconName ? 'pl-12' : 'pl-4',
    rightIconName ? 'pr-12' : 'pr-4',
  );

    const LeftWrapper = onLeftIconClick ? 'button' : 'div';
    const RightWrapper = onRightIconClick ? 'button' : 'div';

    
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

TextInput.displayName = "TextInput"

export default TextInput;