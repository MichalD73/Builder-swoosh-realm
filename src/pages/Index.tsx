import InstallationSteps from "@/components/InstallationSteps";
import InfoSection from "@/components/InfoSection";
import ProductAssortment from "@/components/ProductAssortment";
import AdviceSection from "@/components/AdviceSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-8">
        <InstallationSteps />
      </div>

      <InfoSection
        title="Změřte rozměry výklenku"
        description="Před nákupem vestavné myčky nádobí je důležité pečlivě změřit rozměry výklenku ve vaší kuchyni. To zajistí, že se vaše nová myčka dokonale vejde a bude možné ji nainstalovat bez problémů. Náš průvodce měřením vám pomůže získat přesné rozměry."
        primaryButtonText="Průvodce měřením"
        secondaryButtonText="Potřebujete pomoc s měřením?"
        className="bg-blue-50"
      />

      <ProductAssortment />

      <AdviceSection />

      <div className="max-w-7xl mx-auto mb-10 px-4">
        <InfoSection
          title="Průvodce nákupem myčky nádobí"
          description="Výběr správné myčky nádobí může být při tolika dostupných možnostech ohromující. Náš komplexní nákupní průvodce pokrývá vše od kapacity a energetické účinnosti až po speciální funkce a instalační požadavky. Udělejte informované rozhodnutí s odborným poradenstvím."
          primaryButtonText="Číst nákupní průvodce"
          secondaryButtonText="Chatovat s odborníkem"
          className=""
        />
      </div>
    </div>
  );
};

export default Index;
