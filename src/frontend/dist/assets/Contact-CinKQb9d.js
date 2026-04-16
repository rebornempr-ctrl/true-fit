import { d as createLucideIcon, j as jsxRuntimeExports, A as AnimatedSection, m as motion, g as SiInstagram, h as SiTiktok, c as ue } from "./index-CbYhoYbs.js";
import { B as Button } from "./button-goVBVp7u.js";
import { u as useForm, L as Label, I as Input, T as Textarea } from "./index.esm-D2FeiAfu.js";
import { c as useSubmitContact } from "./useProducts-CG1-0xul.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
function ContactPage() {
  const { mutateAsync, isPending, isSuccess } = useSubmitContact();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await mutateAsync(data);
      ue.success("Message sent! We'll get back to you soon.");
      reset();
    } catch {
      ue.error("Something went wrong. Please try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 border-b border-border py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedSection, { direction: "up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[11px] tracking-widest uppercase text-primary block mb-2", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground", children: "Contact Us" })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "left", children: isSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          className: "flex flex-col items-center justify-center py-16 gap-4 text-center",
          "data-ocid": "contact.success_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 28, className: "text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl uppercase tracking-widest text-foreground", children: "Thank You!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xs", children: "We've received your message and will be in touch shortly." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => reset(),
                className: "font-display text-[11px] tracking-widest uppercase text-primary hover:underline",
                "data-ocid": "contact.send_another_button",
                children: "Send Another Message"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit(onSubmit),
          className: "space-y-6",
          "data-ocid": "contact.form",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-display text-[11px] tracking-widest uppercase text-foreground", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  ...register("name", { required: "Name is required" }),
                  placeholder: "Your name",
                  className: "font-body rounded-sm border-input bg-background focus:border-foreground transition-colors",
                  "data-ocid": "contact.name_input"
                }
              ),
              errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs text-destructive",
                  "data-ocid": "contact.name_field_error",
                  children: errors.name.message
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-display text-[11px] tracking-widest uppercase text-foreground", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  ...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email"
                    }
                  }),
                  type: "email",
                  placeholder: "your@email.com",
                  className: "font-body rounded-sm border-input bg-background focus:border-foreground transition-colors",
                  "data-ocid": "contact.email_input"
                }
              ),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs text-destructive",
                  "data-ocid": "contact.email_field_error",
                  children: errors.email.message
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-display text-[11px] tracking-widest uppercase text-foreground", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  ...register("message", {
                    required: "Message is required"
                  }),
                  placeholder: "Tell us what you're looking for, or ask us anything...",
                  rows: 5,
                  className: "font-body rounded-sm border-input bg-background focus:border-foreground transition-colors resize-none",
                  "data-ocid": "contact.message_textarea"
                }
              ),
              errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-xs text-destructive",
                  "data-ocid": "contact.message_field_error",
                  children: errors.message.message
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "submit",
                disabled: isPending,
                className: "w-full bg-foreground text-background font-display text-[11px] tracking-widest uppercase py-6 rounded-sm hover:bg-primary transition-smooth h-auto disabled:opacity-60",
                "data-ocid": "contact.submit_button",
                children: isPending ? "Sending..." : "Send Message"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedSection, { direction: "right", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm tracking-widest uppercase text-foreground mb-4 font-semibold", children: "Find Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://instagram.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200",
                "data-ocid": "contact.instagram_link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SiInstagram, { size: 18 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm", children: "@truefit_official" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://tiktok.com",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200",
                "data-ocid": "contact.tiktok_link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SiTiktok, { size: 18 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-sm", children: "@truefit.official" })
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-sm tracking-widest uppercase text-foreground mb-4 font-semibold", children: "Order via WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed mb-4", children: "Prefer to chat? Add items to your cart and check out directly via WhatsApp — our team handles every order personally." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/cart",
              className: "inline-flex items-center gap-2 bg-whatsapp font-display text-[11px] tracking-widest uppercase px-6 py-3 rounded-sm hover:opacity-90 transition-smooth",
              "data-ocid": "contact.whatsapp_button",
              children: "Start Shopping"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 rounded-sm p-6 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed italic", children: '"We believe in personal relationships with every customer. Reach out — we love hearing from you."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[11px] tracking-widest uppercase text-foreground mt-3", children: "— The True Fit Team" })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  ContactPage as default
};
