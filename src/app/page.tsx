export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">GST Calculator</h1>
          <a href="/privacy-policy" className="text-gray-600 hover:text-indigo-600">Privacy Policy</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-2xl mb-6">
              <span className="text-3xl text-white">📊</span>
            </div>
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">Professional GST Calculator</h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">The most trusted GST calculation app for businesses, accountants, and professionals across India</p>
          
          {/* Download Button */}
          <div className="flex justify-center mb-12">
            <a href="https://play.google.com/store" className="bg-green-600 text-white px-8 py-4 rounded-lg flex items-center gap-3 hover:bg-green-700 transition-colors shadow-lg">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our GST Calculator?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Designed by tax professionals for accuracy and ease of use</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🧮</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Instant Calculations</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Calculate GST inclusive and exclusive amounts with precision and speed</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">All GST Rates</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Complete support for 5%, 12%, 18%, and 28% tax rates with CGST/SGST breakdown</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Professional Interface</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Clean, intuitive design optimized for business professionals</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💾</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Smart History</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Automatically save and organize your calculation history for easy reference</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">100% Private</h4>
              <p className="text-gray-600 text-lg leading-relaxed">All calculations processed locally - your data never leaves your device</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Lightning Fast</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Optimized algorithms deliver instant, accurate results every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-6">Join 50,000+ Professionals</h3>
          <p className="text-2xl mb-12 opacity-90">Trusted by businesses across India for accurate GST calculations</p>
          <div className="flex justify-center">
            <a href="https://play.google.com/store" className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Download Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">G</span>
                </div>
                <h4 className="text-2xl font-bold">GST Calculator Pro</h4>
              </div>
              <p className="text-gray-400 text-lg mb-6 max-w-md">The most trusted GST calculation app for Indian businesses and professionals.</p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xl">📧</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xl">📱</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-xl">🌐</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Quick Links</h5>
              <div className="space-y-3">
                <a href="/privacy-policy" className="block text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Support</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Contact Us</a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Features</h5>
              <div className="space-y-3">
                <p className="text-gray-400">GST Calculation</p>
                <p className="text-gray-400">Tax Rate Support</p>
                <p className="text-gray-400">Calculation History</p>
                <p className="text-gray-400">Offline Mode</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 GST Calculator Pro. All rights reserved.</p>
            <p className="text-gray-400">Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
