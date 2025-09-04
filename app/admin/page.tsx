import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard - John Doe',
  description: 'Administrative interface for portfolio management',
  robots: 'noindex, nofollow',
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-400 mb-8">
          This page is reserved for future administrative features.
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Coming Soon</h2>
          <ul className="text-left text-gray-300 space-y-2">
            <li>• Portfolio content management</li>
            <li>• Project showcase editor</li>
            <li>• Contact form analytics</li>
            <li>• SEO optimization tools</li>
          </ul>
        </div>
        <a 
          href="/" 
          className="inline-block mt-6 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors duration-300"
        >
          Back to Portfolio
        </a>
      </div>
    </div>
  );
}