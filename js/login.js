const onLogin = ()=>{
    let emailInput = document.querySelector('#loginId');
    let idError = document.querySelector('#idError');
    let emailErrP = document.querySelector('#errorP');
    let txtMail = document.querySelector('#txtMail');
    // 1.이메일 input tag 미입력시 로그인 버튼을 누르면 idError가 나와야한다
    if(emailInput.value === ''){
        idError.style.display = 'block';
    }else{
        idError.style.display = 'none';
    }

    // 2. 이메일 input tag에 1글자 이상이 입력되면 오른쪽 끝에 X버튼이 생겨야한다

    // 3.이메일 input tag에 3글자 이상이 쓰이면 오른쪽 끝에 X버튼과 @kakao.com이 자동으로 생겨야한다
    // if(emailInput.value.length >= 3){
    //     //3글자 이상일때 실행됨
    //     txtMail.style.display = 'block';
    // }
    // 로그인버튼을 누르지 않았으니 emailInput이 확인이 불가능해서 2,3번 기능을 구현할 수 없을것 같기도하다...

    // 4.로그인 input tag에 포커스가 되면 tip div가 생겼다가 커서를 다른곳으로 옮기면 사라져야함
    // let tip = document.querySelector('#tip');
    // const tipDisappear = ()=>{
    //     if
    // }
    // 5.if input tag가 onclick이 된다면, 'tip' p tag의 display:none; 으로 바꿔줘.


    // 6.비밀번호를 미입력하고 로그인을 눌렀을때 errorP의 문구 변경하기
    let pwInput = document.querySelector('#password');
    let pwError = document.querySelector('#pwError');
    if(pwInput.value === ''){
        pwError.style.display = 'block';
        // check = false; 이 부분이 필요한건지..?
    }else{
        pwError.style.display = 'none';
    }

    // 7. 로그인 상태 유지버튼을 onclick 했을때 circle icon -> checked icon으로 바뀌어야 한다
    function checked() {
        document.querySelector('.circle-button').src = "../images/icon/checked.png";
        }
    }