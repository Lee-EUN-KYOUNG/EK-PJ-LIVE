/// 상품 정보 객체 ////

const mgoods = [
  {
    상품이미지: "./images/good_image01.jpg",
    상품명: "해피카우 오스트리안 스모크드 치즈",
    상품가격: "3,400원",
    분류: "스모크 치즈",
    유통기한: "2024.6.18",
    상품설명:
      "귀욤동글 포장안에 썰어먹는 스모크 치즈, 녹진한 질감과 대중적인 맛!",
    제품후기: "2013건",
  },
  {
    상품이미지: "./images/good_image02.jpg",
    상품명: "그란 모라비아 미니 하드치즈",
    분류: "하드 치즈",
    상품가격: "4,900원",
    유통기한: "2024.6.11",
    상품설명:
      "치즈퀸 직원들이 먼저 알아보고 퇴근할때 챙겨가는 씹는 맛이 좋은 그라나파다노와 비슷한 경성치즈. 미니 사이즈로 소포장 5개입.",
    제품후기: "2001건",
  },
  {
    상품이미지: "./images/good_image03.jpg",
    상품명: "플랜터스 허니 로스티드 피넛 미니팩",
    분류: "스낵",
    상품가격: "4,900원",
    유통기한: "2024.5.11",
    상품설명:
      "고소하게 로스팅한 땅콩에 달콤한꿀과 짭쪼름 시즈닝. 10개들이 미니팩.",
    제품후기: "1811건",
  },
  {
    상품이미지: "./images/good_image04.jpg",
    상품명: "플랜터스 핫 치폴레 피넛",
    분류: "스낵",
    상품가격: "2,900원",
    유통기한: "2024.5.27",
    상품설명:
      "로스팅한 땅콩에 치폴레 페퍼, 양파, 마늘, 큐민을 더한 매콤한 땅콩 스낵.",
    제품후기: "1800건",
  },
  {
    상품이미지: "./images/good_image05.jpg",
    상품명: "스톡 크노퍼스",
    분류: "스낵",
    상품가격: "5,900원",
    유통기한: "2024.6.27",
    상품설명:
      "숨겨두고 먹는 달달 간식. 우유 크림, 초코 크림, 헤이즐넛 조각으로 5겹 웨이퍼.",
    제품후기: "1503건",
  },
  {
    상품이미지: "./images/good_image06.jpg",
    상품명: "티네 얄스버그 오리지널 슬라이스(스윗 앤 너티)",
    분류: "슬라이스 치즈",
    상품가격: "7,500원",
    유통기한: "2024.5.17",
    상품설명:
      "견과류의 고소함과 농축된 우유 풍미, 부드러운 식감, 짜지도 달지도 않은 편안한 맛. 완벽한 식사 치즈 자신있게 추천!",
    제품후기: "1463건",
  },
  {
    상품이미지: "./images/good_image07.jpg",
    상품명: "데쎄오 크런치 레몬버터 비스킷",
    분류: "스낵",
    상품가격: "4,200원",
    유통기한: "2024.5.7",
    상품설명:
      "산뜻한 레몬을 품은 버터 비스킷. 농후한 풍미와 바삭한 식감의 완벽. 따뜻한 차와 곁들이거나 위스키 안주로 추천!",
    제품후기: "1356건",
  },
  {
    상품이미지: "./images/good_image08.jpg",
    상품명: "MyJool(마이줄) 메드줄 대추야자",
    분류: "스낵",
    상품가격: "3,600원",
    유통기한: "2024.10.9",
    상품설명:
      "신의 열매라 불리우는 고대 Super Fruit 대추야자! 그중에서도 최고라 평가되는 메드줄 품종으로 만들어서 크기/식감/당도 모두 최고입니다. 대추야자로 에너지를 부스팅해보세요.",
    제품후기: "1202건",
  },
  {
    상품이미지: "./images/good_image09.jpg",
    상품명: "데니쉬크라운 살라미 스틱",
    분류: "살라미",
    상품가격: "1,600원",
    유통기한: "2024.7.29",
    상품설명:
      "어? 이거 뭔데 왜 맛있지? 연발했던 의외로 맛있는 말랑쫀득 안 짠 스틱 살라미.",
    제품후기: "985건",
  },
]; ///////////////// mgoods 객체 //////////////////////

// 대표이미지 데이터
/************************************* 
    [ 데이터항목 : ]
    1.순번(기본키) : idx
    2.제목 : title
    3.이미지명 : imgName
    4. 가격 : won
*************************************/
const freeData = [
  {
    idx: "1",
    title: "치즈퀸 무배클럽 맛보기",
    imgName: "free-cate01",
    won: "60,000원",
  },
  {
    idx: "2",
    title: "치즈퀸 무배클럽 12",
    imgName: "free-cate02",
    won: "120,000원",
  },
  {
    idx: "3",
    title: "치즈퀸 무배클럽 18",
    imgName: "free-cate03",
    won: "180,000원",
  },
  {
    idx: "4",
    title: "치즈퀸 무배클럽 25",
    imgName: "free-cate04",
    won: "250,000원",
  },
]; /////////// freeData 배열 /////////

const bData = [
  {
    idx: "1",
    title: "비즈니스 보너스 클럽 100",
    imgName: "B-cate01",
    bwon: "1,000,000원",
  },
  {
    idx: "2",
    title: "비즈니스 클럽 주의사항",
    imgName: "B-cate02",
    bwon: "사업자용 보너스 클럽",
  },
]; /////////// bData 배열 /////////

/************************************* 
    [ 데이터항목 : ]
    1.순번(기본키) : idx
    2.제목 : title
    3.내용 : scont
    4.가입자격: acq
*************************************/

const nData = [
  {
    idx: "1",
    title: "무료 배송 맛보기",
    scont: ` 탈퇴 : 1년 이내, 언제든 클럽 탈퇴와 환불이 가능합니다.<br>

    환불 : 중도 탈퇴(환불)시, 제공 받은 무료 배송 쿠폰 중 사용한 무료 배송 쿠폰 (1장당 4천원)은 제외하고 환불됩니다.<br>

    사용 기한 : 적립금과 무료배송 쿠폰의 유효기간은 1년입니다.<br>

    양도 : 타인에게 쿠푠 양도, ID간 이동은 불가능합니다.<br>

    부분 환불 발생시 : 재고 부족 등으로 부분 환불 사유가 발생할 경우 적립금으로 환불해드립니다.<br>

    제주 및 산간 지역 배송 : 무료 배송 쿠폰 사용시 기본 배송비 4천원이 면제되며 추가 요금이 부과됩니다.`,
    acq: "가입 자격 : 개인 회원만 가입 가능",
  },
  {
    idx: "2",
    title: "무배클럽 12",
    scont: `탈퇴 : 3년 이내, 언제든 클럽 탈퇴와 환불이 가능합니다.<br>

    환불 : 중도 탈퇴(환불)시, 제공 받은 무료 배송 쿠폰 중 사용한 무료 배송 쿠폰 (1장당 4천원)은 제외하고 환불됩니다.<br>

    사용 기한 : 적립금과 무료배송 쿠폰의 유효기간은 3년입니다.<br>

    양도 : 타인에게 쿠푠 양도, ID간 이동은 불가능합니다.<br>

    부분 환불 발생시 : 재고 부족 등으로 부분 환불 사유가 발생할 경우 적립금으로 환불해드립니다.<br>

    제주 및 산간 지역 배송 : 무료 배송 쿠폰 사용시 기본 배송비 4천원이 면제되며 추가 요금이 부과됩니다.`,
    acq: "가입 자격 : 개인 회원만 가입 가능",
  },
  {
    idx: "3",
    title: "무배클럽 18",
    scont: `탈퇴 : 3년 이내, 언제든 클럽 탈퇴와 환불이 가능합니다.<br>

    환불 : 중도 탈퇴(환불)시, 제공 받은 무료 배송 쿠폰 중 사용한 무료 배송 쿠폰 (1장당 4천원)은 제외하고 환불됩니다.<br>

    사용 기한 : 적립금과 무료배송 쿠폰의 유효기간은 3년입니다.<br>

    양도 : 타인에게 쿠푠 양도, ID간 이동은 불가능합니다.<br>

    부분 환불 발생시 : 재고 부족 등으로 부분 환불 사유가 발생할 경우 적립금으로 환불해드립니다.<br>

    제주 및 산간 지역 배송 : 무료 배송 쿠폰 사용시 기본 배송비 4천원이 면제되며 추가 요금이 부과됩니다.`,
    acq: "가입 자격 : 개인 회원만 가입 가능",
  },
  {
    idx: "4",
    title: "무배클럽 25",
    scont: `탈퇴 : 3년 이내, 언제든 클럽 탈퇴와 환불이 가능합니다.<br>

    환불 : 중도 탈퇴(환불)시, 제공 받은 무료 배송 쿠폰 중 사용한 무료 배송 쿠폰 (1장당 4천원)은 제외하고 환불됩니다.<br>

    사용 기한 : 적립금과 무료배송 쿠폰의 유효기간은 3년입니다.<br>

    양도 : 타인에게 쿠푠 양도, ID간 이동은 불가능합니다.<br>

    부분 환불 발생시 : 재고 부족 등으로 부분 환불 사유가 발생할 경우 적립금으로 환불해드립니다.<br>

    제주 및 산간 지역 배송 : 무료 배송 쿠폰 사용시 기본 배송비 4천원이 면제되며 추가 요금이 부과됩니다.`,
    acq: "가입 자격 : 개인 회원만 가입 가능",
  },
  {
    idx: "5",
    title: "비즈니스 보너스 클럽",
    scont: `탈퇴 : 1년 이내, 언제든 클럽 탈퇴와 환불이 가능합니다.

    환불 : 중도 탈퇴(환불)시, 보너스 적립금은 환불 대상이 아니며 100만원에서 사용하신 금액만큼 제외하고 환불됩니다.

    사용 기한 : 적립금의 유효기간은 1년입니다. 가입 후 1년 경과 시 자동 소멸 됩니다.

    양도 : 타인에게 쿠푠 양도, ID간 이동은 불가능합니다.

    부분 환불 발생시 : 재고 부족 등으로 부분 환불 사유가 발생할 경우 적립금으로 환불해드립니다.

    증빙 : 입금이 확인되면 100만원에 대한 세금 계산서(결제시 신청 필수) 또는 현금 영수증 (자동 발급)이 익월 초에 발급됩니다.`,
    acq: "가입 자격 : 와인 바등 요식 사업자 및 파티 공간 사업자, 쿠킹 클래스 및 조리 관련 학과, 그 외 치즈 구매량이 많은 곳",
  },
]; /////////// nData 배열 /////////

// 4. 제품후기 데이터
/************************************* 
    [ 데이터항목 : ]
    1.순번(기본키) : idx
    2.제목 : title
    3.제품후기 : reviewer
    3.이미지 : rephoto
    4.날짜 : date
*************************************/
const rData = [
  {
    idx: "1",
    title: "해피카우 오스트리안 스모크드 치즈",
    reviewer: "짭짤하고 고소해서 맛있어요. 훈제향도 나서 좋아요.",
    rephoto: "./images/good_image02.jpg",
    date: "2024-04-15",
  },
  {
    idx: "2",
    title: "해피카우 오스트리안 스모크드 치즈",
    reviewer: "짭짤하고 고소해서 맛있어요. 훈제향도 나서 좋아요.",
    rephoto: "./images/good_image01.jpg",
    date: "2024-04-15",
  },
  {
    idx: "3",
    title: "플랜터스 허니 로스티드 피넛 미니팩",
    reviewer:
      "요건 정말 한 봉지 순삭이예요. 짭짤하고 고소해서 맥주안주로 딱이죠 ㅎㅎ",
    rephoto: "./images/good_image03.jpg",
    date: "2024-04-15",
  },
  {
    idx: "4",
    title: "티네 얄스버그 오리지널 슬라이스(스윗 앤 너티)",
    reviewer: "쉽게 간편하게 먹을 수 있어 좋아요. 맛은 마일드.",
    rephoto: "./images/good_image06.jpg",
    date: "2024-04-15",
  },
  {
    idx: "5",
    title: "플랜터스 핫 치폴레 피넛",
    reviewer:
      "저번에 샀는데 맛에 중독돼서 바로 또 시켰습니다. 자극적이고 맛있어요.",
    rephoto: "./images/good_image04.jpg",
    date: "2024-04-15",
  },
  {
    idx: "6",
    title: "MyJool(마이줄) 메드줄 대추야자",
    reviewer: "대추야자 좋아하는데 맛있었어요. 큼직한 열매로 세개 들었어요.",
    rephoto: "./images/good_image08.jpg",
    date: "2024-04-15",
  },
  {
    idx: "7",
    title: "데니쉬크라운 살라미 스틱",
    reviewer: "살짝 딱딱하긴한데 술안주로 먹기 편하고 좋아요.",
    rephoto: "./images/good_image09.jpg",
    date: "2024-04-15",
  },
  {
    idx: "8",
    title: "스톡 크노퍼스",
    reviewer: "바삭바삭하고 달달하니 넘넘 맛잇어요~~♡",
    rephoto: "./images/good_image05.jpg",
    date: "2024-04-15",
  },
  // {
  //   idx: "9",
  //   title: "데쎄오 크런치 레몬버터 비스킷",
  //   reviewer: "너무 달지 않고 레몬 상큼한 맛이 좋아요.",
  //   rephoto: "./images/good_image07.jpg",
  //   date: "2024-04-15",
  // },
];

// 데이터 공개하기
export { mgoods, freeData, bData, nData, rData };