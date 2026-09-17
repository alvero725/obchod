import { Send, Clock, MapPin, School } from 'lucide-react';
import { siteConfig } from '@/config';
import type { AppView } from '@/types';

interface ContactPageProps {
  onNavigate: (view: AppView) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">Kontakt</h1>
        <p className="mt-3 text-base text-slate-400">
          Pošli mi požiadavku cez formulár a dohodneme sa v škole.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Form */}
        <div className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
            <Send size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white">Požiadavka</h3>
          <p className="text-sm text-slate-400">
            Vyber si službu a odošli mi požiadavku cez formulár. Hneď mi príde.
          </p>
          <button
            onClick={() => onNavigate({ name: 'categories' })}
            className="mt-1 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:-translate-y-0.5"
          >
            Začať s požiadavkou
          </button>
        </div>

        {/* School */}
        <div className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20">
            <School size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white">Dohodneme sa v škole</h3>
          <p className="text-sm text-slate-400">
            Pozriem si tvoju požiadavku a dohodneme sa na cene a termíne osobne v škole.
          </p>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20">
            <Clock size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white">Otváracie hodiny</h3>
          <p className="text-sm text-slate-400">Po – Pia: 9:00 – 18:00</p>
          <p className="text-sm text-slate-400">So – Ne: po dohode</p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 ring-1 ring-sky-500/20">
            <MapPin size={24} />
          </div>
          <h3 className="text-lg font-semibold text-white">Lokalita</h3>
          <p className="text-sm text-slate-400">Slovensko — online / po dohode</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => onNavigate({ name: 'categories' })}
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:-translate-y-0.5"
        >
          Začať s požiadavkou
        </button>
      </div>
    </div>
  );
}
