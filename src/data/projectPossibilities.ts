export type ProjectSignalCategory =
  | 'source'
  | 'pattern'
  | 'scale'
  | 'approach'
  | 'interest'
  | 'method'
  | 'development';

export type ProjectPossibility = {
  id: string;
  title: string;
  question: string;
  detail: string;
  route: string;
  specific: boolean;
  signals: Partial<Record<ProjectSignalCategory, string[]>>;
};

export const projectPossibilities: ProjectPossibility[] = [
  {
    id: 'plymouth-pulmonary-rehab',
    title: 'Pulmonary rehabilitation need in Plymouth',
    question: 'Is pulmonary rehabilitation needed in Plymouth, New Hampshire?',
    detail: 'Examine population need, current access, referral pathways, likely demand, workforce, reimbursement, and the feasibility of collaboration with Speare Memorial Hospital.',
    route: 'Need assessment',
    specific: true,
    signals: { source: ['clinical-one', 'clinical-two', 'community'], pattern: ['access', 'prevention', 'fit', 'coordination'], scale: ['organizational', 'macro'], approach: ['investigate', 'evaluate', 'program'], interest: ['cardiopulmonary', 'rural'], method: ['needs', 'quantitative', 'mixed', 'market'], development: ['partnership', 'program-evaluation', 'implementation'] },
  },
  {
    id: 'cash-practice',
    title: 'Sustainable cash-based practice models',
    question: 'What makes a cash-based physical therapy practice sustainable?',
    detail: 'Investigate strategies that balance market demand, pricing, access, ethical obligations, operations, workload, and financial durability.',
    route: 'Sustainability analysis',
    specific: true,
    signals: { source: ['employment', 'clinical-one', 'clinical-two'], pattern: ['payment', 'workflow', 'workforce'], scale: ['micro', 'organizational'], approach: ['business', 'evaluate', 'investigate'], interest: ['practice-business'], method: ['financial', 'market', 'quantitative', 'mixed'], development: ['business-plan', 'for-profit', 'financial-model'] },
  },
  {
    id: 'rural-postpartum',
    title: 'Rural postpartum physical therapy outcomes',
    question: 'Could a postpartum physical therapy program improve outcomes at a rural hospital?',
    detail: 'Define the unmet need and meaningful outcomes, then analyze program design, reach, referral relationships, resources, implementation, and evaluation for a clinical partner.',
    route: 'Outcomes evaluation',
    specific: true,
    signals: { source: ['clinical-one', 'clinical-two', 'community'], pattern: ['access', 'prevention', 'fit', 'quality'], scale: ['organizational', 'macro'], approach: ['program', 'evaluate', 'investigate'], interest: ['maternal', 'rural'], method: ['needs', 'quantitative', 'qualitative', 'mixed'], development: ['program-evaluation', 'partnership', 'implementation'] },
  },
  {
    id: 'shared-credentials',
    title: 'Shared academic and clinical credentials',
    question: 'Could shared PSU-Speare academic and clinical credentials create mutual benefit?',
    detail: 'Investigate combined clinical-academic roles, including incentives, credentialing, workload, governance, and value to employees and both organizations.',
    route: 'Partnership analysis',
    specific: true,
    signals: { source: ['employment', 'coursework', 'clinical-one', 'clinical-two'], pattern: ['workforce', 'coordination', 'culture'], scale: ['organizational'], approach: ['leadership', 'investigate', 'evaluate'], interest: ['education-workforce'], method: ['qualitative', 'mixed', 'needs', 'policy-analysis'], development: ['partnership', 'implementation'] },
  },
  {
    id: 'athletic-trainer-dpt-pipeline',
    title: 'Athletic trainer to DPT entry pipeline',
    question: 'Could PSU build a supported DPT entry pipeline for athletic trainers?',
    detail: 'Examine recruitment, prerequisites, advising, admissions, workload, and a graduate-assistant compensation model for athletic training work at PSU.',
    route: 'Workforce pipeline',
    specific: true,
    signals: { source: ['employment', 'coursework', 'community'], pattern: ['workforce', 'payment', 'coordination', 'culture'], scale: ['organizational'], approach: ['investigate', 'leadership', 'program', 'business'], interest: ['athletic-training', 'education-workforce'], method: ['needs', 'financial', 'qualitative', 'mixed'], development: ['partnership', 'financial-model', 'implementation', 'program-evaluation'] },
  },
  {
    id: 'senior-center-partnership',
    title: 'Expanded Plymouth Senior Center partnership',
    question: 'How could PSU deepen its relationship with the Plymouth Senior Center?',
    detail: "Build from Dr. Crane's Tai Chi for Balance program while investigating additional services, learning opportunities, outcomes, partner priorities, and sustainable mutual benefit.",
    route: 'Community partnership',
    specific: true,
    signals: { source: ['community', 'pro-bono', 'coursework'], pattern: ['prevention', 'possibility', 'access', 'fit'], scale: ['organizational', 'macro'], approach: ['investigate', 'program', 'evaluate'], interest: ['healthy-aging', 'community-health'], method: ['needs', 'qualitative', 'mixed', 'quantitative'], development: ['partnership', 'nonprofit', 'program-evaluation', 'implementation'] },
  },
  {
    id: 'adventure-education-wellness',
    title: 'Active Outdoor Wellness with Adventure Education',
    question: 'Could PSU connect physical therapy and Adventure Education through Active Outdoor Wellness?',
    detail: 'Investigate a community-based project linking movement, outdoor participation, prevention, access, student learning, and sustainable partnership design.',
    route: 'Community program development',
    specific: true,
    signals: { source: ['community', 'coursework', 'pro-bono'], pattern: ['prevention', 'fit', 'possibility', 'access'], scale: ['organizational', 'macro'], approach: ['investigate', 'program', 'evaluate'], interest: ['outdoor-wellness', 'community-health'], method: ['needs', 'qualitative', 'mixed', 'evidence'], development: ['partnership', 'nonprofit', 'implementation', 'program-evaluation'] },
  },
  {
    id: 'service-gap',
    title: 'Rural rehabilitation access or service gap',
    question: 'Is a rehabilitation service missing or difficult to access in a rural community?',
    detail: 'Assess population need, current capacity, referral patterns, barriers, workforce, reimbursement, and feasible service models.',
    route: 'Access and service gaps',
    specific: false,
    signals: { pattern: ['access', 'fit', 'coordination', 'workforce'], scale: ['organizational', 'macro'], approach: ['investigate', 'program'], interest: ['rural', 'community-health'], method: ['needs', 'market', 'mixed'], development: ['partnership', 'business-plan', 'nonprofit'] },
  },
  {
    id: 'population-health',
    title: 'PT-led population health initiative',
    question: 'Could physical therapy help address a preventable community health problem?',
    detail: 'Investigate prevention related to falls, chronic disease, physical inactivity, occupational health, or another community priority.',
    route: 'Population health',
    specific: false,
    signals: { source: ['community', 'pro-bono'], pattern: ['prevention', 'access', 'fit'], scale: ['macro', 'organizational'], approach: ['investigate', 'program', 'evaluate'], interest: ['community-health', 'healthy-aging', 'outdoor-wellness'], method: ['needs', 'mixed', 'quantitative'], development: ['nonprofit', 'partnership', 'program-evaluation'] },
  },
  {
    id: 'care-pathway',
    title: 'Earlier access or better care coordination',
    question: 'Could a different referral or care pathway improve access, outcomes, or cost?',
    detail: 'Examine direct access, earlier referral, transitions, handoffs, and the consequences of changing the pathway.',
    route: 'Care pathways',
    specific: false,
    signals: { pattern: ['access', 'coordination', 'workflow', 'payment'], scale: ['micro', 'organizational'], approach: ['diagnose', 'improve', 'evaluate'], interest: ['care-delivery'], method: ['quantitative', 'qualitative', 'mixed'], development: ['implementation', 'program-evaluation'] },
  },
  {
    id: 'practice-sustainability',
    title: 'Sustainable practice operations',
    question: 'Which operational or payment strategies could make a physical therapy practice more sustainable?',
    detail: 'Analyze staffing, scheduling, workload, service mix, payment, pricing, access, and financial resilience.',
    route: 'Practice sustainability',
    specific: false,
    signals: { source: ['employment', 'clinical-one', 'clinical-two'], pattern: ['payment', 'workflow', 'workforce'], scale: ['micro', 'organizational'], approach: ['business', 'improve', 'evaluate'], interest: ['practice-business'], method: ['financial', 'market', 'quantitative'], development: ['business-plan', 'for-profit', 'financial-model'] },
  },
  {
    id: 'program-evaluation',
    title: 'Evaluation of an existing program',
    question: 'Is an existing clinical or community program producing meaningful outcomes?',
    detail: 'Define success, stakeholders, measures, reach, implementation fidelity, costs, and opportunities for improvement.',
    route: 'Program evaluation',
    specific: false,
    signals: { pattern: ['quality', 'possibility', 'workflow'], scale: ['micro', 'organizational'], approach: ['evaluate', 'improve', 'diagnose'], interest: ['care-delivery', 'community-health'], method: ['quantitative', 'qualitative', 'mixed'], development: ['program-evaluation', 'implementation'] },
  },
  {
    id: 'workforce-development',
    title: 'Rehabilitation workforce development',
    question: 'Could a workforce strategy improve recruitment, retention, capability, or career development?',
    detail: 'Examine mentorship, career ladders, residencies, workload, role design, compensation, and professional growth.',
    route: 'Workforce development',
    specific: false,
    signals: { source: ['employment', 'clinical-one', 'clinical-two'], pattern: ['workforce', 'culture', 'coordination'], scale: ['organizational'], approach: ['leadership', 'program', 'investigate'], interest: ['education-workforce'], method: ['needs', 'qualitative', 'mixed'], development: ['implementation', 'partnership', 'program-evaluation'] },
  },
  {
    id: 'academic-clinical-partnership',
    title: 'Academic-clinical partnership model',
    question: 'What partnership structure could create mutual value for an academic and clinical organization?',
    detail: 'Analyze shared priorities, governance, incentives, workload, learning, staffing, patient benefit, and sustainability.',
    route: 'Academic-clinical partnerships',
    specific: false,
    signals: { source: ['coursework', 'employment', 'clinical-one', 'clinical-two'], pattern: ['coordination', 'workforce', 'culture', 'possibility'], scale: ['organizational'], approach: ['investigate', 'leadership', 'evaluate'], interest: ['education-workforce'], method: ['qualitative', 'needs', 'mixed'], development: ['partnership', 'implementation'] },
  },
  {
    id: 'technology-enabled-care',
    title: 'Technology-enabled care or operations',
    question: 'Could technology improve care or operations without creating new burdens?',
    detail: 'Examine telehealth, remote monitoring, documentation, information exchange, decision support, access, usability, and unintended effects.',
    route: 'Technology',
    specific: false,
    signals: { pattern: ['technology', 'access', 'workflow', 'quality'], scale: ['micro', 'organizational'], approach: ['investigate', 'improve', 'evaluate'], interest: ['technology'], method: ['qualitative', 'quantitative', 'mixed', 'evidence'], development: ['implementation', 'program-evaluation', 'business-plan'] },
  },
  {
    id: 'policy-change',
    title: 'Policy or reimbursement change',
    question: 'What policy or reimbursement change could improve access, quality, or physical therapy practice?',
    detail: 'Analyze current policy, affected stakeholders, incentives, evidence, alternatives, political feasibility, and likely consequences.',
    route: 'Policy and advocacy',
    specific: false,
    signals: { pattern: ['policy', 'payment', 'access'], scale: ['macro'], approach: ['advocacy', 'investigate', 'evaluate'], interest: ['policy'], method: ['policy-analysis', 'evidence', 'qualitative'], development: ['advocacy-plan', 'implementation'] },
  },
  {
    id: 'evidence-implementation',
    title: 'Implementation of an evidence-supported practice',
    question: 'Why has an evidence-supported practice not been adopted or sustained?',
    detail: 'Diagnose barriers, facilitators, workflow, leadership, culture, resources, stakeholder perspectives, and implementation strategies.',
    route: 'Implementation',
    specific: false,
    signals: { pattern: ['workflow', 'culture', 'quality', 'possibility'], scale: ['micro', 'organizational'], approach: ['diagnose', 'improve', 'leadership'], interest: ['care-delivery'], method: ['qualitative', 'mixed', 'evidence'], development: ['implementation', 'program-evaluation'] },
  },
  {
    id: 'social-enterprise',
    title: 'Nonprofit or social-enterprise rehabilitation service',
    question: 'Could a mission-driven rehabilitation service address unmet need and remain financially viable?',
    detail: 'Examine community need, access, service design, revenue, costs, partnerships, governance, equity, and sustainability.',
    route: 'Nonprofit or social enterprise',
    specific: false,
    signals: { source: ['community', 'pro-bono', 'employment'], pattern: ['access', 'fit', 'payment', 'prevention'], scale: ['organizational', 'macro'], approach: ['business', 'program', 'investigate'], interest: ['community-health', 'practice-business'], method: ['needs', 'financial', 'market', 'mixed'], development: ['nonprofit', 'business-plan', 'financial-model', 'partnership'] },
  },
  {
    id: 'quality-improvement',
    title: 'Quality, continuity, or safety improvement',
    question: 'What system factors contribute to variation, delay, preventable utilization, or poor continuity?',
    detail: 'Analyze current performance, process variation, stakeholders, causal factors, measures, and improvement strategies.',
    route: 'Quality improvement',
    specific: false,
    signals: { source: ['clinical-one', 'clinical-two', 'employment'], pattern: ['quality', 'workflow', 'coordination', 'technology'], scale: ['micro', 'organizational'], approach: ['diagnose', 'improve', 'evaluate'], interest: ['care-delivery'], method: ['quantitative', 'qualitative', 'mixed'], development: ['implementation', 'program-evaluation'] },
  },
];
