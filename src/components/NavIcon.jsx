export default function NavIcon({ icon, text, href, curr, setCurr }) {
  return (
    <a
      href={href}
      className={`flex gap-2 rounded-xl p-2 transition hover:bg-white/10 hover:text-purple-400 ${curr === text ? "bg-white/10 text-purple-400" : "text-white/70"}`}
      onClick={() => setCurr(text)}
    >
      {icon}
      {text}
    </a>
  );
}
