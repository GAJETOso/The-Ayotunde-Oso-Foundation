export type Department =
  | 'Leadership'
  | 'Programs'
  | 'Finance'
  | 'Communications'
  | 'Operations'

export type TeamMember = {
  name: string
  title: string
  department: Department
  bio: string
  skills: string[]
  location: string
  initials: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ayotunde Oso',
    title: 'Founder & Executive Director',
    department: 'Leadership',
    bio: 'Ayotunde founded AOF to address persistent inequities she witnessed in her community. With a background in public health and social entrepreneurship, she has spent over a decade building systems that create lasting change.',
    skills: ['Strategic Leadership', 'Public Health', 'Fundraising', 'Policy Advocacy'],
    location: 'Lagos',
    initials: 'AO',
  },
  {
    name: '',
    title: 'Director of Programs',
    department: 'Programs',
    bio: '',
    skills: ['Program Design', 'M&E', 'Community Development', 'Partnerships'],
    location: 'Abuja',
    initials: 'EO',
  },
  {
    name: '',
    title: 'Director of Finance & Administration',
    department: 'Finance',
    bio: '',
    skills: ['Financial Management', 'Audit', 'Grant Compliance', 'Budgeting'],
    location: 'Lagos',
    initials: 'NA',
  },
  {
    name: '',
    title: 'Head of Communications',
    department: 'Communications',
    bio: "",
    skills: ['Brand Strategy', 'Content Creation', 'Media Relations', 'Digital Marketing'],
    location: 'Lagos',
    initials: 'IS',
  },
  {
    name: '',
    title: 'Healthcare Program Lead',
    department: 'Programs',
    bio: "",
    skills: ['Community Health', 'Mobile Clinics', 'Maternal Health', 'Epidemiology'],
    location: 'Delta State',
    initials: 'CE',
  },
  {
    name: '',
    title: 'Education Program Lead',
    department: 'Programs',
    bio: "",
    skills: ['Curriculum Design', 'EdTech', 'Teacher Training', 'Scholarship Management'],
    location: 'Lagos',
    initials: 'AB',
  },
  {
    name: '',
    title: 'Environmental Program Lead',
    department: 'Programs',
    bio: "",
    skills: ['Environmental Engineering', 'Project Management', 'Climate Policy', 'WASH'],
    location: 'Kano',
    initials: 'TF',
  },
  {
    name: '',
    title: 'Volunteer & Community Engagement Manager',
    department: 'Operations',
    bio: "",
    skills: ['Volunteer Management', 'Community Building', 'Events', 'Training'],
    location: 'Lagos',
    initials: 'GO',
  },
  {
    name: '',
    title: 'MEAL Coordinator',
    department: 'Programs',
    bio: '',
    skills: ['M&E Systems', 'Data Analysis', 'Research', 'Report Writing'],
    location: 'Abuja',
    initials: 'YA',
  },
]

export const DEPT_COLORS: Record<Department, string> = {
  Leadership: 'bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400',
  Programs: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
  Finance: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
  Communications: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400',
  Operations: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400',
}
