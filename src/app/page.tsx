import Scrollytelling from "@/components/Scrollytelling";
import VideoScrollytelling from "@/components/VideoScrollytelling";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#060913] min-h-screen text-white">
      <Header />
      <Scrollytelling />
      {/* <VideoScrollytelling /> */}
      <Footer />
    </main>
  );
}
