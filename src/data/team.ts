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
    name: 'Dr. Emeka Okonkwo',
    title: 'Director of Programs',
    department: 'Programs',
    bio: 'With 15 years in nonprofit program management, Emeka oversees all five AOF program areas, ensuring quality, accountability, and community-centered delivery.',
    skills: ['Program Design', 'M&E', 'Community Development', 'Partnerships'],
    location: 'Abuja',
    initials: 'EO',
  },
  {
    name: 'Ngozi Adeleke',
    title: 'Director of Finance & Administration',
    department: 'Finance',
    bio: 'A chartered accountant with deep nonprofit finance expertise, Ngozi ensures fiscal integrity, donor accountability, and operational efficiency across the organization.',
    skills: ['Financial Management', 'Audit', 'Grant Compliance', 'Budgeting'],
    location: 'Lagos',
    initials: 'NA',
  },
  {
    name: 'Ibrahim Sule',
    title: 'Head of Communications',
    department: 'Communications',
    bio: "Ibrahim leads AOF's communications strategy, brand management, and media relations, transforming program data into compelling stories that inspire action.",
    skills: ['Brand Strategy', 'Content Creation', 'Media Relations', 'Digital Marketing'],
    location: 'Lagos',
    initials: 'IS',
  },
  {
    name: 'Dr. Chiamaka Eze',
    title: 'Healthcare Program Lead',
    department: 'Programs',
    bio: "A physician with community health specialization, Chiamaka designs and leads AOF's healthcare outreach programs, mobile clinic operations, and health worker training.",
    skills: ['Community Health', 'Mobile Clinics', 'Maternal Health', 'Epidemiology'],
    location: 'Delta State',
    initials: 'CE',
  },
  {
    name: 'Aisha Bello',
    title: 'Education Program Lead',
    department: 'Programs',
    bio: "An educator with 10+ years in curriculum development and EdTech implementation, Aisha leads AOF's scholarship program, digital learning centers, and teacher training.",
    skills: ['Curriculum Design', 'EdTech', 'Teacher Training', 'Scholarship Management'],
    location: 'Lagos',
    initials: 'AB',
  },
  {
    name: 'Tunde Fashola',
    title: 'Environmental Program Lead',
    department: 'Programs',
    bio: "An environmental engineer and climate advocate, Tunde leads AOF's tree planting, clean water, and Green Schools initiatives across Nigeria.",
    skills: ['Environmental Engineering', 'Project Management', 'Climate Policy', 'WASH'],
    location: 'Kano',
    initials: 'TF',
  },
  {
    name: 'Grace Obi',
    title: 'Volunteer & Community Engagement Manager',
    department: 'Operations',
    bio: "Grace manages AOF's 1,240+ volunteer network, designing meaningful engagement experiences and building the community of changemakers that powers our programs.",
    skills: ['Volunteer Management', 'Community Building', 'Events', 'Training'],
    location: 'Lagos',
    initials: 'GO',
  },
  {
    name: 'Yemi Adeyemi',
    title: 'MEAL Coordinator',
    department: 'Programs',
    bio: 'A data-driven evaluator, Yemi designs measurement systems, conducts field assessments, and produces learning reports that strengthen program quality across all AOF initiatives.',
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
