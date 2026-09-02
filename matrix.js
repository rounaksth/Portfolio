/**
 * portfolio data
 * ---------------------------------------------------------------------
 * All page content lives here, separated from markup and rendering logic.
 * This is intentional: when a backend is added later, each array below
 * can be replaced by the result of a `fetch('/api/...')` call with the
 * same shape, and the render functions in main.js will keep working
 * unchanged. Suggested future endpoints are noted inline.
 * ---------------------------------------------------------------------
 */

const portfolioData = {
  profile: {
    name: "Rounak Pradhan",
    initials: "RP",
    role: "Networking & Cybersecurity Professional",
    tagline: "Networking, Cybersecurity, Cloud & DevOps",
    summary:
      "IT professional with hands-on experience across networking, cybersecurity, cloud platforms, and software development. I enjoy working across the stack — from securing infrastructure and automating deployments to building and testing applications.",
    photo: "rounak.jpeg",
    location: "Imadol, Lalitpur, Nepal",
    email: "rounakpradhan4@gmail.com",
    phone: "+977-9800700980",
    education: "BSc (Hons) Computer Networking and IT Security",
    cvFile: "Rounak Pradhan CV.pdf",
    social: {
      github: "https://github.com/rounaksth",
      linkedin: "https://www.linkedin.com/in/rounak-pradhan-793a02283/",
      email: "mailto:rounakpradhan4@gmail.com",
    },
  },

  // The six domains shown in the hero "topology" strip.
  domains: [
    { label: "Networking", sub: "Routing, switching, protocols" },
    { label: "Cybersecurity", sub: "Pentesting, vulnerability assessment" },
    { label: "Cloud", sub: "AWS, Azure" },
    { label: "DevOps", sub: "CI/CD tooling, containers" },
    { label: "IT Support", sub: "QA, systems, service desk" },
    { label: "Software Development", sub: "Java, Python, SQL, JS" },
  ],

  // GET /api/experience
  experience: [
    {
      role: "Security Analyst Intern",
      org: "Tanvi Tech · IT Company",
      date: "Aug 2024 — Nov 2024",
      points: [
        "Assisted in identifying and mitigating security vulnerabilities in web applications and networks.",
        "Conducted penetration testing and security assessments to strengthen system protection.",
        "Analyzed security incidents and documented findings to improve threat detection.",
        "Used Burp Suite and Wireshark to test and reinforce cybersecurity defenses.",
        "Researched and implemented security best practices to safeguard sensitive data.",
      ],
    },
    {
      role: "Technical Support",
      org: "Dynamic Technosoft · ERP Software Company",
      date: "Apr 2023 — May 2024",
      groups: [
        {
          heading: "Quality Assurance",
          points: [
            "Tested ERP systems, identified bugs, and reported improvements.",
            "Wrote detailed QA reports and validated fixes using SQL.",
            "Collaborated with development teams to maintain system integrity.",
          ],
        },
        {
          heading: "Support Executive",
          points: [
            "Trained clients on ERP usage.",
            "Handled technical support and diagnosed system issues.",
            "Onboarded new customers and improved support processes.",
          ],
        },
      ],
    },
  ],

  // GET /api/skills — grouped by domain for the filterable skills section
  skillCategories: [
    {
      id: "networking",
      label: "Networking",
      icon: "network",
      skills: ["Cisco", "TCP/IP", "DNS", "DHCP", "Firewalls"],
    },
    {
      id: "security",
      label: "Cybersecurity",
      icon: "shield",
      skills: ["Burp Suite", "Wireshark", "Penetration Testing", "Vulnerability Assessment"],
    },
    {
      id: "cloud",
      label: "Cloud",
      icon: "cloud",
      skills: ["AWS", "Azure"],
    },
    {
      id: "devops",
      label: "DevOps & Tools",
      icon: "layers",
      skills: ["Docker", "GitHub", "VS Code", "Trello"],
    },
    {
      id: "development",
      label: "Software Development",
      icon: "code",
      skills: ["Java", "Python", "SQL", "JavaScript"],
    },
    {
      id: "support",
      label: "IT Support & Systems",
      icon: "monitor",
      skills: ["Linux", "Windows", "macOS", "Android", "iOS", "MS Office"],
    },
  ],

  // GET /api/projects
  // `image`  – optional path to a screenshot.
  // `github` – repo link. Falls back to the GitHub profile if empty.
  // `demo`   – live/deployed link. 
  projects: [
    {
      title: "Web Application Penetration Testing Framework",
      category: "security",
      categoryLabel: "Cybersecurity",
      description:
        "A GUI-based tool that automates vulnerability detection in web applications, integrating Nmap, SQLMap, XSStrike, Nuclei, and Subjack. Built with a Tkinter interface, real-time scan results, and export to PDF, CSV, and TXT.",
      stack: ["Python", "Bash", "Nmap", "SQLMap", "Nuclei"],
      image: "webapp.png",
      icon: "shield",
      github: "",
      demo: "",
    },
    {
      title: "SQL Injection Attack Simulation",
      category: "security",
      categoryLabel: "Cybersecurity",
      description:
        "Demonstrated union-based, error-based, and blind SQL injection techniques. Documented detection and prevention methods, and used brute-force techniques to test login security.",
      stack: ["Burp Suite", "PortSwigger Labs"],
      image: "sqli.png",
      icon: "shield",
      github: "",
      demo: "",
    },
    {
      title: "E-commerce Blog Page",
      category: "development",
      categoryLabel: "Software Development",
      description:
        "A responsive blog page for a mock e-commerce site with post creation, editing, and deletion. Focus on layout, interactivity, and cross-device testing.",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "bonsaiblog.png",
      icon: "code",
      github: "",
      demo: "",
    },
  ],

  // GET /api/certifications
  // `url` – link to the credential/verification page. Leave empty and
  // the title renders as plain text instead of a link.
  certifications: [
    {
      issuer: "TryHackMe",
      badge: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tryhackme.svg",
      items: [
        { name: "Pre Security", date: "Aug 2024", url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-RYTHH9OYR3.png" },
        { name: "Introduction to Cyber Security", date: "Aug 2024", url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-7YLJDR26BB.png" },
        { name: "Web Fundamentals", date: "Aug 2024", url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-3VRNWUPL7E.png" },
        { name: "Jr Penetration Tester", date: "Oct 2024", url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ORKYMFVRQ3.png" },
        { name: "CompTIA Pentest+", date: "Nov 2024", url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-JBQ1XZJCXL.png" },
      ],
    },
    {
      issuer: "AWS Academy",
      badge: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      items: [
        { name: "Cloud Foundations", date: "2024", url: "https://www.credly.com/badges/01afb590-03ca-4261-b6d9-492b3e7ae927/public_url" },
        { name: "Cloud Operations", date: "2024", url: "https://www.credly.com/badges/fdcb720a-2b8e-488c-ab18-0e567ec1319a/public_url" },
        { name: "Cloud Security Foundations", date: "2024", url: "https://www.credly.com/badges/ff4fdd79-7315-446e-b250-402e65b6ed19/public_url" },
        { name: "Cloud Security Builder", date: "2024", url: "https://www.credly.com/badges/01e93bcd-1188-44c6-a198-5f954df533cb/public_url" },
        { name: "Data Center Technician", date: "2024", url: "https://www.credly.com/badges/ae57cf5a-a049-4a70-a2dd-ae0924e33243/public_url" },
      ],
    },
  ],
};