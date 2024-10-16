import Loader1 from "@/components/bird-loader";
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { FaEarlybirds } from "react-icons/fa";

function Header() {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl4 pb-7 flex items-center justify-center">
          <Image src={"/mascot.svg"} width={40} height={40} alt="Mascot" />
          <h1 className="text-2xl ml-2 font-extrabold text-green-500 tracking-wide">
            DUOLINGOOOOO{" "}
            <span className="rotate-12 hover:wiggle  hover:animate-bounce  transition-all ease-in-out cursor-pointer text-3xl absolute ml-2">
              !
            </span>
          </h1>
        </div>
        <ClerkLoading>
          <Loader1 />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" fallbackRedirectUrl={"/learn"}>
              <Button variant={"ghost"}>Login</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
}

export default Header;
