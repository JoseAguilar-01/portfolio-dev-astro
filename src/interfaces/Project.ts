export interface Props {
  title: string;
  image: Image;
  description: string;
  codeLink: string;
  link: string;
}

export interface Image {
  src: ImageMetadata;
  alt: string;
}
