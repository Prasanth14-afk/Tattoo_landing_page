import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Styles from "@/components/styles";
import Artists from "@/components/artists";
import Booking from "@/components/booking";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Portfolio />
      <Styles />
      <Artists />
      <Booking />
      <Footer />
    </main>
  );
}
