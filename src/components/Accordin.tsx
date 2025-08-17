import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordin = () => {
  return (
    <>
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d2939] mb-4">
              Got Questions? We&apos;ve Got Answers
            </h2>
            <p className="text-lg text-[#667085]">
              Learn more about how Lumify works, pricing, features, and support
              options.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white border border-[#eaecf0] rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1d2939] hover:no-underline">
                What is Lumify?
              </AccordionTrigger>
              <AccordionContent className="text-[#667085] pb-6">
                Lumify is an AI-powered HR SaaS platform that helps companies
                manage recruitment, employee engagement, payroll, attendance,
                and more — all in one place.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-white border border-[#eaecf0] rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1d2939] hover:no-underline">
                Key Features of Lumify
              </AccordionTrigger>
              <AccordionContent className="text-[#667085] pb-6">
                Our platform includes advanced recruitment tools, employee
                management, payroll automation, performance tracking, and
                comprehensive analytics to streamline your HR processes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-white border border-[#eaecf0] rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1d2939] hover:no-underline">
                Who Can Benefit from Lumify?
              </AccordionTrigger>
              <AccordionContent className="text-[#667085] pb-6">
                Lumify is perfect for growing companies, HR departments, and
                businesses looking to modernize their human resources management
                with AI-powered solutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-white border border-[#eaecf0] rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1d2939] hover:no-underline">
                Why Choose Lumify Over Competitors?
              </AccordionTrigger>
              <AccordionContent className="text-[#667085] pb-6">
                Lumify offers superior AI integration, intuitive user
                experience, comprehensive features, and exceptional customer
                support at competitive pricing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-white border border-[#eaecf0] rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1d2939] hover:no-underline">
                Customer Testimonials
              </AccordionTrigger>
              <AccordionContent className="text-[#667085] pb-6">
                Our customers consistently rate us 5 stars for ease of use,
                feature completeness, and outstanding customer service. Read
                their success stories on our testimonials page.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-white border border-[#eaecf0] rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#1d2939] hover:no-underline">
                Pricing Plans
              </AccordionTrigger>
              <AccordionContent className="text-[#667085] pb-6">
                We offer flexible pricing plans starting from $29/month for
                small teams, with enterprise solutions available. All plans
                include a 14-day free trial.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default Accordin;