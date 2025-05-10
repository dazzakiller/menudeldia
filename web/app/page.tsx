import Image from "next/image";
import styles from "./page.module.css";
import { useTranslation } from "../lib/i18n";
import { useRouter } from "next/navigation";

export default function Page() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.refresh();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">{t('hello')}</h1>
      <p className="text-lg text-gray-700">Edit <code>app/page.tsx</code> to get started.</p>
      <div className="mt-4 flex gap-2">
        <button onClick={() => changeLanguage('en')} className="px-3 py-1 bg-blue-500 text-white rounded">EN</button>
        <button onClick={() => changeLanguage('es')} className="px-3 py-1 bg-purple-500 text-white rounded">ES</button>
      </div>
    </main>
  );
}
