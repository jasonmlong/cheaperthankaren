"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Clock, MessageSquare, HelpCircle, Users, Briefcase, Loader2, CheckCircle, XCircle } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  role: string
  subject: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  role?: string
  subject?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    subject: "",
    message: ""
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          subject: "",
          message: ""
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700 border-green-200">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Questions About <br /><span className="text-green-600">Automating Your Workflow?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Want to know more about how this started with Catalina? We&apos;re here to help you figure out if AI email
              automation makes sense for your operation.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 max-w-2xl mx-auto">
              <p className="text-yellow-800 font-medium">
                Fair warning: Catalina might use the AI to draft her response to you. But she&apos;ll definitely review it
                personally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-gray-600">We&apos;ll get back to you within 24-48 hours (usually much faster)</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-700">
                      Thanks for reaching out! We&apos;ve received your message and will get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <Alert className="border-red-200 bg-red-50">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-700">
                      Sorry, there was an error sending your message. Please try again or email us directly at hello@cheaperthankaren.com.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Your first name"
                        className={errors.firstName ? 'border-red-300 focus:border-red-500' : ''}
                      />
                      {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Your last name"
                        className={errors.lastName ? 'border-red-300 focus:border-red-500' : ''}
                      />
                      {errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@company.com"
                      className={errors.email ? 'border-red-300 focus:border-red-500' : ''}
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      placeholder="Executive Assistant, VA, Executive, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="What can we help you with?"
                      className={errors.subject ? 'border-red-300 focus:border-red-500' : ''}
                    />
                    {errors.subject && <p className="text-sm text-red-600">{errors.subject}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your current email situation, questions about our story, or how we might help..."
                      rows={6}
                      className={errors.message ? 'border-red-300 focus:border-red-500' : ''}
                    />
                    {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Response Times</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">General Inquiries</div>
                        <div className="text-sm text-gray-600">Usually within 48 hours (usually much faster)</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Technical Support</div>
                        <div className="text-sm text-gray-600">Usually within 24 hours during business days</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Monday - Friday</div>
                        <div className="text-sm text-gray-600">9:00 AM - 6:00 PM EST</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Weekend Support</div>
                        <div className="text-sm text-gray-600">Available for urgent technical issues</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Catalina&apos;s Schedule</div>
                        <div className="text-sm text-gray-600">
                          She&apos;s typically online business hours, but the AI works 24/7
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Office Information</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-gray-900">CheaperThanKaren.com</div>
                      <div className="text-sm text-gray-600">
                        Founded wherever good coffee and reliable WiFi intersect
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-blue-800 text-sm">
                        We&apos;re a distributed team, but if you&apos;re in Playa Del Carmen in the winter or wherever Jason is
                        in the summers, and want to grab coffee to talk about productivity automation, he&apos;s always up
                        for that conversation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Include */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Include When Reaching Out</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">If You&apos;re Curious About Our Story</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• What role you&apos;re in (EA, VA, executive, etc.)</li>
                  <li>• What your current email situation looks like</li>
                  <li>• Whether you&apos;re dealing with similar frustrations to what Catalina experienced</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">For Technical Support</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Your current plan (Self-Managed, Professional, Business)</li>
                  <li>• What you were trying to do when the issue occurred</li>
                  <li>• Any error messages you&apos;re seeing</li>
                  <li>• Your browser and device info</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">For Sales Questions</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Current email volume (daily/weekly)</li>
                  <li>• Number of people who would use this</li>
                  <li>• Specific use case (executive support, customer service, etc.)</li>
                  <li>• Timeline for implementation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">For Partnership Ideas</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Your company background</li>
                  <li>• How you think we might work together</li>
                  <li>• Your target market and customer base</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">A Personal Note from Jason</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  When I started building this for Catalina, I never imagined it would become a real business. But after
                  seeing how much it transformed her workday—and hearing similar stories from other executives and
                  assistants—it became clear this was bigger than our office.
                </p>
                <p>
                  If you&apos;re dealing with the same email overwhelm that Catalina was, I&apos;d love to hear your story. Even
                  if our current tool isn&apos;t the right fit, I&apos;m always interested in understanding how we can better
                  solve these productivity challenges.
                </p>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium">
                    And yes, Catalina really does review the important emails personally. The AI handles the initial
                    draft, but her strategic thinking and relationship management skills are what make the magic happen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick FAQ for Contact Inquiries</h2>
          </div>
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">&quot;Is this really cheaper than hiring an assistant?&quot;</h3>
                <p className="text-gray-600">
                  For email automation specifically? Absolutely. The Professional plan costs less than two hours of
                  assistant time per month and saves 2-3 hours daily.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  &quot;Will this work for my specific industry/situation?&quot;
                </h3>
                <p className="text-gray-600">
                  The core email patterns are surprisingly similar across industries. If you&apos;re spending time crafting
                  routine responses, it&apos;ll probably work for you.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">&quot;Can I talk to Catalina directly?&quot;</h3>
                <p className="text-gray-600">
                  She&apos;s pretty busy these days (thanks to having more time for strategic work), but she does review
                  feedback about the user experience and occasionally hops on calls with other EAs who want the inside
                  scoop.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">&quot;What if I hate it?&quot;</h3>
                <p className="text-gray-600">
                  We offer a 30-day money-back guarantee. But more importantly, we want to understand why it didn&apos;t work
                  so we can improve it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start the Conversation?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re curious about our story or ready to transform your email workflow, we&apos;re here to help.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="px-8 py-3 cursor-pointer"
            onClick={() => {
              const element = document.getElementById('contact-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Us A Message!
          </Button>
        </div>
      </section>
    </div>
  )
}