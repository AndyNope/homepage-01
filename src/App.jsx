import {
    ArrowUpRight,
    Award,
    Blocks,
    BookOpen,
    Briefcase,
    Brush,
    Building2,
    Camera,
    Code2,
    Compass,
    Cpu,
    Film,
    FileSpreadsheet,
    FileText,
    Ghost,
    Globe,
    GraduationCap,
    Home,
    Link,
    Layers,
    Mail,
    MapPin,
    Menu,
    MessageCircle,
    MessageSquare,
    PanelsTopLeft,
    Phone,
    QrCode,
    Rocket,
    Smartphone,
    TrendingUp,
    Users,
    Wrench,
    X,
    ChevronDown,
  } from 'lucide-react'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect, lazy, Suspense } from 'react'
import andyPhoto from './assets/andy-bui.jpg'

const ThreeScene = lazy(() => import('./ThreeScene'))

const projects = [
  {
    title: 'Easy Contact',
    type: 'Web App',
    description: 'Für schnelle Kontakte an Events.',
    href: 'https://easy-contact.com/',
    Icon: Users,
    color: 'from-orange-300/20 to-red-500/25',
  },
  {
    title: 'Crypto Trading Simulator',
    type: 'Web App',
    description: 'Praktisch das Trading kennenlernen.',
    href: 'https://cryptosim.andynope.com/',
    Icon: TrendingUp,
    color: 'from-amber-200/20 to-orange-400/25',
  },
  {
    title: 'Voci Trainer',
    type: 'Web App',
    description: 'Einfach und kostenlos Vokabeln lernen.',
    href: 'https://voci-trainer.andynope.com/',
    Icon: BookOpen,
    color: 'from-yellow-200/20 to-orange-300/30',
  },
  {
    title: '3D Spiel Horror Cave',
    type: '3D / Game',
    description: 'Im Dunkel durch das Labyrinth zum Ziel.',
    href: 'https://horrorcave.andynope.com/',
    Icon: Ghost,
    color: 'from-red-400/20 to-orange-500/25',
  },
  {
    title: 'Watermarker',
    type: 'Web Tool',
    description: 'Schnelle Lösung für Wasserzeichen auf mehrere Bilder.',
    href: 'https://andynope.com/watermarker',
    Icon: Layers,
    color: 'from-orange-200/20 to-amber-400/25',
  },
  {
    title: 'Universal Turing Maschine',
    type: 'Uni-Projekt · ZHAW',
    description: 'Simulation einer Universellen Turing-Maschine.',
    href: 'https://utm.andynope.com/',
    Icon: Cpu,
    color: 'from-amber-300/20 to-red-400/25',
  },
  {
    title: 'QR-Code Generator',
    type: 'Web Tool',
    description: 'Kostenloser und einfacher QR-Code Generator.',
    href: null,
    Icon: QrCode,
    color: 'from-orange-300/20 to-amber-500/25',
  },
  {
    title: 'QR-Code Overlay',
    type: 'Web Tool',
    description: 'QR-Code direkt auf ein PDF oder Bild legen.',
    href: null,
    Icon: QrCode,
    color: 'from-amber-200/20 to-orange-300/25',
  },
  {
    title: 'PDF to CSV',
    type: 'Web Tool',
    description: 'Liest eine Rechnung ein und exportiert sie als CSV-Datei.',
    href: null,
    Icon: FileSpreadsheet,
    color: 'from-red-300/20 to-orange-400/25',
  },
]

const services = [
  {
    label: 'Web Design',
    description: 'Das modernste und hochwertigste Design auf professionellem Niveau.',
    Icon: Brush,
  },
  {
    label: 'Webentwicklung',
    description: 'Hochwertige Fullstack-Entwicklung von Websites auf professionellem Niveau.',
    Icon: Code2,
  },
  {
    label: 'Mobile Apps',
    description:
      'Professionelle Entwicklung von Anwendungen für iOS und Android mit NativeScript oder Android Studio.',
    Icon: Smartphone,
  },
  {
    label: 'Fotografie',
    description: 'Hochwertige Fotos fast jeder Kategorie auf professionellem Niveau.',
    Icon: Camera,
  },
  {
    label: 'Video & Kurzfilm',
    description: 'Fesselnde Videoaufnahmen und Kurzfilmproduktion.',
    Icon: Film,
  },
]

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

function SkillBar({ name, pct, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="grid gap-1"
    >
      <div className="flex items-center justify-between text-xs">
        <span className="text-[#fce5cf]">{name}</span>
        <span className="text-orange-100/55">{pct}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-orange-300 to-amber-400"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ delay: delay + 0.1, duration: 0.7, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

function JobCard({ job, hasContent }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-orange-100/15 bg-white/5 backdrop-blur-sm">
      <button
        onClick={() => hasContent && setOpen(o => !o)}
        className={`w-full px-5 py-4 text-left ${hasContent ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="font-medium text-[#fff4e8]">{job.role}</div>
            <div className="mt-0.5 text-sm text-orange-200/80">{job.company}</div>
          </div>
          <div className="flex items-start gap-3 shrink-0">
            <div className="text-right text-xs text-orange-100/60">
              <div className={job.current ? 'font-medium text-emerald-400' : ''}>{job.period}</div>
              <div className="mt-0.5 flex items-center justify-end gap-1"><MapPin className="h-3 w-3" />{job.location}</div>
            </div>
            {hasContent && (
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="mt-0.5 shrink-0 text-orange-200/50"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            )}
          </div>
        </div>
        {job.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {job.tags.map(tag => (
              <span key={tag} className="rounded-full border border-orange-100/20 bg-orange-200/10 px-2.5 py-0.5 text-xs text-orange-100/80">{tag}</span>
            ))}
          </div>
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="desc"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul className="border-t border-orange-100/10 px-5 pb-4 pt-3 space-y-1.5">
              {job.desc.map((line, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-orange-100/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange-300/60" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const NAV_LINKS = [
  { href: '#projekte', label: 'Projekte' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#ueber', label: 'Uber mich' },
  { href: '#lebenslauf', label: 'Lebenslauf' },
  { href: '#kontakt', label: 'Kontakt' },
]

function App() {
  const containerRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e) => { if (e.matches) setMenuOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60])
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.96])
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 270])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 190])

  return (
    <main ref={containerRef} className="relative overflow-x-hidden">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-orange-300 via-amber-400 to-red-500"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Ambient glows */}
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none fixed -left-24 top-36 z-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -160]) }}
        className="pointer-events-none fixed -right-20 bottom-20 z-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl"
      />

      {/* ── Nav + Hero ── */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-10 md:pt-14">
        <nav className="relative flex items-center justify-between rounded-full border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-xl md:px-6">
          <div className="flex items-center gap-2 text-sm tracking-[0.22em] text-orange-100/90">
            <Code2 className="h-4 w-4" />
            ANDY BUI
          </div>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 text-sm text-orange-50/80 md:flex">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="transition hover:text-white">{l.label}</a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#kontakt"
            className="hidden rounded-full border border-orange-100/40 bg-orange-200/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-orange-50 transition hover:bg-orange-200/20 md:inline-flex"
          >
            Kontakt aufnehmen
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Menu schliessen' : 'Menu oeffnen'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-100/30 bg-white/5 text-orange-100 md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {/* Mobile menu drawer */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-3 flex flex-col gap-1 rounded-3xl border border-white/20 bg-white/5 px-5 py-4 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm text-orange-50/80 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full border border-orange-100/40 bg-orange-200/10 px-4 py-2.5 text-center text-xs font-medium tracking-[0.16em] text-orange-50"
            >
              Kontakt aufnehmen
            </a>
          </motion.div>
        )}

        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="relative z-10 mt-14 grid items-center gap-10 md:mt-20 md:grid-cols-12"
        >
          {/* Left — text */}
          <div className="md:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-orange-100/80">
                <Globe className="h-3.5 w-3.5" />
                Informatiker EFZ &nbsp;&middot;&nbsp; Informatik Student
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-[#fff4e8] sm:text-6xl md:text-7xl">
                Andy
                <span className="bg-gradient-to-r from-orange-200 via-amber-100 to-orange-400 bg-clip-text text-transparent">
                  {' '}(Nopparat){' '}
                </span>
                Bui
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#f2d8be]/85 md:text-lg">
                Programmierer mit Managementerfahrung und umfangreicher Projekterfahrung
                vom Konzept bis zur Ausführung. Versiert in Backend und Frontend.
                Talente: Planung, Analyse und Umsetzung.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projekte"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-300 to-red-400 px-6 py-3 text-sm font-semibold text-[#20120d] shadow-[0_12px_30px_rgba(255,148,72,0.35)] transition hover:scale-[1.03]"
                >
                  Projekte ansehen
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-100/40 bg-white/5 px-6 py-3 text-sm text-orange-50 backdrop-blur-md transition hover:border-orange-200/70"
                >
                  Kontakt aufnehmen
                  <MessageSquare className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — profile photo */}
          <div className="relative md:col-span-5">
            <motion.div
              style={{ rotate: ringRotate }}
              className="pointer-events-none absolute -inset-6 rounded-[2rem] border border-dashed border-orange-200/20"
            />
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-[2rem] border border-orange-100/30 bg-gradient-to-b from-white/15 to-white/5 p-3 backdrop-blur-2xl">
                <img
                  src={andyPhoto}
                  alt="Andy Nopparat Bui"
                  className="w-full rounded-[1.5rem] object-cover object-top max-h-72 md:max-h-none"
                />
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>

      {/* ── Projekte ── */}
      <section id="projekte" className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-orange-100/80">
            <Rocket className="h-4 w-4" />
            Projekte
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, idx) => {
            const Tag = project.href ? motion.a : motion.div
            const linkProps = project.href
              ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' }
              : {}
            return (
            <Reveal key={project.title} delay={idx * 0.08}>
              <Tag
                {...linkProps}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className={`group flex h-full flex-col rounded-3xl border border-orange-100/20 bg-gradient-to-b ${project.color} p-[1px]${project.href ? '' : ' cursor-default'}`}
              >
                <div className="flex h-full flex-col rounded-3xl bg-[#151926]/90 p-6 backdrop-blur-xl">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex w-fit rounded-full border border-orange-100/25 px-3 py-1 text-xs uppercase tracking-wider text-orange-100/75">
                      {project.type}
                    </span>
                    <project.Icon className="h-4 w-4 text-orange-200/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#fff1e1]">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#f4d7bc]/80">{project.description}</p>
                  {project.href && (
                    <div className="mt-5 flex items-center justify-end">
                      <ArrowUpRight className="h-5 w-5 text-orange-100/75 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  )}
                </div>
              </Tag>
            </Reveal>
            )
          })}
        </div>


      </section>

      {/* ── 3D Deko ── */}
      <div className="relative mx-auto flex max-w-md flex-col items-center py-4">
        <div className="h-72 w-full md:h-[26rem]">
          <Suspense fallback={null}>
            <ThreeScene />
          </Suspense>
        </div>
        <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-orange-100/25">
          Interaktiv — Maus bewegen
        </p>
      </div>

      {/* ── Leistungen ── */}
      <section id="leistungen" className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold text-[#fff4e8] md:text-5xl">
              Was ich anbiete.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-[#f2d8be]/80">
              Vom Konzept bis zur Ausführung — Design, Entwicklung, Foto und Film
              auf professionellem Niveau.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-3">
              {services.map((service, idx) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3 rounded-2xl border border-orange-100/20 bg-white/5 px-4 py-3"
                >
                  <service.Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-200" />
                  <div>
                    <div className="text-sm font-medium text-[#fce5cf]">{service.label}</div>
                    <div className="mt-0.5 text-xs leading-relaxed text-orange-100/60">{service.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Uber mich ── */}
      <section id="ueber" className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="rounded-[2rem] border border-orange-100/25 bg-gradient-to-br from-white/10 to-transparent p-8 backdrop-blur-xl md:p-12">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-semibold text-[#fff4e8] md:text-5xl">Uber mich.</h2>
                <p className="mt-5 leading-relaxed text-[#f2d8be]/85">
                  Programmierer mit Managementerfahrung und mit umfangreicher Projekterfahrung
                  vom Konzept bis hin zur Ausführung, sowie hervorragender sozialer Kompetenz.
                  Versiert in Backend und Frontend. Auf der Suche nach einer herausfordernden
                  Stelle als Applikationsentwickler, IT-Support oder IT-Management.
                  Zu den Talenten gehören beispielsweise Planung, Analyse und Umsetzung.
                </p>
                <p className="mt-4 text-sm text-[#f2d8be]/65">
                  Hobbys: E-Gitarre spielen, zeichnen, Filme schauen und fotografieren.
                </p>
              </div>
              <div className="grid gap-3 md:col-span-5">
                {[
                  [Code2, 'Fullstack-Entwicklung — Backend & Frontend'],
                  [Compass, 'Planung, Analyse und Umsetzung'],
                  [PanelsTopLeft, 'Management-Erfahrung'],
                  [Rocket, 'Umfangreiche Projekterfahrung'],
                ].map(([Icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-orange-100/20 bg-black/20 px-3 py-3 text-sm text-orange-100/90"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-orange-200" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Lebenslauf ── */}
      <section id="lebenslauf" className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="mb-12 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-orange-100/80">
            <Briefcase className="h-4 w-4" />
            Lebenslauf
          </div>
        </Reveal>

        {/* Arbeitserfahrung */}
        <Reveal>
          <h2 className="mb-8 flex items-center gap-2 text-xl font-semibold text-[#fff4e8]">
            <Building2 className="h-5 w-5 text-orange-300" />
            Arbeitserfahrung
          </h2>
        </Reveal>
        <div className="relative mb-16 border-l border-orange-100/20 pl-8">
          {[
            { role: 'Software Engineer', period: '03/2025 — Heute', company: 'uniQconsulting ag', location: 'Seuzach, Zürich', current: true, tags: ['C#', 'PowerShell', 'ReactJS', 'Azure', 'PowerAutomate', 'PowerApps'], desc: [
              'Entwicklung und Wartung von Enterprise-Applikationen auf Azure Cloud-Basis.',
              'Frontend-Entwicklung mit ReactJS, Backend-Automatisierung mit C# und PowerShell.',
              'Umsetzung von Workflows und Business-Apps mit Power Automate und Power Apps.',
            ] },
            { role: 'Ramp', period: '12/2024 — Heute', company: 'CGS Customer Ground Service AG', location: 'Zürich', current: true, tags: [], desc: [] },
            { role: 'Azure Cloud Developer', period: '03/2024 — 02/2025', company: 'TwinCap First AG', location: 'Wallisellen, Zürich', current: false, tags: ['ReactJS', 'ViteJS', 'Node.js', 'C#', 'CosmosDB', 'Azure', 'MS Teams'], desc: [
              'Entwicklung und Wartung von SaaS Add-Ons für Microsoft Teams.',
              'Backend-Entwicklung über Azure Cloud (CosmosDB, Azure Functions).',
              'Frontend mit ReactJS und ViteJS, API-Layer mit Node.js und C#.',
            ] },
            { role: 'Webmaster', period: '01/2024 — 01/2025', company: 'Alias – Studierende der ZHAW', location: 'Winterthur', current: false, tags: ['Moodle', 'Content & Design'], desc: [
              'Pflege und Weiterentwicklung der Vereinswebseite.',
              'Content-Management und Design-Anpassungen via Moodle.',
            ] },
            { role: 'Marketingleiter', period: '01/2024 — 08/2024', company: 'Alias – Studierende der ZHAW', location: 'Winterthur', current: false, tags: ['Confluence', 'Jira', 'Miro', 'Hubspot'], desc: [
              'Leitung des Marketing-Teams und Planung von Kampagnen.',
              'Koordination über Confluence, Jira und Miro; CRM via Hubspot.',
            ] },
            { role: 'Stage Hand', period: '04/2023 — 06/2024', company: 'EPOS Schweiz AG', location: 'Schweiz', current: false, tags: [], desc: [] },
            { role: 'Berufsbildner, Coach & Ansprechperson', period: '05/2023 — 11/2023', company: 'ICT Berufsbildungscenter AG', location: 'Sankt Gallen', current: false, tags: ['Modul 106', 'Modul 187', 'Modul 216', 'Modul 295', 'Modul 223', 'Modul 335'], desc: [
              'Ausbildung von Lernenden in der Applikationsentwicklung.',
              'Leitung monatlicher Standort-Meetings in Bern, Zürich und St. Gallen.',
              'Modulverantwortlicher für Modul 106 (Datenbanken).',
              'Unterrichtete Module: 187 (Linux), 216 (IoT), 106 (DB), 295 (Backend), 223 (OOP), 335 (Mobile/Android).',
            ] },
            { role: 'Applikationsentwickler', period: '09/2019 — 04/2023', company: 'Kreativ Media GmbH', location: 'Zürich', current: false, tags: ['Angular', 'TypeScript', 'Node.js', 'PHP', 'MySQL', 'Symfony', 'Docker', 'Jira'], desc: [
              'Technischer Kundenbetreuer im Hosting-Bereich (Plesk) und Fullstack-Webapp-Entwickler.',
              'Stack: Angular, TypeScript, Node.js, Git/GitLab, JS, jQuery, HTML5, SCSS, PHP, MySQL.',
              'Tooling: Confluence/Jira, Kanban/Scrum via Asana, Docker mit Jenkins, Symfony PHP, Webpack Encore.',
              'Fachliches und disziplinarisches Führen eines Teams von 2 Mitarbeitern.',
            ] },
            { role: 'Praktikum Fullstack Webentwickler', period: '08/2018 — 08/2019', company: 'digvis GmbH', location: 'Zürich', current: false, tags: ['PHP', 'JS', 'jQuery', 'HTML5', 'CSS', 'SCSS', 'MariaDB', 'SVN', 'GIMP', 'Inkscape'], desc: [
              'Fullstack-Webentwicklung für Kundenprojekte.',
              'Stack: PHP, JS, jQuery, HTML5, CSS, SCSS, Gulp, SVN, MariaDB.',
              'Design-Arbeiten mit GIMP und Inkscape.',
            ] },
            { role: 'Angestellter Gastronomie', period: '09/2015 — 09/2018', company: 'Burger King', location: 'Schweiz', current: false, tags: [], desc: [
              'Kassierer, Kundenbetreuung, Drive-In Service, tägliche Reinigung.',
            ] },
            { role: 'Aushilfe Produktion (Ferienjob)', period: '08/2015 — 09/2015', company: 'Kern & Sammet AG', location: 'Schweiz', current: false, tags: [], desc: [
              'Produktion Backwaren, Lagerung, Verpacken von Produkten, Reinigung der Geräte und Lager.',
            ] },
          ].map((job, idx) => {
            const hasContent = job.desc.length > 0 || job.tags.length > 0
            return (
            <motion.div
              key={job.role + job.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-[2.15rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-orange-300/60 bg-[#0f1117]">
                {job.current && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
              </span>
              <JobCard job={job} hasContent={hasContent} />
            </motion.div>
            )
          })}
        </div>

        {/* Ausbildung */}
        <Reveal>
          <h2 className="mb-8 flex items-center gap-2 text-xl font-semibold text-[#fff4e8]">
            <GraduationCap className="h-5 w-5 text-orange-300" />
            Ausbildung
          </h2>
        </Reveal>
        <div className="relative mb-16 border-l border-orange-100/20 pl-8">
          {[
            { title: 'Bachelor Ingenieurwesen, Informatik', period: '09/2022 — heute', school: 'ZHAW Zürcher Hochschule für angewandte Wissenschaft', location: 'Winterthur', current: true },
            { title: 'Audio Engineering', period: '11/2021 — 10/2022', school: '', location: 'Schweiz', current: false },
            { title: 'DIPLÔME DE FRANÇAIS PROFESSIONNEL AFFAIRES B2', period: '03/2022', school: '', location: 'Schweiz', current: false },
            { title: 'Informatiker EFZ', period: '08/2014 — 08/2019', school: 'Kantonsschule Büelrain', location: 'Winterthur', current: false },
            { title: 'First Certificate in English (FCE)', period: '06/2018', school: '', location: 'Zürich', current: false },
          ].map((edu, idx) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-[2.15rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-orange-300/60 bg-[#0f1117]">
                {edu.current && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
              </span>
              <div className="rounded-2xl border border-orange-100/15 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="font-medium text-[#fff4e8]">{edu.title}</div>
                  <div className="text-right text-xs text-orange-100/60">
                    <div className={edu.current ? 'font-medium text-emerald-400' : ''}>{edu.period}</div>
                    <div className="mt-0.5 flex items-center justify-end gap-1"><MapPin className="h-3 w-3" />{edu.location}</div>
                  </div>
                </div>
                <div className="mt-1 text-sm text-orange-200/70">{edu.school}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Kenntnisse */}
        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-[#fff4e8]">
                <Code2 className="h-5 w-5 text-orange-300" />
                Software & Sprachen
              </h2>
            </Reveal>
            <div className="grid gap-3">
              {[
                ['TypeScript', 100], ['JavaScript', 100], ['jQuery', 100], ['Angular', 100],
                ['PHP', 100], ['Java', 100], ['JavaFX', 100], ['Java Spring Boot', 90],
                ['Python', 80], ['ExpressJS', 80], ['MySQL', 80], ['Laravel', 80],
                ['Symfony', 60], ['Sulu FMS', 60], ['C#', 40], ['C++', 40],
              ].map(([name, pct], idx) => (
                <SkillBar key={name} name={name} pct={pct} delay={idx * 0.04} />
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-[#fff4e8]">
                <Wrench className="h-5 w-5 text-orange-300" />
                Tools & Design
              </h2>
            </Reveal>
            <div className="grid gap-3">
              {[
                ['VS Code', 100], ['IntelliJ', 100], ['Git', 100], ['Eclipse', 100],
                ['Source Tree', 100], ['Postman / Insomnia', 100], ['Plesk', 100],
                ['XAMPP', 100], ['Adobe Premiere Pro', 100], ['Adobe Photoshop', 100],
                ['Adobe InDesign', 100], ['Lightroom', 100], ['Subversion', 60],
                ['DaVinci Resolve', 50],
              ].map(([name, pct], idx) => (
                <SkillBar key={name} name={name} pct={pct} delay={idx * 0.04} />
              ))}
            </div>
          </div>
        </div>

        {/* Sprachen + Kurse */}
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-[#fff4e8]">
                <MessageCircle className="h-5 w-5 text-orange-300" />
                Sprachen
              </h2>
            </Reveal>
            <div className="grid gap-3">
              {[
                ['Deutsch', 'C2'], ['Thai', 'C1'], ['Englisch', 'B2'], ['Französisch', 'B2'],
              ].map(([lang, level], idx) => (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: idx * 0.07, duration: 0.4 }}
                  className="flex items-center justify-between rounded-2xl border border-orange-100/20 bg-white/5 px-4 py-3"
                >
                  <span className="text-sm text-[#fce5cf]">{lang}</span>
                  <span className="rounded-full border border-orange-300/40 bg-orange-200/10 px-2.5 py-0.5 text-xs text-orange-200">{level}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-[#fff4e8]">
                <Award className="h-5 w-5 text-orange-300" />
                Zertifikate & Kurse
              </h2>
            </Reveal>
            <div className="grid gap-3">
              {[
                { name: 'Laravel', date: '11/2022', issuer: 'Udemy', href: 'https://www.udemy.com/certificate/UC-3d91afae-50db-4837-84c2-14f0f3a8da56/' },
                { name: 'Angular – The Complete Guide', date: '01/2022', issuer: 'Udemy', href: 'https://www.udemy.com/certificate/UC-1cdafc72-8cba-4c74-a036-80d57bb40353/' },
                { name: 'Logo Design Masterclass', date: '06/2020', issuer: 'Udemy', href: 'https://www.udemy.com/certificate/UC-878672ca-240b-4cbe-b2ed-da2f6286b241/' },
                { name: 'Workshop Smovie Basic', date: '04/2020', issuer: 'Smovie Film GmbH', href: 'https://www.smovie.ch/de/' },
              ].map((cert, idx) => (
                <motion.a
                  key={cert.name}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: idx * 0.07, duration: 0.4 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center justify-between rounded-2xl border border-orange-100/20 bg-white/5 px-4 py-3 transition hover:border-orange-200/40"
                >
                  <div>
                    <div className="text-sm font-medium text-[#fce5cf]">{cert.name}</div>
                    <div className="mt-0.5 text-xs text-orange-100/55">{cert.issuer} &middot; {cert.date}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-orange-200/50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontakt ── */}
      <section id="kontakt" className="relative mx-auto max-w-6xl px-6 pb-24 pt-10 md:px-10 md:pb-32">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-[2rem] border border-orange-100/30 bg-gradient-to-r from-[#261c1b] via-[#2d1f1b] to-[#3a2319] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.38)] md:p-12"
          >
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-orange-200/75">Kontakt</p>
                <h2 className="text-3xl font-semibold text-[#fff4e8] md:text-5xl">
                  Interessiert? Meld dich gerne.
                </h2>
                <div className="mt-6 grid gap-3">
                  {[
                    { Icon: Mail,         label: 'E-Mail',    value: 'contact@andynope.com', href: 'mailto:contact@andynope.com' },
                    { Icon: Phone,        label: 'Telefon',   value: '+41 76 261 18 97',     href: 'tel:+41762611897' },
                    { Icon: Home,         label: 'Adresse',   value: 'Hulfteggstrasse 36, 8400 Winterthur', href: null },
                    { Icon: CalendarDays, label: 'Geburtstag',value: '1. August 1997',        href: null },
                  ].map(({ Icon, label, value, href }) => {
                    const Tag = href ? 'a' : 'div'
                    const props = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {}
                    return (
                      <Tag key={label} {...props} className={`flex items-center gap-3 rounded-2xl border border-orange-100/20 bg-black/20 px-4 py-3 text-sm${href ? ' transition hover:border-orange-200/40 hover:bg-white/5' : ''}`}>
                        <Icon className="h-4 w-4 shrink-0 text-orange-300" />
                        <span className="text-orange-100/55 w-20 shrink-0">{label}</span>
                        <span className="text-[#fce5cf]">{value}</span>
                      </Tag>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-3 md:col-span-5 md:justify-self-end">
                <a
                  href="https://github.com/AndyNope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-300 to-amber-300 px-6 py-3 text-sm font-semibold text-[#2a170f]"
                >
                  <Link className="h-4 w-4" />
                  GitHub &middot; AndyNope
                </a>
                <a
                  href="https://www.linkedin.com/in/andy-nopparat-bui-65a49b18b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2 text-sm font-medium text-orange-100 border border-orange-100/10 hover:bg-white/6"
                >
                  <Globe className="h-4 w-4 text-orange-200" />
                  LinkedIn &middot; Andy Nopparat Bui
                </a>
                <a
                  href="https://www.instagram.com/andynopparat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-2 text-sm font-medium text-orange-100 border border-orange-100/10 hover:bg-white/6"
                >
                  <Camera className="h-4 w-4 text-orange-200" />
                  Instagram &middot; @andynopparat
                </a>
              </div>
            </div>
          </motion.div>
        </Reveal>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-orange-100/20 pt-6 text-sm text-orange-100/60">
          <span className="inline-flex items-center gap-2">
            <Blocks className="h-4 w-4" />
            Andy (Nopparat) Bui
          </span>
          <span>React &middot; TailwindCSS &middot; Framer Motion &middot; Lucide</span>
        </footer>
      </section>
    </main>
  )
}

export default App
