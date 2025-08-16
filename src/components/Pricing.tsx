"use client"

import {
  ChevronDown,
  Users,
  Shield,
  BarChart3,
  Database,
  Mail,
  Infinity,
  Zap,
  Clock,
  Target,
  Settings,
  Lock,
  Server,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function LumifyPricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes! You can upgrade or downgrade anytime as your team grows or your needs evolve.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for all plans. No credit card required to get started.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer:
        "Yes! Annual billing comes with a 20% discount compared to monthly billing.",
    },
    {
      question: "What happens after my trial ends?",
      answer:
        "After your trial ends, you can choose to upgrade to a paid plan or your account will be downgraded to our free tier.",
    },
    {
      question: "Is my data secure with Lumify?",
      answer:
        "We use enterprise-grade security measures including encryption, regular backups, and SOC 2 compliance.",
    },
    {
      question:
        "Can Lumify integrate with other tools like Slack or Google Workspace?",
      answer:
        "Yes, Lumify integrates with over 50+ popular tools including Slack, Google Workspace, Microsoft Teams, and more.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
    

      {/* Hero Section */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#101828] mb-6">
            Choose the Right Plan for Your Business
          </h1>
          <p className="text-lg text-[#667085] mb-12 max-w-2xl mx-auto">
            Find the plan that fits your team size and needs. Whether you&apos;re a
            startup or an enterprise, we&apos;ve got you covered.
          </p>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <button
              onClick={() => setIsAnnual(false)}
              className={`font-medium transition-colors ${
                !isAnnual ? "text-[#344054]" : "text-[#667085]"
              }`}
            >
              Monthly billing
            </button>
            <div className="relative">
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  isAnnual ? "bg-[#2f78ee]" : "bg-[#eaecf0]"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                    isAnnual ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
            <button
              onClick={() => setIsAnnual(true)}
              className={`font-medium transition-colors ${
                isAnnual ? "text-[#344054]" : "text-[#667085]"
              }`}
            >
              Annual billing
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-gradient-to-br from-[#E0C3FC] to-[#8EC5FC] rounded-2xl p-1">
            <div className="bg-white rounded-2xl p-8 h-full">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-[#2f78ee] to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Ideal for startups & small companies
                </div>
                <h3 className="text-2xl font-bold text-[#101828] mb-2">Core</h3>
                <p className="text-[#667085] mb-6">
                  Ideal for users who want essential budgeting and tracking
                  tools to get started on their financial journey.
                </p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold text-[#101828]">
                    ${isAnnual ? "15" : "19"}
                  </span>
                  <span className="text-[#667085] ml-2">
                    /{isAnnual ? "month" : "month"}
                  </span>
                </div>
                <Button className="w-full bg-[#f9fafb] hover:bg-[#f2f4f7] text-[#344054] border border-[#eaecf0] mb-8">
                  Talk to an expert
                  <span className="ml-2">💬</span>
                </Button>
              </div>

              <div>
                <h4 className="font-semibold text-[#101828] mb-4">
                  Core includes:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">Up to 100 employees</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">Basic HR management</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">
                      Attendance & leave tracking
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Database className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">Employee database</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">Email support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#17191c] rounded-2xl p-1 md:scale-105 md:mt-[-20px]">
            <div className="bg-white rounded-2xl p-8 h-full">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#17191c] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Ideal for enterprise companies
                </div>
                <h3 className="text-2xl font-bold text-[#101828] mb-2">
                  Advanced Plan
                </h3>
                <p className="text-[#667085] mb-6">
                  Perfect for users who want to elevate their financial
                  management with advanced tools and flexibility.
                </p>
                <div className="flex items-baseline justify-center mb-6">
                  <span className="text-4xl font-bold text-[#101828]">
                    ${isAnnual ? "31" : "39"}
                  </span>
                  <span className="text-[#667085] ml-2">
                    /{isAnnual ? "month" : "month"}
                  </span>
                </div>
                <Button className="w-full bg-[#17191c] hover:bg-[#292d32] text-white mb-8">
                  Talk to an expert
                  <span className="ml-2">💬</span>
                </Button>
              </div>

              <div>
                <h4 className="font-semibold text-[#101828] mb-4">
                  Everything in Core plus:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Infinity className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">Unlimited employees</span>
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">
                      AI-powered recruitment
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">
                      Real-time employee insights
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">
                      Engagement pulse checks
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Settings className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <Lock className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">
                      API access & security
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Server className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">
                      On-premise deployment option
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Award className="h-5 w-5 text-[#667085] mr-3" />
                    <span className="text-[#344054]">
                      Dedicated success manager
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#101828] mb-4">
              Got Questions? We&apos;ve Got Answers
            </h2>
            <p className="text-[#667085]">
              Learn more about how Lumify works, pricing, features, and support
              options.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-[#eaecf0] rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#f9fafb] transition-colors"
                >
                  <h3 className="font-semibold text-[#101828]">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-[#667085] transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#667085]">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    

      {/* Footer */}
     
    </div>
  );
}
