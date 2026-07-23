import HomePage from "./features/home_page";
import { SpeedInsights } from "@vercel/speed-insights/next"
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Home | VVIWA",
// };
export default function Home() {
   <SpeedInsights />
  return <HomePage />;
  
}
