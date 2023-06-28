import Header from "./components/header";
import BountiesSidebar from "../bounties/components/sidebar";

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
