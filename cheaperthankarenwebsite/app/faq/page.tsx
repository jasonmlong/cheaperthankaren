import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Mail, Shield, Settings, DollarSign, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Questions We <span className="text-orange-600">Actually Get</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              (And the answers that actually help)
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Origin Story Questions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <HelpCircle className="w-4 h-4 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">The Origin Story Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  So this really started because your assistant was overwhelmed with email?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Yep. Catalina is incredibly capable—she could run operations for a Fortune 500 company. But I watched
                  her spend 3-4 hours daily typing variations of the same email responses. It was like watching a chef
                  spend all day washing dishes instead of cooking. The talent was being wasted on repetitive tasks that
                  technology could handle better.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Is Catalina a real person or just good marketing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  She&apos;s very real and would probably laugh at being called &quot;good marketing.&quot; Catalina has been my EA for
                  several years and is the reason this tool exists. She&apos;s also the reason it actually works—every
                  feature we built was tested on her real workday challenges first.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Why &quot;Cheaper Than Karen&quot;? Isn&apos;t that a bit... provocative?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  It started as an inside joke during development. Someone pointed out that our AI automation literally
                  costs less than hiring an additional assistant (Karen being a placeholder name). We could have gone
                  with something more corporate, but the name captures the truth: this technology costs less than
                  another salary and works around the clock.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* How It Actually Works */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Settings className="w-4 h-4 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">How It Actually Works</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="work-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Does the AI really understand context, or is it just fancy autocomplete?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  It genuinely understands context. The AI reviews up to 50 previous emails with each contact to
                  understand your relationship, ongoing projects, and communication history. It&apos;s not just filling in
                  templates—it&apos;s crafting responses based on the full conversation flow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="work-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">How does it learn my writing style?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  During setup, the AI analyzes your past emails to understand your communication patterns: how formal
                  or casual you are, your typical greeting and closing styles, how you structure responses, even your
                  preferences for short vs. detailed explanations. It gets better over time as it sees how you edit the
                  drafts it creates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="work-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What if the AI writes something inappropriate?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  All responses are created as drafts—never sent automatically. You always review before sending. In our
                  testing (including with Catalina&apos;s real emails), about 85-90% of drafts need minimal or no editing.
                  When the AI gets something wrong, you edit it, and it learns from that feedback.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="work-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Can it handle different types of emails?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Yes, but with varying degrees of success. It&apos;s excellent at routine business correspondence,
                  scheduling requests, follow-ups, and standard professional communication. It&apos;s less effective with
                  highly technical discussions, sensitive HR matters, or deeply personal communications. Catalina still
                  handles those herself.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Practical Usage Questions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Practical Usage Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="usage-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">How long does setup actually take?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  About 10 minutes for the basic setup, then maybe another 10 minutes of customization based on your
                  preferences. The AI needs a few hours to analyze your writing style from past emails, but you can
                  start using it immediately and it gets better as it learns.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="usage-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Will people be able to tell an AI wrote the email?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Not if the AI is working correctly. The goal is to sound exactly like you on a good day. Catalina&apos;s
                  contacts haven&apos;t noticed any change in communication style—they just notice she responds faster now.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="usage-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What happens if I exceed my monthly email limit?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  The system stops processing new emails until your billing cycle resets. You get warnings at 75% and
                  90% usage. Most users find the Professional plan (300 emails/month) covers their needs comfortably. If
                  you consistently hit limits, upgrading makes financial sense.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="usage-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Can multiple people use the same account?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Each person needs their own license because the AI learns individual writing styles. However, we&apos;re
                  working on team features for agencies and larger organizations that will allow shared templates and
                  centralized billing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Technical and Security */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Technical and Security</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="tech-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Is my email data secure?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Yes. We follow Google Workspace security standards, which means your email content is processed
                  temporarily to generate responses but never permanently stored. All data transmission is encrypted,
                  and we&apos;re SOC 2 Type II compliant. Your sensitive business information stays within the Google
                  ecosystem and is never shared with third parties.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tech-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What if Google changes their policies or the tool stops working?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  We built this as a native Google Workspace add-on specifically to minimize platform risk. Google has
                  strong incentives to maintain compatibility with business tools like ours. That said, we maintain the
                  code and can adapt to platform changes as needed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tech-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Do I need technical skills to set this up?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Not really. If you can install apps from your phone&apos;s app store, you can set this up. The most
                  &quot;technical&quot; part is getting an API key if you choose the Self-Managed plan, and we provide
                  step-by-step instructions for that.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tech-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">What browsers/devices does it work on?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  It works wherever Gmail works—Chrome, Safari, Firefox, Edge. Desktop and mobile. Since it&apos;s built into
                  Gmail itself, there&apos;s no separate app to manage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Pricing and Business Questions */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Pricing and Business Questions</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="price-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Is this really cheaper than hiring help?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  For email automation specifically, absolutely. Even at minimum wage, an assistant costs more per month
                  than our Professional plan. And our AI works 24/7, never calls in sick, and gets better over time
                  instead of needing training.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="price-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What&apos;s the catch? This seems too good to be true.
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  The &quot;catch&quot; is that it only works for email patterns that are somewhat predictable. If 100% of your
                  emails require deep human judgment, creative thinking, or sensitive relationship management, this
                  won&apos;t help much. But if a significant portion of your emails follow recognizable patterns (which most
                  business email does), the time savings are dramatic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="price-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">Can I try it before committing?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Yes, we offer a 14-day free trial of the Professional tier. You can also start with the Self-Managed
                  plan to test the core functionality at a lower cost. We want you to see the same results Catalina
                  experienced before you commit to anything significant.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="price-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">What if my email volume is really high?</AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  The Business plan handles 1,000 emails per month, which covers most high-volume users. For
                  enterprise-level usage, contact us directly—we can discuss custom solutions or unlimited processing
                  with your own API keys.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* The Catalina Perspective */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">The Catalina Perspective</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="catalina-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What does Catalina think about being &quot;replaced&quot; by AI?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  She laughs at this question. The AI didn&apos;t replace her—it freed her to do the work she&apos;s actually good
                  at. Instead of typing the same email responses, she now plans strategic initiatives, manages complex
                  projects, and builds key relationships. She went from feeling like an expensive typist to feeling like
                  the strategic partner she was hired to be.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="catalina-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Would Catalina recommend this to other assistants?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  Absolutely, but with a caveat: it only helps if you&apos;re currently spending significant time on routine
                  email responses. If your role is already primarily strategic, this might not be as transformative. But
                  if you&apos;re drowning in repetitive communication tasks, it&apos;s life-changing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="catalina-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What surprised Catalina most about using AI for email?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  How quickly she stopped thinking about it. Within a week, it just became part of her workflow. She
                  also didn&apos;t expect how much mental energy it would free up—not just time, but the cognitive load of
                  constantly crafting responses.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Email us at hello@cheaperthankaren.com. And yes, there&apos;s a good chance Catalina will review your message
            (after the AI drafts her response). She&apos;s always interested in hearing from other assistants about their
            workflow challenges and whether our tools actually solve real problems.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
            <Link href="/contact">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}