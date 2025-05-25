import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Users, Calendar, FileText, CheckCircle, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-teal-100 text-teal-700 border-teal-200">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How Catalina Inspired <br /><span className="text-teal-600">a Revolution</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The journey from watching a brilliant assistant waste time on repetitive tasks to building a solution that
              transforms administrative work everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* The Daily Grind */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Daily Grind</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
            <p>
              Every morning at 7 AM, my executive assistant Catalina would sit down at her computer and face the same
              overwhelming reality: dozens of emails requiring thoughtful, personalized responses. And these weren&apos;t
              simple &quot;thank you&quot; notes—they were complex communications requiring context, relationship awareness, and
              my specific communication style.
            </p>
            <p>
              I watched one of the most capable professionals I know spend 3-4 hours daily on tasks that followed
              predictable patterns:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-8">
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>&quot;Can Jason speak at our event?&quot;</strong> (Check calendar, provide availability, send speaking
                  requirements)
                </li>
                <li>
                  <strong>&quot;Following up on our meeting&quot;</strong> (Reference specific discussion points, outline next
                  steps)
                </li>
                <li>
                  <strong>&quot;Quick question about the project&quot;</strong> (Review project status, provide contextual update)
                </li>
              </ul>
            </div>
            <p>
              Catalina could have been planning strategic initiatives, managing complex projects, or building key
              relationships. Instead, she was essentially a very expensive email composer.
            </p>
          </div>
        </div>
      </section>

      {/* The Lightbulb Moment */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Lightbulb Moment</h2>
              </div>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  The breakthrough came during a particularly busy week when I had three conferences, two board
                  meetings, and a product launch. Catalina was drowning in email, and I could see the frustration
                  building.
                </p>
                <p>
                  She&apos;s brilliant—she could be running operations for a Fortune 500 company. Yet here she was, typing
                  variations of the same responses she&apos;d written hundreds of times before.
                </p>
                <div className="bg-white p-6 rounded-lg border border-teal-200 shadow-sm">
                  <p className="text-teal-800 font-medium text-lg">
                    That&apos;s when I realized: if patterns are predictable, they&apos;re automatable.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Catalina&apos;s Weekly Reality</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Email responses per day:</span>
                  <span className="font-semibold text-red-600">15-60</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Hours spent on email:</span>
                  <span className="font-semibold text-red-600">1-4 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Repetitive patterns:</span>
                  <span className="font-semibold text-red-600">~80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time for strategic work:</span>
                  <span className="font-semibold text-red-600">Very Limited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building the Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Building the Solution</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
            <p>
              As someone who&apos;s spent years in technology and business operations, I knew this problem was solvable. But
              I didn&apos;t want to build just another generic automation tool. I wanted to create something that understood
              context, maintained relationships, and preserved the human touch that makes Catalina so effective.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium text-lg">
                We started with a simple question: &quot;What if AI could handle the routine responses, leaving Catalina free
                for the strategic work only she can do?&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The First Success */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The First Success</h2>
            <p className="text-lg text-gray-600">Three months later, we had our first working prototype.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Before AI Email Drafter</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700">Up to 4 hours daily on email responses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700">Repetitive, mind-numbing tasks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700">Limited time for strategic work</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700">Working late to catch up</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">After AI Email Drafter</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">15-30 minutes of review and editing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Plan and execute strategic projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Build deeper relationships with key contacts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Take on initiatives that move the business forward</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Go home at a reasonable hour</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 max-w-2xl mx-auto">
              <p className="text-green-800 font-medium text-lg">
                The AI didn&apos;t replace her—it amplified her capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why "Cheaper Than Karen" */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why &quot;Cheaper Than Karen&quot;?</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
            <p>
              The name started as an inside joke. During development, someone mentioned that the AI was &quot;literally
              cheaper than hiring another Karen from accounting to help with emails.&quot; We laughed, but the truth stuck:
              this automation costs a fraction of another salary, works around the clock, and gets better over time.
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 font-medium text-lg">
                It&apos;s not about replacing people—it&apos;s about freeing great people from mundane tasks so they can do great
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sharing the Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sharing the Solution</h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-600 space-y-6">
            <p>
              What began as a personal productivity hack for my office became something bigger when other executives
              started asking, &quot;How did you clone Catalina?&quot; They weren&apos;t seeing more of her—they were seeing her working
              on higher-value activities because the routine stuff was handled automatically.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium text-lg">
                That&apos;s when we realized this wasn&apos;t just our solution—it was a solution the entire EA and VA community
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Today */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission Today</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Every executive assistant, virtual assistant, and administrative professional deserves to work on
                meaningful projects that showcase their intelligence and drive business results. They shouldn&apos;t be stuck
                in email prison, crafting the same responses over and over.
              </p>
              <p>
                CheaperThanKaren.com exists to automate the routine so human intelligence can focus on what actually
                matters. We&apos;re building tools that make assistants more valuable, not replaceable.
              </p>
            </div>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What We&apos;re Building</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">AI Email Automation (Available Now)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Smart Calendar Management (Coming Soon)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Meeting Prep Automation (Coming Soon)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Document Processing (Coming Soon)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Jason Long</h3>
                    <p className="text-gray-600">Founder & Chief Problem Solver</p>
                    <a
                      href="https://www.linkedin.com/in/jasonmlong1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Technology executive turned productivity obsessive. After watching too many brilliant assistants waste
                  time on automatable tasks, I decided to do something about it. When not building automation tools, you
                  can find me planning the next strategic project with Catalina (who now has time for the interesting
                  stuff).
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Catalina</h3>
                    <p className="text-gray-600">Head of User Experience & Original Guinea Pig</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The inspiration behind everything we build. Catalina ensures that every tool we create actually makes
                  assistants&apos; lives better, not more complicated. Her feedback drives our product development because if
                  it doesn&apos;t work for her, it doesn&apos;t ship.
                </p>
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                  <p className="text-teal-800 text-sm font-medium">
                    If something we build doesn&apos;t pass the &quot;Catalina test&quot; - meaning it doesn&apos;t actually save her time or
                    improve her work quality - we don&apos;t release it.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What&apos;s Next</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This started as a solution for one assistant&apos;s email overwhelm and has become a mission to transform how
              businesses think about administrative automation. We&apos;re building a complete suite of tools that will
              automate the routine so human intelligence can focus on what actually matters.
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

      {/* Our Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Every tool we build will be tested in our own operation first. If it doesn&apos;t make Catalina&apos;s workday
                better, it doesn&apos;t get released. If it doesn&apos;t provide clear economic value, it doesn&apos;t get built. If it
                doesn&apos;t solve a real problem that real assistants face, it doesn&apos;t make it past the idea stage.
              </p>
              <p>
                We&apos;re not just building software—we&apos;re building the future of administrative work, where human
                creativity and strategic thinking are supported by intelligent automation instead of buried under
                routine tasks.
              </p>
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200 mt-6">
                <p className="text-teal-800 font-medium text-lg text-center">
                  Because the best assistants shouldn&apos;t be doing assistant work—they should be doing strategic work that
                  happens to include some assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Help us transform administrative work by starting with your own email automation. Experience the same
            transformation that freed Catalina to do her best work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
              <Link href="/ai-email-drafter">Try AI Email Drafter</Link>
            </Button>
          </div>
          <p className="text-teal-100 mt-6 text-sm">
            Join the revolution that started with one frustrated assistant and is now transforming workdays everywhere.
          </p>
        </div>
      </section>
    </div>
  )
}