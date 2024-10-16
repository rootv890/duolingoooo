import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function that intreprets if it is Morning, Eveninig or Night and greet accordingly!
export function getGreetingMessage() {
  // get current time
  const currentTime = new Date().getHours();
  let greet = null;

  if (currentTime >= 5 && currentTime < 12) {
    greet = "Good Morning ☕️";
  } else if (currentTime >= 12 && currentTime < 17) {
    greet = "Good Afternoon 🌞";
  } else if (currentTime >= 17 && currentTime <= 20) {
    greet = "Good Evening 🌇";
  } else {
    greet = "Burning the Midnight Oil!  🌙";
  }

  return greet;
}
