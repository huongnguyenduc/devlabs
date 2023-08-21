'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@devlabs/ui/src/core/tabs';
import { Image as ImageType } from '@/lib/types';
import Image from 'next/image';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Gallery
 * ------------------------------------------------------------------------------------------------------------------ */

const GalleryVariants = cva('');

type GalleryVariantProps = VariantProps<typeof GalleryVariants> & {
  images: ImageType[];
};

export type GalleryProps = GalleryVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof GalleryVariantProps>;

export const Gallery: FC<GalleryProps> = ({ className, images, ...props }) => (
  <div {...props} className={GalleryVariants({ className })}>
    <Tabs defaultValue={images[0].id}>
      {images.map((image) => (
        <TabsContent
          key={image.id}
          className="aspect-square w-full"
          value={image.id}
        >
          <div className="relative aspect-square h-full w-full overflow-hidden sm:rounded-lg">
            <Image
              fill
              alt="Image"
              className="object-cover object-center"
              src={image.url}
            />
          </div>
        </TabsContent>
      ))}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabsList className="grid h-full grid-cols-4 gap-6 bg-white">
          {images.map((image) => (
            <TabsTrigger
              key={image.id}
              className="data-state-active:ring relative aspect-square rounded-md ring-neutral-600 ring-offset-2"
              value={image.id}
            >
              <Image
                fill
                alt="Image"
                className="rounded-md object-cover object-center"
                src={image.url}
              />
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </Tabs>
  </div>
);
