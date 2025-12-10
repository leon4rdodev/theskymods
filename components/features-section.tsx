"use client";

import { Shield, Zap, Heart, Download } from "lucide-react";
import type { Translations } from "@/lib/translations";

export function FeaturesSection({ t }: { t: Translations }) {
  const features = [
    {
      icon: Shield,
      title: t.features.safety.title,
      description: t.features.safety.description,
      color: "text-[#87CEEB]",
      bgColor: "bg-[#87CEEB]/10",
    },
    {
      icon: Zap,
      title: t.features.easy.title,
      description: t.features.easy.description,
      color: "text-[#F4D03F]",
      bgColor: "bg-[#F4D03F]/10",
    },
    {
      icon: Download,
      title: t.features.free.title,
      description: t.features.free.description,
      color: "text-[#98D8C8]",
      bgColor: "bg-[#98D8C8]/10",
    },
    {
      icon: Heart,
      title: t.features.community.title,
      description: t.features.community.description,
      color: "text-[#FFB6C1]",
      bgColor: "bg-[#FFB6C1]/10",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#E8F4F8]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            {t.features.title}
          </h2>
          <p className="text-[#5a6a7a] max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
            >
              <div
                className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className={`h-7 w-7 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold text-[#2C3E50] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#5a6a7a] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
