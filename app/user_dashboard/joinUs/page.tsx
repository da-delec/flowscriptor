"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
    company: "",
    role: "",
    subject: "",
    message: "",
    reason: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      subject: "",
      message: "",
      reason: ""
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 dark">
      {/* Header */}
     
     

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4" />
            <span>Join Our Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build the Future of Cold Calling Together
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Whether you have questions, feedback, partnership ideas, or just want to say hello, 
            we're here to listen and help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-slate-300">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-slate-300">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="text-slate-300">Company</Label>
                        <Input
                          id="company"
                          placeholder="Your Company Inc."
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="role" className="text-slate-300">Your Role</Label>
                        <Input
                          id="role"
                          placeholder="Sales Manager"
                          value={formData.role}
                          onChange={(e) => handleInputChange('role', e.target.value)}
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="reason" className="text-slate-300">Reason for Contact</Label>
                        <Select value={formData.reason} onValueChange={(value) => handleInputChange('reason', value)}>
                          <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                            <SelectValue placeholder="Select a reason" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 border-slate-600">
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="feedback">Product Feedback</SelectItem>
                            <SelectItem value="support">Customer Support</SelectItem>
                            <SelectItem value="media">Media Inquiry</SelectItem>
                            <SelectItem value="investment">Investment Interest</SelectItem>
                            <SelectItem value="careers">Career Opportunities</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-slate-300">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="Brief subject line"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          required
                          className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-300">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry, feedback, or how we can help you..."
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
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-slate-400 mb-6">
                      Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                    </p>
                    <Button onClick={resetForm} variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                      Send Another Message
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
                <CardTitle className="text-white">Get in Touch</CardTitle>
                <CardDescription className="text-slate-400">
                  Multiple ways to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-slate-400 text-sm">hello@callia.ai</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Live Chat</p>
                    <p className="text-slate-400 text-sm">24/7 support available</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-slate-400 text-sm">San Francisco, CA</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-slate-300 text-sm mb-3">Follow us on social media</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                      <Twitter className="h-4 w-4" />
                    </Button>
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
                <CardTitle className="text-white">Why Partner With Us?</CardTitle>
                <CardDescription className="text-slate-400">
                  Join thousands who trust Callia
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center mt-1">
                    <Rocket className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Innovation First</p>
                    <p className="text-slate-400 text-xs">Leading AI technology for sales</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Growing Community</p>
                    <p className="text-slate-400 text-xs">10,000+ active users worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-yellow-600/20 rounded-lg flex items-center justify-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Proven Results</p>
                    <p className="text-slate-400 text-xs">78% average success rate</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center mt-1">
                    <Globe className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Global Reach</p>
                    <p className="text-slate-400 text-xs">Supporting 50+ countries</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-500/20">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-medium mb-2">Quick Response Time</h3>
                <p className="text-slate-300 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-slate-900/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Sales?</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Join thousands of sales professionals who are already using Callia to generate 
            high-converting cold call scripts with AI.
          </p>
          <Button 
            onClick={() => router.push("/user_dashboard")}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Start Using Callia Today
          </Button>
        </div>
      </div>
    </div>
  );
} 