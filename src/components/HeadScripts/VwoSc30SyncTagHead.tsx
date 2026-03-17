import React from "react";
import { START_TIME_SNIPPET, VWO_BASE } from "./constants";

interface Props {
  accountId: string;
}

export function VwoSc30SyncTagHead({ accountId }: Props) {
  return (
    <>
      <script
        id="vwo-sc30-start-time"
        dangerouslySetInnerHTML={{ __html: START_TIME_SNIPPET }}
      />
      <script
        id="vwo-sc30Code"
        referrerPolicy="no-referrer-when-downgrade"
        src={`${VWO_BASE}/tag/${accountId}.js`}
      />
    </>
  );
}
