import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";

interface InfoSectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  className?: string;
}

const InfoSection = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  className = "",
}: InfoSectionProps) => {
  return (
    <section className={`py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <Card className="bg-blue-50 border-gray-200">
          <CardHeader className="text-gray-900 text-xl font-normal tracking-tight leading-7 p-6">
            {title}
          </CardHeader>
          <CardContent className="p-0 px-6 pb-6">
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            <div className="flex gap-4">
              <Button className="bg-installation-blue hover:bg-installation-blue/90 text-white gap-2 h-10 px-4 text-sm whitespace-nowrap">
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              {secondaryButtonText && (
                <Button
                  variant="outline"
                  className="border-installation-blue text-installation-blue hover:bg-installation-blue/5 gap-2 h-10 px-4 text-sm whitespace-nowrap"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  <span>{secondaryButtonText}</span>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InfoSection;
