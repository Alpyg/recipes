import { Card } from "./card"

export const Video = ({ src }: { src: string }) => {
  return (
    <Card>
      <iframe
        className=""
        src={src}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </Card>
  );
};
