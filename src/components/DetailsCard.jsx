export default function DetailsCard({ logo, alt, date, course, subject, description, rounded }) {
  return (
    <div className="flex flex-col rounded-3xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur-xl transition duration-300 hover:border-purple-400/30 hover:bg-white/10">
      <div className="flex items-center justify-center gap-8">
        <img src={logo} alt={alt} className={`w-30 h-30 ${rounded ? "rounded-full" : ""}`} />
        <div className="flex flex-col justify-center">
          <h6 className="text-xs leading-relaxed text-white/50 mb-0.5">
            {date}
          </h6>
          <h2 className="text-white font-medium text-2xl">
            {course}
          </h2>
          <h6 className="leading-relaxed text-white/50">
            {subject}
          </h6>
          <h6 className="text-sm leading-relaxed text-white/50 mt-4">
            {description}
          </h6>
        </div>
      </div>
    </div>
  );
}
