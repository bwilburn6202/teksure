/**
 * ToolsIndex — Tools hub page (decluttered)
 *
 * Design goals:
 *  - Simple page title + subtitle
 *  - Clean tool cards: icon, name, one-line description, single CTA
 *  - No badges, no "featured" labels, no stats
 */

import { Link } from "react-router-dom";
import {
  Smartphone,
  ShieldCheck,
  HardDrive,
  Wrench,
  ArrowRight,
} from "lucide-react";

const TOOLS = [
  {
    to: "/tools/app-recommender",
    icon: Smartphone,
    name: "App Recommender",
    description: "Find the right apps for your needs — no tech knowledge required.",
  },
  {
    to: "/tools/warranty-checker",
    icon: ShieldCheck,
    name: "Warranty Checker",
    description: "Find out if your device is still under warranty in a few clicks.",
  },
  {
    to: "/tools/backup-wizard",
    icon: HardDrive,
    name: "Backup Wizard",
    description: "Step-by-step guide to backing up what matters most on your devices.",
  },
  {
    to: "/tools/troubleshooter",
    icon: Wrench,
    name: "Troubleshooter",
    description: "Answer a few questions and get a fix for your most common tech problems.",
  },
];

export default function ToolsIndex() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 py-10 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Free tools</h1>
        <p className="text-sm text-gray-500">
          Interactive helpers that walk you through common tech tasks.
        </p>
      </div>

      {/* Tools grid */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 gap-4">
          {TOOLS.map(({ to, icon: Icon, name, description }) => (
            <Link
              key={to}
              to={to}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all bg-white"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors">
                  {name}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0 mt-0.5" />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom prompt */}
      <div className="max-w-5xl mx-auto px-4 pb-16 text-center">
        <p className="text-sm text-gray-400">
          Need more help?{" "}
          <Link to="/book" className="text-blue-600 hover:underline">
            Book a technician
          </Link>{" "}
          or{" "}
          <Link to="/guides" className="text-blue-600 hover:underline">
            browse our guides
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
