import Header from "./components/header";
interface IIndexLayout {
  children: React.ReactNode;
}

export default function IndexLayout({ children }: IIndexLayout) {
  return (
    <>
      <Header />

      <div className="flex">{children}</div>
    </>
  );
}
