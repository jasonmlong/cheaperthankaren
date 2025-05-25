import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Zap,
  Star,
  Calendar,
  FileText,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 pb-16">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
              AI-Powered Email Automation
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              You Have <span className="text-indigo-600">Better Things to Do</span><br /> Than Draft Emails
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              AI-powered email automation that's cheaper than doing it yourself or paying your assistant Karen (and never calls in sick). Free yourself or your
              assistant from repetitive tasks so they can focus on what actually moves your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
                <Link href="/our-story">
                  See How We Built This for Catalina
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3" asChild>
                <Link href="/ai-email-drafter">Try AI Email Drafter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Problem Every Executive Knows Too Well
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                You hire an amazing assistant. They're smart, capable, and could be running strategic projects that
                actually grow your business. Instead? They're stuck crafting the same email responses over and over
                again.
              </p>
              <p className="font-medium text-gray-800">
                "Thanks for reaching out..." "I'll check his calendar..." "Let me follow up on that..."
              </p>
              <p>Sound familiar? That's exactly what was happening with my executive assistant, Catalina.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet the Solution That Started in My Own Office
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Hi, <a href="https://www.linkedin.com/in/jasonmlong1/" className="text-indigo-600 hover:text-indigo-800 underline">I'm Jason</a>. Like many executives, I have an incredible EA who does everything from managing my
                  calendar to coordinating complex projects. But I watched Catalina spend hours each day on repetitive
                  email tasks that, frankly, a well-trained AI could handle better and faster.
                </p>
                <p>
                  So we built something about it. And now we're sharing it with the world because every great assistant
                  deserves to work on great things, not email drudgery.
                </p>
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                  <p className="text-indigo-800 font-medium text-lg">
                    The math is simple: AI automation costs less than hiring another assistant, works 24/7, never takes
                    vacation, and gets better over time. It's literally cheaper than Karen—hence the name.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Real Results from Catalina</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">From 1-4 hours daily to 30 minutes of review</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Response time improved from hours to minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Quality remained high (often better)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Time for strategic work she's actually great at</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why CheaperThanKaren.com Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Executive Assistants</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Eliminate hours of daily email drafting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Focus on strategic work that showcases your skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Handle increased demands without burnout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Maintain consistency across all communications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Executives</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Get faster response times on communications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Ensure professional quality during busy periods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Scale assistant capacity without hiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Invest in technology once vs. ongoing salary costs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Growing Companies</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Support expansion without proportional staff increases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Maintain communication quality as you scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Free up best people for revenue-generating activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span>Reduce administrative burden on high-value team members</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Tool Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-700">
                Available Now
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The First Tool: AI Email Drafter</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship product does one thing exceptionally well: it takes the repetitive work out of email
                management. The AI learns your communication style, understands context from previous conversations, and
                generates professional draft responses automatically.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Average time savings: 1-4 hours per day</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Response accuracy: 85-90% sent with minimal editing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">Setup time: Less than 10 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-700">ROI timeline: Typically breaks even within first month</span>
                </div>
              </div>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/ai-email-drafter">
                  Learn More About AI Email Drafter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Real Results from Real Users</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <p className="text-gray-600 italic mb-2">
                    "Instead of spending my morning crafting the same email responses, I can focus on planning strategic
                    initiatives. The AI handles the routine; I handle what actually moves the business forward."
                  </p>
                  <p className="text-sm text-gray-500">— Catalina, Executive Assistant</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">5-15hrs</div>
                    <div className="text-sm text-gray-500">Weekly time saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">90%</div>
                    <div className="text-sm text-gray-500">Accuracy rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon: The Full "Cheaper Than Karen" Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Because email is just the beginning. We're building a complete automation platform for administrative
              excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-dashed border-gray-200 bg-gray-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Smart Calendar Management</h3>
                <p className="text-sm text-gray-600">Automated scheduling that actually understands preferences</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-dashed border-gray-200 bg-gray-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Meeting Prep Automation</h3>
                <p className="text-sm text-gray-600">Briefing documents that write themselves</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-dashed border-gray-200 bg-gray-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Follow-up Systems</h3>
                <p className="text-sm text-gray-600">Never let anything fall through the cracks again</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-dashed border-gray-200 bg-gray-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Document Processing</h3>
                <p className="text-sm text-gray-600">AI that reads, summarizes, and organizes like your best intern</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Free Your Assistant from Email Drudgery?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join the executives who've already discovered what happens when great assistants get to focus on great work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
              <Link href="/ai-email-drafter">Start with AI Email Drafter</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white"
              asChild
            >
              <Link href="/our-story">Read Our Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
