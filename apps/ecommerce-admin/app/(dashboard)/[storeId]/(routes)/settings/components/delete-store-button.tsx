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
 * Component: DeleteStoreButton
 * ------------------------------------------------------------------------------------------------------------------ */

const deleteStoreButtonVariants = cva('');

type DeleteStoreButtonVariantProps = VariantProps<
  typeof deleteStoreButtonVariants
> & {
  storeId: string;
};

export type DeleteStoreButtonProps = DeleteStoreButtonVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof DeleteStoreButtonVariantProps>;

export const DeleteStoreButton: FC<DeleteStoreButtonProps> = ({
  storeId,
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
      await axios.delete(`/api/stores/${storeId}`);
      startTransition(() => {
        setOpen(false);
        router.refresh();
        router.push(page.home);
        toast({
          variant: 'success',
          title: 'Store deleted',
        });
      });
    } catch (error) {
      toast({
        title: 'Make sure you have no products or categories in your store',
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
      <div {...props} className={deleteStoreButtonVariants({ className })}>
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
