import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  asChildren?: boolean;
}

export function Button({ children, asChildren }: ButtonProps) {
  const Comp = asChildren ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black transition-colors focus:right-2 ring-white text-sm w-full hover:bg-cyan-300", 
        )}
    >
      {children}
    </Comp>
  )
}