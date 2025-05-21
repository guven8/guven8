import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="guven8.svg"
        alt="guven8"
        width={331}
        height={122}
        priority
        className="block m-auto"
      />
    </main>
  );
}
