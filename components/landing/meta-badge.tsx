export function MetaBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-sm ${className}`}
    >
      <img
        src="/meta-business-partner.png"
        alt="Meta Business Partner"
        className="h-10 w-auto"
      />
    </div>
  )
}
