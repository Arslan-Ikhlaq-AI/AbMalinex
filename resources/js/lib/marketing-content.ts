import type { LucideIcon } from 'lucide-react';
import {
    Activity,
    Award,
    Baby,
    BadgeCheck,
    BarChart3,
    Bone,
    Brain,
    BrainCircuit,
    ClipboardCheck,
    Cpu,
    Droplets,
    Eye,
    FileCode2,
    FileSearch,
    FileText,
    HandCoins,
    HeartPulse,
    Headset,
    Microscope,
    Network,
    Pill,
    ReceiptText,
    ShieldCheck,
    Smile,
    Sparkles,
    Stethoscope,
    UserCheck,
    Users,
    Wind,
    Zap,
} from 'lucide-react';
import {
    about,
    contact,
    home,
    resources,
    services,
    specialties,
} from '@/routes';

export type NavigationLink = {
    label: string;
    href: string;
};

export type Service = {
    slug: string;
    title: string;
    summary: string;
    description: string;
    icon: LucideIcon;
    features: string[];
    image: string;
};

export type Specialty = {
    name: string;
    icon: LucideIcon;
    description: string;
    metric: string;
};

export type Stat = {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    label: string;
};

export type CaseStudy = {
    category: string;
    practice: string;
    title: string;
    summary: string;
    results: string[];
    metric: { label: string; value: string; change: string };
    series: number[];
};

export type Article = {
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
};

export const navigationLinks: NavigationLink[] = [
    { label: 'Home', href: home().url },
    { label: 'Services', href: services().url },
    { label: 'Specialties', href: specialties().url },
    { label: 'Resources', href: resources().url },
    { label: 'About Us', href: about().url },
    { label: 'Contact', href: contact().url },
];

export const contactDetails = {
    phone: '(888) 123-4567',
    email: 'info@abmalinex.com',
    addressLine1: '123 Business Blvd, Suite 100',
    addressLine2: 'Dallas, TX 75001, USA',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
    hoursWeekend: 'Sat - Sun: Closed',
};

export const heroStats: Stat[] = [
    { value: 30, suffix: '%+', label: 'Increase in Collections' },
    { value: 98, suffix: '%+', label: 'First Pass Clean Rate' },
    { value: 2, prefix: '<', suffix: '%', label: 'Denial Rate' },
    { value: 20, suffix: '+', label: 'Specialties Served' },
    { value: 500, suffix: '+', label: 'Happy Clients' },
];

export const coreServices: Service[] = [
    {
        slug: 'medical-billing',
        title: 'Medical Billing',
        summary: 'Accurate claim submission and payment posting.',
        description:
            'From charge entry to payment posting, we ensure clean claims and faster reimbursements.',
        icon: ReceiptText,
        features: [
            'Charge Entry',
            'Claims Submission',
            'Payment Posting',
            'Insurance Follow-Up',
            'Patient Billing',
            'Account Reconciliation',
        ],
        image: '/images/marketing/laptop-analytics.jpg',
    },
    {
        slug: 'medical-coding',
        title: 'Medical Coding',
        summary: 'ICD-10, CPT & HCPCS coding with 98%+ accuracy.',
        description:
            'AAPC-certified coders translate every encounter into compliant, fully reimbursable codes.',
        icon: FileCode2,
        features: [
            'ICD-10-CM & PCS',
            'CPT & HCPCS Level II',
            'Modifier Validation',
            'E/M Level Audits',
            'Specialty-Specific Coders',
            'Compliance Reviews',
        ],
        image: '/images/marketing/blog-coding.jpg',
    },
    {
        slug: 'rcm-management',
        title: 'RCM Management',
        summary: 'End-to-end revenue cycle management.',
        description:
            'A single accountable team owning every step, from patient intake to the final zero balance.',
        icon: Network,
        features: [
            'Front-End Intake',
            'Charge Capture',
            'Claims Lifecycle',
            'A/R Management',
            'KPI Dashboards',
            'Monthly Strategy Reviews',
        ],
        image: '/images/marketing/team-alt.jpg',
    },
    {
        slug: 'denial-management',
        title: 'Denial Management',
        summary: 'Identify, appeal & overturn denied claims.',
        description:
            'Root-cause analysis and fast, well-documented appeals that turn denials into revenue.',
        icon: FileSearch,
        features: [
            'Denial Root-Cause Analysis',
            'Appeals Preparation',
            'Payer Trend Reports',
            'Prevention Workflows',
            'Timely Filing Tracking',
            'Underpayment Recovery',
        ],
        image: '/images/marketing/blog-revenue.jpg',
    },
    {
        slug: 'ar-follow-up',
        title: 'AR Follow-Up',
        summary: 'Reduce outstanding balances & improve cash flow.',
        description:
            'Persistent, prioritized payer follow-up that drives your days in A/R down month after month.',
        icon: HandCoins,
        features: [
            'Aged A/R Recovery',
            'Payer Call Campaigns',
            'Claim Status Tracking',
            'Credit Balance Resolution',
            'Small Balance Cleanup',
            'Weekly A/R Reports',
        ],
        image: '/images/marketing/office.jpg',
    },
    {
        slug: 'eligibility-verification',
        title: 'Eligibility Verification',
        summary: 'Verify insurance & benefits before every visit.',
        description:
            'Real-time coverage and benefit checks so your front desk never gets surprised.',
        icon: ClipboardCheck,
        features: [
            'Real-Time Eligibility',
            'Benefits Breakdown',
            'Co-Pay & Deductible Estimates',
            'Coordination of Benefits',
            'Patient Responsibility Notes',
            'Batch Verifications',
        ],
        image: '/images/marketing/reception.jpg',
    },
    {
        slug: 'credentialing',
        title: 'Credentialing',
        summary: 'Provider enrollment & re-credentialing.',
        description:
            'Get providers enrolled with commercial and government payers faster, and keep them there.',
        icon: BadgeCheck,
        features: [
            'CAQH Profile Management',
            'Medicare & Medicaid Enrollment',
            'Commercial Payer Contracts',
            'Re-Credentialing Alerts',
            'NPI & Taxonomy Setup',
            'Hospital Privileges',
        ],
        image: '/images/marketing/doctor-portrait.jpg',
    },
    {
        slug: 'prior-authorization',
        title: 'Prior Authorization',
        summary: 'Fast & accurate prior authorization support.',
        description:
            'We handle payer portals and clinical documentation so treatment starts on time.',
        icon: ShieldCheck,
        features: [
            'Authorization Requests',
            'Clinical Documentation',
            'Portal Submissions',
            'Status Monitoring',
            'Peer-to-Peer Scheduling',
            'Retro-Authorization',
        ],
        image: '/images/marketing/clinic.jpg',
    },
    {
        slug: 'patient-support',
        title: 'Patient Support',
        summary: 'Dedicated help desk for patient inquiries.',
        description:
            'Friendly, HIPAA-trained billing specialists who answer patient calls on your behalf.',
        icon: Headset,
        features: [
            'Billing Help Desk',
            'Statement Explanations',
            'Payment Plans',
            'Online Payment Support',
            'Bilingual Agents',
            'Call Quality Reports',
        ],
        image: '/images/marketing/team.jpg',
    },
    {
        slug: 'reporting-analytics',
        title: 'Reporting & Analytics',
        summary: 'Real-time reports for better decision-making.',
        description:
            'Live dashboards that show exactly where your money is, and where it is stuck.',
        icon: BarChart3,
        features: [
            'Live KPI Dashboards',
            'Payer Mix Analysis',
            'Provider Productivity',
            'Denial Heatmaps',
            'Collections Forecasts',
            'Custom Exports',
        ],
        image: '/images/marketing/doctors-screen.jpg',
    },
];

export const specialtyList: Specialty[] = [
    {
        name: 'Cardiology',
        icon: HeartPulse,
        description: 'Complex cath lab, echo and device coding.',
        metric: '+27% collections',
    },
    {
        name: 'Dermatology',
        icon: Sparkles,
        description: 'Mohs, pathology and cosmetic split billing.',
        metric: '97% clean claims',
    },
    {
        name: 'Mental Health',
        icon: Brain,
        description: 'Time-based psychotherapy and telehealth codes.',
        metric: '-82% denials',
    },
    {
        name: 'Orthopedics',
        icon: Bone,
        description: 'Global periods, DME and surgical modifiers.',
        metric: '+25% cash flow',
    },
    {
        name: 'Pain Management',
        icon: Zap,
        description: 'Injections, prior auths and UDT billing.',
        metric: '18 days in A/R',
    },
    {
        name: 'Gastroenterology',
        icon: Pill,
        description: 'Screening vs. diagnostic colonoscopy rules.',
        metric: '98% first pass',
    },
    {
        name: 'Neurology',
        icon: BrainCircuit,
        description: 'EEG, EMG and nerve conduction studies.',
        metric: '+31% revenue',
    },
    {
        name: 'OB/GYN',
        icon: Baby,
        description: 'Global maternity packages and split care.',
        metric: '-64% A/R > 90',
    },
    {
        name: 'Urology',
        icon: Droplets,
        description: 'In-office procedures and lab billing.',
        metric: '+22% collections',
    },
    {
        name: 'Pulmonology',
        icon: Wind,
        description: 'PFTs, sleep studies and critical care.',
        metric: '96% clean claims',
    },
    {
        name: 'Ophthalmology',
        icon: Eye,
        description: 'Cataract globals and refraction billing.',
        metric: '+19% collections',
    },
    {
        name: 'Dental & Oral Surgery',
        icon: Smile,
        description: 'Medical-dental cross coding done right.',
        metric: '2x faster payments',
    },
    {
        name: 'Pathology & Lab',
        icon: Microscope,
        description: 'High-volume lab claims and MUE edits.',
        metric: '99% accuracy',
    },
    {
        name: 'Internal Medicine',
        icon: Stethoscope,
        description: 'CCM, RPM and annual wellness visits.',
        metric: '+24% revenue',
    },
    {
        name: 'Physical Therapy',
        icon: Activity,
        description: '8-minute rule, KX modifiers and caps.',
        metric: '-70% denials',
    },
];

export const resultStats: Stat[] = [
    { value: 95, suffix: '%+', label: 'Collection Ratio' },
    { value: 18, label: 'Avg. Days in AR' },
    { value: 3, prefix: '$', label: 'Per Claim Cost' },
    { value: 30, suffix: '%+', label: 'Increase in Revenue' },
];

export const aboutStats: Stat[] = [
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 20, suffix: '+', label: 'Specialties' },
    { value: 99, suffix: '%', label: 'Client Retention' },
];

export const aboutHighlights = [
    '10+ Years of Experience',
    '500+ Happy Clients',
    'HIPAA Compliant',
    'Expert Team',
    'Advanced Technology',
];

export const trustedPartners = [
    'NextGen Healthcare',
    'eClinicalWorks',
    'athenahealth',
    'AdvancedMD',
    'Kareo',
    'Epic',
    'Cerner',
    'DrChrono',
];

export const whyChooseUs: { title: string; icon: LucideIcon }[] = [
    { title: 'HIPAA Compliant', icon: ShieldCheck },
    { title: 'Advanced Technology', icon: Cpu },
    { title: 'US-Based Support', icon: UserCheck },
    { title: 'Expert RCM Team', icon: Users },
    { title: 'Transparent Pricing', icon: FileText },
    { title: 'Proven Results', icon: Award },
];

export const caseStudyFilters = [
    'All',
    'Billing',
    'Coding',
    'RCM',
    'Denial Management',
];

export const caseStudyList: CaseStudy[] = [
    {
        category: 'RCM',
        practice: 'Cardiology Practice',
        title: '30% Increase in Collections in Just 90 Days',
        summary:
            'We optimized their revenue cycle, reduced denials, and improved collections significantly.',
        results: [
            'Collections increased by 30%',
            'Days in AR reduced from 45 to 18',
            'Denial rate reduced to 1.6%',
        ],
        metric: { label: 'Collections', value: '$125,430', change: '+30%' },
        series: [42, 48, 45, 58, 62, 71, 69, 84, 92],
    },
    {
        category: 'Denial Management',
        practice: 'Mental Health Practice',
        title: 'Reduced Denials by 82%',
        summary: 'Denial rate dropped from 9.3% to 1.6% in two quarters.',
        results: [
            'Denial rate dropped from 9.3% to 1.6%',
            'Appeals win rate reached 91%',
            'Telehealth coding fully compliant',
        ],
        metric: { label: 'Denial Rate', value: '1.6%', change: '-82%' },
        series: [90, 84, 76, 70, 58, 44, 36, 24, 16],
    },
    {
        category: 'Billing',
        practice: 'Orthopedics Clinic',
        title: 'Improved Cash Flow',
        summary: 'Cash flow improved by 25% in 3 months.',
        results: [
            'Cash flow improved by 25%',
            'Charge lag cut to 24 hours',
            'Patient statements digitized',
        ],
        metric: { label: 'Monthly Cash', value: '$212,900', change: '+25%' },
        series: [50, 52, 49, 57, 61, 64, 70, 73, 78],
    },
    {
        category: 'Coding',
        practice: 'Gastroenterology Group',
        title: '99% Coding Accuracy Across 6 Providers',
        summary:
            'Specialty coders eliminated under-coding on colonoscopy and E/M visits.',
        results: [
            'Coding accuracy reached 99%',
            'E/M under-coding eliminated',
            'Audit risk score lowered',
        ],
        metric: { label: 'Accuracy', value: '99.1%', change: '+11%' },
        series: [60, 66, 70, 74, 80, 84, 88, 90, 94],
    },
    {
        category: 'RCM',
        practice: 'Multi-Specialty Group',
        title: '$1.2M in Aged A/R Recovered',
        summary:
            'A focused A/R recovery sprint brought back revenue written off as lost.',
        results: [
            '$1.2M recovered from 120+ day A/R',
            'A/R over 90 days down 64%',
            'Net collection rate at 97%',
        ],
        metric: { label: 'Recovered', value: '$1.2M', change: '+64%' },
        series: [20, 28, 35, 41, 50, 62, 70, 81, 95],
    },
];

export const articleFilters = [
    'All',
    'RCM Tips',
    'Billing',
    'Coding',
    'Compliance',
];

export const articleList: Article[] = [
    {
        category: 'RCM Tips',
        title: '10 Ways to Improve Your Revenue Cycle',
        excerpt:
            'Practical steps every practice can take this quarter to collect more, faster.',
        date: 'May 12, 2026',
        readTime: '5 min read',
        image: '/images/marketing/blog-revenue.jpg',
    },
    {
        category: 'Billing',
        title: 'Understanding Medicare Advantage Billing',
        excerpt:
            'What changes when patients switch plans, and how to avoid costly mistakes.',
        date: 'May 6, 2026',
        readTime: '6 min read',
        image: '/images/marketing/blog-medicare.jpg',
    },
    {
        category: 'Coding',
        title: 'Common ICD-10 Coding Mistakes',
        excerpt:
            'The specificity errors that trigger the most denials, and how to fix them.',
        date: 'May 1, 2026',
        readTime: '4 min read',
        image: '/images/marketing/blog-coding.jpg',
    },
    {
        category: 'Compliance',
        title: 'HIPAA Checklist for Outsourced Billing',
        excerpt:
            'The safeguards to confirm before you share PHI with any billing partner.',
        date: 'Apr 24, 2026',
        readTime: '7 min read',
        image: '/images/marketing/doctors-screen.jpg',
    },
    {
        category: 'RCM Tips',
        title: 'How to Cut Days in A/R Below 30',
        excerpt:
            'A week-by-week follow-up cadence that keeps your receivables moving.',
        date: 'Apr 15, 2026',
        readTime: '5 min read',
        image: '/images/marketing/team-alt.jpg',
    },
    {
        category: 'Billing',
        title: 'Patient Statements That Actually Get Paid',
        excerpt:
            'Design, timing and payment options that raise patient collections.',
        date: 'Apr 8, 2026',
        readTime: '3 min read',
        image: '/images/marketing/clinic.jpg',
    },
];

export const faqList = [
    {
        question: 'How quickly can we get started?',
        answer: 'Most practices are fully onboarded in 2-3 weeks. We start with a free audit, connect to your EHR/PM system, and run a parallel billing period so nothing slips.',
    },
    {
        question: 'Do you work with our existing EHR?',
        answer: 'Yes. Our team works inside 40+ platforms including Epic, athenahealth, eClinicalWorks, NextGen, AdvancedMD and Kareo, so there is nothing new for your staff to learn.',
    },
    {
        question: 'How is pricing structured?',
        answer: 'Transparent, percentage-of-collections pricing with no setup fees and no long-term lock-in. If we do not collect, we do not get paid.',
    },
    {
        question: 'Is our patient data secure?',
        answer: 'We are HIPAA compliant with signed BAAs, encrypted data in transit and at rest, role-based access and annual third-party security audits.',
    },
];

export const testimonialList = [
    {
        quote: 'AbMalinex cleaned up two years of aged A/R in a single quarter. Our collections have never been this predictable.',
        name: 'Dr. Sarah Mitchell',
        role: 'Medical Director, Heartline Cardiology',
    },
    {
        quote: 'Denials used to eat our margin. Now they are rare, and the ones that happen get overturned fast.',
        name: 'James Porter',
        role: 'Practice Manager, Mindful Behavioral Health',
    },
    {
        quote: 'The live dashboard alone was worth it. I finally know where every dollar is in the revenue cycle.',
        name: 'Dr. Priya Raman',
        role: 'Owner, Summit Orthopedics',
    },
];
