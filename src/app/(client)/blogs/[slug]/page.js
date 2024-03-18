import DetailBlogPage from "../_components/DetailBlogPage";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = params;
  const id = slug.split("-")[slug.split("-").length - 1];

  // fetch data
  const article = await fetch(
    `${process.env.BASE_URL}/api/articles/${id}`,{cache: 'no-store'}
  ).then((res) => res.json());
  console.log("🚀 ~ generateMetadata ~ article:", article);

  return {
    title: article.title,
    description: article.short,
    keywords: article.keywords,
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
  return <DetailBlogPage params={params} />;
};

export default Aticle;
