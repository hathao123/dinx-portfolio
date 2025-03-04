import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Welcome() {
  return (
    <div className="w-full grid grid-cols-2 gap-12 mt-28">
      <div className="col-span-1 flex flex-col justify-start gap-6">
        <div>
          <span className="bg-primary py-3 px-6 rounded-lg font-semibold text-2xl text-foreground">
            👋 Hello All
          </span>
        </div>
        <h1 className="text-[64px] text-foreground font-eczar font-semibold tracking-[2%] leading-[125%]">
          I’m DĨn occho, A UX/UI and Problem Creator
        </h1>
        <div className="w-full flex flex-row gap-4">
          <Button size={"xl"}>View My Work</Button>
          <Button size={"xl"} variant={"outline"}>
            Contact Me
          </Button>
        </div>
      </div>
      <div className="col-span-1 flex justify-end">
        <Image
          src="/boy-school-welcome.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          className="aspect-square h-full"
        />
      </div>
    </div>
  );
}
