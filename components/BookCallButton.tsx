"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function BookCallButton({
  calLink,
  label,
  className,
}: {
  calLink: string;
  label: string;
  className: string;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: calLink });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [calLink]);

  return (
    <button
      type="button"
      data-cal-namespace={calLink}
      data-cal-link={`lucaslongacre/${calLink}`}
      data-cal-config={JSON.stringify({ layout: "month_view" })}
      className={className}
    >
      {label}
    </button>
  );
}
