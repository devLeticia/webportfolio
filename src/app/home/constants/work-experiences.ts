import {
  Layout,
  FileVue,
  Plugs,
  MagicWand,
  Code,
  Lifebuoy,
  CloudArrowUp,
  ChartBar,
  TreeStructure,
  ShieldCheck,
  Funnel,
} from 'phosphor-react'
import type { Icon } from 'phosphor-react'

export type MainDuty = {
  icon: Icon
  description: string
}

export type WorkExperience = {
  id: string
  status: string
  position: string
  company: string
  atributions: string
  highlight?: string
  mainDuties: MainDuty[]
}

export const workExperiences: WorkExperience[] = [
  {
    id: '001',
    status: 'July 2025 – Present',
    position: 'Fullstack Software Engineer',
    company: 'BairesDev – World Energy (InsetIQ)',
    atributions:
  'At World Energy, I\'ve been architecting and building InsetIQ, an enterprise-grade B2B SaaS platform for Sustainable Aviation Fuel (SAF) certificate exchange. From stack selection to defining system design patterns, I work across frontend and backend, integrating cloud infrastructure and external registry systems to ensure full supply chain traceability and regulatory compliance.',
    mainDuties: [
      {
        icon: TreeStructure,
        description: 'Full-stack architecture from scratch',
      },
      {
        icon: ShieldCheck,
        description: 'RBAC and Microsoft Entra ID integration',
      },
      {
        icon: CloudArrowUp,
        description: 'Azure Blob Storage and Key Vault setup',
      },
      {
        icon: Funnel,
        description: 'Reporting pipeline with PDF generation',
      },
      {
        icon: ChartBar,
        description: 'SAF chain-of-custody ledger and Registry API',
      },
    ],
  },
  {
    id: '002',
    status: '2022 – 2025',
    position: 'Frontend Developer, UI/UX Designer',
    company: 'Nelogica',
    atributions:
    'After Akeloo\'s acquisition, I joined Nelogica to continue scaling the product into Brazil\'s leading stock market tax calculator SaaS. I led critical frontend development and UI/UX improvements, focusing on performance, user retention, and code quality, helping consolidate Akeloo\'s position as the #1 solution in its category.',
    mainDuties: [
      {
        icon: ChartBar,
        description: 'Financial dashboards with 27% faster rendering',
      },
      {
        icon: MagicWand,
        description: 'Onboarding redesign, +25% retention',
      },
      {
        icon: Code,
        description: 'Reusable component library, -30% redundancy',
      },
      {
        icon: Lifebuoy,
        description: 'Internal tools, -40% support resolution time',
      },
    ],
  },
  {
    id: '003',
    status: '2021 – 2022',
    position: 'Frontend Developer, UI/UX Designer',
    company: 'Akeloo',
    atributions:
    'At Akeloo, an early-stage fintech startup, I played a key role in designing and engineering core platform features from the ground up. Working across UI/UX and frontend development, I helped shape the product\'s identity and user experience, contributing directly to the company\'s growth and its acquisition by Nelogica, one of Brazil\'s major fintechs.',
    highlight: 'In 2022, Akeloo was acquired by Nelogica, a major Brazilian fintech.',
    mainDuties: [
      {
        icon: Layout,
        description: 'Figma prototypes for core user flows',
      },
      {
        icon: FileVue,
        description: 'Component-based interfaces with Vue.js',
      },
      {
        icon: ChartBar,
        description: 'Stock market dashboard, +60% data clarity',
      },
      {
        icon: Plugs,
        description: 'REST API integrations, frontend to backend',
      },
    ],
  },
]