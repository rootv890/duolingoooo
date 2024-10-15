import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex flex-col gap-4 p-4 justify-stretch w-fit">
      {/* Default */}
      <Button>Default</Button>

      {/* Primary */}
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"primaryOutline"}>Primary Outline</Button>

      {/* Secondary */}
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"secondaryOutline"}>Secondary Outline</Button>

      {/* Danger */}
      <Button variant={"danger"}>danger</Button>
      <Button variant={"dangerOutline"}>danger Outline</Button>

      {/* Super */}
      <Button variant={"super"}>super</Button>
      <Button variant={"superOutline"}>super Outline</Button>

      {/* Ghost */}
      <Button variant={"ghost"}>ghost</Button>

      {/* Sidebar */}
      <Button variant={"sidebar"}>sidebar</Button>
      <Button variant={"sidebarOutline"}>sidebar Outline</Button>
    </div>
  );
};

export default page;
