import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ConditionsUtilisation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-slate-400 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Conditions d'utilisation
          </h1>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptation des conditions</h2>
            <div className="text-slate-300 space-y-2">
              <p>En accédant et en utilisant FlowScriptor, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.</p>
              <p>Ces conditions s'appliquent à tous les utilisateurs du site, y compris les visiteurs, les utilisateurs enregistrés et les abonnés.</p>
            </div>
          </section>

          {/* Description du service */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Description du service</h2>
            <div className="text-slate-300 space-y-2">
              <p>FlowScriptor est une plateforme SaaS qui fournit :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Génération de scripts de prospection téléphonique par IA</li>
                <li>Modèles de scripts prêts à l'emploi</li>
                <li>Gestion des objections</li>
                <li>Historique et analyse des performances</li>
                <li>Support et assistance utilisateur</li>
              </ul>
            </div>
          </section>

          {/* Inscription et compte */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Inscription et compte utilisateur</h2>
            <div className="text-slate-300 space-y-2">
              <p>Pour utiliser FlowScriptor, vous devez :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Être âgé d'au moins 18 ans</li>
                <li>Fournir des informations exactes et à jour</li>
                <li>Protéger vos identifiants de connexion</li>
                <li>Notifier immédiatement toute utilisation non autorisée</li>
              </ul>
              <p>Vous êtes responsable de toutes les activités effectuées sous votre compte.</p>
            </div>
          </section>

          {/* Utilisation acceptable */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Utilisation acceptable</h2>
            <div className="text-slate-300 space-y-2">
              <p>Vous vous engagez à :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Utiliser le service conformément à la loi</li>
                <li>Ne pas utiliser le service à des fins illégales ou frauduleuses</li>
                <li>Ne pas tenter de pirater ou de compromettre la sécurité</li>
                <li>Ne pas transmettre de virus ou de code malveillant</li>
                <li>Respecter les droits de propriété intellectuelle</li>
                <li>Ne pas surcharger nos serveurs</li>
              </ul>
            </div>
          </section>

          {/* Contenu utilisateur */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Contenu utilisateur</h2>
            <div className="text-slate-300 space-y-2">
              <p>Vous conservez la propriété de votre contenu. En utilisant FlowScriptor, vous nous accordez une licence limitée pour :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Traiter vos données pour fournir le service</li>
                <li>Améliorer nos algorithmes d'IA</li>
                <li>Assurer la sécurité et la maintenance</li>
              </ul>
              <p>Vous vous engagez à ne pas soumettre de contenu illégal, offensant ou inapproprié.</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Propriété intellectuelle</h2>
            <div className="text-slate-300 space-y-2">
              <p>FlowScriptor et son contenu sont protégés par les droits de propriété intellectuelle. Vous ne pouvez pas :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Copier, modifier ou distribuer notre code</li>
                <li>Utiliser nos marques sans autorisation</li>
                <li>Réaliser d'ingénierie inverse de notre plateforme</li>
                <li>Extraire des données à des fins commerciales</li>
              </ul>
            </div>
          </section>

          {/* Paiements et abonnements */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Paiements et abonnements</h2>
            <div className="text-slate-300 space-y-2">
              <p>Les abonnements sont facturés à l'avance et renouvelés automatiquement. Vous pouvez :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Annuler votre abonnement à tout moment</li>
                <li>Changer de plan à tout moment</li>
                <li>Bénéficier d'un remboursement sous 14 jours</li>
              </ul>
              <p>Les prix peuvent être modifiés avec un préavis de 30 jours.</p>
            </div>
          </section>

          {/* Limitation de responsabilité */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Limitation de responsabilité</h2>
            <div className="text-slate-300 space-y-2">
              <p>FlowScriptor est fourni "en l'état". Nous ne garantissons pas :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>L'exactitude des scripts générés</li>
                <li>La disponibilité continue du service</li>
                <li>L'absence d'erreurs ou de bugs</li>
                <li>La compatibilité avec tous les navigateurs</li>
              </ul>
              <p>Notre responsabilité est limitée au montant payé pour le service.</p>
            </div>
          </section>

          {/* Confidentialité */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Confidentialité</h2>
            <div className="text-slate-300 space-y-2">
              <p>La collecte et l'utilisation de vos données personnelles sont régies par notre <Link href="/politique-confidentialite" className="text-indigo-400 hover:underline">Politique de confidentialité</Link>.</p>
            </div>
          </section>

          {/* Résiliation */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Résiliation</h2>
            <div className="text-slate-300 space-y-2">
              <p>Je peux suspendre ou résilier votre compte si vous :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Violer ces conditions d'utilisation</li>
                <li>Utiliser le service de manière frauduleuse</li>
                <li>Ne pas payer les frais dus</li>
                <li>Compromettre la sécurité du service</li>
              </ul>
              <p>Vous pouvez résilier votre compte à tout moment depuis les paramètres.</p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">11. Droit applicable</h2>
            <div className="text-slate-300 space-y-2">
              <p>Ces conditions sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris.</p>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">12. Modifications</h2>
            <div className="text-slate-300 space-y-2">
              <p>Je peux modifier ces conditions à tout moment. Les modifications importantes seront notifiées par email ou via le site web.</p>
              <p>Votre utilisation continue du service après modification constitue votre acceptation des nouvelles conditions.</p>
            </div>
          </section>

          {/* Dernière mise à jour */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Dernière mise à jour</h2>
            <div className="text-slate-300">
              <p>Dernière mise à jour : Juillet 2025</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 