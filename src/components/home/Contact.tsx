import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  Check,
  ChevronDown,
  Copy,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  coachingTypeOptions,
  contact,
  form,
  site,
  trainingExperienceOptions,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import { Eyebrow, Section, inputCls, outlinePill, primaryPill } from "./shared";

const emptyEnquiry = {
  name: "",
  email: "",
  phone: "",
  goals: "",
  experience: "",
  availability: "",
  message: "",
};

type Enquiry = typeof emptyEnquiry;
type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;

function buildMessage(values: Enquiry, coachingType: string) {
  const lines = ["New enquiry from the MR Coaching website", ""];
  const add = (label: string, value: string) => {
    if (value.trim()) lines.push(`${label}: ${value.trim()}`);
  };

  add("Name", values.name);
  add("Email", values.email);
  add("Phone", values.phone);
  add("Goals", values.goals);
  add("Training experience", values.experience);
  add("Preferred coaching", coachingType);
  add("Preferred days/times", values.availability);
  add("Message", values.message);

  return lines.join("\n");
}

function Field({
  label,
  htmlFor,
  error,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-foreground"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-xs font-medium text-primary">{error}</p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  value,
  placeholder,
  options,
  onChange,
}: {
  id: string;
  value: string;
  placeholder: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          inputCls,
          "appearance-none pr-11",
          !value && "text-muted-foreground",
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}

export function Contact({
  coachingType,
  onCoachingTypeChange,
}: {
  coachingType: string;
  onCoachingTypeChange: (value: string) => void;
}) {
  const [values, setValues] = useState<Enquiry>(emptyEnquiry);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [sentText, setSentText] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const message = useMemo(
    () => buildMessage(values, coachingType),
    [values, coachingType],
  );

  const liveUrl = `${site.whatsapp.url}?text=${encodeURIComponent(message)}`;
  const sentUrl = sentText
    ? `${site.whatsapp.url}?text=${encodeURIComponent(sentText)}`
    : site.whatsapp.url;

  const update = (key: keyof Enquiry, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const next: EnquiryErrors = {};
    if (!values.name.trim()) next.name = form.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = form.errors.email;
    }
    if (!values.message.trim()) next.message = form.errors.message;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    window.open(liveUrl, "_blank", "noopener,noreferrer");
    setSentText(message);
  };

  const copyEnquiry = async () => {
    if (!sentText) return;
    try {
      await navigator.clipboard.writeText(sentText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Section id="contact" className="border-t border-border/60">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {contact.text}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={site.whatsapp.url}
              target="_blank"
              rel="noreferrer"
              className={primaryPill}
            >
              <MessageCircle className="h-4 w-4" />
              Message on WhatsApp
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className={outlinePill}
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
            </a>
          </div>

          <dl className="mt-10 space-y-4 rounded-3xl border border-border bg-secondary/60 p-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">
                WhatsApp
              </dt>
              <dd>
                <a
                  href={site.whatsapp.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-base font-semibold text-foreground transition-colors hover:text-rose-deep"
                >
                  {site.whatsapp.display}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-deep">
                Instagram
              </dt>
              <dd>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-base font-semibold text-foreground transition-colors hover:text-rose-deep"
                >
                  {site.instagram.handle}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            {sentText ? (
              <div className="text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-rose-deep">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">
                  {form.success.heading}
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {form.success.body}
                </p>
                <a
                  href={sentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(primaryPill, "mt-6 w-full")}
                >
                  <MessageCircle className="h-4 w-4" />
                  {form.success.reopen}
                </a>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={copyEnquiry}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-rose-deep hover:text-rose-deep"
                  >
                    <Copy className="h-4 w-4" />
                    {copied ? form.success.copied : form.success.copy}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setValues(emptyEnquiry);
                      setErrors({});
                      setSentText(null);
                    }}
                    className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-rose-deep hover:text-rose-deep"
                  >
                    {form.success.reset}
                  </button>
                </div>
                <pre className="mt-6 max-h-80 overflow-auto whitespace-pre-wrap rounded-2xl bg-secondary/60 p-4 text-left text-xs leading-relaxed text-muted-foreground">
                  {sentText}
                </pre>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {form.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {form.intro}
                </p>

                <form onSubmit={onSubmit} noValidate className="mt-7 grid gap-5 sm:grid-cols-2">
                  <Field label={form.fields.name} htmlFor="name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      onChange={(event) => update("name", event.target.value)}
                      placeholder={form.placeholders.name}
                      className={inputCls}
                    />
                  </Field>

                  <Field label={form.fields.email} htmlFor="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(event) => update("email", event.target.value)}
                      placeholder={form.placeholders.email}
                      className={inputCls}
                    />
                  </Field>

                  <Field
                    label={form.fields.phone}
                    htmlFor="phone"
                    className="sm:col-span-2"
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={(event) => update("phone", event.target.value)}
                      placeholder={form.placeholders.phone}
                      className={inputCls}
                    />
                  </Field>

                  <Field
                    label={form.fields.goals}
                    htmlFor="goals"
                    className="sm:col-span-2"
                  >
                    <textarea
                      id="goals"
                      name="goals"
                      rows={3}
                      value={values.goals}
                      onChange={(event) => update("goals", event.target.value)}
                      placeholder={form.placeholders.goals}
                      className={cn(inputCls, "resize-y")}
                    />
                  </Field>

                  <Field label={form.fields.experience} htmlFor="experience">
                    <SelectField
                      id="experience"
                      value={values.experience}
                      placeholder={form.placeholders.experience}
                      options={trainingExperienceOptions}
                      onChange={(value) => update("experience", value)}
                    />
                  </Field>

                  <Field
                    label={form.fields.coachingType}
                    htmlFor="coachingType"
                  >
                    <SelectField
                      id="coachingType"
                      value={coachingType}
                      placeholder={form.placeholders.coachingType}
                      options={coachingTypeOptions}
                      onChange={onCoachingTypeChange}
                    />
                  </Field>

                  <Field
                    label={form.fields.availability}
                    htmlFor="availability"
                    className="sm:col-span-2"
                  >
                    <input
                      id="availability"
                      name="availability"
                      value={values.availability}
                      onChange={(event) =>
                        update("availability", event.target.value)
                      }
                      placeholder={form.placeholders.availability}
                      className={inputCls}
                    />
                  </Field>

                  <Field
                    label={form.fields.message}
                    htmlFor="message"
                    error={errors.message}
                    className="sm:col-span-2"
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={(event) => update("message", event.target.value)}
                      placeholder={form.placeholders.message}
                      className={cn(inputCls, "resize-y")}
                    />
                  </Field>

                  <button
                    type="submit"
                    className={cn(primaryPill, "mt-1 w-full sm:col-span-2")}
                  >
                    <MessageCircle className="h-4 w-4" />
                    {form.submit}
                  </button>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
