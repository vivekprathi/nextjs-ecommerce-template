import React from "react";
import { START_TIME_SNIPPET, VWO_BASE } from "./constants";

interface Props {
  accountId: string;
}

export function VwoSc30SyncTagHead({ accountId }: Props) {
  return (
    <>
      <script
        id="vwoCode"
        referrerPolicy="no-referrer-when-downgrade"
        src={`${VWO_BASE}/tag/${accountId}.js`}
      />
    </>
  );
}
