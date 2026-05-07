import Link from "next/link";
import {
  Wrench,
  Star,
  ShieldCheck,
  Clock,
  ChevronRight,
  Hammer,
  Zap,
  Paintbrush,
  Droplet,
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "General Repairs",
    description: "Doors, windows, drywall, and more handled by skilled pros.",
    href: "/services/general",
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Licensed electricians for safe, code-compliant work.",
    href: "/services/electrical",
  },
  {
    icon: Droplet,
    title: "Plumbing",
    description: "Leaks, installations, and full plumbing overhauls.",
    href: "/services/plumbing",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior and exterior painting with premium finishes.",
    href: "/services/painting",
  },
];

const stats = [
  { label: "Jobs completed", value: "50,000+" },
  { label: "Verified pros", value: "2,400+" },
  { label: "Cities served", value: "120+" },
  { label: "Average rating", value: "4.9 ★" },
];

const steps = [
  {
    step: "1",
    title: "Describe your job",
    description:
      "Tell us what needs fixing. Add photos for an accurate quote.",
  },
  {
    step: "2",
    title: "Get matched instantly",
    description:
      "We surface the top-rated pros in your area available when you need them.",
  },
  {
    step: "3",
    title: "Book & relax",
    description:
      "Confirm your booking online. We handle reminders, payments, and follow-ups.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Wrench className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">fixly</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/services"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                How it works
              </Link>
              <Link
                href="/for-pros"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                For Pros
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/get-started"
                className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <ShieldCheck className="h-3.5 w-3.5" />
            Every pro is background-checked &amp; insured
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Home repairs,{" "}
            <span className="text-blue-600">done right.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Book vetted professionals for any home repair or maintenance job.
            Upfront pricing, same-day availability, and a satisfaction
            guarantee on every booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Book a pro today
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold text-lg px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">
                  {value}
                </div>
                <div className="text-blue-200 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What can we fix for you?
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              From a leaky faucet to a full renovation, our pros have the
              skills to handle it all.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white"
              >
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {description}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
            >
              View all services <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple as 1-2-3
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              From request to completed job in as little as a few hours.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="text-center px-4">
                <div className="w-14 h-14 bg-blue-600 text-white text-2xl font-extrabold rounded-full flex items-center justify-center mx-auto mb-6">
                  {step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Background-checked pros
                </h3>
                <p className="text-gray-500 text-sm">
                  Every professional is vetted with identity and background
                  checks before joining Fixly.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Satisfaction guarantee
                </h3>
                <p className="text-gray-500 text-sm">
                  Not happy with the work? We&apos;ll make it right or refund
                  your booking — no questions asked.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Same-day availability
                </h3>
                <p className="text-gray-500 text-sm">
                  Need it fixed now? Many pros offer same-day and next-day
                  slots, even on weekends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-5">
            Ready to get it fixed?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join over 200,000 homeowners who trust Fixly for fast, reliable
            home repairs.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-xl"
          >
            Book your first job free
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-blue-400" />
              <span className="text-white font-bold text-lg">fixly</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Fixly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
