import VideoTemplate from "@/components/video/VideoTemplate";
import { DLMascot } from "@/components/DLMascot";
import { InfoSection } from "@/components/InfoSection";

export default function App() {
  return (
    <div className="bg-[#02040A] min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Hero Banner Area (Video Animation) */}
      <VideoTemplate />
      
      {/* Informational Section */}
      <InfoSection />

      {/* Global Interactive Elements */}
      <DLMascot />
    </div>
  );
}
