'use client'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-600">Get in touch with our team</p>
          <div className="mt-4">
            <a 
              href="mailto:contact@zerotoninemarketing.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              contact@zerotoninemarketing.com
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <form
            action="https://formspree.io/f/xblyyyor"  // 🔁 Replace this with your real Formspree form ID
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="countryCode" className="block text-sm font-medium text-gray-700">
                  Country Code
                </label>
                <select
                  name="countryCode"
                  id="countryCode"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  onChange={(e) => {
                    const customInput = document.getElementById('custom-country-code-input');
                    if (e.target.value === 'custom') {
                      customInput?.classList.remove('hidden');
                      customInput?.setAttribute('required', 'true');
                    } else {
                      customInput?.classList.add('hidden');
                      customInput?.removeAttribute('required');
                    }
                  }}
                >
                  <option value="+91">India (+91)</option>
                  <option value="+1">USA/Canada (+1)</option>
                  <option value="+44">UK (+44)</option>
                  <option value="+61">Australia (+61)</option>
                  <option value="+971">UAE (+971)</option>
                  <option value="+968">Oman (+968)</option>
                  <option value="+880">Bangladesh (+880)</option>
                  <option value="+65">Singapore (+65)</option>
                  <option value="+966">Saudi Arabia (+966)</option>
                  <option value="custom">Other (Enter Manually)</option>
                </select>
                <input
                  type="text"
                  name="customCountryCode"
                  id="custom-country-code-input"
                  placeholder="Enter your country code (e.g. +123)"
                  className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 hidden"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
                Requirements
              </label>
              <textarea
                name="requirements"
                id="requirements"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Please describe your requirements..."
              ></textarea>
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="/thank-you" />

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
