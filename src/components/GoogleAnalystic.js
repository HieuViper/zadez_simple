"use client";

import initializeGA from "@/library/google-analytics";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
      window.GA_INITIALIZED = true;
    }
  }, []);
}

// import Script from "next/script";

// const GoogleAnalystic = ({ GA_TRACKING_ID }) => {
//   return (
//     <>
//       <Script
//         src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
//         strategy="worker"
//       />
//       <Script id="google-analytics" strategy="worker">
//         {`
//         window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());

//           gtag('config', '${GA_TRACKING_ID}');
//         `}
//       </Script>
//     </>
//   );
// };

// export default GoogleAnalystic;
