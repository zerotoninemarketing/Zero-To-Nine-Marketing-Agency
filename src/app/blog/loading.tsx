export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <section className="blog-hero">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto"></div>
        </div>
      </section>

      {/* Blog Grid Skeleton */}
      <div className="blog-grid">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="blog-card animate-pulse">
            <div className="h-48 bg-gray-300 rounded-t-lg mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
            <div className="h-6 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
