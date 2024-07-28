import { auth } from '@clerk/nextjs/server';
import { page } from '@/lib/constants/page';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/database/prisma';
import { SettingsForm } from './components/settings-form';
import { Heading } from '@/components/ui/heading/heading';
import { DeleteStoreButton } from '@/app/(dashboard)/[storeId]/(routes)/settings/components/delete-store-button';
import { ApiList } from '@/app/(dashboard)/[storeId]/(routes)/settings/components/api-list';

export default async function SettingsPage({
  params,
}: {
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect(page.auth.login);
  }

  const store = await prisma.store.findFirst({
    where: {
      userId,
      id: params.storeId,
    },
  });

  if (!store) {
    redirect(page.home);
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <Heading subtitle="Manage your settings" title="Settings" />
          <DeleteStoreButton storeId={params.storeId} />
        </div>

        <SettingsForm initialData={store} />

        <ApiList />
      </div>
    </div>
  );
}
