import Footer from "./footer";
import Header from "./header";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex flex-col flex-1 h-full w-full  justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
