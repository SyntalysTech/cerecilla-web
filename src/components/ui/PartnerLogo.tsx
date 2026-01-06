import Image from 'next/image';

interface PartnerLogoProps {
  logo: string;
  name: string;
}

export default function PartnerLogo({ logo, name }: PartnerLogoProps) {
  return (
    <div className="group relative flex items-center justify-center p-6 md:p-8">
      <Image
        src={`/assets/img/logos/${logo}`}
        alt={name}
        width={140}
        height={60}
        className="
          object-contain max-h-12 md:max-h-14
          grayscale opacity-60
          transition-all duration-500
          group-hover:grayscale-0 group-hover:opacity-100
          group-hover:scale-110
        "
      />
    </div>
  );
}
