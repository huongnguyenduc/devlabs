import { FC } from 'react';
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogProps,
} from '@devlabs/ui/src/dialog';
import { usePreviewModal } from '@/hooks/use-preview-modal';
import { Gallery } from '@/components/gallery/gallery';
import { Info } from '@/components/info';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: PreviewModal
 * ------------------------------------------------------------------------------------------------------------------ */

export type PreviewModalProps = DialogProps;

export const PreviewModal: FC<PreviewModalProps> = ({ ...props }) => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <Dialog
      open={previewModal.isOpen}
      onOpenChange={previewModal.onClose}
      {...props}
    >
      <DialogContent size="3xl">
        <DialogBody>
          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 px-6 py-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="sm:col-span-4 lg:col-span-5">
              <Gallery images={product.images} />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <Info data={product} />
            </div>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};
