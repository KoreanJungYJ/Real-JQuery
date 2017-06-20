**스타일 변경**
Jquery의 특징 중 하나는 바로 css를 쉽게 제어할 수 있다는 점이다.
기본적인 구문은
-> $('선택자').css('속성','값');
다음과 같으며,

선택자는 css 선택자,
속성은 css 속성,
값은 css 속성에 설정할 값을 뜻한다.

-> 간단하지만 매우 중요한 코드이므로 **꼭!** 기억하도록 하자.

-예시-
    $(function(){
        $('.page_main>div:nth-child(2) .inner').css('opacity',0.7);
        $('#MainBox .Boxes').css('background-color','plum');
    });

    $(function(){
        $('#typeChange').css({
            'font-size': '50px',
            'background-color','plum'
        })
    });

    $(function(){  ->이와 같은 경우로 할 때에는 하이픈 뒤에 있는 시작 문자를 대문자로 바꿔야함!
        $('#Body>#Heart').css({
            fontSize: '50px',
            backgroundColor: 'plum'
        })
    });


**주의점**
자바스크립트에서 css의 값을 지정하는 방법에는 두 가지가 있는데
첫 번째는 작은따옴표나 큰따옴표 안에 값을 지정하는 것이고,
두 번째는 묶지 않고 지정하는 것이다.

-> 작은따옴표나 큰따옴표로 묶인 부분은 문자열로 인식하기 때문에,
opacity:0.5나 z-index:3과 같은 숫자를 지정하려면 묶지 않아야 한다!

**background-color**
->Jquery에서 적용이 안되는 경우가 있는데 왜 그런지 살펴보자!