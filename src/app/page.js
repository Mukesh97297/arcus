import AccountingSupport from "@/components/AccountingSupport";
import Homepage from "./home/Page";
import BanifitSupport from "@/components/BanifitSupport";
import SheHowWe from "@/components/SheHowWe";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/common/Footer";
import ClientSay from "@/components/ClientSay";
import TeamMeat from "@/components/TeamMeat";
import SidebarLayout from "@/components/SidebarLayout";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <SidebarLayout>
        <Hero />
      </SidebarLayout>
      <AccountingSupport />
      <SheHowWe />
      <Footer />
    </>
  );
}
