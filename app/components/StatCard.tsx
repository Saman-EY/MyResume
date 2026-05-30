
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative w-full min-w-37.5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl transition-transform hover:-translate-y-0.5 ">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent"
      />
      <p className="text-xs uppercase tracking-wider text-white/60">{label}</p>
      <p className="mt-2 bg-linear-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent">
        {value}
      </p>
    </div>
  );
}

export default StatCard;
