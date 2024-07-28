import { Fragment, ReactNode } from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { page } from '@/lib/constants/page';
import { prisma } from '@/lib/database/prisma';

export default async function SetupLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { userId } = auth();

  if (!userId) {
    redirect(page.auth.login);
  }

  const store = await prisma.store.findFirst({
    where: {
      userId,
    },
  });

  if (store) {
    redirect(page.store.overview(store.id));
  }

  return <Fragment>{children}</Fragment>;
}
