export type PageRoute =
  | 'accueil'
  | 'apropos'
  | 'fonctionnalites'
  | 'premiers-secours'
  | 'centre-urgence'
  | 'faq'
  | 'contact'
  | 'telecharger';

export interface EmergencyContact {
  id: string;
  category: 'samu' | 'pompiers' | 'police' | 'protection-civile' | 'hopital' | 'toxicologie';
  categoryLabel: string;
  name: string;
  number: string;
  formattedNumber: string;
  description: string;
  is24h: boolean;
  city?: string;
  iconName: string;
  priority: 'haute' | 'vitale' | 'standard';
}

export interface FirstAidTopic {
  id: string;
  title: string;
  category: 'malaise' | 'blessures' | 'accidents' | 'brulures' | 'etouffement' | 'intoxication' | 'autres';
  categoryLabel: string;
  severity: 'critique' | 'grave' | 'modere';
  shortDesc: string;
  symptoms: string[];
  stepsToDo: string[];
  stepsToAvoid: string[];
  whenToCall: string;
  illustrationKey: string;
}

export interface HealthFacility {
  id: string;
  name: string;
  type: 'pharmacie' | 'pharmacie-garde' | 'hopital' | 'centre-sante' | 'urgences';
  typeLabel: string;
  city: 'Cotonou' | 'Abomey-Calavi' | 'Porto-Novo' | 'Parakou' | 'Ouidah';
  district: string;
  address: string;
  phone: string;
  isOpen24h: boolean;
  distanceKm: number;
  lat: number;
  lng: number;
  services: string[];
}

export interface EmergencyMedicalProfile {
  fullName: string;
  birthDate: string;
  bloodGroup: string;
  allergies: string[];
  currentTreatments: string[];
  medicalHistory: string[];
  primaryContactName: string;
  primaryContactPhone: string;
  primaryContactRelation: string;
  secondaryContactPhone?: string;
  homeAddress: string;
  organDonor: boolean;
  notes: string;
}

export interface AlertLogEntry {
  id: string;
  timestamp: string;
  type: 'signal_sonore' | 'appel_urgence' | 'consultation_guide' | 'fiche_partagee' | 'geolocalisation';
  title: string;
  details: string;
  status: 'succes' | 'en_cours' | 'annule';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedActions?: string[];
  source?: 'gemini' | 'local_kb';
}

// Domaines prioritaires de la plateforme E-Secours
export type InterventionDomain = 
  | 'vbg' // Violences Basées sur le Genre
  | 'autonomisation_femmes' // Autonomisation des femmes
  | 'environnement' // Environnement & Climat
  | 'urgence_sante'; // Santé d'urgence & Secourisme

export interface FundingPartner {
  id: string;
  name: string;
  type: 'Bailleur International' | 'ONG Nationale' | 'Fondation' | 'Entreprise RSE' | 'Agence ONU';
  domains: InterventionDomain[];
  interests: string[];
  address: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  website?: string;
  description: string;
  totalFundingAllocated: string;
  activeCallsCount: number;
  recruitedVolunteersCount: number;
  verified: boolean;
  registeredAt: string;
  contactPerson: string;
  contactRole: string;
}

export interface FundingOpportunity {
  id: string;
  partnerId: string;
  partnerName: string;
  title: string;
  domain: InterventionDomain;
  domainLabel: string;
  summary: string;
  description: string;
  totalBudget: string;
  maxGrantPerProject: string;
  location: string;
  eligibility: string[];
  deadline: string;
  requiredDocuments: string[];
  status: 'ouvert' | 'en_evaluation' | 'cloture';
  applicationsCount: number;
}

export interface VolunteerMission {
  id: string;
  partnerId: string;
  partnerName: string;
  title: string;
  domain: InterventionDomain;
  domainLabel: string;
  description: string;
  location: string;
  spotsNeeded: number;
  spotsFilled: number;
  skillsRequired: string[];
  startDate: string;
  duration: string;
  status: 'ouvert' | 'complet' | 'termine';
  registeredVolunteers: {
    name: string;
    email: string;
    phone: string;
    joinedAt: string;
  }[];
}

export interface ActivityReport {
  id: string;
  title: string;
  organizationName: string;
  partnerName: string;
  domain: InterventionDomain;
  status: 'en_cours' | 'realise' | 'en_planification';
  progressPercentage: number;
  beneficiariesCount: number;
  location: string;
  budgetSpent: string;
  startDate: string;
  endDate: string;
  description: string;
  keyDeliverables: string[];
  fieldUpdates: {
    id: string;
    date: string;
    author: string;
    note: string;
  }[];
}

export interface ProjectApplication {
  id: string;
  opportunityId: string;
  opportunityTitle: string;
  partnerName: string;
  applicantName: string;
  organizationName: string;
  email: string;
  phone: string;
  projectTitle: string;
  requestedAmount: string;
  summary: string;
  submittedAt: string;
  status: 'en_attente' | 'en_cours_examen' | 'approuve' | 'rejete';
}

export interface VolunteerRegistration {
  id: string;
  missionId: string;
  missionTitle: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  skills: string;
  availability: string;
  motivation: string;
  submittedAt: string;
}

