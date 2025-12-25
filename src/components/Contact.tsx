import React, { useState } from "react";
import { resumeData } from "../data/resumeData";
import { sendEmail } from "../services/emailService";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

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
    <section id="contact" className="w-full py-24 px-24 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <div className="grid grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-3 border rounded" required/>
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full p-3 border rounded" required/>
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="w-full p-3 border rounded h-32" required/>
          <button type="submit" disabled={isLoading} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="text-green-600">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-600">Failed to send message. Please try again.</p>}
        </form>
        <div className="space-y-4">
          <p><strong>Email:</strong> {resumeData.contact.email}</p>
          <p><strong>Phone:</strong> {resumeData.contact.phone}</p>
          <p><strong>LinkedIn:</strong> <a href={resumeData.contact.linkedin} className="text-blue-600 hover:underline">{resumeData.contact.linkedin}</a></p>
          <p><strong>GitHub:</strong> <a href={resumeData.contact.github} className="text-blue-600 hover:underline">{resumeData.contact.github}</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
