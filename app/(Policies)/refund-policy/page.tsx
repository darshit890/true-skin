import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Our refund and return policy",
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-16 py-16">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-foreground mb-16">
          REFUND
          <br />
          POLICY
        </h1>

        {/* Cancellation Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Cancellation:</h2>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>
              Your order can only be cancelled if it has yet to be shipped. To cancel, please write to our customer
              support team at care@brandsofbia.com.
            </li>
            <li>
              In such cases, the order will be cancelled, and the refund will be processed by us within 7 business days
              after the cancellation request is acknowledged.
            </li>
            <li>Orders cannot be cancelled once shipped.</li>
          </ul>
        </section>

        {/* Returns Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Returns:</h2>
          <p className="text-foreground mb-4">
            You can return your product within 10 days of delivery if the product is damaged, leaking, tampered with, or
            broken, or if the package is compromised.
          </p>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>Wrong product delivered.</li>
            <li>Product post-expiration date.</li>
            <li>Incomplete order / Missing products.</li>
          </ul>
        </section>

        {/* Returns Will Not Be Accepted Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Returns will not be accepted if:</h2>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>Products are opened, used, or altered.</li>
            <li>Original packaging (cartons, labels, etc.) is missing.</li>
            <li>The return/replacement request is generated more than 10 days after the date of delivery.</li>
            <li>The damaged/missing product is reported after 10 days from the date of delivery.</li>
            <li>The product is being returned for a reason other than a manufacturing defect.</li>
          </ul>
        </section>

        {/* Process Section */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Process:</h2>
          <p className="text-foreground">
            To initiate a return or replacement, please contact our customer support team at care@brandsofbia.com with
            your order details and reason for return. Our team will guide you through the process.
          </p>
        </section>
      </div>
    </main>
  )
}
