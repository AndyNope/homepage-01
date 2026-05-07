import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Briefcase,
  Code2,
  Compass,
  Mail,
  MessageSquare,
  Orbit,
  PanelsTopLeft,
  Rocket,
  Sparkles,
} from 'lucide-react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'Atlas Commerce Engine',
    type: 'E-Commerce Platform',
    description:
      'A modular storefront with realtime inventory orchestration and dynamic merchandising for global campaigns.',
    metric: '+43% conversion lift',
    color: 'from-orange-300/20 to-red-500/25',
  },
  {
    title: 'Nexa Ops Cockpit',
    type: 'Data Visualization Suite',
    description:
      'A high-density operations dashboard for large datasets with rapid filtering and live deployment insights.',
    metric: '2.7x faster decisions',
    color: 'from-amber-200/20 to-orange-400/25',
  },
  {
    title: 'Pulse Story Engine',
    type: 'Brand Experience Site',
    description:
      'An editorial web experience blending cinematic layouts, motion storytelling, and conversion-first flows.',
    metric: '68% longer session time',
    color: 'from-yellow-200/20 to-orange-300/30',
  },
]

const skills = [
  'React & TypeScript',
  'Design Systems',
  'Motion & Interaction',
  'WebGL Integration',
  'Performance Engineering',
  'Accessibility First',
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
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-orange-300 via-amber-400 to-red-500"
        style={{ scaleX: scrollYProgress }}
      />

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

      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-10 md:pt-14">
        <nav className="flex items-center justify-between rounded-full border border-white/20 bg-white/5 px-4 py-3 backdrop-blur-xl md:px-6">
          <div className="flex items-center gap-2 text-sm tracking-[0.22em] text-orange-100/90">
            <Orbit className="h-4 w-4" />
            STUDIO VELA
          </div>
          <div className="hidden items-center gap-8 text-sm text-orange-50/80 md:flex">
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <button className="rounded-full border border-orange-100/40 bg-orange-200/10 px-4 py-2 text-xs font-medium tracking-[0.16em] text-orange-50 transition hover:bg-orange-200/20">
            Start Project
          </button>
        </nav>

        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="relative z-10 mt-14 grid items-end gap-10 md:mt-20 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-orange-100/80">
                <Sparkles className="h-3.5 w-3.5" />
                Interactive Portfolio Experience
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-[#fff4e8] sm:text-6xl md:text-7xl">
                Design that moves people,
                <span className="bg-gradient-to-r from-orange-200 via-amber-100 to-orange-400 bg-clip-text text-transparent">
                  {' '}
                  motion that tells your story.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#f2d8be]/85 md:text-lg">
                I craft premium web products for ambitious brands with immersive interactions,
                high-performance architecture, and a visual language that feels unmistakably yours.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-300 to-red-400 px-6 py-3 text-sm font-semibold text-[#20120d] shadow-[0_12px_30px_rgba(255,148,72,0.35)] transition hover:scale-[1.03]"
                >
                  Explore Work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-100/40 bg-white/5 px-6 py-3 text-sm text-orange-50 backdrop-blur-md transition hover:border-orange-200/70"
                >
                  Book a Discovery Call
                  <MessageSquare className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative md:col-span-5">
            <motion.div
              style={{ rotate: ringRotate }}
              className="pointer-events-none absolute -inset-6 rounded-[2rem] border border-dashed border-orange-200/20"
            />
            <Reveal delay={0.2}>
              <div className="rounded-[2rem] border border-orange-100/30 bg-gradient-to-b from-white/15 to-white/5 p-6 backdrop-blur-2xl">
                <div className="mb-5 flex items-center justify-between text-sm text-orange-50/75">
                  <span>Availability</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Open for Q3 projects
                  </span>
                </div>
                <div className="grid gap-4">
                  {[
                    ['12+', 'Years in digital craft'],
                    ['80+', 'Launched experiences'],
                    ['24', 'Global brand partners'],
                  ].map((item) => (
                    <div
                      key={item[0]}
                      className="rounded-2xl border border-orange-100/20 bg-black/20 px-4 py-3"
                    >
                      <div className="text-2xl font-semibold text-orange-100">{item[0]}</div>
                      <div className="text-sm text-orange-50/70">{item[1]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>

      <section id="work" className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-orange-100/80">
            <Briefcase className="h-4 w-4" />
            Selected Projects
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.12}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className={`group h-full rounded-3xl border border-orange-100/20 bg-gradient-to-b ${project.color} p-[1px]`}
              >
                <div className="flex h-full flex-col rounded-3xl bg-[#151926]/90 p-6 backdrop-blur-xl">
                  <div className="mb-4 inline-flex w-fit rounded-full border border-orange-100/25 px-3 py-1 text-xs uppercase tracking-wider text-orange-100/75">
                    {project.type}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#fff1e1]">{project.title}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-[#f4d7bc]/80">{project.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-orange-100/90">{project.metric}</span>
                    <ArrowUpRight className="h-5 w-5 text-orange-100/75 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold text-[#fff4e8] md:text-5xl">
              High-impact interfaces, engineered for speed and memorability.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-[#f2d8be]/80">
              Every project is composed as a narrative system: visual hierarchy, interaction rhythm,
              and technical precision working together from first scroll to final conversion.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-3">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="flex items-center justify-between rounded-2xl border border-orange-100/20 bg-white/5 px-4 py-3"
                >
                  <span className="text-[#fce5cf]">{skill}</span>
                  <BadgeCheck className="h-4 w-4 text-orange-200" />
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <div className="rounded-[2rem] border border-orange-100/25 bg-gradient-to-br from-white/10 to-transparent p-8 backdrop-blur-xl md:p-12">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <h2 className="text-3xl font-semibold text-[#fff4e8] md:text-5xl">Built for brands that refuse average.</h2>
                <p className="mt-5 text-[#f2d8be]/85">
                  I collaborate with founders, agencies, and internal product teams to build portfolio
                  websites and campaign platforms that blend strategic clarity with expressive motion.
                </p>
              </div>
              <div className="grid gap-3 md:col-span-5">
                {[
                  [Compass, 'Strategy-led discovery process'],
                  [PanelsTopLeft, 'Conversion-oriented visual systems'],
                  [Code2, 'Production-ready React architecture'],
                  [Rocket, 'Launch support and performance tuning'],
                ].map(([Icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-orange-100/20 bg-black/20 px-3 py-3 text-sm text-orange-100/90"
                  >
                    <Icon className="h-4 w-4 text-orange-200" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-24 pt-10 md:px-10 md:pb-32">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-[2rem] border border-orange-100/30 bg-gradient-to-r from-[#261c1b] via-[#2d1f1b] to-[#3a2319] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.38)] md:p-12"
          >
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-orange-200/75">Ready to collaborate</p>
                <h2 className="text-3xl font-semibold text-[#fff4e8] md:text-5xl">Let us build your next signature web experience.</h2>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <a
                  href="mailto:hello@studiovela.com"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-300 to-amber-300 px-6 py-3 text-sm font-semibold text-[#2a170f]"
                >
                  <Mail className="h-4 w-4" />
                  hello@studiovela.com
                </a>
              </div>
            </div>
          </motion.div>
        </Reveal>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-orange-100/20 pt-6 text-sm text-orange-100/60">
          <span className="inline-flex items-center gap-2">
            <Blocks className="h-4 w-4" />
            Studio Vela Portfolio
          </span>
          <span>React, TailwindCSS, Framer Motion, Lucide</span>
        </footer>
      </section>
    </main>
  )
}

export default App
