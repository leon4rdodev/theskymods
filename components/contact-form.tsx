"use client";

import type React from "react";

import { useState } from "react";
import { Send, Mail, MessageCircle, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.validation.nameRequired;
    }
    if (!formData.email.trim()) {
      newErrors.email = t.contact.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.validation.emailInvalid;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = t.contact.validation.subjectRequired;
    }
    if (!formData.message.trim()) {
      newErrors.message = t.contact.validation.messageRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      // You could add error state here to show user-friendly error message
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-[#98D8C8]/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-[#98D8C8]" />
        </div>
        <p className="text-[#2C3E50] font-medium text-lg">
          {t.contact.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-[#2C3E50] mb-2">
            {t.contact.form.name}
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.contact.form.namePlaceholder}
            className={`h-12 glass border-white/30 focus:border-[#87CEEB] rounded-xl text-[#2C3E50] placeholder:text-[#5a6a7a] ${
              errors.name ? "border-red-400" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#2C3E50] mb-2">
            {t.contact.form.email}
          </label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.contact.form.emailPlaceholder}
            className={`h-12 glass border-white/30 focus:border-[#87CEEB] rounded-xl text-[#2C3E50] placeholder:text-[#5a6a7a] ${
              errors.email ? "border-red-400" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#2C3E50] mb-2">
          {t.contact.form.subject}
        </label>
        <Input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={t.contact.form.subjectPlaceholder}
          className={`h-12 glass border-white/30 focus:border-[#87CEEB] rounded-xl text-[#2C3E50] placeholder:text-[#5a6a7a] ${
            errors.subject ? "border-red-400" : ""
          }`}
        />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#2C3E50] mb-2">
          {t.contact.form.message}
        </label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t.contact.form.messagePlaceholder}
          rows={5}
          className={`glass border-white/30 focus:border-[#87CEEB] rounded-xl text-[#2C3E50] placeholder:text-[#5a6a7a] resize-none ${
            errors.message ? "border-red-400" : ""
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 bg-linear-to-r from-[#87CEEB] to-[#98D8C8] text-[#1a2332] font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#1a2332] border-t-transparent mr-2" />
            {t.contact.form.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            {t.contact.form.send}
          </>
        )}
      </Button>
    </form>
  );
}

export function ContactInfo() {
  const { t } = useLanguage();

  return (
    <div className="glass-card rounded-2xl p-8">
      <h3 className="text-xl font-bold text-[#2C3E50] mb-6">
        {t.contact.info.title}
      </h3>

      <div className="space-y-6">
        {/* Discord */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-[#87CEEB]/20 rounded-xl flex items-center justify-center shrink-0">
            <MessageCircle className="h-5 w-5 text-[#87CEEB]" />
          </div>
          <div>
            <h4 className="font-medium text-[#2C3E50] mb-1">Discord</h4>
            <p className="text-sm text-[#5a6a7a]">{t.contact.info.discord}</p>
            <span className="text-sm text-[#87CEEB] font-medium">
              discord.gg/skymods
            </span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-[#F4D03F]/20 rounded-xl flex items-center justify-center shrink-0">
            <Mail className="h-5 w-5 text-[#F4D03F]" />
          </div>
          <div>
            <h4 className="font-medium text-[#2C3E50] mb-1">Email</h4>
            <p className="text-sm text-[#5a6a7a]">{t.contact.info.email}</p>
            <span className="text-sm text-[#87CEEB] font-medium">
              support@skymods.app
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
