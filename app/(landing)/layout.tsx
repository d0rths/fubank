import Header from "./_components/header";
import { Navbar } from "./_components/navbar";
import Footer from "./_components/footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
