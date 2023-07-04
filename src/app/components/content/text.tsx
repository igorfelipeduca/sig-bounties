interface ITextProps {
  children: React.ReactNode;
  className?: string;
}

export default function Text({ children, className }: ITextProps) {
  return (
    <>
      <p className={`max-w-xs mt-2 text-sm block sm:hidden ${className}`}>
        {children}
      </p>

      <p className={`max-w-5xl mt-2 text-lg hidden sm:block ${className}`}>
        {children}
      </p>
    </>
  );
}
