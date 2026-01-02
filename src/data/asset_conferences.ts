import { JournalPaper } from '../types';
import { ASSETS } from './assets';
import { assetPath } from '../utils/assetPath';

// Conferences data for the Community page
type ConferenceEntry = Omit<JournalPaper, 'image'> & { image?: string };

const CONFERENCE_ENTRIES: ConferenceEntry[] = [
  {
    title: "AI-Driven Microstructure Prediction for Next-Gen Superalloys",
    doi: "https://doi.org/10.1016/j.jmrt.2025.01.094",
    image: undefined, // Use default gallery image
    journal: "TMS 2025 Annual Meeting", 
    date: "2025.03.15"
  },
  {
    title: "In-situ Synchrotron Analysis of Metastable Alloys",
    doi: "https://doi.org/10.1016/j.actamat.2025.120757",
    image: undefined, // Use default gallery image
    journal: "Materials Science & Technology (MS&T) 2024", 
    date: "2024.10.20"
  },
];

const buildImage = (image?: string) =>
  image ? assetPath(image) : ASSETS.GALLERY.TMS_CONF;

export const conferenceData: JournalPaper[] = CONFERENCE_ENTRIES.map((entry) => ({
  ...entry,
  image: buildImage(entry.image),
}));
