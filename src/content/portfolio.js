export const siteMeta = {
  brand: "Raiyaan Abdullah",
  title: "Raiyaan Abdullah | Computer Vision Researcher",
  description: "Raiyaan Abdullah is a Ph.D. student at UCF researching computer vision, video understanding, action recognition, and datasets.",
  socialDescription: "Research, publications, education, and experience of Raiyaan Abdullah.",
  url: "https://raiyaan.xyz/",
  image: "https://raiyaan.xyz/images/raiyaan_photo.jpg"
};

export const profile = {
  name: "Raiyaan Abdullah",
  role: "Ph.D. Student · Graduate Teaching/Research Assistant",
  organization: "University of Central Florida",
  location: "Oviedo, Florida, USA",
  email: "raiyaanabdullah@gmail.com",
  avatar: "images/raiyaan_photo.jpg",
  about: [
    [
      "I am a ",
      { text: "Ph.D. researcher", bold: true },
      " at the University of Central Florida working on ",
      { text: "video understanding", bold: true },
      " and ",
      { text: "Vision-Language Models (VLMs)", bold: true },
      ". My research focuses on identifying where multimodal models fail, building targeted benchmarks to evaluate their capabilities, and developing methods that improve reasoning over complex video data."
    ],

    [
      "I am particularly interested in building ",
      { text: "reliable and generalizable multimodal AI systems", bold: true },
      " that can understand human actions, motion, and long-form visual information. My work spans ",
      { text: "dataset design, model evaluation, and method development", bold: true },
      " for next-generation video and multimodal AI."
    ],

    [
      "I am a Ph.D. student and Graduate Teaching/Research Assistant at the ",
      {
        text: "Institute of Artificial Intelligence",
        href: "https://www.ucf.edu/institute-of-artificial-intelligence/"
      },
      ", ",
      {
        text: "University of Central Florida (UCF)",
        href: "https://www.ucf.edu/"
      },
      ", supervised by ",
      {
        text: "Dr. Yogesh Singh Rawat",
        href: "https://www.crcv.ucf.edu/person/rawat/"
      },
      ". I am interested in ",
      { text: "research scientist, applied scientist, and research internship opportunities", bold: true },
      " in multimodal AI, computer vision, and video understanding."
    ]
  ],
  links: [
    { label: "Resume", href: "https://drive.google.com/file/d/1hVtSuLzON7tw6Wr4zKM0nfDR3I5wLmM-/view?usp=sharing", icon: "fa-solid fa-file-pdf" },
    { label: "Email", href: "mailto:raiyaanabdullah@gmail.com", icon: "fa-solid fa-envelope" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=QA8alkEAAAAJ&hl=en", icon: "fa-solid fa-graduation-cap" },
    { label: "GitHub", href: "https://github.com/raiyaan-abdullah", icon: "fa-brands fa-github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/raiyaan-abdullah/", icon: "fa-brands fa-linkedin" }
  ]
};

export const publications = [
  {
    title: "Learning to Deny: Action Denial in Multimodal Large Language Models",
    venue: "ECCV 2026 Spotlight 🌟",
    year: "2026",
    authors: "Raiyaan Abdullah, Shehreen Azad, Yogesh Singh Rawat",
    image: "images/publications/polsima.png",
    publicationHref: "https://arxiv.org/abs/2606.31187",
    projectHref: "https://raiyaan.xyz/Learn-to-Deny-webpage/"
  },
  {
    title: "LG-Align: Language-Guided Global Retrieval to Local Region Voting",
    venue: "ECCVW 2026",
    year: "2026",
    authors: "Fahimul Aleem, Raiyaan Abdullah, Shruti Vyas",
    image: "images/publications/lgalign.jpg",
    publicationHref: "https://drive.google.com/file/d/1N86-S3t7NQTL_tKKWwPNEjf24odbPeIy/view?usp=sharing",
    projectHref: "https://fahim17.github.io/LGAlign_Two_Stage/"
  },
  {
    title: "Punching Bag vs. Punching Person: Motion Transferability in Videos",
    venue: "ICCV 2025",
    year: "2025",
    authors: "Raiyaan Abdullah, Jared Claypoole, Michael Cogswell, Ajay Divakaran, Yogesh Singh Rawat",
    image: "images/publications/punching_bag.jpg",
    publicationHref: "https://openaccess.thecvf.com/content/ICCV2025/papers/Abdullah_Punching_Bag_vs._Punching_Person_Motion_Transferability_in_Videos_ICCV_2025_paper.pdf",
    projectHref: "https://raiyaan.xyz/Motion-Transfer-webpage/"
  },
  {
    title: "iSafetyBench: A Video-Language Benchmark for Safety in Industrial Environment",
    venue: "ICCVW 2025",
    year: "2025",
    authors: "Raiyaan Abdullah, Yogesh Singh Rawat, Shruti Vyas",
    image: "images/publications/isafety.png",
    publicationHref: "https://openaccess.thecvf.com/content/ICCV2025W/VISION%2725/papers/Abdullah_iSafetyBench_A_video-language_benchmark_for_safety_in_industrial_environment_ICCVW_2025_paper.pdf",
    projectHref: "https://isafetybench.github.io/"
  },
  {
    title: "Probing Conceptual Understanding of Large Visual-Language Models",
    venue: "CVPRW 2024",
    year: "2024",
    authors: "Madeline Schiappa, Raiyaan Abdullah, Shehreen Azad, Jared Claypoole, Michael Cogswell, Ajay Divakaran, Yogesh Singh Rawat",
    image: "images/publications/ProbeR.png",
    publicationHref: "https://openaccess.thecvf.com/content/CVPR2024W/MMFM/papers/Schiappa_Probing_Conceptual_Understanding_of_Large_Visual-Language_Models_CVPRW_2024_paper.pdf",
    projectHref: "https://github.com/DeepLearningRobustnessStudies/UnderstandingVisualTextModels"
  },
  {
    title: "STPT: Spatio-Temporal Polychromatic Trajectory Based Elderly Exercise Evaluation System",
    venue: "IEEE Access",
    year: "2023",
    authors: "Riad Ahmed, Raiyaan Abdullah, Lafifa Jamal",
    image: "images/exercise/methodology_overview.jpg",
    publicationHref: "https://ieeexplore.ieee.org/abstract/document/10098793"
  }
];

export const education = [
  {
    period: "Fall 2023 – Ongoing",
    title: "Ph.D. in Computer Science",
    place: "Institute of Artificial Intelligence, University of Central Florida",
    href: "https://www.ucf.edu/institute-of-artificial-intelligence/",
    detail: ["Supervisor: ", { text: "Dr. Yogesh Singh Rawat", href: "https://www.crcv.ucf.edu/person/rawat/" }, "."]
  },
  {
    period: "Jan. 2017 – Jan. 2022",
    title: "Bachelor of Science in Robotics and Mechatronics Engineering",
    place: "University of Dhaka, Bangladesh",
    href: "https://www.du.ac.bd/",
    detail: ["Supervisor: ", { text: "Dr. Lafifa Jamal", href: "https://www.du.ac.bd/faculty/faculty_details/RME/1774" }, ". Completion was delayed by COVID-19."]
  },
  { period: "2014 – 2016", title: "Higher Secondary Certificate (Grades 11–12)", place: "Notre Dame College, Dhaka, Bangladesh", href: "https://ndc.edu.bd/" },
  { period: "2006 – 2014", title: "Secondary School Certificate (Grades 3–10)", place: "St. Joseph Higher Secondary School, Dhaka, Bangladesh", href: "https://sjs.edu.bd/new/index.php" }
];

export const service = {
  reviewer: [
    "ICLR '24, '25, '26",
    "CVPR '24, '25, '26",
    "ICML '24",
    "NeurIPS '24, '25, '26",
    "ICCV '25",
    "ECCV '26",
    "Pattern Recognition '26",
    "BMVC '26",
    "IEEE Transactions on Multimedia '26"
  ],
  mentorship: {
    title: "Mentor, International Robot Olympiad '19, '21",
    place: "Bangladesh Team",
    href: "https://bdro.org/results/2021-iro-result/",
    detail: "Mentored young robotics competitors who went on to win gold, silver, and bronze accolades."
  }
};

export const experience = [
  {
    period: "Aug. 2024 – Present",
    title: "Graduate Teaching and Research Assistant",
    place: "University of Central Florida",
    href: "https://www.ucf.edu/",
    location: "Orlando, FL, USA",
    details: [
      "Conducting research on Action Recognition and Video Understanding at the Institute of Artificial Intelligence, UCF.",
      "Leading weekly Python programming labs (COP 2500) for 150+ students, with an average section size of 25, many of whom are first-time programmers.",
      "Grading approximately 250 lab and programming submissions per week, providing feedback on code logic and structure."
    ]
  },
  {
    period: "Sep. 2018 – Jul. 2023",
    title: "Co-founder and Dev. Project Manager",
    place: "BiTechX",
    href: "https://bitechx.com",
    location: "Dhaka, Bangladesh",
    details: [
      "Established a client-focused technology firm delivering web development, graphic design, and video editing solutions for both small and established businesses.",
      "Directed end-to-end project delivery for 100+ clients across the US, Canada, and other international markets.",
      "Managed a cross-functional team of up to 5 developers and UX designers, defining quality standards and delivery timelines while serving as the primary technical liaison to clients.",
      "Increased company revenue by 6.5× over my tenure."
    ]
  },
  {
    period: "Apr. 2022 – Jul. 2023",
    title: "Research Assistant",
    place: "Dr. Sejuti Rahman's Group",
    href: "https://www.du.ac.bd/faculty/faculty_details/RME/2150",
    location: "Dhaka, Bangladesh",
    details: [
      "Collected and annotated UAV video data featuring Bangladesh-specific vehicles (rickshaw, CNG, leguna, and manual van) in Dhaka.",
      "Investigated few-shot learning for detecting underrepresented vehicle classes in airborne traffic surveillance and accident analysis."
    ]
  }
];

export const awards = [
  { period: "2026", title: "ECCV 2026 Spotlight paper" },
  { period: "2023–2024", title: "ORCGS Doctoral Fellowship, UCF" },
  { period: "2020–2021", title: "Special Grant in Research", detail: "Undergraduate thesis project funding from the ICT Division, Government of Bangladesh." },
  { period: "2019–2020", title: "IFIC Bank Trust Fund Research Grant", detail: "Awarded to students in selected departments who excelled in academics and other qualities." },
  { period: "Jan. 2019", title: "2nd - AUST Mindsparks, Ahsanullah University of Science and Technology", detail: "Line Follower Robot Competition" },
  { period: "2018–2020", title: "Luna Shamsuddoha, Chairman, Janata Bank Limited Scholarship", detail: "Awarded to the top three students of each batch in selected University of Dhaka departments." },
  { period: "July 2018", title: "3rd - BUET EEE Day Robofiesta, Bangladesh University of Engineering and Technology", detail: "Line Follower Robot Competition" },
  { period: "June 2018", title: "2nd - AUST Developer Hunt, university website redesign competition", detail: "Web Development Competition" },
  { period: "2017–2020", title: "University Undergraduate Scholarship", detail: "Awarded to the top two students of each batch in every University of Dhaka department." },
  { period: "Oct. 2017", title: "Champion — IntraDU Robofest, University of Dhaka", detail: "Line Follower Robot Competition" },
  { period: "July 2017", title: "3rd - DUET Techfest, Dhaka University of Engineering and Technology", detail: "Line Follower Robot Competition" },
  { period: "2016", title: "General Scholarship", detail: "Awarded for outstanding results in the Higher Secondary Certificate examination." }
];
