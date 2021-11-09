const string = `.skin *{box-sizing:border-box;margin:0;padding:0;}
.skin *::before,*::after{box-sizing:border-box;}
.skin{
    min-height:50vh;
    background:#ffe600;
    position:relative;
}
.nose{
    border:10px solid #000;
    border-color:#000 transparent transparent; 
    border-bottom:none;
    width:0px;
    height:0px;
    position:absolute;
    left:50%;
    top:145px;
    margin-left:-10px;
    z-index:2;
}
@keyframes shake{
    0%{
        transform:rotate(0deg);
    }
    33%{
        transform:rotate(5deg);
    }
    66%{
        transform:rotate(-5deg);
    }
    100%{
        transform:rotate(0deg);
    }
}
.nose:hover{
    transform-origin:50% 100%;
    animation:shake 300ms infinite linear;
}
.arc{
    background:#000;
    position:absolute;
    width:20px;
    height:6px;
    top:-16px;
    left:-10px;
    border-radius:10px 10px 0 0;
}
.eye{
    border:2px solid #000;
    width:64px;
    height:64px;
    position:absolute;
    left:50%;
    top:100px;
    background:#2e2e2e;
    border-radius:50%;
    margin-left:-32px; 
}
.eye.left{
    transform:translateX(-100px);
}
.eye.right{
    transform:translateX(100px);  
}
.eye::before{
    content:''; 
    display:block;
    border:3px solid #000;
    width:30px;
    height:30px;
    background:#fff;
    border-radius:50%;
    position: absolute;
    left: 8px;
}
@keyframes wink-right{
    0%, 9%, 11%, 19%, 21%, 69%, 71%, 100%{transform:translateX(100px) scaleY(1);}
    10%,20%,70%{transform:translateX(100px) scaleY(0.02);}
}
@keyframes wink-left{
    0%, 9%, 11%, 19%, 21%, 69%, 71%, 100%{transform:translateX(-100px) scaleY(1);}
    10%,20%,70%{transform:translateX(-100px) scaleY(0.02);}
}
.eye.right{
    transform-origin: center 70%;
    animation:wink-right 7s infinite;
}
.eye.left{
    transform-origin: center 70%;
    animation:wink-left 7s infinite;
}
.mouth{
    width:200px;
    height:200px;
    position: absolute;
    left:50%;
    top:172px;
    margin-left:-100px;
}
.mouth .up{
    position: relative;
    top:-20px;
    z-index:1;
}
.mouth .up .lip{
    border:3px solid black;
    height: 30px;
    width:80px; 
    border-top-color:transparent;
    position:relative;
    position:absolute;
    left:50%;
    margin-left:-40px;
    background: #ffe600;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 30px;
    border-right-color:transparent;
    transform:rotate(-22deg) translateX(-44px);
}
.mouth .up .lip.right{
    border-radius: 0 0 30px 0;   
    border-left-color:transparent;
    transform:rotate(22deg) translateX(44px);
}
.mouth .up .lip::before{
    content:'';
    display:block;
    width:7px;
    height:30px;
    position:absolute;
    bottom:0;
    background:#ffe600;
}
.mouth .up .lip.left::before{
    right:-6px;
}
.mouth .up .lip.right::before{
    left:-6px;
}

.mouth .down{
    height:180px;
    position: absolute;
    top:6.5px;
    width:100%;
    overflow:hidden;
}
.mouth .down .ellipse1{
    border:3px solid black;
    width:150px;
    height:1000px;
    position: absolute;
    bottom:0;
    left:50%;
    margin-left:-75px;
    border-radius:75px / 280px;
    background:#9b000a;
    overflow:hidden;
}
.mouth .down .ellipse1 .ellipse2{
    background:#ff485f;
    position: absolute;
    bottom:-155px;
    left:50%;
    width:200px;
    height:300px;
    margin-left:-100px;
    border-radius:100px;
}
.cheek{
    position: absolute;
    left:50%;
    border:3px solid black;
    width:84px;
    height:84px;
    top:210px;
    margin-left:-43px;
    z-index:2;
}
.cheek.left{
    transform:translateX(-170px);
    background: #ff0000;
    border-radius: 50%;
}
.cheek.right{
    transform:translateX(170px);
    background: #ff0000;
    border-radius: 50%;
}`

export default string