import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-white transition-colors duration-300">
      <div className="flex bg-white h-20 max-w-7xl mx-auto px-6 items-center justify-between">
        <Link href="/" className="group flex items-center">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32498a7b-cc07-4e87-a000-4dcc75318721_320w.png" 
            alt="bridg" 
            className="-ml-2 w-auto h-14 object-contain"
          />
        </Link>
        <div className="hidden md:flex gap-8 text-xs tracking-widest text-[#001f3f] font-medium uppercase">
          <Link href="#command" className="hover:text-blue-400 transition-colors">Contract Management</Link>
          <Link href="#tracking" className="hover:text-blue-400 transition-colors">Automated Tracking</Link>
          <Link href="#intelligence" className="hover:text-blue-400 transition-colors">Market Intelligence</Link>
        </div>
        <button className="uppercase bg-white text-[#001f3f] border border-[#001f3f] hover:bg-[#001f3f] hover:text-white transition-all text-xs font-semibold tracking-wider rounded-sm py-2 px-6">
          BOOK A DEMO
        </button>
      </div>
    </nav>
  );
}
