import WhatsAppIcon from "@/components/WhatsAppIcon";
import ProfileAvatars from "@/components/ProfileAvatars";
import GenderSelection from "@/components/GenderSelection";
import ActionButtons from "@/components/ActionButtons";
import backgroundImage from "@/assets/background.jpg";

const Index = () => {
  const handleBackgroundClick = () => {
    window.open("https://chat.whatsapp.com/LnyOvI0EbH34Bb2MEn01tX?mode=hqrt1", "_blank", "noopener,noreferrer");
  };

  return (
    <div 
      className="min-h-screen cursor-pointer relative overflow-hidden"
      onClick={handleBackgroundClick}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
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
