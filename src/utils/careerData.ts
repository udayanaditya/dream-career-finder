
export interface Career {
  id: string;
  title: string;
  description: string;
  education: string[];
  skills: string[];
  workEnvironment: string;
  salary: string;
  growthOutlook: string;
  traits: string[];
  color: string;
  icon: string;
  tags: string[];
}

export const careers: Career[] = [
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Design, build, and maintain software applications, websites, or mobile apps for various industries.",
    education: [
      "Bachelor's degree in Computer Science, Software Engineering, or related field",
      "Coding bootcamps or self-taught paths are also viable",
      "Certifications in specific technologies can be beneficial"
    ],
    skills: [
      "Programming languages (JavaScript, Python, Java, etc.)",
      "Problem-solving and logical thinking",
      "Teamwork and collaboration",
      "Continuous learning",
      "Attention to detail"
    ],
    workEnvironment: "Office or remote work environments, often with flexible hours",
    salary: "High income potential, especially with experience and specialization",
    growthOutlook: "Excellent growth prospects due to increasing digitalization across all industries",
    traits: ["technical", "analytical", "logical", "high_learning"],
    color: "purple",
    icon: "💻",
    tags: ["tech", "coding", "computer_science"]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help organizations make better decisions.",
    education: [
      "Master's or PhD in Data Science, Statistics, Computer Science, or related field",
      "Bachelor's degree with specialized certifications can be sufficient for entry-level positions"
    ],
    skills: [
      "Statistical analysis and computing",
      "Machine learning",
      "Programming (Python, R)",
      "Data visualization",
      "Business understanding"
    ],
    workEnvironment: "Corporate offices, research institutions, or remote work",
    salary: "High income potential, especially in finance and tech industries",
    growthOutlook: "Strong growth as organizations increasingly rely on data-driven decision making",
    traits: ["analytical", "technical", "logical", "math", "high_learning"],
    color: "blue",
    icon: "📊",
    tags: ["tech", "math", "statistics", "computer_science"]
  },
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
    id: "chartered-accountant",
    title: "Chartered Accountant",
    description: "Provide financial advice, audit accounts, and provide trustworthy information about financial records.",
    education: [
      "Bachelor's degree in Accounting, Finance, or related field",
      "Professional certification (CA, CPA)",
      "Continuing professional education"
    ],
    skills: [
      "Financial analysis",
      "Attention to detail",
      "Integrity and ethics",
      "Communication skills",
      "Business acumen"
    ],
    workEnvironment: "Accounting firms, corporate offices, or self-employment",
    salary: "Moderate to high income potential, increasing with experience and specialization",
    growthOutlook: "Stable demand with opportunities in specialized areas like forensic accounting",
    traits: ["analytical", "organization", "economics", "security"],
    color: "blue",
    icon: "📈",
    tags: ["finance", "commerce", "business", "economics"]
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
    id: "architect",
    title: "Architect",
    description: "Design buildings and structures, considering aesthetics, functionality, safety, and client needs.",
    education: [
      "Bachelor's or Master's degree in Architecture",
      "Professional licensure",
      "Internship under licensed architects"
    ],
    skills: [
      "Design and drafting",
      "3D visualization",
      "Technical knowledge of building codes",
      "Project management",
      "Client communication"
    ],
    workEnvironment: "Architecture firms, government agencies, or self-employment",
    salary: "Moderate to high income potential, especially for established architects",
    growthOutlook: "Steady demand with fluctuations based on construction industry trends",
    traits: ["creative", "technical", "math", "organization"],
    color: "blue",
    icon: "🏛️",
    tags: ["design", "engineering", "creative", "technical"]
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
  },
  {
    id: "mechanical-engineer",
    title: "Mechanical Engineer",
    description: "Design, develop, build, and test mechanical devices, including tools, engines, and machines.",
    education: [
      "Bachelor's degree in Mechanical Engineering",
      "Professional Engineer (PE) license for certain positions",
      "Advanced degrees for research and development roles"
    ],
    skills: [
      "Technical knowledge of mechanics",
      "Problem-solving abilities",
      "Computer-aided design (CAD)",
      "Mathematical aptitude",
      "Creativity for innovative solutions"
    ],
    workEnvironment: "Manufacturing plants, research labs, offices, or field work",
    salary: "Moderate to high income potential",
    growthOutlook: "Steady demand with opportunities in renewable energy and automation",
    traits: ["technical", "analytical", "math", "physical_science"],
    color: "blue",
    icon: "⚙️",
    tags: ["engineering", "science", "technical", "manufacturing"]
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    description: "Start and run businesses, taking on financial risks in the hope of profit and driving innovation.",
    education: [
      "No specific degree required, though business education can be helpful",
      "Industry-specific knowledge and continuous self-education",
      "Practical experience often more valuable than formal education"
    ],
    skills: [
      "Business acumen",
      "Risk management",
      "Leadership and vision",
      "Networking and relationship building",
      "Resilience and adaptability"
    ],
    workEnvironment: "Varies widely depending on the business; often involves long hours",
    salary: "Highly variable, from loss to substantial profits",
    growthOutlook: "Always opportunities for innovative business ideas and solutions",
    traits: ["entrepreneurship", "leadership", "creative", "balanced"],
    color: "orange",
    icon: "💼",
    tags: ["business", "innovation", "leadership"]
  }
];

// Function to get a limited set of careers by IDs
export const getCareersByIds = (ids: string[]): Career[] => {
  return careers.filter(career => ids.includes(career.id));
};

// Function to get all careers
export const getAllCareers = (): Career[] => {
  return careers;
};

// Function to get a single career by ID
export const getCareerById = (id: string): Career | undefined => {
  return careers.find(career => career.id === id);
};
