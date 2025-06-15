import { Card, CardContent } from "@/components/ui/card";
import { Truck, Wrench, Plug } from "lucide-react";

export default function InstallationSteps() {
  const steps = [
    {
      number: 1,
      icon: Truck,
      title: "Doručíme myčku až domů",
      description:
        "Náš doručovací tým přiveze vaši novou myčku přímo k vám domů v čase, který vám vyhovuje.",
    },
    {
      number: 2,
      icon: Wrench,
      title: "Zabudujeme vaši vestavnou myčku",
      description:
        "Naši odborní technici profesionálně nainstalují a zabudují vaši integrovanou myčku.",
    },
    {
      number: 3,
      icon: Plug,
      title: "Připojíme vaši volně stojící myčku",
      description:
        "Připojíme všechny vodovodní a elektrické přípojky, aby vaše myčka fungovala perfektně.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Nechte si doručit a nainstalovat myčku
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Naše profesionální instalační služba zajišťuje, že bude vaše myčka
          správně nastavena a připravena k použití.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <Card
              key={step.number}
              className="hover:shadow-md transition-shadow duration-150"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-installation-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-installation-blue">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
