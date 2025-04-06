
export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
    value: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What grade/class are you currently studying?",
    options: [
      { id: "1a", text: "9th - 10th grade", value: "secondary" },
      { id: "1b", text: "11th - 12th grade", value: "higher_secondary" },
      { id: "1c", text: "Undergraduate", value: "undergraduate" },
      { id: "1d", text: "Graduate or above", value: "graduate" }
    ]
  },
  {
    id: 2,
    question: "Which stream are you planning to pursue or are currently studying?",
    options: [
      { id: "2a", text: "Science", value: "science" },
      { id: "2b", text: "Commerce", value: "commerce" },
      { id: "2c", text: "Arts/Humanities", value: "arts" },
      { id: "2d", text: "Not decided yet", value: "undecided" }
    ]
  },
  {
    id: 3,
    question: "Which subject do you enjoy the most?",
    options: [
      { id: "3a", text: "Mathematics", value: "math" },
      { id: "3b", text: "Physics/Chemistry", value: "physical_science" },
      { id: "3c", text: "Biology", value: "biology" },
      { id: "3d", text: "Computer Science", value: "computer_science" },
      { id: "3e", text: "Economics/Business Studies", value: "economics" },
      { id: "3f", text: "Literature/Languages", value: "literature" },
      { id: "3g", text: "History/Geography", value: "social_science" },
      { id: "3h", text: "Art/Music/Design", value: "creative_arts" }
    ]
  },
  {
    id: 4,
    question: "What is your preferred working environment?",
    options: [
      { id: "4a", text: "Office environment", value: "office" },
      { id: "4b", text: "Laboratory/Research setting", value: "lab" },
      { id: "4c", text: "Outdoors/Field work", value: "outdoors" },
      { id: "4d", text: "Creative studio", value: "studio" },
      { id: "4e", text: "Classroom/Educational setting", value: "classroom" },
      { id: "4f", text: "Hospital/Healthcare facility", value: "healthcare" },
      { id: "4g", text: "Remote/Work from home", value: "remote" }
    ]
  },
  {
    id: 5,
    question: "Which type of tasks do you prefer?",
    options: [
      { id: "5a", text: "Creative work (design, writing, etc.)", value: "creative" },
      { id: "5b", text: "Technical work (coding, engineering, etc.)", value: "technical" },
      { id: "5c", text: "Management and coordination", value: "management" },
      { id: "5d", text: "Analysis and problem solving", value: "analytical" },
      { id: "5e", text: "Working with and helping people", value: "interpersonal" }
    ]
  },
  {
    id: 6,
    question: "Are you more interested in job security or entrepreneurship?",
    options: [
      { id: "6a", text: "Job security and stability", value: "security" },
      { id: "6b", text: "Entrepreneurship and business ownership", value: "entrepreneurship" },
      { id: "6c", text: "Balanced approach with some stability and some risk", value: "balanced" }
    ]
  },
  {
    id: 7,
    question: "Are you comfortable with research and continuous learning?",
    options: [
      { id: "7a", text: "Yes, I enjoy learning new things constantly", value: "high_learning" },
      { id: "7b", text: "Somewhat, I prefer a mix of learning and applying existing knowledge", value: "moderate_learning" },
      { id: "7c", text: "No, I prefer to master a specific skill set and apply it", value: "low_learning" }
    ]
  },
  {
    id: 8,
    question: "What is your expected income level or lifestyle goal?",
    options: [
      { id: "8a", text: "High income potential is very important to me", value: "high_income" },
      { id: "8b", text: "Moderate income with good work-life balance", value: "balance" },
      { id: "8c", text: "Fulfilling work matters more than income level", value: "fulfillment" }
    ]
  },
  {
    id: 9,
    question: "Which of the following skills do you excel at?",
    options: [
      { id: "9a", text: "Communication and interpersonal skills", value: "communication" },
      { id: "9b", text: "Analytical thinking and problem solving", value: "analytical" },
      { id: "9c", text: "Creativity and innovation", value: "creativity" },
      { id: "9d", text: "Leadership and decision making", value: "leadership" },
      { id: "9e", text: "Technical skills and precision", value: "technical" },
      { id: "9f", text: "Organization and attention to detail", value: "organization" }
    ]
  },
  {
    id: 10,
    question: "How do you prefer to make decisions?",
    options: [
      { id: "10a", text: "Based on facts, data and logic", value: "logical" },
      { id: "10b", text: "Based on feelings, values and impact on people", value: "emotional" },
      { id: "10c", text: "Based on creativity and innovation", value: "creative" },
      { id: "10d", text: "Based on experience and practical considerations", value: "practical" }
    ]
  }
];
