import { Check } from "lucide-react";

const ProfileAvatars = () => {
  const profiles = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
  ];

  return (
    <div className="flex justify-center gap-4 mb-12">
      {profiles.map((profile, index) => (
        <div
          key={profile.id}
          className="relative animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-muted to-muted/50 shadow-card overflow-hidden border-4 border-white">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5" />
          </div>
          <div className="absolute bottom-0 right-0 w-7 h-7 bg-status-green rounded-full flex items-center justify-center border-4 border-white shadow-soft">
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileAvatars;
