import Image from 'next/image';

interface ServiceIconProps {
  icon: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 40,
  md: 56,
  lg: 72,
};

export default function ServiceIcon({ icon, name, size = 'md' }: ServiceIconProps) {
  const dimension = sizeMap[size];

  return (
    <div className="relative group">
      <div className={`
        relative z-10 rounded-2xl bg-white p-4
        shadow-lg shadow-slate-200/50
        transition-all duration-500
        group-hover:shadow-xl group-hover:shadow-[#87CEEB]/20
        group-hover:-translate-y-1
      `}>
        <Image
          src={`/assets/img/${icon}`}
          alt={name}
          width={dimension}
          height={dimension}
          className="object-contain"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
