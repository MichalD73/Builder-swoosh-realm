import InstallationSteps from "@/components/InstallationSteps";
import InfoSection from "@/components/InfoSection";
import ProductAssortment from "@/components/ProductAssortment";
import AdviceSection from "@/components/AdviceSection";
import VideoPlayer from "@/components/VideoPlayer";
import FeatureCard from "@/components/FeatureCard";
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

      {/* Feature Cards Section */}
      <main className="max-w-5xl mx-auto py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            image="https://media3.bosch-home.com/Images/1200x/22501047_Bosch-In-Every-Detail-Teaser-480x270.webp"
            alt="domácí spotřebiče bosch"
            title="Bosch v každém detailu"
            description="Na elektrocz.com a v kuchyních Lightstyle najdete spotřebiče Bosch, které spojují kvalitu, design a funkčnost. Díky našemu závazku k detailu si můžete každý produkt opravdu vyzkoušet. Objevujte na elektrocz.com."
            links={[
              { href: "https://elektrocz.com/bosch", text: "O značce Bosch" },
            ]}
          />

          <FeatureCard
            image="https://media3.bosch-home.com/Images/1200x/22501650_Bosch-Planning-Kitchen-Remodel-Teaser-480x270.webp"
            alt="plánování kuchyně"
            title="Plánování kuchyňské rekonstrukce"
            description="S elektrocz.com a kuchyněmi Lightstyle zvládnete snadno i náročnou kuchyňskou rekonstrukci. Od inspirace až po výběr špičkových spotřebičů Bosch – vše připravíme na míru. Kompletní nabídku najdete na elektrocz.com."
            links={[
              {
                href: "https://elektrocz.com/kuchynske-spotrebice",
                text: "Začít plánovat",
              },
            ]}
          />

          <FeatureCard
            image="https://media3.bosch-home.com/Images/1200x/MCIM02055355_Bosch-service-reviews-small-teaser-480x270.webp"
            alt="napsat recenzi"
            title="Napište recenzi"
            description="Podělte se o svou zkušenost s nákupem u elektrocz.com nebo s kuchyněmi Lightstyle. Vaše názory na spotřebiče Bosch pomáhají dalším zákazníkům při výběru."
            links={[
              { href: "https://elektrocz.com/recenze", text: "Napsat recenzi" },
            ]}
          />

          <FeatureCard
            image="https://media3.bosch-home.com/Images/1200x/MCIM02084680_NY-480x270.webp"
            alt="bosch benchmark série"
            title="Benchmark® Serie"
            description="Na elektrocz.com najdete špičkové spotřebiče série Benchmark® – včetně vestavných chladniček, bočních trub SideOpening a varných desek FlexInduction®. Vše k vidění v našich showroomech Lightstyle."
            links={[
              {
                href: "https://elektrocz.com/bosch-benchmark",
                text: "Nakupovat Benchmark® sérii",
              },
            ]}
          />

          <FeatureCard
            image="https://media3.bosch-home.com/Images/1200x/22501049_Bosch-Heart-of-the-Home-Teaser-480x270.webp"
            alt="bosch blog o domácnosti"
            title="Blog a tipy pro spotřebiče"
            description="Praktické tipy do kuchyně, recepty, inspirace a návody, jak nejlépe využít spotřebiče Bosch – vše přehledně na elektrocz.com."
            links={[
              { href: "https://elektrocz.com/blog", text: "Dozvědět se více" },
              { href: "https://elektrocz.com/navody", text: "Návody a videa" },
            ]}
          />

          <FeatureCard
            image="https://media3.bosch-home.com/Images/1200x/MCIM02702328_bosch-home-connect-kitchen-480x270.webp"
            alt="bosch malé prostory"
            title="Malé prostory. Velký potenciál."
            description="Spotřebiče Bosch 24'' dostupné na elektrocz.com se perfektně hodí i do malých prostor. Kuchyně Lightstyle navrhneme přesně podle vašich potřeb – bez kompromisů ve stylu ani kvalitě."
            links={[
              {
                href: "https://elektrocz.com/male-spotrebice",
                text: "Dozvědět se více",
              },
            ]}
          />

          <FeatureCard
            image="https://media3.bosch-home.com/Images/1200x/MCIM02066745_awards_flyout.webp"
            alt="ocenění bosch"
            title="Ocenění a úspěchy"
            description="Naše produkty Bosch získávají ocenění za spolehlivost, design a jednoduchost používání. Přesvědčte se sami v kuchyních Lightstyle nebo na elektrocz.com."
            links={[
              {
                href: "https://elektrocz.com/oceneni",
                text: "Zobrazit ocenění",
              },
            ]}
          />

          <FeatureCard
            image="https://media3.bosch-home.com/Images/1200x/MCIM02362592_Newsletter_Campaign_Teaser_Box_480_x_270.webp"
            alt="Newsletter"
            title="Odběr newsletteru"
            description="Přihlaste se k odběru newsletteru elektrocz.com a získejte užitečné tipy, novinky, recepty i inspiraci z našich showroomů Lightstyle."
            links={[
              {
                href: "https://elektrocz.com/newsletter",
                text: "Přihlásit se",
              },
            ]}
          />
        </div>
      </main>

      {/* Amazon Pharmacy Section */}
      <div
        className="bg-white min-h-[390px]"
        style={{ fontFamily: '"Amazon Ember", sans-serif' }}
      >
        <div className="max-w-[1000px] mx-auto relative">
          <div className="flex w-full max-h-[310px]">
            {/* Video Section */}
            <div className="relative w-[55%]">
              <VideoPlayer src="https://www.youtube.com/watch?v=Bet_k1wHaXI&list=PLAGkymYX2HJZd34DU8XkVyikiMwSUpQUQ&index=2" />
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
                    alt="Ruka držící čerstvé byliny pro vaření"
                    image="https://cdn.builder.io/api/v1/assets/e931550edfef4110aa0b928625ae855e/image-548cef?format=webp&width=800"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image (hidden by default) */}
          <div className="hidden p-0 px-6 pb-6">
            <RawImg
              alt="Ruka držící čerstvé byliny pro vaření"
              image="https://cdn.builder.io/api/v1/assets/e931550edfef4110aa0b928625ae855e/image-548cef?format=webp&width=800"
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
