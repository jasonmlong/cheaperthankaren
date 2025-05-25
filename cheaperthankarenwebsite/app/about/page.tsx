import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Users, Calendar, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-20 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Real Story Behind <br /><span className="text-purple-600">Cheaper Than Karen</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              How watching my brilliant assistant waste time on repetitive tasks led to a mission to transform
              administrative work everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* It Started With Frustration */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">It Started With Frustration</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                Every successful business tool starts with someone getting frustrated enough to build a solution. In our
                case, that someone was me watching my brilliant executive assistant, Catalina, waste her talents on
                repetitive email tasks that a well-trained AI could handle better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-gray-50">
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
                    <Link
                      href="https://www.linkedin.com/in/jasonmlong1/"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      LinkedIn Profile
                    </Link>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  I&apos;ve spent my career in technology and business operations, but this project is personal. After
                  watching Catalina—one of the most capable professionals I know—spend hours daily on automatable tasks,
                  I couldn&apos;t unsee the problem. When not building productivity tools, I&apos;m usually planning the strategic
                  projects that Catalina now has time to execute.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Catalina</h3>
                    <p className="text-gray-600">Head of User Experience & Original Guinea Pig</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  The inspiration and reality-check behind every feature we build. Catalina ensures that our tools
                  actually solve real problems for real assistants, not just sound good in demos. Her feedback drives
                  our product development because if it doesn&apos;t work for her daily workflow, it doesn&apos;t ship.
                </p>
                <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <p className="text-purple-800 text-sm font-medium">
                    If something we build doesn&apos;t pass the &quot;Catalina test&quot;—meaning it doesn&apos;t actually save her time or
                    improve her work quality—we don&apos;t release it.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Technology Should Amplify Human Intelligence, Not Replace It
                </h3>
                <p className="text-gray-600">
                  We&apos;re not trying to replace assistants—we&apos;re trying to free them from mundane tasks so they can do
                  what they&apos;re actually great at. Catalina didn&apos;t become less valuable when we automated her email
                  responses; she became more valuable because she could focus on strategic work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real Problems Deserve Real Solutions</h3>
                <p className="text-gray-600">
                  Every feature we build solves a problem that Catalina actually experienced. We don&apos;t add functionality
                  because it sounds impressive; we add it because it addresses a real workflow pain point. This keeps us
                  focused on utility over novelty.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Simple Tools That Actually Work</h3>
                <p className="text-gray-600">
                  The best productivity tools are invisible—they solve your problem without creating new ones. We
                  prioritize reliability and ease of use over feature complexity because frustrated users don&apos;t save
                  time, regardless of how sophisticated the technology is.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why "Cheaper Than Karen" */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why &quot;Cheaper Than Karen&quot; Isn&apos;t Just a Joke
            </h2>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The name captures an important truth about business automation: it should provide clear economic value.
              Our AI email automation costs less per month than two hours of assistant time but saves 2-3 hours daily.
              That&apos;s not just convenient—it&apos;s financially transformative for businesses of any size.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <p className="text-blue-800 font-medium">
                We could have chosen a more corporate name, but &quot;Cheaper Than Karen&quot; reminds us (and our customers) that
                we&apos;re solving a real economic problem, not just building cool technology.
              </p>
            </div>
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
              businesses think about administrative automation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-dashed border-gray-200 bg-gray-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Smart Calendar Management</h3>
                <p className="text-sm text-gray-600">That actually understands preferences</p>
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
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="prose prose-lg text-gray-600 space-y-4">
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
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 mt-6">
                <p className="text-purple-800 font-medium text-lg text-center">
                  Because the best assistants shouldn&apos;t be doing assistant work—they should be doing strategic work that
                  happens to include some assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Help us transform administrative work by starting with your own email automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3" asChild>
              <Link href="/ai-email-drafter">Try AI Email Drafter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}