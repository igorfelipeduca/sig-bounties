import Sidebar from "../components/sidebar";
import BountiesHeader from "../components/header";

interface IBountiesLayout {
  children: React.ReactNode;
}

export default function BountiesLayout({ children }: IBountiesLayout) {
  return (
    <>
      <div className="sm:hidden block">
        <div className="sticky top-0 z-10">
          <BountiesHeader />
        </div>

        <div className="flex justify-between align-top overflow-y-scroll mt-16 h-screen">
          {children}
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="fixed w-full z-10">
          <BountiesHeader />
        </div>

        <div className="flex justify-between align-top">
          <div className="relative mt-16 overflow-y-hidden">{children}</div>

          <div className="fixed top-0 right-0 mt-24">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
