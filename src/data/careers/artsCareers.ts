
import { Career } from '@/types/career';

export const artsCareers: Career[] = [
  {
    id: "fashion-designer",
    title: "Fashion Designer",
    description: "Create original clothing, accessories, and footwear designs, and oversee their production.",
    education: [
      "Bachelor's degree in Fashion Design or related field",
      "Portfolio development",
      "Internships with established designers or fashion houses"
    ],
    skills: [
      "Creativity and artistic ability",
      "Technical skills (sewing, pattern-making)",
      "Knowledge of textiles and materials",
      "Trend forecasting",
      "Visual communication"
    ],
    workEnvironment: "Design studios, fashion houses, or self-employment",
    salary: "Variable income, with high potential for successful brands/designers",
    growthOutlook: "Competitive field with opportunities in sustainable and digital fashion",
    traits: ["creative", "creative_arts", "studio"],
    color: "orange",
    icon: "👗",
    tags: ["arts", "design", "creative"]
  },
  {
    id: "psychologist",
    title: "Psychologist",
    description: "Study cognitive, emotional, and social processes and behavior by observing, interpreting, and recording how people relate to one another and to their environments.",
    education: [
      "Master's or Doctoral degree in Psychology",
      "Specialization in clinical, counseling, or research psychology",
      "State licensure for clinical practice"
    ],
    skills: [
      "Empathy and active listening",
      "Critical thinking",
      "Communication skills",
      "Research methodology",
      "Ethical awareness"
    ],
    workEnvironment: "Private practices, hospitals, schools, research institutions",
    salary: "Moderate income, varying by specialization and practice setting",
    growthOutlook: "Growing demand due to increased awareness of mental health importance",
    traits: ["interpersonal", "emotional", "high_learning", "communication"],
    color: "pink",
    icon: "🧠",
    tags: ["healthcare", "social_science", "research"]
  },
  {
    id: "journalist",
    title: "Journalist",
    description: "Research, write, and report news stories for print, broadcast, or digital media.",
    education: [
      "Bachelor's degree in Journalism, Communications, or English",
      "Portfolio of published work often more important than formal education"
    ],
    skills: [
      "Research and interviewing",
      "Writing and editing",
      "Critical thinking",
      "Media production",
      "Ethical journalism principles"
    ],
    workEnvironment: "News outlets, field reporting, or remote work",
    salary: "Moderate, varies by medium and location",
    growthOutlook: "Challenging traditional market but growing in digital media",
    traits: ["communication", "creative", "interpersonal", "emotional"],
    color: "pink",
    icon: "📝",
    tags: ["arts", "media", "writing", "communication"],
    stream: "Arts"
  },
  {
    id: "lawyer",
    title: "Lawyer/Advocate",
    description: "Provide legal advice and representation to individuals, businesses, or government agencies.",
    education: [
      "Bachelor's degree followed by Law degree (JD/LLB)",
      "Bar exam certification",
      "Continuing legal education"
    ],
    skills: [
      "Legal research and analysis",
      "Negotiation",
      "Oral and written communication",
      "Critical thinking",
      "Client management"
    ],
    workEnvironment: "Law firms, corporate legal departments, government agencies, or private practice",
    salary: "High income potential, especially in corporate law or specialized practices",
    growthOutlook: "Stable demand despite technology changes",
    traits: ["logical", "communication", "analytical", "high_learning"],
    color: "blue",
    icon: "⚖️",
    tags: ["law", "arts", "social_science", "high_income"],
    stream: "Arts"
  },
  {
    id: "curator",
    title: "Curator",
    description: "Acquire, care for, and display collections in museums, galleries, or cultural institutions.",
    education: [
      "Master's degree in Art History, Museum Studies, or related field",
      "PhD for larger institutions",
      "Specialized knowledge in a particular collection area"
    ],
    skills: [
      "Collection management",
      "Research expertise",
      "Exhibition planning",
      "Conservation knowledge",
      "Communication"
    ],
    workEnvironment: "Museums, galleries, cultural institutions, or universities",
    salary: "Moderate, often in nonprofit settings",
    growthOutlook: "Limited growth with competition for positions",
    traits: ["creative", "creative_arts", "organization", "communication"],
    color: "pink",
    icon: "🖼️",
    tags: ["arts", "culture", "history", "creative"],
    stream: "Arts"
  },
  {
    id: "civil-servant",
    title: "Civil Servant",
    description: "Work in government departments and agencies to implement policies and provide public services.",
    education: [
      "Bachelor's degree (various fields)",
      "Passing civil service examinations",
      "Specialized training for specific roles"
    ],
    skills: [
      "Administrative capabilities",
      "Policy understanding",
      "Public service orientation",
      "Ethical conduct",
      "Communication"
    ],
    workEnvironment: "Government offices at local, state, or national levels",
    salary: "Moderate income with excellent benefits and job security",
    growthOutlook: "Stable demand with opportunities based on government priorities",
    traits: ["security", "organization", "management", "interpersonal"],
    color: "green",
    icon: "🏛️",
    tags: ["government", "administration", "public_service"]
  }
];
