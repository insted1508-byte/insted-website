import Scrollytelling from "@/components/Scrollytelling";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ImagesScrollingAnimation } from "@/components/ui/images-scrolling-animation";

export default function Home() {
  return (
    <main className="bg-[#060913] min-h-screen text-white">
      <Header />
      <Scrollytelling />
      <ImagesScrollingAnimation />
      {/* <VideoScrollytelling /> */}
      <Footer />
    </main>
  );
}
