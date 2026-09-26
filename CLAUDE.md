# kt-synergy.com 작업 규칙

이 저장소는 kt-synergy.com(GitHub Pages 정적 호스팅)이다. 서버 사이드 코드는 쓸 수 없다.
공개 저장소이므로 토큰·비밀번호·개인 연락처를 새로 쓰지 않는다.

## 고치기 전에
- 저장소에 있는 현재 파일을 기준으로 고친다. 기억이나 추측으로 새로 쓰지 않는다.
- 파일을 고치기 전에 구성안을 먼저 제시하고 승인을 받는다. 한 번에 한 덩어리씩 고치고 매번 확인받는다.

## 시험 절차
- 기존 페이지를 고칠 때는 먼저 같은 폴더에 `파일명-beta.html`로 만든다.
- 사용자가 사이트에서 확인하고 승인하면 본 파일에 반영하고 버전을 올린 뒤 beta 파일은 지운다.

## 공통 규칙
- 단일 HTML 파일로 유지한다. CSS·JS를 별도 파일로 나누지 않는다.
- 다크테마. `calculator/cal.html`의 디자인 언어에 맞춘다.
- 제목 옆에 버전 라벨을 단다. 11px 이하, 색 `#aaa` 내외. v1.00에서 시작해 수정할 때마다 올린다.
- Pretendard는 CDN으로 부른다. 폰트 파일을 임베드하지 않는다.
- 새 도구에는 localStorage·sessionStorage를 쓰지 않는다. 단, 기존 `sketch.html`·`QR-Studio.html`의 저장 기능은 지우지 않는다.
- 모바일 대응은 기본값이다.
- 금액은 VAT 별도가 주값, VAT 포함은 괄호로 병기한다 — `20,000원 (VAT 포함 22,000원)`.
- 비교표는 세로(전치) 레이아웃.
- 요금·할인 계산 로직은 별도 지시가 없으면 `calculator/cal.html`의 현재 로직을 따른다.

## 이미지는 URL로 참조한다
- HTML에서는 이미지를 임베드하지 말고 `https://kt-synergy.com/ai/<파일명>`을 `src`로 쓴다. 파일명에 한글이나 공백이 있으면 URL 인코딩한다.
- 원본은 이 저장소의 `ai/` 폴더에 있으니, 확인이 필요하면 그 파일을 직접 본다.
- 예외: 사용자가 내장(base64)을 지시한 경우. `sketch.html` 첫 화면의 연필 스케치 그림이 그렇다. 이 그림을 URL 참조로 바꾸지 않는다.

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
| `film.html` | 팀 제작 영상 쇼케이스 |
| `sketch.html` | 밑그림 — 매장운영진단 데이터 수집기 |
| `menu.html` | 차림표 — 하이오더 메뉴 구성·발송문 |
| `mockup.html` | 고객 맞춤 하이오더 화면 이미지(제안 전단용) |
| `document/showroom/appweb.html` | 하이오더 쇼룸 — 기능·도입 사례 소개 (포털에서 링크) |
| `document/showroom/receipt.html` | 하이오더 맞춤 견적서 (쇼룸에서 링크) |
| `document/QR_generator/franchise01.html` | 프랜차이즈 전용 Wi-Fi QR 생성기 |
| `document/QR_generator/qr-generator.html` / `document/QR_generator/qr-generator2.html` | QR 생성기 — Wi-Fi·URL·명함·전화·문자 QR |
| `slideshow01.html` | 브리핑 슬라이드 (6장) |
| `document/questionnaire/완미족발하이오더신청v1.02.html` | 완미족발 가맹점 하이오더 신청 페이지 |

위 표에 없는 HTML은 백업·사본이거나 1회성으로 쓰고 끝난 페이지다. 수정하지 않는다.
