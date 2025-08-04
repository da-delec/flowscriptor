import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MentionsLegales() {
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
            Mentions légales
          </h1>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 space-y-8">
          
          {/* Éditeur */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Éditeur</h2>
            <div className="text-slate-300 space-y-2">
              <p><strong>Raison sociale :</strong> FlowScriptor</p>
              <p><strong>Adresse :</strong> [Adresse à compléter]</p>
              <p><strong>Email :</strong> contact@flowscriptor.com</p>
              <p><strong>Téléphone :</strong> [Numéro à compléter]</p>
              <p><strong>Directeur de publication :</strong> [Nom à compléter]</p>
            </div>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Hébergement</h2>
            <div className="text-slate-300 space-y-2">
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-indigo-400 hover:underline">vercel.com</a></p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Propriété intellectuelle</h2>
            <div className="text-slate-300 space-y-2">
              <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
              <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Responsabilité</h2>
            <div className="text-slate-300 space-y-2">
              <p>Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.</p>
              <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l'adresse contact@flowscriptor.com.</p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Liens hypertextes</h2>
            <div className="text-slate-300 space-y-2">
              <p>Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de FlowScriptor.</p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Cookies</h2>
            <div className="text-slate-300 space-y-2">
              <p>Le site peut-être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie ne nous permet pas de vous identifier ; il sert uniquement à enregistrer des informations relatives à la navigation de votre ordinateur sur notre site.</p>
              <p>Vous pouvez librement accepter ou refuser ces cookies en paramétrant votre navigateur. Vous pourrez tout de même accéder aux informations du site.</p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Droit applicable</h2>
            <div className="text-slate-300 space-y-2">
              <p>Tout litige en relation avec l'utilisation du site FlowScriptor est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
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