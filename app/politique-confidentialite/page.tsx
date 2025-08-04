import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PolitiqueConfidentialite() {
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
            Politique de confidentialité
          </h1>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
            <div className="text-slate-300 space-y-2">
              <p>FlowScriptor ("nous", "notre", "nos") s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre service.</p>
              <p>En utilisant FlowScriptor, vous acceptez les pratiques décrites dans cette politique de confidentialité.</p>
            </div>
          </section>

          {/* Collecte des données */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Informations que nous collectons</h2>
            <div className="text-slate-300 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Informations que vous nous fournissez :</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Informations de compte (nom, email, mot de passe)</li>
                  <li>Informations de profil (secteur d'activité, taille d'entreprise)</li>
                  <li>Contenu des scripts générés et données de prospection</li>
                  <li>Communications avec notre équipe support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Informations collectées automatiquement :</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Données de navigation (adresse IP, type de navigateur, pages visitées)</li>
                  <li>Données d'utilisation (fréquence d'utilisation, fonctionnalités utilisées)</li>
                  <li>Cookies et technologies similaires</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Utilisation des données */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Comment nous utilisons vos informations</h2>
            <div className="text-slate-300 space-y-2">
              <p>Nous utilisons vos informations pour :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Fournir et améliorer nos services</li>
                <li>Générer des scripts personnalisés selon vos besoins</li>
                <li>Traiter les paiements et gérer votre abonnement</li>
                <li>Vous contacter concernant votre compte ou nos services</li>
                <li>Analyser l'utilisation pour améliorer notre plateforme</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>
          </section>

          {/* Partage des données */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Partage de vos informations</h2>
            <div className="text-slate-300 space-y-2">
              <p>Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations dans les cas suivants :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Avec votre consentement explicite</li>
                <li>Avec nos prestataires de services (hébergement, paiement, support)</li>
                <li>Pour respecter une obligation légale</li>
                <li>Pour protéger nos droits et notre sécurité</li>
              </ul>
            </div>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Sécurité de vos données</h2>
            <div className="text-slate-300 space-y-2">
              <p>Je mets en place des mesures de sécurité appropriées pour protéger vos informations personnelles :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Chiffrement des données en transit et au repos</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Surveillance continue des systèmes</li>
                <li>Formation aux bonnes pratiques de sécurité</li>
              </ul>
            </div>
          </section>

          {/* Vos droits */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Vos droits (RGPD)</h2>
            <div className="text-slate-300 space-y-2">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong>Droit de limitation :</strong> Limiter le traitement de vos données</li>
              </ul>
              <p className="mt-4">Pour exercer ces droits, contactez-moi à : <a href="mailto:privacy@flowscriptor.com" className="text-indigo-400 hover:underline">privacy@flowscriptor.com</a></p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Cookies</h2>
            <div className="text-slate-300 space-y-2">
              <p>Je utilise des cookies pour améliorer votre expérience :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> Pour analyser l'utilisation du site</li>
                <li><strong>Cookies de préférences :</strong> Pour mémoriser vos choix</li>
              </ul>
              <p>Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.</p>
            </div>
          </section>

          {/* Conservation */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Conservation des données</h2>
            <div className="text-slate-300 space-y-2">
              <p>Je conserve vos données personnelles aussi longtemps que nécessaire pour :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Fournir mes services</li>
                <li>Respecter mes obligations légales</li>
                <li>Résoudre les litiges</li>
                <li>Faire respecter mes accords</li>
              </ul>
              <p>Les données sont supprimées automatiquement après 3 ans d'inactivité.</p>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Modifications de cette politique</h2>
            <div className="text-slate-300 space-y-2">
              <p>Je peux mettre à jour cette politique de confidentialité de temps à autre. Je vous informerai de tout changement important par email ou via le site web.</p>
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