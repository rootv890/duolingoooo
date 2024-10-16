"use client";
import { getGreetingMessage } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

type Props = {};

function Greet({}: Props) {
  const { user } = useUser();
  const greet = getGreetingMessage();
  return (
    <div className="my-2">
      <h3 className="font-semibold ">
        {" "}
        {greet}, {user?.firstName}
      </h3>
    </div>
  );
}

export default Greet;
