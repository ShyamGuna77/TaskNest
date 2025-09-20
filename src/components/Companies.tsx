import { motion } from "motion/react";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export function Companies() {
  return (
    <motion.section
      id="companies"
      className="bg-[#F9F9F9]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h3
            className="text-center text-sm font-semibold text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            TRUSTED BY LEADING TEAMS
          </motion.h3>
          <div className="relative mt-6">
            <motion.div
              className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4 xl:grid-cols-8 xl:gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {companies.map((logo, idx) => (
                <motion.img
                  key={idx}
                  src={`https://cdn.magicui.design/companies/${logo}.svg`}
                  className="h-8 sm:h-10 w-32 sm:w-40 px-2 dark:brightness-0 dark:invert"
                  alt={logo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
