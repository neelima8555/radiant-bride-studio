import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Menu,
  X,
  Sparkles,
  Heart,
  Crown,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowUp,
  Check,
  Flower2,
} from "lucide-react";

import heroBride from "@/assets/hero-bride.jpg";
import aboutArtist from "@/assets/about-artist.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import sHd from "@/assets/service-hd.jpg";
import sAir from "@/assets/service-airbrush.jpg";
import sHair from "@/assets/service-hair.jpg";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#packages", label: "Packages" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#book", label: "Book" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  { title: "HD Bridal Makeup", desc: "Flawless high-definition finish that photographs beautifully in every light.", price: "₹ 15,000", img: sHd },
  { title: "Airbrush Bridal Makeup", desc: "Feather-light, long-lasting airbrushed complexion for a poreless glow.", price: "₹ 20,000", img: sAir },
  { title: "Traditional Bridal Makeup", desc: "Timeless bridal artistry rooted in classic Indian beauty rituals.", price: "₹ 12,000", img: p1 },
  { title: "Reception Makeup", desc: "Glamorous reception looks — bold, elegant and picture-perfect.", price: "₹ 10,000", img: p4 },
  { title: "Engagement Makeup", desc: "Soft, dewy engagement looks with a modern romantic finish.", price: "₹ 8,000", img: p5 },
  { title: "Haldi Makeup", desc: "Fresh, joyful haldi looks with a natural glow that lasts.", price: "₹ 5,500", img: p6 },
  { title: "Mehendi Makeup", desc: "Vibrant, playful mehendi looks styled for celebration.", price: "₹ 6,500", img: p2 },
  { title: "Sangeet Makeup", desc: "Radiant, dance-ready sangeet glam that stays all night.", price: "₹ 8,500", img: p3 },
  { title: "Bridal Hairstyling", desc: "Sculpted updos, romantic waves and traditional braids with florals.", price: "₹ 5,000", img: sHair },
  { title: "Saree & Dupatta Draping", desc: "Signature draping styles tailored to your silhouette and outfit.", price: "₹ 2,500", img: p2 },
  { title: "Artificial Eyelashes", desc: "Premium lashes hand-applied for the perfect bridal flutter.", price: "₹ 1,500", img: sHd },
  { title: "Bridal Touch-up", desc: "On-call touch-ups so you stay luminous from ceremony to send-off.", price: "₹ 3,500", img: aboutArtist },
];

const PACKAGES = [
  {
    name: "Classic Bride",
    tag: "The essential",
    price: "₹ 25,000",
    features: ["HD Bridal Makeup", "Bridal Hairstyling", "Saree Draping", "Basic Touch-up Kit"],
    highlight: false,
  },
  {
    name: "Premium Bride",
    tag: "Most loved",
    price: "₹ 45,000",
    features: ["Airbrush Bridal Makeup", "Signature Hairstyling", "Saree & Dupatta Draping", "Jewellery Setting", "Complimentary Trial", "Touch-up Kit"],
    highlight: false,
  },
  {
    name: "Royal Bride",
    tag: "Signature",
    price: "₹ 75,000",
    features: ["HD + Airbrush Combination", "Two Hairstyle Changes", "Saree & Dupatta Draping", "Jewellery Setting", "Complimentary Trial", "On-site Touch-up Artist", "Bridal Skincare Prep"],
    highlight: true,
  },
  {
    name: "Luxury Wedding",
    tag: "3-day event",
    price: "₹ 1,50,000",
    features: ["Haldi, Mehendi & Sangeet Looks", "Wedding Day HD/Airbrush", "Reception Glam", "Dedicated Hair & Drape Artist", "Full Touch-up Kit", "Personalised Consultation"],
    highlight: false,
  },
];

const PORTFOLIO = [
  { src: p1, cat: "Traditional" },
  { src: p2, cat: "South Indian" },
  { src: p3, cat: "Christian" },
  { src: p4, cat: "Reception" },
  { src: p5, cat: "Engagement" },
  { src: p6, cat: "Haldi" },
];

const TESTIMONIALS = [
  { name: "Ananya Sharma", img: p1, text: "I felt like the most beautiful version of myself. Every detail — from my lashes to my dupatta — was perfect. My husband couldn't stop staring." },
  { name: "Priya Menon", img: p2, text: "The team arrived on time, so calm and professional. My makeup lasted through 12 hours of ceremonies and photos without a single touch-up needed." },
  { name: "Rebecca Thomas", img: p3, text: "Soft, romantic and exactly what I dreamed of for my church wedding. The trial made me feel completely at ease. Highly recommend Radiance." },
  { name: "Kavya Iyer", img: p5, text: "The engagement look was so fresh and modern. Guests kept asking who did my makeup. Booking them for my wedding without a second thought." },
];

export default function BridalHome() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setShowTop(y > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        [data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity .9s ease, transform .9s ease; }
        [data-reveal].is-visible { opacity: 1; transform: none; }
      `}</style>

      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-ivory/80 border-b border-champagne/30 py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Flower2 className="h-5 w-5 text-primary" strokeWidth={1.5} />
            <div className="leading-tight">
              <div className="font-display text-lg md:text-xl tracking-wide">Radiance</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground -mt-0.5">Bridal Studio</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {NAV.slice(0, 7).map((n) => (
              <a key={n.href} href={n.href} className="relative text-foreground/80 hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-champagne after:transition-all hover:after:w-full">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#book" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:bg-rose-deep transition-colors">
              Book
            </a>
            <button className="lg:hidden p-2" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-ivory">
          <div className="flex items-center justify-between px-5 py-5 border-b border-champagne/30">
            <div className="font-display text-xl">Radiance</div>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
          </div>
          <nav className="flex flex-col p-6 gap-5 text-xl font-display">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="border-b border-champagne/20 pb-4">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 bg-floral">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blush/40 blur-3xl animate-float" />
          <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-champagne/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-champagne" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-primary">Bridal Couture Makeup</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
              Every bride deserves to <span className="font-script text-gold text-6xl md:text-7xl lg:text-8xl">shine</span> on her special day.
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Professional bridal makeup artistry creating timeless, elegant and unforgettable looks — crafted with love for the most important day of your life.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#book" className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground hover:bg-rose-deep transition-all shadow-lg shadow-primary/20">
                Book Your Bridal Trial
                <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-8 py-4 text-xs uppercase tracking-[0.2em] text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                View Portfolio
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-sm text-muted-foreground">
              <div><div className="font-display text-3xl text-primary">500+</div>Brides styled</div>
              <div><div className="font-display text-3xl text-primary">12+</div>Years of artistry</div>
              <div><div className="font-display text-3xl text-primary">5.0</div>Average rating</div>
            </div>
          </div>
          <div data-reveal className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border border-champagne/60 rounded-[240px_240px_20px_20px]" />
            <div className="relative overflow-hidden rounded-[240px_240px_20px_20px] shadow-2xl shadow-rose-deep/20">
              <img src={heroBride} alt="Bride in champagne lehenga" width={1536} height={1920} className="w-full h-[560px] md:h-[680px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 glass-card rounded-2xl p-4 flex items-center gap-3">
              <Star className="h-5 w-5 fill-champagne text-champagne" />
              <div>
                <div className="text-sm font-medium">Certified Artist</div>
                <div className="text-xs text-muted-foreground">MAC · Bobbi Brown · Huda</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div data-reveal className="relative order-2 lg:order-1">
            <img src={aboutArtist} alt="The bridal artist at work" loading="lazy" width={1200} height={1400} className="rounded-lg w-full h-[520px] object-cover shadow-xl shadow-rose-deep/10" />
            <div className="hidden md:block absolute -bottom-8 -right-8 glass-card rounded-lg p-6 max-w-[220px]">
              <Heart className="h-6 w-6 text-primary mb-2" />
              <p className="text-sm text-muted-foreground italic">"I don't cover a bride's beauty — I reveal it."</p>
            </div>
          </div>
          <div data-reveal className="order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary">The Artist</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary leading-tight">
              A calm hand for the <span className="font-script text-gold">most important</span> morning of your life.
            </h2>
            <div className="gold-divider my-8 max-w-[100px]" />
            <p className="text-muted-foreground leading-relaxed">
              For over a decade, Lekshana Makeovers has been the trusted sanctuary where brides begin their forever. Every look is designed personally — starting with a private consultation, refined at your trial, and perfected on your wedding day.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "12+ years of bridal artistry",
                "Certified makeup professional",
                "Premium international brands only",
                "One-on-one bridal consultations",
                "Hospital-grade hygiene standards",
                "Skincare-first, natural glow finish",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-champagne/40">
                    <Check className="h-3 w-3 text-primary" strokeWidth={2.5} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-secondary/40 relative">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary">Bridal Services</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">Curated for every ceremony</h2>
            <div className="gold-divider mx-auto my-6 max-w-[100px]" />
            <p className="text-muted-foreground">From your haldi to your reception — every look is styled with the same devotion.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <article key={s.title} data-reveal className="group glass-card rounded-2xl overflow-hidden flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{s.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Starting at</div>
                      <div className="font-display text-xl text-gold">{s.price}</div>
                    </div>
                    <a href="#book" className="text-xs uppercase tracking-[0.2em] text-primary border-b border-champagne pb-0.5 hover:border-primary transition-colors">
                      Book Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary">Bridal Packages</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">Chosen with love</h2>
            <div className="gold-divider mx-auto my-6 max-w-[100px]" />
            <p className="text-muted-foreground">Complete experiences designed around your wedding story.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {PACKAGES.map((p) => (
              <article
                key={p.name}
                data-reveal
                className={`relative rounded-2xl p-8 flex flex-col ${
                  p.highlight
                    ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30 scale-[1.02]"
                    : "glass-card"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-champagne px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                    <Crown className="h-3 w-3" /> Signature
                  </div>
                )}
                <div className={`text-[11px] uppercase tracking-[0.3em] ${p.highlight ? "text-champagne" : "text-primary"}`}>{p.tag}</div>
                <h3 className={`mt-2 font-display text-3xl ${p.highlight ? "text-primary-foreground" : "text-primary"}`}>{p.name}</h3>
                <div className={`mt-4 font-display text-4xl ${p.highlight ? "text-champagne" : "text-gold"}`}>{p.price}</div>
                <div className={`my-6 h-px ${p.highlight ? "bg-champagne/40" : "bg-champagne/60"}`} />
                <ul className="space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-champagne" : "text-primary"}`} strokeWidth={2} />
                      <span className={p.highlight ? "text-primary-foreground/90" : ""}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#book"
                  className={`mt-8 inline-flex items-center justify-center rounded-full py-3 text-xs uppercase tracking-[0.2em] transition-colors ${
                    p.highlight
                      ? "bg-champagne text-primary hover:bg-ivory"
                      : "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Book Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 md:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary">Portfolio</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">Real brides. Real radiance.</h2>
            <div className="gold-divider mx-auto my-6 max-w-[100px]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {PORTFOLIO.map((item, i) => (
              <button
                key={i}
                data-reveal
                onClick={() => setLightbox(item.src)}
                className={`group relative overflow-hidden rounded-lg ${
                  i === 0 || i === 4 ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-[3/4]"
                }`}
              >
                <img src={item.src} alt={`${item.cat} bride`} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-left text-primary-foreground translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-champagne">{item.cat}</div>
                  <div className="font-display text-xl">View Look</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary">Kind Words</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">Loved by brides across the country</h2>
            <div className="gold-divider mx-auto my-6 max-w-[100px]" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} data-reveal className="glass-card rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-champagne text-champagne" />
                  ))}
                </div>
                <blockquote className="font-display text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-champagne/60" />
                  <div>
                    <div className="font-medium text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Verified Bride</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-champagne blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blush blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 md:px-8 grid lg:grid-cols-2 gap-12">
          <div data-reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-champagne">Book Appointment</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Let's begin your <span className="font-script text-champagne">bridal</span> story.
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed max-w-md">
              Share a few details about your wedding day. We'll reach out within 24 hours to schedule your consultation and bridal trial.
            </p>
            <div className="gold-divider my-8 max-w-[100px]" />
            <div className="space-y-3 text-sm text-primary-foreground/90">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-champagne" /> +91 85550 10607</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-champagne" /> hello@lekshanamakeovers.com</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-champagne" /> The Radiance Studio, Bandra West, Mumbai</div>
            </div>
          </div>
          <form
            data-reveal
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              toast.success("Thank you, beautiful bride!", {
                description: "Your appointment request is received. We'll be in touch within 24 hours.",
              });
              form.reset();
            }}
            className="glass-card rounded-2xl p-6 md:p-8 grid gap-4 text-foreground"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Bride's Name" name="name" required />
              <Field label="Phone Number" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Wedding Date" name="date" type="date" required />
              <Field label="Event Type" name="event" placeholder="e.g. Sangeet, Wedding" />
            </div>
            <Field label="Preferred Style" name="style" placeholder="HD, Airbrush, Traditional…" />
            <Field label="Venue" name="venue" placeholder="City / venue name" />
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Message</label>
              <textarea name="message" rows={3} className="mt-1.5 w-full rounded-md border border-champagne/40 bg-ivory/70 px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-rose-deep transition-colors">
              Request Appointment <Sparkles className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div data-reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary">Visit The Studio</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">Come say hello</h2>
            <div className="gold-divider my-6 max-w-[100px]" />
            <div className="space-y-5 text-muted-foreground">
              <ContactRow icon={<MapPin />} title="Studio Address" text="12, Linking Road, Bandra West, Mumbai 400050" />
              <ContactRow icon={<Phone />} title="Phone" text="+91 85550 10607" />
              <ContactRow icon={<MessageCircle />} title="WhatsApp" text="+91 85550 10607" />
              <ContactRow icon={<Mail />} title="Email" text="hello@lekshanamakeovers.com" />
            </div>
            <div className="mt-8 flex gap-3">
              <a href="#" aria-label="Instagram" className="h-11 w-11 grid place-items-center rounded-full border border-champagne text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="h-11 w-11 grid place-items-center rounded-full border border-champagne text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div data-reveal className="rounded-2xl overflow-hidden shadow-xl shadow-rose-deep/10 border border-champagne/50 h-[420px]">
            <iframe
              title="Studio location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.83!3d19.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM2LjAiTiA3MsKwNTAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="h-5 w-5 text-champagne" strokeWidth={1.5} />
              <div className="font-display text-xl">Lekshana Makeovers</div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Luxury bridal makeup, tailored to your love story.
            </p>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-champagne transition-colors">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-4">Bridal Services</div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-champagne mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>+91 85550 10607</li>
              <li>hello@lekshanamakeovers.com</li>
              <li>Bandra West, Mumbai</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a href="#" className="h-9 w-9 grid place-items-center rounded-full border border-champagne/40 hover:bg-champagne hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="h-9 w-9 grid place-items-center rounded-full border border-champagne/40 hover:bg-champagne hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-8 mt-12 pt-6 border-t border-champagne/20 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Lekshana Makeovers. Crafted with love for every bride.
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/918555010607"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* SCROLL TOP */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-xl shadow-primary/30 hover:bg-rose-deep transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-primary/90 backdrop-blur-md grid place-items-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-primary-foreground" aria-label="Close">
            <X className="h-8 w-8" />
          </button>
          <img src={lightbox} alt="Portfolio look" className="max-h-[85vh] max-w-full rounded-lg shadow-2xl" />
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-md border border-champagne/40 bg-ivory/70 px-3 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

function ContactRow({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 h-10 w-10 shrink-0 grid place-items-center rounded-full bg-champagne/30 text-primary">
        {icon}
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-primary">{title}</div>
        <div className="text-sm text-foreground">{text}</div>
      </div>
    </div>
  );
}