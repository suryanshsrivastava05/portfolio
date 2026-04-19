import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to discuss your next project. Let\'s create something extraordinary together.',
};

export default function ContactPage() {
  return (
    <section className="section pt-32 min-h-screen">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h1 className="font-[family-name:var(--font-display)] font-bold gradient-text mb-4" style={{ fontSize: 'var(--fs-h1)' }}>
                Let&apos;s Talk
              </h1>
              <p className="text-text-muted leading-relaxed">
                Have a project in mind? I&apos;d love to hear about it. Fill out the form and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Email', value: 'hello@suryansh.dev' },
                { label: 'Location', value: 'India (IST)' },
                { label: 'Availability', value: 'Open for projects' },
              ].map((item) => (
                <div key={item.label} className="card p-5">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="card p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm text-text-muted mb-2 block">Name</label>
                <input id="name" type="text" className="input p-4 w-full bg-surface border-border rounded-lg" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-text-muted mb-2 block">Email</label>
                <input id="email" type="email" className="input p-4 w-full bg-surface border-border rounded-lg" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="text-sm text-text-muted mb-2 block">Subject</label>
                <input id="subject" type="text" className="input p-4 w-full bg-surface border-border rounded-lg" placeholder="Project inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm text-text-muted mb-2 block">Message</label>
                <textarea id="message" className="input p-4 w-full bg-surface border-border rounded-lg min-h-[150px] resize-y" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
