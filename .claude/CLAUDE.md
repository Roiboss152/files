# kt-synergy.com 작업 규칙

이 저장소는 kt-synergy.com(GitHub Pages 정적 호스팅)이다. 서버 사이드 코드는 쓸 수 없다.
공개 저장소이므로 토큰·비밀번호·개인 연락처는 물론, 워커 주소·승인 방식 같은 보안 설계도 새로 쓰지 않는다.
`app-`로 시작하는 비공개 앱 본문은 이 저장소에 올리지 않는다.
답변은 한국어로 한다.

## 고치기 전에
- 저장소에 있는 현재 파일을 기준으로 고친다. 기억이나 추측으로 새로 쓰지 않는다.
- 파일을 고치기 전에 구성안을 먼저 제시하고 승인을 받는다. 한 번에 한 덩어리씩 고치고 매번 확인받는다.

## 배포 (2026-10-13 사용자 지침으로 바뀜)
- 사용자가 **"반영해"·"올려"·"배포해"** 같은 말을 하기 전에는 main에 올리지 않는다.
- 그 말을 하면 **바로 main(본섭)에 올린다.** 홈페이지뿐 아니라 워커·밑그림도 같은 규칙이다(그쪽은 비공개 저장소 sketch-app — 규칙은 그 저장소의 `CLAUDE.md`).
- 시험 페이지(`파일명-beta.html`)는 **사용자가 요청할 때만** 만든다. 요청으로 만든 beta 파일은 본 파일에 반영한 뒤 지운다.
- 클로드는 클로드 깃허브 앱으로 올린다. 토큰은 쓰지 않는다.
- 여러 채팅창에서 고칠 때는 고치기 전과 올리기 직전에 main 최신본을 다시 받고, 버전은 '올라간 최신 번호 + 1'로 정한다. 강제 덮어쓰기(force push)는 하지 않는다.
- 사이트는 https로만 열린다(2026-10-13 Enforce HTTPS 켬 — http는 https로 넘어간다). 워커를 부르는 페이지는 https에서만 동작한다.

## 공통 규칙
- 단일 HTML 파일로 유지한다. CSS·JS를 별도 파일로 나누지 않는다.
- 다크테마. `calculator/cal.html`의 디자인 언어에 맞춘다.
- 제목 옆에 버전 라벨을 단다. 11px 이하, 색 `#aaa` 내외. v1.00에서 시작해 수정할 때마다 올린다.
- Pretendard는 CDN으로 부른다. 폰트 파일을 임베드하지 않는다.
- 모바일 대응은 기본값이다.
- 금액은 VAT 별도가 주값, VAT 포함은 괄호로 병기한다 — `20,000원 (VAT 포함 22,000원)`.
- 비교표는 세로(전치) 레이아웃.
- 요금·할인 계산 로직은 별도 지시가 없으면 `calculator/cal.html`의 현재 로직을 따른다.

## 이미지는 URL로 참조한다
- HTML에서는 이미지를 임베드하지 말고 `https://kt-synergy.com/ai/<파일명>`을 `src`로 쓴다. 파일명에 한글이나 공백이 있으면 URL 인코딩한다.
- 원본은 이 저장소의 `ai/` 폴더에 있으니, 확인이 필요하면 그 파일을 직접 본다.
- 예외: 사용자가 내장(base64)을 지시한 경우. 밑그림 첫 화면의 연필 스케치 그림이 그렇다. 이 그림을 URL 참조로 바꾸지 않는다.

## 연동·출력
- Google Forms: checkbox/radio의 `name`은 entry ID, `value`는 폼 옵션 텍스트와 글자 단위로 정확히 일치해야 한다. 다중 선택은 같은 키로 `formData.append()`를 반복한다.
- 폼 제출 알림은 텔레그램 봇으로 보낸다.
- 인쇄·팩스 출력이 있는 도구는 그레이스케일로 뽑는다.

## 파일별 역할
| 파일 | 역할 |
|---|---|
| `index.html` | 포털 메인 |
| `calculator/cal.html` | 하이오더 통합 견적 계산기 |
| `calculator/r_cal.html` | 서빙로봇(B02·T9) 견적 계산기 |
| `document/QR_generator/QR-Studio.html` | QR·포스터 스튜디오 (네이버 플레이스 리뷰 QR) |
| `dx-assets.html` | 리플릿·자산 스튜디오 |
| `wifi-gen/wifi.html` / `wifi-gen/wifi-generator.html` | 네이버 플레이스 와이파이 QR |
| `contract.html` | 하이오더 전자계약 서명 |
| `contract-law.html` | 디지털 계약서 법적 근거 — 전자청약 Q&A |
| `film.html` | 팀 제작 영상 쇼케이스 |
| `apply.html` | 창업설명회 2기 참가 신청 페이지 (광고 랜딩, 초대장 디자인 — 홈페이지 다크테마 규칙 예외) |
| `dx.html` | 'DX를 파는 사람의 DX' — 팀 영업 방식·도구 소개 |
| `sketch.html` | 밑그림 입구 |
| `r.html` | 밑그림 공유 진단서 보기 (카톡 공유 링크로 고객이 여는 화면) |
| `lens.html` | 돋보기 입구 (네이버 플레이스 한눈에) |
| `aitest.html` | AI 비교 시험대 입구 (관리자용) |
| `menu.html` | 차림표 — 하이오더 메뉴 구성·발송문 |
| `menu-intro.html` | 차림표 소개 |
| `mockup.html` | 고객 맞춤 하이오더 화면 이미지(제안 전단용) |
| `document/showroom/appweb.html` | 하이오더 쇼룸 — 기능·도입 사례 소개 (포털에서 링크) |
| `document/showroom/receipt.html` | 하이오더 맞춤 견적서 (쇼룸에서 링크) |
| `document/QR_generator/franchise01.html` | 프랜차이즈 전용 Wi-Fi QR 생성기 |
| `document/QR_generator/qr-generator.html` / `document/QR_generator/qr-generator2.html` | QR 생성기 — Wi-Fi·URL·명함·전화·문자 QR |
| `slideshow01.html` | 브리핑 슬라이드 (6장) |
| `document/questionnaire/완미족발하이오더신청v1.02.html` | 완미족발 가맹점 하이오더 신청 페이지 |

위 표에 없는 HTML은 백업·사본이거나 1회성으로 쓰고 끝난 페이지다. 수정하지 않는다.
