import {
  ArrowUpRight,
  Blocks,
  BookOpen,
  Brush,
  Camera,
  Code2,
  Compass,
  Cpu,
  Film,
  Ghost,
  Globe,
  Link,
  Layers,
  MessageSquare,
  PanelsTopLeft,
  Rocket,
  Smartphone,
  TrendingUp,
  Users,
} from 'lucide-react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import andyPhoto from './assets/andy-bui.jpg'

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

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -130])
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.92])
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 270])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 190])

  return (
    <main ref={containerRef} className="relative overflow-x-clip">
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
        <nav className="flex items-center justify-between rounded-full border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-xl md:px-6">
          <div className="flex items-center gap-2 text-sm tracking-[0.22em] text-orange-100/90">
            <Code2 className="h-4 w-4" />
            ANDY BUI
          </div>
          <div className="hidden items-center gap-8 text-sm text-orange-50/80 md:flex">
            <a href="#projekte" className="transition hover:text-white">Projekte</a>
            <a href="#leistungen" className="transition hover:text-white">Leistungen</a>
            <a href="#ueber" className="transition hover:text-white">Uber mich</a>
            <a href="#kontakt" className="transition hover:text-white">Kontakt</a>
          </div>
          <a
            href="#kontakt"
            className="rounded-full border border-orange-100/40 bg-orange-200/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-orange-50 transition hover:bg-orange-200/20"
          >
            Kontakt aufnehmen
          </a>
        </nav>

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
                  className="w-full rounded-[1.5rem] object-cover"
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
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.08}>
              <motion.a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className={`group flex h-full flex-col rounded-3xl border border-orange-100/20 bg-gradient-to-b ${project.color} p-[1px]`}
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
                  <div className="mt-5 flex items-center justify-end">
                    <ArrowUpRight className="h-5 w-5 text-orange-100/75 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8 text-center">
            <a
              href="https://andynope.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-orange-100/30 bg-white/5 px-5 py-2.5 text-sm text-orange-50/80 backdrop-blur-md transition hover:border-orange-200/50 hover:text-white"
            >
              Alle Projekte auf andynope.com
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>

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
              </div>
              <div className="flex flex-col gap-3 md:col-span-5 md:justify-self-end">
                <a
                  href="https://andynope.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-300 to-amber-300 px-6 py-3 text-sm font-semibold text-[#2a170f]"
                >
                  <Globe className="h-4 w-4" />
                  andynope.com
                </a>
                <a
                  href="https://github.com/AndyNope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-100/40 bg-white/5 px-6 py-3 text-sm text-orange-50 backdrop-blur-md transition hover:border-orange-200/70"
                >
                  <Link className="h-4 w-4" />
                  GitHub &middot; AndyNope
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
