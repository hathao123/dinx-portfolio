import Welcome from "../Welcome/Welcome";
import { WorkPreview } from "../WorkPreview";

const DUMMY_RECENTLY_WORK: Work[] = [
  {
    id: 1,
    title: "Sheepify States",
    description:
      "Designed some empty state screens in kawaii style for the popular sheepify app",
      imageUrl: "/project-1.png"
  },
];

export default function Home() {
  return (
    <>
      <Welcome />
      <div className="w-full bg-primary p-[88px] container">
        {DUMMY_RECENTLY_WORK?.map((work: Work) => (
          <WorkPreview work={work} key={work.id} />
        ))}
      </div>
    </>
  );
}
