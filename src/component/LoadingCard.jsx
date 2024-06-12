import React from 'react'

export default function LoadingCard() {
  return (
    <div>
        <Card className="max-w-sm" imgAlt={title} imgSrc={image}>
        <div className="flex flex-col items-center justify-center h-full">
    {/* Loading Indicator */}
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
    </svg>

    {/* Optional: Text indicating the loading state */}
    <p className="text-gray-500">Loading...</p>
  </div>
</Card>

    </div>
  )
}
