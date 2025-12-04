import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-16 py-16">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-foreground mb-16">
          PRIVACY
          <br />
          POLICY
        </h1>

        {/* Information Collection Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Information We Collect:</h2>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>Personal information such as name, email address, and phone number when you create an account.</li>
            <li>Shipping and billing address information when you place an order.</li>
            <li>Payment information processed securely through our payment providers.</li>
            <li>Browsing data and usage patterns through cookies and analytics tools.</li>
          </ul>
        </section>

        {/* How We Use Your Information Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">How We Use Your Information:</h2>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>To process and fulfill your orders.</li>
            <li>To send you order confirmations and shipping updates.</li>
            <li>To improve our services and customer experience.</li>
            <li>To communicate about promotions and updates (with your consent).</li>
            <li>To prevent fraud and ensure security.</li>
          </ul>
        </section>

        {/* Data Protection Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Data Protection:</h2>
          <p className="text-foreground mb-4">
            We implement industry-standard security measures to protect your personal information from unauthorized
            access, alteration, disclosure, or destruction.
          </p>
        </section>

        {/* Your Rights Section */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Your Rights:</h2>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>You have the right to access your personal information.</li>
            <li>You can request corrections to inaccurate data.</li>
            <li>You may opt out of promotional communications at any time.</li>
            <li>For inquiries, please contact us at care@brandsofbia.com.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
