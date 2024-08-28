export interface Site {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  siteUrl: string;
  creator: {
    name: string;
    url: string;
  };
  links: {
    github: string;
  };
}
