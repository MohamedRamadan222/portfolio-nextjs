import { Button } from "@/_components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-4 justify-around">
      <div className="w-1/2">
        <Image className="rounded-[2rem]" src={'/assets/1.webp'} width={200} height={200} alt="Hello" />
        <h3 className="mt-6 mb-2 text-3xl">I'm Mohamed Ramadan</h3>
        <p className="text-xl">
          Software Enginner based in Cairo, Egypt
        </p>
      </div>
      <div className="w-1/2">
        <p className="text-4xl ">
          Passionate creating great experiences for Web Development
        </p>
        <div className="flex gap-4 mt-12">
          <Button variant={"primary"} />
          <Button variant={"secondary"} />
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "mohamed",
  favicon: "",
};
