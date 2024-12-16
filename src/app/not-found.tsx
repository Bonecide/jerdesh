import LottieError from "@/components/LottieError/LottieError";
import RootLayout from "./[locale]/layout";
import { routing } from "@/i18n/routing";

const NotFoundPage = () => {
  return (
    <RootLayout
      params={{
        locale: routing.defaultLocale,
      }}
    >
      <LottieError />
    </RootLayout>
  );
};
export default NotFoundPage;
