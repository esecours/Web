import { EmergencyContact, FirstAidTopic, HealthFacility, EmergencyMedicalProfile, AlertLogEntry } from '../types';

export const BENIN_EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'samu-1',
    category: 'samu',
    categoryLabel: 'SAMU / Urgences Médicales',
    name: 'SAMU Bénin (Secours Médical D\'Urgence)',
    number: '112',
    formattedNumber: '112 / 118',
    description: 'Service d\'Assistance Médicale d\'Urgence national pour toute détresse vitale.',
    is24h: true,
    city: 'National (Bénin)',
    iconName: 'Ambulance',
    priority: 'vitale'
  },
  {
    id: 'pompiers-1',
    category: 'pompiers',
    categoryLabel: 'Sapeurs-Pompiers',
    name: 'Groupement National des Sapeurs-Pompiers',
    number: '118',
    formattedNumber: '118',
    description: 'Secours en cas d\'accident, incendie, malaise sur voie publique, noyade.',
    is24h: true,
    city: 'National (Bénin)',
    iconName: 'Flame',
    priority: 'vitale'
  },
  {
    id: 'police-1',
    category: 'police',
    categoryLabel: 'Police Républicaine',
    name: 'Police Secours Bénin',
    number: '117',
    formattedNumber: '117 / 166',
    description: 'Assistance immédiate en cas d\'agression, vol, accident grave ou insécurité.',
    is24h: true,
    city: 'National (Bénin)',
    iconName: 'ShieldAlert',
    priority: 'haute'
  },
  {
    id: 'protection-1',
    category: 'protection-civile',
    categoryLabel: 'Protection Civile',
    name: 'Agence Nationale de Protection Civile (ANPC)',
    number: '166',
    formattedNumber: '166',
    description: 'Gestion des catastrophes naturelles, inondations et urgences communautaires.',
    is24h: true,
    city: 'National (Bénin)',
    iconName: 'ShieldCheck',
    priority: 'haute'
  },
  {
    id: 'cnhu-1',
    category: 'hopital',
    categoryLabel: 'Hôpital Universitaire',
    name: 'CNHU-HKM Cotonou (Urgences)',
    number: '+22921300155',
    formattedNumber: '+229 21 30 01 55',
    description: 'Centre Hospitalier Universitaire Hubert Koutoukou Maga — Service des Urgences.',
    is24h: true,
    city: 'Cotonou',
    iconName: 'Hospital',
    priority: 'haute'
  },
  {
    id: 'menontin-1',
    category: 'hopital',
    categoryLabel: 'Hôpital de Zone',
    name: 'Hôpital de Zone de Ménontin',
    number: '+22921381211',
    formattedNumber: '+229 21 38 12 11',
    description: 'Urgences chirurgicales et pédiatriques de la zone ouest Cotonou.',
    is24h: true,
    city: 'Cotonou',
    iconName: 'Hospital',
    priority: 'standard'
  },
  {
    id: 'homel-1',
    category: 'hopital',
    categoryLabel: 'Maternité & Pédiatrie',
    name: 'HOMEL (Hôpital Mère-Enfant Lagune)',
    number: '+22921320202',
    formattedNumber: '+229 21 32 02 02',
    description: 'Urgences gynéco-obstétricales et pédiatriques spécialisées.',
    is24h: true,
    city: 'Cotonou',
    iconName: 'HeartPulse',
    priority: 'haute'
  },
  {
    id: 'toxicologie-1',
    category: 'toxicologie',
    categoryLabel: 'Anti-Poison / Toxicologie',
    name: 'Centre Anti-Poison & Urgences Toxiques',
    number: '+22921300155',
    formattedNumber: '+229 21 30 01 55 (Ext. 204)',
    description: 'Conseils immédiats en cas d\'ingestion de substances toxiques ou morsures venimeuses.',
    is24h: true,
    city: 'Cotonou',
    iconName: 'Biohazard',
    priority: 'haute'
  }
];

export const FIRST_AID_TOPICS: FirstAidTopic[] = [
  {
    id: 'malaise',
    title: 'Malaise et Syncope',
    category: 'malaise',
    categoryLabel: 'Malaise',
    severity: 'grave',
    shortDesc: 'Sensation de vertige, faiblesse soudaine ou perte de connaissance passagère.',
    symptoms: ['Pâleur extrême', 'Sueur froide', 'Vertiges', 'Trouble de la vision', 'Pouls faible'],
    stepsToDo: [
      'Allonger immédiatement la personne sur le dos.',
      'Surélever ses jambes d\'environ 30 cm pour favoriser le retour sanguin au cerveau.',
      'Desserrez col, ceinture et vêtements serrés.',
      'Aérer la pièce ou créer de l\'ombre si au soleil.',
      'Rassurer la victime et surveiller sa respiration.'
    ],
    stepsToAvoid: [
      'Ne pas lui donner à boire ni à manger immédiatement.',
      'Ne pas la gifler ni secouer brusquement.',
      'Ne pas la relever tant qu\'elle se sent faible.'
    ],
    whenToCall: 'Appelez le 112 ou le 118 si la personne ne reprend pas ses esprits après 1 minute, si elle a des douleurs thoraciques ou des antécédents cardiaques.',
    illustrationKey: 'malaise'
  },
  {
    id: 'perte-connaissance',
    title: 'Perte de connaissance (Inconscience)',
    category: 'malaise',
    categoryLabel: 'Urgence Vitale',
    severity: 'critique',
    shortDesc: 'La personne ne répond pas, ne réagit pas, mais respire toujours.',
    symptoms: ['Aucune réponse au stimulus vocal ou tactile', 'Mouvements respiratoires visibles', 'Absence de parole'],
    stepsToDo: [
      'Vérifier que la zone est sans danger pour vous et la victime.',
      'Vérifier la respiration en observant la poitrine pendant 10 secondes.',
      'Basculez délicatement la tête en arrière et levez le menton.',
      'Mettre la personne en Position Latérale de Sécurité (PLS).',
      'Appeler d\'urgence le SAMU (112) ou les Pompiers (118).'
    ],
    stepsToAvoid: [
      'Ne jamais laisser la personne sur le dos au risque d\'étouffement par la langue ou des vomissements.',
      'Ne pas mettre d\'eau sur le visage.'
    ],
    whenToCall: 'Appelez IMMÉDIATEMENT le 112 ou 118. Il s\'agit d\'une urgence médicale absolue.',
    illustrationKey: 'pls'
  },
  {
    id: 'saignement',
    title: 'Saignement Abondant (Hémorragie)',
    category: 'blessures',
    categoryLabel: 'Blessures',
    severity: 'critique',
    shortDesc: 'Perte de sang continue et importante provenant d\'une plaie.',
    symptoms: ['Sang rouge vif coulant en jet ou en continu', 'Pâleur', 'Soif intense', 'Impression de froid'],
    stepsToDo: [
      'Exercer une pression directe et forte sur la plaie avec un tissu propre ou des compresses.',
      'Allonger la personne pour éviter l\'état de choc.',
      'Maintenir la pression sans relâcher jusqu\'à l\'arrivée des secours.',
      'Si le tissu est imbibé, rajouter un autre tissu par-dessus sans retirer le premier.'
    ],
    stepsToAvoid: [
      'Ne pas poser de garrot sauf si vous êtes formé et en cas d\'urgence extrême.',
      'Ne pas retirer les objets enfoncés dans la plaie (couteau, verre, bois).'
    ],
    whenToCall: 'Appelez immédiatement le 118 (Pompiers) ou 112 (SAMU) en maintenant la compression.',
    illustrationKey: 'saignement'
  },
  {
    id: 'etouffement',
    title: 'Étouffement (Obstruction des voies aériennes)',
    category: 'etouffement',
    categoryLabel: 'Étouffement',
    severity: 'critique',
    shortDesc: 'Un objet ou un aliment bloque totalement la gorge. La victime ne peut ni parler ni tousser.',
    symptoms: ['Mains portées à la gorge', 'Incapacité de parler ou de tousser', 'Visage devenant bleu/violet'],
    stepsToDo: [
      'Donner 5 claques vigoureuses dans le dos entre les deux omoplates avec le plat de la main.',
      'Si inefficace, réaliser 5 compressions abdominales (manœuvre de Heimlich).',
      'Alterner 5 claques dans le dos et 5 compressions abdominales jusqu\'à l\'expulsion.'
    ],
    stepsToAvoid: [
      'Ne pas intervenir si la personne peut tousser vigoureusement (encouragez-la plutôt à tousser).',
      'Ne pas enfoncer les doigts à l\'aveugle dans la bouche.'
    ],
    whenToCall: 'Appelez d\'urgence le 112 ou 118 si l\'objet ne s\'expulse pas après les premières manœuvres.',
    illustrationKey: 'etouffement'
  },
  {
    id: 'brulure',
    title: 'Brûlure thermique ou chimique',
    category: 'brulures',
    categoryLabel: 'Brûlure',
    severity: 'grave',
    shortDesc: 'Lésion de la peau causée par la chaleur, le feu, l\'huile chaude ou un produit chimique.',
    symptoms: ['Rougeur intense', 'Cloches (phyctènes)', 'Douleur vive', 'Peau carbonisée dans les cas graves'],
    stepsToDo: [
      'Refroidir immédiatement la brûlure sous l\'eau courante tempérée (15-20°C) pendant au moins 15 minutes.',
      'Retirer les bijoux ou vêtements non collés à la peau.',
      'Recouvrir la plaie avec une compresse stérile ou un linge propre non pelucheux.'
    ],
    stepsToAvoid: [
      'Ne JAMAIS appliquer d\'huile, de dentifrice, de beurre, d\'œuf ou d\'onguent maison.',
      'Ne pas percer les cloques.',
      'Ne pas utiliser de glace directement sur la peau.'
    ],
    whenToCall: 'Appelez le 118 ou le 112 si la brûlure concerne le visage, les mains, dépasse la paume de la victime, ou chez l\'enfant.',
    illustrationKey: 'brulure'
  },
  {
    id: 'accident-circulation',
    title: 'Accident de la Circulation',
    category: 'accidents',
    categoryLabel: 'Accidents',
    severity: 'critique',
    shortDesc: 'Accident de moto (zémidjan), voiture ou piéton sur la voie publique.',
    symptoms: ['Victime au sol', 'Traumatismes multiples', 'Risque de suraccident'],
    stepsToDo: [
      'PROTÉGER : Sécuriser la zone (feux de détresse, triangles, balisage) pour éviter un autre accident.',
      'ALERTER : Appeler les Pompiers (118) ou la Police Républicaine (117) avec la localisation exacte.',
      'SECOURIR : Parler à la victime sans la déplacer. Maintenir sa tête droite si possible.'
    ],
    stepsToAvoid: [
      'Ne JAMAIS retirer le casque d\'un motocycliste accidenté.',
      'Ne pas déplacer la victime sauf en cas de danger imminent (incendie, explosion).'
    ],
    whenToCall: 'Appelez directement le 118 (Pompiers) ou le 117 (Police Secours).',
    illustrationKey: 'accident'
  },
  {
    id: 'convulsion',
    title: 'Convulsions / Crise d\'Épilepsie',
    category: 'malaise',
    categoryLabel: 'Neurologique',
    severity: 'grave',
    shortDesc: 'Contractions musculaires involontaires et violentes avec perte de conscience.',
    symptoms: ['Spasmes incontrôlés', 'Bave aux lèvres', 'Yeux révulsés', 'Rigidité du corps'],
    stepsToDo: [
      'Écarter tous les objets dangereux autour de la personne.',
      'Placer quelque chose de doux sous sa tête (coussin, vêtement plié).',
      'Chronométrer la durée de la crise.',
      'À la fin de la crise, placer la personne en Position Latérale de Sécurité (PLS).'
    ],
    stepsToAvoid: [
      'Ne JAMAIS mettre d\'objet ni vos doigts dans sa bouche.',
      'Ne pas tenter d\'immobiliser ses membres de force pendant la crise.'
    ],
    whenToCall: 'Appelez le 112 si la crise dure plus de 5 minutes, ou s\'il s\'agit d\'une première crise connue.',
    illustrationKey: 'convulsion'
  },
  {
    id: 'morsure-piqure',
    title: 'Morsure de Serpent / Envenimation',
    category: 'intoxication',
    categoryLabel: 'Morsures & Venins',
    severity: 'critique',
    shortDesc: 'Morsure de serpent ou piqûre d\'animal venimeux fréquente en zone rurale/périurbaine.',
    symptoms: ['Traces de crochets', 'Gonflement rapide', 'Douleur intense', 'Nausées', 'Sueurs'],
    stepsToDo: [
      'Garder la victime le plus calme possible (l\'agitation accélère la diffusion du venin).',
      'Immobiliser le membre mordu à l\'aide d\'une attelle ou en l\'attachant doucement.',
      'Nettoyer la plaie à l\'eau et au savon.',
      'Transporter d\'urgence la victime vers le centre de santé ou hôpital le plus proche.'
    ],
    stepsToAvoid: [
      'Ne pas inciser la plaie, ne pas sucer le venin.',
      'Ne pas appliquer de garrot serré.',
      'Ne pas poser de pierre noire sans avis médical.'
    ],
    whenToCall: 'Appelez d\'urgence le SAMU (112) ou transportez la personne vers l\'hôpital disposant de sérum antivenimeux.',
    illustrationKey: 'morsure'
  },
  {
    id: 'intoxication',
    title: 'Intoxication Alimentaire ou Médicamenteuse',
    category: 'intoxication',
    categoryLabel: 'Intoxication',
    severity: 'grave',
    shortDesc: 'Ingestion accidentelle de produits toxiques, d\'aliments avariés ou surdosage.',
    symptoms: ['Vomissements', 'Crampes abdominales aiguës', 'Diarrhée', 'Somnolence anormal'],
    stepsToDo: [
      'Identifier le produit absorbé et conserver l\'emballage/flacon.',
      'Appeler le Centre Anti-Poison (+229 21 30 01 55) ou le SAMU (112).',
      'Noter l\'heure d\'ingestion et la quantité estimée.'
    ],
    stepsToAvoid: [
      'Ne pas faire vomir la personne (risque de nouvelle brûlure de l\'œsophage si produit corrosif).',
      'Ne pas lui donner de lait ni de charbon sans avis médical.'
    ],
    whenToCall: 'Contactez le Centre Anti-Poison ou le 112 immédiatement.',
    illustrationKey: 'intoxication'
  },
  {
    id: 'traumatisme-fracture',
    title: 'Fracture et Traumatisme Osseux',
    category: 'blessures',
    categoryLabel: 'Traumatisme',
    severity: 'grave',
    shortDesc: 'Rupture d\'un os suite à un choc ou une chute importante.',
    symptoms: ['Douleur très vive à la palpation ou mouvement', 'Déformation visible', 'Impossibilité de bouger'],
    stepsToDo: [
      'Laisser le membre atteint dans la position où il se trouve.',
      'Immobiliser le membre avec des cales ou vêtements pliés sans forcer.',
      'Si plaie associée (fracture ouverte), la couvrir d\'un linge propre.'
    ],
    stepsToAvoid: [
      'Ne tentez JAMAIS de remettre l\'os en place (réduction).',
      'Ne faites pas marcher la victime.'
    ],
    whenToCall: 'Appelez le 118 (Pompiers) pour un transport médicalisé sécurisé.',
    illustrationKey: 'fracture'
  },
  {
    id: 'reaction-allergique',
    title: 'Choc Anaphylactique / Allergic Aiguë',
    category: 'malaise',
    categoryLabel: 'Allergie',
    severity: 'critique',
    shortDesc: 'Réaction allergique violente et soudaine suite à un aliment, médicament ou piqûre.',
    symptoms: ['Gonflement des lèvres, de la langue et du cou (œdème de Quincke)', 'Difficulté à respirer', 'Urticaire'],
    stepsToDo: [
      'Si la personne possède un stylo d\'adrénaline auto-injectable, l\'aider à l\'utiliser immédiatement.',
      'La mettre en position demi-assise si elle a du mal à respirer.',
      'Aérer l\'espace.'
    ],
    stepsToAvoid: [
      'Ne pas l\'allonger à plat si elle étouffe.',
      'Ne pas lui donner d\'eau.'
    ],
    whenToCall: 'Appelez d\'urgence le 112 (SAMU) ou le 118 (Pompiers).',
    illustrationKey: 'allergie'
  },
  {
    id: 'coup-de-chaleur',
    title: 'Coup de Chaleur / Insolation',
    category: 'autres',
    categoryLabel: 'Environnement',
    severity: 'grave',
    shortDesc: 'Surchauffe de l\'organisme due à une exposition prolongée au soleil ou forte chaleur tropicale.',
    symptoms: ['Température corporelle très élevée (>39°C)', 'Peau chaude et sèche', 'Maux de tête violents', 'Propos confus'],
    stepsToDo: [
      'Placer la personne immédiatement à l\'ombre et au frais.',
      'Refroidir son corps avec un linge humide sur le front, le cou et les aisselles.',
      'Si elle est consciente, lui faire boire de l\'eau fraîche par petites gorgées.'
    ],
    stepsToAvoid: [
      'Ne pas plonger la personne dans de l\'eau glacée (choc thermique).',
      'Ne pas lui donner d\'alcool ni de sodas.'
    ],
    whenToCall: 'Appelez le 112 si la température ne baisse pas ou si la victime tient des propos confus.',
    illustrationKey: 'chaleur'
  }
];

export const BENIN_HEALTH_FACILITIES: HealthFacility[] = [
  {
    id: 'pharmacie-du-port',
    name: 'Pharmacie du Port (Garde)',
    type: 'pharmacie-garde',
    typeLabel: 'Pharmacie de Garde',
    city: 'Cotonou',
    district: 'Ganhi / Zone Commerciale',
    address: 'Avenue de la Marina, près du Port Autonome, Cotonou',
    phone: '+229 21 31 22 10',
    isOpen24h: true,
    distanceKm: 0.8,
    lat: 6.3533,
    lng: 2.4312,
    services: ['Garde 24h/24', 'Médicaments d\'urgence', 'Oxygenothérapie', 'Paiement MoMo / Flooz']
  },
  {
    id: 'pharmacie-camp-guezo',
    name: 'Pharmacie Camp Guézo',
    type: 'pharmacie-garde',
    typeLabel: 'Pharmacie de Garde',
    city: 'Cotonou',
    district: 'Haie Vive / Camp Guézo',
    address: 'Boulevard de la Marina, face Camp Guézo, Cotonou',
    phone: '+229 21 30 15 40',
    isOpen24h: true,
    distanceKm: 1.4,
    lat: 6.3582,
    lng: 2.4180,
    services: ['Garde 24/7', 'Produits pédiatriques', 'Urgences', 'Mobile Money']
  },
  {
    id: 'pharmacie-st-michel',
    name: 'Pharmacie Saint Michel',
    type: 'pharmacie',
    typeLabel: 'Pharmacie',
    city: 'Cotonou',
    district: 'Saint Michel',
    address: 'Carrefour Saint Michel, Cotonou',
    phone: '+229 21 32 11 80',
    isOpen24h: false,
    distanceKm: 2.1,
    lat: 6.3650,
    lng: 2.4280,
    services: ['Médicaments généraux', 'Conseil pharmacien', 'Tension artérielle']
  },
  {
    id: 'cnhu-cotonou',
    name: 'CNHU-HKM (Centre Hospitalier Universitaire)',
    type: 'hopital',
    typeLabel: 'Hôpital de Référence',
    city: 'Cotonou',
    district: 'Cadjehoun / Haie Vive',
    address: 'Avenue Clozel, Cadjehoun, Cotonou',
    phone: '+229 21 30 01 55',
    isOpen24h: true,
    distanceKm: 1.2,
    lat: 6.3567,
    lng: 2.4101,
    services: ['Bloc Opératoire 24/7', 'Réanimation', 'Banque de Sang', 'Imagerie Médicale (Scanner/Radio)']
  },
  {
    id: 'hopital-menontin',
    name: 'Hôpital de Zone de Ménontin',
    type: 'hopital',
    typeLabel: 'Hôpital de Zone',
    city: 'Cotonou',
    district: 'Ménontin',
    address: 'Quartier Ménontin, près du marché, Cotonou',
    phone: '+229 21 38 12 11',
    isOpen24h: true,
    distanceKm: 3.5,
    lat: 6.3812,
    lng: 2.3890,
    services: ['Urgences Chirurgicales', 'Maternité', 'Laboratoire 24/7']
  },
  {
    id: 'homel-cadjehoun',
    name: 'HOMEL (Hôpital Mère-Enfant Lagune)',
    type: 'urgences',
    typeLabel: 'Centre Spécialisé Mère-Enfant',
    city: 'Cotonou',
    district: 'Ganhi / Lagune',
    address: 'Boulevard de la Lagune, Cotonou',
    phone: '+229 21 32 02 02',
    isOpen24h: true,
    distanceKm: 2.3,
    lat: 6.3610,
    lng: 2.4350,
    services: ['Urgences Pédiatriques', 'Néonatologie', 'Maternité de pointe']
  },
  {
    id: 'hopital-calavi',
    name: 'Hôpital de Zone Abomey-Calavi / Zinvie',
    type: 'hopital',
    typeLabel: 'Hôpital de Zone',
    city: 'Abomey-Calavi',
    district: 'Calavi Centre',
    address: 'Voie Inter-États Cotonou-Niamey, Calavi',
    phone: '+229 21 36 01 20',
    isOpen24h: true,
    distanceKm: 12.5,
    lat: 6.4480,
    lng: 2.3550,
    services: ['Urgences Générales', 'Traumatologie', 'Ambulance']
  },
  {
    id: 'pharmacie-calavi-kpota',
    name: 'Pharmacie Calavi Kpota (Garde)',
    type: 'pharmacie-garde',
    typeLabel: 'Pharmacie de Garde',
    city: 'Abomey-Calavi',
    district: 'Calavi Kpota',
    address: 'Carrefour Kpota, Abomey-Calavi',
    phone: '+229 21 36 10 05',
    isOpen24h: true,
    distanceKm: 11.2,
    lat: 6.4420,
    lng: 2.3510,
    services: ['Garde 24/7', 'Produits de santé', 'Service rapide']
  },
  {
    id: 'chud-porto-novo',
    name: 'CHUD Ouémé-Plateau (Porto-Novo)',
    type: 'hopital',
    typeLabel: 'Hôpital Départemental',
    city: 'Porto-Novo',
    district: 'Djassin',
    address: 'Boulevard de la Capitale, Porto-Novo',
    phone: '+229 20 21 24 20',
    isOpen24h: true,
    distanceKm: 28.0,
    lat: 6.4960,
    lng: 2.6280,
    services: ['Urgences Médicales', 'Chirurgie', 'Pédiatrie', 'Service Ambulancier']
  }
];

export const DEFAULT_EMERGENCY_PROFILE: EmergencyMedicalProfile = {
  fullName: 'Koffi Bienvenu SOSSOU',
  birthDate: '1992-05-14',
  bloodGroup: 'O+',
  allergies: ['Pénicilline', 'Arachides'],
  currentTreatments: ['Antihypertenseur (1 compr. / jour)'],
  medicalHistory: ['Asthme léger contrôlé'],
  primaryContactName: 'Ablavi Edwige SOSSOU (Épouse)',
  primaryContactPhone: '+229 97 20 45 88',
  primaryContactRelation: 'Conjoint',
  secondaryContactPhone: '+229 95 11 32 04',
  homeAddress: 'Quartier Cadjehoun, Carré 412, Cotonou, Bénin',
  organDonor: true,
  notes: 'S\'exprime en Français et Fon. Porte ses lunettes.'
};

export const INITIAL_ALERT_LOGS: AlertLogEntry[] = [
  {
    id: 'log-1',
    timestamp: 'Aujourd\'hui, 14:32',
    type: 'signal_sonore',
    title: 'Signal Sonore d\'Alerte Activé',
    details: 'Déclenchement du signal sonore d\'urgence à volume maximal (45 secondes).',
    status: 'succes'
  },
  {
    id: 'log-2',
    timestamp: 'Aujourd\'hui, 09:18',
    type: 'appel_urgence',
    title: 'Appel SAMU Bénin (112)',
    details: 'Mise en relation rapide avec la régulation médicale SAMU Cotonou.',
    status: 'succes'
  },
  {
    id: 'log-3',
    timestamp: 'Hier, 18:42',
    type: 'consultation_guide',
    title: 'Fiche Fiche Premiers Secours : Étouffement',
    details: 'Consultation hors-ligne de la manœuvre de Heimlich.',
    status: 'succes'
  },
  {
    id: 'log-4',
    timestamp: '12 Août 2026, 11:05',
    type: 'fiche_partagee',
    title: 'Mise à jour Fiche d\'Urgence',
    details: 'Modification du contact de confiance et ajout allergie Pénicilline.',
    status: 'succes'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Qu\'est-ce que E-Secours ?',
    answer: 'E-Secours est une plateforme mobile d\'assistance, d\'orientation et de prise en charge rapide développée pour le Bénin et l\'Afrique de l\'Ouest. Elle centralise les numéros d\'urgence officiels, les conseils de premiers secours guidés, les fiches médicales d\'urgence, la localisation des pharmacies de garde/hôpitaux et un assistant virtuel disponible 24h/24.'
  },
  {
    question: 'Quelles ressources spécifiques du Ministère de la Santé sont disponibles sur l\'application mobile ?',
    answer: 'Dans la version application mobile d\'E-Secours, la section "Numéros d\'urgence" répertorie les Lignes Vertes officielles du Ministère de la Santé (notamment la ligne de dénonciation des Violences Basées sur le Genre - VBG) et les contacts des Centres de Promotion Sociale (CPS) du Bénin. De plus, la section "Conseils" inclut le cadre légal en Santé Sexuelle et Reproductive (SSR) au Bénin, ainsi qu\'un volet d\'appui au Ministère de la Santé pour la capitalisation des actions des OSC de jeunes et l\'identification des organisations.'
  },
  {
    question: 'Est-ce que E-Secours fonctionne sans Internet (Hors-Ligne) ?',
    answer: 'Oui ! C\'est l\'un de nos piliers fondamentaux. Les numéros d\'urgence officiels, la bibliothèque complète de premiers secours, votre Fiche d\'Urgence numérique ainsi que le signal sonore restent 100% accessibles même sans connexion Wi-Fi ni données cellulaires.'
  },
  {
    question: 'E-Secours peut-il appeler automatiquement les secours ?',
    answer: 'E-Secours prépare et simplifie le processus d\'appel vers les numéros officiels (SAMU 112, Pompiers 118, Police 117). Pour des raisons de sécurité et de réglementation, le déclenchement de l\'appel téléphonique est initié par l\'utilisateur sur le réseau de son opérateur (MTN, Moov, Celtiis).'
  },
  {
    question: 'Comment fonctionne la Fiche d\'Urgence numérique ?',
    answer: 'Votre Fiche d\'Urgence regroupe vos informations vitale (groupe sanguin, allergies, personnes à contacter, antécédents). Elle peut être affichée en plein écran ou scannée via un QR Code sécurisé pour permettre aux premiers secouristes ou médecins d\'accéder instantanément à vos données sans déverrouiller inutilement votre téléphone.'
  },
  {
    question: 'Comment fonctionne l\'assistant virtuel IA ?',
    answer: 'L\'assistant virtuel E-Secours s\'appuie sur l\'intelligence artificielle (Gemini) pour répondre en langage naturel à vos questions d\'orientation (ex: "Quelle pharmacie de garde près de Cadjehoun ?", "Que faire en cas de morsure de serpent ?"). Il est également doté d\'une fonction vocale pour échanger à la voix.'
  },
  {
    question: 'Mes données médicales sont-elles sécurisées ?',
    answer: 'Absolument. Vos données médicales personnelles enregistrées dans l\'application restent stockées localement sur votre smartphone en chiffré. Elles ne sont jamais vendues ni transférées à des tiers sans votre consentement explicite.'
  },
  {
    question: 'Comment fonctionne l\'outil Signal Sonore ?',
    answer: 'En cas d\'agression, d\'accident ou de malaise où vous ne pouvez pas parler haut, un simple bouton déclenche une alarme sonore stridente à volume élevé accompagnée de flashs visuels pour attirer l\'attention des personnes à proximité.'
  },
  {
    question: 'E-Secours est-il déjà disponible au Bénin ?',
    answer: 'Oui, E-Secours est lancé en priorité au Bénin (Cotonou, Abomey-Calavi, Porto-Novo, Parakou) avec un déploiement progressif prévu dans la sous-région Ouest-Africaine (Togo, Côte d\'Ivoire, Sénégal).'
  },
  {
    question: 'Est-ce que E-Secours remplace un médecin ou les secours ?',
    answer: 'Non. E-Secours est un outil d\'assistance, de prévention et d\'orientation. Il ne remplace en aucun cas le diagnostic d\'un médecin professionnel, la prise en charge médicale directe ou l\'intervention physique des services de secours officiels.'
  }
];
