# Desk Portfolio

책상 위 문서를 콘셉트로 만든 개인 포트폴리오 웹사이트입니다.

- 배포 주소: [배포 주소 입력]
- 개발 기간: 2026.08 ~ 2026.11
- 개발 인원: 1명

## 기술 스택

React 19, Vite, JavaScript, CSS

## 주요 기능

- 경력, 기술, 프로젝트를 카드와 문서 형태로 표현
- 책장을 넘기는 형태의 기술 소개
- 카드 뒤집기와 프로젝트 상세 모달
- ESC 키와 바깥 영역 클릭으로 모달 닫기

## 구현 포인트

- 외부 UI·애니메이션 라이브러리 없이 React와 CSS로 인터랙션 구현
- CSS `perspective`, `rotateY`로 3D 효과 구현
- 프로젝트 내용을 `projectDetails.js`로 분리해 화면 코드와 데이터 관리 구분
- Button, Card, Modal을 공통 컴포넌트로 분리

## 실행 방법

```bash
npm install
npm run dev
```
