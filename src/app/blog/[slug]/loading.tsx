export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          {/* Title skeleton */}
          <div className="h-12 bg-gray-300 rounded w-3/4 mb-6"></div>
          
          {/* Featured image skeleton */}
          <div className="h-64 bg-gray-300 rounded-lg mb-8"></div>
          
          {/* Content skeleton */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/5"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
          
          {/* Date skeleton */}
          <div className="mt-8">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
