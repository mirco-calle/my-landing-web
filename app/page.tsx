import Introduction from "@/components/introduction";
import { AboutProfile } from "@/components/about-profile";
import TransitionPage from "@/components/TransitionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="relative z-20">
        <Introduction />
        <AboutProfile />
      </div>
    </main>
  );
}
