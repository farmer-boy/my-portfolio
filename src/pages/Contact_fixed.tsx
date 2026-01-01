import React, { useState } from "react";
import { resumeData } from "../data/resumeData";
import SectionTitle from "../components/SectionTitle";
import { sendEmail } from "../services/emailService";
import { useTheme } from "../context/ThemeContext";
import { SocialIcon } from "../components/SocialIcons";

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        // Send email to subssems336@gmail.com
        const emailSent = await sendEmail(formData);
        
        if (emailSent) {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          // Clear success message after 5 seconds
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          setError("Failed to send message. Please try again.");
        }
      } catch (err) {
        setError("An error occurred. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className={`w-full py-20 px-4 relative overflow-hidden ${
      isDark
        ? 'bg-gradient-to-br from-black via-gray-900 to-black'
        : 'bg-gradient-to-br from-white via-gray-100 to-white'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse ${
          isDark ? 'bg-white' : 'bg-gray-900'
        }`}></div>
        <div className={`absolute bottom-1/4 left-0 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse ${
          isDark ? 'bg-gray-400' : 'bg-gray-700'
        }`} style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's collaborate and create something amazing"
        />

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16 animate-slideUp">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[
              {
                icon: "📧",
                label: "Email",
                value: resumeData.contact.email,
                href: `mailto:${resumeData.contact.email}`,
              },
              {
                icon: "📱",
                label: "Phone",
                value: resumeData.contact.phone,
                href: `tel:${resumeData.contact.phone}`,
              },
              {
                icon: "📍",
                label: "Location",
                value: resumeData.location,
                href: "#",
              },
              {
                icon: "🌐",
                label: "Quick Response",
                value: "24-48 Hours",
                href: "#",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className={`p-6 rounded-xl border transition shadow-lg group hover:-translate-y-2 duration-300 animate-slideUp ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-white border-opacity-20 hover:border-opacity-100 hover:shadow-white/20'
                    : 'bg-gradient-to-br from-gray-100 to-white border-gray-900 border-opacity-20 hover:border-opacity-100 hover:shadow-gray-900/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition duration-300">{contact.icon}</span>
                  <div>
                    <p className={`text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {contact.label}
                    </p>
                    <p className={`font-bold text-lg mt-1 transition ${isDark ? 'text-white group-hover:text-gray-300' : 'text-gray-900 group-hover:text-gray-700'}`}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-white border-opacity-20 animate-slideUp" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-semibold mb-2 text-sm uppercase tracking-wider"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700 border-2 text-white placeholder-gray-500 focus:outline-none transition duration-300 focus:scale-105 ${
                    errors.name
                      ? "border-red-500 focus:border-red-400"
                      : "border-white border-opacity-20 focus:border-opacity-100"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <span>⚠️</span> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-semibold mb-2 text-sm uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700 border-2 text-white placeholder-gray-500 focus:outline-none transition duration-300 focus:scale-105 ${
                    errors.email
                      ? "border-red-500 focus:border-red-400"
                      : "border-white border-opacity-20 focus:border-opacity-100"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <span>⚠️</span> {errors.email}
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-semibold mb-2 text-sm uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700 border-2 text-white placeholder-gray-500 focus:outline-none transition duration-300 focus:scale-105 resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-400"
                      : "border-white border-opacity-20 focus:border-opacity-100"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                    <span>⚠️</span> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-gray-300 to-white hover:from-white hover:to-gray-200 disabled:from-gray-600 disabled:to-gray-600 text-black disabled:text-gray-400 font-bold py-3 rounded-lg transition shadow-lg hover:shadow-white/50 disabled:shadow-none hover:scale-105 hover:-translate-y-1 duration-300 disabled:cursor-not-allowed"
              >
                {loading ? "Sending to subssems336@gmail.com..." : submitted ? "✓ Message Sent!" : "Send Message"}
              </button>

              {submitted && (
                <div className="bg-green-500 bg-opacity-10 border border-green-500 border-opacity-50 p-4 rounded-lg animate-slideDown">
                  <p className="text-green-400 font-semibold text-center">
                    ✓ Your message has been sent to subssems336@gmail.com!
                  </p>
                </div>
              )}

              {error && (
                <div className="bg-red-500 bg-opacity-10 border border-red-500 border-opacity-50 p-4 rounded-lg animate-slideDown">
                  <p className="text-red-400 font-semibold text-center">{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Social Links CTA */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-10 rounded-2xl border border-white border-opacity-20 text-center shadow-2xl animate-slideUp" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold text-white mb-6 animate-slideDown">
            Let's Connect on Social Media
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { platform: "linkedin" as const, label: "LinkedIn", url: resumeData.contact.linkedin },
              { platform: "github" as const, label: "GitHub", url: resumeData.contact.github },
              { platform: "instagram" as const, label: "Instagram", url: resumeData.contact.instagram },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-semibold transition transform hover:scale-110 hover:-translate-y-1 shadow-lg duration-300 animate-slideUp flex items-center gap-2"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={social.label}
              >
                <SocialIcon platform={social.platform} size={20} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

