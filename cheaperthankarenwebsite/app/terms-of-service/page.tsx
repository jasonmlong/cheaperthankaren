import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24 pb-16">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service for Cheaperthankaren.com
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The terms and conditions for using our AI email automation platform
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p><strong>Effective Date:</strong> 5/24/25</p>
              <p><strong>Last Updated:</strong> 5/24/25</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            
            {/* Welcome */}
            <Card>
              <CardHeader>
                <CardTitle>Welcome to Cheaperthankaren.com</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  These Terms of Service ("Terms") govern your use of our website and AI Email Drafter service. By using our service, you agree to these Terms. If you don't agree, please don't use our service.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-medium">
                    <strong>The Simple Version:</strong> Use our service responsibly, don't abuse it, pay your bills on time, and we'll provide reliable email automation that actually works. We're all adults here.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* About Our Service */}
            <Card>
              <CardHeader>
                <CardTitle>1. About Our Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">What We Provide</h4>
                  <p className="mb-3">
                    Cheaperthankaren.com offers AI-powered email automation tools designed to help assistants, executives, and professionals manage routine email responses more efficiently. Our primary service, AI Email Drafter, integrates with Google Workspace to generate contextual email drafts.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">What We Don't Provide</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Legal, financial, or professional advice through our AI</li>
                    <li>Guarantee that every AI-generated draft will be perfect</li>
                    <li>Email sending services (we create drafts; you review and send)</li>
                    <li>Data recovery services for information you delete</li>
                    <li>Customer support for non-business hours emergencies (unless you're on our Business plan)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Account Registration */}
            <Card>
              <CardHeader>
                <CardTitle>2. Account Registration and Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Who Can Use Our Service</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You must have authority to enter into this agreement</li>
                    <li>You must have a valid Google Workspace account</li>
                    <li>You must provide accurate registration information</li>
                    <li>You must not be prohibited from using our service under applicable law</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Account Security</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You're responsible for keeping your account credentials secure</li>
                    <li>You must notify us immediately of any unauthorized access</li>
                    <li>You're responsible for all activities under your account</li>
                    <li>We recommend using strong passwords and enabling two-factor authentication</li>
                    <li>Don't share your account with unauthorized users</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Business vs. Personal Use</h4>
                  <p>
                    Our service is designed for business and professional use. While we don't prohibit personal use, our features and support are optimized for business email workflows.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Plans */}
            <Card>
              <CardHeader>
                <CardTitle>3. Service Plans and Billing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Available Plans</h4>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="border rounded-lg p-4">
                      <Badge variant="outline" className="mb-2">Self-Managed</Badge>
                      <p className="font-semibold">$3.99/month</p>
                      <p className="text-sm">100 emails/month, requires your own AI API key</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <Badge variant="outline" className="mb-2">Professional</Badge>
                      <p className="font-semibold">$8.99/month</p>
                      <p className="text-sm">300 emails/month, managed AI service included</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <Badge variant="outline" className="mb-2">Business</Badge>
                      <p className="font-semibold">$17.99/month</p>
                      <p className="text-sm">1,000 emails/month, priority support</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Billing Terms</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All plans are billed monthly or annually in advance</li>
                    <li>Annual plans receive the discount specified on our pricing page</li>
                    <li>Billing occurs through Google Workspace Marketplace</li>
                    <li>All fees are non-refundable except as specifically stated in these Terms</li>
                    <li>We reserve the right to change pricing with 30 days notice</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Usage Limits</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Each plan includes a specific monthly email processing limit</li>
                    <li>Overage usage is not automatically billed; service stops when limits are reached</li>
                    <li>Limits reset on your monthly billing anniversary date</li>
                    <li>Unused monthly allowances do not roll over to the next month</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Free Trials and Promotional Codes</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Free trials are available for new customers only</li>
                    <li>Promotional codes have specific terms and expiration dates</li>
                    <li>Free trial users have access to all features of the promotional tier</li>
                    <li>Trials automatically convert to paid subscriptions unless cancelled</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Acceptable Use */}
            <Card>
              <CardHeader>
                <CardTitle>4. Acceptable Use Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Permitted Uses</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Generating professional email responses for business communication</li>
                    <li>Automating routine correspondence to save time</li>
                    <li>Learning and adapting to your personal communication style</li>
                    <li>Processing emails in languages supported by our AI providers</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Prohibited Uses</h4>
                  <p className="mb-3">You may not use our service to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Generate illegal, harmful, or offensive content</li>
                    <li>Spam, harass, or abuse others</li>
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Attempt to reverse engineer or circumvent our security measures</li>
                    <li>Resell or redistribute our service without authorization</li>
                    <li>Generate content that violates our AI providers' usage policies</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Content Responsibility</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You're responsible for all content processed through our service</li>
                    <li>You warrant that you have the right to process all email content</li>
                    <li>You're responsible for reviewing and approving all AI-generated drafts before sending</li>
                    <li>We're not responsible for the content of emails you choose to send</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>5. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Our Intellectual Property</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The Cheaperthankaren.com service, software, and website are our property</li>
                    <li>Our trademarks, logos, and brand elements are protected</li>
                    <li>The AI models and algorithms we've developed are proprietary</li>
                    <li>You may not copy, modify, or create derivative works of our service</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Your Content</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You retain all rights to your email content and data</li>
                    <li>You grant us a limited license to process your content to provide our service</li>
                    <li>This license terminates when you delete content or close your account</li>
                    <li>We don't claim ownership of your business communications</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Third-Party Content</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Our service integrates with third-party AI providers</li>
                    <li>These providers have their own intellectual property rights</li>
                    <li>You must comply with their terms of service when using our integrated features</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data and Privacy */}
            <Card>
              <CardHeader>
                <CardTitle>6. Data and Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Data Processing</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your email content is solely to provide draft generation services</li>
                    <li>Your data is processed by either OpenAI, Claude, or Gemini, not by us</li>
                    <li>Email content is never permanently stored on our servers</li>
                    <li>Your data is processed in accordance with our Privacy Policy</li>
                    <li>We implement industry-standard security measures to protect your information</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Your Data Rights</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your data is stored solely within your Gmail account. We do not have access to it. So if you want it deleted, delete it in your account.</li>
                    <li>You can request deletion of your account and associated data. This is limited solely to billing related information and support tickets.</li>
                    <li>You maintain control over what emails are processed by our service.</li>
                    <li>You can revoke our access to your Gmail account through Google's admin console.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Third-Party Integrations</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Our service integrates with Google Workspace and AI providers</li>
                    <li>These integrations are subject to the third parties' terms and privacy policies</li>
                    <li>We're not responsible for third-party data handling practices</li>
                    <li>You should review the privacy policies of all integrated services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Service Availability */}
            <Card>
              <CardHeader>
                <CardTitle>7. Service Availability and Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Service Uptime</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We strive for 99.5% service availability</li>
                    <li>Scheduled maintenance will be announced in advance when possible</li>
                    <li>Emergency maintenance may occur without advance notice</li>
                    <li>Service credits are not provided for brief outages or maintenance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Performance Expectations</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI draft generation typically completes within 30 seconds</li>
                    <li>Service performance depends on AI provider response times</li>
                    <li>We implement reasonable retry mechanisms for failed requests</li>
                    <li>Some delays may occur during peak usage periods</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Service Modifications</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We may update, modify, or discontinue features with reasonable notice</li>
                    <li>Major changes will be announced at least 30 days in advance</li>
                    <li>We'll provide migration assistance for deprecated features when possible</li>
                    <li>Continued use after changes constitutes acceptance of modifications</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">What We're Not Responsible For</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Errors or inaccuracies in AI-generated content</li>
                    <li>Business decisions based on our service output</li>
                    <li>Loss of data due to user error or account deletion</li>
                    <li>Indirect, consequential, or punitive damages</li>
                    <li>Damages exceeding the amount you've paid us in the past 12 months</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Your Responsibility</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Review all AI-generated drafts before sending</li>
                    <li>Maintain appropriate backups of important data</li>
                    <li>Use the service in accordance with these Terms</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Force Majeure</h4>
                  <p>
                    We're not liable for delays or failures caused by circumstances beyond our reasonable control, including natural disasters, government actions, internet outages, or third-party service failures.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card>
              <CardHeader>
                <CardTitle>9. Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of our service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of applicable laws</li>
                  <li>Content you process through our service</li>
                  <li>Your infringement of third-party rights</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle>10. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">How You Can Cancel</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cancel your subscription through the Google Workspace Marketplace</li>
                    <li>Cancellation takes effect at the end of your current billing period</li>
                    <li>You retain access to the service until your subscription expires</li>
                    <li>Data export is available for 30 days after cancellation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">How We Can Terminate</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>For violation of these Terms (immediate termination)</li>
                    <li>For non-payment (after 7-day grace period)</li>
                    <li>For abuse of our service or resources</li>
                    <li>If required by law or legal process</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Effect of Termination</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your right to use the service ends immediately</li>
                    <li>We'll delete your account data according to our Privacy Policy</li>
                    <li>Any prepaid fees are non-refundable</li>
                    <li>These Terms continue to apply to past use of our service</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Refund Policy */}
            <Card>
              <CardHeader>
                <CardTitle>11. Refund Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">30-Day Money-Back Guarantee</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>New customers can request a full refund within 30 days</li>
                    <li>Refunds are processed through the original payment method</li>
                    <li>Promotional and discounted subscriptions may have different refund terms</li>
                    <li>Refund requests must be submitted through our support channels</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Partial Refunds</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We don't provide partial refunds for unused monthly allowances</li>
                    <li>Early cancellation doesn't result in prorated refunds</li>
                    <li>Service credits may be provided for significant service outages at our discretion</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card>
              <CardHeader>
                <CardTitle>12. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Informal Resolution</h4>
                  <p>
                    Before formal legal action, please contact us at hello@cheaperthankaren.com to resolve disputes informally. We're committed to working out reasonable solutions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Binding Arbitration</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Disputes will be resolved through binding arbitration</li>
                    <li>Arbitration will be conducted under the rules of the American Arbitration Association</li>
                    <li>You waive the right to participate in class actions or representative proceedings</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Exceptions to Arbitration</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Small claims court actions (under $10,000)</li>
                    <li>Intellectual property disputes</li>
                    <li>Injunctive relief requests</li>
                    <li>Government enforcement actions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle>13. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  These Terms are governed by the laws of Wyoming, without regard to conflict of law principles. Any legal actions must be brought in the courts of Wyoming.
                </p>
              </CardContent>
            </Card>

            {/* General Provisions */}
            <Card>
              <CardHeader>
                <CardTitle>14. General Provisions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Entire Agreement</h4>
                  <p>
                    These Terms, together with our Privacy Policy, constitute the complete agreement between you and Cheaperthankaren.com regarding our service.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Severability</h4>
                  <p>
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">No Waiver</h4>
                  <p>
                    Our failure to enforce any provision doesn't waive our right to enforce it later.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Assignment</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You may not assign these Terms without our written consent</li>
                    <li>We may assign these Terms in connection with a business transfer</li>
                    <li>These Terms bind successors and permitted assigns</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Updates to Terms</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We may update these Terms periodically</li>
                    <li>Material changes will be announced with 30 days notice</li>
                    <li>Continued use after changes constitutes acceptance</li>
                    <li>Previous versions are available upon request</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>15. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Customer Support</h4>
                  <p>Email: hello@cheaperthankaren.com</p>
                  <p className="text-sm text-gray-600">Response Time: Within 24 hours for general inquiries, 12 hours for paid customers</p>
                </div>
                <div>
                  <h4 className="font-semibold">Legal Notices</h4>
                  <p>Email: hello@cheaperthankaren.com</p>
                </div>
                <div>
                  <h4 className="font-semibold">Billing Questions</h4>
                  <p>Email: hello@cheaperthankaren.com</p>
                  <p className="text-sm text-gray-600">Note: Billing is processed through Google Workspace Marketplace</p>
                </div>
                <div>
                  <h4 className="font-semibold">General Contact</h4>
                  <p>Email: hello@cheaperthankaren.com</p>
                  <p>Website: https://cheaperthankaren.com/contact</p>
                </div>
                <div>
                  <h4 className="font-semibold">If you can't get us at the email addresses above, send a message through the contact form on <a href = "https://jhmediagroup.com/contact-us/">JH Media Group</a></h4>
                  <p>Website: https://www.jhmediagroup.com/contact</p>
                </div>
                <div>
                  <h4 className="font-semibold">Mailing Address</h4>
                  <p>JH Media Group LLC<br />
                  1740 Dell Range Blvd Cheyenne, Ste H 13-84075, WY, 82009</p>
                </div>
              </CardContent>
            </Card>

            {/* Service-Specific Terms */}
            <Card>
              <CardHeader>
                <CardTitle>Service-Specific Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">AI Email Drafter</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Drafts are suggestions only; you're responsible for final content</li>
                    <li>AI accuracy improves over time but isn't guaranteed</li>
                    <li>Processing requires active Google Workspace integration</li>
                    <li>Some email types may not be suitable for AI processing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Google Workspace Integration</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Requires appropriate Google Workspace permissions</li>
                    <li>Subject to Google's terms of service and policies</li>
                    <li>We're not responsible for Google service outages or changes</li>
                    <li>You can revoke integration access at any time</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">API Key Management (Self-Managed Plans)</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You're responsible for obtaining and maintaining valid API keys</li>
                    <li>API costs are separate from our service fees</li>
                    <li>We encrypt but don't guarantee the security of stored API keys</li>
                    <li>Invalid or expired API keys will cause service interruptions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Final Note */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-green-800">
                Questions about these Terms? Contact us at hello@cheaperthankaren.com. Unlike our AI-generated email drafts, all legal questions get personal attention from actual humans (though Catalina might still help organize the responses).
              </p>
              <p className="text-green-800 mt-4">
                These Terms are effective as of the date listed above and supersede all previous versions. By using our service, you acknowledge that you've read, understood, and agree to be bound by these Terms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}