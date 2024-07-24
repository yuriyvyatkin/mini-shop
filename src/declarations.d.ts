declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  import { SVGProps } from 'react';
  const content: React.FC<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}
