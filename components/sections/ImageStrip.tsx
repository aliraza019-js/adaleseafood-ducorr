import Image from "next/image";

const images = [
  {
    src: "/assets/Lobster+03.jpg",
    alt: "Blue Ocean Lobster — Adale Seafood",
  },
  {
    src: "/assets/pexels-ketut-subiyanto-4349791.jpg",
    alt: "LiTu Tuna Awabi — Adale Seafood",
  },
  {
    src: "/assets/Our+Story.jpg",
    alt: "Adale Seafood team — Our Story",
  },
  {
    src: "/assets/tuna-seared.png",
    alt: "Indian Ocean coastline",
  },
  {
    src: "/assets/GettyImages-1035953564.jpg",
    alt: "Fresh seafood — Adale Seafood",
  },
  {
    src: "/assets/fisherman.png",
    alt: "Adale Seafood operations",
  },
];

export default function ImageStrip() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="flex flex-nowrap gap-4 opacity-50">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="flex-none w-64 h-48 rounded-[1rem] overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={256}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
