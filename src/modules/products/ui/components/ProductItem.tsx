import { MoreHorizontal, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

interface ProductItemProps {
  image?: string;
  title?: string;
  category?: string;
  price?: number;
  summary?: string;
  sales?: number;
  remaining?: number;
  totalStock?: number;
}

export function ProductItem({
  image,
  title,
  category,
  price,
  summary,
  sales,
  remaining,
  totalStock,
}: ProductItemProps) {
  const currentRemaining = remaining || 0;
  const currentTotal = totalStock || 0;
  const progressPercentage =
    currentTotal > 0
      ? Math.min((currentRemaining / currentTotal) * 100, 100)
      : 0;

  return (
    <Card className="w-full max-w-sm bg-neutral-50 border-none shadow-none rounded-2xl p-4 gap-1">
      <div className="flex gap-4 mb-0">
        <div className="h-20 w-20 shrink-0 bg-white rounded-lg overflow-hidden flex items-center justify-center border border-gray-100">
          {image ? (
            <img
              src={image}
              alt={title || 'Product'}
              className="w-full h-full object-contain p-1"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>
        <div className="flex flex-col grow justify-between py-0.5">
          <div className="flex justify-between items-start">
            <div className="space-y-0.5">
              <h3 className="font-semibold text-base text-black">
                {title || 'Unknown Product'}
              </h3>
              <p className="font-semibold text-sm text-black/60">
                {category || 'Uncategorized'}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 -mr-2 -mt-1 text-black/50 hover:bg-black/5"
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
          <div className="font-semibold text-sm text-black">
            ${price?.toFixed(2) || '0.00'}
          </div>
        </div>
      </div>
      <CardContent className="p-0 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-base text-black">Summary</h4>
          <p className="text-sm text-black/60">
            {summary || 'No description available.'}
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4 border border-black/10 rounded-lg bg-white/50">
          <div className="flex justify-between items-center h-5">
            <span className="font-semibold text-sm text-black/80">Sales</span>
            <div className="flex items-center gap-2">
              <ArrowUp className="h-4 w-4 text-orange-400" />
              <span className="font-semibold text-sm text-black/60">
                {sales || 0}
              </span>
            </div>
          </div>
          <div className="h-px w-full bg-black/10 my-1" />
          <div className="flex justify-between items-center h-5">
            <span className="font-semibold text-sm text-black/80">
              Remaining Products
            </span>
            <div className="flex items-center gap-2">
              <Progress
                value={progressPercentage}
                className="h-1 w-14 bg-gray-200 *:bg-orange-400"
              />
              <span className="font-semibold text-sm text-black/60">
                {currentRemaining}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
