import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Zap, Shield, Settings, Mail } from "lucide-react"

export default function AIEmailDrafterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Available Now
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Email Automation That <br /><span className="text-blue-600">Started With Catalina</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The same AI that saved my EA 1-4 hours daily is now available for your team. Because great assistants
              shouldn't be stuck writing the same emails over and over.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Install from Google Workspace Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Personal Frustration to Professional Solution
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  The AI Email Drafter wasn't built in a boardroom—it was born out of watching my brilliant executive
                  assistant, Catalina, spend half her day on repetitive email tasks.
                </p>
                <p>
                  She's capable of running complex projects and strategic initiatives, but instead she was typing
                  variations of "Thanks for reaching out, let me check Jason's calendar..."
                </p>
                <p>
                  We built this tool specifically to solve Catalina's daily email grind. Now it's solving the same
                  problem for assistants everywhere.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">The Results Speak for Themselves</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Catalina went from 1-4 hours of daily email work to 15-30 minutes of review
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Response time improved from hours to minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Quality remained high (often better than manual responses)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    She finally had time for the strategic work she's actually great at
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Features That Actually Work</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Smart Email Processing</h3>
                <p className="text-gray-600">
                  Just like we set up for Catalina: apply your custom label to emails needing responses, and the AI
                  automatically generates professional drafts. No complicated workflows, no platform switching—just
                  better email management within Gmail.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">✍️ Writing Style That Sounds Like You</h3>
                <p className="text-gray-600">
                  The system learns your specific communication style by analyzing your past emails. Whether you're
                  naturally formal, conversational, or somewhere in between, the AI maintains your authentic voice
                  across all responses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📧 Context Awareness That Impresses</h3>
                <p className="text-gray-600">
                  Reviews up to 50 previous emails with each contact to understand ongoing relationships, projects, and
                  conversation history. No more "Can you remind me what we discussed?" emails.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🤖 Choose Your AI Brain</h3>
                <div className="text-gray-600 space-y-2">
                  <p className="mb-3">
                    Pick from three leading AI providers based on what works best for your communication style:
                  </p>
                  <div className="space-y-1 text-sm">
                    <div>
                      <strong>OpenAI GPT:</strong> Natural, conversational responses
                    </div>
                    <div>
                      <strong>Google Gemini:</strong> Integrated seamlessly with Workspace
                    </div>
                    <div>
                      <strong>Anthropic Claude:</strong> Detailed, nuanced communication
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⚙️ Customization That Makes Sense</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Multiple writing style profiles for different types of contacts</li>
                  <li>• Custom signature management (because details matter)</li>
                  <li>• Configurable reference depth (how much history to consider)</li>
                  <li>• Label organization for different projects or clients</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🔒 Security That Executives Demand</h3>
                <p className="text-gray-600">
                  Built with Google Workspace security standards because your email contains sensitive business
                  information. All processing happens securely within the Google ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works (Catalina-Tested Process)
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Quick Setup",
                description: "Install from Google Workspace Marketplace (takes about 5 minutes)",
              },
              {
                step: "2",
                title: "Style Learning",
                description: "The AI analyzes your past emails to understand your voice",
              },
              {
                step: "3",
                title: "Simple Configuration",
                description: "Choose your AI provider and customize settings",
              },
              {
                step: "4",
                title: "Label and Go",
                description: "Apply your custom label to emails needing responses",
              },
              {
                step: "5",
                title: "Review Drafts",
                description: "Check the AI-generated responses (usually need minimal editing)",
              },
              {
                step: "6",
                title: "Send with Confidence",
                description: "Your communication style, but faster",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="drafter-pricing" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing That Makes Business Sense</h2>
            <p className="text-lg text-gray-600">Because automation should cost less than another salary</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Self-Managed Plan */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Self-Managed Plan</CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  $3.99<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <div className="text-sm text-gray-600">Annual: $27.95 (Save $24.36/year)</div>
                <p className="text-sm text-gray-500 italic">"Perfect for testing the waters or smaller operations"</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">100 emails per month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Single label/project support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Basic writing style analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Text signatures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Email support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Your own AI API key required</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-800 italic">
                    What Catalina Says: "Great for getting started and seeing how much time you'll actually save."
                  </p>
                </div>
                <Button className="cursor-pointer w-full" variant="outline">
                  Get Started!
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">⭐ Catalina's Choice</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Professional Plan</CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  $8.99<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <div className="text-sm text-gray-600">Annual: $79.99 (Save $23.16/year)</div>
                <p className="text-sm text-gray-500 italic">
                  "Everything handled for you—this is what we actually use"
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">Everything in Self-Managed, plus:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">500 emails per month (covers most busy executives)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Multiple labels for different projects/clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced writing style options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">HTML signature support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Automatic processing (set it and forget it)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Managed AI (no API key hassles)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">50 email reference depth</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-800 italic">
                    What Catalina Says: "This is the sweet spot. Everything just works, and I don't have to think about
                    API keys or limits."
                  </p>
                </div>
                <Button className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700">Get Started!</Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Business Plan</CardTitle>
                <div className="text-3xl font-bold text-gray-900">
                  $17.99<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
                <div className="text-sm text-gray-600">Annual: $159.99 (Save $47.88/year)</div>
                <p className="text-sm text-gray-500 italic">"For high-volume operations or growing teams"</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">Everything in Professional, plus:</div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">1,000 emails per month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Advanced team features (coming soon)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Custom integrations available</span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-800 italic">
                    What Catalina Says: "If you're processing hundreds of emails daily, this pays for itself in the
                    first week."
                  </p>
                </div>
                <Button className="cursor-pointer w-full" variant="outline">
                  Get Started!
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Results from Real Users</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Time Savings</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average daily savings:</span>
                  <span className="font-semibold text-blue-600">1-4 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Setup time:</span>
                  <span className="font-semibold text-blue-600">Under 10 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Learning curve:</span>
                  <span className="font-semibold text-blue-600">Immediate results, gets better over time</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ROI timeline:</span>
                  <span className="font-semibold text-blue-600">Typically breaks even within 30 days</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quality Improvements</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Draft accuracy:</span>
                  <span className="font-semibold text-green-600">85-90% sent with minimal editing</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Consistency:</span>
                  <span className="font-semibold text-green-600">No more "off" days or rushed responses</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Professional tone:</span>
                  <span className="font-semibold text-green-600">Maintained even when stressed or busy</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Relationship continuity:</span>
                  <span className="font-semibold text-green-600">AI remembers context you might forget</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">What Catalina Wants You to Know</h2>
            <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
              "Before this tool, I felt like an expensive typist. Now I feel like the strategic partner Jason hired me
              to be. The AI doesn't replace my judgment—it frees up my time to use it on things that actually matter. If
              you're spending hours a day on email responses, this will change your professional life."
            </blockquote>
            <div className="text-gray-600">— Catalina, Executive Assistant</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Give Your Assistant Their Time Back?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Install AI Email Drafter from the Google Workspace Marketplace and see the same results that transformed
            Catalina's workday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 cursor-pointer">
              Install from Google Workspace Marketplace
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
