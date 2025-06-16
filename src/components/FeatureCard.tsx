import { RawImg } from "@/components";

interface FeatureCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  links: Array<{
    href: string;
    text: string;
  }>;
}

const FeatureCard = ({
  image,
  alt,
  title,
  description,
  links,
}: FeatureCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm h-full overflow-hidden transition-all duration-300 hover:shadow-md">
      {/* Image Section */}
      <div className="bg-gray-50 relative overflow-hidden">
        <RawImg
          alt={alt}
          image={image}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-gray-900 text-xl font-semibold leading-tight mb-3">
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 overflow-hidden">
          {description}
        </p>

        {/* Links Section */}
        <div className="space-y-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="inline-block text-blue-600 text-sm font-medium leading-5 transition-colors duration-200 hover:text-blue-700"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
