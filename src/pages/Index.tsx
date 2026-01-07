import WhatsAppIcon from "@/components/WhatsAppIcon";
import ProfileAvatars from "@/components/ProfileAvatars";
import GenderSelection from "@/components/GenderSelection";
import ActionButtons from "@/components/ActionButtons";

const Index = () => {
  const handleBackgroundClick = () => {
    window.open("https://chat.whatsapp.com/LnyOvI0EbH34Bb2MEn01tX?mode=hqrt1", "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      className="min-h-screen bg-[#0a0e14] cursor-pointer relative overflow-hidden"
      onClick={handleBackgroundClick}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06b6d4]/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0284c7]/5 rounded-full blur-[150px]" />
      </div>
      <div className="container max-w-2xl mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-8" onClick={(e) => e.stopPropagation()}>
          <WhatsAppIcon />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            WhatsApp Chat & Earn
          </h1>
          <div className="flex items-center justify-center gap-2 text-status-green text-xl font-semibold">
            <div className="w-3 h-3 bg-status-green rounded-full animate-pulse" />
            ONLINE NOW
          </div>
        </div>

        {/* Profile Avatars */}
        <div onClick={(e) => e.stopPropagation()}>
          <ProfileAvatars />
        </div>

        {/* Gender Selection */}
        <div onClick={(e) => e.stopPropagation()}>
          <GenderSelection maleUrl="https://chat.whatsapp.com/LnyOvI0EbH34Bb2MEn01tX?mode=hqrt1" />
        </div>

        {/* Action Buttons */}
        <div onClick={(e) => e.stopPropagation()}>
          <ActionButtons
            whatsappChatUrl="https://chat.whatsapp.com/LnyOvI0EbH34Bb2MEn01tX?mode=hqrc"
            whatsappGroupUrl="https://chat.whatsapp.com/LnyOvI0EbH34Bb2MEn01tX?mode=hqrc"
            telegramGroupUrl="https://chat.whatsapp.com/LnyOvI0EbH34Bb2MEn01tX?mode=hqrc"
          />
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground mt-12">
          <p>
            Click any button above to connect with our community.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
