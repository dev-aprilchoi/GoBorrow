let emailInput = document.querySelector('#loginId');
let errorBox = document.querySelector('#errorBox');
let emailErrP = document.querySelector('#errorP');
let txtMail = document.querySelector('#txtMail');
// 1.이메일 input tag 미입력시 로그인 버튼을 누르면 errorBox가 나와야한다
if(emailInput.value === ''){
    errorBox.style.display = 'block';
}else if{
    errorBox.style.display = 'none';


// 2. 이메일 input tag에 1글자 이상이 입력되면 오른쪽 끝에 X버튼이 생겨야한다
// 로그인버튼을 누르지 않았으니 emailInput이 확인이 불가능해서 이 기능을 구현할 수 없을것 같기도하다...

// 3.이메일 input tag에 3글자 이상이 쓰이면 오른쪽 끝에 X버튼과 @kakao.com이 자동으로 생겨야한다
}else if(emailInput.value.length >= 3){
    //3글자 이상일때 실행됨
    txtMail.style.display = 'block';
}

// 4.비밀번호 input tag에 포커스가 되면 tip div가 사라져야함 
let tip = document.querySelector('#tip');
const tipDisappear = ()=>{
// 5.if input tag가 onclick이 된다면, 'tip' p tag의 display:none; 으로 바꿔줘.
}

// 6.비밀번호를 미입력하고 로그인을 눌렀을때 errorP의 문구 변경하기
let passwordErrMsg = document.querySelector('#password-err-msg');
if(passwordInput.value === ''){
    passwordErrMsg.style.display = 'block';
    check = false;
}else{
    passwordErrMsg.style.display = 'none';
}

// 7. 로그인 상태 유지버튼을 onclick 했을때 circle icon -> checked icon으로 바뀌어야 한다
function checked() {
    document.querySelector('.circle-button').src = "../images/icon/checked.png";
}








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