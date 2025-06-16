import InstallationSteps from "@/components/InstallationSteps";
import InfoSection from "@/components/InfoSection";
import ProductAssortment from "@/components/ProductAssortment";
import AdviceSection from "@/components/AdviceSection";
import VideoPlayer from "@/components/VideoPlayer";
import FeatureCard from "@/components/FeatureCard";
import ProductCard from "@/components/ProductCard";
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
                  <div className="max-h-[26px] flex items-center gap-1">
                    <span className="font-bold text-black">elektrocz.com</span>
                    <span className="text-[#F97316] font-bold">zdravě</span>
                  </div>
                </div>

                {/* Headlines */}
                <div>
                  <h2
                    className="text-[#0a2832] pb-1"
                    style={{
                      font: '700 25px/40px "Ember Modern Display Standard", "Amazon Ember", Verdana, sans-serif',
                    }}
                  >
                    Příroda a <br />
                    technologie
                  </h2>
                  <h2
                    className="text-[#0a2832]"
                    style={{
                      font: '700 25px/40px "Ember Modern Display Standard", "Amazon Ember", Verdana, sans-serif',
                    }}
                  >
                    ve vaší kuchyni
                  </h2>
                </div>

                {/* CTA Button */}
                <a
                  aria-label="Více informací"
                  className="inline-block bg-[#FF6600] rounded-lg text-[13px] h-9 leading-9 text-center w-[120px] mt-[46px] transition-opacity duration-150 hover:opacity-80"
                >
                  <span className="text-white">Více informací</span>
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

      {/* Product Cards Section */}
      <main className="max-w-5xl mx-auto py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            image="https://media3.bosch-home.com/Images/1200x/MCIM03176413_Straight_On__Open_Fridge___Dish_B36CL80SNS.webp"
            alt="Nerezová chladnička"
            title="Nerezové French Door chladničky"
            description="Volně stojící nebo vestavné French Door chladničky nabízejí nadčasový nerezový luxus. Tyto chladničky se vyznačují působivou kapacitou, robustními skleněnými policemi a krásně jasným LED osvětlením pro snadné prohlížení."
            href="https://a4e29427a2ae4c8888610583723359f1-eca9c8cc96944056b0b157500.projects.builder.codes/?reload=1750108737036#"
          />

          <ProductCard
            image="https://media3.bosch-home.com/Images/1200x/MCIM03176416_Straight_On_Doors_Closed_B36CT80SNB.webp"
            alt="Černá nerezová chladnička"
            title="Černé nerezové French Door chladničky"
            description="Objevte odvážný nový způsob designu vaší kuchyně. Nabízíme chladničky v úžasném černém nerezovém a černém skleněném provedení, které vaší kuchyni dodá vzhled, který je odvážný, elegantní a silný."
            href="https://a4e29427a2ae4c8888610583723359f1-eca9c8cc96944056b0b157500.projects.builder.codes/?reload=1750108737036#"
          />

          <ProductCard
            image="https://media3.bosch-home.com/Images/1200x/16928784_Bosch-RNA-refrigerator-VEX-hero-kitchen-doors-opened-front-view.webp"
            alt="French door chladnička s otevřenými dveřmi"
            title="French Door chladničky s VitaFresh® technologií"
            description={
              <>
                <p>
                  French Door chladničky s technologií VitaFresh® udržují vaše
                  potraviny čerstvé až 3x déle. Spolupracuje s dalšími
                  inovativními funkcemi pro optimální čerstvost, takže si můžete
                  užít méně plýtvání potravinami a více promyšlený design.
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  *Ve srovnání s chladničkou bez technologie VitaFresh®.
                  Výsledky se mohou lišit u různých potravin.
                </p>
              </>
            }
            href="https://a4e29427a2ae4c8888610583723359f1-eca9c8cc96944056b0b157500.projects.builder.codes/?reload=1750108737036#"
            additionalLink={{
              href: "#",
              text: "Zjistěte více o technologii VitaFresh®",
            }}
          />

          <ProductCard
            image="https://media3.bosch-home.com/Product_Shots/1200x/16215474_Bosch-RNA-B36CD50SNS-refrigerator-Straight-On-Full-Kitchen-Closed_def.webp"
            alt="Moderní bílá kuchyně"
            title="French Door chladničky s externím ledem a vodou"
            description="Naplňte svou oblíbenou sklenici nebo láhev bez použití rukou pomocí pokročilé technologie plnění láhví. Naplňte svou oblíbenou nádobu jednou, stiskněte tlačítko plnění láhve pro uložení množství a užijte si plnění bez použití rukou při každém dalším použití."
            href="https://a4e29427a2ae4c8888610583723359f1-eca9c8cc96944056b0b157500.projects.builder.codes/?reload=1750108737036#"
            additionalLink={{
              href: "#",
              text: "Zjistěte více o systému QuickIce Pro™",
            }}
          />

          <ProductCard
            image="https://media3.bosch-home.com/Images/1200x/16959252_Bosch-RNA-white-kitchen-refreshment-center-fridge-ONEPORTAL.webp"
            alt="Chladnička s vinotékou"
            title="Refreshment Center™ chladnička"
            description="Nová Refreshment Center™ french door chladnička obsahuje snadno viditelnou a snadno dostupnou skleněnou zásuvku. Předprogramovaná nastavení odstraňují háádanky při hledání optimální teploty od craftového piva a vín až po šampaňské, džusy a další nápoje."
            href="https://a4e29427a2ae4c8888610583723359f1-eca9c8cc96944056b0b157500.projects.builder.codes/?reload=1750108737036#"
            additionalLink={{
              href: "#",
              text: "Zjistěte více o Refreshment Center™",
            }}
          />

          <ProductCard
            image="https://media3.bosch-home.com/Images/1200x/MCIM02823374_30__Custom_Panel_Refrigerator_Collage.webp"
            alt="Panelové chladničky"
            title="Panelové French Door chladničky"
            description="Bezproblémově integrujte svou chladničku do kuchyně. Chladničky připravené pro vlastní panely se instalují úplně zarovnané, takže vaše kuchyně vyniká ze všech správných důvodů. Kompletně zarovnaná instalace zajišťuje, že vaše kuchyně bude mít čisté linie a nadčasový styl."
            href="https://a4e29427a2ae4c8888610583723359f1-eca9c8cc96944056b0b157500.projects.builder.codes/?reload=1750108737036#"
            target="_self"
          />

          <ProductCard
            image="https://media3.bosch-home.com/Product_Shots/1200x/17644585_B36CD50SNS_Counter_Depth_png_def.webp"
            alt="Counter Depth nerezová French Door chladnička"
            title="Counter Depth French Door chladničky"
            description="Counter-depth chladničky poskytují vaší kuchyni bezproblémovou konfiguraci mezi skříňkami a pracovními deskami. Counter-depth chladnička bude sedět zarovnaně mezi vašimi pracovními deskami, což vám dává čistší a elegantnější vzhled."
            href="https://a4e29427a2ae4c8888610583723359f1-eca9c8cc96944056b0b157500.projects.builder.codes/?reload=1750108737036#"
          />

          <ProductCard
            image="https://media3.bosch-home.com/Product_Shots/1200x/17556616_B36FD50SNS_Counter_Depth_png_def.webp"
            alt="Standardní hloubka nerezová French Door chladnička"
            title="Standardní hloubka French Door chladničky"
            description="Chladničky se standardní hloubkou french door nabízejí větší kapacitu a přesahují za vaše pracovní desky."
            href="https://a4e29427a2ae4c8888610583723359f1-eca9c8cc96944056b0b157500.projects.builder.codes/?reload=1750108737036#"
          />
        </div>
      </main>

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
