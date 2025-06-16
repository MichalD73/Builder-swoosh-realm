import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Zap, Tag, ArrowRight } from "lucide-react";

const ProductAssortment = () => {
  const products = [
    {
      icon: Leaf,
      title: "Energeticky úsporné myčky nádobí",
      description:
        "Ušetřete na účtu za energii s myčkami s hodnocením A+++. Ideální pro ekologicky uvědomělé domácnosti.",
      badge: "Ekologické",
      badgeColor: "bg-green-500",
      link: "https://65a002121f234a7ea8f98f58a33fe36a-50b7c938910e4688a8fcea861.projects.builder.codes/dishwashers/energy-efficient",
    },
    {
      icon: Zap,
      title: "Všechny předplatné volně stojících myček",
      description:
        "Flexibilní možnosti předplatného pro volně stojící myčky. Upgrady nebo zrušení kdykoli.",
      badge: "Flexibilní",
      badgeColor: "bg-orange-500",
      link: "https://65a002121f234a7ea8f98f58a33fe36a-50b7c938910e4688a8fcea861.projects.builder.codes/dishwashers/subscriptions",
    },
    {
      icon: Tag,
      title: "Akce na myčky nádobí",
      description:
        "Nenechte si ujít naše aktuální akce a speciální nabídky na nejlepší značky myček nádobí.",
      badge: "Časově omezeno",
      badgeColor: "bg-red-500",
      link: "https://65a002121f234a7ea8f98f58a33fe36a-50b7c938910e4688a8fcea861.projects.builder.codes/dishwashers/promotions",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Prohlédněte si náš sortiment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Objevte náš pečlivě vybraný sortiment myček nádobí, od energeticky
            úsporných modelů až po flexibilní předplatné.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow duration-200"
              >
                <CardHeader className="flex flex-col p-6 pb-4">
                  <div className="flex justify-between items-start">
                    <div className="text-installation-blue mb-2">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <Badge
                      className={`${product.badgeColor} text-white text-xs px-2.5 py-0.5 rounded-full`}
                    >
                      {product.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-tight leading-7 mt-1.5">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <a
                    href={product.link}
                    className="inline-flex items-center text-installation-blue font-medium hover:text-installation-blue/80 transition-colors"
                  >
                    <span>Zobrazit produkty</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform hover:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductAssortment;
