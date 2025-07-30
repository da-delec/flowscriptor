'use client'
import React, { useState } from 'react'
import { Card, CardHeader , CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaArrowUp, FaTrash, FaUserCircle } from 'react-icons/fa';
import { upgradeOwnPlan } from '@/lib/actions/upgrade_own_plan';
import { deleteOwnAccount } from '@/lib/actions/delete_own_account';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const PLAN_LABELS: Record<string, string> = {
  FREE: 'Free Plan',
  STARTER: 'Starter Plan',
  ULTRA: 'Ultra Plan',
};
const PLAN_COLORS: Record<string, string> = {
  FREE: 'bg-gray-500/70 border-gray-300 text-gray-100',
  STARTER: 'bg-blue-500/70 border-blue-300 text-blue-100',
  ULTRA: 'bg-green-500/70 border-green-300 text-green-100',
};
const PLAN_DESCRIPTIONS: Record<string, string> = {
  FREE: 'Basic access, limited scripts per month.',
  STARTER: 'More scripts, priority support.',
  ULTRA: 'Unlimited scripts, premium support, all features.',
};

type UserInfosProps = {
  user: {
   
      isAdmin: boolean | undefined;
      plan: string | undefined;
      scriptGenerated: number | undefined;
      stripeCustomerId: string | undefined;
      id: string;
      name: string;
      emailVerified: boolean;
      email: string;
      createdAt: Date;
      updatedAt: Date;
      image?: string | null | undefined;
  
  }
}

const UserInfos = ({ user }: UserInfosProps) => {
  const plan = user.plan || 'FREE';
  const planLabel = PLAN_LABELS[plan] || plan;
  const planColor = PLAN_COLORS[plan] || PLAN_COLORS.FREE;
  const planDesc = PLAN_DESCRIPTIONS[plan] || '';
  const router = useRouter();

  // State pour édition email/nom
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const createdAt = typeof user.createdAt === 'string'
    ? new Date(user.createdAt)
    : user.createdAt;
  const updatedAt = typeof user.updatedAt === 'string'
    ? new Date(user.updatedAt)
    : user.updatedAt;

  const formatDate = (date: Date) =>
    date.getFullYear() +
    '-' +
    String(date.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(date.getDate()).padStart(2, '0');

  async function handleManageSubscription(stripeCustomerId:string) {
    const res = await fetch('/api/stripePortal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stripeCustomerId }),
    });
    if (res.ok) {
      const data = await res.json();
      window.location.href = data.url;
    } else {
      alert("Erreur lors de la création de la session Stripe.");
    }
  }

  async function handleUpdateProfile(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch('/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name,id:user.id }),
      });
      if (res.ok) {
        setSuccess('Profil mis à jour !');
        setEditMode(false);
        router.refresh?.();
      } else {
        setError("Erreur lors de la mise à jour.");
      }
    } catch {
      setError("Erreur réseau.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="bg-slate-900 border border-slate-800 w-full max-w-lg mx-auto shadow-md rounded-xl p-0 overflow-hidden text-slate-200">
      {/* Header */}
      <CardHeader className="flex flex-col items-start gap-2 bg-slate-950 pb-4 pt-6 border-b border-slate-800">
        <div className="flex items-center gap-3 w-full">
          <FaUserCircle className="text-slate-500" size={36} />
          <div className="flex-1">
            {editMode ? (
              <form onSubmit={handleUpdateProfile} className="flex flex-col gap-1">
                <input
                  className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  disabled={loading}
                  required
                  placeholder="Nom"
                />
                <input
                  className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={loading}
                  required
                  type="email"
                  placeholder="Email"
                />
                <div className="flex gap-2 mt-1">
                  <Button type="submit" size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs px-3 py-1" disabled={loading}>Enregistrer</Button>
                  <Button type="button" size="sm" className="bg-slate-700 hover:bg-slate-600 text-xs px-3 py-1" onClick={() => setEditMode(false)} disabled={loading}>Annuler</Button>
                </div>
                {error && <span className="text-red-400 text-xs mt-1">{error}</span>}
                {success && <span className="text-green-400 text-xs mt-1">{success}</span>}
              </form>
            ) : (
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium text-slate-100">{user?.name}</span>
                  <Button size="sm" className="bg-slate-800 hover:bg-slate-700 text-xs px-2 py-0.5" onClick={() => setEditMode(true)}>Modifier</Button>
                </div>
                <span className="text-slate-400 text-xs">{user?.email}</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-4 pb-2 px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-400">ID utilisateur</span>
            <span className="text-xs text-slate-300 font-mono">{user.id}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-400">Créé le</span>
            <span className="text-xs text-slate-300">{formatDate(createdAt)}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-400">Dernière maj</span>
            <span className="text-xs text-slate-300">{formatDate(updatedAt)}</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-400">Plan</span>
            <Badge className={planColor + ' text-xs px-2 py-0.5 rounded shadow-none font-medium'}>{planLabel}</Badge>
            <span className="text-slate-500 text-xs italic mt-1">{planDesc}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-400">Scripts générés</span>
            <span className="text-xs text-slate-300 font-semibold">{user?.scriptGenerated ?? 0}</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <Button
            className="bg-slate-800 hover:bg-slate-700 text-slate-100 rounded px-4 py-1.5 text-xs font-medium shadow-sm"
            onClick={() => {
              if (user.stripeCustomerId) {
                handleManageSubscription(user.stripeCustomerId);
              } else {
                alert("Aucun ID client Stripe trouvé");
              }
            }}
            type="button"
          >
            Gérer mon abonnement
          </Button>
          <Link href="/user_dashboard/pricing">
            <Button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 text-white rounded px-4 py-1.5 text-xs flex items-center gap-2 shadow-sm font-medium"
              disabled={plan === 'ULTRA'}
              title={plan === 'ULTRA' ? 'Déjà au plan maximum' : 'Améliorer mon plan'}
            >
              <FaArrowUp className="mr-1" />
              {plan === 'ULTRA' ? 'Max Plan' : 'Upgrade'}
            </Button>
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-center pt-4 pb-6 px-6 border-t border-slate-800">
        <form
          action={deleteOwnAccount}
          onSubmit={e => {
            if (!confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
              e.preventDefault();
            }
          }}
        >
          <Button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-1.5 text-xs flex items-center gap-2 shadow-sm font-medium"
            title="Supprimer votre compte"
          >
            <FaTrash className="mr-1" />
            Supprimer le compte
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

export default UserInfos
