export default function Home() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">G</span>
            </div>
            <h1 className="text-2xl font-bold text-white">GST Calculator Pro</h1>
          </div>
          <a href="/privacy-policy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl mb-8 shadow-2xl shadow-emerald-500/25">
              <span className="text-4xl">🧮</span>
            </div>
          </div>
          <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-cyan-200 mb-8 leading-tight">
            Professional GST Calculator
          </h2>
          <p className="text-2xl text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed">
            The most trusted GST calculation app for businesses, accountants, and professionals across India
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a href="https://play.google.com/store" className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105">
              <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span className="font-semibold text-lg">Get it on Google Play</span>
            </a>
           
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Our GST Calculator?</h3>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Designed by tax professionals for accuracy and ease of use</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 border border-gray-100 hover:border-emerald-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🧮</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Instant Calculations</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Calculate GST inclusive and exclusive amounts with precision and speed</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 border border-gray-100 hover:border-cyan-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📊</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">All GST Rates</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Complete support for 5%, 12%, 18%, and 28% tax rates with CGST/SGST breakdown</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📱</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Professional Interface</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Clean, intuitive design optimized for business professionals</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💾</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Smart History</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Automatically save and organize your calculation history for easy reference</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 border border-gray-100 hover:border-red-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔒</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">100% Private</h4>
              <p className="text-gray-600 text-lg leading-relaxed">All calculations processed locally - your data never leaves your device</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 border border-gray-100 hover:border-yellow-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Lightning Fast</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Optimized algorithms deliver instant, accurate results every time</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border border-gray-100 hover:border-indigo-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌍</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Multi-Language Support</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Available in Hindi, English, Tamil, Telugu, and 10+ regional languages</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 border border-gray-100 hover:border-pink-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎤</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Voice Input</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Speak your amounts naturally - supports voice commands in multiple languages</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 border border-gray-100 hover:border-orange-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📸</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Screenshot & Share</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Capture and share calculation results instantly with clients and colleagues</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 border border-gray-100 hover:border-teal-200 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">📋</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">Copy Results</h4>
              <p className="text-gray-600 text-lg leading-relaxed">One-tap copy of calculations to clipboard for easy pasting into documents</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="https://play.google.com/store" className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 flex items-center justify-center gap-3">
              <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Download Now
            </a>
            <a href="#" className="group bg-white/10 backdrop-blur-md text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-3">
              <span className="text-2xl">🌟</span>
              Rate Us 5 Stars
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
              <div className="mb-6">
                <p className="text-gray-400 mb-2">Contact & Support:</p>
                <a href="mailto:harshgor399@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">harshgor399@gmail.com</a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Quick Links</h5>
              <div className="space-y-3">
                <a href="/privacy-policy" className="block text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
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
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 GST Calculator Pro. All rights reserved.</p>
            <p className="text-gray-400">Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}