import { useNavigate, useRouteError } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ErrorPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const error = useRouteError() as Error | any;
  console.error(error);

  return (
    <div id="error-page">
      <h1>{t("error.general.header")}</h1>
      <p>{t("error.general.body")}</p>
      <p>
        <i>{error?.statusText}</i>
      </p>
      <p>{error?.message}</p>
    </div>
  );
}
