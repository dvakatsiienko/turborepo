import cx from 'clsx';

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 font-medium text-sm text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}>
      {children}
    </button>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
