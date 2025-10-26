export default function HeroSkeleton() {
  return (
    <div className="max-w-5xl mx-auto mb-8 sm:mb-12 animate-pulse">
      {/* Title skeleton */}
      <div className="space-y-4 mb-6 sm:mb-8">
        <div className="h-12 sm:h-16 md:h-20 bg-slate-200 rounded-lg mx-auto w-4/5"></div>
        <div className="h-8 sm:h-12 bg-slate-200 rounded-lg mx-auto w-3/5"></div>
      </div>

      {/* Subtitle skeleton */}
      <div className="space-y-3 mb-6 sm:mb-8 max-w-3xl mx-auto">
        <div className="h-6 bg-slate-200 rounded mx-auto w-4/5"></div>
        <div className="h-6 bg-slate-200 rounded mx-auto w-3/5"></div>
        <div className="h-8 bg-slate-200 rounded-full mx-auto w-64"></div>
      </div>

      {/* Button skeleton */}
      <div className="h-12 sm:h-14 bg-slate-200 rounded-full mx-auto w-48 mb-8 sm:mb-12"></div>

      {/* Video skeleton */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-slate-200 rounded-xl" style={{ aspectRatio: "16/9", minHeight: "300px" }}></div>
      </div>
    </div>
  )
}
