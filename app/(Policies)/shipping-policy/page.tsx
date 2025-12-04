import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Our shipping policy",
}

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-16 py-16">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center text-foreground mb-16">
          SHIPPING
          <br />
          POLICY
        </h1>

        {/* Processing Time Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Processing Time:</h2>
          <p className="text-foreground mb-4">
            All orders are processed within 2-3 business days. Orders are not processed on weekends or public holidays.
            Once your order is dispatched, you will receive a shipping notification with a tracking number.
          </p>
        </section>

        {/* Shipping Methods Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Shipping Methods:</h2>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>Standard Shipping: 5-7 business days delivery.</li>
            <li>Express Shipping: 2-3 business days delivery.</li>
            <li>Overnight Shipping: Next business day delivery.</li>
            <li>Shipping costs will be calculated at checkout based on your location.</li>
          </ul>
        </section>

        {/* Delivery Section */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Delivery:</h2>
          <p className="text-foreground mb-4">
            We aim to deliver your orders within the specified timeframe. Delivery times are estimates and not
            guaranteed. We are not responsible for delays caused by courier services or circumstances beyond our
            control.
          </p>
        </section>

        {/* Damaged or Lost Shipments Section */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-4">Damaged or Lost Shipments:</h2>
          <p className="text-foreground mb-4">
            If your package arrives damaged or goes missing, please contact our customer support team immediately at
            care@brandsofbia.com with your order number and tracking details.
          </p>
          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>We will investigate and provide a replacement or refund if applicable.</li>
            <li>Please report issues within 5 days of delivery.</li>
            <li>Provide photo evidence of damaged packaging or products.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
