import Image from "next/image";
import Navbar from "./navbar/page";
import Header  from "./header/page";
import Feature from "./features/page";
import Tokennomics from "./Tokennomics/Tokennomics";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Header/>
      <Feature/>
      <Tokennomics/>
    </main>
  );
}
