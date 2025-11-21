import { MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  whatsappGroupUrl?: string;
  telegramGroupUrl?: string;
  whatsappChatUrl?: string;
}

const ActionButtons = ({
  whatsappGroupUrl = "https://chat.whatsapp.com/your-group-invite-link",
  telegramGroupUrl = "https://t.me/your-telegram-group",
  whatsappChatUrl = "https://wa.me/your-phone-number",
}: ActionButtonsProps) => {
  const handleClick = (url: string, platform: string) => {
    console.log(`Opening ${platform}:`, url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto px-4 mb-8">
      <Button
        onClick={() => handleClick(whatsappChatUrl, "WhatsApp Chat")}
        className="w-full py-7 text-lg font-bold rounded-2xl bg-primary hover:bg-primary-hover text-primary-foreground shadow-button hover:shadow-[0_12px_32px_-8px_hsl(145,77%,49%,0.4)] transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="mr-2 h-6 w-6" />
        START CHATTING
      </Button>

      <Button
        onClick={() => handleClick(whatsappGroupUrl, "WhatsApp Group")}
        className="w-full py-7 text-lg font-bold rounded-2xl bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-card hover:shadow-[0_12px_32px_-8px_hsl(215,50%,20%,0.3)] transition-all duration-300 hover:scale-105"
      >
        <Users className="mr-2 h-6 w-6" />
        JOIN WHATSAPP GROUP
      </Button>

      <Button
        onClick={() => handleClick(telegramGroupUrl, "Telegram Group")}
        className="w-full py-7 text-lg font-bold rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground shadow-card hover:shadow-[0_12px_32px_-8px_hsl(199,98%,48%,0.3)] transition-all duration-300 hover:scale-105"
      >
        <svg
          className="mr-2 h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
        </svg>
        JOIN TELEGRAM GROUP
      </Button>
    </div>
  );
};

export default ActionButtons;
