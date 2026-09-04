import { GoogleGenAI } from '@google/genai';

export async function handleAssistantRequest(prompt: string, conversationHistory: Array<{ role: string; text: string }> = []) {
  const apiKey = process.env.GEMINI_API_KEY;

  const systemInstruction = `Tu es l'assistant virtuel IA d'E-Secours (E-Secours Bénin), une plateforme mobile d'assistance, d'orientation et de prise en charge d'urgence au Bénin et en Afrique de l'Ouest.
Tes missions :
1. Orienter calmement, rapidement et très clairement l'utilisateur vers les bons gestes de premiers secours ou les numéros d'urgence du Bénin.
2. Numéros d'urgence officiels au Bénin :
   - SAMU (Urgences Médicales) : 112 ou 118
   - Sapeurs-Pompiers : 118
   - Police Secours / Police Républicaine : 117 ou 166
   - Protection Civile : 166
   - CNHU Cotonou : +229 21 30 01 55
3. Adopter un ton rassurant, professionnel, humain et concis (Afrique de l'Ouest / Bénin).
4. AVERTISSEMENT MEDICAL OBLIGATOIRE : Si la question concerne un symptôme ou un état médical grave, rappelle gentiment : "En cas d'urgence vitale, contactez directement le 112 (SAMU) ou le 118 (Pompiers). Je fournis des conseils d'orientation et ne remplace pas un médecin."
5. Réponds en français clair avec des puces pour la lisibilité.`;

  if (apiKey) {
    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build'
          }
        }
      });

      const contents = conversationHistory.map(h => `${h.role === 'user' ? 'Utilisateur' : 'Assistant'}: ${h.text}`).join('\n') + `\nUtilisateur: ${prompt}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.3
        }
      });

      if (response && response.text) {
        return { text: response.text, source: 'gemini' as const };
      }
    } catch (err) {
      console.error('Gemini API call failed, falling back to local KB:', err);
    }
  }

  // Smart local fallback KB for Benin E-Secours emergency orientation
  const lower = prompt.toLowerCase();

  if (lower.includes('étouff') || lower.includes('etouff') || lower.includes('heimlich')) {
    return {
      text: `🆘 **Que faire en cas d'étouffement (Voies aériennes bloquées) :**

1. **Si la personne ne peut ni parler, ni tousser, ni respirer :**
   - Donnez **5 claques vigoureuses dans le dos** entre les deux omoplates avec le plat de la main.
   - Si inefficace, réalisez **5 compressions abdominales (Manœuvre de Heimlich)** en vous plaçant derrière la victime, poing fermé sous le sternum.
   - Alternez 5 claques et 5 compressions.
2. **Appelez immédiatement le SAMU (112) ou les Pompiers (118).**

*⚠️ Avertissement : Cet outil fournit une orientation. Contactez les secours professionnels en cas d'urgence.*`,
      source: 'local_kb' as const
    };
  }

  if (lower.includes('saign') || lower.includes('sang') || lower.includes('plaie')) {
    return {
      text: `🩸 **En cas d'hémorragie ou de saignement abondant :**

1. **Compression directe :** Appuyez très fort sur la plaie avec un tissu propre ou un linge sans relâcher.
2. **Allonger la victime :** Gardez-la allongée au calme pour éviter l'état de choc.
3. **Pression continue :** Maintenez la compression jusqu'à l'arrivée des secours.
4. **Appelez les Pompiers (118) ou le SAMU (112).**

*⚠️ Ne retirez aucun objet profondément enfoncé dans la plaie.*`,
      source: 'local_kb' as const
    };
  }

  if (lower.includes('pharmacie') || lower.includes('garde') || lower.includes('cotonou')) {
    return {
      text: `🏥 **Pharmacies de garde principales à Cotonou / Abomey-Calavi :**

- **Pharmacie du Port (Garde 24/7)** : Avenue de la Marina, Ganhi — Tél : +229 21 31 22 10
- **Pharmacie Camp Guézo (Garde 24/7)** : Boulevard de la Marina, Haie Vive — Tél : +229 21 30 15 40
- **Pharmacie Calavi Kpota (Garde 24/7)** : Carrefour Kpota, Calavi — Tél : +229 21 36 10 05

Vous pouvez consulter la section **"Santé à proximité"** sur E-Secours pour la carte interactive complète avec géolocalisation !`,
      source: 'local_kb' as const
    };
  }

  if (lower.includes('numéro') || lower.includes('numero') || lower.includes('pompier') || lower.includes('police') || lower.includes('samu')) {
    return {
      text: `📞 **Numéros d'Urgence Officiels au Bénin :**

- 🚨 **SAMU (Secours Médical d'Urgence)** : **112** ou **118**
- 🚒 **Sapeurs-Pompiers (Incendie & Accidents)** : **118**
- 👮 **Police Secours / Police Républicaine** : **117** ou **166**
- 🛡️ **Protection Civile (Catastrophes)** : **166**
- 🏥 **CNHU-HKM Cotonou (Urgences)** : **+229 21 30 01 55**

Ces numéros sont gratuits et accessibles 24h/24 depuis n'importe quel téléphone (MTN, Moov, Celtiis).`,
      source: 'local_kb' as const
    };
  }

  return {
    text: `Bienvenue sur l'assistant E-Secours Bénin. 

Je peux vous orienter pour :
- 🚨 Connaître les **numéros d'urgence au Bénin** (SAMU 112, Pompiers 118, Police 117).
- 🩺 Suivre des **conseils de premiers secours** (étouffement, malaise, brûlure, saignement, morsure).
- 🏥 Trouver une **pharmacie de garde** ou un hôpital à Cotonou, Calavi, Porto-Novo ou Parakou.
- 📱 Remplir votre **Fiche d'Urgence numérique**.

*⚠️ Rappel : En cas de détresse vitale, composez immédiatement le 112 ou le 118.*`,
    source: 'local_kb' as const
  };
}
