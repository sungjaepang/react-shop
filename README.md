# React Shop

React 기반 쇼핑몰 포트폴리오입니다.  
API 기반 상품 조회, 상세 페이지, 장바구니, 찜하기, 최근 본 상품, 검색/필터/정렬, 다크모드를 구현했습니다.

## Tech Stack

- React
- Vite
- React Router
- Axios
- TanStack Query
- Zustand
- Zustand Persist
- React Hot Toast
- CSS

## Main Features

### Product

- Fake Store API 기반 상품 목록 조회
- 상품 상세 페이지
- 카테고리 필터
- 상품 검색
- 가격순 / 이름순 정렬
- Skeleton Loading UI
- Error UI

### Cart

- 장바구니 추가
- 수량 증가 / 감소
- 상품 삭제
- 장바구니 비우기
- localStorage 저장

### Wishlist

- 찜하기 추가 / 삭제
- localStorage 저장

### Recently Viewed

- 최근 본 상품 저장
- 중복 상품 제거
- 최대 6개까지 표시

### UI / UX

- 반응형 레이아웃
- Toast 알림
- Sticky Header
- Dark Mode
- Hover Interaction

## Folder Structure

```text
src/
├── api/
├── assets/
├── components/
├── constants/
├── data/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── store/
├── styles/
└── utils/



What I Focused On

이 프로젝트는 단순한 정적 쇼핑몰이 아니라, 실제 프론트엔드 실무에서 자주 사용하는 구조를 학습하고 적용하는 데 집중했습니다.
특히 다음 부분에 초점을 두었습니다.
- API 기반 데이터 처리
- 서버 상태와 클라이언트 상태 분리
- Zustand를 활용한 전역 상태 관리
- localStorage persist 처리
- 로딩 / 에러 / 빈 상태 UI 처리
- 컴포넌트 분리
- 유지보수 가능한 폴더 구조
- 사용자 경험 중심의 UI 개선

What I Learned
- React Router를 활용한 페이지 라우팅
- TanStack Query를 활용한 서버 상태 관리
- Zustand를 활용한 전역 상태 관리
- persist middleware를 활용한 localStorage 저장
- 검색 / 필터 / 정렬 로직 구현
- Skeleton Loading UI 구현
- Toast 알림 처리
- 다크모드 상태 관리

Future Improvements
- TypeScript 전환
- 로그인 Mock 기능
- 주문 / 결제 Mock 페이지
- Admin Dashboard 제작
- Firebase 또는 Supabase 연동



