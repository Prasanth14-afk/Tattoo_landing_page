import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Styles from "@/components/styles";
import Artists from "@/components/artists";
import Booking from "@/components/booking";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen selection:bg-accent selection:text-accent-foreground">
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
