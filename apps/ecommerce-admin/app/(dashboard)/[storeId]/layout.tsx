import { auth } from '@clerk/nextjs';
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { page } from '@/lib/constants/page';
import { prisma } from '@/lib/database/prisma';
import { Navbar } from '@/app/(dashboard)/[storeId]/components/navbar';

export default async function DashboardLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: {
    storeId: string;
  };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect(page.auth.login);
  }

  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect(page.home);
  }

  const stores = await prisma.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <>
      <Navbar items={stores} />
      {children}
    </>
  );
}
