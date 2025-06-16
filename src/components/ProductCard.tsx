import { RawImg } from "@/components";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  image: string;
  alt: string;
  title: string;
  description: string | React.ReactNode;
  href: string;
  additionalLink?: {
    href: string;
    text: string;
  };
  target?: "_blank" | "_self";
}

const ProductCard = ({
  image,
  alt,
  title,
  description,
  href,
  additionalLink,
  target = "_blank",
}: ProductCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Image Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="block"
        >
          <div className="aspect-[4/3] relative">
            <RawImg
              alt={alt}
              image={image}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </a>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-gray-900 text-xl font-semibold leading-tight mb-3">
          {title}
        </h2>

        <div className="text-gray-600 leading-relaxed mb-4">{description}</div>

        {/* Action Section */}
        <div className="space-y-3">
          <a
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6600] hover:bg-[#E55A00] text-white text-sm font-medium px-4 py-2.5 rounded-md shadow-md transition-all duration-200"
          >
            <span>Koupit nyní</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {additionalLink && (
            <a
              href={additionalLink.href}
              className="block text-[#FF6600] hover:text-[#E55A00] text-sm font-medium transition-colors duration-150 mt-3"
            >
              {additionalLink.text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
