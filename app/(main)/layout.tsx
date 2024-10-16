import MobileHeader from "@/components/mobile-header";
import Sidebar from "@/components/sidebar";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Sidebar className="hidden lg:flex" />
      <MobileHeader />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className=" max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
