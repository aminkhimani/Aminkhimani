import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Play,
  Download,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Boxes,
  Box,
  Film,
  Wand2,
  PenTool,
  ArrowUp,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import projectLandCruiser from "@/assets/project-land-cruiser.jpg";
import projectSitara from "@/assets/project-sitara.jpg";
import project3Bahadur from "@/assets/project-3bahadur.jpg";
import projectUmroAyyar from "@/assets/project-umro-ayyar.png";
import showreelImg from "@/assets/showreel.jpg";
import resumeUrl from "@/assets/Amin_Khimani_Resume.pdf";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = ["Home", "About", "Work", "Services", "Experience", "Contact"];

const services = [
  { icon: Sparkles, label: "VFX & Compositing" },
  { icon: Boxes, label: "Motion Graphics" },
  { icon: Box, label: "3D Animation" },
  { icon: Film, label: "Video Editing" },
  { icon: Wand2, label: "AI Creative" },
  { icon: PenTool, label: "Concept Design" },
];

const filters = [
  "All",
  "3D and Composite",
  "Motion Graphics and Commercials",
  "Graphic Design and Social Media",
  "AI Videos and UGCs",
];

const projects = [
  {
    img: projectLandCruiser,
    title: "Land Cruiser 2022 World Premiere",
    tag: "3D and Composite",
    href: "https://www.youtube.com/watch?v=CyRb6fstU3M",
  },
  {
    img: projectSitara,
    title: "Sitara: Let Girls Dream",
    tag: "3D and Composite",
    href: "https://www.youtube.com/watch?v=EztDSGZb2xY",
  },
  {
    img: project3Bahadur,
    title: "3 Bahadur: Rise of the Warriors",
    tag: "3D and Composite",
    href: "https://www.youtube.com/watch?v=ZrFGEbvuweo",
  },
  {
    img: projectUmroAyyar,
    title: "Umro Ayyar: A New Beginning",
    tag: "3D and Composite",
    href: "https://www.youtube.com/watch?v=qO4kobD35kM",
  },
];

const stats = [
  { n: "16+", l: "Years Experience" },
  { n: "100+", l: "Projects Completed" },
  { n: "7", l: "Feature Films" },
  { n: "30+", l: "Brands" },
];

const clients = ["Toyota", "NETFLIX", "EDCMotion", "Infinix", "JS Bank", "Claus Porte"];

const experience = [
  {
    years: "Dec 2024 – Present",
    role: "Creative Director",
    org: "AGI Innovations · Islamabad, Pakistan",
    desc: "Driving overall creative strategy and brand identity. Planning and overseeing campaigns across digital, print and multimedia. Projects: Etihad Day 2025, Lincoln University College, Climize, Zarvo, Seapool Mobile Game, Al Karim City.",
  },
  {
    years: "Jun 2022 – Jul 2024",
    role: "VFX Technical Director",
    org: "Jubilant Studios · Islamabad, Pakistan",
    desc: "Supervised the VFX department and mentored associate TDs and artists. Partnered with directors and producers to meet the production needs of feature projects. Projects: Umro Ayyar – A New Beginning.",
  },
  {
    years: "Jan 2021 – Jun 2022",
    role: "Lead Technical Director",
    org: "Salsoft Technologies · Karachi, Pakistan",
    desc: "Led the Unreal Cinematic & Productions department, mentored associate TDs and maintained the tools and pipeline for real-time cinematic work.",
  },
  {
    years: "Nov 2019 – Dec 2020",
    role: "Head of FX / CFX",
    org: "Talisman Animation Studios · Karachi, Pakistan",
    desc: "Ran the FX / CFX department across feature and commercial projects including Donkey King Song, Prince Adventures, Safeguard Song and Ajwan.",
  },
  {
    years: "Oct 2014 – Oct 2019",
    role: "Lead VFX Technical Director",
    org: "Waadi Animations · Karachi, Pakistan",
    desc: "Supervised VFX on flagship animated features including the 3 Bahadur trilogy and Sitara: Let Girls Dream, mentoring TDs and artists throughout production.",
  },
  {
    years: "Jan 2012 – Sep 2014",
    role: "Creative Director",
    org: "Inverse Studio · Karachi, Pakistan",
    desc: "Delivered creative work for twofour54, Telenor Djuice, Frosted Films, Sunsilk Dubai, BrandExpo Pakistan, Dollar Pointer, PIBT, Velv Paints and more.",
  },
  {
    years: "Jan – Nov 2011",
    role: "Character Technical Director",
    org: "Realimage Productions · Dubai, UAE",
    desc: "Part of the VFX production team implementing viable VFX solutions. Projects: Dolphin Energy, Toshiba TVCs, Sheikh Hamdan Sports Awards, UAE National Day.",
  },
  {
    years: "Apr 2010 – Jan 2011",
    role: "Technical Director",
    org: "ICE Animations · Karachi, Pakistan",
    desc: "Character rigging, character FX and look development for VFX productions including Safeguard, Pi Rats and Dragon. Trained TDs and artists on FX tools.",
  },
];

const testimonials = [
  {
    quote:
      "Throughout the time I've worked with Amin, he has been a great asset as a team member and as a creative/technical artist. He has always met his deadlines and worked above or beyond what was expected. I have found him to be hard working, consistent and a great asset.",
    name: "Ali Jafri",
    role: "Smart Unicorn Ltd., Founder",
    initials: "AJ",
  },
  {
    quote:
      "Amin has the ability to spearhead projects that have high technical requirements. His fluency with Vfx and his experience with working on big budget projects has reflected well upon our departments output in terms of quality and finesse.",
    name: "Babar Khan",
    role: "Executive Producer, Fission ImageWorks",
    initials: "BK",
  },
  {
    quote:
      "Amin is an accomplished Creative Artist. He is quite professional and has worked on a number of graphics packages. He is a very friendly person and hard working. I enjoyed working with him and learned some important things as well related to 3D Lighting.",
    name: "Dr Ismail Khalid",
    role: "Snr. Lecturer, Teesside University",
    initials: "IK",
  },
];

function Logo() {
  return (
    <span
      className="font-display text-3xl leading-none font-semibold tracking-tight"
      aria-label="Amin H. Khimani"
    >
      A<span className="align-top">HK</span>
    </span>
  );
}

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[var(--panel-border)] bg-[var(--panel)] ${className}`}
    >
      {children}
    </div>
  );
}

function Index() {
  const [playShowreel, setPlayShowreel] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="mx-auto max-w-7xl px-6 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="hidden sm:block border-l border-border pl-3">
              <div className="text-sm font-semibold tracking-[0.18em]">AMIN H. KHIMANI</div>
              <div className="text-[10px] tracking-[0.22em] text-muted-foreground">
                VISUAL STORYTELLER &amp; CREATIVE DIRECTOR
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-9 text-[11px] tracking-[0.22em] font-medium">
            {nav.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative py-1 transition-colors hover:text-foreground ${
                  i === 0 ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.toUpperCase()}
                {i === 0 && (
                  <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-accent" />
                )}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-[11px] font-semibold tracking-[0.22em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            LET&apos;S TALK
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Social rail */}
          <div className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 hidden md:block z-20">
            <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-background/60 px-2 py-4">
              {[
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/amin-h-khimani-05690626/",
                  label: "LinkedIn",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/el_banditak/",
                  label: "Instagram",
                },
                {
                  Icon: Mail,
                  href: "mailto:aminkhimani.ak@gmail.com",
                  label: "Email",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-accent"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>


          <div className="lg:pl-20">
            <h1 className="font-display text-6xl sm:text-7xl leading-[1.02] tracking-tight">
              Ideas. Stories.
              <br />
              Visuals. <span className="italic text-accent">Impact.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              I create powerful visual experiences that help brands and
              filmmakers stand out and connect.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                VIEW SHOWREEL <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-foreground transition-colors hover:bg-secondary"
              >
                ABOUT ME
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[420px] w-[420px] rounded-full border border-border/70" />
            </div>
            {/* dot decorations */}
            <div className="pointer-events-none absolute left-6 top-10 grid grid-cols-6 gap-1.5 opacity-60">
              {Array.from({ length: 36 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              ))}
            </div>
            <div className="pointer-events-none absolute right-2 bottom-8 grid grid-cols-6 gap-1.5 opacity-60">
              {Array.from({ length: 36 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              ))}
            </div>
            <img
              src={heroPortrait}
              alt="Amin H. Khimani portrait"
              width={900}
              height={900}
              className="relative z-10 w-[440px] max-w-full object-contain"
            />
          </div>
        </div>

        {/* Services strip */}
        <Panel className="mt-4 px-6 py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {services.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="h-6 w-6 text-foreground" strokeWidth={1.4} />
                <div className="mt-3 text-[11px] font-semibold tracking-[0.2em] leading-tight">
                  {label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>

      {/* Selected Work */}
      <section id="work" className="mx-auto max-w-7xl px-6 pt-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-[13px] font-semibold tracking-[0.28em]">SELECTED WORK</h2>
          <div className="flex flex-wrap items-center gap-7 text-[11px] tracking-[0.22em] font-medium">
            {filters.map((f, i) => (
              <button
                key={f}
                className={`relative py-1 transition-colors ${
                  i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.toUpperCase()}
                {i === 0 && (
                  <span className="absolute -bottom-0.5 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-accent" />
                )}
              </button>
            ))}
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-[11px] font-semibold tracking-[0.22em] transition-colors hover:bg-secondary"
          >
            VIEW ALL PROJECTS <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-primary aspect-[4/5]"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <div className="text-[13px] font-semibold tracking-[0.2em]">
                  {p.title.toUpperCase()}
                </div>
                <div className="mt-1 text-[10px] tracking-[0.22em] text-primary-foreground/70">
                  {p.tag.toUpperCase()}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 pt-14">
        <Panel className="p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <h3 className="text-[13px] font-semibold tracking-[0.28em]">ABOUT ME</h3>
              <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted-foreground">
                With 16+ years of experience, I turn ideas into visuals that
                inspire, communicate and leave a lasting impact.
              </p>
              {resumeUrl ? (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-7 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-[11px] font-semibold tracking-[0.22em] transition-colors hover:bg-secondary"
                >
                  DOWNLOAD CV <Download className="h-3.5 w-3.5" />
                </a>
              ) : (
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-[11px] font-semibold tracking-[0.22em] transition-colors hover:bg-secondary"
                >
                  GET IN TOUCH <Download className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            <div>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-4xl font-semibold">{s.n}</div>
                    <div className="mt-1 text-[10px] tracking-[0.22em] text-muted-foreground">
                      {s.l.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="text-[11px] font-semibold tracking-[0.28em]">CLIENTS</div>
                <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-4 opacity-80">
                  {clients.map((c) => (
                    <span
                      key={c}
                      className="font-display text-xl font-semibold tracking-wide text-foreground/85"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-6 pt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-[13px] font-semibold tracking-[0.28em]">EXPERIENCE</h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-[11px] font-semibold tracking-[0.22em] transition-colors hover:bg-secondary"
          >
            VIEW FULL RESUME <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr]">
          <ol className="relative">
            {experience.map((e, i) => (
              <li
                key={e.role}
                className="grid grid-cols-[110px_1fr] gap-6 pb-8 last:pb-0"
              >
                <div className="pt-1 text-xs text-muted-foreground">{e.years}</div>
                <div className="relative border-l border-border pl-6">
                  <span className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                  <div className="text-[13px] font-semibold tracking-[0.16em]">
                    {e.role.toUpperCase()}
                  </div>
                  <div className="mt-0.5 text-sm text-foreground/80">{e.org}</div>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {e.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="group relative block overflow-hidden rounded-xl aspect-video">
            {playShowreel ? (
              <iframe
                src="https://player.vimeo.com/video/487367306?autoplay=1&title=0&byline=0&portrait=0"
                title="Showreel 2024"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlayShowreel(true)}
                aria-label="Play showreel"
                className="absolute inset-0 h-full w-full text-left"
              >
                <img
                  src={showreelImg}
                  alt="3D & Compositing Showreel"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-105"
                >
                  <Play className="h-5 w-5 fill-white text-white" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="text-[13px] font-semibold tracking-[0.2em]">3D & COMPOSITING SHOWREEL</div>
                  <div className="mt-1 max-w-[240px] text-sm text-white/85">
                    A collection of my best work across 3d & Compositing.
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 border-b border-white pb-1 text-[11px] font-semibold tracking-[0.22em]">
                    WATCH NOW <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 pt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-[13px] font-semibold tracking-[0.28em]">WHAT CLIENTS SAY</h2>
          <div className="flex gap-2">
            <button
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <Panel key={t.name} className="p-7">
              <div className="font-display text-5xl leading-none text-foreground/80">“</div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[11px] font-semibold tracking-widest text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Panel>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <span className="h-1.5 w-6 rounded-full bg-primary" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pt-16">
        <Panel className="p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-display text-5xl leading-[1.05] tracking-tight">
                Let&apos;s create something
                <br />
                <span className="italic text-accent">amazing</span> together.
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                Have a project in mind or want to collaborate? I&apos;d love to
                hear from you.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  aminkhimani.ak@gmail.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  +92 333 3318288
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  Islamabad, Pakistan
                </li>
                <li className="flex items-center gap-3 text-foreground/85">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  Available for freelance &amp; full-time opportunities
                </li>
              </ul>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <input
                placeholder="Your Name"
                className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
              <input
                placeholder="Your Email"
                type="email"
                className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
              <input
                placeholder="Subject"
                className="sm:col-span-2 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="sm:col-span-2 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent resize-none"
              />
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3.5 text-[11px] font-semibold tracking-[0.22em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  SEND MESSAGE <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        </Panel>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 py-10 mt-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <Logo />
            <span>© 2026 Amin H. Khimani All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms &amp; Conditions</a>
            <button
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:text-foreground"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Silence unused import warnings for icons kept for future use
void ArrowUpRight;
