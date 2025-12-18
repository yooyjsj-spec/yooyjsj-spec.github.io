
import { JournalPaper } from '../types';
import { ASSETS } from './assets';
import { assetPath } from '../utils/assetPath';

// NOTE:
// - 이미지가 로컬에 없을 경우 자동으로 기본 커버(ASSETS.JOURNALS.DEFAULT_COVER)로 대체됩니다.
// - 경로는 "/images/..."처럼 루트 기준이어도 됩니다. GitHub Pages 서브 디렉토리 배포 시에도
//   assetPath에서 BASE_URL을 붙여서 안전하게 처리합니다.

type JournalEntry = Omit<JournalPaper, 'image'> & { image?: string };

const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    title: "Multi-scale design of deformation mechanisms at hetero-zone boundaries: Dual HDI strengthening driven by TRIP effect",
    doi: "https://doi.org/10.1016/j.jmst.2025.01.032",
    image: "/images/journals/journal128.png",
    journal: "Journal of Materials Science & Technology",
    date: "2025.03.08."
  },
  {
    title: "Simple and scalable manufacturing of metal/carbon hybrid EMI shielding fabric across a broad frequency range",
    doi: "https://doi.org/10.1016/j.jmrt.2025.01.094",
    image: "/images/journals/journal127.png",
    journal: "Journal of Materials Research and Technology",
    date: "2025.03.01."
  },
  {
    title: "Complex deformation behavior of a partially recrystallized metastable medium-entropy alloy: in-situ synchrotron X-ray diffraction study",
    doi: "https://doi.org/10.1016/j.actamat.2025.120757",
    image: "/images/journals/journal126.png",
    journal: "Acta Materialia",
    date: "2025.03.01."
  },
  {
    title: "Mechanical Properties and Microstructure of Laser Powder Bed Fusion-Processed 18Ni300 Maraging Steel According to Direct Aging Treatment Conditions",
    doi: "https://doi.org/10.1002/srin.202400348",
    image: "/images/journals/journal125.png",
    journal: "Steel Research International",
    date: "2024.09.24."
  },
  {
    title: "Serration-induced plasticity in phase transformative stainless steel 316L upon ultracold deformation at 4.2 K",
    doi: "https://doi.org/10.1016/j.msea.2024.147591",
    image: "/images/journals/journal124.png",
    journal: "Materials Science and Engineering: A",
    date: "2025.01.01."
  },
  {
    title: "Strengthening Effect of Fe60Mn16Ni12Cr12 Medium-Entropy Alloys via Co-Doping Al/C",
    doi: "https://doi.org/10.1007/s12540-024-01865-9",
    image: "/images/journals/journal123.png",
    journal: "Metals and Materials International",
    date: "2024.12.13."
  },
  {
    title: "Neural Network-Based Modeling of the Interplay between Composition, Service Temperature, and Thermal Conductivity in Steels for Engineering Applications",
    doi: "https://doi.org/10.1007/s10765-024-03434-z",
    image: "/images/journals/journal122.png",
    journal: "International Journal of Thermophysics",
    date: "2024.12.23."
  },
  {
    title: "Periodic spinodal decomposition in double–strengthened medium–entropy alloy",
    doi: "https://doi.org/10.1038/s41467-024-50078-6",
    image: "/images/journals/journal121.png",
    journal: "Nature Communications",
    date: "2024.07.09."
  },
  {
    title: "Enhanced high-temperature ductility without strength drop in a lean Co Ni-based superalloy",
    doi: "https://doi.org/10.1016/j.jallcom.2024.174407",
    image: "/images/journals/journal120.png",
    journal: "Journal of Alloys and Compounds",
    date: "2024.07.05."
  },
  {
    title: "Maraging and reversion-driven passivation engineering of Fe68Ni10Mn10Co10Ti1.5Si0.5 medium entropy alloy",
    doi: "https://doi.org/10.1016/j.jallcom.2024.173929",
    image: "/images/journals/journal119.png",
    journal: "Journal of Alloys and Compounds",
    date: "2024.05.15."
  },
  {
    title: "Microscopic-plastic deformation behavior of grain boundary precipitates in an Al–Zn–Mg alloy",
    doi: "https://doi.org/10.1016/j.jmrt.2024.04.044",
    image: "/images/journals/journal118.png",
    journal: "Journal of Materials Research and Technology",
    date: "2024.05.01."
  },
  {
    title: "Mechanical properties of lamellar-structured 18Ni300 maraging steel manufactured via directed energy deposition",
    doi: "https://doi.org/10.1016/j.msea.2023.146031",
    image: "/images/journals/journal117.png",
    journal: "Materials Science and Engineering A",
    date: "2024.02.01."
  },
  {
    title: "The influence of chemical short-range order on the nanoindentation properties of high-entropy alloys prepared via laser powder bed fusion",
    doi: "https://doi.org/10.1016/j.matchar.2023.113560",
    image: "/images/journals/journal116.png",
    journal: "Materials Characterization",
    date: "2024.01.01."
  },
  {
    title: "Effect of Heat Treatment Temperature on Microstructure, Tensile Properties and δ-Precipitate Phase in Ni-based Superalloy",
    doi: "http://dx.doi.org/10.3365/KJMM.2024.62.1.32",
    image: "/images/journals/journal115.png",
    journal: "Korean Journal of Metals and Materials",
    date: "2023.12.29."
  },
  {
    title: "Hetero-deformation induced strengthening, precipitation hardening, and metastability engineering in a novel maraging Fe68Ni10Mn10Co10Ti1.5Si0.5 medium entropy alloy",
    doi: "https://doi.org/10.1016/j.jallcom.2023.171870",
    image: "/images/journals/journal114.png",
    journal: "Journal of Alloys and Compounds",
    date: "2023.12.15."
  },
  {
    title: "Cellular structure engineering of additive manufactured CoCrFeMnNi high-entropy composite The role of hard ceramic reinforcements in elemental segregation of constitutive elements",
    doi: "https://doi.org/10.1016/j.addlet.2023.100172",
    image: "/images/journals/journal113.png",
    journal: "Additive Manufacturing Letters",
    date: "2023.12.01."
  },
  {
    title: "Microstructural evolution and tensile property enhancement of low-cost Fe-24Mn-22Ni-12Cr medium-entropy alloy by cryogenic caliber rolling",
    doi: "https://doi.org/10.1016/j.jallcom.2023.170709",
    image: "/images/journals/journal112.png",
    journal: "Journal of Alloys and Compounds",
    date: "2023.10.15."
  },
  {
    title: "A new transformation-induced plasticity-assisted dual-phase medium-entropy alloy with ultra-high cryogenic mechanical properties",
    doi: "https://doi.org/10.1016/j.scriptamat.2023.115617",
    image: "/images/journals/journal111.png",
    journal: "Scripta Materialia",
    date: "2023.10.01."
  },
  {
    title: "Chemical core-shell metastability-induced large ductility in medium-entropy maraging and reversion alloys",
    doi: "https://doi.org/10.1016/j.actamat.2023.119115",
    image: "/images/journals/journal110.png",
    journal: "Acta Materialia",
    date: "2023.09.01."
  },
  {
    title: "Genetic design of new aluminum alloys to overcome strength-ductility trade-off dilemma",
    doi: "https://doi.org/10.1016/j.jallcom.2023.169546",
    image: "/images/journals/journal109.png",
    journal: "Journal of Alloys and Compounds",
    date: "2023.06.25."
  }
];

const buildImage = (image?: string) =>
  image ? assetPath(image) : ASSETS.JOURNALS.DEFAULT_COVER;

export const journalData: JournalPaper[] = JOURNAL_ENTRIES.map((entry) => ({
  ...entry,
  image: buildImage(entry.image),
}));
