"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  Mail,
  Users,
  Rocket,
  Heart,
  Star,
  Globe,
  MessageSquare,
  Clock,
  MapPin,
  Linkedin,
  Twitter
} from "lucide-react";

export default function JoinUsPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
    const response = await fetch("/api/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
  
    })
    if(response.ok){
      toast.success("Message sent successfully")
    }else{
      toast.error("Error sending message")
    }
    setIsSubmitting(false);
    setIsSubmitted(true);
  } catch (error) {
      toast.error("Error sending message")
    }
  
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 dark">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4" />
            <span>Rejoignez Notre Communauté</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Construisons Ensemble l'Avenir des Appels à Froid
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Que vous ayez des questions, des retours, des idées de partenariat ou que vous souhaitiez simplement dire bonjour, 
            nous sommes là pour vous écouter et vous aider à réussir.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                  Envoyez-nous un Message
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Remplissez le formulaire ci-dessous et nous vous répondrons sous 24 heures
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-slate-300">Nom Complet *</Label>
                        <Input
                          id="name"
                          placeholder="Jean Dupont"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-slate-300">Adresse Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jean@entreprise.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-300">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Parlez-nous de votre demande, de vos retours ou de la façon dont nous pouvons vous aider..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500 min-h-32"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="mr-2 h-4 w-4 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Envoyer le Message
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Envoyé avec Succès !</h3>
                    <p className="text-slate-400 mb-6">
                      Merci de nous avoir contacté. Nous avons reçu votre message et vous répondrons sous 24 heures.
                    </p>
                    <Button onClick={resetForm} variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                      Envoyer un Autre Message
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Contactez-nous</CardTitle>
                <CardDescription className="text-slate-400">
                  Plusieurs façons de nous joindre
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
               
               

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-slate-300 text-sm mb-3">Suivez-nous sur les réseaux sociaux</p>
                  <div className="flex gap-2">
                  
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Join Us */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Pourquoi Partenariat avec Nous ?</CardTitle>
                <CardDescription className="text-slate-400">
                  Rejoignez des milliers qui font confiance à FlowScriptor
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mt-1">
                    <Rocket className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Integration d"IA</p>
                    <p className="text-slate-400 text-xs">Modele IA de pointe pour les ventes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Communauté en Croissance</p>
                    <p className="text-slate-400 text-xs">10,000+ utilisateurs actifs dans le monde</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Résultats Éprouvés</p>
                    <p className="text-slate-400 text-xs">78% de taux de réussite moyen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  
                 
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-500/20">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-medium mb-2">Temps de Réponse Rapide</h3>
                <p className="text-slate-300 text-sm">
                  Nous répondons généralement à toutes les demandes sous 24 heures en jours ouvrables.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-slate-900/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Prêt à Transformer Vos Ventes ?</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Rejoignez les professionnels de la vente qui utilisent déjà FlowScriptor pour générer 
            des scripts d'appel à froid à forte conversion avec l'IA.
          </p>
          <Button 
            onClick={() => router.push("/user_dashboard")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Commencer à Utiliser FlowScriptor Aujourd'hui
          </Button>
        </div>
      </div>
    </div>
  );
} 