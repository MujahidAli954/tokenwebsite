import Faq from "./Faqs/faqs";
import Team from './Team/page'
import Community from './Community/page'
import Footer from'./Footer/page'
import Image from "next/image";
import Navbar from "./navbar/page";
import Header  from "./header/page";
import Feature from "./features/page";
import Tokennomics from "./Tokennomics/Tokennomics";
import Faqs from "./Faqs/faqs"
import Mission from "./Mission/mission"
import Roadmap from "./Roadmap/Roadmap";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Header/>
      <Feature/>
      <Tokennomics/>
      <Team/>
      <Community/>
       <Mission/> 
      <Roadmap/>
      <Faqs/>
      <Footer/> 
      
   

    </main>
  );
}