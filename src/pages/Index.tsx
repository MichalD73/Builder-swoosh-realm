import InstallationSteps from "@/components/InstallationSteps";
import InfoSection from "@/components/InfoSection";
import ProductAssortment from "@/components/ProductAssortment";
import AdviceSection from "@/components/AdviceSection";
import VideoPlayer from "@/components/VideoPlayer";
import { RawImg } from "@/components";

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

      {/* Amazon Pharmacy Section */}
      <div
        className="bg-[#f1f7f5] min-h-[390px]"
        style={{ fontFamily: '"Amazon Ember", sans-serif' }}
      >
        <div className="max-w-[1000px] mx-auto relative">
          <div className="flex w-full max-h-[310px]">
            {/* Video Section */}
            <div className="relative w-[55%]">
              <VideoPlayer src="https://m.media-amazon.com/images/G/01/HST-GAME/Kiwi/BLB-Widget/Pharmacy/Videos/Amazon_Pharmacy_ProductEducation.mp4" />
            </div>

            {/* Content Section */}
            <div className="relative w-[45%] p-8 pb-10">
              <div className="relative">
                {/* Logo */}
                <div className="mb-3">
                  <RawImg
                    alt="Amazon Pharmacy"
                    image="https://m.media-amazon.com/images/G/01/HST-GAME/Kiwi/BLB-Widget/Pharmacy/Images/AP_Logo.png"
                    className="max-h-[26px]"
                  />
                </div>

                {/* Headlines */}
                <div>
                  <h2
                    className="text-[#0a2832] pb-1"
                    style={{
                      font: '700 32px/40px "Ember Modern Display Standard", "Amazon Ember", Verdana, sans-serif',
                    }}
                  >
                    Your
                  </h2>
                  <h2
                    className="text-[#0a2832] pb-1"
                    style={{
                      font: '700 32px/40px "Ember Modern Display Standard", "Amazon Ember", Verdana, sans-serif',
                    }}
                  >
                    medications
                  </h2>
                  <h2
                    className="text-[#0a2832]"
                    style={{
                      font: '700 32px/40px "Ember Modern Display Standard", "Amazon Ember", Verdana, sans-serif',
                    }}
                  >
                    made easy
                  </h2>
                </div>

                {/* CTA Button */}
                <a
                  aria-label="Learn more about Amazon Pharmacy"
                  className="inline-block bg-[#ffb447] rounded-lg text-black text-[13px] h-9 leading-9 text-center w-[120px] mt-4 transition-opacity duration-150 hover:opacity-80"
                >
                  Learn more
                </a>

                {/* Product Image */}
                <div className="absolute right-0 top-[12%] max-w-[180px]">
                  <RawImg
                    alt="Amazon Pharmacy product image"
                    image="https://m.media-amazon.com/images/G/01/HST-GAME/Kiwi/BLB-Widget/Pharmacy/Images/Billboard-Hand-With-Bottle.png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image (hidden by default) */}
          <div className="hidden p-0 px-6 pb-6">
            <RawImg
              alt="Amazon Pharmacy product image"
              image="https://m.media-amazon.com/images/G/01/HST-GAME/Kiwi/BLB-Widget/Pharmacy/Images/Billboard-Hand-With-Bottle.png"
              className="max-w-[200px] mx-auto"
            />
          </div>
        </div>
      </div>

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
