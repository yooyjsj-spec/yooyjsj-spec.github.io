
// 리서치 관련 사진 5장 관리
// public/images/research 폴더에 파일을 넣어주세요.
import { assetPath } from '../utils/assetPath';

export const RESEARCH_ASSETS = {
  // 1. 미세조직 분석 (Microstructure)
  // 위치: public/images/research/research_image01.png
  MICRO: assetPath('images/research/research_image01.png'),

  // 2. 항공우주 및 국방 (Aerospace & Defense)
  // 위치: public/images/research/research_image02.png
  AERO: assetPath('images/research/research_image02.png'),

  // 3. 적층 제조/3D 프린팅 (Additive Manufacturing)
  // 위치: public/images/research/research_image03.png
  PRINT: assetPath('images/research/research_image03.png'),

  // 4. AI 소재 분석 (AI Analysis)
  // 위치: public/images/research/research_image04.png
  AI: assetPath('images/research/research_image04.png'),
  
  // 5. (예비) 추가 리서치 이미지
  // 위치: public/images/research/extra.jpg
  EXTRA: "https://images.unsplash.com/photo-1581093458791-9f302e6d38e4?q=80&w=2070&auto=format&fit=crop"
};
