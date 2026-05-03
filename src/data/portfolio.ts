import { Brain, Code, Cpu, Shield, type LucideIcon } from "lucide-react";

export type ContactData = {
  email: string;
  location: string;
  github: string;
  linkedin: string;
  portfolioPdf: string;
};

export type HeaderData = {
  name: string;
  title: string;
  summary: string;
  contact: ContactData;
};

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  items: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  award: string;
  description: string;
  responsibilities: string[];
  tags: string[];
};

export type Education = {
  school: string;
  degree: string;
  gpa: string;
  year: string;
};

export type TestScore = {
  name: string;
  score: string;
  issuer: string;
};

export type PortfolioData = {
  header: HeaderData;
  skills: SkillGroup[];
  projects: Project[];
  education: Education[];
  testScores: TestScore[];
  certifications: string[];
};

export const portfolioData: PortfolioData = {
  header: {
    name: "Supanat Kerdpoca",
    title: "Incoming Robotics & AI Student | Software Developer",
    summary:
      "Incoming Student at the Institute of Field Robotics (FIBO), KMUTT. Passionate and detail-oriented developer with a strong focus on Embedded Systems, IoT, AI Robotics, and iOS Development. Proven track record of building impactful solutions, from AI-driven deepfake detection to assistive technologies for the visually impaired.",
    contact: {
      email: "fuji.fujisupanat@gmail.com",
      location: "Rayong, Thailand",
      github: "github.com/FujiSupanatz",
      linkedin: "https://www.linkedin.com/in/supanat-kerdpoca-715b7929b/",
      portfolioPdf:
        "https://drive.google.com/file/d/1BQEMcpCaIWxzn9IUGKlcNRU5jG2WmUKV/view?usp=drive_link",
    },
  },
  skills: [
    {
      category: "Programming Languages",
      icon: Code,
      items: [
        "Swift (SwiftUI)",
        "TypeScript",
        "Python",
        "C / C++",
        "JavaScript",
        "HTML / CSS",
      ],
    },
    {
      category: "Hardware & IoT",
      icon: Cpu,
      items: [
        "ESP32 / ESP32-CAM",
        "Arduino Uno",
        "Micro:bit",
        "MQTT Protocol",
        "Arduino Cloud",
        "Tinkercad (3D Design)",
      ],
    },
    {
      category: "AI & Data",
      icon: Brain,
      items: [
        "Core ML",
        "Edge Impulse",
        "YOLO (Object Detection)",
        "Image Processing",
        "LLM Integration",
      ],
    },
    {
      category: "Web, Tools & Security",
      icon: Shield,
      items: [
        "Next.js",
        "React",
        "React Native",
        "Git",
        "WSL",
        "Digital Forensics (CTF)",
      ],
    },
  ],
  projects: [
    {
      title: "TrueTone",
      subtitle: "AI-Powered Deepfake Voice Detection System",
      award: "Silver Prize, National Coding & AI Competition (depa)",
      description:
        "Developed an IoT and iOS-based ecosystem to detect and alert users of deepfake caller voices in real-time to prevent scam calls.",
      responsibilities: [
        "Designed and implemented the hardware circuit using ESP32 to capture audio.",
        "Programmed C++ firmware to transmit audio data via MQTT protocol.",
        "Integrated Large Language Models (LLM) for real-time voice analysis.",
        "Developed the iOS companion application using Swift.",
      ],
      tags: ["C++", "Swift", "ESP32", "MQTT", "LLM", "AI"],
    },
    {
      title: "BlinDee",
      subtitle: "Smart Assistive Device for the Visually Impaired",
      award: "2nd Runner-up, Coding War (Coding for Better Life)",
      description:
        "Created a wearable device equipped with computer vision to help visually impaired individuals navigate and interact with their environment.",
      responsibilities: [
        "Engineered the dual-board system utilizing ESP32 and ESP32-CAM.",
        "Implemented image processing algorithms to recognize banknote values and public bus routes.",
        "Integrated ultrasonic sensors for head-level obstacle detection.",
        "Set up real-time notification systems via Line Notify and buzzer alerts.",
      ],
      tags: ["IoT", "ESP32-CAM", "Computer Vision", "Hardware Design"],
    },
    {
      title: "IoT Water Security",
      subtitle: "Real-time Flood Alert & Weather Station",
      award:
        "Gold Medal, International Hackathon Arduino 'Innovate for Water Security'",
      description:
        "Built an automated environmental monitoring system to track water levels and weather conditions to mitigate flood risks.",
      responsibilities: [
        "Led the system architecture design under strict time constraints.",
        "Programmed Arduino Uno R4 WiFi to collect sensor data and visualize it on Arduino Cloud Dashboards.",
      ],
      tags: ["Arduino Uno R4", "IoT", "Cloud Dashboards", "Sensors"],
    },
    {
      title: "iOS Applications: RestEasy & Jelly Math",
      subtitle: "Swift Student Challenge 2023 & 2024",
      award: "Official Submissions",
      description:
        "Developed interactive educational and wellness applications entirely in Swift.",
      responsibilities: [
        "RestEasy: Engineered a sleep-aid app implementing the 4-7-8 breathing technique using AVFoundation for text-to-speech pacing.",
        "Jelly Math: Created a gamified educational app teaching polynomial multiplication using the box method.",
      ],
      tags: ["Swift", "SwiftUI", "AVFoundation", "iOS App Development"],
    },
  ],
  education: [
    {
      school: "King Mongkut's University of Technology Thonburi (KMUTT)",
      degree: "Institute of Field Robotics (FIBO)",
      gpa: "Incoming Student",
      year: "Upcoming",
    },
    {
      school: "Assumption College Rayong",
      degree: "High School Diploma - Science & Engineering Program",
      gpa: "GPAX: 3.43",
      year: "Current",
    },
  ],
  testScores: [
    {
      name: "COMPAS-A1 (Programming)",
      score: "100/100",
      issuer: "Chulalongkorn University Engineering",
    },
    {
      name: "Cambridge English",
      score: "Grade C (CEFR B1)",
      issuer: "Cambridge Assessment",
    },
    {
      name: "CU-TEP",
      score: "57",
      issuer: "Chulalongkorn University",
    },
  ],
  certifications: [
    "2nd Runner-up: OCR Election Document Analysis - Super AI Engineer SS6",
    "Top 20 Ranking (Sleep Stage & House Recognition) - Super AI Engineer SS6",
    "Web Application Development with React Library - Kasetsart University",
    "HackerRank Problem Solving (Basic) Certificate",
    "Cyber Security CTF Participant (Rank 213/518) - Thailand Cyber Top Talent",
    "Excellence Award: Electrical & Communication Engineering Camp - Silpakorn University",
    "Object Detection using YOLO Workshop - Silpakorn University",
    "Python Programming Essentials - Silpakorn University",
    "Arduino & IoT Basics - KMITL x MAKE",
  ],
};
