import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  work: Work;
};

export default function Work({ work }: Props) {
  const { description, title, imageUrl, url } = work;
  return (
    <Card className="w-full">
      <CardContent>
        <div className="grid grid-cols-9 gap-28">
          <div className="col-span-4 flex flex-col items-center justify-end">
            <CardTitle className=" text-left text-foreground text-[32px]">
              {title}
            </CardTitle>
            <CardDescription className="text-card-foreground text-2xl">
              {description}
            </CardDescription>
          </div>
          <div className="col-span-5">
            <Image src={imageUrl} width={100} height={100} alt={title} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={url ?? "/"} className="text-accent text-2xl">
          View Case Study
        </Link>
      </CardFooter>
    </Card>
  );
}
