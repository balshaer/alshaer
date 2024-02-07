import { useTranslation } from "react-i18next";

import { DrawerDialogDemo } from "./DrawerDialogDemo";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className={`Contact }`}>
      <p className="text-[var(--headline)]">{t("Contact.Note")} </p>

      <DrawerDialogDemo />
    </div>
  );
}
