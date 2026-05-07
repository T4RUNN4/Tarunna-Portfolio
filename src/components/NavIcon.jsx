export default function NavIcon({ icon }) {
  return (
    <button className="rounded-xl p-2 text-white/70 transition hover:bg-white/10 hover:text-purple-400">
      {icon}
    </button>
  );
}