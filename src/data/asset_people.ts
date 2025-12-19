
// 구성원 사진 관리
// public 폴더에 파일을 넣어주세요.
import { assetPath } from '../utils/assetPath';

export const PEOPLE_ASSETS = {
  // 교수님 프로필 사진
  // 위치: public/professor.jpg
  PROFESSOR: assetPath('professor.jpg'),

  // 학생 기본 이미지 (사진이 없을 경우 사용)
  // 위치: public/images/people/default.jpg
  STUDENT_PLACEHOLDER: "https://ui-avatars.com/api/?background=f1f5f9&color=64748b&bold=true"
};
