import React from 'react';
import { cn } from '@/lib/utils';

const Skeleton: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => {
  if (children) {
    return (
      <div
        className={cn(
          "animate-pulse rounded-md bg-muted",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted",
        className
      )}
    />
  );
};

export const ProductSkeleton: React.FC = () => {
  return (
    <div className="p-2 h-full">
      <div className="h-full rounded-3xl overflow-hidden shadow-lg border-0 bg-white/80 backdrop-blur-sm">
        <div className="p-0 h-full flex flex-col">
          {/* Skeleton Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="w-16 h-8 bg-amber-200 rounded-full"></div>
          </div>

          {/* Skeleton Image */}
          <div className="w-full h-64 bg-amber-100 relative overflow-hidden"></div>

          {/* Skeleton Content */}
          <div className="p-6 flex-1 flex flex-col space-y-4">
            <div className="h-6 bg-amber-200 rounded w-3/4 mx-auto"></div>
            <div className="w-12 h-1 bg-amber-300 rounded-full mx-auto"></div>
            <div className="space-y-2">
              <div className="h-4 bg-amber-200 rounded"></div>
              <div className="h-4 bg-amber-200 rounded w-5/6"></div>
            </div>
            <div className="flex justify-center gap-2">
              <div className="w-16 h-6 bg-amber-200 rounded-full"></div>
              <div className="w-20 h-6 bg-amber-200 rounded-full"></div>
            </div>
            <div className="h-12 bg-amber-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;