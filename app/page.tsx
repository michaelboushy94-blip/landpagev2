import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductVault from "./components/ProductVault";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <ProductVault />
    </main>
  );
}
