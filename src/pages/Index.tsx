import WhatsAppIcon from "@/components/WhatsAppIcon";
import ProfileAvatars from "@/components/ProfileAvatars";
import GenderSelection from "@/components/GenderSelection";
import ActionButtons from "@/components/ActionButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-2xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8">
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
        <ProfileAvatars />

        {/* Gender Selection */}
        <GenderSelection />

        {/* Action Buttons */}
        <ActionButtons
          whatsappChatUrl="https://wa.me/YOUR_PHONE_NUMBER"
          whatsappGroupUrl="https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK"
          telegramGroupUrl="https://t.me/YOUR_TELEGRAM_GROUP"
        />

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground mt-12">
          <p>
            Click any button above to connect with our community.
            <br />
            Remember to replace the URLs with your actual links!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
