export default function TermsPage() {
  return (
    <div className='container mx-auto max-w-4xl rounded-md bg-white py-8 shadow-sm'>
      <div>
        <h1 className='mb-4 text-3xl font-medium'>Terms and Conditions</h1>
        <p className='text-sm font-light text-muted-foreground'>
          Last Updated: Dec 27, 2024
        </p>
      </div>
      <div className='mt-4 space-y-8'>
        <p className='font-light'>
          Welcome to Nitro (&quot;Service&quot;, &quot;we&quot;, &quot;us&quot;,
          or &quot;our&quot;). These Terms and Conditions govern your use of our
          platform. By accessing or using our Service, you agree to be bound by
          these Terms. If you do not agree to these terms, do not use our
          Service.
        </p>

        <section>
          <h2 className='mb-2 text-xl font-medium'>1. Account Registration</h2>
          <p className='font-light'>
            You must provide accurate and complete information and keep your
            account information updated. You are responsible for maintaining the
            confidentiality of your account credentials. You are responsible for
            all activities that occur under your account. Notify us immediately
            if you suspect any unauthorized use of your account.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-xl font-medium'>2. Use of the Service</h2>
          <p className='font-light'>
            We grant you a non-exclusive, non-transferable, limited license to
            access and use the Service for your personal or business purposes in
            accordance with these Terms. You agree not to (a) sell, resell,
            rent, lease or distribute the Service; (b) attempt to interfere with
            or disrupt the Service integrity or performance; or (c) use the
            Service to transmit any malware or illegal content.
          </p>
        </section>
        <section>
          <h2 className='mb-2 text-xl font-medium'>3. Payments and Billing</h2>
          <p className='font-light'>
            You agree to pay all applicable fees for the Service as described on
            our pricing page. All charges are billed in advance on a recurring
            basis, in accordance with your selection at the time of purchase.
            Refunds may be requested within 14 days of purchase. After this
            period, all sales are final. Refund requests will be evaluated on a
            case-by-case basis according to our refund policy.
          </p>
        </section>

        <section>
          <h2 className='mb-2 text-xl font-medium'>4. Privacy</h2>
          <p className='font-light'>
            We collect and use personal information in accordance with our
            Privacy Policy, which is incorporated by reference into these Terms.
          </p>
        </section>
        <section>
          <h2 className='mb-2 text-xl font-medium'>9. Changes to the Terms</h2>
          <p className='font-light'>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will provide
            at least 30 days notice prior to any new terms taking effect. Your
            continued use of the Service after any such modifications
            constitutes acceptance of the new Terms.
          </p>
        </section>
      </div>
    </div>
  )
}
