const onLogin = ()=>{
    let idInput = document.querySelector('#loginId');
    let idError = document.querySelector('#idError');
    let emailErrP = document.querySelector('#errorP');
    let txtMail = document.querySelector('#txtMail');
    // 1.이메일 input tag 미입력시 로그인 버튼을 누르면 idError가 나와야한다
    if(idInput.value === ''){
        idError.style.display = 'block';
    }else{
        idError.style.display = 'none';
    }

    // 2. 이메일 input tag에 1글자 이상이 입력되면 오른쪽 끝에 X(cancle.png)버튼이 생겨야한다

    // 3.이메일 input tag에 3글자 이상이 쓰이면 오른쪽 끝에 X(cancle.png)버튼과 @kakao.com이 자동으로 생겨야한다
    // if(emailInput.value.length >= 3){
    //     //3글자 이상일때 실행됨
    //     txtMail.style.display = 'block';
    // }
    // 로그인버튼을 누르지 않았으니 emailInput이 확인이 불가능해서 2,3번 기능을 구현할 수 없을것 같기도하다...

    // 4.로그인 input tag에 포커스가 되면 tip div가 생겼다가 커서를 다른곳으로 옮기면 사라져야함
    // (if loginIdinput tag가 onclick이 된다면, 'tip' p tag의 display:block; 으로 바꿔줘)
    
    const showTip = ()=>{
        let tip = document.querySelector('.info_tip');
        console.log('tip');
        let idInput = document.querySelector('#loginId');

        if(idInput.onfocus()){ // focus() 된 상태를 어떻게 찾을까요?
            info_tip.style.display = 'block';
        }else{
            info_tip.style.display = 'none';
        }
    }

    
    // 5.비밀번호를 미입력하고 로그인을 눌렀을때 pwError의 div를 보여주기
    let pwInput = document.querySelector('#password');
    let pwError = document.querySelector('#pwError');
    if(pwInput.value === ''){
        pwError.style.display = 'block';
        // check = false; 이 부분이 필요한건지..?
    }else{
        pwError.style.display = 'none';
    }

}
// 6. 로그인 상태 유지버튼을 onclick 했을때 circle icon -> checked icon으로 바뀌어야 한다
// (onclick 했을때 img 경로를 변경해주면 되지 않을까?)
// 네이버 로그인 상태유지 check box참고(value="on" 으로 바뀌면서 아이콘 변함)
function checked(){
    let circleIcon = document.querySelector('.circle-button').src;
    console.log(circleIcon);
    document.querySelector('.circle-button').src = circleIcon.replace('circle', 'checked');
    }

function f(){
        document.querySelector('.info_tip').style.display = 'block';

    }
function f2(){
        document.querySelector('.info_tip').style.display = 'none';
    }

function f3(){
        console.log('이벤트 실행됨');
        document.getElementById('idError').style.display = 'none';
        document.getElementById('pwError').style.display = 'none';
    }