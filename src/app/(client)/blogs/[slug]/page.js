import { toSlug } from "@/library/util";
import DetailBlogPage from "../_components/DetailBlogPage";
import Script from "next/script";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = params;
  const id = slug.split("-")[slug.split("-").length - 1];

  // fetch data
  const article = await fetch(`${process.env.BASE_URL}/api/articles/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());
  console.log("🚀 ~ generateMetadata ~ article:", article);

  return {
    title: article.title,
    description: article.short,
    keywords: article.keywords,
    alternates: {
      canonical: `${process.env.BASE_URL}/bai-viet/${toSlug(
        article.title + " " + article.id
      )}`,
    },
    openGraph: {
      title: article.title,
      description: article.short,
      url: global?.window && window.location.href,
      siteName: "Zadez VietNam",
      images: [
        {
          url: `${process.env.BASE_URL}${article.mainImageURL}`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
      locale: "vi",
      type: "website",
    },
  };
}

const Aticle = ({ params }) => {
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
      <DetailBlogPage params={params} />;
    </>
  );
};

export default Aticle;
