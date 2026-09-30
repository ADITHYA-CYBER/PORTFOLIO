export const portfolioData = {
  brand: 'GARIKA.SEC',
  name: 'Adithya Garika',
  eyebrow: 'OFFENSIVE SECURITY / VAPT',
  role: 'Offensive Security | Penetration Tester — Web, API, Infra & Mobile Application',
  heading:
  'Passionate about Finding and Exploiting Security Vulnerabilities to Build More Secure Systems.',
  summary:
    'Entry-level cybersecurity professional with hands-on experience in vulnerability assessment and penetration testing in Web Applications, APIs, Infrastrcture & Mobile Applications. Skilled in security testing using Burp Suite, Nmap, Metasploit, Nessus, with practical knowledge of identifying, validating and documenting security vulnerabilities. Seeking a VAPT/Penetration Tester where i can apply my offensive security skills,  strengthen my testing expertise and contribute to identifying and remediating security weaknesses.',
  contact: {
    tryhackme: 'https://tryhackme.com/p/Adithya430', 
    email: 'garikaadithya@gmail.com',
    linkedin: 'https://www.linkedin.com/in/adithya-garika-4a7978355/',
    github: 'https://github.com/ADITHYA-CYBER',
 
  },
  skills: [
        { title: 'Security Assessment', items: ['Vulnerability Assessment','Web Application Pentesting','API Pentesting','Infra Pentesting','Mobile Application Pentesting'] },

    { title: 'Security Tools', items: ['Burp Suite','Nmap','Nessus','Metasploit','SQLmap','Postman','MobSF','Jadx','Frida','Wireshark'] },
    { title: 'Operating Systems', items: ['Windows','Kali Linux','Parrot OS'] },

    { title: 'Web Technologies', items: ['HTML','CSS','JavaScript'] },
         { title: 'Reporting', items: ['Vulnerability Reporting','Technical Documentation','Security Finding Communication'] },
   
  ],
  experience: [
    {
      date: 'Oct 2025 – Apr 2026',
      role: 'VAPT Intern',
      org: 'CyberXchange Pvt Ltd.',
      bullets: [
        'Performed web application vulnerability assessment and penetration testing on lab and simulated real-world targets.',
        'Identified and validated vulnerabilities including Broken Access Control, SQL Injection, Cross-Site Scripting (XSS), and authentication/authorization weaknesses.',
        'Conducted network reconnaissance and service enumeration using Nmap; performed security testing using Burp Suite and Metasploit.',
        'Prepared vulnerability assessment reports documenting details, risk, impact and remediation recommendations.'
      ]
    },
    {
      date: 'May 2025 – Jul 2025',
      role: 'Cybersecurity Analyst Intern',
      org: 'Texial Innovations Pvt Ltd.',
      bullets: [
        'Conducted vulnerability assessments and penetration testing on web applications and networks using Nmap, Burp Suite, and Metasploit.',
        'Performed reconnaissance, port/service enumeration and vulnerability identification during security assessments.',
        'Documented security findings with impact, risk and remediation recommendations, following OWASP Top 10 guidelines.'
      ]
    }
  ],
  methodology: [
    {
    title: "Web Application Penetration Testing",
    icon: "web",

  

    sections: [
      {
        number: "01",
        title: "Scope & Planning",
        points: [
          "Understand the application and scope",
          "Identify test accounts and user roles",
          "Define testing rules and limitations"
        ]
      },

      {
        number: "02",
        title: "Reconnaissance",
        points: [
          "Discover domains and subdomains",
          "Identify technologies and web servers",
          "Find public and hidden endpoints",
          "Collect application information"
        ]
      },

      {
        number: "03",
        title: "Attack Surface Mapping",
        points: [
          "Crawl the application",
          "Identify pages, parameters and APIs",
          "Map user roles and important functions",
          "Identify sensitive functionality"
        ]
      },

      {
        number: "04",
        title: "Authentication Testing",
        points: [
          "Test login and registration",
          "Test password reset and MFA",
          "Check session management",
          "Test authentication bypass"
        ]
      },

      {
        number: "05",
        title: "Authorization Testing",
        points: [
          "Test IDOR / BOLA",
          "Test horizontal and vertical access",
          "Check role-based access controls",
          "Test restricted functions"
        ]
      },

      {
        number: "06",
        title: "Vulnerability Testing",
        points: [
          "SQL Injection",
          "XSS",
          "SSRF",
          "SSTI",
          "XXE",
          "Command Injection",
          "File Upload",
          "Path Traversal",
          "CSRF",
          "Open Redirect",
          "CORS",
          "Security Misconfigurations"
        ]
      },

      {
        number: "07",
        title: "Business Logic Testing",
        points: [
          "Test application workflows",
          "Check price and parameter manipulation",
          "Test race conditions",
          "Look for workflow bypasses",
          "Test abuse of business functions"
        ]
      },

      {
        number: "08",
        title: "API & Backend Testing",
        points: [
          "Identify API endpoints",
          "Test parameters and HTTP methods",
          "Test API authorization",
          "Test tokens and sessions",
          "Test GraphQL where applicable"
        ]
      },

      {
        number: "09",
        title: "Vulnerability Validation",
        points: [
          "Reproduce the issue",
          "Confirm the root cause",
          "Verify the real impact",
          "Capture clear evidence",
          "Remove false positives"
        ]
      },

      {
        number: "10",
        title: "Reporting",
        points: [
          "Description",
          "Affected endpoint",
          "Steps to reproduce",
          "Evidence / PoC",
          "Impact",
          "Severity",
          "Remediation"
        ]
      },

      {
        number: "11",
        title: "Remediation & Retesting",
        points: [
          "Review the developer fix",
          "Re-test the original vulnerability",
          "Try basic bypass techniques",
          "Check for regression",
          "Update the final status"
        ]
      }
    ]
  },
  {
  title: "API Penetration Testing",
  icon: "api",

  sections: [
    {
      number: "01",
      title: "Scope & Planning",
      points: [
        "Understand API scope and environment",
        "Identify API versions and documentation",
        "Get required test accounts and roles",
        "Define testing rules and limitations"
      ]
    },

    {
      number: "02",
      title: "API Reconnaissance",
      points: [
        "Discover API endpoints",
        "Review Swagger / OpenAPI documentation",
        "Find undocumented endpoints",
        "Identify API versions and technologies",
        "Analyze requests and responses"
      ]
    },

    {
      number: "03",
      title: "API Mapping",
      points: [
        "Map endpoints, methods and parameters",
        "Identify authentication requirements",
        "Identify sensitive functions",
        "Map user roles and access levels",
        "Build an API attack-surface map"
      ]
    },

    {
      number: "04",
      title: "Authentication Testing",
      points: [
        "Test login and token generation",
        "Test JWT / OAuth implementation",
        "Test token expiration",
        "Test token reuse",
        "Test authentication bypass",
        "Test session handling"
      ]
    },

    {
      number: "05",
      title: "Authorization Testing",
      points: [
        "Test BOLA / IDOR",
        "Test horizontal access",
        "Test vertical access",
        "Test role-based access",
        "Check access to restricted endpoints"
      ]
    },

    {
      number: "06",
      title: "Input & Parameter Testing",
      points: [
        "Test parameter manipulation",
        "Test SQL / NoSQL Injection",
        "Test command injection",
        "Test mass assignment",
        "Test type and format validation",
        "Test unexpected parameters"
      ]
    },

    {
      number: "07",
      title: "API Security Testing",
      points: [
        "Rate limiting",
        "CORS",
        "HTTP method testing",
        "Excessive data exposure",
        "Error handling",
        "Security misconfiguration",
        "Sensitive data exposure",
        "API versioning issues"
      ]
    },

    {
      number: "08",
      title: "Business Logic Testing",
      points: [
        "Test workflow manipulation",
        "Test parameter tampering",
        "Test transaction logic",
        "Test race conditions",
        "Test privilege and function abuse"
      ]
    },

    {
      number: "09",
      title: "GraphQL Testing",
      points: [
        "Identify GraphQL endpoints",
        "Test queries and mutations",
        "Check introspection",
        "Test authorization",
        "Test excessive data access",
        "Test query depth and complexity",
        "Test GraphQL-specific injection issues"
      ]
    },

    {
      number: "10",
      title: "Vulnerability Validation",
      points: [
        "Reproduce the vulnerability",
        "Confirm the root cause",
        "Verify real impact",
        "Capture request and response evidence",
        "Remove false positives"
      ]
    },

    {
      number: "11",
      title: "Reporting",
      points: [
        "Description",
        "Affected endpoint",
        "Request / Response",
        "Steps to reproduce",
        "Evidence / PoC",
        "Impact",
        "Severity",
        "Remediation"
      ]
    },

    {
      number: "12",
      title: "Retesting",
      points: [
        "Verify the developer fix",
        "Re-test the original request",
        "Try basic bypass techniques",
        "Check for regression",
        "Update vulnerability status"
      ]
    }
  ]
},
 

{
  title: "Infrastructure Penetration Testing",
  icon: "network",

  sections: [
    {
      number: "01",
      title: "Scope & Planning",
      points: [
        "Understand network scope and IP ranges",
        "Identify internal and external targets",
        "Define testing rules and limitations",
        "Understand available test credentials"
      ]
    },

    {
      number: "02",
      title: "Reconnaissance",
      points: [
        "Identify live hosts",
        "Discover IP addresses and network ranges",
        "Identify exposed services",
        "Perform DNS and network enumeration"
      ]
    },

    {
      number: "03",
      title: "Port & Service Enumeration",
      points: [
        "Scan open ports",
        "Identify running services",
        "Identify service versions",
        "Detect operating systems",
        "Enumerate service configurations"
      ]
    },

    {
      number: "04",
      title: "Vulnerability Assessment",
      points: [
        "Identify known vulnerabilities",
        "Check outdated services",
        "Review insecure configurations",
        "Check exposed management services",
        "Validate scanner findings manually"
      ]
    },

    {
      number: "05",
      title: "Exploitation",
      points: [
        "Safely validate confirmed vulnerabilities",
        "Exploit vulnerable services where authorized",
        "Obtain controlled access",
        "Document the attack path and impact"
      ]
    },

    {
      number: "06",
      title: "Privilege Escalation",
      points: [
        "Identify local misconfigurations",
        "Check weak permissions",
        "Review running services",
        "Check credential and configuration exposure",
        "Attempt privilege escalation"
      ]
    },

    {
      number: "07",
      title: "Credential & Access Testing",
      points: [
        "Test weak credentials",
        "Check exposed passwords and secrets",
        "Test password policies",
        "Review authentication controls",
        "Validate unauthorized access paths"
      ]
    },

    {
      number: "08",
      title: "Lateral Movement",
      points: [
        "Identify reachable systems",
        "Test trust relationships",
        "Check shared resources",
        "Validate access between systems",
        "Document possible attack paths"
      ]
    },

    {
      number: "09",
      title: "Security Configuration Review",
      points: [
        "Firewall rules",
        "Remote access services",
        "SMB / FTP / SSH / RDP",
        "Unnecessary services",
        "Network segmentation",
        "Default or insecure configurations"
      ]
    },

    {
      number: "10",
      title: "Vulnerability Validation",
      points: [
        "Reproduce the issue",
        "Confirm the root cause",
        "Verify real impact",
        "Capture evidence",
        "Remove false positives"
      ]
    },

    {
      number: "11",
      title: "Reporting",
      points: [
        "Description",
        "Affected host / service",
        "Steps to reproduce",
        "Evidence / PoC",
        "Impact",
        "Severity",
        "Remediation"
      ]
    },

    {
      number: "12",
      title: "Retesting",
      points: [
        "Verify the remediation",
        "Re-test the original vulnerability",
        "Check for alternative attack paths",
        "Check for regression",
        "Update vulnerability status"
      ]
    }
  ]
},



 {
  title: "Mobile Application Penetration Testing",
  icon: "mobile",    

  sections: [
    {
      number: "01",
      title: "Scope & Planning",
      points: [
        "Understand application scope",
        "Identify Android / iOS versions",
        "Define test devices and environments",
        "Get test accounts and roles",
        "Define testing limitations"
      ]
    },

    {
      number: "02",
      title: "Application Reconnaissance",
      points: [
        "Identify application components",
        "Review application permissions",
        "Identify exposed activities and services",
        "Understand application functionality",
        "Map backend APIs and endpoints"
      ]
    },

    {
      number: "03",
      title: "Static Analysis",
      points: [
        "Analyze APK / IPA",
        "Review application code and configuration",
        "Check permissions",
        "Search for hardcoded secrets",
        "Review exported components",
        "Identify insecure libraries and dependencies"
      ]
    },

    {
      number: "04",
      title: "Dynamic Analysis",
      points: [
        "Run the application in a test environment",
        "Monitor application behavior",
        "Inspect runtime data",
        "Test application components",
        "Analyze security controls at runtime"
      ]
    },

    {
      number: "05",
      title: "Authentication & Authorization",
      points: [
        "Test login and registration",
        "Test session management",
        "Test token handling",
        "Test authentication bypass",
        "Test user-role access controls"
      ]
    },

    {
      number: "06",
      title: "Local Data Storage",
      points: [
        "Check sensitive data stored on the device",
        "Test databases and local files",
        "Check SharedPreferences / Keychain",
        "Check logs and cached data",
        "Check sensitive information in backups"
      ]
    },

    {
      number: "07",
      title: "Network Security",
      points: [
        "Analyze application traffic",
        "Test TLS configuration",
        "Check certificate validation",
        "Test certificate pinning",
        "Identify sensitive data sent over insecure channels"
      ]
    },

    {
      number: "08",
      title: "Application Security Testing",
      points: [
        "Test deep links",
        "Test exported components",
        "Test WebViews",
        "Test insecure IPC",
        "Test input validation",
        "Check clipboard and screenshot exposure"
      ]
    },

    {
      number: "09",
      title: "API & Backend Testing",
      points: [
        "Identify mobile API endpoints",
        "Test API authentication",
        "Test authorization",
        "Test parameter manipulation",
        "Test sensitive data exposure",
        "Test API business logic"
      ]
    },

    {
      number: "10",
      title: "Reverse Engineering",
      points: [
        "Analyze application logic",
        "Review security controls",
        "Identify secrets and sensitive functionality",
        "Test basic anti-tampering and anti-debugging controls"
      ]
    },

    {
      number: "11",
      title: "Vulnerability Validation",
      points: [
        "Reproduce the vulnerability",
        "Confirm the root cause",
        "Verify real impact",
        "Capture evidence",
        "Remove false positives"
      ]
    },

    {
      number: "12",
      title: "Reporting & Retesting",
      points: [
        "Document affected component and vulnerability",
        "Provide PoC and evidence",
        "Explain impact and remediation",
        "Verify developer fixes",
        "Re-test and update vulnerability status"
      ]
    }
  ]
}
],
  projects: [
    {
      date: 'MAY – JUL 2025',
      title: 'Metasploit2 — Infrastructure Pentesting',
      link: "https://drive.google.com/file/d/1OLbIrCE87sbStPBQ1iGsI9scH6xtlPx2/view",
      description: 'Performed hands-on exploitation of known vulnerabilities in the Metasploit2 virtual machine to gain root access. Conducted network reconnaissance using Nmap to identify live hosts, open ports and running services, performed vulnerability scanning to identify exploitable services, and exploited the VSFTPD backdoor vulnerability to gain remote access. Used Meterpreter for post-exploitation activities including privilege escalation and system enumeration.',
      tools: ['Nmap','Metasploit','Meterpreter','VSFTPD Exploit']
    },
    {
      date: 'JAN – APR 2025',
      title: 'Patch Antenna Performance Optimization (ML)',
      link: "https://drive.google.com/file/d/1QEnxg4hY0NSyBL20NQmfY3ZFwS69fHJc/view",
      description: 'Academic project optimizing patch antenna gain and bandwidth using machine-learning-based predictive parameter tuning. Applied regression and optimization algorithms to fine-tune antenna design parameters, achieving measurable improvements in return loss and efficiency, and prepared technical documentation comparing traditional vs. ML-based tuning.',
      tools: ['Python','Regression','Optimization']
    }
  ],
  certifications: [
    { name: 'Certified Ethical Hacker (CEHv13)', meta: 'Ec-Council - August 2025',link:"https://drive.google.com/file/d/1LvXcVS4vjxlostSRy5kodcji4EP3ahIP/view" },
    { name: 'Texial Information Security Auditor', meta: 'Texial · July 2025',link:"https://drive.google.com/file/d/1XZQshW64rJyjp6rPfZveRGTDmHKJMJY1/view" },
    { name: 'Ethical Hacking & Penetration Testing', meta: 'THS-SEC · December 2025',link:"https://drive.google.com/file/d/1s3eETwyeiF9Dp5s0AjVzTUCDl677ZsRl/view" },
    { name: 'Bug Bounty Hunting & Web Security Testing', meta: 'Udemy · August 2025',link:"https://drive.google.com/file/d/1j9Vhx4CRQfLJHBMqmJ1D-JjSG3JJhVWr/view" },
  ],
  education: [
    { name: 'B.Tech in Electronics & Communication Engineering', meta: 'Geethanjali Institute of Science and Technology, Andhra Pradesh, India — Aggregate 68.3%', date: 'Nov 2021 – Apr 2025' },
    { name: 'Intermediate', meta: 'G.V.R.R Junior College, Andhra Pradesh, India — Aggregate 51.2%', date: 'Jun 2019 – Sep 2021' },
  ],
  labs: [],
};
