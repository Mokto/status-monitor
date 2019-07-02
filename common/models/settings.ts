export interface Settings {
  slack?: {
    channel: string;
    webhookUrl: string;
  };
  aws?: {
    accessKey: string;
    secretKey: string;
    lambdaVersionInstalled?: string;
    zones?: string[];
  };
}
