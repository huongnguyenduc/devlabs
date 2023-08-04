import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';
import { cva, VariantProps } from 'class-variance-authority';
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  FC,
  forwardRef,
  useContext,
} from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Provider: TabsContext
 * -------------------------------------------------------------------------- */

export type TabsContextValue = Pick<TabsProps, 'variant'>;

export const TabsContext = createContext<TabsContextValue>(
  {} as TabsContextValue,
);

/* -----------------------------------------------------------------------------
 * Component: Tabs
 * -------------------------------------------------------------------------- */

export type TabsProps = ComponentProps<typeof Root> & {
  variant?: 'default' | 'simple';
};

export const Tabs: FC<TabsProps> = ({ variant = 'default', ...props }) => (
  <TabsContext.Provider value={{ variant }}>
    <Root {...props} />
  </TabsContext.Provider>
);

/* -----------------------------------------------------------------------------
 * Component: TabsList
 * -------------------------------------------------------------------------- */

export const tabsListVariants = cva([''], {
  variants: {
    variant: {
      default:
        'bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-lg p-1',
      simple: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type TabsListProps = ComponentPropsWithoutRef<typeof List> &
  Omit<VariantProps<typeof tabsListVariants>, 'variant'>;

export const TabsList = forwardRef<ElementRef<typeof List>, TabsListProps>(
  ({ className, ...props }, forwardedRef) => {
    const { variant } = useContext(TabsContext);

    return (
      <List
        ref={forwardedRef}
        className={twMerge(tabsListVariants({ className, variant }))}
        {...props}
      />
    );
  },
);

TabsList.displayName = List.displayName;

/* -----------------------------------------------------------------------------
 * Component: TabsTrigger
 * -------------------------------------------------------------------------- */

export const tabsTriggerVariants = cva(
  [
    'transition-all',
    'focus-visible:ring-ring/40 focus-visible:outline-none focus-visible:ring-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium',
          'data-state-active:bg-background data-state-active:text-foreground data-state-active:shadow-lg',
        ],
        simple: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type TabsTriggerProps = ComponentPropsWithoutRef<typeof Trigger> &
  Omit<VariantProps<typeof tabsTriggerVariants>, 'variant'>;

export const TabsTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  TabsTriggerProps
>(({ className, ...props }, forwardedRef) => {
  const { variant } = useContext(TabsContext);

  return (
    <Trigger
      ref={forwardedRef}
      className={twMerge(tabsTriggerVariants({ className, variant }))}
      {...props}
    />
  );
});

TabsTrigger.displayName = Trigger.displayName;

/* -----------------------------------------------------------------------------
 * Component: TabsContent
 * -------------------------------------------------------------------------- */

export const tabsContentVariants = cva(
  [
    'focus-visible:ring-ring/40 focus-visible:outline-none focus-visible:ring-2',
  ],
  {
    variants: {
      variant: {
        default: 'mt-2 rounded-lg',
        simple: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type TabsContentProps = ComponentPropsWithoutRef<typeof Content> &
  Omit<VariantProps<typeof tabsContentVariants>, 'variant'>;

export const TabsContent = forwardRef<
  ElementRef<typeof Content>,
  TabsContentProps
>(({ className, ...props }, forwardedRef) => {
  const { variant } = useContext(TabsContext);

  return (
    <Content
      ref={forwardedRef}
      className={twMerge(tabsContentVariants({ className, variant }))}
      {...props}
    />
  );
});

TabsContent.displayName = Content.displayName;
