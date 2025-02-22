// app/services/servicesData.ts
import { IconType } from 'react-icons';
import {
  FiCommand, FiGrid, FiSearch, FiTarget, FiGlobe,
  FiCloud, FiShield, FiUsers, FiDatabase, FiTrendingUp,
  FiMonitor, FiSettings, FiLayers, FiServer, FiLock,
  FiRefreshCw, FiSmartphone, FiBox, FiAward
} from 'react-icons/fi';
import {
  FaRobot, FaBrain, FaChartLine, FaProjectDiagram,
  FaNetworkWired, FaDatabase, FaShieldAlt, FaCogs,
  FaLaptopCode, FaGraduationCap, FaUserGraduate,
  FaPassport, FaFileAlt, FaLinkedin, FaHandshake
} from 'react-icons/fa';

interface ServiceFeature {
  icon: IconType;
  title: string;
  description: string;
}

interface ServiceSection {
  title: string;
  items: string[];
}

interface Service {
  title: string;
  icon: IconType;
  description: string;
  longDescription: string;
  features: ServiceFeature[];
  sections: ServiceSection[];
  benefits: string[];
  technologies?: string[];
  countries?: string[];
}

export const services: Record<string, Service> = {
  'digital-transformation': {
    title: 'Digital Transformation',
    icon: FiCommand,
    description: 'Guide businesses through comprehensive digital technology integration to enhance operations and customer value.',
    longDescription: 'Transform your business operations through strategic digital integration, from cloud solutions to AI implementation, creating a future-ready organization that delivers enhanced value to customers.',
    features: [
      {
        icon: FiCloud,
        title: 'Cloud Solutions',
        description: 'Migrate and optimize cloud-based solutions for improved scalability and accessibility'
      },
      {
        icon: FaChartLine,
        title: 'Data Analytics',
        description: 'Implement advanced analytics solutions for data-driven decision making'
      },
      {
        icon: FiShield,
        title: 'Cybersecurity',
        description: 'Establish robust security measures and compliance frameworks'
      }
    ],
    sections: [
      {
        title: 'Strategic Planning',
        items: [
          'Digital Maturity Assessment',
          'Transformation Roadmap',
          'Change Management',
          'Technology Implementation'
        ]
      },
      {
        title: 'Implementation Services',
        items: [
          'Cloud Migration',
          'ERP & CRM Systems',
          'Data Analytics Solutions',
          'Security Framework Implementation'
        ]
      },
      {
        title: 'Digital Innovation',
        items: [
          'AI Integration',
          'IoT Solutions',
          'Mobile Applications',
          'Digital Marketing Strategy'
        ]
      }
    ],
    benefits: [
      'Improved Operational Efficiency',
      'Enhanced Customer Experience',
      'Data-Driven Decision Making',
      'Increased Competitive Advantage',
      'Scalable Digital Infrastructure'
    ]
  },
  'automation-solutions': {
    title: 'Automation Solutions',
    icon: FiGrid,
    description: 'Design and implement cutting-edge automation systems using AI and machine learning.',
    longDescription: 'Transform your business operations with intelligent automation solutions that streamline workflows, reduce costs, and enhance productivity through advanced technologies.',
    features: [
      {
        icon: FaRobot,
        title: 'RPA Implementation',
        description: 'Automate routine tasks across departments'
      },
      {
        icon: FaBrain,
        title: 'Intelligent Automation',
        description: 'AI-driven process automation for complex tasks'
      },
      {
        icon: FiLayers,
        title: 'Workflow Automation',
        description: 'Streamline operations with custom workflow solutions'
      }
    ],
    sections: [
      {
        title: 'Process Automation',
        items: [
          'Task Automation',
          'Process Optimization',
          'Workflow Integration',
          'Document Management'
        ]
      },
      {
        title: 'Intelligent Solutions',
        items: [
          'AI-Driven Automation',
          'Machine Learning Integration',
          'Natural Language Processing',
          'Cognitive Automation'
        ]
      },
      {
        title: 'Business Integration',
        items: [
          'CRM Automation',
          'Supply Chain Automation',
          'Quality Assurance',
          'IoT Integration'
        ]
      }
    ],
    benefits: [
      'Increased Efficiency',
      'Reduced Operational Costs',
      'Improved Accuracy',
      'Enhanced Scalability',
      'Better Resource Utilization'
    ]
  },
  'research-development': {
    title: 'Research & Development',
    icon: FiSearch,
    description: 'Support cutting-edge research in AI, machine learning, and digital innovation.',
    longDescription: 'Drive innovation through comprehensive research and development support in emerging technologies, helping organizations stay ahead in the digital age.',
    features: [
      {
        icon: FaBrain,
        title: 'AI Research',
        description: 'Advanced research in artificial intelligence and machine learning'
      },
      {
        icon: FiDatabase,
        title: 'Data Science',
        description: 'Innovative data science solutions and methodologies'
      },
      {
        icon: FiMonitor,
        title: 'Computer Vision',
        description: 'Research in image recognition and visual computing'
      }
    ],
    sections: [
      {
        title: 'Research Areas',
        items: [
          'Machine Learning Algorithms',
          'Natural Language Processing',
          'Computer Vision',
          'Quantum Computing'
        ]
      },
      {
        title: 'Development Support',
        items: [
          'Algorithm Development',
          'Prototype Creation',
          'Testing & Validation',
          'Implementation Support'
        ]
      },
      {
        title: 'Innovation Services',
        items: [
          'Technology Assessment',
          'Proof of Concept',
          'Research Publications',
          'Patent Support'
        ]
      }
    ],
    benefits: [
      'Cutting-edge Innovation',
      'Competitive Advantage',
      'Technical Excellence',
      'Research Recognition',
      'Industry Leadership'
    ]
  },
  'career-development': {
    title: 'Career Development',
    icon: FiTarget,
    description: 'Comprehensive career support services for professional growth in tech.',
    longDescription: 'Empower your career journey with personalized coaching, mentorship, and professional development services tailored to the technology sector.',
    features: [
      {
        icon: FaGraduationCap,
        title: 'Career Coaching',
        description: 'Personalized guidance for career advancement'
      },
      {
        icon: FaHandshake,
        title: 'Mentorship',
        description: 'Industry expert mentorship programs'
      },
      {
        icon: FaFileAlt,
        title: 'CV Optimization',
        description: 'Professional resume and portfolio development'
      }
    ],
    sections: [
      {
        title: 'Career Services',
        items: [
          'Career Path Planning',
          'Skills Assessment',
          'Professional Development',
          'Job Search Strategy'
        ]
      },
      {
        title: 'Profile Building',
        items: [
          'CV Writing',
          'LinkedIn Optimization',
          'Portfolio Development',
          'Personal Branding'
        ]
      },
      {
        title: 'Interview Preparation',
        items: [
          'Mock Interviews',
          'Technical Preparation',
          'Presentation Skills',
          'Salary Negotiation'
        ]
      }
    ],
    benefits: [
      'Career Advancement',
      'Professional Network',
      'Industry Recognition',
      'Skill Enhancement',
      'Job Placement Support'
    ]
  },
  'global-talent': {
    title: 'Global Talent Solutions',
    icon: FiGlobe,
    description: 'Support for international career opportunities and talent mobility.',
    longDescription: 'Navigate global career opportunities with comprehensive support for international talent mobility, including visa guidance and relocation assistance.',
    features: [
      {
        icon: FaPassport,
        title: 'Immigration Support',
        description: 'Expert guidance for work visas and permits'
      },
      {
        icon: FiTarget,
        title: 'Global Placement',
        description: 'International job placement services'
      },
      {
        icon: FiUsers,
        title: 'Cultural Integration',
        description: 'Support for cultural adaptation and relocation'
      }
    ],
    sections: [
      {
        title: 'Immigration Services',
        items: [
          'Visa Application Support',
          'Work Permit Guidance',
          'Documentation Assistance',
          'Legal Compliance'
        ]
      },
      {
        title: 'Relocation Support',
        items: [
          'Housing Assistance',
          'School Selection',
          'Cultural Orientation',
          'Settlement Services'
        ]
      },
      {
        title: 'Career Support',
        items: [
          'International Job Search',
          'Global Network Access',
          'Market Intelligence',
          'Skill Validation'
        ]
      }
    ],
    benefits: [
      'Global Career Opportunities',
      'Smooth Relocation Process',
      'Cultural Integration',
      'Professional Network',
      'Local Market Knowledge'
    ],
    countries: [
      'United Kingdom',
      'United States of America',
      'Australia',
      'Canada',
      'Sweden',
      'Finland',
      'Portugal',
      'Croatia'
    ]
  }
};