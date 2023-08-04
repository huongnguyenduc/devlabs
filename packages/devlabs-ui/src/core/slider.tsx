import { Range, Root, Thumb, Track } from '@radix-ui/react-slider';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Slider
 * -------------------------------------------------------------------------- */

export const sliderVariants = cva([
  'relative flex touch-none select-none items-center',
  'data-orientation-horizontal:h-5 data-orientation-horizontal:w-full',
  'data-orientation-vertical:h-full data-orientation-vertical:w-5 data-orientation-vertical:flex-col',
  'data-disabled:opacity-50',
]);

export type SliderProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof sliderVariants>;

export const Slider = forwardRef<ElementRef<typeof Root>, SliderProps>(
  ({ className, ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(sliderVariants({ className }))}
      {...props}
    />
  ),
);

Slider.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: SliderTrack
 * -------------------------------------------------------------------------- */

export const sliderTrackVariants = cva([
  'bg-secondary relative grow rounded-full',
  'data-orientation-horizontal:h-0.75',
  'data-orientation-vertical:w-0.75',
]);

export type SliderTrackProps = ComponentPropsWithoutRef<typeof Track> &
  VariantProps<typeof sliderTrackVariants>;

export const SliderTrack = forwardRef<
  ElementRef<typeof Track>,
  SliderTrackProps
>(({ className, ...props }, forwardedRef) => (
  <Track
    ref={forwardedRef}
    className={twMerge(sliderTrackVariants({ className }))}
    {...props}
  />
));

SliderTrack.displayName = Track.displayName;

/* -----------------------------------------------------------------------------
 * Component: SliderRange
 * -------------------------------------------------------------------------- */

export const sliderRangeVariants = cva([
  'bg-primary absolute rounded-full',
  'data-disabled:bg-opacity-50',
  'data-orientation-horizontal:h-full data-orientation-vertical:w-full',
]);

export type SliderRangeProps = ComponentPropsWithoutRef<typeof Range> &
  VariantProps<typeof sliderRangeVariants>;

export const SliderRange = forwardRef<
  ElementRef<typeof Range>,
  SliderRangeProps
>(({ className, ...props }, forwardedRef) => (
  <Range
    ref={forwardedRef}
    className={twMerge(sliderRangeVariants({ className }))}
    {...props}
  />
));

SliderRange.displayName = Range.displayName;

/* -----------------------------------------------------------------------------
 * Component: SliderThumb
 * -------------------------------------------------------------------------- */

export const sliderThumbVariants = cva([
  'border-primary bg-background block h-5 w-5 rounded-full border-2 transition-colors',
  'focus-visible:ring-ring/40 focus-visible:outline-none focus-visible:ring-2',
]);

export type SliderThumbProps = ComponentPropsWithoutRef<typeof Thumb> &
  VariantProps<typeof sliderThumbVariants>;

export const SliderThumb = forwardRef<
  ElementRef<typeof Thumb>,
  SliderThumbProps
>(({ className, ...props }, forwardedRef) => (
  <Thumb
    ref={forwardedRef}
    className={twMerge(sliderThumbVariants({ className }))}
    {...props}
  />
));

SliderThumb.displayName = Thumb.displayName;
