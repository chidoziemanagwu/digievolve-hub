// app/training-programs/[slug]/programData.ts
import { IconType } from 'react-icons';
import { 
  FiBarChart, FiShield, FiTool, FiDatabase, 
  FiCode, FiCpu,
  FiServer, FiCloud, FiLock, FiTrendingUp, 
  FiAward, 
  FiMonitor, FiSettings, FiRefreshCw
} from 'react-icons/fi';
import { 
  FaRobot, FaBrain, FaChartLine, FaProjectDiagram,
  FaNetworkWired, FaDatabase, FaShieldAlt, FaCogs,
  FaGraduationCap, FaLaptopCode, FaChalkboardTeacher,
  FaCertificate, FaChartBar, 
  FaServer} from 'react-icons/fa';

interface CourseSection {
  title: string;
  items: string[];
}

interface CareerOpportunity {
  icon: IconType;
  title: string;
  description: string;
}

interface Highlight {
  icon: IconType;
  title: string;
  description: string;
}

interface Program {
  title: string;
  icon: IconType;
  description: string;
  longDescription: string;
  duration: string;
  highlights: Highlight[];
  courses: CourseSection[];
  tools: string[];
  careerOpportunities: CareerOpportunity[];
}

export const trainingPrograms: Record<string, Program> = {
  'data-analytics': {
    title: 'Data Analytics & Visualization',
    icon: FiBarChart,
    description: 'Master data analytics and visualization techniques with our comprehensive program.',
    longDescription: 'Transform raw data into actionable insights with our comprehensive Data Analytics program. Learn foundational statistics, master visualization tools, and develop analytical thinking skills through hands-on projects and real-world applications.',
    duration: '3 months + 3 months internship',
    highlights: [
      {
        icon: FaChartLine,
        title: 'Foundational Skills',
        description: 'Basic Statistics, Data Visualization, and Analytical Thinking'
      },
      {
        icon: FiDatabase,
        title: 'Tool Mastery',
        description: 'Excel, Tableau, Power BI, and SQL'
      },
      {
        icon: FaGraduationCap,
        title: 'Industry Projects',
        description: 'Real-world projects and 3-month internship'
      }
    ],
    courses: [
      {
        title: 'Foundational Courses',
        items: [
          'Basic Statistics and Probability',
          'Data Visualization Principles',
          'Analytical Thinking and Problem Solving',
          'Business Intelligence Fundamentals'
        ]
      },
      {
        title: 'Tool-specific Training',
        items: [
          'Advanced Excel Analytics',
          'Tableau Dashboard Creation',
          'Power BI Development',
          'SQL for Data Analysis'
        ]
      },
      {
        title: 'Advanced Analytics',
        items: [
          'Predictive Analytics Models',
          'Customer Segmentation Techniques',
          'Performance Metrics and KPIs',
          'Data-Driven Decision Making'
        ]
      }
    ],
    tools: [
      'Python',
      'BigML',
      'Tableau',
      'PowerBI',
      'Microsoft Fabrics',
      'Alteryx',
      'SQL',
      'Looker Studio'
    ],
    careerOpportunities: [
      {
        icon: FaChartLine,
        title: 'Data Analyst',
        description: 'Transform raw data into actionable insights for businesses'
      },
      {
        icon: FiTrendingUp,
        title: 'Business Intelligence Analyst',
        description: 'Drive strategic decision-making through data analysis'
      },
      {
        icon: FaProjectDiagram,
        title: 'Analytics Consultant',
        description: 'Help organizations optimize their data strategies'
      }
    ]
  },
  'data-science': {
    title: 'Data Science',
    icon: FaDatabase,
    description: 'Become a proficient data scientist with our comprehensive training program.',
    longDescription: 'Master the art and science of extracting knowledge from data with our comprehensive Data Science program. Learn advanced statistical analysis, machine learning, and programming skills needed to solve complex business problems.',
    duration: '6 months including internship',
    highlights: [
      {
        icon: FiCode,
        title: 'Programming Skills',
        description: 'Python, R, and SQL for data manipulation'
      },
      {
        icon: FaBrain,
        title: 'Machine Learning',
        description: 'Build and deploy ML models'
      },
      {
        icon: FiServer,
        title: 'Big Data',
        description: 'Handle large-scale data processing'
      }
    ],
    courses: [
      {
        title: 'Programming Fundamentals',
        items: [
          'Python for Data Science',
          'R Programming',
          'SQL and Database Management',
          'Data Structures and Algorithms'
        ]
      },
      {
        title: 'Machine Learning',
        items: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Deep Learning Fundamentals',
          'Model Deployment'
        ]
      },
      {
        title: 'Big Data Processing',
        items: [
          'Hadoop Ecosystem',
          'Spark Programming',
          'Data Pipelines',
          'Cloud Computing'
        ]
      }
    ],
    tools: [
      'Python',
      'R',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Jupyter',
      'Git',
      'Docker'
    ],
    careerOpportunities: [
      {
        icon: FaDatabase,
        title: 'Data Scientist',
        description: 'Build models that solve complex business problems'
      },
      {
        icon: FaBrain,
        title: 'Machine Learning Engineer',
        description: 'Develop and deploy machine learning systems'
      },
      {
        icon: FiCloud,
        title: 'AI Researcher',
        description: 'Advance the field through innovative research'
      }
    ]
  },
  'data-engineering': {
    title: 'Data Engineering',
    icon: FaServer,
    description: 'Master the art of building and maintaining data infrastructure.',
    longDescription: 'Learn to design, build, and maintain the infrastructure needed for modern data analytics and machine learning. Master big data technologies and cloud platforms while ensuring data quality and accessibility.',
    duration: '6 months',
    highlights: [
      {
        icon: FiDatabase,
        title: 'Data Infrastructure',
        description: 'Design and build scalable data systems'
      },
      {
        icon: FaNetworkWired,
        title: 'Data Integration',
        description: 'Connect and optimize data pipelines'
      },
      {
        icon: FiCloud,
        title: 'Cloud Platforms',
        description: 'Master major cloud services'
      }
    ],
    courses: [
      {
        title: 'Big Data Technologies',
        items: [
          'Hadoop Ecosystem',
          'Apache Spark',
          'Apache Kafka',
          'NoSQL Databases'
        ]
      },
      {
        title: 'Cloud Platforms',
        items: [
          'AWS Data Services',
          'Azure Data Platform',
          'Google Cloud Platform',
          'Cloud Security'
        ]
      },
      {
        title: 'Data Pipeline Development',
        items: [
          'ETL Process Design',
          'Data Warehouse Architecture',
          'Real-time Processing',
          'Data Quality Management'
        ]
      }
    ],
    tools: [
      'Apache Hadoop',
      'Apache Spark',
      'Apache Kafka',
      'AWS',
      'Azure',
      'MongoDB',
      'PostgreSQL',
      'Docker'
    ],
    careerOpportunities: [
      {
        icon: FaServer,
        title: 'Data Engineer',
        description: 'Build and maintain data infrastructure'
      },
      {
        icon: FiCloud,
        title: 'Cloud Data Architect',
        description: 'Design cloud-based data solutions'
      },
      {
        icon: FaNetworkWired,
        title: 'ETL Developer',
        description: 'Create efficient data pipelines'
      }
    ]
  },
  'data-governance': {
    title: 'Data Governance',
    icon: FaShieldAlt,
    description: 'Learn to implement effective data governance frameworks and ensure compliance.',
    longDescription: 'Master the principles and practices of data governance, including regulatory compliance, data quality management, and security protocols. Learn to protect and manage organizational data assets effectively.',
    duration: '3 months',
    highlights: [
      {
        icon: FiShield,
        title: 'Compliance',
        description: 'Master regulatory requirements'
      },
      {
        icon: FiLock,
        title: 'Data Security',
        description: 'Implement robust protection'
      },
      {
        icon: FiDatabase,
        title: 'Quality Management',
        description: 'Ensure data integrity'
      }
    ],
    courses: [
      {
        title: 'Governance Fundamentals',
        items: [
          'Data Governance Framework',
          'Regulatory Compliance',
          'Data Privacy Laws',
          'Risk Management'
        ]
      },
      {
        title: 'Security Implementation',
        items: [
          'Security Architecture',
          'Access Control',
          'Data Protection',
          'Incident Response'
        ]
      },
      {
        title: 'Quality Management',
        items: [
          'Data Quality Metrics',
          'Quality Monitoring',
          'Data Validation',
          'Remediation Strategies'
        ]
      }
    ],
    tools: [
      'Collibra',
      'Informatica',
      'IBM InfoSphere',
      'Talend',
      'SAP Master Data Governance',
      'Oracle Enterprise Data Quality',
      'Microsoft Purview',
      'Alation'
    ],
    careerOpportunities: [
      {
        icon: FaShieldAlt,
        title: 'Data Governance Manager',
        description: 'Oversee data governance programs'
      },
      {
        icon: FiLock,
        title: 'Data Security Specialist',
        description: 'Implement data protection measures'
      },
      {
        icon: FiDatabase,
        title: 'Data Quality Analyst',
        description: 'Ensure data accuracy and reliability'
      }
    ]
  },
  'ai-machine-learning': {
    title: 'Machine Learning',
    icon: FaBrain,
    description: 'Master machine learning techniques and their practical applications.',
    longDescription: 'Dive deep into machine learning algorithms, techniques, and applications. Learn to build, train, and deploy ML models while understanding the theoretical foundations and practical implementations.',
    duration: '6 months',
    highlights: [
      {
        icon: FaBrain,
        title: 'ML Fundamentals',
        description: 'Core algorithms and concepts'
      },
      {
        icon: FiCode,
        title: 'Implementation',
        description: 'Hands-on model building'
      },
      {
        icon: FiCloud,
        title: 'Deployment',
        description: 'Production ML systems'
      }
    ],
    courses: [
      {
        title: 'ML Foundations',
        items: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Neural Networks',
          'Model Evaluation'
        ]
      },
      {
        title: 'Advanced Topics',
        items: [
          'Deep Learning',
          'Natural Language Processing',
          'Computer Vision',
          'Reinforcement Learning'
        ]
      },
      {
        title: 'Practical ML',
        items: [
          'Model Deployment',
          'MLOps',
          'Performance Optimization',
          'Real-world Applications'
        ]
      }
    ],
    tools: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Keras',
      'MLflow',
      'Kubeflow',
      'OpenCV',
      'Hugging Face'
    ],
    careerOpportunities: [
      {
        icon: FaBrain,
        title: 'ML Engineer',
        description: 'Build and deploy ML systems'
      },
      {
        icon: FiCpu,
        title: 'AI Developer',
        description: 'Create AI-powered applications'
      },
      {
        icon: FaProjectDiagram,
        title: 'ML Research Scientist',
        description: 'Advance ML techniques and applications'
      }
    ]
  },
  'business-automation': {
    title: 'Business Automation',
    icon: FaCogs,
    description: 'Learn to automate business processes and implement RPA solutions.',
    longDescription: 'Master the tools and techniques needed to automate business processes, implement RPA solutions, and drive operational efficiency. Learn to identify automation opportunities and deploy effective solutions.',
    duration: '4 months',
    highlights: [
      {
        icon: FiSettings,
        title: 'Process Optimization',
        description: 'Streamline workflows'
      },
      {
        icon: FaRobot,
        title: 'RPA Development',
        description: 'Build automated solutions'
      },
      {
        icon: FiRefreshCw,
        title: 'Integration',
        description: 'Connect systems seamlessly'
      }
    ],
    courses: [
      {
        title: 'Automation Fundamentals',
        items: [
          'Process Analysis',
          'RPA Basics',
          'Workflow Design',
          'Business Process Management'
        ]
      },
      {
        title: 'Implementation',
        items: [
          'RPA Development',
          'Process Automation',
          'System Integration',
          'Testing and Deployment'
        ]
      },
      {
        title: 'Advanced Automation',
        items: [
          'Intelligent Automation',
          'AI Integration',
          'Process Mining',
          'Automation Strategy'
        ]
      }
    ],
    tools: [
      'UiPath',
      'Blue Prism',
      'Automation Anywhere',
      'Power Automate',
      'Zapier',
      'ProcessMaker',
      'Nintex',
      'Workato'
    ],
    careerOpportunities: [
      {
        icon: FaCogs,
        title: 'RPA Developer',
        description: 'Build and maintain automated processes'
      },
      {
        icon: FiSettings,
        title: 'Automation Architect',
        description: 'Design enterprise automation solutions'
      },
      {
        icon: FaProjectDiagram,
        title: 'Process Consultant',
        description: 'Optimize business processes'
      }
    ]
  },
  'tools-certification': {
    title: 'Tools & Technologies Certification',
    icon: FiTool,
    description: 'Master industry-leading tools and earn recognized certifications in data analytics and business intelligence.',
    longDescription: 'Get comprehensive training in the most in-demand tools and technologies used in data analytics, business intelligence, and automation. Earn industry-recognized certifications while gaining practical experience through hands-on projects.',
    duration: '2-3 months per tool certification',
    highlights: [
      {
        icon: FaCertificate,
        title: 'Industry Certification',
        description: 'Earn recognized certifications that validate your expertise'
      },
      {
        icon: FaLaptopCode,
        title: 'Hands-on Training',
        description: 'Practical experience with real-world applications'
      },
      {
        icon: FaChalkboardTeacher,
        title: 'Expert Instruction',
        description: 'Learn from industry professionals with current experience'
      }
    ],
    courses: [
      {
        title: 'Data Visualization Tools',
        items: [
          'Tableau Desktop & Server',
          'Power BI Development',
          'Looker Studio Analytics',
          'Advanced Data Visualization'
        ]
      },
      {
        title: 'Analytics Platforms',
        items: [
          'Microsoft Fabric Suite',
          'SAS Enterprise Guide',
          'SAS Enterprise Miner',
          'Alteryx Designer'
        ]
      },
      {
        title: 'Business Tools',
        items: [
          'Advanced Excel Analytics',
          'AI PowerPoint Creation',
          'BigML Platform',
          'SQL Database Management'
        ]
      }
    ],
    tools: [
      'Python',
      'BigML',
      'Tableau',
      'Power BI',
      'Microsoft Fabric',
      'Alteryx',
      'SQL',
      'SAS Enterprise Miner',
      'SAS Enterprise Guide',
      'SAS Viya',
      'Looker Studio',
      'Advanced Excel'
    ],
    careerOpportunities: [
      {
        icon: FaChartBar,
        title: 'BI Developer',
        description: 'Create and maintain business intelligence solutions'
      },
      {
        icon: FiMonitor,
        title: 'Data Visualization Specialist',
        description: 'Design and develop impactful data visualizations'
      },
      {
        icon: FiAward,
        title: 'Certified Analytics Professional',
        description: 'Lead data-driven decision making with certified expertise'
      }
    ]
  }
};