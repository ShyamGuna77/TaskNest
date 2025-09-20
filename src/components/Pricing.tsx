"use client";

import {
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "motion/react";

export default function LumifyPricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}

      {/* Hero Section */}
      <motion.section
        className="px-6 py-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#101828] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the Right Plan for Your Business
          </motion.h1>
          <motion.p
            className="text-lg text-[#667085] mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Find the plan that fits your team size and needs. Whether
            you&apos;re a startup or an enterprise, we&apos;ve got you covered.
          </motion.p>

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
      </motion.section>

      {/* Pricing Cards */}
      <motion.section
        className="px-6 pb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            className="bg-gradient-to-br from-[#E0C3FC] to-[#8EC5FC] rounded-2xl p-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white rounded-2xl p-8 h-full">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-[#8fa6eb] to-[#b8b8ff]   text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
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
          </motion.div>

          <motion.div
            className="bg-[#17191c] rounded-2xl p-1 md:scale-105 md:mt-[-20px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.02 }}
          >
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
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
