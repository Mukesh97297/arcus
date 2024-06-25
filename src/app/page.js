import AccountingSupport from "@/components/AccountingSupport";
import SheHowWe from "@/components/SheHowWe";
import Footer from "@/components/common/Footer";
import SidebarLayout from "@/components/SidebarLayout";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <SidebarLayout />
      <AccountingSupport />
      <SheHowWe />
      <Footer />
    </>
  );
}
