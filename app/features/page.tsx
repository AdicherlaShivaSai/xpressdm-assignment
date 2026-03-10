import { Sparkles, Zap, BarChart3 } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        Powerful Features
      </h1>
      <p className="text-center text-gray-500 max-w-xl mx-auto mb-16">
        Explore how our platform helps teams build faster and smarter.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="p-6 rounded-xl border hover:shadow-xl transition hover:-translate-y-1">
          <Sparkles className="text-primary1 mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">AI Content Generation</h2>
          <p className="text-gray-500">
            Generate blogs, marketing copy and product descriptions instantly.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 rounded-xl border hover:shadow-xl transition hover:-translate-y-1">
          <Zap className="text-primary1 mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">Smart Automation</h2>
          <p className="text-gray-500">
            Automate repetitive workflows and boost productivity.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 rounded-xl border hover:shadow-xl transition hover:-translate-y-1">
          <BarChart3 className="text-primary1 mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">Analytics Dashboard</h2>
          <p className="text-gray-500">
            Track performance insights with powerful analytics.
          </p>
        </div>
      </div>
    </div>
  );
}
