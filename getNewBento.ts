const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Sulagna%20Ghosh&g=Sulagnaghosh363&x=&l=sulagna-ghosh-874814290&i=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F144541581%3Fv%3D4&p=https%3A%2F%2Fsulagnaghosh.netlify.app%2F&z=0aa6f";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
