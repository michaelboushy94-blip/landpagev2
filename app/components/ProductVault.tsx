import ContractCard from "./ContractCard"; // Assuming you have the card component we made earlier

export default function ProductVault() {
  return (
    <section className="relative z-20 px-6 pb-20 -mt-[100px]">
      <div className="max-w-[1600px] mx-auto bg-white/[0.02] border-2 border-white/20 rounded-t-[40px] backdrop-blur-xl overflow-hidden">
        
        {/* PHASE 01 */}
        <div id="command" className="p-8 md:p-16 border-b-2 border-white/10">
          <div className="inline-flex items-center gap-2 bg-blue-400/10 border-2 border-blue-400 rounded-full px-5 py-2 mb-8">
            <span className="text-blue-400 font-bold uppercase text-xs tracking-widest">/// PHASE 01</span>
          </div>
          <h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mb-4">
            Stop Managing Your Talent in Spreadsheets.
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mb-12">
            Bridg turns messy contracts into actionable data. Upload a PDF, we do the rest.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* You can map your ContractCards here */}
          </div>
        </div>

        {/* Add Phases 02 and 03 here following the same structure */}
      </div>
    </section>
  );
}
