import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Our terms of service",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-16 py-16">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-foreground mb-16">
          TERMS OF
          <br />
          SERVICE
        </h1>

        {/* Account Responsibility Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Account Responsibility:</h2>
          <p className="text-foreground mb-4">
            You are responsible for maintaining the confidentiality of your account information and password. You agree
            to accept responsibility for all activities that occur under your account.
          </p>
        </section>

        {/* Product Information Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Product Information:</h2>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>We strive to provide accurate product descriptions and pricing information.</li>
            <li>We reserve the right to correct any errors or omissions in product listings.</li>
            <li>We do not warrant that product images or descriptions are error-free or complete.</li>
            <li>Prices are subject to change without notice.</li>
          </ul>
        </section>

        {/* User Conduct Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">User Conduct:</h2>
          <p className="text-foreground mb-4">
            You agree not to use our platform for any unlawful purposes or in any way that infringes upon the rights of
            others or restricts their use and enjoyment of our services.
          </p>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>Do not engage in abusive or defamatory behavior.</li>
            <li>Do not attempt to gain unauthorized access to our systems.</li>
            <li>Do not transmit viruses or malicious code.</li>
          </ul>
        </section>

        {/* Limitation of Liability Section */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Limitation of Liability:</h2>
          <p className="text-foreground">
            Our company shall not be liable for any indirect, incidental, special, or consequential damages arising from
            your use of our services or products. For any disputes or concerns, please contact us at
            care@brandsofbia.com.
          </p>
        </section>
      </div>
    </main>
  )
}
