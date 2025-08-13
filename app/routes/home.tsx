import LandingPage from "~/pages/LandingPage";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Blacksheep" },
    { name: "description", content: "Blacksheep connects people seeking guidance with their lives to people who can help them." },
  ];
}

export default function Home() {
  return <LandingPage />;
}
