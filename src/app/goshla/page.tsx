export default function GoshlaPage() {
  // Same size as bottom row: 4/3 aspect, one shared class for all 6 placeholders
  const imagePlaceholderClass =
    "relative w-full aspect-[4/3] rounded-lg border-2 border-dashed border-amber-600/40 bg-white/50 flex items-center justify-center text-amber-900/40 text-xs font-medium shadow-inner";

  return (
    <div className="min-h-screen w-full max-w-none bg-divine-cream/30 py-4 md:py-6">
      <section
        className="w-full max-w-none overflow-hidden border-y border-amber-400/70 shadow-md"
        style={{
          background:
            "linear-gradient(165deg, #fde68a 0%, #fef3c7 35%, #fffbeb 55%, #fde68a 100%)",
        }}
      >
        <div className="w-full px-2 sm:px-3 md:px-4 py-5 sm:py-6 md:py-8">
          {/* Top: 12-col on lg — 3 | 6 | 3 matches bottom four at 3+3+3+3 */}
          <div className="mb-5 grid w-full grid-cols-1 items-center gap-3 sm:gap-4 md:mb-6 lg:grid-cols-12 lg:gap-4">
            <div className="lg:col-span-3">
              <div className={imagePlaceholderClass} aria-hidden>
                <span className="select-none">Image</span>
              </div>
            </div>

            <div className="order-first w-full min-w-0 py-1 text-center lg:order-none lg:col-span-6">
              <h1 className="text-[0.95rem] sm:text-base md:text-lg lg:text-xl xl:text-2xl font-extrabold leading-snug tracking-tight text-red-600 drop-shadow-sm break-words [overflow-wrap:anywhere]">
                ஸ்ரீ சந்திரசேகரேந்திர சரஸ்வதி சுவாமிகள்
              </h1>
              <h2 className="mt-1.5 text-[0.8rem] sm:text-sm md:text-base lg:text-lg xl:text-xl font-extrabold leading-snug text-red-600 break-words [overflow-wrap:anywhere]">
                ஸ்ரீ மஹாபெரியவா கோசாலை
              </h2>
            </div>

            <div className="lg:col-span-3">
              <div className={imagePlaceholderClass} aria-hidden>
                <span className="select-none">Image</span>
              </div>
            </div>
          </div>

          {/* Bottom row: same track widths as top outer columns (3+3+3+3 = 12) */}
          <div
            className="w-full border-t border-amber-500/30 pt-3 md:pt-4"
            aria-label="Gallery placeholders"
          >
            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-4">
              <div className={imagePlaceholderClass} aria-hidden>
                <span className="select-none">Image</span>
              </div>
              <div className={imagePlaceholderClass} aria-hidden>
                <span className="select-none">Image</span>
              </div>
              <div className={imagePlaceholderClass} aria-hidden>
                <span className="select-none">Image</span>
              </div>
              <div className={imagePlaceholderClass} aria-hidden>
                <span className="select-none">Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
