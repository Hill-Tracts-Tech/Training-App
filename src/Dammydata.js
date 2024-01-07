// coursesData.js
export const courses = [
  {
    id: 1,
    title: "Basic Computer",
    description: "Learn the basics of computer operation.",
    category: "Basic Computer",
    image:
      "https://1.bp.blogspot.com/-Vb8NI3nE7AU/XpQW6-Oj5DI/AAAAAAAAAc0/5CtbDPCyxmA-atH-k6aSbh7cnfkV5fTawCLcBGAsYHQ/s1600/Components%2Bof%2BComputer%2B%2528Computer%2BParts%2529%2B-%2Bwww.tutorialsmate.com.png",
  },
  {
    id: 2,
    title: "MS Office",
    description: "Master Microsoft Office applications.",
    category: "MS Office",
    image:
      "https://mobiletrans.wondershare.com/images/article/transfer-microsoft-office-to-another-computer-1.jpg",
  },
  {
    id: 3,
    title: "Advanced MS Office",
    description: "Become an expert in MS Office tools.",
    category: "Advanced MS Office",
    image:
      "https://tutorialsocean.com/wp-content/uploads/2018/04/AdvanceExcel2016.jpg",
  },
];

// Facilities data
import trainer from "./assets/icons/trainer.png";
import classes from "./assets/icons/classes.png";
import project from "./assets/icons/liveProject.png";
// import job from "./assets/icons/job.png";
import certification from "./assets/icons/certification.png";
import portal from "./assets/icons/studentPortal.png";
import timing from "./assets/icons/flexibleTime.png";
import fees from "./assets/icons/tutionfees.png";
import wifi from "./assets/icons/freeWifi.png";
export const facilities = [
  {
    id: 1,
    icon: `${trainer}`,
    title: "Well Qualified Trainers",
    description:
      "All our trainers are well qualified professionals who have years of working experience in the Web Industry",
  },
  {
    id: 2,
    icon: `${classes}`,
    title: "One On One Classes",
    description:
      "We provide special attention to each and every one of our students to understand and solve their problem.",
  },
  {
    id: 3,
    icon: `${project}`,
    title: "Live Project Based Training",
    description:
      "Students of our institute are trained to work on Live projects for real clients",
  },
  // {
  //   id: 4,
  //   icon: `${job}`,
  //   title: "100% Job Assistance",
  //   description:
  //     "At the end of the course, all our students are assured 100% job placement assistance.",
  // },
  {
    id: 5,
    icon: `${certification}`,
    title: "Certification",
    description:
      "Once you are successfully through the course, you will be awarded certificate from ORION COMPUTER INSTITUTE.",
  },
  {
    id: 6,
    icon: `${portal}`,
    title: "Students Portal",
    description:
      "We have dedicated student portal where you get course material, documentation and instant help from trainers and fellow students.",
  },
  {
    id: 7,
    icon: `${timing}`,
    title: "Flexible Timing",
    description:
      "Our Students can choose their own timing. If the slot is free they will be provided the seat. Students can also opt for extra classes as and when applicable.",
  },
  {
    id: 8,
    icon: ` ${fees}`,
    title: "Affordable Tuition Fees",
    description:
      "Tuition fees of our institute are the cheapest when compared to similar training center",
  },
  {
    id: 9,
    icon: `${wifi}`,
    title: "Free Wi-Fi Facilities",
    description:
      "We provide free Wi-Fi classroom besides High Speed Broadband Connection to our students.",
  },
];

//How to join

import contact from "./assets/icons/contactUs.png";
import visit from "./assets/icons/visitUs.png";
import admission from "./assets/icons/admission.png";
export const joinSteps = [
  {
    id: 1,
    icon: `${contact}`,
    title: "Contact Us",
    description:
      "Get in touch with us through phone, contact form or social media.",
  },
  {
    id: 2,
    icon: `${visit}`,
    title: "Visit Us",
    description:
      "Visit our institute and attend our free consultancy to join us.",
  },
  {
    id: 3,
    icon: `${admission}`,
    title: "Admission",
    description: "Set up an admission date and start your classes.",
  },
];

// Course List

import it from "./assets/icons/advanceDeploma.webp";
import graphics from "./assets/icons/graphicsDesign.webp";
import web from "./assets/icons/websiteDesign.webp";

export const courseList = [
  {
    id: 1,
    icon: it,
    title: "Advanced Diploma In IT",
    basePrice: 2000,
    discountPrice: 1000,
    classes: ["2 classes/week", "1½+ hour classes", "1 student 1 computer"],
    fees: "Admission and exam fees",
  },
  {
    id: 2,
    icon: graphics,
    title: "Graphics Design Training",
    basePrice: 6500,
    discountPrice: 3200,
    classes: ["3 classes/week", "2+ hour classes", "1 student 1 computer"],
    fees: "Admission fees",
  },
  {
    id: 3,
    icon: web,
    title: "Website Design Training",
    basePrice: 7000,
    discountPrice: 3500,
    classes: ["3 classes/week", "2+ hour classes", "1 student 1 computer"],
    fees: "Admission fees",
  },
];

// Fake data for results
export const results = [
  {
    id: 1,
    name: "John Doe",
    studentId: "12345",
    courseName: "Basic Computer",
    resultStatus: "Pass",
    totalMarks: 90,
  },
  {
    id: 2,
    name: "Jane Smith",
    studentId: "67890",
    courseName: "Advance Computer",
    resultStatus: "Fail",
    totalMarks: 60,
  },
  {
    id: 3,
    name: "Talimul Islam",
    studentId: "1256",
    courseName: "Advance MS Office",
    resultStatus: "Pass",
    totalMarks: 80,
  },
  {
    id: 4,
    name: "Rasel Ahmed",
    studentId: "9894",
    courseName: "Advance Computer",
    resultStatus: "Pass",
    totalMarks: 97,
  },
  {
    id: 5,
    name: "Uhai Mong",
    studentId: "8585",
    courseName: "Basic Computer",
    resultStatus: "Pass",
    totalMarks: 97,
  },
  {
    id: 6,
    name: "John Sen",
    studentId: "2546",
    courseName: "Fiver Freelancing",
    resultStatus: "Pass",
    totalMarks: 92,
  },
];
// Fake data for Students
export const students = [
  {
    id: 1,
    name: "John Doe",
    courseId: "1211",
    batch: "1st",
    studentId: "12345",
    courseName: "Basic Computer",
    address: "abc,Chattogram",
    email: "user@gamil.com",
    phone: "01512565878",
  },
  {
    id: 2,
    name: "Jane Smith",
    courseId: "1211",
    batch: "1st",
    studentId: "67890",
    courseName: "Advance Computer",
    address: "abc,Chattogram",
    email: "user@gamil.com",
    phone: "01512565878",
  },
  {
    id: 3,
    name: "Talimul Islam",
    courseId: "1211",
    batch: "3rd",
    studentId: "1256",
    courseName: "Advance MS Office",
    address: "abc,Chattogram",
    email: "user@gamil.com",
    phone: "01512565878",
  },
  {
    id: 4,
    name: "Rasel Ahmed",
    courseId: "1211",
    batch: "1st",
    studentId: "9894",
    courseName: "Advance Computer",
    address: "abc,Chattogram",
    email: "user@gamil.com",
    phone: "01512565878",
  },
  {
    id: 5,
    name: "Uhai Mong",
    courseId: "1211",
    batch: "1st",
    studentId: "8585",
    courseName: "Basic Computer",
    address: "abc,Chattogram",
    email: "user@gamil.com",
    phone: "01512565878",
  },
  {
    id: 6,
    name: "John Sen",
    courseId: "1211",
    batch: "2nd",
    studentId: "2546",
    courseName: "Fiver Freelancing",
    address: "abc,Chattogram",
    email: "user@gamil.com",
    phone: "01512565878",
  },
];

// Fake Teachers data
import teacher1 from "./assets/img/vision.png";
export const teachers = [
  {
    name: "John Doe",
    designation: "Math Teacher",
    education: "Ph.D. in Mathematics",
    description:
      "Passionate about teaching mathematics and inspiring students.",
    image: teacher1,
  },
  {
    name: "Jane Smith",
    designation: "Science Teacher",
    education: "M.Sc. in Physics",
    description: "Dedicated to making science exciting for young minds.",
    image: teacher1,
  },
  {
    name: "Jane Smith",
    designation: "Science Teacher",
    education: "M.Sc. in Physics",
    description: "Dedicated to making science exciting for young minds.",
    image: teacher1,
  },
  {
    name: "Jane Smith",
    designation: "Science Teacher",
    education: "M.Sc. in Physics",
    description: "Dedicated to making science exciting for young minds.",
    image: teacher1,
  },
];
// course Overview
import icon1 from "./assets/icons/operatingSystem.png";
import icon2 from "./assets/icons/basicComputerHardware.png";
import icon3 from "./assets/icons/basicComputerSoftware.png";
import icon4 from "./assets/icons/internetUsage.png";
import icon5 from "./assets/icons/detailsMs.png";
export const CoursesOverview = [
  {
    icon: icon1,
    title: "DOS And Intro To Operating Systems",
    description:
      "Jump start your computer knowledge with our in-depth introduction to DOS and types of Operating systems and their usages",
  },
  {
    icon: icon2,
    title: "Basics Of Computer Hardware",
    description:
      "Get an basic knowledge of what a computer is made up of. Learn about the types of computers used in various operations.",
  },
  {
    icon: icon3,
    title: "Basics Of Computer Software",
    description:
      "Learn how a computer operates by under-standing how a computer operates and types of softwares used for different tasks.",
  },
  {
    icon: icon4,
    title: "State Of Internet And Its Usage",
    description:
      "Understand the hows and whats of using internet. Learn to use browsers, emails, web apps. Get an in-depth knowledge about their advantages.",
  },
  {
    icon: icon5,
    title: "Detailed Introduction To MS Office",
    description:
      "Learn to use MS Word, MS Powerpoint, MS Excel and MS Access. Get an in-depth knowledge about their usefulness in day to day life.",
  },
];
export const CourseModulesData = [
  {
    icon: icon1,
    title: "Introduction To Operating Systems",
    lessons: [
      "Different types of OS and their usage",
      "Learning the use of mouse and keyboard",
      "Basics of Microsoft DOS",
      "Command Line and its usage",
      "Introduction to Microsoft Windows",
      "Overview of functionalities and characteristics",
      "Understanding files and folders",
      "Understanding the tools in windows",
      "Creating, Opening and saving files",
    ],
  },
  {
    icon: icon2,
    title: "Basics Of Computer Hardware",
    lessons: [
      "Understanding components of a computer",
      "Looking inside the computerWorking with connectors and connections",
      "Exploring the motherboard",
      "Working with internal and external storage",
      "Adding RAMs",
      "Configuring the graphics card",
      "Monitors and touch screens",
      "Accessing and setting up audio",
      "Connecting a UPS and its usage",
      "Making network connections",
      "Troubleshoot common hardware problems",
    ],
  },
  {
    icon: icon3,
    title: "Basics Of Computer Software",
    lessons: [
      "Basics of Computer Software and its creation",
      "Types and usages of software",
      "Alternatives of commonly used software",
      "What is a virus and how to fight them",
      "Play musics, videos, draw, note, calculate etc.",
      "Recognize how to apply account security.",
      "Recall how to configure ",
      "Windows update.",
      "Analyze the steps for backing up a PC.",
      "Shortcuts and useful tips",
    ],
  },
  {
    icon: icon4,
    title: "Internet And Its Usage",
    lessons: [
      "Basics of using the Internet.",
      "Things you can do online.",
      "How to get online",
      "Networking Basics",
      "Using different types of Web Browser",
      "Understanding Hyperlinks and URLs",
      "Downloading and Uploading",
      "Using Search Engines",
      "Email and Email providers",
      "Copyrights, Trademarks and Plagiarism",
    ],
  },
  {
    icon: icon5,
    title: " Microsoft Office (MS Office)",
    lessons: [
      "MS Word Introduction",
      "MS Word Page Layout Setup",
      "MS Word Shape Creation, Image Placement",
      "MS Word Table Creation",
      "MS Word Mail Merge",
      "MS Word Macro",
      "MS Word Print a Page",
      "MS Excel Introduction",
      "MS Excel Formulas",
      "MS Excel Conditional Formatting",
      "MS Excel Table Formatting",
      "MS Excel Filter and Sorting",
      "MS Excel Graph and Chart",
      "MS PowerPoint Introduction",
      "MS PowerPoint Slide Set Up",
      "MS PowerPoint Making Presentation",
      "MS PowerPoint Applying Advanced Animation",
      "MS Access Introduction",
      "MS Access Database Creation",
      "MS Access Table Creation",
      "MS Access Form Making From a Table",
      "MS Access Creation of Report and Printing",
      "MS Access Concept of Query",
      "MS Access Relationship between Tables",
    ],
  },
];

// Slider data

import img1 from "./assets/sliderImage/slider1.jpg";
import img2 from "./assets/sliderImage/slider2.jpg";
import img3 from "./assets/sliderImage/slider3.jpg";
import img4 from "./assets/sliderImage/slider4.jpg";

export const imgURL = [img1, img2, img3, img4];

// Result data

// export const resultData = [
//   {
//     code: "70304",
//     centerName: "ORION SELAI PROSHIKHON CENTER",
//     courses: [
//       {
//         courseTitle: "Basic Computer",
//         batches: [
//           {
//             batch: 1,
//             pdfUrl: "https://example.com/dummy-pdf1.pdf",
//           },
//           {
//             batch: 2,
//             pdfUrl: "https://example.com/dummy-pdf2.pdf",
//           },
//         ],
//       },
//       {
//         courseTitle: "MS Office",
//         batches: [
//           {
//             batch: 1,
//             pdfUrl: "https://example.com/dummy-pdf3.pdf",
//           },
//           {
//             batch: 2,
//             pdfUrl: "https://example.com/dummy-pdf4.pdf",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     code: "70262",
//     centerName: "ORION COMPUTER INSTITUTE",
//     courses: [
//       {
//         courseTitle: "Advance Computer OS",
//         batches: [
//           {
//             batch: 1,
//             pdfUrl: "https://example.com/dummy-pdf5.pdf",
//           },
//           {
//             batch: 2,
//             pdfUrl: "https://example.com/dummy-pdf6.pdf",
//           },
//         ],
//       },
//       {
//         courseTitle: "Networking",
//         batches: [
//           {
//             batch: 1,
//             pdfUrl: "https://example.com/dummy-pdf7.pdf",
//           },
//           {
//             batch: 2,
//             pdfUrl: "https://example.com/dummy-pdf8.pdf",
//           },
//         ],
//       },
//       {
//         courseTitle: "Database Programming",
//         batches: [
//           {
//             batch: 1,
//             pdfUrl: "https://example.com/dummy-pdf9.pdf",
//           },
//           {
//             batch: 2,
//             pdfUrl: "https://example.com/dummy-pdf10.pdf",
//           },
//         ],
//       },
//     ],
//   },
// ];

export const resultData = [
  {
    id: 1,
    examName: "Basic computer operation",
    pdfURL: "basic_computer_operation_result.pdf",
    published: "6/11/2023",
  },
  {
    id: 2,
    examName: "Advance Microsoft Office application",
    pdfURL: "advance_ms_office_application",
    published: "8/11/2023",
  },
  {
    id: 3,
    examName: "Bigener to advance Graphics Design",
    pdfURL: "advance_graphics_design.pdf",
    published: "14/11/2023",
  },
];
