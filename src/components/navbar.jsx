import text from "@/i18n/i18n";
import { useRouter } from "next/router";
import LocaleSwitcher from "./locale";
import DarkButton from "./dark";

export default function Navbar({ isDark, setDarkMode }) {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{text[locale].name}</a>
      </div>
      <div className="flex-none">
        <LocaleSwitcher />
        <DarkButton isDark={isDark} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}
