import Loader1 from "@/components/bird-loader";
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex  flex-col lg:flex-row items-center justify-center gap-2 p-4">
      <div className="relative h-[240px] w-[240px] lg:h-[424px] lg:w-[424px] mb-8 lg:mb-0">
        <Image alt="hero" src={"/hero.svg"} fill />
      </div>
      <div>
        <div className="flex flex-col items-center gap-y-8 ">
          <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center text-balance">
            Speak the Language of Your Dreams—Join the Journey with
            DUOLINGOOOOO!
          </h1>
          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <ClerkLoading>
              <Loader1 />
            </ClerkLoading>

            <ClerkLoaded>
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size={"lg"} variant={"secondary"} className="w-full">
                    {" "}
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button
                    size={"lg"}
                    variant={"primaryOutline"}
                    className="w-full "
                  >
                    {" "}
                    I already have an Account!
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button
                  variant={"secondary"}
                  size="lg"
                  className="w-full "
                  asChild
                >
                  <Link href="/learn">Continue Journey</Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
