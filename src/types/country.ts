export type country = {
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
  region: string;
  population: number;
  capital?: string[];
  languages?: Record<string, string>;
  currencies?: Record<string, {
    name: string;
    symbol: string;
  }>;
  borders?: string[];
  timezones: string[];
  idd: {
    root?: string;
    suffixes?: string[];
  };
};