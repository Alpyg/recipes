export const Video = ({ src }: { src: string }) => {
  return (
    <iframe
      className="w-full"
      src={src}
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
};
