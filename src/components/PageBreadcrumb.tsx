import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import { cn } from '@/lib/utils';
//макс соси хуй в рот тобі кінчав
type Route = {
  page: string;
  link: string;
};

type PageBreadcrumbProps = {
  routes: Route[];
};

export default function BreadcrumbBasic({ routes }: PageBreadcrumbProps) {
  const lastRoute = routes[routes.length - 1];

  return (
    <>
      <div className="px-6 py-4">
        <div className="text-xl font-bold mb-1">{lastRoute.page}</div>   
        <Breadcrumb className="font-semibold font-sans">
          <BreadcrumbList className="flex items-center gap-1 sm:gap-1"> 
            {routes.map((route, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem className={cn("flex items-center", {})}>
                  <BreadcrumbLink href={route.link}>
                    {route.page}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {lastRoute !== route && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  );
}