const fs = require('fs');

const classGroups = [
  ...Array.from({ length: 5 }, (_, i) => ({ value: `class-${i + 1}`, subjects: ["Mathematics", "English", "Hindi", "EVS"] })),
  ...Array.from({ length: 3 }, (_, i) => ({ value: `class-${i + 6}`, subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Computer Science"] })),
  ...Array.from({ length: 2 }, (_, i) => ({ value: `class-${i + 9}`, subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Computer Science"] })),
  { value: "class-11-science", subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science"] },
  { value: "class-11-commerce", subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"] },
  { value: "class-11-arts", subjects: ["History", "Geography", "Political Science", "Economics", "English", "Hindi"] },
  { value: "class-12-science", subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Computer Science"] },
  { value: "class-12-commerce", subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"] },
  { value: "class-12-arts", subjects: ["History", "Geography", "Political Science", "Economics", "English", "Hindi"] },
];

const videoMap = {
  "Mathematics": "https://www.youtube.com/embed/t_hssL5j3I4", 
  "Science": "https://www.youtube.com/embed/5D1F6lC4B7E", 
  "Physics": "https://www.youtube.com/embed/lAWEK4v2JcQ",
  "Chemistry": "https://www.youtube.com/embed/0PE3xApmH04",
  "Biology": "https://www.youtube.com/embed/ax0OAqPyyh0",
  "English": "https://www.youtube.com/embed/yqA7vOeb2_M",
  "EVS": "https://www.youtube.com/embed/J7hNgKxRzEY",
  "Social Science": "https://www.youtube.com/embed/B-b4XvuQo1Y",
  "Hindi": "https://www.youtube.com/embed/s29H2Q0yoxs",
  "Computer Science": "https://www.youtube.com/embed/mU6anWqZJcc",
  "Accountancy": "https://www.youtube.com/embed/7Vcwq-m2v8c",
  "Business Studies": "https://www.youtube.com/embed/oK2x729221w",
  "Economics": "https://www.youtube.com/embed/3ez10ADR_gM",
  "History": "https://www.youtube.com/embed/v3P1rEicEis",
  "Geography": "https://www.youtube.com/embed/mKk3o0mE3nQ",
  "Political Science": "https://www.youtube.com/embed/-E4G0w3A5_E"
};

const pdfMap = {
  "default": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
};

const chaptersMap = {
  "Mathematics": ["Number Systems", "Algebra", "Geometry", "Measurement & Data", "Probability"],
  "Science": ["Matter and Materials", "Force and Energy", "Living Organisms", "Earth and Space", "Human Body"],
  "English": ["Reading Comprehension", "Grammar & Vocab", "Creative Writing", "Literature", "Conversation"],
  "Hindi": ["Vyakaran", "Sahitya", "Kavita", "Patra Lekhan", "Nibandh"],
  "EVS": ["Our Environment", "Plants and Animals", "Water and Air", "Health and Hygiene", "Transport"],
  "Social Science": ["History of the World", "Geography", "Civics", "Economics", "Political Systems"],
  "Physics": ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
  "Chemistry": ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Atomic Structure", "Chemical Bonding"],
  "Biology": ["Cell Biology", "Genetics", "Ecology", "Human Physiology", "Plant Physiology"],
  "Computer Science": ["Programming Basics", "Data Structures", "Algorithms", "Web Development", "Databases"],
  "Accountancy": ["Accounting Principles", "Financial Statements", "Partnership Accounts", "Company Accounts", "Analysis of Financial Statements"],
  "Business Studies": ["Nature of Business", "Forms of Business", "Business Environment", "Management", "Marketing"],
  "Economics": ["Microeconomics", "Macroeconomics", "Indian Economic Development", "Statistics for Economics", "Public Finance"],
  "History": ["Ancient India", "Medieval India", "Modern India", "World History", "Historical Themes"],
  "Geography": ["Physical Geography", "Human Geography", "Resources and Development", "Map Work", "Environmental Geography"],
  "Political Science": ["Political Theory", "Indian Constitution", "Global Politics", "Political Institutions", "Public Administration"]
};

let courses = [];
let quizData = {};
let idCounter = 1;

classGroups.forEach((group) => {
  group.subjects.forEach((subject) => {
    const courseId = `c_${idCounter++}`;
    const chapters = chaptersMap[subject] || ["Introduction", "Core Concepts", "Advanced Topics", "Practical Application", "Review"];
    
    let lessonsList = [];
    
    chapters.forEach((chapterName, cIdx) => {
      // 1. Video Lecture
      lessonsList.push({
        id: `${courseId}_l${cIdx*3+1}`,
        title: `Watch: ${chapterName}`,
        duration: "15 min",
        type: "video",
        content: videoMap[subject] || "https://www.youtube.com/embed/J7hNgKxRzEY",
        isCompleted: false
      });
      
      // 2. PDF Reading Material
      lessonsList.push({
        id: `${courseId}_l${cIdx*3+2}`,
        title: `Read: ${chapterName} Notes`,
        duration: "20 min",
        type: "pdf",
        content: pdfMap["default"], 
        isCompleted: false
      });
      
      // 3. Quiz
      const quizId = `${courseId}_q${cIdx+1}`;
      lessonsList.push({
        id: quizId,
        title: `Quiz: ${chapterName}`,
        duration: "10 min",
        type: "quiz",
        content: "quiz",
        isCompleted: false
      });
      
      quizData[quizId] = [
        {
          question: `What is the core principle taught in ${chapterName}?`,
          options: ["Understanding basics", "Memorizing facts", "Practical application", "All of the above"],
          correctAnswer: 3
        },
        {
          question: `Which scenario best applies to ${chapterName}?`,
          options: ["Daily life problem solving", "Writing an essay", "Only for examinations", "Historical analysis"],
          correctAnswer: 0
        },
        {
          question: `How many sub-topics were covered in ${chapterName}?`,
          options: ["3 main sub-topics", "Only 1", "More than 5", "None"],
          correctAnswer: 0
        }
      ];
    });

    courses.push({
      id: courseId,
      title: `${subject} for ${group.value.replace(/-/g, ' ').toUpperCase()}`,
      description: `Comprehensive and detailed ${subject} course specially designed. Covers ${chapters.length} major chapters with video lectures, reading materials, and quizzes.`,
      subject: subject,
      targetClassGroup: group.value,
      level: "Intermediate",
      totalDuration: `${chapters.length * 45} mins`,
      thumbnail: getThumbnailForSubject(subject),
      isFree: true,
      lessons: lessonsList
    });
  });
});

function getThumbnailForSubject(subject) {
  const map = {
    "Mathematics": "📐", "Science": "🔬", "Social Science": "🌍", "English": "📝",
    "Hindi": "📖", "Computer Science": "💻", "EVS": "🌿", "Physics": "⚛️",
    "Chemistry": "🧪", "Biology": "🧬", "Accountancy": "📊", "Business Studies": "💼",
    "Economics": "📉", "History": "🏺", "Geography": "🗺️", "Political Science": "⚖️"
  };
  return map[subject] || "📚";
}

const fileContent = `import type { Course, Badge, UserProgress } from "@/types";

export const courses: Course[] = ${JSON.stringify(courses, null, 2)};

export const quizData: Record<string, { question: string; options: string[]; correctAnswer: number }[]> = ${JSON.stringify(quizData, null, 2)};

export const badges: Badge[] = [
  { id: "first-lesson", name: "First Step", description: "Complete your first lesson", icon: "🌱", earned: false },
  { id: "quiz-master", name: "Quiz Master", description: "Score 100% on any quiz", icon: "🏆", earned: false },
  { id: "streak-3", name: "3-Day Streak", description: "Learn for 3 consecutive days", icon: "🔥", earned: false },
  { id: "course-complete", name: "Course Champion", description: "Complete an entire course", icon: "🎓", earned: false },
  { id: "multi-subject", name: "Explorer", description: "Start courses in 3 different subjects", icon: "🧭", earned: false },
];

export const getStoredProgress = (): UserProgress[] => {
  const stored = localStorage.getItem("vidyapath-progress");
  return stored ? JSON.parse(stored) : [];
};

export const saveProgress = (progress: UserProgress[]) => {
  localStorage.setItem("vidyapath-progress", JSON.stringify(progress));
};

export const getStoredBadges = (): Badge[] => {
  const stored = localStorage.getItem("vidyapath-badges");
  return stored ? JSON.parse(stored) : badges;
};

export const saveBadges = (b: Badge[]) => {
  localStorage.setItem("vidyapath-badges", JSON.stringify(b));
};

export const getStreak = (): number => {
  const stored = localStorage.getItem("vidyapath-streak");
  return stored ? JSON.parse(stored) : 0;
};

export const getXP = (): number => {
  const stored = localStorage.getItem("vidyapath-xp");
  return stored ? JSON.parse(stored) : 0;
};

export const addXP = (amount: number) => {
  const current = getXP();
  localStorage.setItem("vidyapath-xp", JSON.stringify(current + amount));
};

export const updateStreak = () => {
  const lastDate = localStorage.getItem("vidyapath-last-active");
  const today = new Date().toDateString();
  if (lastDate === today) return;
  
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (lastDate === yesterday.toDateString()) {
    const streak = getStreak() + 1;
    localStorage.setItem("vidyapath-streak", JSON.stringify(streak));
  } else if (lastDate !== today) {
    localStorage.setItem("vidyapath-streak", JSON.stringify(1));
  }
  localStorage.setItem("vidyapath-last-active", today);
};
`;

fs.writeFileSync('src/data/courses.ts', fileContent);
console.log('Successfully generated extensive courses for all mapped classes!');
