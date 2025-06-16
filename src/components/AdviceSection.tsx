import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Settings, Droplets, ArrowRight } from "lucide-react";

const AdviceSection = () => {
  const guides = [
    {
      icon: HelpCircle,
      title: "Pomoc s výběrem",
      description:
        "Nevíte, která myčka nádobí je pro vás ta pravá? Náš průvodce nákupem vám pomůže najít perfektní volbu pro vaši kuchyň.",
    },
    {
      icon: Settings,
      title: "Užitečné funkce myčky nádobí",
      description:
        "Seznamte se s nejnovějšími funkcemi myček, které vám mohou usnadnit život a zlepšit výsledky mytí.",
    },
    {
      icon: Droplets,
      title: "Technologie sušení myčky nádobí",
      description:
        "Objevte různé technologie sušení a jak ovlivňují vaše nádobí, spotřebu energie a celkový výkon.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Potřebujete více informací?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Naši odborníci vytvořili obsáhlé průvodce, které vám pomohou udělat
            nejlepší volbu pro vaši kuchyň a životní styl.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, index) => {
            const IconComponent = guide.icon;
            return (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader className="flex flex-col p-6 pb-4">
                  <div className="text-installation-blue mb-3">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-tight leading-7 mt-1.5">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {guide.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-installation-blue text-installation-blue hover:bg-installation-blue/5 gap-2 h-10 px-4 text-sm whitespace-nowrap"
                  >
                    <span>Číst více</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdviceSection;
