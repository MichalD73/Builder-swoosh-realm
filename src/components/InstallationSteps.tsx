import { Card, CardContent } from "@/components/ui/card";
import { Truck, Wrench, Plug } from "lucide-react";

export default function InstallationSteps() {
  const steps = [
    {
      number: 1,
      icon: Truck,
      title: "We'll deliver your dishwasher to your house",
      description:
        "Our delivery team will bring your new dishwasher directly to your home at a time that suits you.",
    },
    {
      number: 2,
      icon: Wrench,
      title: "We build in your built-in dishwasher",
      description:
        "Our expert technicians will professionally install and build in your integrated dishwasher.",
    },
    {
      number: 3,
      icon: Plug,
      title: "We connect your freestanding dishwasher",
      description:
        "We'll connect all the water and electrical connections to get your dishwasher working perfectly.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Have your dishwasher delivered and installed
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our professional installation service ensures your dishwasher is set
          up correctly and ready to use.
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
