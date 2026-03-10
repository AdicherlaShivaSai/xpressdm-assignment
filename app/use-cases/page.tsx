import { Users, PenTool, Rocket, Building2 } from "lucide-react";

export default function UseCasesPage() {
  return (
    <div className="min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Use Cases</h1>
      <p className="text-center text-gray-500 max-w-xl mx-auto mb-16">
        Explore how our platform helps teams build faster and smarter.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="p-6 rounded-xl border hover:shadow-xl transition hover:-translate-y-1">
          <Users className="text-primary1 mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">Marketing Teams</h2>
          <p className="text-gray-500">
            Create marketing campaigns and generate copy faster.
          </p>
        </div>

        <div className="p-6 rounded-xl border hover:shadow-xl transition hover:-translate-y-1">
          <PenTool className="text-primary1 mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">Content Creators</h2>
          <p className="text-gray-500">
            Write blogs, social posts and scripts effortlessly.
          </p>
        </div>

        <div className="p-6 rounded-xl border hover:shadow-xl transition hover:-translate-y-1">
          <Rocket className="text-primary1 mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">Startups</h2>
          <p className="text-gray-500">
            Scale operations quickly using automation and AI tools.
          </p>
        </div>

        <div className="p-6 rounded-xl border hover:shadow-xl transition hover:-translate-y-1">
          <Building2 className="text-primary1 mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">Enterprise Teams</h2>
          <p className="text-gray-500">
            Manage teams, workflows and analytics in one platform.
          </p>
        </div>
      </div>
    </div>
  );
}
