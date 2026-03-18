import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react"
import styles from './input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, leftIcon, rightIcon, ...props }, ref) => {
    
    return (
      <div className={`group relative w-full bg-correct ${styles.inputRoot}`}>
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-wordle-green">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-wordle-green">
            {rightIcon}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export default Input;