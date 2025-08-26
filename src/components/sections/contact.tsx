'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "carloseduardo.dev2022@gmail.com",
      href: "mailto:carloseduardo.dev2022@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "",
      href: "tel:000000000",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Duque de Caxias, Rio de janeiro",
      href: "https://maps.app.goo.gl/hVTWAp6Z4xhhDkch9",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/CarlosDev0410",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/carlos-eduardo-souza-dev-jr/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/_cadusouza01",
      label: "Instagram",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="contact"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Entre em Contato
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Sinta-se à vontade para entrar em contato para qualquer projeto ou colaboração.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.href}
              target="_blank"
              className="flex flex-col items-center gap-2 p-6 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-lg">{info.title}</h4>
              <p className="text-muted-foreground text-center text-sm">{info.value}</p>
            </a>
          ))}
        </div>

        <div>
          <h4 className="text-xl font-semibold text-foreground mb-6">
            Me Encontre Online
          </h4>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent transition-colors text-foreground hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
