let subjectArr = [
    "수영장 운영 시간", 
    "수영장 이용 금액", 
    "수영장 이용 가능 여부", 
    "애견 동반 가능 여부", 
    "예약 문의", 
    "예약 확인 및 정보 조회", 
    "환불 정책", 
    "수건 및 비품", 
    "객실 업그레이드", 
    "청결 문제", 
    "불만 및 문제 해결", 
    "조식 관련 문의", 
    "체크아웃", 
    "비품 구매"
]

let contentArr = [
    "운영 여부 및 시간: 수영장 운영 시간은 10:00 ~ 22:00입니다.",
    "이용 금액: 프리미어 이상 객실은 무료, 디럭스 객실은 1인당 3만원입니다.", 
    "숙박 없이 수영장 이용 가능 여부: 숙박하지 않고는 수영장 이용이 불가합니다.",  
    "애견동반 가능 여부: 애견동반은 불가능합니다.", 
    "예약 문의: 특정 날짜에 예약 가능 여부와 객실 요금 문의가 자주 발생합니다.", 
    "예약 확인 및 정보 조회: 예약 시스템과 연동 문제로 인해 수동으로 예약을 확인하고 있습니다.", 
    "환불 정책: 플랫폼 예약은 플랫폼 환불 정책을 따르고, 전화 예약은 예약 시 안내된 환불 정책을 따릅니다",
    "수건 추가 요청: 수건 추가 시 비용이 발생합니다. (수건: 2,000원, 큰 타월: 5,000원).기타 비품 요청: 충전기, 아이스버킷 등 요청이 자주 있습니다.",
    "객실 업그레이드: 객실이 부족한 경우 업그레이드 가능합니다.",
    "청결 문제: 시트 교체가 되지 않았다는 불만이 발생하였습니다.", "기타 불만: 객실 내 TV, 에어컨 문제 등 기술적 문제 해결이 필요합니다.", 
    "조식 관련 문의: 조식은 8시부터 10시까지 제공됩니다.", 
    "기타 문의: 체크아웃 연장", "비품 구매 등 다양한 문의가 발생합니다."
]

let keyWord =[]
let subject = []
let keyWordEl = document.querySelector(".key_word");
keyWordEl.addEventListener("keydown",(e)=> {
    if(e.key === 'Enter') {
        document.querySelector(".subject").innerHTML=''
        document.querySelector('.content').innerHTML=''
        keyWord = [keyWordEl.value]
        let subjects = subjectArr.filter(e => e.includes(keyWord))
        subject = [...subjects]
        keyWordEl.value=""
        for(i=0; i<subject.length; i++) {
            let pEl = document.createElement("p");
            pEl.innerText = subject[i];
            pEl.addEventListener('click', e => {
                document.querySelector('.content').innerHTML=''
                console.log(subjectArr.indexOf(e.target.innerText))
                let pEl2 = document.createElement("p");
                pEl2.innerText = contentArr[subjectArr.indexOf(e.target.innerText)]
                document.querySelector('.content').append(pEl2)

            })
            document.querySelector(".subject").append(pEl)
        }
       
    }
})
