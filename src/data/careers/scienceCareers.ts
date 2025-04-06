
import { Career } from '@/types/career';

export const scienceCareers: Career[] = [
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
  }
];
