import axios from 'axios';
import { Website } from '@common/models/website';
import { Settings } from '@common/models/settings';

export const getWebsitesApi = async (): Promise<{ websites: Website[] }> => {
  const res = await axios.get('http://localhost:8080/websites');
  return res.data;
};

export const postWebsiteApi = async (website: Website): Promise<{ website: Website }> => {
  const res = await axios.post('http://localhost:8080/websites', {
    host: website.host,
    name: website.name,
    path: website.path,
    protocol: website.protocol,
  });
  return res.data;
};

export const deleteWebsiteApi = async (websiteId: string): Promise<void> => {
  const res = await axios.delete(`http://localhost:8080/websites?_id=${websiteId}`);
  return res.data;
};

export const putSettingsApi = async (settings: Partial<Settings>): Promise<void> => {
  const res = await axios.put('http://localhost:8080/settings', settings);
  return res.data;
};

export const getSettingsApi = async (): Promise<{ settings: Settings }> => {
  const res = await axios.get('http://localhost:8080/settings');
  return res.data;
};
