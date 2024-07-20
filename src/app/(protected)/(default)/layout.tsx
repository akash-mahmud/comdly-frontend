import TransparentHeader from '@/components/header/transparent';
import Footer from '@/components/footer/footer';

export default function ProtectedDefaultLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <TransparentHeader />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
