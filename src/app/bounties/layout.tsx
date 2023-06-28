import BountiesSidebar from "./components/sidebar";
import BountiesHeader from "./components/header";

interface IBountiesLayout {
  children: React.ReactNode;
}

export default function BountiesLayout({ children }: IBountiesLayout) {
  return (
    <>
      <div className="sm:hidden block">
        <BountiesHeader />

        <div className="flex justify-between align-top">{children}</div>
      </div>

      <div className="hidden sm:block">
        <BountiesHeader />

        <div className="flex justify-between align-top">
          {children}

          <BountiesSidebar />
        </div>
      </div>
    </>
  );
}
