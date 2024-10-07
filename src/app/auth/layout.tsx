'use client';
import { ILayoutProps } from '@/types/global.type';
import '@/styles/auth/auth.css';
import LoadingLine from '@/components/loading/LoadingLine';
import { useAppSelector } from '@/redux/hooks';


function AuthLayout({ children }: ILayoutProps) {
  const isLoadingLineOpen = useAppSelector(
    (state) => state.toggle.isLoadingLineOpen,
  );

  
 
  return (
    <div className=" h-screen overflow-hidden lg:grid grid-cols-2">
     
        <div className="p-5 md:p-10 lg:p-20">
        {children}
        {/* This is loading components */}
        {/* it can close and open by  (toggleLoadingLineComponent)  dynamic redux action */}
        {isLoadingLineOpen && <LoadingLine />}
    
      </div>
      <div className=" hidden lg:block">
        <img className="w-full h-screen" src="/images/auth-bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default AuthLayout;
