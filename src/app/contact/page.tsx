"use client";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Accordin from "@/components/Accordin";

import {
  Mail,
  MessageCircle,
  Building,
  Phone,
  Send,

  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#F9F9F9] py-16 mt-18">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1d2939] mb-6">
              We&apos;d Love to Hear From You
            </h1>
            <p className="text-lg text-[#667085] leading-relaxed">
              Whether you have a question about our product, want to schedule a
              demo, or are interested in joining our team  feel free to reach
              out. The Tasknest team is always ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Options */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Email Card */}
                <Card className="border border-black shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-[#f2f4f7] rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#667085]" />
                      </div>
                      <h3 className="font-semibold text-[#1d2939]">Email</h3>
                    </div>
                    <p className="text-sm text-[#667085] mb-3">
                      Stay updated and get in touch directly.
                    </p>
                    <p className="text-sm text-[#344054] font-medium">
                      hey@tasknest.com
                    </p>
                  </CardContent>
                </Card>

                {/* Chat Card */}
                <Card className="border border-black shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-[#f2f4f7] rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-[#667085]" />
                      </div>
                      <h3 className="font-semibold text-[#1d2939]">Chat</h3>
                    </div>
                    <p className="text-sm text-[#667085] mb-3">
                      Message us anytime for quick help.
                    </p>
                    <Button
                      variant="link"
                      className="text-sm text-[#2f78ee] p-0 h-auto font-medium"
                    >
                      Start conversation
                    </Button>
                  </CardContent>
                </Card>

                {/* Office Card */}
                <Card className="border border-black shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-[#f2f4f7] rounded-lg flex items-center justify-center">
                        <Building className="w-5 h-5 text-[#667085]" />
                      </div>
                      <h3 className="font-semibold text-[#1d2939]">Office</h3>
                    </div>
                    <p className="text-sm text-[#667085] mb-3">
                      Visit or write to us at:
                    </p>
                    <p className="text-sm text-[#344054] font-medium">
                      1980 Mission Street, San Francisco, CA
                      <br />
                      94103, USA
                    </p>
                  </CardContent>
                </Card>

                {/* Phone Card */}
                <Card className="border border-black shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-[#f2f4f7] rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#667085]" />
                      </div>
                      <h3 className="font-semibold text-[#1d2939]">Phone</h3>
                    </div>
                    <p className="text-sm text-[#667085] mb-3">
                      Speak to our team for support.
                    </p>
                    <p className="text-sm text-[#344054] font-medium">
                      +1 (415) 555-0198
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <Twitter className="w-5 h-5 text-[#667085] hover:text-[#1d2939] cursor-pointer" />
                <Facebook className="w-5 h-5 text-[#667085] hover:text-[#1d2939] cursor-pointer" />
                <Instagram className="w-5 h-5 text-[#667085] hover:text-[#1d2939] cursor-pointer" />
                <Linkedin className="w-5 h-5 text-[#667085] hover:text-[#1d2939] cursor-pointer" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F9F9F9] rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#344054] mb-2">
                    Name
                  </label>
                  <Input
                    placeholder="Your full name"
                    className="bg-white border-[#e1e1e1] focus:border-[#2f78ee] focus:ring-[#2f78ee]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#344054] mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white border-[#e1e1e1] focus:border-[#2f78ee] focus:ring-[#2f78ee]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#344054] mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    className="bg-white border-[#e1e1e1] focus:border-[#2f78ee] focus:ring-[#2f78ee] resize-none"
                  />
                </div>

                <Button className="w-full bg-[#292d32] hover:bg-[#17191c] text-white py-3 rounded-lg flex items-center justify-center space-x-2">
                  <span>Send message</span>
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Accordin />
      <Cta />
      <Footer />
    </div>
  );
}
