import Image from "next/image";

const HERO_IMAGE = "/common/saibaba.jpeg";
const SIDE_IMAGE_FRAME =
  "relative aspect-[3/4] w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] overflow-hidden rounded-xl shadow-lg ring-2 ring-white/30";

function HeroSideImage() {
  return (
    <div className={SIDE_IMAGE_FRAME}>
      <Image
        src={HERO_IMAGE}
        alt="Sai Baba"
        fill
        className="object-cover object-center"
        sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
        priority
      />
    </div>
  );
}

type HeroWithSideImagesProps = {
  children: React.ReactNode;
};

export function HeroWithSideImages({ children }: HeroWithSideImagesProps) {
  return (
    <div className="relative z-[3] w-full container mx-auto px-4 py-12 md:py-16">
      <div className="grid w-full grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-6">
        <div className="flex justify-center lg:col-span-3">
          <HeroSideImage />
        </div>

        <div className="order-first w-full min-w-0 text-center lg:order-none lg:col-span-6">
          {children}
        </div>

        <div className="flex justify-center lg:col-span-3">
          <HeroSideImage />
        </div>
      </div>
    </div>
  );
}
