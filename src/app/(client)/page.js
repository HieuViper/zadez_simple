import dynamic from "next/dynamic";
import Script from "next/script";

const Content = dynamic(() => import("./_components/DynamicContent"), {
  loading: () => <div id="content" className="h-[600px]"></div>,
});

export default async function Home() {
  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Organization",
                "url": "https://zadez.vn",
                "logo": "https://zadez.vn/Logo-ZADEZ.webp"
              }
            `,
        }}
      />
      <Content />
    </>
  );
}
