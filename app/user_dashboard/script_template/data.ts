export const coldCallTemplatesWithPlan = [
    {
      secteur: "Immobilier – vente maison (FSBO / listing expiré)",
      plan: {
        préparation: ["Rechercher ventes récentes et prix local", "Segmenter la liste FSBO/expired", "Choisir créneau 10‑11 h ou 16‑17 h", "Préparer CRM ou dialer"],
        script: `Hook: Bonjour [Nom], je suis [Prénom] de [Agence]. Nous avons vendu une maison voisine au-dessus du prix du marché. Je voulais savoir si vous réfléchissiez à vendre ?\nDécouverte: Depuis combien de temps ? Avez-vous reçu des offres intéressantes ?\nProposition: Je vous propose une estimation gratuite et un plan marketing personnalisé pour maximiser votre prix net.\nCTA: Souhaitez-vous fixer un rendez‑vous de 15 min cette semaine, sans engagement ?`,
        objections: [
          { objection: "Pas vouloir payer commission", reponse: "La plupart de nos clients gagnent plus que la commission grâce à notre exposition qualifiée." },
          { objection: "Je vends moi-même", reponse: "Je comprends. Je peux vous faire une étude de concurrence gratuite, sans engagement." },
          { objection: "Pas prêt", reponse: "Je peux vous envoyer une étude de marché et recontacter selon votre timing." }
        ],
        suivi: ["SMS ou voicemail personnalisé dès aujourd’hui", "E‑mail rappel le jour suivant", "Relance 1 mois après si prospect non prêt"]
      },
      objectif: "Obtenir un rendez-vous ou mandat"
    },
    {
      secteur: "Assurance – auto / habitation",
      plan: {
        préparation: ["Identifier prospects non renouvelés depuis 12+ mois", "Préserver obligations légales (DNC)", "Préparer script et avantages assurés locaux"],
        script: `Hook: Bonjour [Nom], je suis [Prénom] de [Compagnie]. Beaucoup dans votre secteur paient plus qu’ils ne devraient pour leur assurance auto ou habitation. Cela vous parle ? \nDécouverte: Avec qui êtes-vous assuré ? Quand votre contrat expire ? \nProposition: En moyenne, nos clients réalisent 15 % d’économie tout en améliorant leur couverture. \nCTA: Puis-je vous proposer un audit gratuit de 15 min ou un devis personnalisé sans engagement ?`,
        objections: [
          { objection: "Budget serré", reponse: "Je comprends, c’est justement en comparant que l’on peut valider si c’est rentable pour vous." },
          { objection: "Satisfait", reponse: "C’est parfait. Beaucoup de clients satisfaits sont surpris quand ils voient d’autres options." },
        ],
        suivi: ["Envoi de devis ou audit après l’appel", "Email ou SMS si pas de réponse", "Relance 3 semaines plus tard"]
      },
      objectif: "Faire convenir un audit ou devis"
    },
    {
      secteur: "SaaS / Tech",
      plan: {
        préparation: ["Identifier usage de concurrents via LinkedIn ou CRM", "Préparer KPIs clients similaires", "Choisir horaires en semaine matin ou fin de journée"],
        script: `Hook: Bonjour [Nom], je suis [Prénom] de [Nom SaaS]. Je vois que vous utilisez [Concurrent] — comment cela fonctionne jusqu’à présent ? \nDécouverte: Quels sont vos principaux défis actuels ? \nProposition: Nous aidons des clients comme [Client similaire] à améliorer leurs KPIs de X % en [délai], tout en réduisant la complexité et les coûts. \nCTA: Démos de 15–20 min la semaine prochaine pour voir si ça peut correspondre à vos besoins ?`,
        objections: [
          { objection: "Pas le budget", reponse: "Compris. Beaucoup de clients ont vu un ROI plus élevé que le coût initial." },
          { objection: "Pas le bon timing", reponse: "Je peux vous envoyer un case study et recontacter d’ici 4 semaines, si vous le souhaitez." }
        ],
        suivi: ["Envoi de case study & email de remerciement", "Relance si pas de réponse 1 semaine après", "Nouvelle relance après 4 semaines avec insight de marché"]
      },
      objectif: "Fixer une démonstration qualifiée"
    },
    {
      secteur: "Santé / Établissements médicaux",
      plan: {
        préparation: ["Lister les contacts de cliniques, hôpitaux", "Préparer chiffres de case studies santé existants", "Appeler en dehors des heures de pointe (entre‑midi)"],
        script: `Hook: Bonjour [Nom], je suis [Prénom] de [Entreprise]. Nous aidons des établissements médicaux à réduire la charge administrative de 20 % et améliorer la satisfaction patient de 25 %. \nDécouverte: Comment gérez-vous l’équilibre entre administration et qualité de soin aujourd’hui ? \nProposition: Nos solutions automatisées améliorent l’efficacité et fidélisent mieux les patients. \nCTA: Un appel de 15 min pour vous partager des cas concrets et voir si ça fait sens ?`,
        objections: [
          { objection: "Pas de budget tech", reponse: "Beaucoup d’organisations amortissent le coût via économies de temps et ressource." },
          { objection: "Tout fonctionne bien", reponse: "Parfait. Nous pouvons partager une étude comparative pour validation." }
        ],
        suivi: ["Envoi d’une brochure ou étude de cas", "Relance email si pas de réponse 3 jours plus tard", "Proposition d’un meeting plus approfondi"]
      },
      objectif: "Envoyer étude de cas et planifier appel"
    },
    {
      secteur: "Services IT / PME",
      plan: {
        préparation: ["Identifier PME locales sans support IT", "Préparer valeur de l’audit gratuit (valeur estimée)", "Préférer appels le matin ou début semaine"],
        script: `Hook: Bonjour [Nom], je suis [Prénom] de TechOptimize. Nous offrons un audit IT gratuit d’une valeur de 1400 $ pour PME. \nDécouverte: Comment gérez-vous l’infrastructure et support IT actuellement ? Avez-vous rencontré des interruptions récentes ? \nProposition: Cet audit permettra d’optimiser vos coûts, votre sécurité et productivité sans interruption. \nCTA: Un échange de 20 min avec un expert IT cette semaine vous conviendrait ?`,
        objections: [
          { objection: "Pas intéressé", reponse: "Compris. Cet audit est gratuit et sans engagement pour explorer si ça peut vous aider." },
          { objection: "On a déjà un prestataire", reponse: "Parfait. Vous pouvez comparer nos recommandations avec votre support actuel." }
        ],
        suivi: ["Email de confirmation audit + proposition de date", "Relance si pas de réponse 2 jours après", "Rapport résumé envoyé si audit accepté"]
      },
      objectif: "Fixer un audit IT qualitatif"
    },
    {
      secteur: "Finance / Prêts professionnels",
      plan: {
        préparation: ["Identifier entreprises en croissance ou besoin de fonds", "Préparer arguments financement compétitif", "Appeler en début d’après-midi"],
        script: `Hook: Bonjour [Nom], je suis [Prénom] de [Banque/Institution]. Nous aidons des entreprises à accéder à des financements flexibles pour soutenir leur développement. \nDécouverte: Comment financez-vous vos projets ? Avez-vous obtenu un prêt récemment ? \nProposition: Nous offrons des solutions personnalisées avec taux compétitifs et flexibilité de remboursement. \nCTA: Un échange rapide de 15 min pour évaluer si cela peut correspondre à vos besoins ?`,
        objections: [
          { objection: "On est déjà financé", reponse: "Parfait. Vous pouvez comparer nos offres pour voir si vous pourriez gagner en flexibilité." },
          { objection: "Pas de décision maintenant", reponse: "Je peux vous envoyer un aperçu d’offre à étudier tranquillement." }
        ],
        suivi: ["Envoi de résumé financement et options", "Relance si pas de réponse 2 jours après", "Relance formelle après 1 semaine"]
      },
      objectif: "Qualifier besoin financement et obtenir entretien"
    }
  ];
  