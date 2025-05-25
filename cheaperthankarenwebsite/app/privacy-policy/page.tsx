import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-16">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy for Cheaperthankaren.com
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We respect your privacy and are committed to protecting your personal information
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p><strong>Effective Date:</strong> 5/24/25</p>
              <p><strong>Last Updated:</strong> 5/24/25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  At Cheaperthankaren.com (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and AI Email Drafter service.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium">
                    <strong>The Simple Version:</strong> We only collect what we need to make our service work, we never sell your data, and your email content is processed temporarily and never permanently stored.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Information You Provide Directly</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Account Information:</strong> Name, email address, company name when you sign up</li>
                    <li><strong>Payment Information:</strong> Billing details processed through secure third-party payment processors</li>
                    <li><strong>Support Communications:</strong> Messages you send us for customer support</li>
                    <li><strong>API Keys:</strong> If using Self-Managed plans, your encrypted AI provider API keys</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Information We Collect Automatically</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Usage Data:</strong> How you interact with our service (features used, frequency, etc.)</li>
                    <li><strong>Technical Information:</strong> Browser type, device information, IP address</li>
                    <li><strong>Gmail Integration Data:</strong> Email metadata necessary for our service to function</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Email Content (Special Handling)</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Temporary Processing:</strong> Email content is processed temporarily to generate draft responses</li>
                    <li><strong>No Permanent Storage:</strong> Email content is never stored permanently on our servers</li>
                    <li><strong>Immediate Deletion:</strong> Content is deleted from our systems immediately after processing</li>
                    <li><strong>Local Processing:</strong> When possible, processing occurs within Google&apos;s infrastructure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Primary Service Functions</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Draft Generation:</strong> Analyzing email patterns to create contextual responses</li>
                    <li><strong>Style Learning:</strong> Understanding your communication style from past emails</li>
                    <li><strong>Context Analysis:</strong> Reviewing conversation history to maintain relationship continuity</li>
                    <li><strong>Account Management:</strong> Managing your subscription and service access</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Business Operations</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Customer Support:</strong> Responding to your questions and resolving issues</li>
                    <li><strong>Service Improvement:</strong> Analyzing usage patterns to enhance our features</li>
                    <li><strong>Security:</strong> Detecting and preventing fraud or unauthorized access</li>
                    <li><strong>Legal Compliance:</strong> Meeting regulatory requirements and protecting our rights</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Marketing (Opt-In Only)</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Product Updates:</strong> Informing you about new features and improvements</li>
                    <li><strong>Educational Content:</strong> Sharing tips and best practices for email automation</li>
                    <li><strong>Company News:</strong> Updates about our service and team</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-2">You can opt out of marketing communications at any time.</p>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-red-600">We DO NOT:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Sell Your Data:</strong> We never sell, rent, or trade your personal information</li>
                    <li><strong>Share Email Content:</strong> Your email content is never shared with third parties</li>
                    <li><strong>Use Content for Training:</strong> We don&apos;t use your emails to train AI models for other customers</li>
                    <li><strong>Cross-Customer Data Sharing:</strong> Each customer&apos;s data is completely isolated</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-600">We MAY Share Information:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                    <li><strong>Service Providers:</strong> With trusted vendors who help us operate our service (hosting, payment processing, customer support)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government investigation</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our company</li>
                    <li><strong>Safety and Security:</strong> To protect our users, our service, or the public from harm</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Integrations */}
            <Card>
              <CardHeader>
                <CardTitle>Third-Party Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Workspace:</strong> Our service integrates with Gmail through Google&apos;s secure APIs</li>
                  <li><strong>AI Providers:</strong> For Professional and Business plans, we process requests through OpenAI, Anthropic, or Google</li>
                  <li><strong>Payment Processors:</strong> Billing handled by secure, PCI-compliant payment providers</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Technical Safeguards</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Encryption:</strong> All data transmission uses industry-standard encryption (TLS 1.2+)</li>
                    <li><strong>Access Controls:</strong> Strict employee access controls with multi-factor authentication</li>
                    <li><strong>Regular Audits:</strong> Ongoing security assessments and penetration testing</li>
                    <li><strong>Infrastructure Security:</strong> SOC 2 Type II compliant hosting and operations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Google Workspace Integration</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>OAuth Security:</strong> Secure authentication through Google&apos;s OAuth system</li>
                    <li><strong>Limited Permissions:</strong> We only request the minimum permissions necessary</li>
                    <li><strong>Google&apos;s Security:</strong> Leveraging Google&apos;s enterprise-grade security infrastructure</li>
                    <li><strong>Data Residency:</strong> Processing occurs within Google&apos;s secure ecosystem when possible</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">API Key Protection</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Encryption at Rest:</strong> All API keys are encrypted before storage</li>
                    <li><strong>Secure Transmission:</strong> API keys are never transmitted in plain text</li>
                    <li><strong>Limited Access:</strong> Only authorized systems can decrypt and use stored keys</li>
                    <li><strong>User Control:</strong> You can update or revoke API keys at any time</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle>Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Email Content</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>No Retention:</strong> Email content is never permanently stored</li>
                    <li><strong>Immediate Deletion:</strong> Content is deleted immediately after processing</li>
                    <li><strong>Cache Clearing:</strong> Any temporary caches are cleared within 24 hours</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Account Information</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Active Accounts:</strong> Retained while your account is active and for 30 days after cancellation</li>
                    <li><strong>Billing Records:</strong> Retained for 7 years for tax and accounting purposes</li>
                    <li><strong>Support Records:</strong> Retained for 3 years to improve customer service</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Usage Analytics</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Aggregated Data:</strong> Anonymous usage statistics retained indefinitely for service improvement</li>
                    <li><strong>Personal Analytics:</strong> Individual usage data deleted 2 years after account closure</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Account Control</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> View and download your account information</li>
                    <li><strong>Correction:</strong> Update inaccurate personal information</li>
                    <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                    <li><strong>Portability:</strong> Export your data in standard formats</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Privacy Controls</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Marketing Opt-Out:</strong> Unsubscribe from promotional communications</li>
                    <li><strong>API Key Management:</strong> Add, update, or remove your AI provider keys</li>
                    <li><strong>Service Configuration:</strong> Control which features access your data</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Geographic Rights</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>GDPR (EU Users):</strong> Full data subject rights including access, rectification, erasure, and portability</li>
                    <li><strong>CCPA (California Users):</strong> Right to know, delete, and opt-out of data sales</li>
                    <li><strong>Other Jurisdictions:</strong> We comply with applicable local privacy laws</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Privacy Questions</h4>
                  <p>Email: contact@cheaperthankaren</p>
                </div>
                <div>
                  <h4 className="font-semibold">Data Protection Officer</h4>
                  <p>Email: contact@cheaperthankaren</p>
                  <p className="text-sm text-gray-600">Response Time: Within 30 days for formal requests</p>
                </div>
                <div>
                  <h4 className="font-semibold">General Contact</h4>
                  <p>Email: contact@cheaperthankaren</p>
                  <p>Website: https://cheaperthankaren.com/contact</p>
                </div>
                <div>
                  <h4 className="font-semibold">Mailing Address</h4>
                  <p>Tangent Solutions<br />
                  1740 Dell Range Blvd, Cheyenne WY 82009</p>
                </div>
              </CardContent>
            </Card>

            {/* Final Note */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-blue-800">
                Questions about this Privacy Policy? Email Catalina at privacy@cheaperthankaren.com (and yes, she might use the AI to draft her response, but she&apos;ll personally review every privacy inquiry because this stuff matters).
              </p>
              <p className="text-blue-800 mt-4">
                This Privacy Policy is designed to be both comprehensive and understandable. If any section is unclear, please don&apos;t hesitate to reach out for clarification.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
