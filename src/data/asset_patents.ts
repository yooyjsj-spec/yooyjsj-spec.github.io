import { JournalPaper } from '../types';
import { ASSETS } from './assets';
import { assetPath } from '../utils/assetPath';

// Patents section data
// Reusing JournalPaper type to maintain the exact same layout as Journals.

type PatentEntry = Omit<JournalPaper, 'image'> & { image?: string };

const PATENT_ENTRIES: PatentEntry[] = [
  {
    title: "Simple and scalable manufacturing of metal/carbon hybrid EMI shielding fabric across a broad frequency range",
    doi: "https://doi.org/10.1016/j.jmrt.2025.01.094",
    image: "/images/journals/journal001.png",
    journal: "JMR&T", 
    date: "2024.03.01"
  },
  {
    title: "Complex deformation behavior of a partially recrystallized metastable medium-entropy alloy: In-situ synchrotron X-ray diffraction study",
    doi: "https://doi.org/10.1016/j.actamat.2025.120757",
    image: "/images/journals/journal002.png",
    journal: "Acta", 
    date: "2025.03.01."
  },
  {
    title: "Multi-scale design of deformation mechanisms at hetero-zone boundaries: Dual HDI strengthening driven by TRIP effect",
    doi: "https://doi.org/10.1016/j.jmst.2025.01.032",
    image: "/images/journals/journal003.png",
    journal: "JMST", 
    date: "2025.03.08."
  }
];

const buildImage = (image?: string) =>
  image ? assetPath(image) : ASSETS.JOURNALS.DEFAULT_COVER;

export const patentData: JournalPaper[] = PATENT_ENTRIES.map((entry) => ({
  ...entry,
  image: buildImage(entry.image),
}));
