interface ITitleProps {
  title: string;
}

export default function Title({ title }: ITitleProps) {
  return (
    <>
      <h1 className="text-2xl font-bold block sm:hidden">{title}</h1>

      <h1 className="text-4xl font-bold hidden sm:block">{title}</h1>
    </>
  );
}
