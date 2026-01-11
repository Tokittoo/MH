"use client"

import { ExternalLink, Github, Linkedin, Mail, Shield, Code2, Zap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const skills = {
    cybersecurity: [
      "Malware Analysis",
      "Penetration Testing",
      "Exploit Development",
      "Threat Intelligence",
      "Digital Forensics",
    ],
    backend: ["Python", "Node.js", "PHP", "Express.js", "Django"],
    frontend: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
    tools: ["Metasploit", "Burp Suite", "Wireshark", "IDA Pro", "Ghidra"],
  }

  const projects = [
    {
      title: "Python Chat Server with CustomTkinter",
      description: "A professional and feature-rich Python chat server application built with the CustomTkinter framework. This project provides real-time server monitoring, secure messaging, and an intuitive interface to manage connected users. ",
      features: ["Multi-layer Authentication", "2FA Implementation", "PCI DSS Compliance", "Real-time Fraud Detection"],
      tech: ["Python", "CustomTkinter", "PyQt5", "SQLite", "PyQt5"],
      tags: ["Security"],
      link: "https://github.com/SNAassaignment/ChatServerApp"
    },
    {
      title: "Advanced Malware Analysis Toolkit",
      description: "Comprehensive framework with dynamic/static analysis and behavioral detection",
      features: ["Dynamic Analysis Engine", "Static Analysis Module", "Behavioral Detection", "YARA Rule Generation"],
      tech: ["Python", "Ghidra", "Cuckoo Sandbox", "YARA"],
      tags: ["Malware", "Analysis"],
      link: "https://github.com/SNAassaignment/MalwareAnalysisTool"
    },
    {
      title: "Exploit Development Framework",
      description: "Advanced platform with fuzzing modules, ROP chain generation, and mitigation bypass",
      features: ["Fuzzing Modules", "ROP Chain Generator", "Shellcode Development", "Exploit Mitigation Bypass"],
      tech: ["Python", "C++", "Immunity Debugger", "Pwntools"],
      tags: ["Exploit", "Development"],
      link: "https://github.com/SNAassaignment/ExploitDevelopmentFramework"
    },
    {
      title: "System Security Monitor",
      description: "Desktop security tool with real-time activity monitoring and threat response",
      features: ["Real-time Monitoring", "Process Analysis", "Network Inspection", "Automated Response"],
      tech: ["C++", "Qt Framework", "Windows API", "Linux Kernel"],
      tags: ["Desktop", "Security"],
      link: "https://github.com/SNAassaignment/system-monitor"
    },
  ]

  const certifications = [
    "OSCP - Offensive Security Certified Professional",
    "CEH - Certified Ethical Hacker",
    "AWS Certified Developer",
    "Microsoft Certified: Azure Developer Associate",
    "Oracle Certified Professional, Java SE Programmer",
    "THM Top 1% - TryHackMe",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">
            {"<"}MH{"/>"}
          </div>
          <div className="flex gap-6 text-sm items-center">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Shield size={32} />
              <span className="text-lg font-semibold">CYBERSECURITY SPECIALIST</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground leading-tight">Mohamed Hathim</h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              🛡️ Ethical Hacker | 🧠 Cybersecurity Researcher | 💻 Full-Stack Web Developer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about securing digital systems and building secure, scalable web app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary font-semibold rounded hover:bg-primary/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <div className="pt-8">
            <div className="inline-block p-8 border border-border rounded-lg bg-card">
              <p className="text-primary font-mono text-sm">
                <span className="text-muted-foreground">// Security is not an afterthought</span>
              </p>
              <p className="text-primary font-mono text-sm">
                <span className="text-muted-foreground">// It's the foundation of every great application</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">About Me</h2>

          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              I'm a versatile technology professional with expertise spanning cybersecurity research, full-stack web
              development, and desktop application development. I specialize in building secure, scalable solutions
              across multiple platforms while maintaining a security-first approach.
            </p>

            <p className="text-lg leading-relaxed">
              My background includes advanced persistent threat simulation, zero-day research, penetration testing, and
              comprehensive malware analysis. I combine deep technical security knowledge with practical development
              skills to create solutions that are both innovative and protected against emerging threats.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Shield size={20} /> Security Expertise
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Malware Analysis & Development</li>
                  <li>• Exploit Development & Research</li>
                  <li>• Penetration Testing & Red Team Operations</li>
                  <li>• Threat Intelligence & Hunting</li>
                  <li>• Digital Forensics & Incident Response</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Code2 size={20} /> Development Expertise
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full-Stack Web Development</li>
                  <li>• Cross-Platform Desktop Applications</li>
                  <li>• API Development & Design</li>
                  <li>• Performance Optimization</li>
                  <li>• Security-Centric Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Technical Proficiency</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold text-primary capitalize">
                  {category === "cybersecurity"
                    ? "Cybersecurity"
                    : category === "backend"
                      ? "Backend"
                      : category === "frontend"
                        ? "Frontend"
                        : "Security Tools"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-card border border-border text-muted-foreground text-sm rounded hover:border-primary hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <Zap size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground mb-12">
            A curated selection of my most impactful work across cybersecurity, web development, and desktop
            applications
          </p>

          <div className="space-y-8">
            <div>
              <div className="grid gap-6">
                {projects
                  .map((project, idx) => (
                    <a
                      key={idx}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 border border-border rounded-lg bg-card hover:bg-card/50 hover:border-primary transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ExternalLink
                          size={20}
                          className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                        />
                      </div>

                      <p className="text-muted-foreground mb-4">{project.description}</p>

                      <div className="mb-4">
                        <p className="text-xs text-primary font-semibold mb-2">KEY FEATURES:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <span key={feature} className="text-xs text-muted-foreground">
                              • {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs text-primary font-semibold mb-2">TECH STACK:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-primary/5 text-primary/80 rounded border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-border text-center">
            <p className="text-muted-foreground mb-6">Explore more projects and contributions on my GitHub profile</p>
            <a
              href="https://github.com/MH786-coder?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Cybersecurity Specializations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Malware Analysis & Development",
                desc: "Advanced persistent threat (APT) simulation, reverse engineering",
              },
              {
                title: "Exploit Development",
                desc: "Zero-day research, vulnerability analysis, proof-of-concept development",
              },
              {
                title: "Penetration Testing",
                desc: "Web application security, network penetration testing, red team operations",
              },
              {
                title: "Threat Intelligence",
                desc: "Malware analysis, IOC identification, threat hunting",
              },
              {
                title: "Digital Forensics",
                desc: "Incident response, memory analysis, disk forensics",
              },
            ].map((research, idx) => (
              <div key={idx} className="p-6 border border-border rounded-lg bg-card">
                <h3 className="text-lg font-semibold text-primary mb-2">{research.title}</h3>
                <p className="text-muted-foreground">{research.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            Interested in collaborating on cybersecurity research, open-source security tools, or secure applications?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://github.com/MH786-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/mohamed-hathim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-colors"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="mailto:mohamed.hathim@example.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
            >
              <Mail size={20} /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2026 Mohamed Hathim. All rights reserved.</p>
          <p className="mt-2 text-primary font-mono">
            Security is not an afterthought; it's the foundation of every great application.
          </p>
        </div>
      </footer>
    </main>
  )
}
