import { ExternalLink, Mail, MapPin } from "lucide-react";
import { contact, profile } from "@/data/content";

// CHANGE #15: Removed the fake contact form (it only showed a "Message sent!"
// popup and delivered nothing - a recruiter's message would have vanished).
// Also removed Pedro's fake phone/location and the dead "#" social links.
// Now uses a real mailto link plus LinkedIn/GitHub from content.js.
// Fixed the 3x `foucs:ring-2` typo by removing the form.
export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {contact.heading}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {contact.text}
        </p>

        <div className="bg-card p-8 rounded-lg shadow-xs space-y-6 text-left">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <a
                href={`mailto:${profile.email}`}
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {profile.location && (
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">{profile.location}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="cosmic-button text-center"
            >
              Send me an email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="outline-button flex items-center justify-center gap-2"
            >
              LinkedIn <ExternalLink size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="outline-button flex items-center justify-center gap-2"
            >
              GitHub <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
