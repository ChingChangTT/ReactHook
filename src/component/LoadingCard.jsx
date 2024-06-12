import { Card } from "flowbite-react";

const LoadingCard = () => (
  <Card className="max-w-sm animate-pulse" imgAlt="Loading" imgSrc="https://via.placeholder.com/150">
    <a href="#">
      <div className="h-5 bg-gray-200 rounded w-3/4"></div>
    </a>
    <div className="mb-5 mt-2.5 flex items-center space-x-2">
      <div className="h-5 w-5 bg-gray-200 rounded"></div>
      <div className="h-5 w-5 bg-gray-200 rounded"></div>
      <div className="h-5 w-5 bg-gray-200 rounded"></div>
      <div className="h-5 w-5 bg-gray-200 rounded"></div>
      <div className="h-5 w-5 bg-gray-200 rounded"></div>
      <span className="ml-3 mr-2 rounded bg-gray-200 px-2.5 py-0.5 text-xs font-semibold">
        ...
      </span>
    </div>
    <div className="flex items-center justify-between">
      <div className="h-8 w-16 bg-gray-200 rounded"></div>
      <div className="h-10 w-24 bg-gray-200 rounded"></div>
    </div>
  </Card>
);

export default LoadingCard;
