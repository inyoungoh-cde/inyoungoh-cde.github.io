# inyoungoh-cde.github.io — 유지보수 가이드

빌드 단계가 없는 순수 정적 사이트입니다. 업로드한 파일이 그대로 사이트가 되므로,
Jekyll/Ruby/GitHub Actions 지식이 전혀 필요 없습니다.

## 폴더 구조

```
index.html            홈 (연구 소개 · 다이어그램 · SFD-Net 루프 스트립 · Selected Pubs · News · 경력 · 학력 · 수상 · Open source)
publications.html     논문 전체 목록 (테마 필터 + 카테고리 섹션)
404.html              잘못된 주소 접속 시 페이지
favicon.svg           브라우저 탭 아이콘
.nojekyll             GitHub Pages의 Jekyll 처리 비활성화 (숨김 파일)
assets/
  css/style.css       모든 스타일 (색·폰트·레이아웃, 다크모드 포함)
  js/data.js          ★ 데이터 파일 — 평소 수정할 파일은 사실상 이것 하나
  js/main.js          렌더링 로직 (수정할 일 거의 없음)
  img/                최적화된 이미지 (WebP)
  media/              SFD-Net 루프 클립 4개(mp4) + 포스터(jpg) + OG 카드(og_sfdnet.png)
  pdf/Inyoung_Oh_CV.pdf
```

## 자주 하는 작업

### 1. 논문 추가하기
`assets/js/data.js`의 `PUBS` 배열 맨 위쪽(같은 카테고리 안에서 최신이 위)에
기존 항목 하나를 복사해 붙여넣고 내용만 바꿉니다. 필드 의미:

- `id` : 고유 이름 (예: `"cvpr2027"`). 딥링크 주소가 됩니다 → `publications.html#cvpr2027`
- `category` : `"international"` / `"inprep"` / `"domestic"` / `"patent"`
- `theme` : `"geometry"` / `"gdl"` / `"image3d"` (필터 칩 분류)
- `selected: true` : 홈의 Selected Publications에 노출 (4개 내외 유지 권장)
- `date` : `"YYYY-MM-DD"` — 정렬 기준이므로 반드시 정확히
- `authors` : 이름은 정확히 `Inyoung Oh`로 쓰면 자동으로 강조 표시됩니다
- `badges` : `{ kind: "award", text: "🏆 Best Poster Award" }` 또는 `{ kind: "status", text: "accepted" }`
- `thumb` : 썸네일 경로 (없으면 필드 자체를 생략)
- `abstract`, `bibtex`, `links` : 있으면 버튼이 자동 생성, 없으면 생략

### 2. 뉴스 추가하기
`data.js`의 `NEWS` 배열 맨 위에 한 줄 추가:
```js
{ date: "2026-08-01", html: '문장. <a href="...">링크</a> 가능.' },
```

### 3. CV 교체하기
새 PDF를 `assets/pdf/Inyoung_Oh_CV.pdf`라는 **같은 이름**으로 덮어쓰면 끝.
(GitHub 웹: 해당 폴더에서 "Add file → Upload files"로 같은 이름 업로드 = 덮어쓰기)

### 4. Research Statement 공개하기 (준비되면)
PDF를 `assets/pdf/`에 넣고, `data.js`에서
`researchStatement: null` → `researchStatement: "assets/pdf/파일명.pdf"`
로 바꾸면 홈 상단에 버튼이 자동으로 나타납니다.

### 5. 수정 날짜 갱신
내용을 고쳤으면 `data.js` 맨 위 `SITE.updated`의 날짜를 바꿔주세요 (푸터에 표시됨).

### 6. 하이라이트 루프 클립 교체/추가
스트립의 클립들은 `assets/media/`에 있고, 카드 마크업은 `index.html`의
`<section id="highlights">` 안에 있습니다.
- 교체: 같은 파일명(`loop_*.mp4` + 같은 이름 `.jpg` 포스터)으로 덮어쓰면 끝
- 추가: index.html에서 `<a class="media-card">` 블록 하나를 복사해 파일 경로·캡션·링크만 수정
- 클립 규격: 1080×1080 정사각, 8초 심리스 루프, h264/yuv420p, faststart, 2MB 이하,
  텍스트 굽지 않기(캡션은 HTML). 재생성 명령은 연구 서버의 `make_web_loops.py`와
  로컬에 보관한 `manifest.md` 참고
- 캡션에 수치를 쓸 땐 논문 Table 1의 510모델 값만 사용

### 7. 썸네일 이미지 추가
- 가로 640px, WebP 형식 권장 (수십 KB 수준 유지)
- 무료 변환: https://squoosh.app (브라우저에서 리사이즈 + WebP 저장)
- `assets/img/`에 넣고 `PUBS` 항목의 `thumb`에 경로 기입

## 업로드 방법 (GitHub 웹, 클릭만으로)

1. 레포 페이지 → "Add file" → "Upload files"
2. 수정한 파일(또는 압축 푼 전체 내용물)을 드래그 앤 드롭
3. "Commit changes" 클릭 → 1~2분 뒤 사이트 반영

## 알아두면 좋은 것

- `.nojekyll`은 숨김 파일이라 Windows 탐색기에서 안 보일 수 있습니다.
  업로드에서 빠져도 이 사이트는 정상 작동하도록 설계되어 있으니 걱정하지 않아도 됩니다.
- 문제가 생기면 `legacy-v1` 브랜치에 이전 사이트 전체가 보존되어 있습니다.
- 색상을 바꾸고 싶으면 `style.css` 맨 위 `:root`(라이트)와 `[data-theme="dark"]`(다크)의
  변수만 수정하면 사이트 전체에 반영됩니다.
- 3인칭 소개문(bio)은 `data.js`의 `BIO` 상수와 `index.html`의 bio 섹션 두 곳에 있습니다.
  수정 시 두 곳을 함께 바꿔주세요.
