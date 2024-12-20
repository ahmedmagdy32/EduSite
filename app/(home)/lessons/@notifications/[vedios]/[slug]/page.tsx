import { notFound } from "next/navigation";
import VideoPage from "@/components/VideoPage";

// This is a mock function to simulate fetching video data
// In a real application, you would fetch this data from an API
async function getVideoData(slug: string) {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const videos = [
    {
      id: "1",
      slug: "never-gonna-give-you-up",
      title: "Never Gonna Give You Up - Rick Astley",
      views: "1,234,567,890",
      date: "Oct 25, 2009",
      channelName: "Rick Astley",
      subscribers: "1.2M",
      description:
        'Rick Astley\'s official music video for "Never Gonna Give You Up"...',
      videoUrl: "/intro.mp4",
    },
    {
      id: "2",
      slug: "despacito",
      title: "Luis Fonsi - Despacito ft. Daddy Yankee",
      views: "7,891,234,567",
      date: "Jan 12, 2017",
      channelName: "Luis Fonsi",
      subscribers: "22.7M",
      description: "Despacito official music video...",
      videoUrl: "/intro.mp4",
    },
    // Add more video objects as needed
  ];

  const video = videos.find((v) => v.slug === slug);
  if (!video) return null;

  return video;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const videoData = await getVideoData(params.slug);

  if (!videoData) {
    notFound();
  }

  return <VideoPage video={videoData} />;
}
