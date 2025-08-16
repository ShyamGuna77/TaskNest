/* eslint-disable @next/next/no-img-element */
"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const employeeData = [
  {
    name: "Sarah Anderson",
    id: "EMP1234567B",
    role: "UI/UX Designer",
    badge: { text: "Lead", color: "bg-[#ceefdf] text-[#0aaf60]" },
    avatar: "/images/women.png",
    fallback: "SA",
  },
  {
    name: "Marcus Johnson",
    id: "EMP9876543A",
    role: "Senior Developer",
    badge: { text: "Sr", color: "bg-[#fff6d3] text-[#e6bb20]" },
    avatar: "/images/man.png",
    fallback: "MJ",
  },
  {
    name: "Elena Rodriguez",
    id: "EMP5555777C",
    role: "Product Manager",
    badge: { text: "Lead", color: "bg-[#ceefdf] text-[#0aaf60]" },
    avatar: "/images/women.png",
    fallback: "ER",
  },
];

const secondaryEmployeeData = [
  {
    name: "Jason Ramirez",
    id: "EMP5731343",
    role: "UI/UX Designer",
    badge: { text: "Sr", color: "bg-[#fff6d3] text-[#e6bb20]" },
    avatar: "/images/man.png",
    fallback: "JR",
  },
  {
    name: "Lisa Chen",
    id: "EMP2468135",
    role: "Frontend Developer",
    badge: { text: "Mid", color: "bg-[#f4f0ff] text-[#8c62ff]" },
    avatar: "/images/women.png",
    fallback: "LC",
  },
  {
    name: "David Kim",
    id: "EMP1357924",
    role: "Backend Developer",
    badge: { text: "Sr", color: "bg-[#fff6d3] text-[#e6bb20]" },
    avatar: "/images/man.png",
    fallback: "DK",
  },
];

const payrollData = [
  {
    name: "Adam Kovaleni",
    role: "Freelancer",
    avatar: "/images/man.png",
    fallback: "AK",
    amount: "$2,670",
    date: "April 1, 2022",
  },
  {
    name: "Sarah Mitchell",
    role: "Contractor",
    avatar: "/images/women.png",
    fallback: "SM",
    amount: "$3,240",
    date: "April 1, 2022",
  },
  {
    name: "James Wilson",
    role: "Part-time",
    avatar: "/images/man.png",
    fallback: "JW",
    amount: "$1,890",
    date: "April 1, 2022",
  },
];

export default function BentoGrids() {
  const [currentEmployeeIndex, setCurrentEmployeeIndex] = useState(0);
  const [currentSecondaryIndex, setCurrentSecondaryIndex] = useState(0);
  const [currentPayrollIndex, setCurrentPayrollIndex] = useState(0);

  useEffect(() => {
    const employeeInterval = setInterval(() => {
      setCurrentEmployeeIndex((prev) => (prev + 1) % employeeData.length);
    }, 9000);

    const secondaryInterval = setInterval(() => {
      setCurrentSecondaryIndex(
        (prev) => (prev + 1) % secondaryEmployeeData.length
      );
    }, 7500);

    const payrollInterval = setInterval(() => {
      setCurrentPayrollIndex((prev) => (prev + 1) % payrollData.length);
    }, 8000);

    return () => {
      clearInterval(employeeInterval);
      clearInterval(secondaryInterval);
      clearInterval(payrollInterval);
    };
  }, []);

  const currentEmployee = employeeData[currentEmployeeIndex];
  const currentSecondary = secondaryEmployeeData[currentSecondaryIndex];
  const currentPayroll = payrollData[currentPayrollIndex];

  return (
    <div className="min-h-screen bg-[#f5f9ff] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-[#17191c] mb-6 leading-tight">
            Feel the best experience with our
            <br />
            features
          </h1>
          <p className="text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            Lumify isn&apos;t just another HR tool — it&apos;s a smarter way to manage
            talent. With AI-driven automation at its core, we help companies see
            further, act faster, and manage better.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Centralized Employee Data */}
          <Card className="p-8 bg-white border-0 shadow-sm hover:shadow-xl  transition-all  ease-out animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#f5f9ff] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-[#3981f7]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#17191c] mb-2">
                  Centralized Employee Data
                </h3>
                <p className="text-[#667085] leading-relaxed">
                  Maintain a comprehensive, up-to-date database of all employee
                  records in one secure location.
                </p>
              </div>
            </div>

            {/* Employee Cards Mockup */}
            <div className="space-y-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`primary-${currentEmployeeIndex}`}
                  initial={{ opacity: 0, x: -20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex items-center gap-3 p-3 bg-[#f5f9ff] rounded-lg hover:bg-[#ebf3fe] transition-all duration-500"
                >
                  <Avatar className="w-10 h-10 hover:scale-110 transition-transform duration-300">
                    <AvatarImage
                      src={currentEmployee.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback>{currentEmployee.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#17191c]">
                        {currentEmployee.name}
                      </span>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${currentEmployee.badge.color} border-0  transition-transform duration-200`}
                      >
                        {currentEmployee.badge.text}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#667085]">
                      {currentEmployee.id}
                    </p>
                  </div>
                  <span className="text-sm text-[#667085]">
                    {currentEmployee.role}
                  </span>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`secondary-${currentSecondaryIndex}`}
                  initial={{ opacity: 0, x: -20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#e7eaee] hover:border-[#3981f7] hover:shadow-md transition-all duration-500"
                >
                  <Avatar className="w-10 h-10 hover:scale-110 transition-transform duration-300">
                    <AvatarImage
                      src={currentSecondary.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback>{currentSecondary.fallback}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#17191c]">
                        {currentSecondary.name}
                      </span>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${currentSecondary.badge.color} border-0  transition-transform duration-200`}
                      >
                        {currentSecondary.badge.text}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#667085]">
                      {currentSecondary.id}
                    </p>
                  </div>
                  <span className="text-sm text-[#667085]">
                    {currentSecondary.role}
                  </span>
                </motion.div>
              </AnimatePresence>

              <div className="p-3 space-y-2 animate-in fade-in slide-in-from-bottom duration-500 delay-700">
                <div className="flex items-center gap-2 text-sm text-[#667085] hover:text-[#3981f7] transition-colors duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>jason.ramirez@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#667085] hover:text-[#3981f7] transition-colors duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>08931829403</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#667085] hover:text-[#3981f7] transition-colors duration-200">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>GMT +07:00</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Automated Payroll Processing */}
          <Card className="p-8 bg-white border-0 shadow-sm hover:shadow-xl  transition-all  ease-out animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#f5f9ff] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-[#3981f7]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#17191c] mb-2">
                  Automated Payroll Processing
                </h3>
                <p className="text-[#667085] leading-relaxed">
                  Simplify payroll management with automated calculations, and
                  reducing errors and saving time.
                </p>
              </div>
            </div>

            {/* Payroll Mockup */}
            <div className="bg-[#f5f9ff] rounded-lg p-4 hover:bg-[#ebf3fe] transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#3981f7] rounded flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-[#17191c]">
                    Upcoming Payroll
                  </span>
                </div>
                <span className="text-sm text-[#3981f7] font-medium hover:scale-105 transition-transform duration-200">
                  {currentPayroll.date}
                </span>
              </div>

              <div className="mb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`payroll-amount-${currentPayrollIndex}`}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex items-baseline gap-2"
                  >
                    <span className="text-2xl font-bold text-[#17191c] hover:text-[#3981f7] transition-all duration-500">
                      {currentPayroll.amount}
                    </span>
                    <span className="text-sm text-[#667085]">50</span>
                    <Badge className="bg-[#fff6d3] text-[#e6bb20] border-0 text-xs hover:scale-105 transition-transform duration-200">
                      PENDING
                    </Badge>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#667085]">Client</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`payroll-client-${currentPayrollIndex}`}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all duration-500"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8 hover:scale-110 transition-transform duration-300">
                        <AvatarImage
                          src={currentPayroll.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>
                          {currentPayroll.fallback}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-[#17191c] text-sm">
                          {currentPayroll.name}
                        </p>
                        <p className="text-xs text-[#667085]">
                          {currentPayroll.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[#667085]">Withdraw Method</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-4 h-4 bg-[#253b80] rounded flex items-center justify-center hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-xs font-bold">
                            P
                          </span>
                        </div>
                        <span className="text-sm text-[#17191c]">PayPal</span>
                        <span className="text-xs text-[#667085]">Verified</span>
                        <div className="w-2 h-2 bg-[#0aaf60] rounded-full animate-pulse"></div>
                        <span className="text-xs text-[#0aaf60]">
                          Connected
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Card>

          {/* Advanced Analytics and Reporting */}
          <Card className="p-8 bg-white border-0 shadow-sm hover:shadow-xl  transition-all ease-out animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#f5f9ff] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-[#3981f7]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#17191c] mb-2">
                  Advanced Analytics and Reporting
                </h3>
                <p className="text-[#667085] leading-relaxed">
                  Provides real-time data visualization, customizable reports,
                  and key performance indicators (KPIs) to help HR professionals
                  make informed decisions.
                </p>
              </div>
            </div>

            {/* Analytics Dashboard Mockup */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/Macbook.png"
                alt="Analytics Dashboard"
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-700 ease-out animate-in fade-in slide-in-from-bottom  delay-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Card>

          {/* Performance Management Tools */}
          <Card className="p-8 bg-white border-0 shadow-sm hover:shadow-xl  transition-all  ease-out animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#f5f9ff] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-[#3981f7]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#17191c] mb-2">
                  Performance Management Tools
                </h3>
                <p className="text-[#667085] leading-relaxed">
                  Facilitate performance tracking with goal setting, progress
                  monitoring and regular performance.
                </p>
              </div>
            </div>

            {/* Performance Table Mockup */}
            <div className="bg-[#f5f9ff] rounded-lg p-4 hover:bg-[#ebf3fe] transition-colors duration-300">
              <img
                src="/images/Macbook.png"
                alt="Performance Management Interface"
                className="w-full rounded-lg hover:scale-105 transition-transform duration-700 ease-out animate-in fade-in slide-in-from-left  delay-700"
              />
            </div>
          </Card>

          {/* Customizable Workflow Automation */}
          <Card className="p-8 bg-white border-0 shadow-sm lg:col-span-2 hover:shadow-xl hover:scale-[1.01] transition-all  ease-out animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 group">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#f5f9ff] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-[#3981f7]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#17191c] mb-2">
                      Customizable Workflow Automation
                    </h3>
                    <p className="text-[#667085] leading-relaxed mb-4">
                      Optimize HR processes with customizable workflows for
                      approvals & notifications.
                    </p>
                    <img src="/images/card.png" alt="Customizable Workflow Automation" className="w-full rounded-lg  transition-transform duration-700 ease-out animate-in fade-in slide-in-from-right mt-2   delay-800" />
                  </div>
                </div>
              </div>

              {/* Workflow Table */}
              <div className="bg-[#f5f9ff] rounded-lg p-4 hover:bg-[#ebf3fe] transition-colors duration-300 animate-in fade-in slide-in-from-right  delay-800">
                <div className="overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#e7eaee]">
                        <th className="text-left py-2 text-[#667085] font-medium">
                          Employee Name
                        </th>
                        <th className="text-left py-2 text-[#667085] font-medium">
                          Job Title
                        </th>
                        <th className="text-left py-2 text-[#667085] font-medium">
                          Gender
                        </th>
                        <th className="text-left py-2 text-[#667085] font-medium">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-[#f1f2f4] hover:bg-white/50 transition-colors duration-200">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6 hover:scale-110 transition-transform duration-300">
                              <AvatarFallback className="text-xs">
                                PC
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-[#17191c]">
                              Portia Carrera
                            </span>
                          </div>
                        </td>
                        <td className="py-3 text-[#667085]">UI/UX Designer</td>
                        <td className="py-3 text-[#667085]">Female</td>
                        <td className="py-3">
                          <Badge className="bg-[#ceefdf] text-[#0aaf60] border-0 text-xs  transition-transform duration-200">
                            ACTIVE
                          </Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-[#f1f2f4] hover:bg-white/50 transition-colors duration-200">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6 hover:scale-110 transition-transform duration-300">
                              <AvatarFallback className="text-xs">
                                HB
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-[#17191c]">
                              Hanna Baptista
                            </span>
                          </div>
                        </td>
                        <td className="py-3 text-[#667085]">
                          Graphic Designer
                        </td>
                        <td className="py-3 text-[#667085]">Female</td>
                        <td className="py-3">
                          <Badge className="bg-[#fff6d3] text-[#e6bb20] border-0 text-xs  transition-transform duration-200">
                            IN PROGRESS
                          </Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-[#f1f2f4] hover:bg-white/50 transition-colors duration-200">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6 hover:scale-110 transition-transform duration-300">
                              <AvatarFallback className="text-xs">
                                MG
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-[#17191c]">
                              Melanie Gandi
                            </span>
                          </div>
                        </td>
                        <td className="py-3 text-[#667085]">Finance</td>
                        <td className="py-3 text-[#667085]">Male</td>
                        <td className="py-3">
                          <Badge className="bg-[#f4f0ff] text-[#8c62ff] border-0 text-xs  transition-transform duration-200">
                            PROBATION
                          </Badge>
                        </td>
                      </tr>
                      <tr className="border-b border-[#f1f2f4] hover:bg-white/50 transition-colors duration-200">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6 hover:scale-110 transition-transform duration-300">
                              <AvatarFallback className="text-xs">
                                RT
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-[#17191c]">Rayna Torff</span>
                          </div>
                        </td>
                        <td className="py-3 text-[#667085]">Project Manager</td>
                        <td className="py-3 text-[#667085]">Male</td>
                        <td className="py-3">
                          <Badge className="bg-[#ceefdf] text-[#0aaf60] border-0 text-xs  transition-transform duration-200">
                            ACTIVE
                          </Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-white/50 transition-colors duration-200">
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6 hover:scale-110 transition-transform duration-300">
                              <AvatarFallback className="text-xs">
                                CL
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-[#17191c]">
                              Carla Lipshutz
                            </span>
                          </div>
                        </td>
                        <td className="py-3 text-[#667085]">
                          Creative Director
                        </td>
                        <td className="py-3 text-[#667085]">Female</td>
                        <td className="py-3">
                          <Badge className="bg-[#ffedec] text-[#e03137] border-0 text-xs  transition-transform duration-200">
                            ON LEAVE
                          </Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
