import { Card } from "./card";

export const Video = ({ src }: { src: string }) => {
  return (
    <Card>
      <iframe
        className="w-full max-w-lg aspect-video mx-auto"
        src={src}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </Card>
  );
};
