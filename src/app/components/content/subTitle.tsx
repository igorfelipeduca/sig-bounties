interface ISubTitleProps {
  subTitle: string;
}

export default function SubTitle({ subTitle }: ISubTitleProps) {
  return (
    <>
      <h2 className="text-md mt-2 block sm:hidden">{subTitle}</h2>
      <h2 className="text-xl mt-2 hidden sm:block">{subTitle}</h2>
    </>
  );
}
