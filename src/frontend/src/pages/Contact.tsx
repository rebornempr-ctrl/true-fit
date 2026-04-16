import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useProducts";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { toast } from "sonner";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const { mutateAsync, isPending, isSuccess } = useSubmitContact();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    try {
      await mutateAsync(data);
      toast.success("Message sent! We'll get back to you soon.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div data-ocid="contact.page">
      {/* Header */}
      <section className="bg-muted/30 border-b border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection direction="up">
            <span className="font-display text-[11px] tracking-widest uppercase text-primary block mb-2">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
              Contact Us
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <AnimatedSection direction="left">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                data-ocid="contact.success_state"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle size={28} className="text-primary" />
                </div>
                <h2 className="font-display text-2xl uppercase tracking-widest text-foreground">
                  Thank You!
                </h2>
                <p className="font-body text-muted-foreground max-w-xs">
                  We've received your message and will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="font-display text-[11px] tracking-widest uppercase text-primary hover:underline"
                  data-ocid="contact.send_another_button"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                data-ocid="contact.form"
              >
                <div className="space-y-2">
                  <Label className="font-display text-[11px] tracking-widest uppercase text-foreground">
                    Name
                  </Label>
                  <Input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your name"
                    className="font-body rounded-sm border-input bg-background focus:border-foreground transition-colors"
                    data-ocid="contact.name_input"
                  />
                  {errors.name && (
                    <p
                      className="font-body text-xs text-destructive"
                      data-ocid="contact.name_field_error"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="font-display text-[11px] tracking-widest uppercase text-foreground">
                    Email
                  </Label>
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    type="email"
                    placeholder="your@email.com"
                    className="font-body rounded-sm border-input bg-background focus:border-foreground transition-colors"
                    data-ocid="contact.email_input"
                  />
                  {errors.email && (
                    <p
                      className="font-body text-xs text-destructive"
                      data-ocid="contact.email_field_error"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="font-display text-[11px] tracking-widest uppercase text-foreground">
                    Message
                  </Label>
                  <Textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    placeholder="Tell us what you're looking for, or ask us anything..."
                    rows={5}
                    className="font-body rounded-sm border-input bg-background focus:border-foreground transition-colors resize-none"
                    data-ocid="contact.message_textarea"
                  />
                  {errors.message && (
                    <p
                      className="font-body text-xs text-destructive"
                      data-ocid="contact.message_field_error"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-foreground text-background font-display text-[11px] tracking-widest uppercase py-6 rounded-sm hover:bg-primary transition-smooth h-auto disabled:opacity-60"
                  data-ocid="contact.submit_button"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </AnimatedSection>

          {/* Contact info */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-sm tracking-widest uppercase text-foreground mb-4 font-semibold">
                  Find Us
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                      data-ocid="contact.instagram_link"
                    >
                      <SiInstagram size={18} />
                      <span className="font-body text-sm">
                        @truefit_official
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                      data-ocid="contact.tiktok_link"
                    >
                      <SiTiktok size={18} />
                      <span className="font-body text-sm">
                        @truefit.official
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-display text-sm tracking-widest uppercase text-foreground mb-4 font-semibold">
                  Order via WhatsApp
                </h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  Prefer to chat? Add items to your cart and check out directly
                  via WhatsApp — our team handles every order personally.
                </p>
                <a
                  href="/cart"
                  className="inline-flex items-center gap-2 bg-whatsapp font-display text-[11px] tracking-widest uppercase px-6 py-3 rounded-sm hover:opacity-90 transition-smooth"
                  data-ocid="contact.whatsapp_button"
                >
                  Start Shopping
                </a>
              </div>

              <div className="bg-muted/40 rounded-sm p-6 border border-border">
                <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                  "We believe in personal relationships with every customer.
                  Reach out — we love hearing from you."
                </p>
                <p className="font-display text-[11px] tracking-widest uppercase text-foreground mt-3">
                  — The True Fit Team
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
