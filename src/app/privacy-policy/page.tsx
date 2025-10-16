import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - GST Calculator',
  description: 'Privacy Policy for GST Calculator mobile application',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              GST Calculator does not collect, store, or transmit any personal information. All calculations 
              are performed locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Data Storage</h2>
            <p className="text-gray-700 leading-relaxed">
              The app may store calculation history locally on your device for your convenience. 
              This data remains on your device and is not shared with any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Permissions</h2>
            <p className="text-gray-700 leading-relaxed">
              The app may request minimal permissions necessary for its functionality, such as storage 
              access for saving calculation history locally.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              GST Calculator does not integrate with any third-party analytics or advertising services 
              that would collect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              Since no personal data is collected or transmitted, there are no data security concerns 
              related to external data breaches. All calculations remain private on your device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Changes to Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be reflected 
              in the app and on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through the 
              app&apos;s support section.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            This privacy policy applies to the GST Calculator mobile application.
          </p>
        </div>
      </div>
    </div>
  );
}