'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, Fragment, HTMLAttributes, useState, useTransition } from 'react';
import { Trash } from 'lucide-react';
import { Button } from '@devlabs/ui/src/core/button';
import axios from 'axios';
import { page } from '@/lib/constants/page';
import { toast } from '@devlabs/ui/src/use-toast';
import { useRouter } from 'next/navigation';
import { AlertModal } from '@/components/ui/modal/alert-modal';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: DeleteCategoryButton
 * ------------------------------------------------------------------------------------------------------------------ */

const deleteCategoryButtonVariants = cva('');

type DeleteCategoryButtonVariantProps = VariantProps<
  typeof deleteCategoryButtonVariants
> & {
  storeId: string;
  categoryId: string;
};

export type DeleteCategoryButtonProps = DeleteCategoryButtonVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof DeleteCategoryButtonVariantProps>;

export const DeleteCategoryButton: FC<DeleteCategoryButtonProps> = ({
  storeId,
  categoryId,
  className,
  ...props
}) => {
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${storeId}/categories/${categoryId}`);
      startTransition(() => {
        router.refresh();
        router.push(page.store.categories(storeId));
        toast({
          variant: 'success',
          title: 'Category deleted',
        });
      });
    } catch (error) {
      toast({
        title: 'Make sure you removed all categories from this category first.',
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <AlertModal
        disabled={loading || isPending}
        loading={loading || isPending}
        open={open}
        onConfirm={onDelete}
        onOpenChange={setOpen}
      />
      <div {...props} className={deleteCategoryButtonVariants({ className })}>
        <Button
          loading={isPending || loading}
          variant="destructive"
          onClick={() => setOpen(true)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </Fragment>
  );
};
