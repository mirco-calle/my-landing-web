import Introduction from "@/components/introduction";
import TransitionPage from "@/components/TransitionPage";
export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full relative">
        <div className="w-full relative z-20">
          <Introduction />
        </div>
      </div>
    </main>
  );
}
