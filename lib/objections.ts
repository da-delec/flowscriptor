export const objections = [
    {
      id: "prix-trop-eleve",
      titre: "C’est trop cher",
      categorie: "prix",
      reponses: [
        "Je comprends. Est-ce que c’est le budget global qui bloque ou la valeur perçue ?",
        "Si c’était gratuit, vous seriez partant ? (→ ça permet de valider le besoin réel)",
        "Souvent, le coût perçu est plus bas que le coût de ne rien faire. Est-ce que je peux vous montrer ?"
      ],
      tips: [
        "Ramener la discussion à la **valeur** et au **retour sur investissement**.",
        "Identifier si c’est une vraie objection ou un refus poli.",
      ],
      erreurs: [
        "Justifier ton prix en mode défensif",
        "Parler de promotions ou discounts tout de suite",
        "Couper la parole"
      ]
    },
    {
      id: "pas-le-bon-moment",
      titre: "Ce n’est pas le bon moment",
      categorie: "timing",
      reponses: [
        "Je comprends, vous avez déjà beaucoup sur le feu. Si ce n’est pas maintenant, à quel moment ce serait pertinent ?",
        "Et si on posait les bases aujourd’hui, pour être prêt quand le moment viendra ?",
        "Qu’est-ce qui rend ce moment compliqué, exactement ?"
      ],
      tips: [
        "Creuse pour savoir si c’est un vrai problème de timing ou une objection déguisée.",
        "Proposer un rendez-vous plus tard pour ne pas perdre le lead."
      ],
      erreurs: [
        "Insister pour tout boucler aujourd’hui",
        "Répondre avec agacement"
      ]
    },
    {
      id: "deja-un-fournisseur",
      titre: "Je travaille déjà avec quelqu’un",
      categorie: "concurrence",
      reponses: [
        "Très bien, je ne cherche pas à vous faire changer pour le plaisir. Est-ce qu’il y a des choses que vous aimeriez améliorer dans la solution actuelle ?",
        "Je peux vous montrer en 5 minutes ce qu’on fait de différent, à vous de juger.",
        "C’est justement pour les gens qui ont déjà une solution qu’on est souvent utile."
      ],
      tips: [
        "Ne critique jamais le concurrent.",
        "Apporte de la comparaison ou une valeur complémentaire."
      ],
      erreurs: [
        "Dire : 'vous devriez changer'", 
        "Chercher à dénigrer leur fournisseur actuel"
      ]
    },
    {
      id: "doit-demander",
      titre: "Je dois en parler à mon associé / responsable",
      categorie: "autorité",
      reponses: [
        "Bien sûr, qui est la meilleure personne pour en parler ? Je peux vous proposer un rendez-vous à 3.",
        "Est-ce que cette personne aurait les mêmes priorités que vous ?",
        "Souhaitez-vous que je vous aide à lui présenter les points clés ?"
      ],
      tips: [
        "Valide l’intérêt personnel du lead AVANT de parler du décideur.",
        "Propose d’aider à convaincre le décideur."
      ],
      erreurs: [
        "Clore l’appel immédiatement sans creuser",
        "Supposer que la vente est morte"
      ]
    },
    {
      id: "pas-interesse",
      titre: "Ça ne m’intéresse pas",
      categorie: "refus-flou",
      reponses: [
        "D’accord, je suis curieux : est-ce que c’est parce que ça ne correspond pas à un besoin actuel ou autre chose ?",
        "Pas de souci, je peux au moins vous laisser 2 idées qui ont aidé des entreprises comme la vôtre ?",
        "Est-ce que vous avez déjà testé quelque chose de similaire ?"
      ],
      tips: [
        "Ne pas prendre ça comme un non définitif.",
        "Cherche à comprendre ce qu’il y a derrière le désintérêt."
      ],
      erreurs: [
        "Clore la conversation sans relancer",
        "Chercher à forcer l’intérêt"
      ]
    },
    {
      id: "trop-complique",
      titre: "Ça a l’air trop compliqué",
      categorie: "simplicité / technique",
      reponses: [
        "Justement, notre but est de simplifier. Je peux vous montrer ça concrètement ?",
        "Est-ce la mise en place qui vous semble compliquée, ou l’usage au quotidien ?",
        "On accompagne pas à pas, je vous montre ?"
      ],
      tips: [
        "Rassure avec un onboarding simple",
        "Utilise des comparaisons visuelles ou métaphores"
      ],
      erreurs: [
        "Répondre avec du jargon",
        "Dire : 'c’est simple' sans preuve"
      ]
    },
    {
      id: "envoyez-mail",
      titre: "Envoyez-moi un mail",
      categorie: "refus-poli",
      reponses: [
        "Bien sûr, mais comme je ne veux pas vous envoyer quelque chose de générique, vous préférez que je vous résume quoi exactement ?",
        "Je peux vous l’envoyer, mais en 30 secondes, je peux vous dire l’essentiel maintenant ?",
        "Je vous l’envoie, mais je me permets de vous rappeler d’ici 2-3 jours pour voir si ça fait sens ?"
      ],
      tips: [
        "Reprends la main doucement",
        "Utilise le mail comme excuse pour fixer un rappel"
      ],
      erreurs: [
        "Dire juste : 'ok je vous envoie ça' (vente morte)",
        "Relancer sans contexte"
      ]
    },
    {
      id: "pas-besoin",
      titre: "J’en ai pas besoin",
      categorie: "besoin-non-percu",
      reponses: [
        "C’est ce que beaucoup de nos clients disaient au début, jusqu’à ce qu’ils voient comment ça les faisait gagner du temps.",
        "Je suis curieux : vous utilisez déjà quelque chose pour ça, ou vous vous en passez complètement ?",
        "Ça marche, mais peut-être que vous avez juste pas vu ce qu’on peut vous apporter encore."
      ],
      tips: [
        "Fais appel à la curiosité ou à la comparaison",
        "Valide la solution actuelle"
      ],
      erreurs: [
        "Essayer de créer un faux besoin",
        "Insister agressivement"
      ]
    },
    {
      id: "j-ai-teste-ca-marche-pas",
      titre: "J’ai déjà essayé, ça n’a pas marché",
      categorie: "experience-negative",
      reponses: [
        "C’est intéressant. Vous vous souvenez pourquoi ça n’avait pas marché ?",
        "Souvent, le résultat dépend de l’approche. Je peux vous montrer ce qui change ici ?",
        "Est-ce que c’était avec un outil ou une méthode similaire à la nôtre ?"
      ],
      tips: [
        "Écoute l’expérience passée en détail",
        "Repositionne ton approche comme différente"
      ],
      erreurs: [
        "Critiquer la méthode précédente",
        "Balayer leur vécu"
      ]
    },
    {
      id: "pas-le-budget",
      titre: "Je n’ai pas le budget",
      categorie: "budget",
      reponses: [
        "Vous avez un budget prévu pour ce type de solution, ou ce n’était pas encore planifié ?",
        "On peut peut-être adapter l’offre à votre contexte, si vous m’en dites un peu plus.",
        "Beaucoup de clients ont commencé avec une version plus light, je peux vous montrer ?"
      ],
      tips: [
        "Proposer des options, sans baisser ta valeur perçue",
        "Valider l’intérêt même sans budget immédiat"
      ],
      erreurs: [
        "Dire : 'je comprends' puis rien proposer",
        "Baisser le prix trop vite"
      ]
    }
  ];
  