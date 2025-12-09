"use client";

import type { Translations } from "@/lib/translations";

export function InstallationSteps({
  t,
}: {
  t: Translations["es"] | Translations["en"];
}) {
  return (
    <section id="installation" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2C3E50]">
          {t.tutorial.steps.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
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

          {/* Step 2 */}
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

          {/* Step 3 */}
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

          {/* Step 4 */}
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

          {/* Step 5 */}
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

          {/* Step 6 */}
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
        </div>
      </div>
    </section>
  );
}
