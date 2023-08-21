'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { Button } from '@devlabs/ui/src/core/button';
import { ImagePlus, TrashIcon } from 'lucide-react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: ImageUpload
 * ------------------------------------------------------------------------------------------------------------------ */

const imageUploadVariants = cva('');

type ImageUploadVariantProps = VariantProps<typeof imageUploadVariants> & {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
};

export type ImageUploadProps = ImageUploadVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ImageUploadVariantProps>;

export const ImageUpload: FC<ImageUploadProps> = ({
  className,
  disabled,
  onChange,
  onRemove,
  value,
  ...props
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div {...props} className={imageUploadVariants({ className })}>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative h-[200px] w-[200px] overflow-hidden rounded-md"
          >
            <div className="absolute right-2 top-2 z-10">
              <Button
                startIcon={TrashIcon}
                type="button"
                variant="destructive"
                onClick={() => onRemove(url)}
              />
            </div>
            <Image fill alt={url} className="object-cover" src={url} />
          </div>
        ))}
      </div>
      <CldUploadWidget uploadPreset="e-commerce" onUpload={onUpload}>
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              disabled={disabled}
              type="button"
              variant="secondary"
              onClick={onClick}
            >
              <ImagePlus className="mr-2 h-4 w-4" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
