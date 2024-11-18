import NextTopLoader from "nextjs-toploader";
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <NextTopLoader showSpinner={false} height={4} color="#FF7E36" />
    </>
  );
};
