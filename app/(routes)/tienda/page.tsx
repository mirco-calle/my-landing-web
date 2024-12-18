import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";

import { StoreCategories } from "@/components/store/store-categories";
import { StoreHeader } from "@/components/store/store-header";
import { StoreStats } from "@/components/store/store-stats";
import { TimeLine } from "@/components/time-line";
import TransitionPage from "@/components/TransitionPage";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <div className="min-h-screen max-w-7xl mx-auto px-4 py-8 md:px-8">
          <StoreHeader />
          <StoreStats />
          <StoreCategories />
        </div>
      </ContainerPage>
    </>
  );
};

export default PageAboutMe;
