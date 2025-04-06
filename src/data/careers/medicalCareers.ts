
import { Career } from '@/types/career';

export const medicalCareers: Career[] = [
  {
    id: "doctor",
    title: "Doctor/Physician",
    description: "Diagnose and treat illnesses, injuries, and other health conditions for patients.",
    education: [
      "Medical degree (MBBS/MD)",
      "Specialization through residency programs",
      "Continuous medical education"
    ],
    skills: [
      "Clinical knowledge",
      "Diagnostic abilities",
      "Communication skills",
      "Empathy and compassion",
      "Decision making under pressure"
    ],
    workEnvironment: "Hospitals, clinics, private practices, or telemedicine",
    salary: "High income potential, especially for specialists",
    growthOutlook: "Stable demand with growth in specialized fields and aging population care",
    traits: ["healthcare", "biology", "high_learning", "interpersonal"],
    color: "green",
    icon: "🩺",
    tags: ["healthcare", "science", "biology"]
  },
  {
    id: "surgeon",
    title: "Surgeon",
    description: "Perform operations to treat injuries, diseases, and deformities.",
    education: [
      "Medical degree (MBBS/MD)",
      "Surgical residency (5-7 years)",
      "Fellowship for specialization",
      "Board certification"
    ],
    skills: [
      "Surgical techniques",
      "Manual dexterity",
      "Clinical judgment",
      "Stress management",
      "Communication"
    ],
    workEnvironment: "Hospitals, surgical centers, or private practices",
    salary: "Very high income, especially for specialized surgeons",
    growthOutlook: "Stable demand with growth in specialized procedures",
    traits: ["healthcare", "technical", "high_learning", "high_income"],
    color: "green",
    icon: "🔪",
    tags: ["healthcare", "medicine", "biology", "high_income"],
    stream: "Medical"
  },
  {
    id: "physiotherapist",
    title: "Physiotherapist",
    description: "Help patients recover physical function and mobility after injury or illness.",
    education: [
      "Bachelor's or Doctorate in Physical Therapy",
      "Clinical internships",
      "State licensure"
    ],
    skills: [
      "Assessment techniques",
      "Treatment planning",
      "Patient education",
      "Manual therapy",
      "Exercise prescription"
    ],
    workEnvironment: "Hospitals, rehabilitation centers, sports facilities, or private practice",
    salary: "Moderate to high, especially with specialization",
    growthOutlook: "Strong growth due to aging population and sports medicine advances",
    traits: ["healthcare", "interpersonal", "moderate_learning", "biology"],
    color: "green",
    icon: "🦵",
    tags: ["healthcare", "rehabilitation", "sports", "biology"],
    stream: "Medical"
  },
  {
    id: "nutritionist",
    title: "Nutritionist/Dietitian",
    description: "Advise clients on food and nutrition and their impact on health.",
    education: [
      "Bachelor's degree in Nutrition, Dietetics, or related field",
      "Master's degree often preferred",
      "Registered Dietitian (RD) certification"
    ],
    skills: [
      "Nutritional assessment",
      "Diet planning",
      "Client counseling",
      "Health education",
      "Scientific knowledge of food and nutrients"
    ],
    workEnvironment: "Hospitals, clinics, community health centers, or private practice",
    salary: "Moderate, with higher potential in specialized areas",
    growthOutlook: "Growing field with increased focus on preventive health",
    traits: ["healthcare", "interpersonal", "biology", "communication"],
    color: "green",
    icon: "🥗",
    tags: ["healthcare", "food", "biology", "wellness"],
    stream: "Medical"
  }
];
