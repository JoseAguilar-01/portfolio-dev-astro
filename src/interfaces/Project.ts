import type { Props as Tag } from "./Tag";

export interface Props {
  title: string;
  image: Image;
  description: string;
  codeLink: string;
  link: string;
  tags?: Tag[];
}

export interface Image {
  src: ImageMetadata;
  alt: string;
}
