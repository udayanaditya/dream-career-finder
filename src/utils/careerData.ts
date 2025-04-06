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
  stream?: string;
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
  },
  {
    id: "physicist",
    title: "Physicist",
    description: "Study the fundamental nature of the universe, from particles to energy, space, and time.",
    education: [
      "PhD in Physics for research positions",
      "Master's degree for many industrial positions",
      "Bachelor's degree for entry-level technical roles"
    ],
    skills: [
      "Advanced mathematics",
      "Research methodology",
      "Data analysis",
      "Problem-solving",
      "Technical writing"
    ],
    workEnvironment: "Laboratories, research institutions, universities, or government facilities",
    salary: "High income potential, especially in specialized research",
    growthOutlook: "Steady growth in research, renewable energy, and technology sectors",
    traits: ["analytical", "technical", "logical", "math", "high_learning"],
    color: "blue",
    icon: "⚛️",
    tags: ["science", "research", "physics", "math"],
    stream: "Science"
  },
  {
    id: "chemist",
    title: "Chemist",
    description: "Study substances at the atomic and molecular level to develop new products or improve existing ones.",
    education: [
      "PhD for research positions",
      "Master's degree for industrial research roles",
      "Bachelor's degree for laboratory positions"
    ],
    skills: [
      "Laboratory techniques",
      "Analysis and testing",
      "Safety protocols",
      "Technical documentation",
      "Problem-solving"
    ],
    workEnvironment: "Laboratories in various industries, research facilities, or academic institutions",
    salary: "Moderate to high, depending on industry and experience",
    growthOutlook: "Steady demand in pharmaceuticals, manufacturing, and environmental fields",
    traits: ["analytical", "technical", "logical", "physical_science"],
    color: "green",
    icon: "🧪",
    tags: ["science", "research", "chemistry", "laboratory"],
    stream: "Science"
  },
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    description: "Study environmental problems and develop solutions to protect the environment and human health.",
    education: [
      "Bachelor's degree in Environmental Science or related field",
      "Master's or PhD for advanced research and leadership positions"
    ],
    skills: [
      "Data collection and analysis",
      "Environmental monitoring",
      "Geographic Information Systems (GIS)",
      "Scientific reporting",
      "Communication"
    ],
    workEnvironment: "Field work, laboratories, offices, or government agencies",
    salary: "Moderate, with higher salaries in the private sector",
    growthOutlook: "Growing field due to increasing environmental concerns and regulations",
    traits: ["analytical", "outdoors", "biology", "physical_science"],
    color: "green",
    icon: "🌎",
    tags: ["science", "environment", "research", "biology"],
    stream: "Science"
  },
  {
    id: "investment-banker",
    title: "Investment Banker",
    description: "Assist organizations in raising capital, managing mergers and acquisitions, and providing financial advice.",
    education: [
      "Bachelor's degree in Finance, Economics, or Business",
      "MBA or Master's in Finance often preferred",
      "Professional certifications like CFA can be beneficial"
    ],
    skills: [
      "Financial modeling",
      "Valuation techniques",
      "Deal negotiation",
      "Client relationship management",
      "Advanced analytical skills"
    ],
    workEnvironment: "Fast-paced corporate settings, often with long hours",
    salary: "Very high income potential, especially with bonuses",
    growthOutlook: "Competitive field with cycles based on economic conditions",
    traits: ["analytical", "economics", "high_income", "management"],
    color: "blue",
    icon: "💹",
    tags: ["finance", "business", "economics", "commerce"],
    stream: "Commerce"
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    description: "Evaluate financial data and market trends to help companies make investment decisions.",
    education: [
      "Bachelor's degree in Finance, Economics, Accounting, or Business",
      "MBA or CFA certification for advanced positions"
    ],
    skills: [
      "Financial modeling",
      "Data analysis",
      "Research skills",
      "Critical thinking",
      "Financial reporting"
    ],
    workEnvironment: "Corporate offices, financial institutions, or consulting firms",
    salary: "Moderate to high, increasing with specialization and experience",
    growthOutlook: "Strong growth as businesses emphasize data-driven financial decisions",
    traits: ["analytical", "economics", "organization", "high_learning"],
    color: "blue",
    icon: "📊",
    tags: ["finance", "business", "economics", "commerce"],
    stream: "Commerce"
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    description: "Develop and implement marketing strategies to promote products, services, or brands.",
    education: [
      "Bachelor's degree in Marketing, Business, or Communications",
      "MBA or marketing certifications for advanced positions"
    ],
    skills: [
      "Strategic planning",
      "Market research",
      "Digital marketing",
      "Brand management",
      "Communication"
    ],
    workEnvironment: "Corporate offices, marketing agencies, or remote work",
    salary: "Moderate to high, with bonuses based on performance",
    growthOutlook: "Growing field with opportunities in digital marketing",
    traits: ["creative", "management", "communication", "balanced"],
    color: "orange",
    icon: "📣",
    tags: ["business", "marketing", "communication", "commerce"],
    stream: "Commerce"
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
    id: "robotics-engineer",
    title: "Robotics Engineer",
    description: "Design, build, and maintain robots and robotic systems for various applications.",
    education: [
      "Bachelor's degree in Robotics, Mechanical Engineering, or Computer Science",
      "Master's degree for specialized roles",
      "Ongoing technical certifications"
    ],
    skills: [
      "Programming",
      "Mechanical design",
      "Electronics",
      "AI and machine learning",
      "Problem-solving"
    ],
    workEnvironment: "Research labs, manufacturing facilities, or technology companies",
    salary: "High income potential, especially in emerging technologies",
    growthOutlook: "Strong growth with increasing automation across industries",
    traits: ["technical", "analytical", "math", "high_learning"],
    color: "blue",
    icon: "🤖",
    tags: ["engineering", "tech", "robotics", "computer_science"],
    stream: "Engineering"
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect computer systems and networks from security breaches and cyber threats.",
    education: [
      "Bachelor's degree in Cybersecurity, Computer Science, or related field",
      "Professional certifications like CISSP, CEH, or CompTIA Security+"
    ],
    skills: [
      "Network security",
      "Threat detection",
      "Security protocols",
      "Vulnerability assessment",
      "Incident response"
    ],
    workEnvironment: "Corporate IT departments, government agencies, or consulting firms",
    salary: "High income potential due to increasing demand",
    growthOutlook: "Excellent growth as cybersecurity becomes more critical",
    traits: ["technical", "analytical", "logical", "security"],
    color: "purple",
    icon: "🔒",
    tags: ["tech", "security", "computer_science", "engineering"],
    stream: "Engineering"
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    description: "Design and implement artificial intelligence and machine learning solutions for complex problems.",
    education: [
      "Master's or PhD in Computer Science, AI, or related field",
      "Bachelor's degree with specialized certifications for entry roles"
    ],
    skills: [
      "Programming (Python, R)",
      "Machine learning algorithms",
      "Neural networks",
      "Data processing",
      "Problem formulation"
    ],
    workEnvironment: "Tech companies, research institutions, or startups",
    salary: "Very high income potential, especially in tech hubs",
    growthOutlook: "Rapid growth as AI adoption increases across industries",
    traits: ["technical", "analytical", "math", "high_learning"],
    color: "purple",
    icon: "🧠",
    tags: ["tech", "ai", "computer_science", "engineering"],
    stream: "Engineering"
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

export const getCareersByIds = (ids: string[]): Career[] => {
  return careers.filter(career => ids.includes(career.id));
};

export const getAllCareers = (): Career[] => {
  return careers;
};

export const getCareerById = (id: string): Career | undefined => {
  return careers.find(career => career.id === id);
};

export const getCareersByStream = (stream: string): Career[] => {
  return careers.filter(career => 
    career.stream?.toLowerCase() === stream.toLowerCase() || 
    career.tags.includes(stream.toLowerCase())
  );
};

export const getAvailableStreams = (): string[] => {
  const streamSet = new Set<string>();
  
  careers.forEach(career => {
    if (career.stream) {
      streamSet.add(career.stream);
    }
  });
  
  return Array.from(streamSet);
};
