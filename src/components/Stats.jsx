export default function Stat({ number, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="text-5xl font-black">{number}</h3>
      <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
        {label}
      </p>
    </div>
  );
}