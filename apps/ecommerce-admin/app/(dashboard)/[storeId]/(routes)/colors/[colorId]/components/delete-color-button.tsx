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
 * Component: DeleteColorButton
 * ------------------------------------------------------------------------------------------------------------------ */

const deleteColorButtonVariants = cva('');

type DeleteColorButtonVariantProps = VariantProps<
  typeof deleteColorButtonVariants
> & {
  storeId: string;
  colorId: string;
};

export type DeleteColorButtonProps = DeleteColorButtonVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof DeleteColorButtonVariantProps>;

export const DeleteColorButton: FC<DeleteColorButtonProps> = ({
  storeId,
  colorId,
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
      await axios.delete(`/api/${storeId}/colors/${colorId}`);
      startTransition(() => {
        router.refresh();
        router.push(page.store.colors(storeId));
        toast({
          variant: 'success',
          title: 'Color deleted',
        });
      });
    } catch (error) {
      toast({
        title: 'Make sure you removed all categories from this color first.',
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
      <div {...props} className={deleteColorButtonVariants({ className })}>
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
