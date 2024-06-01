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
    <Layout>
      <div className="main-wrapper relative z-10 bg-gray-900 py-20">
        {/* Page Banner */}
        <HomeBanner />

        {/* Components Container */}
        <SectionContainer className="wrap wrap-px flex flex-col items-center justify-center">
          
          {/* Features Section */}
          <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer
              id="features"
              className="features flex flex-col items-center justify-center bg-gray-800 p-10 rounded-lg shadow-lg"
            >
              <PageTitle
                className="text-center text-yellow-400 mb-4"
                type="default"
              >
                Features
              </PageTitle>
              <Content
                className="text-center text-lg text-gray-300"
                alignment="center"
              >
                Hey there! Explore more to know what we got in here!
              </Content>
              <ContentImage className="mt-5" />
            </SectionContainer>
          </MotionBTTContainer>
          
          {/* Add other sections here */}
          
        </SectionContainer>

      </div>
    </Layout>
  );
};

export default HomePage;
