'use client';

import { BillboardColumn } from './columns';
import { FC, useState, useTransition } from 'react';
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@devlabs/ui/src/core/dropdown-menu';
import { Button } from '@devlabs/ui/src/core/button';
import { Copy, Edit, MoreHorizontal, Trash } from 'lucide-react';
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from '@devlabs/ui/src/dropdown-menu';
import { toast } from '@devlabs/ui/src/use-toast';
import { useParams, useRouter } from 'next/navigation';
import { page } from '@/lib/constants/page';
import axios from 'axios';
import { AlertModal } from '@/components/ui/modal/alert-modal';

interface CellActionProps {
  data: BillboardColumn;
}

export const CellAction: FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  const onCopy = async () => {
    await navigator.clipboard.writeText(data.id);
    toast({
      title: 'Copied to clipboard',
      variant: 'success',
      description: 'Billboard Id copied to clipboard',
    });
  };
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/billboards/${data.id}`);
      startTransition(() => {
        router.refresh();
        toast({
          variant: 'success',
          title: 'Billboard deleted',
        });
        setOpen(false);
      });
    } catch (error) {
      toast({
        title:
          'Make sure you removed all categories from this billboard first.',
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DropdownMenu>
      <AlertModal
        disabled={loading || isPending}
        loading={loading}
        open={open}
        onConfirm={onDelete}
        onOpenChange={setOpen}
      />
      <DropdownMenuTrigger asChild>
        <Button startIcon={MoreHorizontal} variant="ghost">
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={onCopy}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            router.push(
              page.store.billboards(params.storeId as string, `/${data.id}`),
            )
          }
        >
          <Edit className="mr-2 h-4 w-4" />
          Update
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={isPending || loading}
          onClick={() => setOpen(true)}
        >
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
