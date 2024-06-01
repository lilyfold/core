import { SectionContainer } from "../components/commons/SectionContainer";
import { PageTitle } from "../components/commons/PageTitle";
import { Layout } from "../components/Layout/Layout";
import { HomeBanner } from "../components/home/HomeBanner";
import { ContentImage } from "../components/home/ContentImage";
import { Content } from "../components/home/Content";
import { MotionBTTContainer } from "../components/commons/MotionBTTContainer";
import {
  CardBody,
  CardGroup,
  CardHeader,
  CardImage,
  Card,
} from "../components/home/Card";

const HomePage = () => {
  return (
    <Layout className="">
      <div className="main-wrapper relative z-10 bg-bgsecondary pb-20 pt-20 ">
        {/* { Page Banner } */}
        <HomeBanner />
        {/* Components Container */}
        <SectionContainer className="wrap wrap-px flex flex-col items-center justify-center">
          {/* Features */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer
              id="features"
              className="features flex flex-col items-center justify-center"
            >
              <PageTitle
                className="mx-auto text-center text-white"
                type="default"
              >
                Features
              </PageTitle>
              <Content
                className="mt-5 text-center !text-[14px] text-secondary-200 opacity-50"
                alignment="center"
              >
                Hey there! Explore more to know what we got in here!
              </Content>
              <ContentImage />
            </SectionContainer>
          </MotionBTTContainer>
          {/* Card Container Tabs */}
        </SectionContainer>
      </div>
    </Layout>
  );
};

export default HomePage;
