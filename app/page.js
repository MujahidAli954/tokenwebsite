<<<<<<< HEAD

import Image from "next/image";
import Faq from "./Faqs/page";
import Team from './Team/page'
import Community from './Community/page'
import Footer from'./Footer/page'
export default function Home() {
  return (
    <main className="">
    <Footer/>
     
=======
import Image from "next/image";
import Navbar from "./navbar/page";
import Header  from "./header/page";
import Feature from "./features/page";
import Tokennomics from "./Tokennomics/Tokennomics";
import Faqs from "./Faqs/faqs"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Header/>
      <Feature/>
      <Tokennomics/>
>>>>>>> c7eb1888d36a1046df867712941bc3e84293462a
    </main>
  );
}