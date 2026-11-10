// Required component 1: Profile / Welcome
export const profile = {
  name: "Priyavrata Deb",
  firstName: "Priyavrata",
  headline: "First-year Computer Engineering student at Georgia Tech",
  welcome:
    "Welcome to my ePortfolio! I am a first-year Computer Engineering student at Georgia Tech, passionate about software development and systems design. This site showcases my projects, experiences, and aspirations in the field of computer engineering.",
  headshot: "images/professional_headshot.jpeg", 
  headshotAlt: "Headshot of Priyavrata Deb", 
  email: "priyavratadeb123@gmail.com",
  linkedin: "https://www.linkedin.com/in/priyavrata-deb-8a3252354/", 
  github: "https://github.com/priyavratadeb", 
  location: "Lilburn, Georgia", 
  resumeFile: "Deb_Priyavrata_Resume.pdf", 
};

// Required component 2: Biography / About Me
export const about = {
  heading: "About Me",
  paragraphs: [
    "I was born in Atlanta, Georgia and grew up in Lilburn, Georgia. I have always been fascinated by technology, which led me to pursue a degree in Computer Engineering at Georgia Tech. By pursuing a degree in the field of ECE, I hope to be able to impact the world positively by creating innovative solutions to the world's problems.",
    "Currently, I'm working on building a strong foundation for myself by involving myself in clubs and organizations here at Georgia Tech. I'm currently exploring the various courses and research opportunities available at Georgia Tech to find my passion in the field. I am also actively seeking internships and co-op opportunities to learn and apply my knowledge in real-world scenarios.",
    "Outside of the field of ECE, I enjoy watching and playing soccer with my friends, spending time with my family and friends, and playing video games. I also enjoy learning about new cultures, foods, and languages, and I would love to explore the world and experience different cultures in the future. Fun fact: I'm proficient in 3 languages: English, Bengali, and Spanish.",
  ],
  highlights: [
    {
      icon: "cpu",
      title: "Technical Skills",
      points: [
        "Experienced in programming languages including Python, Java, and JavaScript",
        "Developing C/C++ skills through coursework and personal projects",
      ],
    },
    {
      icon: "users",
      title: "Leadership",
      points: [
        "Held leadership roles in Spanish Honor Society, Beta Club, Mu Alpha Theta, Key Club, and Computer Science Honor Society",
        "Participated in teams for the Technology Student Association at state and national levels",
      ],
    },
    {
      icon: "lightbulb",
      title: "Creativity",
      points: [
        "Organized community service and schoolwide social events",
        "Managed events with 100+ attendees through student organizations",
      ],
    },
  ],
};

// Required component 3: Resume
export const resume = {
  heading: "Resume",
  summary:
    "Here's a link and a downloadable version of my resume.",
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "B.S. in Computer Engineering",
      dates: "Aug 2026 - May 2030",
      details: "Courses: Linear Algebra, Multivariable Calculus, Intro to Object-Oriented Programming, Intro to Computing",
    },
  ],
  experience: [
    {
      role: "Office Aide",
      org: "Parkview High School",
      dates: "August - May 2026",
      bullets: [
        "Course where students can work on an on-campus office to gain valuable work experience.",
        "Tracked and managed $30,000+ of tech inventory",
        "Experience with Raspberry Pi systems and using terminal commands",
      ],
    },
  ],
};

// Required component 4: Career goals
export const goals = {
  heading: "Career Goals",
  intro:
    "I aspire to become a hardware engineer specifically dealing with VLSI design and embedded systems. My goal is to work on designing and developing innovative hardware solutions that can have a positive impact on society.",
  steps: [
    {
      label: "Now",
      title: "Build Foundations",
      text: "For my first year at Georgia Tech, I am focusing on taking core classes such as CS 1332 Data Structures and Algorithms and ECE 2020 Digital System Design. I am also exploring clubs such as Hytech Racing.",
    },
    {
      label: "Next",
      title: "Gain Experience",
      text: "With core classes completed, I will focus on gaining hands-on experience through internships and research opportunities. I will also continue making personal projects and taking relevant courses to further develop my skills.",
    },
    {
      label: "Then",
      title: "Specialize",
      text: "After gaining experience, I will focus on specializing in what interests me the most in the field of ECE. I will take advanced courses and work on projects that align with my interests, and I will seek out mentorship from professionals in the field.",
    },
    {
      label: "Long term",
      title: "Career Impact",
      text: "After graduation, I aspire to work in a leading technology company where I can contribute to the development of innovative hardware solutions. My long-term goal is to make a positive impact on society through my work in the field of ECE by building connections and gaining experience in the field.",
    },
  ],
};

export const skills = [
  { name: "Python", category: "Programming" },
  { name: "C / C++", category: "Programming" },
  { name: "Java", category: "Programming" },
  { name: "JavaScript", category: "Programming" },
  { name: "C#", category: "Programming" },
  { name: "Raspberry Pi", category: "Hardware & Lab" },
  { name: "ESP32", category: "Hardware & Lab" },
  { name: "Arduino Uno", category: "Hardware & Lab" },
  { name: "Git / GitHub", category: "Tools" },
  { name: "Unity", category: "Tools" },
  { name: "Arduino IDE/VS Code", category: "Tools" },
  { name: "Altium Designer", category: "Tools" },
  { name: "Microsoft Office", category: "Tools" },
  { name: "Teamwork", category: "Professional" },
  { name: "Communication", category: "Professional" },
  { name: "Leadership", category: "Professional" },
];

// Required component 5a: Discovery Project Feature
export const discovery = {
  title: "[Discovery Project Title]",
  subtitle: "[One sentence describing what you built and why it matters.]",
  inProgress: true, // set to false when it is finished (hides the badge)
  problem: [
    "[The Problem - What problem or question did you explore? Who is affected? Why did you care about it?]",
  ],
  process: [
    "[The Process - How did you design and build it? Describe your ideas, parts and tools, tests, failures, and what you changed.]",
  ],
  outcome: [
    "[The Outcome - What happened? Share results, measurements, and what you learned. What would you improve next time?]",
  ],
  
  images: [
    { src: "images/discovery-1.jpg", alt: "[Describe image 1]", caption: "[Caption 1]" },
    { src: "images/discovery-2.jpg", alt: "[Describe image 2]", caption: "[Caption 2]" },
    { src: "images/discovery-3.jpg", alt: "[Describe image 3]", caption: "[Caption 3]" },
  ],
  // Optional: paste a YouTube *embed* link, e.g. "https://www.youtube.com/embed/VIDEO_ID"
  video: null,
  links: [], // e.g. [{ label: "Source code", url: "https://github.com/..." }]
}

// Required component 5b: More projects
export const projects = [
  {
    id: 1,
    title: "Weather Dashboard",
    description: "Built a responsive weather dashboard using HTML, CSS, and JavaScript that fetches real-time weather data from Open-Meteo Geocoding and Forecast APIs to deliver 5-day weather forecasts for user-specified locations.",
    image: "images/project-1.png",
    imageAlt: "[Describe the image]",
    tags: ["Git/GitHub", "JavaScript", "VS Code"],
    demoUrl: "https://priyavratadeb.github.io/Weather-Dashboard/",
    githubUrl: "https://github.com/priyavratadeb/Weather-Dashboard",
  },
  {
    id: 2,
    title: "ScholarLink",
    description: "Built a responsive web application for students to discover and connect with research opportunities, using React and Node.js for a Technology Student Association state competition. Placed top 10 in the state.",
    image: "images/project-2.png",
    imageAlt: "[Describe the image]",
    tags: ["Git/GitHub", "JavaScript", "Teamwork"],
    demoUrl: "https://thescholarlink.netlify.app/",
    githubUrl: "https://github.com/girmmy/scholarlink",
  },
  {
    id: 3,
    title: "Herbivore Haven",
    description: "Created a website for a vegan restaurant for the TSA State Leadership Conference, where it ended up placing 3rd in the state. I developed the reservation page using the Tally API.",
    image: "images/project-3.png",
    imageAlt: "[Describe the image]",
    tags: ["Git/GitHub", "JavaScript", "Teamwork"],
    demoUrl: "https://herbivorehaven.netlify.app/",
    githubUrl: "https://github.com/girmmy/herbivore-haven",
  },
];

// Contact
export const contact = {
  heading: "Get in Touch",
  text: "Reach out if you want to collaborate, have questions, or just want to say hi! I am always open to connecting with fellow students, professionals, and anyone interested in ECE.",
};
