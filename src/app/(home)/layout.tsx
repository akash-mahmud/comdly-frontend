'use client'
import TransparentHeader from '@/components/header/transparent';
import MobileNav from '@/components/ui/mobile-nav';
import Footer from '@/components/footer/footer';
import { useAppSelector } from '@/store';

export default function HomeLayout({ children }: React.PropsWithChildren<{}>) {
  const {showTobar} = useAppSelector(state => state.topbap)
  return (
    <>
    {
      showTobar? <TransparentHeader />:null
    }
     
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileNav />
    </>
  );
}
