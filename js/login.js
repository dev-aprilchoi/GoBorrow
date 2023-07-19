const onRegister = ()=>{
    // user가 쓴 글자를 받아와야한다.
    let loginIdInput = document.querySelector('#loginId');
    // 사용자가 email input태그에 입력한 값은
    // emailInput.value에 들어있다

    let passwordInput = document.querySelector('#password');

    let staySignedIn = document.querySelector('#staySignedIn');

    // check에는 true가 들어있다
    let check = true;

    // 정말로 value번째 방에있는 값들이 잘 들어왔는지 콘솔창으로 확인하기
    // console.log(emailInput.value);
    // console.log(userNameInput.value);
    // console.log(passwordInput.value);
    // console.log(passwordCheckInput.value);
    let emailErrMsg = document.querySelector('#email-err-msg');


    // Id를 입력하려고 마우스 커서를 올렸을때
    let loginDiv = document.querySelector(#loginId);
    let tip = document.querySelector(#loginId);

    // Id를 미입력 하고 로근인을 눌렀을때
    let loginIdErrMsg = document.querySelector('#loginId-err-msg');
    if(loginIdInput.value === ''){
        loginIdErrMsg.style.display = 'block';
        check = false;
    }else{
        loginIdErrMsg.style.display = 'none';
    }

    // 비밀번호를 미입력하고 로그인을 눌렀을때
    let passwordErrMsg = document.querySelector('#password-err-msg');
    if(passwordInput.value === ''){
        passwordErrMsg.style.display = 'block';
        check = false;
    }else{
        passwordErrMsg.style.display = 'none';
    }

    // 로그인 상태를 유지하고 싶을때
    let passwordCheckErrMsg = document.querySelector('#password-check-err-msg');
    if(passwordCheckInput.value === ''){
        passwordCheckErrMsg.textContent = '비밀번호 확인은 필수 입력값입니다.'
        passwordCheckErrMsg.style.display = 'block';
        check = false;
    }else if(passwordCheckInput.value !== passwordInput.value){
        // console.log('여기 실행됨'); 실행이 안될때 어디까지 들어왔는지 확인하면서...
        passwordCheckErrMsg.textContent = '비밀번호에 입력된 값과 다릅니다.';
        passwordCheckErrMsg.style.display = 'block';
        check = false;
    }else{
        passwordCheckErrMsg.style.display = 'none';
    }

    //  if 영역으로 한번도 들어간적이 없다면(모든 값으로 정상적으로 입력되었다는 소리) 회원가입 성공!! 
    if(check){
        //  모달창을 보여줘
        alert('회원가입이 성공했습니다!');
    }
}

    // 경우의 수 16가지...     처음에  check = true 가 들어있다
    // 이메일 ''                    check = false
    // 이름 '최유라'    네
    
    // 비밀번호 '123'
    // 비밀번호 확인 '123'

    // 비밀번호에 @가 들어가있는지 확인
    // 비밀번호가 8자리 이상인지 확인