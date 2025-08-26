'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { getProfileData } from '@/lib/data'
import { ShineBorder } from '../magicui/shine-border'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  const { personal, experience, education } = getProfileData()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <motion.section
      ref={ref}
      id="about"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada e paixão pela tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative rounded-full">
            <ShineBorder borderWidth={3} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <Image
                src={personal.avatar}
                alt={`Foto de ${personal.name}`}
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {personal.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Com mais de dois anos de experiência em tecnologia, me dedico a criar soluções que otimizam processos e resolvem problemas de forma eficiente. Atualmente, sou estudante de <strong>desenvolvimento full-stack</strong> e busco aprimorar minhas habilidades para construir soluções que impactem positivamente o dia a dia das equipes. 
              Sou formado em Análise e <strong>Desenvolvimento de Sistemas</strong> e estou em constante aprendizado. Meu objetivo é me tornar um profissional completo, capaz de enfrentar e superar qualquer desafio técnico que surja.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Experiência</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {experience.map((item) => (
                    <li key={item.title} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Educação</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {education.map((item) => (
                    <li key={item.title} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Ver Currículo Completo
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
