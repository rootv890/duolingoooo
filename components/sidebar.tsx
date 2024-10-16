"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  useClerk,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Loader1 from "./bird-loader";
import { Button } from "./ui/button";

interface Props {
  className?: string;
}

function Sidebar({ className }: Props) {
  const { user } = useUser();
  const { openUserProfile, openGoogleOneTap } = useClerk();

  return (
    <div
      className={cn(
        "flex items-start lg:fixed left-0 top-0 px-4 border-r-2 flex-col  h-full lg:w-[256px]",
        className
      )}
    >
      <Link href={"/learn"}>
        <div className="flex p-4 flex-col mx-auto items-center justify-center">
          <Image src={"/mascot.svg"} width={40} height={40} alt="Mascot" />
          <h1 className="text-xl ml-2 font-extrabold text-green-500 tracking-wide">
            DUOLINGOOOOO{" "}
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1 w-full">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>
      <div className="p-4 w-full">
        <ClerkLoading>
          <Loader1 />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <Button
              onClick={() => {
                openUserProfile();
                // openGoogleOneTap();
              }}
              variant={"ghost"}
              className=" gap-3"
            >
              <Image
                src={user?.hasImage ? user?.imageUrl : "/man.svg"}
                alt={user?.firstName || "user"}
                className="object-cover rounded-md"
                width={32}
                height={32}
              />
              <p className="text-xl">{user?.fullName}</p>
            </Button>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl={"/learn"}>
              <Button variant={"ghost"}>Login</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
}

export default Sidebar;
