import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { contactDetails } from "../data/siteData";
import Icon from "./Icon";
import SectionHeader from "./SectionHeader";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  aboutProject: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  projectType: "",
  aboutProject: "",
};

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyteutCcEgxyIvXv0E9MUqr7yMZg7rWh1cKq21MC8ApG863u6NyoR5kDTgNClpVICO_/exec";

const fieldStyles =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-900 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-accent focus:ring-4 focus:ring-red-100";

const ContactSection = () => {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const isAppsScriptConfigured = useMemo(() => APPS_SCRIPT_URL.startsWith("https://script.google.com/macros/s/"), []);

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.projectType.trim()) nextErrors.projectType = "Project type is required.";
    if (!form.aboutProject.trim()) nextErrors.aboutProject = "Project details are required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!isAppsScriptConfigured) {
      setStatus("error");
      return;
    }

    try {
      setStatus("submitting");
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(form),
      });
      setForm(initialFormState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-slate-50 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Start your next infrastructure project"
          description="Send a quick message and our team will respond with the right next step for your business requirement."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1fr_0.82fr]">
          <motion.form
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white bg-white p-6 shadow-corporate sm:p-8 lg:p-10"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Project Enquiry</p>
              <h3 className="mt-3 text-2xl font-black text-primary sm:text-3xl">Tell us what you want to build</h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-primary">Full Name</span>
                <input
                  className={fieldStyles}
                  placeholder="John Doe"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.fullName && <span className="mt-2 block text-xs font-semibold text-accent">{errors.fullName}</span>}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-primary">Email Address</span>
                <input
                  className={fieldStyles}
                  placeholder="john@example.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  autoComplete="email"
                />
                {errors.email && <span className="mt-2 block text-xs font-semibold text-accent">{errors.email}</span>}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-primary">Phone Number</span>
                <input
                  className={fieldStyles}
                  placeholder="+91 9876543210"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  autoComplete="tel"
                />
                {errors.phone && <span className="mt-2 block text-xs font-semibold text-accent">{errors.phone}</span>}
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-primary">Project Type</span>
                <input
                  className={fieldStyles}
                  placeholder="Web Development"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                />
                {errors.projectType && <span className="mt-2 block text-xs font-semibold text-accent">{errors.projectType}</span>}
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold text-primary">About Project</span>
              <textarea
                className={`${fieldStyles} min-h-40 resize-none`}
                placeholder="Explain your project requirements"
                name="aboutProject"
                value={form.aboutProject}
                onChange={handleChange}
              />
              {errors.aboutProject && <span className="mt-2 block text-xs font-semibold text-accent">{errors.aboutProject}</span>}
            </label>

            {status === "success" && (
              <p className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                Thank you. Your enquiry has been submitted successfully.
              </p>
            )}

            {status === "error" && (
              <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-accent">
                We could not submit your enquiry. Please try again in a moment.
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-red-200 transition duration-200 hover:-translate-y-1 hover:bg-red-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
            </motion.button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="space-y-5">
            <div className="rounded-[2rem] bg-primary p-7 text-white shadow-xl sm:p-8">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex gap-4 border-b border-white/10 py-5 first:pt-0 last:border-0 last:pb-0">
                  <div className="mt-1 text-accent">
                    <Icon icon={detail.icon} />
                  </div>
                  <div>
                    <p className="font-black">{detail.label}</p>
                    <p className="mt-1 text-blue-100">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid h-64 place-items-center rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 text-center shadow-sm">
              <div>
                <p className="text-lg font-black text-primary">Google Map Placeholder</p>
                <p className="mt-2 text-sm text-slate-500">Embed your location map here.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
