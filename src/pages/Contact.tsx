import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { CopyButton } from "@/components/CopyButton";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({
      name: "",
      contactNumber: "",
      email: "",
      reason: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Contact Us
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Have questions? We'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 bg-card border-primary/30">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Get in Touch
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Email</p>
                      <div className="flex items-center">
                        <p className="text-muted-foreground">nbucplcricket@gmail.com</p>
                        <CopyButton text="nbucplcricket@gmail.com" label="Email" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-2">Phone</p>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <p className="text-muted-foreground">Nicky: 7001335425</p>
                          <CopyButton text="7001335425" label="Phone" />
                        </div>
                        <div className="flex items-center">
                          <p className="text-muted-foreground">Ricky: 6297984477</p>
                          <CopyButton text="6297984477" label="Phone" />
                        </div>
                        <div className="flex items-center">
                          <p className="text-muted-foreground">Sukhman: 8972850560</p>
                          <CopyButton text="8972850560" label="Phone" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Narsingh Bandh, Burnpur</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-card border-cricket-orange/30">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="contactNumber">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    placeholder="Your contact number"
                    value={formData.contactNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, contactNumber: e.target.value })
                    }
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email (optional)"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="reason">Reason for Contact *</Label>
                  <Select
                    value={formData.reason}
                    onValueChange={(value) =>
                      setFormData({ ...formData, reason: value })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="team-registration">
                        Team Registration
                      </SelectItem>
                      <SelectItem value="sponsorship">Sponsorship</SelectItem>
                      <SelectItem value="general-inquiry">
                        General Inquiry
                      </SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  variant="tournament"
                  className="w-full"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card py-8 border-t border-border mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Narsingh Bandh Premier League. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
