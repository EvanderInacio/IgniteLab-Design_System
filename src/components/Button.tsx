import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChildren?: boolean;
}

export function Button({ children, asChildren, className, ...props}: ButtonProps) {
  const Comp = asChildren ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded font-semibold text-black transition-colors focus:right-2 ring-white text-sm w-full hover:bg-cyan-300", 
        className,
        )}
        {...props}
    >
      {children}
    </Comp>
  )
}