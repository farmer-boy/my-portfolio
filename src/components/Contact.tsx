import React, { useState } from "react";
import { resumeData } from "../data/resumeData";
import { sendEmail } from "../services/emailService";
import { useTheme } from "../context/ThemeContext";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const { isDark } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const success = await sendEmail(form);
    
    if (success) {
      setStatus("success");
      alert("Message sent successfully to subssems336@gmail.com!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
      alert("Failed to send message. Please try again.");
    }
    
    setIsLoading(false);
  };

  return (
    <section id="contact" className={`w-full py-24 px-24 ${
      isDark
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-white via-gray-50 to-white'
    }`}>
      <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
      <div className="grid grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={form.name} 
            onChange={handleChange} 
            className={`w-full p-3 border rounded transition-all ${
              isDark
                ? 'bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400'
            }`}
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={form.email} 
            onChange={handleChange} 
            className={`w-full p-3 border rounded transition-all ${
              isDark
                ? 'bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400'
            }`}
            required
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={form.message} 
            onChange={handleChange} 
            className={`w-full p-3 border rounded h-32 transition-all ${
              isDark
                ? 'bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-blue-400'
            }`}
            required
          />
          <button 
            type="submit" 
            disabled={isLoading} 
            className={`px-6 py-2 rounded font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
              isDark
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/50'
                : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg shadow-blue-300/50'
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className={isDark ? 'text-green-400' : 'text-green-600'}>Message sent successfully!</p>}
          {status === "error" && <p className={isDark ? 'text-red-400' : 'text-red-600'}>Failed to send message. Please try again.</p>}
        </form>
        <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <p><strong>Email:</strong> {resumeData.contact.email}</p>
          <p><strong>Phone:</strong> {resumeData.contact.phone}</p>
          <p><strong>LinkedIn:</strong> <a href={resumeData.contact.linkedin} className={`hover:underline ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>{resumeData.contact.linkedin}</a></p>
          <p><strong>GitHub:</strong> <a href={resumeData.contact.github} className={`hover:underline ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>{resumeData.contact.github}</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
