export default function NavIcon({ icon, text, href }) {
  return (
    <a href={href} className="flex gap-2 rounded-xl p-2 text-white/70 transition hover:bg-white/10 hover:text-purple-400">
      {icon}{text}
    </a>
  );
}