export default function SocialIcon({ icon }) {
  return (
    <button className="rounded-xl border border-white/10 bg-white/5 p-3 text-white/70 backdrop-blur-md transition hover:border-purple-400/30 hover:bg-purple-400/10 hover:text-purple-400 hover:cursor-pointer">
      {icon}
    </button>
  );
}