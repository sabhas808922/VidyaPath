import type { Course, Badge, UserProgress } from "@/types";

export const courses: Course[] = [
  {
    "id": "c_1",
    "title": "Mathematics for CLASS 1",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-1",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_1_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_1_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_1_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_1_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_1_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_1_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_1_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_1_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_1_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_1_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_1_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_1_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_1_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_1_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_1_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_2",
    "title": "English for CLASS 1",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-1",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_2_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_2_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_2_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_2_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_2_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_2_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_2_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_2_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_2_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_2_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_2_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_2_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_2_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_2_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_2_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_3",
    "title": "Hindi for CLASS 1",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-1",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_3_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_3_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_3_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_3_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_3_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_3_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_3_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_3_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_3_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_3_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_3_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_3_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_3_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_3_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_3_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_4",
    "title": "EVS for CLASS 1",
    "description": "Comprehensive and detailed EVS course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "EVS",
    "targetClassGroup": "class-1",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🌿",
    "isFree": true,
    "lessons": [
      {
        "id": "c_4_l1",
        "title": "Watch: Our Environment",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_4_l2",
        "title": "Read: Our Environment Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_4_q1",
        "title": "Quiz: Our Environment",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_4_l4",
        "title": "Watch: Plants and Animals",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_4_l5",
        "title": "Read: Plants and Animals Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_4_q2",
        "title": "Quiz: Plants and Animals",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_4_l7",
        "title": "Watch: Water and Air",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_4_l8",
        "title": "Read: Water and Air Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_4_q3",
        "title": "Quiz: Water and Air",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_4_l10",
        "title": "Watch: Health and Hygiene",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_4_l11",
        "title": "Read: Health and Hygiene Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_4_q4",
        "title": "Quiz: Health and Hygiene",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_4_l13",
        "title": "Watch: Transport",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_4_l14",
        "title": "Read: Transport Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_4_q5",
        "title": "Quiz: Transport",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_5",
    "title": "Mathematics for CLASS 2",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-2",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_5_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_5_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_5_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_5_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_5_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_5_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_5_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_5_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_5_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_5_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_5_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_5_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_5_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_5_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_5_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_6",
    "title": "English for CLASS 2",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-2",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_6_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_6_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_6_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_6_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_6_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_6_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_6_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_6_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_6_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_6_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_6_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_6_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_6_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_6_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_6_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_7",
    "title": "Hindi for CLASS 2",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-2",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_7_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_7_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_7_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_7_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_7_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_7_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_7_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_7_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_7_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_7_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_7_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_7_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_7_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_7_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_7_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_8",
    "title": "EVS for CLASS 2",
    "description": "Comprehensive and detailed EVS course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "EVS",
    "targetClassGroup": "class-2",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🌿",
    "isFree": true,
    "lessons": [
      {
        "id": "c_8_l1",
        "title": "Watch: Our Environment",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_8_l2",
        "title": "Read: Our Environment Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_8_q1",
        "title": "Quiz: Our Environment",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_8_l4",
        "title": "Watch: Plants and Animals",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_8_l5",
        "title": "Read: Plants and Animals Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_8_q2",
        "title": "Quiz: Plants and Animals",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_8_l7",
        "title": "Watch: Water and Air",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_8_l8",
        "title": "Read: Water and Air Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_8_q3",
        "title": "Quiz: Water and Air",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_8_l10",
        "title": "Watch: Health and Hygiene",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_8_l11",
        "title": "Read: Health and Hygiene Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_8_q4",
        "title": "Quiz: Health and Hygiene",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_8_l13",
        "title": "Watch: Transport",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_8_l14",
        "title": "Read: Transport Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_8_q5",
        "title": "Quiz: Transport",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_9",
    "title": "Mathematics for CLASS 3",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-3",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_9_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_9_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_9_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_9_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_9_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_9_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_9_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_9_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_9_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_9_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_9_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_9_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_9_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_9_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_9_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_10",
    "title": "English for CLASS 3",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-3",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_10_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_10_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_10_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_10_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_10_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_10_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_10_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_10_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_10_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_10_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_10_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_10_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_10_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_10_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_10_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_11",
    "title": "Hindi for CLASS 3",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-3",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_11_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_11_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_11_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_11_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_11_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_11_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_11_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_11_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_11_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_11_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_11_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_11_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_11_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_11_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_11_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_12",
    "title": "EVS for CLASS 3",
    "description": "Comprehensive and detailed EVS course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "EVS",
    "targetClassGroup": "class-3",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🌿",
    "isFree": true,
    "lessons": [
      {
        "id": "c_12_l1",
        "title": "Watch: Our Environment",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_12_l2",
        "title": "Read: Our Environment Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_12_q1",
        "title": "Quiz: Our Environment",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_12_l4",
        "title": "Watch: Plants and Animals",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_12_l5",
        "title": "Read: Plants and Animals Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_12_q2",
        "title": "Quiz: Plants and Animals",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_12_l7",
        "title": "Watch: Water and Air",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_12_l8",
        "title": "Read: Water and Air Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_12_q3",
        "title": "Quiz: Water and Air",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_12_l10",
        "title": "Watch: Health and Hygiene",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_12_l11",
        "title": "Read: Health and Hygiene Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_12_q4",
        "title": "Quiz: Health and Hygiene",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_12_l13",
        "title": "Watch: Transport",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_12_l14",
        "title": "Read: Transport Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_12_q5",
        "title": "Quiz: Transport",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_13",
    "title": "Mathematics for CLASS 4",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-4",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_13_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_13_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_13_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_13_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_13_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_13_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_13_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_13_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_13_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_13_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_13_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_13_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_13_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_13_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_13_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_14",
    "title": "English for CLASS 4",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-4",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_14_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_14_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_14_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_14_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_14_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_14_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_14_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_14_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_14_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_14_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_14_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_14_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_14_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_14_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_14_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_15",
    "title": "Hindi for CLASS 4",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-4",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_15_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_15_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_15_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_15_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_15_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_15_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_15_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_15_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_15_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_15_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_15_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_15_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_15_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_15_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_15_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_16",
    "title": "EVS for CLASS 4",
    "description": "Comprehensive and detailed EVS course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "EVS",
    "targetClassGroup": "class-4",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🌿",
    "isFree": true,
    "lessons": [
      {
        "id": "c_16_l1",
        "title": "Watch: Our Environment",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_16_l2",
        "title": "Read: Our Environment Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_16_q1",
        "title": "Quiz: Our Environment",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_16_l4",
        "title": "Watch: Plants and Animals",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_16_l5",
        "title": "Read: Plants and Animals Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_16_q2",
        "title": "Quiz: Plants and Animals",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_16_l7",
        "title": "Watch: Water and Air",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_16_l8",
        "title": "Read: Water and Air Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_16_q3",
        "title": "Quiz: Water and Air",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_16_l10",
        "title": "Watch: Health and Hygiene",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_16_l11",
        "title": "Read: Health and Hygiene Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_16_q4",
        "title": "Quiz: Health and Hygiene",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_16_l13",
        "title": "Watch: Transport",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_16_l14",
        "title": "Read: Transport Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_16_q5",
        "title": "Quiz: Transport",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_17",
    "title": "Mathematics for CLASS 5",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-5",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_17_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_17_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_17_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_17_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_17_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_17_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_17_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_17_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_17_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_17_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_17_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_17_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_17_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_17_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_17_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_18",
    "title": "English for CLASS 5",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-5",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_18_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_18_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_18_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_18_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_18_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_18_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_18_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_18_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_18_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_18_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_18_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_18_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_18_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_18_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_18_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_19",
    "title": "Hindi for CLASS 5",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-5",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_19_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_19_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_19_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_19_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_19_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_19_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_19_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_19_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_19_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_19_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_19_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_19_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_19_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_19_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_19_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_20",
    "title": "EVS for CLASS 5",
    "description": "Comprehensive and detailed EVS course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "EVS",
    "targetClassGroup": "class-5",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🌿",
    "isFree": true,
    "lessons": [
      {
        "id": "c_20_l1",
        "title": "Watch: Our Environment",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_20_l2",
        "title": "Read: Our Environment Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_20_q1",
        "title": "Quiz: Our Environment",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_20_l4",
        "title": "Watch: Plants and Animals",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_20_l5",
        "title": "Read: Plants and Animals Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_20_q2",
        "title": "Quiz: Plants and Animals",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_20_l7",
        "title": "Watch: Water and Air",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_20_l8",
        "title": "Read: Water and Air Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_20_q3",
        "title": "Quiz: Water and Air",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_20_l10",
        "title": "Watch: Health and Hygiene",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_20_l11",
        "title": "Read: Health and Hygiene Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_20_q4",
        "title": "Quiz: Health and Hygiene",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_20_l13",
        "title": "Watch: Transport",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/J7hNgKxRzEY",
        "isCompleted": false
      },
      {
        "id": "c_20_l14",
        "title": "Read: Transport Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_20_q5",
        "title": "Quiz: Transport",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_21",
    "title": "Mathematics for CLASS 6",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-6",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_21_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_21_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_21_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_21_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_21_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_21_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_21_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_21_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_21_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_21_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_21_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_21_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_21_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_21_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_21_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_22",
    "title": "Science for CLASS 6",
    "description": "Comprehensive and detailed Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Science",
    "targetClassGroup": "class-6",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🔬",
    "isFree": true,
    "lessons": [
      {
        "id": "c_22_l1",
        "title": "Watch: Matter and Materials",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_22_l2",
        "title": "Read: Matter and Materials Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_22_q1",
        "title": "Quiz: Matter and Materials",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_22_l4",
        "title": "Watch: Force and Energy",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_22_l5",
        "title": "Read: Force and Energy Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_22_q2",
        "title": "Quiz: Force and Energy",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_22_l7",
        "title": "Watch: Living Organisms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_22_l8",
        "title": "Read: Living Organisms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_22_q3",
        "title": "Quiz: Living Organisms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_22_l10",
        "title": "Watch: Earth and Space",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_22_l11",
        "title": "Read: Earth and Space Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_22_q4",
        "title": "Quiz: Earth and Space",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_22_l13",
        "title": "Watch: Human Body",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_22_l14",
        "title": "Read: Human Body Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_22_q5",
        "title": "Quiz: Human Body",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_23",
    "title": "Social Science for CLASS 6",
    "description": "Comprehensive and detailed Social Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Social Science",
    "targetClassGroup": "class-6",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🌍",
    "isFree": true,
    "lessons": [
      {
        "id": "c_23_l1",
        "title": "Watch: History of the World",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_23_l2",
        "title": "Read: History of the World Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_23_q1",
        "title": "Quiz: History of the World",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_23_l4",
        "title": "Watch: Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_23_l5",
        "title": "Read: Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_23_q2",
        "title": "Quiz: Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_23_l7",
        "title": "Watch: Civics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_23_l8",
        "title": "Read: Civics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_23_q3",
        "title": "Quiz: Civics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_23_l10",
        "title": "Watch: Economics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_23_l11",
        "title": "Read: Economics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_23_q4",
        "title": "Quiz: Economics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_23_l13",
        "title": "Watch: Political Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_23_l14",
        "title": "Read: Political Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_23_q5",
        "title": "Quiz: Political Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_24",
    "title": "English for CLASS 6",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-6",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_24_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_24_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_24_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_24_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_24_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_24_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_24_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_24_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_24_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_24_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_24_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_24_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_24_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_24_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_24_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_25",
    "title": "Hindi for CLASS 6",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-6",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_25_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_25_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_25_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_25_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_25_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_25_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_25_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_25_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_25_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_25_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_25_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_25_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_25_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_25_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_25_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_26",
    "title": "Computer Science for CLASS 6",
    "description": "Comprehensive and detailed Computer Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Computer Science",
    "targetClassGroup": "class-6",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "💻",
    "isFree": true,
    "lessons": [
      {
        "id": "c_26_l1",
        "title": "Watch: Programming Basics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_26_l2",
        "title": "Read: Programming Basics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_26_q1",
        "title": "Quiz: Programming Basics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_26_l4",
        "title": "Watch: Data Structures",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_26_l5",
        "title": "Read: Data Structures Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_26_q2",
        "title": "Quiz: Data Structures",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_26_l7",
        "title": "Watch: Algorithms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_26_l8",
        "title": "Read: Algorithms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_26_q3",
        "title": "Quiz: Algorithms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_26_l10",
        "title": "Watch: Web Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_26_l11",
        "title": "Read: Web Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_26_q4",
        "title": "Quiz: Web Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_26_l13",
        "title": "Watch: Databases",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_26_l14",
        "title": "Read: Databases Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_26_q5",
        "title": "Quiz: Databases",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_27",
    "title": "Mathematics for CLASS 7",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-7",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_27_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_27_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_27_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_27_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_27_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_27_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_27_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_27_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_27_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_27_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_27_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_27_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_27_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_27_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_27_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_28",
    "title": "Science for CLASS 7",
    "description": "Comprehensive and detailed Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Science",
    "targetClassGroup": "class-7",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🔬",
    "isFree": true,
    "lessons": [
      {
        "id": "c_28_l1",
        "title": "Watch: Matter and Materials",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_28_l2",
        "title": "Read: Matter and Materials Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_28_q1",
        "title": "Quiz: Matter and Materials",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_28_l4",
        "title": "Watch: Force and Energy",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_28_l5",
        "title": "Read: Force and Energy Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_28_q2",
        "title": "Quiz: Force and Energy",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_28_l7",
        "title": "Watch: Living Organisms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_28_l8",
        "title": "Read: Living Organisms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_28_q3",
        "title": "Quiz: Living Organisms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_28_l10",
        "title": "Watch: Earth and Space",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_28_l11",
        "title": "Read: Earth and Space Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_28_q4",
        "title": "Quiz: Earth and Space",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_28_l13",
        "title": "Watch: Human Body",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_28_l14",
        "title": "Read: Human Body Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_28_q5",
        "title": "Quiz: Human Body",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_29",
    "title": "Social Science for CLASS 7",
    "description": "Comprehensive and detailed Social Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Social Science",
    "targetClassGroup": "class-7",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🌍",
    "isFree": true,
    "lessons": [
      {
        "id": "c_29_l1",
        "title": "Watch: History of the World",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_29_l2",
        "title": "Read: History of the World Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_29_q1",
        "title": "Quiz: History of the World",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_29_l4",
        "title": "Watch: Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_29_l5",
        "title": "Read: Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_29_q2",
        "title": "Quiz: Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_29_l7",
        "title": "Watch: Civics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_29_l8",
        "title": "Read: Civics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_29_q3",
        "title": "Quiz: Civics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_29_l10",
        "title": "Watch: Economics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_29_l11",
        "title": "Read: Economics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_29_q4",
        "title": "Quiz: Economics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_29_l13",
        "title": "Watch: Political Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_29_l14",
        "title": "Read: Political Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_29_q5",
        "title": "Quiz: Political Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_30",
    "title": "English for CLASS 7",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-7",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_30_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_30_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_30_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_30_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_30_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_30_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_30_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_30_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_30_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_30_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_30_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_30_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_30_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_30_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_30_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_31",
    "title": "Hindi for CLASS 7",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-7",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_31_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_31_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_31_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_31_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_31_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_31_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_31_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_31_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_31_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_31_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_31_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_31_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_31_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_31_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_31_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_32",
    "title": "Computer Science for CLASS 7",
    "description": "Comprehensive and detailed Computer Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Computer Science",
    "targetClassGroup": "class-7",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "💻",
    "isFree": true,
    "lessons": [
      {
        "id": "c_32_l1",
        "title": "Watch: Programming Basics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_32_l2",
        "title": "Read: Programming Basics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_32_q1",
        "title": "Quiz: Programming Basics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_32_l4",
        "title": "Watch: Data Structures",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_32_l5",
        "title": "Read: Data Structures Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_32_q2",
        "title": "Quiz: Data Structures",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_32_l7",
        "title": "Watch: Algorithms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_32_l8",
        "title": "Read: Algorithms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_32_q3",
        "title": "Quiz: Algorithms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_32_l10",
        "title": "Watch: Web Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_32_l11",
        "title": "Read: Web Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_32_q4",
        "title": "Quiz: Web Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_32_l13",
        "title": "Watch: Databases",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_32_l14",
        "title": "Read: Databases Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_32_q5",
        "title": "Quiz: Databases",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_33",
    "title": "Mathematics for CLASS 8",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-8",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_33_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_33_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_33_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_33_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_33_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_33_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_33_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_33_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_33_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_33_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_33_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_33_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_33_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_33_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_33_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_34",
    "title": "Science for CLASS 8",
    "description": "Comprehensive and detailed Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Science",
    "targetClassGroup": "class-8",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🔬",
    "isFree": true,
    "lessons": [
      {
        "id": "c_34_l1",
        "title": "Watch: Matter and Materials",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_34_l2",
        "title": "Read: Matter and Materials Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_34_q1",
        "title": "Quiz: Matter and Materials",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_34_l4",
        "title": "Watch: Force and Energy",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_34_l5",
        "title": "Read: Force and Energy Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_34_q2",
        "title": "Quiz: Force and Energy",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_34_l7",
        "title": "Watch: Living Organisms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_34_l8",
        "title": "Read: Living Organisms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_34_q3",
        "title": "Quiz: Living Organisms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_34_l10",
        "title": "Watch: Earth and Space",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_34_l11",
        "title": "Read: Earth and Space Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_34_q4",
        "title": "Quiz: Earth and Space",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_34_l13",
        "title": "Watch: Human Body",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_34_l14",
        "title": "Read: Human Body Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_34_q5",
        "title": "Quiz: Human Body",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_35",
    "title": "Social Science for CLASS 8",
    "description": "Comprehensive and detailed Social Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Social Science",
    "targetClassGroup": "class-8",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🌍",
    "isFree": true,
    "lessons": [
      {
        "id": "c_35_l1",
        "title": "Watch: History of the World",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_35_l2",
        "title": "Read: History of the World Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_35_q1",
        "title": "Quiz: History of the World",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_35_l4",
        "title": "Watch: Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_35_l5",
        "title": "Read: Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_35_q2",
        "title": "Quiz: Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_35_l7",
        "title": "Watch: Civics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_35_l8",
        "title": "Read: Civics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_35_q3",
        "title": "Quiz: Civics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_35_l10",
        "title": "Watch: Economics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_35_l11",
        "title": "Read: Economics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_35_q4",
        "title": "Quiz: Economics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_35_l13",
        "title": "Watch: Political Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_35_l14",
        "title": "Read: Political Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_35_q5",
        "title": "Quiz: Political Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_36",
    "title": "English for CLASS 8",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-8",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_36_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_36_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_36_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_36_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_36_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_36_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_36_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_36_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_36_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_36_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_36_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_36_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_36_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_36_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_36_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_37",
    "title": "Hindi for CLASS 8",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-8",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_37_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_37_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_37_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_37_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_37_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_37_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_37_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_37_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_37_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_37_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_37_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_37_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_37_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_37_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_37_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_38",
    "title": "Computer Science for CLASS 8",
    "description": "Comprehensive and detailed Computer Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Computer Science",
    "targetClassGroup": "class-8",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "💻",
    "isFree": true,
    "lessons": [
      {
        "id": "c_38_l1",
        "title": "Watch: Programming Basics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_38_l2",
        "title": "Read: Programming Basics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_38_q1",
        "title": "Quiz: Programming Basics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_38_l4",
        "title": "Watch: Data Structures",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_38_l5",
        "title": "Read: Data Structures Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_38_q2",
        "title": "Quiz: Data Structures",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_38_l7",
        "title": "Watch: Algorithms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_38_l8",
        "title": "Read: Algorithms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_38_q3",
        "title": "Quiz: Algorithms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_38_l10",
        "title": "Watch: Web Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_38_l11",
        "title": "Read: Web Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_38_q4",
        "title": "Quiz: Web Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_38_l13",
        "title": "Watch: Databases",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_38_l14",
        "title": "Read: Databases Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_38_q5",
        "title": "Quiz: Databases",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_39",
    "title": "Mathematics for CLASS 9",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-9",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_39_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_39_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_39_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_39_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_39_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_39_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_39_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_39_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_39_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_39_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_39_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_39_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_39_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_39_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_39_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_40",
    "title": "Science for CLASS 9",
    "description": "Comprehensive and detailed Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Science",
    "targetClassGroup": "class-9",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🔬",
    "isFree": true,
    "lessons": [
      {
        "id": "c_40_l1",
        "title": "Watch: Matter and Materials",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_40_l2",
        "title": "Read: Matter and Materials Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_40_q1",
        "title": "Quiz: Matter and Materials",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_40_l4",
        "title": "Watch: Force and Energy",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_40_l5",
        "title": "Read: Force and Energy Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_40_q2",
        "title": "Quiz: Force and Energy",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_40_l7",
        "title": "Watch: Living Organisms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_40_l8",
        "title": "Read: Living Organisms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_40_q3",
        "title": "Quiz: Living Organisms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_40_l10",
        "title": "Watch: Earth and Space",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_40_l11",
        "title": "Read: Earth and Space Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_40_q4",
        "title": "Quiz: Earth and Space",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_40_l13",
        "title": "Watch: Human Body",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_40_l14",
        "title": "Read: Human Body Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_40_q5",
        "title": "Quiz: Human Body",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_41",
    "title": "Social Science for CLASS 9",
    "description": "Comprehensive and detailed Social Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Social Science",
    "targetClassGroup": "class-9",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🌍",
    "isFree": true,
    "lessons": [
      {
        "id": "c_41_l1",
        "title": "Watch: History of the World",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_41_l2",
        "title": "Read: History of the World Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_41_q1",
        "title": "Quiz: History of the World",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_41_l4",
        "title": "Watch: Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_41_l5",
        "title": "Read: Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_41_q2",
        "title": "Quiz: Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_41_l7",
        "title": "Watch: Civics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_41_l8",
        "title": "Read: Civics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_41_q3",
        "title": "Quiz: Civics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_41_l10",
        "title": "Watch: Economics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_41_l11",
        "title": "Read: Economics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_41_q4",
        "title": "Quiz: Economics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_41_l13",
        "title": "Watch: Political Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_41_l14",
        "title": "Read: Political Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_41_q5",
        "title": "Quiz: Political Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_42",
    "title": "English for CLASS 9",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-9",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_42_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_42_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_42_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_42_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_42_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_42_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_42_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_42_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_42_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_42_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_42_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_42_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_42_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_42_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_42_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_43",
    "title": "Hindi for CLASS 9",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-9",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_43_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_43_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_43_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_43_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_43_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_43_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_43_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_43_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_43_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_43_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_43_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_43_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_43_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_43_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_43_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_44",
    "title": "Computer Science for CLASS 9",
    "description": "Comprehensive and detailed Computer Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Computer Science",
    "targetClassGroup": "class-9",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "💻",
    "isFree": true,
    "lessons": [
      {
        "id": "c_44_l1",
        "title": "Watch: Programming Basics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_44_l2",
        "title": "Read: Programming Basics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_44_q1",
        "title": "Quiz: Programming Basics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_44_l4",
        "title": "Watch: Data Structures",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_44_l5",
        "title": "Read: Data Structures Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_44_q2",
        "title": "Quiz: Data Structures",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_44_l7",
        "title": "Watch: Algorithms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_44_l8",
        "title": "Read: Algorithms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_44_q3",
        "title": "Quiz: Algorithms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_44_l10",
        "title": "Watch: Web Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_44_l11",
        "title": "Read: Web Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_44_q4",
        "title": "Quiz: Web Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_44_l13",
        "title": "Watch: Databases",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_44_l14",
        "title": "Read: Databases Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_44_q5",
        "title": "Quiz: Databases",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_45",
    "title": "Mathematics for CLASS 10",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-10",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_45_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_45_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_45_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_45_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_45_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_45_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_45_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_45_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_45_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_45_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_45_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_45_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_45_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_45_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_45_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_46",
    "title": "Science for CLASS 10",
    "description": "Comprehensive and detailed Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Science",
    "targetClassGroup": "class-10",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🔬",
    "isFree": true,
    "lessons": [
      {
        "id": "c_46_l1",
        "title": "Watch: Matter and Materials",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_46_l2",
        "title": "Read: Matter and Materials Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_46_q1",
        "title": "Quiz: Matter and Materials",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_46_l4",
        "title": "Watch: Force and Energy",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_46_l5",
        "title": "Read: Force and Energy Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_46_q2",
        "title": "Quiz: Force and Energy",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_46_l7",
        "title": "Watch: Living Organisms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_46_l8",
        "title": "Read: Living Organisms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_46_q3",
        "title": "Quiz: Living Organisms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_46_l10",
        "title": "Watch: Earth and Space",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_46_l11",
        "title": "Read: Earth and Space Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_46_q4",
        "title": "Quiz: Earth and Space",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_46_l13",
        "title": "Watch: Human Body",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/5D1F6lC4B7E",
        "isCompleted": false
      },
      {
        "id": "c_46_l14",
        "title": "Read: Human Body Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_46_q5",
        "title": "Quiz: Human Body",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_47",
    "title": "Social Science for CLASS 10",
    "description": "Comprehensive and detailed Social Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Social Science",
    "targetClassGroup": "class-10",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🌍",
    "isFree": true,
    "lessons": [
      {
        "id": "c_47_l1",
        "title": "Watch: History of the World",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_47_l2",
        "title": "Read: History of the World Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_47_q1",
        "title": "Quiz: History of the World",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_47_l4",
        "title": "Watch: Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_47_l5",
        "title": "Read: Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_47_q2",
        "title": "Quiz: Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_47_l7",
        "title": "Watch: Civics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_47_l8",
        "title": "Read: Civics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_47_q3",
        "title": "Quiz: Civics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_47_l10",
        "title": "Watch: Economics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_47_l11",
        "title": "Read: Economics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_47_q4",
        "title": "Quiz: Economics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_47_l13",
        "title": "Watch: Political Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/B-b4XvuQo1Y",
        "isCompleted": false
      },
      {
        "id": "c_47_l14",
        "title": "Read: Political Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_47_q5",
        "title": "Quiz: Political Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_48",
    "title": "English for CLASS 10",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-10",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_48_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_48_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_48_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_48_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_48_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_48_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_48_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_48_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_48_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_48_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_48_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_48_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_48_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_48_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_48_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_49",
    "title": "Hindi for CLASS 10",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-10",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_49_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_49_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_49_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_49_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_49_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_49_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_49_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_49_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_49_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_49_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_49_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_49_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_49_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_49_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_49_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_50",
    "title": "Computer Science for CLASS 10",
    "description": "Comprehensive and detailed Computer Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Computer Science",
    "targetClassGroup": "class-10",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "💻",
    "isFree": true,
    "lessons": [
      {
        "id": "c_50_l1",
        "title": "Watch: Programming Basics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_50_l2",
        "title": "Read: Programming Basics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_50_q1",
        "title": "Quiz: Programming Basics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_50_l4",
        "title": "Watch: Data Structures",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_50_l5",
        "title": "Read: Data Structures Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_50_q2",
        "title": "Quiz: Data Structures",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_50_l7",
        "title": "Watch: Algorithms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_50_l8",
        "title": "Read: Algorithms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_50_q3",
        "title": "Quiz: Algorithms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_50_l10",
        "title": "Watch: Web Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_50_l11",
        "title": "Read: Web Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_50_q4",
        "title": "Quiz: Web Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_50_l13",
        "title": "Watch: Databases",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_50_l14",
        "title": "Read: Databases Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_50_q5",
        "title": "Quiz: Databases",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_51",
    "title": "Physics for CLASS 11 SCIENCE",
    "description": "Comprehensive and detailed Physics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Physics",
    "targetClassGroup": "class-11-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "⚛️",
    "isFree": true,
    "lessons": [
      {
        "id": "c_51_l1",
        "title": "Watch: Mechanics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/lAWEK4v2JcQ",
        "isCompleted": false
      },
      {
        "id": "c_51_l2",
        "title": "Read: Mechanics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_51_q1",
        "title": "Quiz: Mechanics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_51_l4",
        "title": "Watch: Thermodynamics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/lAWEK4v2JcQ",
        "isCompleted": false
      },
      {
        "id": "c_51_l5",
        "title": "Read: Thermodynamics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_51_q2",
        "title": "Quiz: Thermodynamics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_51_l7",
        "title": "Watch: Electromagnetism",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/lAWEK4v2JcQ",
        "isCompleted": false
      },
      {
        "id": "c_51_l8",
        "title": "Read: Electromagnetism Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_51_q3",
        "title": "Quiz: Electromagnetism",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_51_l10",
        "title": "Watch: Optics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/lAWEK4v2JcQ",
        "isCompleted": false
      },
      {
        "id": "c_51_l11",
        "title": "Read: Optics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_51_q4",
        "title": "Quiz: Optics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_51_l13",
        "title": "Watch: Modern Physics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/lAWEK4v2JcQ",
        "isCompleted": false
      },
      {
        "id": "c_51_l14",
        "title": "Read: Modern Physics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_51_q5",
        "title": "Quiz: Modern Physics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_52",
    "title": "Chemistry for CLASS 11 SCIENCE",
    "description": "Comprehensive and detailed Chemistry course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Chemistry",
    "targetClassGroup": "class-11-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🧪",
    "isFree": true,
    "lessons": [
      {
        "id": "c_52_l1",
        "title": "Watch: Physical Chemistry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/0PE3xApmH04",
        "isCompleted": false
      },
      {
        "id": "c_52_l2",
        "title": "Read: Physical Chemistry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_52_q1",
        "title": "Quiz: Physical Chemistry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_52_l4",
        "title": "Watch: Organic Chemistry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/0PE3xApmH04",
        "isCompleted": false
      },
      {
        "id": "c_52_l5",
        "title": "Read: Organic Chemistry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_52_q2",
        "title": "Quiz: Organic Chemistry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_52_l7",
        "title": "Watch: Inorganic Chemistry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/0PE3xApmH04",
        "isCompleted": false
      },
      {
        "id": "c_52_l8",
        "title": "Read: Inorganic Chemistry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_52_q3",
        "title": "Quiz: Inorganic Chemistry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_52_l10",
        "title": "Watch: Atomic Structure",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/0PE3xApmH04",
        "isCompleted": false
      },
      {
        "id": "c_52_l11",
        "title": "Read: Atomic Structure Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_52_q4",
        "title": "Quiz: Atomic Structure",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_52_l13",
        "title": "Watch: Chemical Bonding",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/0PE3xApmH04",
        "isCompleted": false
      },
      {
        "id": "c_52_l14",
        "title": "Read: Chemical Bonding Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_52_q5",
        "title": "Quiz: Chemical Bonding",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_53",
    "title": "Mathematics for CLASS 11 SCIENCE",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-11-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_53_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_53_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_53_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_53_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_53_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_53_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_53_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_53_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_53_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_53_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_53_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_53_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_53_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_53_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_53_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_54",
    "title": "Biology for CLASS 11 SCIENCE",
    "description": "Comprehensive and detailed Biology course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Biology",
    "targetClassGroup": "class-11-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🧬",
    "isFree": true,
    "lessons": [
      {
        "id": "c_54_l1",
        "title": "Watch: Cell Biology",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/ax0OAqPyyh0",
        "isCompleted": false
      },
      {
        "id": "c_54_l2",
        "title": "Read: Cell Biology Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_54_q1",
        "title": "Quiz: Cell Biology",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_54_l4",
        "title": "Watch: Genetics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/ax0OAqPyyh0",
        "isCompleted": false
      },
      {
        "id": "c_54_l5",
        "title": "Read: Genetics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_54_q2",
        "title": "Quiz: Genetics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_54_l7",
        "title": "Watch: Ecology",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/ax0OAqPyyh0",
        "isCompleted": false
      },
      {
        "id": "c_54_l8",
        "title": "Read: Ecology Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_54_q3",
        "title": "Quiz: Ecology",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_54_l10",
        "title": "Watch: Human Physiology",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/ax0OAqPyyh0",
        "isCompleted": false
      },
      {
        "id": "c_54_l11",
        "title": "Read: Human Physiology Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_54_q4",
        "title": "Quiz: Human Physiology",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_54_l13",
        "title": "Watch: Plant Physiology",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/ax0OAqPyyh0",
        "isCompleted": false
      },
      {
        "id": "c_54_l14",
        "title": "Read: Plant Physiology Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_54_q5",
        "title": "Quiz: Plant Physiology",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_55",
    "title": "English for CLASS 11 SCIENCE",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-11-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_55_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_55_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_55_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_55_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_55_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_55_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_55_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_55_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_55_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_55_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_55_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_55_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_55_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_55_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_55_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_56",
    "title": "Computer Science for CLASS 11 SCIENCE",
    "description": "Comprehensive and detailed Computer Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Computer Science",
    "targetClassGroup": "class-11-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "💻",
    "isFree": true,
    "lessons": [
      {
        "id": "c_56_l1",
        "title": "Watch: Programming Basics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_56_l2",
        "title": "Read: Programming Basics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_56_q1",
        "title": "Quiz: Programming Basics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_56_l4",
        "title": "Watch: Data Structures",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_56_l5",
        "title": "Read: Data Structures Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_56_q2",
        "title": "Quiz: Data Structures",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_56_l7",
        "title": "Watch: Algorithms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_56_l8",
        "title": "Read: Algorithms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_56_q3",
        "title": "Quiz: Algorithms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_56_l10",
        "title": "Watch: Web Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_56_l11",
        "title": "Read: Web Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_56_q4",
        "title": "Quiz: Web Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_56_l13",
        "title": "Watch: Databases",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_56_l14",
        "title": "Read: Databases Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_56_q5",
        "title": "Quiz: Databases",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_57",
    "title": "Accountancy for CLASS 11 COMMERCE",
    "description": "Comprehensive and detailed Accountancy course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Accountancy",
    "targetClassGroup": "class-11-commerce",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📊",
    "isFree": true,
    "lessons": [
      {
        "id": "c_57_l1",
        "title": "Watch: Accounting Principles",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/7Vcwq-m2v8c",
        "isCompleted": false
      },
      {
        "id": "c_57_l2",
        "title": "Read: Accounting Principles Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_57_q1",
        "title": "Quiz: Accounting Principles",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_57_l4",
        "title": "Watch: Financial Statements",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/7Vcwq-m2v8c",
        "isCompleted": false
      },
      {
        "id": "c_57_l5",
        "title": "Read: Financial Statements Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_57_q2",
        "title": "Quiz: Financial Statements",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_57_l7",
        "title": "Watch: Partnership Accounts",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/7Vcwq-m2v8c",
        "isCompleted": false
      },
      {
        "id": "c_57_l8",
        "title": "Read: Partnership Accounts Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_57_q3",
        "title": "Quiz: Partnership Accounts",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_57_l10",
        "title": "Watch: Company Accounts",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/7Vcwq-m2v8c",
        "isCompleted": false
      },
      {
        "id": "c_57_l11",
        "title": "Read: Company Accounts Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_57_q4",
        "title": "Quiz: Company Accounts",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_57_l13",
        "title": "Watch: Analysis of Financial Statements",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/7Vcwq-m2v8c",
        "isCompleted": false
      },
      {
        "id": "c_57_l14",
        "title": "Read: Analysis of Financial Statements Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_57_q5",
        "title": "Quiz: Analysis of Financial Statements",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_58",
    "title": "Business Studies for CLASS 11 COMMERCE",
    "description": "Comprehensive and detailed Business Studies course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Business Studies",
    "targetClassGroup": "class-11-commerce",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "💼",
    "isFree": true,
    "lessons": [
      {
        "id": "c_58_l1",
        "title": "Watch: Nature of Business",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/oK2x729221w",
        "isCompleted": false
      },
      {
        "id": "c_58_l2",
        "title": "Read: Nature of Business Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_58_q1",
        "title": "Quiz: Nature of Business",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_58_l4",
        "title": "Watch: Forms of Business",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/oK2x729221w",
        "isCompleted": false
      },
      {
        "id": "c_58_l5",
        "title": "Read: Forms of Business Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_58_q2",
        "title": "Quiz: Forms of Business",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_58_l7",
        "title": "Watch: Business Environment",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/oK2x729221w",
        "isCompleted": false
      },
      {
        "id": "c_58_l8",
        "title": "Read: Business Environment Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_58_q3",
        "title": "Quiz: Business Environment",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_58_l10",
        "title": "Watch: Management",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/oK2x729221w",
        "isCompleted": false
      },
      {
        "id": "c_58_l11",
        "title": "Read: Management Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_58_q4",
        "title": "Quiz: Management",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_58_l13",
        "title": "Watch: Marketing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/oK2x729221w",
        "isCompleted": false
      },
      {
        "id": "c_58_l14",
        "title": "Read: Marketing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_58_q5",
        "title": "Quiz: Marketing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_59",
    "title": "Economics for CLASS 11 COMMERCE",
    "description": "Comprehensive and detailed Economics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Economics",
    "targetClassGroup": "class-11-commerce",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📉",
    "isFree": true,
    "lessons": [
      {
        "id": "c_59_l1",
        "title": "Watch: Microeconomics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_59_l2",
        "title": "Read: Microeconomics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_59_q1",
        "title": "Quiz: Microeconomics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_59_l4",
        "title": "Watch: Macroeconomics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_59_l5",
        "title": "Read: Macroeconomics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_59_q2",
        "title": "Quiz: Macroeconomics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_59_l7",
        "title": "Watch: Indian Economic Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_59_l8",
        "title": "Read: Indian Economic Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_59_q3",
        "title": "Quiz: Indian Economic Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_59_l10",
        "title": "Watch: Statistics for Economics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_59_l11",
        "title": "Read: Statistics for Economics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_59_q4",
        "title": "Quiz: Statistics for Economics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_59_l13",
        "title": "Watch: Public Finance",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_59_l14",
        "title": "Read: Public Finance Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_59_q5",
        "title": "Quiz: Public Finance",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_60",
    "title": "Mathematics for CLASS 11 COMMERCE",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-11-commerce",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_60_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_60_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_60_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_60_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_60_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_60_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_60_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_60_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_60_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_60_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_60_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_60_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_60_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_60_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_60_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_61",
    "title": "English for CLASS 11 COMMERCE",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-11-commerce",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_61_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_61_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_61_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_61_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_61_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_61_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_61_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_61_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_61_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_61_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_61_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_61_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_61_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_61_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_61_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_62",
    "title": "History for CLASS 11 ARTS",
    "description": "Comprehensive and detailed History course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "History",
    "targetClassGroup": "class-11-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🏺",
    "isFree": true,
    "lessons": [
      {
        "id": "c_62_l1",
        "title": "Watch: Ancient India",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/v3P1rEicEis",
        "isCompleted": false
      },
      {
        "id": "c_62_l2",
        "title": "Read: Ancient India Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_62_q1",
        "title": "Quiz: Ancient India",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_62_l4",
        "title": "Watch: Medieval India",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/v3P1rEicEis",
        "isCompleted": false
      },
      {
        "id": "c_62_l5",
        "title": "Read: Medieval India Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_62_q2",
        "title": "Quiz: Medieval India",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_62_l7",
        "title": "Watch: Modern India",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/v3P1rEicEis",
        "isCompleted": false
      },
      {
        "id": "c_62_l8",
        "title": "Read: Modern India Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_62_q3",
        "title": "Quiz: Modern India",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_62_l10",
        "title": "Watch: World History",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/v3P1rEicEis",
        "isCompleted": false
      },
      {
        "id": "c_62_l11",
        "title": "Read: World History Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_62_q4",
        "title": "Quiz: World History",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_62_l13",
        "title": "Watch: Historical Themes",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/v3P1rEicEis",
        "isCompleted": false
      },
      {
        "id": "c_62_l14",
        "title": "Read: Historical Themes Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_62_q5",
        "title": "Quiz: Historical Themes",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_63",
    "title": "Geography for CLASS 11 ARTS",
    "description": "Comprehensive and detailed Geography course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Geography",
    "targetClassGroup": "class-11-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🗺️",
    "isFree": true,
    "lessons": [
      {
        "id": "c_63_l1",
        "title": "Watch: Physical Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mKk3o0mE3nQ",
        "isCompleted": false
      },
      {
        "id": "c_63_l2",
        "title": "Read: Physical Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_63_q1",
        "title": "Quiz: Physical Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_63_l4",
        "title": "Watch: Human Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mKk3o0mE3nQ",
        "isCompleted": false
      },
      {
        "id": "c_63_l5",
        "title": "Read: Human Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_63_q2",
        "title": "Quiz: Human Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_63_l7",
        "title": "Watch: Resources and Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mKk3o0mE3nQ",
        "isCompleted": false
      },
      {
        "id": "c_63_l8",
        "title": "Read: Resources and Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_63_q3",
        "title": "Quiz: Resources and Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_63_l10",
        "title": "Watch: Map Work",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mKk3o0mE3nQ",
        "isCompleted": false
      },
      {
        "id": "c_63_l11",
        "title": "Read: Map Work Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_63_q4",
        "title": "Quiz: Map Work",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_63_l13",
        "title": "Watch: Environmental Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mKk3o0mE3nQ",
        "isCompleted": false
      },
      {
        "id": "c_63_l14",
        "title": "Read: Environmental Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_63_q5",
        "title": "Quiz: Environmental Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_64",
    "title": "Political Science for CLASS 11 ARTS",
    "description": "Comprehensive and detailed Political Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Political Science",
    "targetClassGroup": "class-11-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "⚖️",
    "isFree": true,
    "lessons": [
      {
        "id": "c_64_l1",
        "title": "Watch: Political Theory",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/-E4G0w3A5_E",
        "isCompleted": false
      },
      {
        "id": "c_64_l2",
        "title": "Read: Political Theory Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_64_q1",
        "title": "Quiz: Political Theory",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_64_l4",
        "title": "Watch: Indian Constitution",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/-E4G0w3A5_E",
        "isCompleted": false
      },
      {
        "id": "c_64_l5",
        "title": "Read: Indian Constitution Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_64_q2",
        "title": "Quiz: Indian Constitution",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_64_l7",
        "title": "Watch: Global Politics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/-E4G0w3A5_E",
        "isCompleted": false
      },
      {
        "id": "c_64_l8",
        "title": "Read: Global Politics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_64_q3",
        "title": "Quiz: Global Politics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_64_l10",
        "title": "Watch: Political Institutions",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/-E4G0w3A5_E",
        "isCompleted": false
      },
      {
        "id": "c_64_l11",
        "title": "Read: Political Institutions Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_64_q4",
        "title": "Quiz: Political Institutions",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_64_l13",
        "title": "Watch: Public Administration",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/-E4G0w3A5_E",
        "isCompleted": false
      },
      {
        "id": "c_64_l14",
        "title": "Read: Public Administration Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_64_q5",
        "title": "Quiz: Public Administration",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_65",
    "title": "Economics for CLASS 11 ARTS",
    "description": "Comprehensive and detailed Economics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Economics",
    "targetClassGroup": "class-11-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📉",
    "isFree": true,
    "lessons": [
      {
        "id": "c_65_l1",
        "title": "Watch: Microeconomics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_65_l2",
        "title": "Read: Microeconomics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_65_q1",
        "title": "Quiz: Microeconomics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_65_l4",
        "title": "Watch: Macroeconomics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_65_l5",
        "title": "Read: Macroeconomics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_65_q2",
        "title": "Quiz: Macroeconomics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_65_l7",
        "title": "Watch: Indian Economic Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_65_l8",
        "title": "Read: Indian Economic Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_65_q3",
        "title": "Quiz: Indian Economic Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_65_l10",
        "title": "Watch: Statistics for Economics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_65_l11",
        "title": "Read: Statistics for Economics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_65_q4",
        "title": "Quiz: Statistics for Economics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_65_l13",
        "title": "Watch: Public Finance",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_65_l14",
        "title": "Read: Public Finance Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_65_q5",
        "title": "Quiz: Public Finance",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_66",
    "title": "English for CLASS 11 ARTS",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-11-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_66_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_66_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_66_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_66_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_66_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_66_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_66_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_66_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_66_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_66_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_66_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_66_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_66_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_66_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_66_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_67",
    "title": "Hindi for CLASS 11 ARTS",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-11-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_67_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_67_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_67_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_67_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_67_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_67_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_67_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_67_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_67_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_67_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_67_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_67_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_67_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_67_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_67_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_68",
    "title": "Physics for CLASS 12 SCIENCE",
    "description": "Comprehensive and detailed Physics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Physics",
    "targetClassGroup": "class-12-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "⚛️",
    "isFree": true,
    "lessons": [
      {
        "id": "c_68_l1",
        "title": "Watch: Mechanics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/lAWEK4v2JcQ",
        "isCompleted": false
      },
      {
        "id": "c_68_l2",
        "title": "Read: Mechanics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_68_q1",
        "title": "Quiz: Mechanics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_68_l4",
        "title": "Watch: Thermodynamics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/lAWEK4v2JcQ",
        "isCompleted": false
      },
      {
        "id": "c_68_l5",
        "title": "Read: Thermodynamics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_68_q2",
        "title": "Quiz: Thermodynamics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_68_l7",
        "title": "Watch: Electromagnetism",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/lAWEK4v2JcQ",
        "isCompleted": false
      },
      {
        "id": "c_68_l8",
        "title": "Read: Electromagnetism Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_68_q3",
        "title": "Quiz: Electromagnetism",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_68_l10",
        "title": "Watch: Optics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/lAWEK4v2JcQ",
        "isCompleted": false
      },
      {
        "id": "c_68_l11",
        "title": "Read: Optics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_68_q4",
        "title": "Quiz: Optics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_68_l13",
        "title": "Watch: Modern Physics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/lAWEK4v2JcQ",
        "isCompleted": false
      },
      {
        "id": "c_68_l14",
        "title": "Read: Modern Physics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_68_q5",
        "title": "Quiz: Modern Physics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_69",
    "title": "Chemistry for CLASS 12 SCIENCE",
    "description": "Comprehensive and detailed Chemistry course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Chemistry",
    "targetClassGroup": "class-12-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🧪",
    "isFree": true,
    "lessons": [
      {
        "id": "c_69_l1",
        "title": "Watch: Physical Chemistry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/0PE3xApmH04",
        "isCompleted": false
      },
      {
        "id": "c_69_l2",
        "title": "Read: Physical Chemistry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_69_q1",
        "title": "Quiz: Physical Chemistry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_69_l4",
        "title": "Watch: Organic Chemistry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/0PE3xApmH04",
        "isCompleted": false
      },
      {
        "id": "c_69_l5",
        "title": "Read: Organic Chemistry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_69_q2",
        "title": "Quiz: Organic Chemistry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_69_l7",
        "title": "Watch: Inorganic Chemistry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/0PE3xApmH04",
        "isCompleted": false
      },
      {
        "id": "c_69_l8",
        "title": "Read: Inorganic Chemistry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_69_q3",
        "title": "Quiz: Inorganic Chemistry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_69_l10",
        "title": "Watch: Atomic Structure",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/0PE3xApmH04",
        "isCompleted": false
      },
      {
        "id": "c_69_l11",
        "title": "Read: Atomic Structure Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_69_q4",
        "title": "Quiz: Atomic Structure",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_69_l13",
        "title": "Watch: Chemical Bonding",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/0PE3xApmH04",
        "isCompleted": false
      },
      {
        "id": "c_69_l14",
        "title": "Read: Chemical Bonding Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_69_q5",
        "title": "Quiz: Chemical Bonding",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_70",
    "title": "Mathematics for CLASS 12 SCIENCE",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-12-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_70_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_70_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_70_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_70_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_70_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_70_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_70_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_70_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_70_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_70_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_70_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_70_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_70_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_70_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_70_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_71",
    "title": "Biology for CLASS 12 SCIENCE",
    "description": "Comprehensive and detailed Biology course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Biology",
    "targetClassGroup": "class-12-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🧬",
    "isFree": true,
    "lessons": [
      {
        "id": "c_71_l1",
        "title": "Watch: Cell Biology",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/ax0OAqPyyh0",
        "isCompleted": false
      },
      {
        "id": "c_71_l2",
        "title": "Read: Cell Biology Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_71_q1",
        "title": "Quiz: Cell Biology",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_71_l4",
        "title": "Watch: Genetics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/ax0OAqPyyh0",
        "isCompleted": false
      },
      {
        "id": "c_71_l5",
        "title": "Read: Genetics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_71_q2",
        "title": "Quiz: Genetics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_71_l7",
        "title": "Watch: Ecology",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/ax0OAqPyyh0",
        "isCompleted": false
      },
      {
        "id": "c_71_l8",
        "title": "Read: Ecology Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_71_q3",
        "title": "Quiz: Ecology",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_71_l10",
        "title": "Watch: Human Physiology",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/ax0OAqPyyh0",
        "isCompleted": false
      },
      {
        "id": "c_71_l11",
        "title": "Read: Human Physiology Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_71_q4",
        "title": "Quiz: Human Physiology",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_71_l13",
        "title": "Watch: Plant Physiology",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/ax0OAqPyyh0",
        "isCompleted": false
      },
      {
        "id": "c_71_l14",
        "title": "Read: Plant Physiology Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_71_q5",
        "title": "Quiz: Plant Physiology",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_72",
    "title": "English for CLASS 12 SCIENCE",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-12-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_72_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_72_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_72_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_72_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_72_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_72_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_72_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_72_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_72_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_72_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_72_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_72_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_72_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_72_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_72_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_73",
    "title": "Computer Science for CLASS 12 SCIENCE",
    "description": "Comprehensive and detailed Computer Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Computer Science",
    "targetClassGroup": "class-12-science",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "💻",
    "isFree": true,
    "lessons": [
      {
        "id": "c_73_l1",
        "title": "Watch: Programming Basics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_73_l2",
        "title": "Read: Programming Basics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_73_q1",
        "title": "Quiz: Programming Basics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_73_l4",
        "title": "Watch: Data Structures",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_73_l5",
        "title": "Read: Data Structures Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_73_q2",
        "title": "Quiz: Data Structures",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_73_l7",
        "title": "Watch: Algorithms",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_73_l8",
        "title": "Read: Algorithms Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_73_q3",
        "title": "Quiz: Algorithms",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_73_l10",
        "title": "Watch: Web Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_73_l11",
        "title": "Read: Web Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_73_q4",
        "title": "Quiz: Web Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_73_l13",
        "title": "Watch: Databases",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mU6anWqZJcc",
        "isCompleted": false
      },
      {
        "id": "c_73_l14",
        "title": "Read: Databases Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_73_q5",
        "title": "Quiz: Databases",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_74",
    "title": "Accountancy for CLASS 12 COMMERCE",
    "description": "Comprehensive and detailed Accountancy course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Accountancy",
    "targetClassGroup": "class-12-commerce",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📊",
    "isFree": true,
    "lessons": [
      {
        "id": "c_74_l1",
        "title": "Watch: Accounting Principles",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/7Vcwq-m2v8c",
        "isCompleted": false
      },
      {
        "id": "c_74_l2",
        "title": "Read: Accounting Principles Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_74_q1",
        "title": "Quiz: Accounting Principles",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_74_l4",
        "title": "Watch: Financial Statements",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/7Vcwq-m2v8c",
        "isCompleted": false
      },
      {
        "id": "c_74_l5",
        "title": "Read: Financial Statements Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_74_q2",
        "title": "Quiz: Financial Statements",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_74_l7",
        "title": "Watch: Partnership Accounts",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/7Vcwq-m2v8c",
        "isCompleted": false
      },
      {
        "id": "c_74_l8",
        "title": "Read: Partnership Accounts Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_74_q3",
        "title": "Quiz: Partnership Accounts",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_74_l10",
        "title": "Watch: Company Accounts",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/7Vcwq-m2v8c",
        "isCompleted": false
      },
      {
        "id": "c_74_l11",
        "title": "Read: Company Accounts Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_74_q4",
        "title": "Quiz: Company Accounts",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_74_l13",
        "title": "Watch: Analysis of Financial Statements",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/7Vcwq-m2v8c",
        "isCompleted": false
      },
      {
        "id": "c_74_l14",
        "title": "Read: Analysis of Financial Statements Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_74_q5",
        "title": "Quiz: Analysis of Financial Statements",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_75",
    "title": "Business Studies for CLASS 12 COMMERCE",
    "description": "Comprehensive and detailed Business Studies course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Business Studies",
    "targetClassGroup": "class-12-commerce",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "💼",
    "isFree": true,
    "lessons": [
      {
        "id": "c_75_l1",
        "title": "Watch: Nature of Business",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/oK2x729221w",
        "isCompleted": false
      },
      {
        "id": "c_75_l2",
        "title": "Read: Nature of Business Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_75_q1",
        "title": "Quiz: Nature of Business",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_75_l4",
        "title": "Watch: Forms of Business",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/oK2x729221w",
        "isCompleted": false
      },
      {
        "id": "c_75_l5",
        "title": "Read: Forms of Business Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_75_q2",
        "title": "Quiz: Forms of Business",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_75_l7",
        "title": "Watch: Business Environment",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/oK2x729221w",
        "isCompleted": false
      },
      {
        "id": "c_75_l8",
        "title": "Read: Business Environment Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_75_q3",
        "title": "Quiz: Business Environment",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_75_l10",
        "title": "Watch: Management",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/oK2x729221w",
        "isCompleted": false
      },
      {
        "id": "c_75_l11",
        "title": "Read: Management Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_75_q4",
        "title": "Quiz: Management",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_75_l13",
        "title": "Watch: Marketing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/oK2x729221w",
        "isCompleted": false
      },
      {
        "id": "c_75_l14",
        "title": "Read: Marketing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_75_q5",
        "title": "Quiz: Marketing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_76",
    "title": "Economics for CLASS 12 COMMERCE",
    "description": "Comprehensive and detailed Economics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Economics",
    "targetClassGroup": "class-12-commerce",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📉",
    "isFree": true,
    "lessons": [
      {
        "id": "c_76_l1",
        "title": "Watch: Microeconomics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_76_l2",
        "title": "Read: Microeconomics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_76_q1",
        "title": "Quiz: Microeconomics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_76_l4",
        "title": "Watch: Macroeconomics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_76_l5",
        "title": "Read: Macroeconomics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_76_q2",
        "title": "Quiz: Macroeconomics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_76_l7",
        "title": "Watch: Indian Economic Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_76_l8",
        "title": "Read: Indian Economic Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_76_q3",
        "title": "Quiz: Indian Economic Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_76_l10",
        "title": "Watch: Statistics for Economics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_76_l11",
        "title": "Read: Statistics for Economics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_76_q4",
        "title": "Quiz: Statistics for Economics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_76_l13",
        "title": "Watch: Public Finance",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_76_l14",
        "title": "Read: Public Finance Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_76_q5",
        "title": "Quiz: Public Finance",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_77",
    "title": "Mathematics for CLASS 12 COMMERCE",
    "description": "Comprehensive and detailed Mathematics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Mathematics",
    "targetClassGroup": "class-12-commerce",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📐",
    "isFree": true,
    "lessons": [
      {
        "id": "c_77_l1",
        "title": "Watch: Number Systems",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_77_l2",
        "title": "Read: Number Systems Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_77_q1",
        "title": "Quiz: Number Systems",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_77_l4",
        "title": "Watch: Algebra",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_77_l5",
        "title": "Read: Algebra Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_77_q2",
        "title": "Quiz: Algebra",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_77_l7",
        "title": "Watch: Geometry",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_77_l8",
        "title": "Read: Geometry Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_77_q3",
        "title": "Quiz: Geometry",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_77_l10",
        "title": "Watch: Measurement & Data",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_77_l11",
        "title": "Read: Measurement & Data Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_77_q4",
        "title": "Quiz: Measurement & Data",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_77_l13",
        "title": "Watch: Probability",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/t_hssL5j3I4",
        "isCompleted": false
      },
      {
        "id": "c_77_l14",
        "title": "Read: Probability Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_77_q5",
        "title": "Quiz: Probability",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_78",
    "title": "English for CLASS 12 COMMERCE",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-12-commerce",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_78_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_78_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_78_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_78_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_78_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_78_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_78_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_78_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_78_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_78_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_78_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_78_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_78_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_78_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_78_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_79",
    "title": "History for CLASS 12 ARTS",
    "description": "Comprehensive and detailed History course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "History",
    "targetClassGroup": "class-12-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🏺",
    "isFree": true,
    "lessons": [
      {
        "id": "c_79_l1",
        "title": "Watch: Ancient India",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/v3P1rEicEis",
        "isCompleted": false
      },
      {
        "id": "c_79_l2",
        "title": "Read: Ancient India Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_79_q1",
        "title": "Quiz: Ancient India",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_79_l4",
        "title": "Watch: Medieval India",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/v3P1rEicEis",
        "isCompleted": false
      },
      {
        "id": "c_79_l5",
        "title": "Read: Medieval India Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_79_q2",
        "title": "Quiz: Medieval India",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_79_l7",
        "title": "Watch: Modern India",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/v3P1rEicEis",
        "isCompleted": false
      },
      {
        "id": "c_79_l8",
        "title": "Read: Modern India Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_79_q3",
        "title": "Quiz: Modern India",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_79_l10",
        "title": "Watch: World History",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/v3P1rEicEis",
        "isCompleted": false
      },
      {
        "id": "c_79_l11",
        "title": "Read: World History Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_79_q4",
        "title": "Quiz: World History",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_79_l13",
        "title": "Watch: Historical Themes",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/v3P1rEicEis",
        "isCompleted": false
      },
      {
        "id": "c_79_l14",
        "title": "Read: Historical Themes Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_79_q5",
        "title": "Quiz: Historical Themes",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_80",
    "title": "Geography for CLASS 12 ARTS",
    "description": "Comprehensive and detailed Geography course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Geography",
    "targetClassGroup": "class-12-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "🗺️",
    "isFree": true,
    "lessons": [
      {
        "id": "c_80_l1",
        "title": "Watch: Physical Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mKk3o0mE3nQ",
        "isCompleted": false
      },
      {
        "id": "c_80_l2",
        "title": "Read: Physical Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_80_q1",
        "title": "Quiz: Physical Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_80_l4",
        "title": "Watch: Human Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mKk3o0mE3nQ",
        "isCompleted": false
      },
      {
        "id": "c_80_l5",
        "title": "Read: Human Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_80_q2",
        "title": "Quiz: Human Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_80_l7",
        "title": "Watch: Resources and Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mKk3o0mE3nQ",
        "isCompleted": false
      },
      {
        "id": "c_80_l8",
        "title": "Read: Resources and Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_80_q3",
        "title": "Quiz: Resources and Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_80_l10",
        "title": "Watch: Map Work",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mKk3o0mE3nQ",
        "isCompleted": false
      },
      {
        "id": "c_80_l11",
        "title": "Read: Map Work Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_80_q4",
        "title": "Quiz: Map Work",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_80_l13",
        "title": "Watch: Environmental Geography",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/mKk3o0mE3nQ",
        "isCompleted": false
      },
      {
        "id": "c_80_l14",
        "title": "Read: Environmental Geography Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_80_q5",
        "title": "Quiz: Environmental Geography",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_81",
    "title": "Political Science for CLASS 12 ARTS",
    "description": "Comprehensive and detailed Political Science course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Political Science",
    "targetClassGroup": "class-12-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "⚖️",
    "isFree": true,
    "lessons": [
      {
        "id": "c_81_l1",
        "title": "Watch: Political Theory",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/-E4G0w3A5_E",
        "isCompleted": false
      },
      {
        "id": "c_81_l2",
        "title": "Read: Political Theory Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_81_q1",
        "title": "Quiz: Political Theory",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_81_l4",
        "title": "Watch: Indian Constitution",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/-E4G0w3A5_E",
        "isCompleted": false
      },
      {
        "id": "c_81_l5",
        "title": "Read: Indian Constitution Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_81_q2",
        "title": "Quiz: Indian Constitution",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_81_l7",
        "title": "Watch: Global Politics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/-E4G0w3A5_E",
        "isCompleted": false
      },
      {
        "id": "c_81_l8",
        "title": "Read: Global Politics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_81_q3",
        "title": "Quiz: Global Politics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_81_l10",
        "title": "Watch: Political Institutions",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/-E4G0w3A5_E",
        "isCompleted": false
      },
      {
        "id": "c_81_l11",
        "title": "Read: Political Institutions Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_81_q4",
        "title": "Quiz: Political Institutions",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_81_l13",
        "title": "Watch: Public Administration",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/-E4G0w3A5_E",
        "isCompleted": false
      },
      {
        "id": "c_81_l14",
        "title": "Read: Public Administration Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_81_q5",
        "title": "Quiz: Public Administration",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_82",
    "title": "Economics for CLASS 12 ARTS",
    "description": "Comprehensive and detailed Economics course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Economics",
    "targetClassGroup": "class-12-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📉",
    "isFree": true,
    "lessons": [
      {
        "id": "c_82_l1",
        "title": "Watch: Microeconomics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_82_l2",
        "title": "Read: Microeconomics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_82_q1",
        "title": "Quiz: Microeconomics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_82_l4",
        "title": "Watch: Macroeconomics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_82_l5",
        "title": "Read: Macroeconomics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_82_q2",
        "title": "Quiz: Macroeconomics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_82_l7",
        "title": "Watch: Indian Economic Development",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_82_l8",
        "title": "Read: Indian Economic Development Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_82_q3",
        "title": "Quiz: Indian Economic Development",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_82_l10",
        "title": "Watch: Statistics for Economics",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_82_l11",
        "title": "Read: Statistics for Economics Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_82_q4",
        "title": "Quiz: Statistics for Economics",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_82_l13",
        "title": "Watch: Public Finance",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/3ez10ADR_gM",
        "isCompleted": false
      },
      {
        "id": "c_82_l14",
        "title": "Read: Public Finance Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_82_q5",
        "title": "Quiz: Public Finance",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_83",
    "title": "English for CLASS 12 ARTS",
    "description": "Comprehensive and detailed English course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "English",
    "targetClassGroup": "class-12-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📝",
    "isFree": true,
    "lessons": [
      {
        "id": "c_83_l1",
        "title": "Watch: Reading Comprehension",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_83_l2",
        "title": "Read: Reading Comprehension Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_83_q1",
        "title": "Quiz: Reading Comprehension",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_83_l4",
        "title": "Watch: Grammar & Vocab",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_83_l5",
        "title": "Read: Grammar & Vocab Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_83_q2",
        "title": "Quiz: Grammar & Vocab",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_83_l7",
        "title": "Watch: Creative Writing",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_83_l8",
        "title": "Read: Creative Writing Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_83_q3",
        "title": "Quiz: Creative Writing",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_83_l10",
        "title": "Watch: Literature",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_83_l11",
        "title": "Read: Literature Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_83_q4",
        "title": "Quiz: Literature",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_83_l13",
        "title": "Watch: Conversation",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/yqA7vOeb2_M",
        "isCompleted": false
      },
      {
        "id": "c_83_l14",
        "title": "Read: Conversation Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_83_q5",
        "title": "Quiz: Conversation",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  },
  {
    "id": "c_84",
    "title": "Hindi for CLASS 12 ARTS",
    "description": "Comprehensive and detailed Hindi course specially designed. Covers 5 major chapters with video lectures, reading materials, and quizzes.",
    "subject": "Hindi",
    "targetClassGroup": "class-12-arts",
    "level": "Intermediate",
    "totalDuration": "225 mins",
    "thumbnail": "📖",
    "isFree": true,
    "lessons": [
      {
        "id": "c_84_l1",
        "title": "Watch: Vyakaran",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_84_l2",
        "title": "Read: Vyakaran Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_84_q1",
        "title": "Quiz: Vyakaran",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_84_l4",
        "title": "Watch: Sahitya",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_84_l5",
        "title": "Read: Sahitya Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_84_q2",
        "title": "Quiz: Sahitya",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_84_l7",
        "title": "Watch: Kavita",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_84_l8",
        "title": "Read: Kavita Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_84_q3",
        "title": "Quiz: Kavita",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_84_l10",
        "title": "Watch: Patra Lekhan",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_84_l11",
        "title": "Read: Patra Lekhan Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_84_q4",
        "title": "Quiz: Patra Lekhan",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      },
      {
        "id": "c_84_l13",
        "title": "Watch: Nibandh",
        "duration": "15 min",
        "type": "video",
        "content": "https://www.youtube.com/embed/s29H2Q0yoxs",
        "isCompleted": false
      },
      {
        "id": "c_84_l14",
        "title": "Read: Nibandh Notes",
        "duration": "20 min",
        "type": "pdf",
        "content": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        "isCompleted": false
      },
      {
        "id": "c_84_q5",
        "title": "Quiz: Nibandh",
        "duration": "10 min",
        "type": "quiz",
        "content": "quiz",
        "isCompleted": false
      }
    ]
  }
];

export const quizData: Record<string, { question: string; options: string[]; correctAnswer: number }[]> = {
  "c_1_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_1_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_1_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_1_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_1_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_2_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_2_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_2_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_2_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_2_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_3_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_3_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_3_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_3_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_3_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_4_q1": [
    {
      "question": "What is the core principle taught in Our Environment?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Our Environment?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Our Environment?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_4_q2": [
    {
      "question": "What is the core principle taught in Plants and Animals?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Plants and Animals?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Plants and Animals?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_4_q3": [
    {
      "question": "What is the core principle taught in Water and Air?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Water and Air?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Water and Air?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_4_q4": [
    {
      "question": "What is the core principle taught in Health and Hygiene?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Health and Hygiene?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Health and Hygiene?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_4_q5": [
    {
      "question": "What is the core principle taught in Transport?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Transport?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Transport?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_5_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_5_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_5_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_5_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_5_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_6_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_6_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_6_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_6_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_6_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_7_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_7_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_7_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_7_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_7_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_8_q1": [
    {
      "question": "What is the core principle taught in Our Environment?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Our Environment?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Our Environment?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_8_q2": [
    {
      "question": "What is the core principle taught in Plants and Animals?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Plants and Animals?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Plants and Animals?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_8_q3": [
    {
      "question": "What is the core principle taught in Water and Air?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Water and Air?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Water and Air?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_8_q4": [
    {
      "question": "What is the core principle taught in Health and Hygiene?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Health and Hygiene?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Health and Hygiene?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_8_q5": [
    {
      "question": "What is the core principle taught in Transport?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Transport?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Transport?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_9_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_9_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_9_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_9_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_9_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_10_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_10_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_10_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_10_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_10_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_11_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_11_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_11_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_11_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_11_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_12_q1": [
    {
      "question": "What is the core principle taught in Our Environment?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Our Environment?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Our Environment?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_12_q2": [
    {
      "question": "What is the core principle taught in Plants and Animals?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Plants and Animals?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Plants and Animals?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_12_q3": [
    {
      "question": "What is the core principle taught in Water and Air?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Water and Air?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Water and Air?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_12_q4": [
    {
      "question": "What is the core principle taught in Health and Hygiene?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Health and Hygiene?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Health and Hygiene?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_12_q5": [
    {
      "question": "What is the core principle taught in Transport?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Transport?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Transport?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_13_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_13_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_13_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_13_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_13_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_14_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_14_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_14_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_14_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_14_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_15_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_15_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_15_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_15_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_15_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_16_q1": [
    {
      "question": "What is the core principle taught in Our Environment?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Our Environment?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Our Environment?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_16_q2": [
    {
      "question": "What is the core principle taught in Plants and Animals?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Plants and Animals?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Plants and Animals?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_16_q3": [
    {
      "question": "What is the core principle taught in Water and Air?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Water and Air?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Water and Air?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_16_q4": [
    {
      "question": "What is the core principle taught in Health and Hygiene?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Health and Hygiene?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Health and Hygiene?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_16_q5": [
    {
      "question": "What is the core principle taught in Transport?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Transport?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Transport?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_17_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_17_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_17_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_17_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_17_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_18_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_18_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_18_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_18_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_18_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_19_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_19_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_19_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_19_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_19_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_20_q1": [
    {
      "question": "What is the core principle taught in Our Environment?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Our Environment?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Our Environment?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_20_q2": [
    {
      "question": "What is the core principle taught in Plants and Animals?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Plants and Animals?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Plants and Animals?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_20_q3": [
    {
      "question": "What is the core principle taught in Water and Air?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Water and Air?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Water and Air?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_20_q4": [
    {
      "question": "What is the core principle taught in Health and Hygiene?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Health and Hygiene?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Health and Hygiene?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_20_q5": [
    {
      "question": "What is the core principle taught in Transport?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Transport?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Transport?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_21_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_21_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_21_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_21_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_21_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_22_q1": [
    {
      "question": "What is the core principle taught in Matter and Materials?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Matter and Materials?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Matter and Materials?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_22_q2": [
    {
      "question": "What is the core principle taught in Force and Energy?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Force and Energy?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Force and Energy?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_22_q3": [
    {
      "question": "What is the core principle taught in Living Organisms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Living Organisms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Living Organisms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_22_q4": [
    {
      "question": "What is the core principle taught in Earth and Space?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Earth and Space?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Earth and Space?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_22_q5": [
    {
      "question": "What is the core principle taught in Human Body?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Human Body?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Human Body?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_23_q1": [
    {
      "question": "What is the core principle taught in History of the World?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to History of the World?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in History of the World?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_23_q2": [
    {
      "question": "What is the core principle taught in Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_23_q3": [
    {
      "question": "What is the core principle taught in Civics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Civics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Civics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_23_q4": [
    {
      "question": "What is the core principle taught in Economics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Economics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Economics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_23_q5": [
    {
      "question": "What is the core principle taught in Political Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Political Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Political Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_24_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_24_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_24_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_24_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_24_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_25_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_25_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_25_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_25_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_25_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_26_q1": [
    {
      "question": "What is the core principle taught in Programming Basics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Programming Basics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Programming Basics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_26_q2": [
    {
      "question": "What is the core principle taught in Data Structures?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Data Structures?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Data Structures?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_26_q3": [
    {
      "question": "What is the core principle taught in Algorithms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algorithms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algorithms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_26_q4": [
    {
      "question": "What is the core principle taught in Web Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Web Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Web Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_26_q5": [
    {
      "question": "What is the core principle taught in Databases?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Databases?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Databases?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_27_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_27_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_27_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_27_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_27_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_28_q1": [
    {
      "question": "What is the core principle taught in Matter and Materials?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Matter and Materials?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Matter and Materials?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_28_q2": [
    {
      "question": "What is the core principle taught in Force and Energy?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Force and Energy?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Force and Energy?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_28_q3": [
    {
      "question": "What is the core principle taught in Living Organisms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Living Organisms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Living Organisms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_28_q4": [
    {
      "question": "What is the core principle taught in Earth and Space?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Earth and Space?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Earth and Space?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_28_q5": [
    {
      "question": "What is the core principle taught in Human Body?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Human Body?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Human Body?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_29_q1": [
    {
      "question": "What is the core principle taught in History of the World?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to History of the World?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in History of the World?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_29_q2": [
    {
      "question": "What is the core principle taught in Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_29_q3": [
    {
      "question": "What is the core principle taught in Civics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Civics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Civics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_29_q4": [
    {
      "question": "What is the core principle taught in Economics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Economics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Economics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_29_q5": [
    {
      "question": "What is the core principle taught in Political Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Political Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Political Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_30_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_30_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_30_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_30_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_30_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_31_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_31_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_31_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_31_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_31_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_32_q1": [
    {
      "question": "What is the core principle taught in Programming Basics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Programming Basics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Programming Basics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_32_q2": [
    {
      "question": "What is the core principle taught in Data Structures?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Data Structures?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Data Structures?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_32_q3": [
    {
      "question": "What is the core principle taught in Algorithms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algorithms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algorithms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_32_q4": [
    {
      "question": "What is the core principle taught in Web Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Web Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Web Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_32_q5": [
    {
      "question": "What is the core principle taught in Databases?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Databases?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Databases?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_33_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_33_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_33_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_33_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_33_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_34_q1": [
    {
      "question": "What is the core principle taught in Matter and Materials?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Matter and Materials?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Matter and Materials?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_34_q2": [
    {
      "question": "What is the core principle taught in Force and Energy?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Force and Energy?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Force and Energy?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_34_q3": [
    {
      "question": "What is the core principle taught in Living Organisms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Living Organisms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Living Organisms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_34_q4": [
    {
      "question": "What is the core principle taught in Earth and Space?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Earth and Space?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Earth and Space?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_34_q5": [
    {
      "question": "What is the core principle taught in Human Body?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Human Body?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Human Body?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_35_q1": [
    {
      "question": "What is the core principle taught in History of the World?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to History of the World?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in History of the World?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_35_q2": [
    {
      "question": "What is the core principle taught in Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_35_q3": [
    {
      "question": "What is the core principle taught in Civics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Civics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Civics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_35_q4": [
    {
      "question": "What is the core principle taught in Economics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Economics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Economics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_35_q5": [
    {
      "question": "What is the core principle taught in Political Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Political Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Political Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_36_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_36_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_36_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_36_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_36_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_37_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_37_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_37_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_37_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_37_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_38_q1": [
    {
      "question": "What is the core principle taught in Programming Basics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Programming Basics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Programming Basics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_38_q2": [
    {
      "question": "What is the core principle taught in Data Structures?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Data Structures?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Data Structures?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_38_q3": [
    {
      "question": "What is the core principle taught in Algorithms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algorithms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algorithms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_38_q4": [
    {
      "question": "What is the core principle taught in Web Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Web Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Web Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_38_q5": [
    {
      "question": "What is the core principle taught in Databases?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Databases?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Databases?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_39_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_39_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_39_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_39_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_39_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_40_q1": [
    {
      "question": "What is the core principle taught in Matter and Materials?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Matter and Materials?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Matter and Materials?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_40_q2": [
    {
      "question": "What is the core principle taught in Force and Energy?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Force and Energy?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Force and Energy?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_40_q3": [
    {
      "question": "What is the core principle taught in Living Organisms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Living Organisms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Living Organisms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_40_q4": [
    {
      "question": "What is the core principle taught in Earth and Space?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Earth and Space?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Earth and Space?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_40_q5": [
    {
      "question": "What is the core principle taught in Human Body?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Human Body?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Human Body?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_41_q1": [
    {
      "question": "What is the core principle taught in History of the World?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to History of the World?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in History of the World?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_41_q2": [
    {
      "question": "What is the core principle taught in Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_41_q3": [
    {
      "question": "What is the core principle taught in Civics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Civics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Civics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_41_q4": [
    {
      "question": "What is the core principle taught in Economics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Economics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Economics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_41_q5": [
    {
      "question": "What is the core principle taught in Political Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Political Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Political Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_42_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_42_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_42_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_42_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_42_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_43_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_43_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_43_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_43_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_43_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_44_q1": [
    {
      "question": "What is the core principle taught in Programming Basics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Programming Basics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Programming Basics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_44_q2": [
    {
      "question": "What is the core principle taught in Data Structures?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Data Structures?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Data Structures?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_44_q3": [
    {
      "question": "What is the core principle taught in Algorithms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algorithms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algorithms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_44_q4": [
    {
      "question": "What is the core principle taught in Web Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Web Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Web Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_44_q5": [
    {
      "question": "What is the core principle taught in Databases?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Databases?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Databases?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_45_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_45_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_45_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_45_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_45_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_46_q1": [
    {
      "question": "What is the core principle taught in Matter and Materials?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Matter and Materials?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Matter and Materials?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_46_q2": [
    {
      "question": "What is the core principle taught in Force and Energy?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Force and Energy?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Force and Energy?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_46_q3": [
    {
      "question": "What is the core principle taught in Living Organisms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Living Organisms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Living Organisms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_46_q4": [
    {
      "question": "What is the core principle taught in Earth and Space?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Earth and Space?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Earth and Space?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_46_q5": [
    {
      "question": "What is the core principle taught in Human Body?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Human Body?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Human Body?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_47_q1": [
    {
      "question": "What is the core principle taught in History of the World?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to History of the World?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in History of the World?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_47_q2": [
    {
      "question": "What is the core principle taught in Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_47_q3": [
    {
      "question": "What is the core principle taught in Civics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Civics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Civics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_47_q4": [
    {
      "question": "What is the core principle taught in Economics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Economics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Economics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_47_q5": [
    {
      "question": "What is the core principle taught in Political Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Political Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Political Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_48_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_48_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_48_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_48_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_48_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_49_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_49_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_49_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_49_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_49_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_50_q1": [
    {
      "question": "What is the core principle taught in Programming Basics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Programming Basics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Programming Basics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_50_q2": [
    {
      "question": "What is the core principle taught in Data Structures?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Data Structures?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Data Structures?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_50_q3": [
    {
      "question": "What is the core principle taught in Algorithms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algorithms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algorithms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_50_q4": [
    {
      "question": "What is the core principle taught in Web Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Web Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Web Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_50_q5": [
    {
      "question": "What is the core principle taught in Databases?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Databases?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Databases?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_51_q1": [
    {
      "question": "What is the core principle taught in Mechanics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Mechanics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Mechanics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_51_q2": [
    {
      "question": "What is the core principle taught in Thermodynamics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Thermodynamics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Thermodynamics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_51_q3": [
    {
      "question": "What is the core principle taught in Electromagnetism?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Electromagnetism?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Electromagnetism?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_51_q4": [
    {
      "question": "What is the core principle taught in Optics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Optics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Optics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_51_q5": [
    {
      "question": "What is the core principle taught in Modern Physics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Modern Physics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Modern Physics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_52_q1": [
    {
      "question": "What is the core principle taught in Physical Chemistry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Physical Chemistry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Physical Chemistry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_52_q2": [
    {
      "question": "What is the core principle taught in Organic Chemistry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Organic Chemistry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Organic Chemistry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_52_q3": [
    {
      "question": "What is the core principle taught in Inorganic Chemistry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Inorganic Chemistry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Inorganic Chemistry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_52_q4": [
    {
      "question": "What is the core principle taught in Atomic Structure?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Atomic Structure?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Atomic Structure?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_52_q5": [
    {
      "question": "What is the core principle taught in Chemical Bonding?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Chemical Bonding?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Chemical Bonding?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_53_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_53_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_53_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_53_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_53_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_54_q1": [
    {
      "question": "What is the core principle taught in Cell Biology?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Cell Biology?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Cell Biology?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_54_q2": [
    {
      "question": "What is the core principle taught in Genetics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Genetics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Genetics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_54_q3": [
    {
      "question": "What is the core principle taught in Ecology?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Ecology?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Ecology?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_54_q4": [
    {
      "question": "What is the core principle taught in Human Physiology?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Human Physiology?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Human Physiology?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_54_q5": [
    {
      "question": "What is the core principle taught in Plant Physiology?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Plant Physiology?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Plant Physiology?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_55_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_55_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_55_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_55_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_55_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_56_q1": [
    {
      "question": "What is the core principle taught in Programming Basics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Programming Basics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Programming Basics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_56_q2": [
    {
      "question": "What is the core principle taught in Data Structures?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Data Structures?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Data Structures?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_56_q3": [
    {
      "question": "What is the core principle taught in Algorithms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algorithms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algorithms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_56_q4": [
    {
      "question": "What is the core principle taught in Web Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Web Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Web Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_56_q5": [
    {
      "question": "What is the core principle taught in Databases?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Databases?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Databases?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_57_q1": [
    {
      "question": "What is the core principle taught in Accounting Principles?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Accounting Principles?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Accounting Principles?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_57_q2": [
    {
      "question": "What is the core principle taught in Financial Statements?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Financial Statements?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Financial Statements?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_57_q3": [
    {
      "question": "What is the core principle taught in Partnership Accounts?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Partnership Accounts?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Partnership Accounts?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_57_q4": [
    {
      "question": "What is the core principle taught in Company Accounts?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Company Accounts?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Company Accounts?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_57_q5": [
    {
      "question": "What is the core principle taught in Analysis of Financial Statements?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Analysis of Financial Statements?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Analysis of Financial Statements?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_58_q1": [
    {
      "question": "What is the core principle taught in Nature of Business?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nature of Business?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nature of Business?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_58_q2": [
    {
      "question": "What is the core principle taught in Forms of Business?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Forms of Business?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Forms of Business?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_58_q3": [
    {
      "question": "What is the core principle taught in Business Environment?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Business Environment?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Business Environment?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_58_q4": [
    {
      "question": "What is the core principle taught in Management?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Management?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Management?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_58_q5": [
    {
      "question": "What is the core principle taught in Marketing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Marketing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Marketing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_59_q1": [
    {
      "question": "What is the core principle taught in Microeconomics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Microeconomics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Microeconomics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_59_q2": [
    {
      "question": "What is the core principle taught in Macroeconomics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Macroeconomics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Macroeconomics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_59_q3": [
    {
      "question": "What is the core principle taught in Indian Economic Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Indian Economic Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Indian Economic Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_59_q4": [
    {
      "question": "What is the core principle taught in Statistics for Economics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Statistics for Economics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Statistics for Economics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_59_q5": [
    {
      "question": "What is the core principle taught in Public Finance?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Public Finance?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Public Finance?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_60_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_60_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_60_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_60_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_60_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_61_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_61_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_61_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_61_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_61_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_62_q1": [
    {
      "question": "What is the core principle taught in Ancient India?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Ancient India?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Ancient India?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_62_q2": [
    {
      "question": "What is the core principle taught in Medieval India?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Medieval India?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Medieval India?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_62_q3": [
    {
      "question": "What is the core principle taught in Modern India?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Modern India?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Modern India?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_62_q4": [
    {
      "question": "What is the core principle taught in World History?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to World History?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in World History?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_62_q5": [
    {
      "question": "What is the core principle taught in Historical Themes?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Historical Themes?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Historical Themes?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_63_q1": [
    {
      "question": "What is the core principle taught in Physical Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Physical Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Physical Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_63_q2": [
    {
      "question": "What is the core principle taught in Human Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Human Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Human Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_63_q3": [
    {
      "question": "What is the core principle taught in Resources and Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Resources and Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Resources and Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_63_q4": [
    {
      "question": "What is the core principle taught in Map Work?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Map Work?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Map Work?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_63_q5": [
    {
      "question": "What is the core principle taught in Environmental Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Environmental Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Environmental Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_64_q1": [
    {
      "question": "What is the core principle taught in Political Theory?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Political Theory?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Political Theory?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_64_q2": [
    {
      "question": "What is the core principle taught in Indian Constitution?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Indian Constitution?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Indian Constitution?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_64_q3": [
    {
      "question": "What is the core principle taught in Global Politics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Global Politics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Global Politics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_64_q4": [
    {
      "question": "What is the core principle taught in Political Institutions?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Political Institutions?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Political Institutions?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_64_q5": [
    {
      "question": "What is the core principle taught in Public Administration?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Public Administration?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Public Administration?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_65_q1": [
    {
      "question": "What is the core principle taught in Microeconomics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Microeconomics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Microeconomics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_65_q2": [
    {
      "question": "What is the core principle taught in Macroeconomics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Macroeconomics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Macroeconomics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_65_q3": [
    {
      "question": "What is the core principle taught in Indian Economic Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Indian Economic Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Indian Economic Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_65_q4": [
    {
      "question": "What is the core principle taught in Statistics for Economics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Statistics for Economics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Statistics for Economics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_65_q5": [
    {
      "question": "What is the core principle taught in Public Finance?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Public Finance?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Public Finance?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_66_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_66_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_66_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_66_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_66_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_67_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_67_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_67_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_67_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_67_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_68_q1": [
    {
      "question": "What is the core principle taught in Mechanics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Mechanics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Mechanics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_68_q2": [
    {
      "question": "What is the core principle taught in Thermodynamics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Thermodynamics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Thermodynamics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_68_q3": [
    {
      "question": "What is the core principle taught in Electromagnetism?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Electromagnetism?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Electromagnetism?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_68_q4": [
    {
      "question": "What is the core principle taught in Optics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Optics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Optics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_68_q5": [
    {
      "question": "What is the core principle taught in Modern Physics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Modern Physics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Modern Physics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_69_q1": [
    {
      "question": "What is the core principle taught in Physical Chemistry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Physical Chemistry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Physical Chemistry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_69_q2": [
    {
      "question": "What is the core principle taught in Organic Chemistry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Organic Chemistry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Organic Chemistry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_69_q3": [
    {
      "question": "What is the core principle taught in Inorganic Chemistry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Inorganic Chemistry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Inorganic Chemistry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_69_q4": [
    {
      "question": "What is the core principle taught in Atomic Structure?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Atomic Structure?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Atomic Structure?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_69_q5": [
    {
      "question": "What is the core principle taught in Chemical Bonding?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Chemical Bonding?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Chemical Bonding?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_70_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_70_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_70_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_70_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_70_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_71_q1": [
    {
      "question": "What is the core principle taught in Cell Biology?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Cell Biology?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Cell Biology?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_71_q2": [
    {
      "question": "What is the core principle taught in Genetics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Genetics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Genetics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_71_q3": [
    {
      "question": "What is the core principle taught in Ecology?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Ecology?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Ecology?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_71_q4": [
    {
      "question": "What is the core principle taught in Human Physiology?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Human Physiology?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Human Physiology?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_71_q5": [
    {
      "question": "What is the core principle taught in Plant Physiology?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Plant Physiology?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Plant Physiology?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_72_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_72_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_72_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_72_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_72_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_73_q1": [
    {
      "question": "What is the core principle taught in Programming Basics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Programming Basics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Programming Basics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_73_q2": [
    {
      "question": "What is the core principle taught in Data Structures?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Data Structures?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Data Structures?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_73_q3": [
    {
      "question": "What is the core principle taught in Algorithms?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algorithms?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algorithms?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_73_q4": [
    {
      "question": "What is the core principle taught in Web Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Web Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Web Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_73_q5": [
    {
      "question": "What is the core principle taught in Databases?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Databases?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Databases?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_74_q1": [
    {
      "question": "What is the core principle taught in Accounting Principles?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Accounting Principles?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Accounting Principles?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_74_q2": [
    {
      "question": "What is the core principle taught in Financial Statements?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Financial Statements?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Financial Statements?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_74_q3": [
    {
      "question": "What is the core principle taught in Partnership Accounts?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Partnership Accounts?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Partnership Accounts?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_74_q4": [
    {
      "question": "What is the core principle taught in Company Accounts?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Company Accounts?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Company Accounts?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_74_q5": [
    {
      "question": "What is the core principle taught in Analysis of Financial Statements?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Analysis of Financial Statements?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Analysis of Financial Statements?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_75_q1": [
    {
      "question": "What is the core principle taught in Nature of Business?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nature of Business?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nature of Business?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_75_q2": [
    {
      "question": "What is the core principle taught in Forms of Business?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Forms of Business?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Forms of Business?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_75_q3": [
    {
      "question": "What is the core principle taught in Business Environment?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Business Environment?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Business Environment?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_75_q4": [
    {
      "question": "What is the core principle taught in Management?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Management?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Management?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_75_q5": [
    {
      "question": "What is the core principle taught in Marketing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Marketing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Marketing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_76_q1": [
    {
      "question": "What is the core principle taught in Microeconomics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Microeconomics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Microeconomics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_76_q2": [
    {
      "question": "What is the core principle taught in Macroeconomics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Macroeconomics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Macroeconomics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_76_q3": [
    {
      "question": "What is the core principle taught in Indian Economic Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Indian Economic Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Indian Economic Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_76_q4": [
    {
      "question": "What is the core principle taught in Statistics for Economics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Statistics for Economics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Statistics for Economics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_76_q5": [
    {
      "question": "What is the core principle taught in Public Finance?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Public Finance?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Public Finance?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_77_q1": [
    {
      "question": "What is the core principle taught in Number Systems?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Number Systems?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Number Systems?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_77_q2": [
    {
      "question": "What is the core principle taught in Algebra?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Algebra?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Algebra?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_77_q3": [
    {
      "question": "What is the core principle taught in Geometry?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Geometry?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Geometry?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_77_q4": [
    {
      "question": "What is the core principle taught in Measurement & Data?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Measurement & Data?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Measurement & Data?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_77_q5": [
    {
      "question": "What is the core principle taught in Probability?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Probability?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Probability?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_78_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_78_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_78_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_78_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_78_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_79_q1": [
    {
      "question": "What is the core principle taught in Ancient India?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Ancient India?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Ancient India?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_79_q2": [
    {
      "question": "What is the core principle taught in Medieval India?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Medieval India?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Medieval India?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_79_q3": [
    {
      "question": "What is the core principle taught in Modern India?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Modern India?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Modern India?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_79_q4": [
    {
      "question": "What is the core principle taught in World History?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to World History?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in World History?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_79_q5": [
    {
      "question": "What is the core principle taught in Historical Themes?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Historical Themes?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Historical Themes?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_80_q1": [
    {
      "question": "What is the core principle taught in Physical Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Physical Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Physical Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_80_q2": [
    {
      "question": "What is the core principle taught in Human Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Human Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Human Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_80_q3": [
    {
      "question": "What is the core principle taught in Resources and Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Resources and Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Resources and Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_80_q4": [
    {
      "question": "What is the core principle taught in Map Work?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Map Work?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Map Work?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_80_q5": [
    {
      "question": "What is the core principle taught in Environmental Geography?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Environmental Geography?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Environmental Geography?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_81_q1": [
    {
      "question": "What is the core principle taught in Political Theory?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Political Theory?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Political Theory?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_81_q2": [
    {
      "question": "What is the core principle taught in Indian Constitution?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Indian Constitution?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Indian Constitution?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_81_q3": [
    {
      "question": "What is the core principle taught in Global Politics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Global Politics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Global Politics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_81_q4": [
    {
      "question": "What is the core principle taught in Political Institutions?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Political Institutions?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Political Institutions?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_81_q5": [
    {
      "question": "What is the core principle taught in Public Administration?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Public Administration?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Public Administration?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_82_q1": [
    {
      "question": "What is the core principle taught in Microeconomics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Microeconomics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Microeconomics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_82_q2": [
    {
      "question": "What is the core principle taught in Macroeconomics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Macroeconomics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Macroeconomics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_82_q3": [
    {
      "question": "What is the core principle taught in Indian Economic Development?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Indian Economic Development?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Indian Economic Development?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_82_q4": [
    {
      "question": "What is the core principle taught in Statistics for Economics?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Statistics for Economics?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Statistics for Economics?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_82_q5": [
    {
      "question": "What is the core principle taught in Public Finance?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Public Finance?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Public Finance?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_83_q1": [
    {
      "question": "What is the core principle taught in Reading Comprehension?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Reading Comprehension?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Reading Comprehension?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_83_q2": [
    {
      "question": "What is the core principle taught in Grammar & Vocab?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Grammar & Vocab?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Grammar & Vocab?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_83_q3": [
    {
      "question": "What is the core principle taught in Creative Writing?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Creative Writing?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Creative Writing?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_83_q4": [
    {
      "question": "What is the core principle taught in Literature?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Literature?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Literature?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_83_q5": [
    {
      "question": "What is the core principle taught in Conversation?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Conversation?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Conversation?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_84_q1": [
    {
      "question": "What is the core principle taught in Vyakaran?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Vyakaran?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Vyakaran?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_84_q2": [
    {
      "question": "What is the core principle taught in Sahitya?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Sahitya?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Sahitya?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_84_q3": [
    {
      "question": "What is the core principle taught in Kavita?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Kavita?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Kavita?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_84_q4": [
    {
      "question": "What is the core principle taught in Patra Lekhan?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Patra Lekhan?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Patra Lekhan?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ],
  "c_84_q5": [
    {
      "question": "What is the core principle taught in Nibandh?",
      "options": [
        "Understanding basics",
        "Memorizing facts",
        "Practical application",
        "All of the above"
      ],
      "correctAnswer": 3
    },
    {
      "question": "Which scenario best applies to Nibandh?",
      "options": [
        "Daily life problem solving",
        "Writing an essay",
        "Only for examinations",
        "Historical analysis"
      ],
      "correctAnswer": 0
    },
    {
      "question": "How many sub-topics were covered in Nibandh?",
      "options": [
        "3 main sub-topics",
        "Only 1",
        "More than 5",
        "None"
      ],
      "correctAnswer": 0
    }
  ]
};

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
