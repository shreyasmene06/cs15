// Hero section for the public FAQ page — large centered title, subtitle,
// and (optionally) a category filter pill bar. Matches the existing
// FAQ Hive aesthetic from the screenshot.

import React from 'react';
import type { PublicCategory } from './types';

interface ExploreHeroProps {
  /** Name of the active batch — used as the eyebrow above the H1. */
  batchName: string;
  totalFaqs: number;
  totalCategories: number;
  categories?: PublicCategory[];
  activeCategory: string | null;
  onSelectCategory: (name: string | null) => void;
  children?: React.ReactNode;
}

export function ExploreHero({
  batchName,
  totalFaqs,
  totalCategories,
  categories,
  activeCategory,
  onSelectCategory,
  children,
}: ExploreHeroProps): React.ReactElement {
  return (
    <section
      className="relative pt-8 sm:pt-12 pb-6 sm:pb-10 text-center"
      aria-label="Page header"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-3">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" />
          <path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1 0.7-1.5 1.2-1.5 2.5" />
          <path d="M12 17.5h.01" />
        </svg>
      </div>
      <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent">
        {batchName}
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl text-ink leading-tight mt-1.5">
        Frequently Asked Questions
      </h1>
      <p className="text-sm sm:text-base text-ink-soft mt-2 max-w-2xl mx-auto px-4">
        Find instant answers to common questions — no sign-in required.
      </p>

      {totalFaqs > 0 && (
        <p className="text-[11px] text-ink-faint mt-3 uppercase tracking-wider font-semibold">
          {totalFaqs} {totalFaqs === 1 ? 'FAQ' : 'FAQs'} · {totalCategories}{' '}
          {totalCategories === 1 ? 'category' : 'categories'}
        </p>
      )}

      {children && <div className="mt-6 sm:mt-8 max-w-3xl mx-auto px-2">{children}</div>}

      {categories && categories.length > 0 && (
        <nav
          className="mt-6 max-w-4xl mx-auto px-2 flex flex-wrap justify-center gap-2"
          aria-label="Filter by category"
        >
          <button
            type="button"
            onClick={() => onSelectCategory(null)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all duration-200 ${
              activeCategory === null
                ? 'bg-accent text-accent-text border-accent/60'
                : 'bg-card text-ink border-border/70 hover:bg-cream'
            }`}
          >
            All
          </button>
          {categories.slice(0, 10).map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => onSelectCategory(activeCategory === cat.name ? null : cat.name)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all duration-200 ${
                activeCategory === cat.name
                  ? 'bg-accent text-accent-text border-accent/60'
                  : 'bg-card text-ink border-border/70 hover:bg-cream'
              }`}
            >
              {cat.name} · {cat.count}
            </button>
          ))}
        </nav>
      )}
    </section>
  );
}
