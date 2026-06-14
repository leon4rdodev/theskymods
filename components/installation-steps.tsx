"use client";

import type { Translations } from "@/lib/translations";
import { AnimateIn } from "@/components/animate-in";

export function InstallationSteps({ t }: { t: Translations }) {
  return (
    <section id="installation" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimateIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2C3E50]">
            {t.tutorial.steps.title}
          </h2>
        </AnimateIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <AnimateIn delay={0} as="span">
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#87CEEB] to-[#F4D03F] flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">
                {t.tutorial.steps.step1.title}
              </h3>
              <p className="text-[#5a6a7a]">
                {t.tutorial.steps.step1.description}
              </p>
            </div>
          </AnimateIn>

          {/* Step 2 */}
          <AnimateIn delay={100} as="span">
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#87CEEB] to-[#F4D03F] flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">
                {t.tutorial.steps.step2.title}
              </h3>
              <p className="text-[#5a6a7a]">
                {t.tutorial.steps.step2.description}
              </p>
            </div>
          </AnimateIn>

          {/* Step 3 */}
          <AnimateIn delay={200} as="span">
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#87CEEB] to-[#F4D03F] flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">
                {t.tutorial.steps.step3.title}
              </h3>
              <p className="text-[#5a6a7a]">
                {t.tutorial.steps.step3.description}
              </p>
            </div>
          </AnimateIn>

          {/* Step 4 */}
          <AnimateIn delay={300} as="span">
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#87CEEB] to-[#F4D03F] flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">
                {t.tutorial.steps.step4.title}
              </h3>
              <p className="text-[#5a6a7a]">
                {t.tutorial.steps.step4.description}
              </p>
            </div>
          </AnimateIn>

          {/* Step 5 */}
          <AnimateIn delay={400} as="span">
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#87CEEB] to-[#F4D03F] flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                5
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">
                {t.tutorial.steps.step5.title}
              </h3>
              <p className="text-[#5a6a7a]">
                {t.tutorial.steps.step5.description}
              </p>
            </div>
          </AnimateIn>

          {/* Step 6 */}
          <AnimateIn delay={500} as="span">
            <div className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all group border-2 border-[#F4D03F]/30">
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-2xl mb-4 group-hover:scale-110 transition-transform">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2C3E50]">
                {t.tutorial.steps.step6.title}
              </h3>
              <p className="text-[#5a6a7a]">
                {t.tutorial.steps.step6.description}
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
