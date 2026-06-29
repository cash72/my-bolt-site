export default function PageLoader() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 flex justify-center" aria-live="polite" aria-busy="true">
      <div className="h-8 w-8 rounded-full border-2 border-orange-500 border-t-transparent animate-spin" />
    </div>
  );
}
