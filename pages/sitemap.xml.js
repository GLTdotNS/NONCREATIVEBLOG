const EXTERNAL_DATA_URL = "https://redheadporn.net/video";

function generateSiteMap(videos) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://redheadporn.net</loc>
     </url>
    
     ${videos
       .map((video) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${video.id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const response = await fetch(
    "https://www.eporner.com/api/v2/video/search/?query=all&per_page=3000000&thumbsize=big&order=top-weekly&=1&format=json"
  );
  const data = await response.json();
  const videos = data.videos;

  const sitemap = generateSiteMap(videos);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {
      videos,
    },
  };
}

export default SiteMap;
