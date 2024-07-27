<template>

  
    <div class="content">
      <div class="charset">A</div>
      <div class="charset">N</div>
      <div class="charset">I</div>
      <div class="charset">P</div>
      <div class="charset">L</div>
      <div class="charset">E</div>
      <div class="charset">X</div>

      <div class="rect a"></div>
      <div class="rect n"></div>
      <div class="rect i"></div>
      <div class="rect p"></div>
      <div class="rect l"></div>
      <div class="rect e"></div>
      <div class="rect x"></div>
      <div class="rect-p"></div>
    </div>
    <div class="main">
    
 
   

    </div>

    
    
 

  
</template>


<style scoped>








*{
    margin: 0;
    padding: 0;

}
.content{
  width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    animation: shows 1s forwards;
    animation-delay: 2.8s;
}

@keyframes shows{
    0%{
        opacity: 0.6;
    }
    100%{
      opacity: 0;
    }
}   
.charset{
    color: white;
    font-size: 6vw;
    font-style: italic;
    font-weight: bold;

    width: 8vw;
    line-height: 6vh;
    text-align: center;
}


.content .rect {
    width: 6vw;
    height: 6vh;
    position: absolute;
    border-width: 0.4vw;
    border-style: solid;
    border-radius: 0.18vw;

    margin-left: -48vw;
    opacity: 0;
}

.content {
    perspective: 450;
    -webkit-perspective: 450;
}

.rect.a,
.rect.x {
    border-color: #5b4489;
}

.rect.n,
.rect.e {
    border-color: #aa4776;
}

.rect.i,
.rect.l {
    border-color: #d74061;
}

.rect.p {
    border-color: #d74061;
}

.rect.a {
    animation: amove 0.6s linear forwards;
}

@keyframes amove {
    0% {
        opacity: 1;
        transform: rotateY(0deg);
    }

    50% {
        transform: rotateY(180deg);
    }

    100% {
        opacity: 1;
        transform: translateX(-1vw) rotateY(360deg) scale(1.2, 1.2);
    }
}

.rect.n {
    animation: nmove 0.8s linear forwards;
}

@keyframes nmove {
    0% {
        opacity: 1;
        transform: rotateY(130deg) scale(1.1, 1.1);
    }

    60% {
        transform: translateX(calc(8vw*0.6)) rotateY(45deg) scale(1.1, 1.1);


    }

    85% {
        transform: translateX(calc(8vw*0.85)) rotateY(103deg) scale(1.2, 1.2);
    }

    100% {
        opacity: 1;
        transform: translateX(8vw) rotateY(55deg) scale(1.3, 1.3);


    }
}

.rect.i {
    animation: imove 1.0s linear forwards;
}

@keyframes imove {
    0% {
        opacity: 1;

    }

    30% {
        transform: translateX(calc(16vw*0.3)) rotateY(135deg) scale(1.2, 1.2);


    }

    60% {
        transform: translateX(calc(16vw*0.6)) rotateY(45deg) scale(1.3, 1.3);


    }

    85% {
        transform: translateX(calc(16vw*0.85)) rotateY(103deg) scale(1.3, 1.3);
    }

    100% {

        transform: translateX(16vw) rotateY(65deg) scale(1.4, 1.4);
        opacity: 1;


    }
}

.rect.p {
    animation: pmove 1.2s linear forwards;
}

@keyframes pmove {
    0% {
        opacity: 1;

    }

    30% {
        transform: translateX(calc(24vw*0.3)) rotateY(135deg) scale(1.2, 1.2);


    }

    60% {
        transform: translateX(calc(24vw*0.6)) rotateY(45deg) scale(1.4, 1.4);


    }

    85% {
        transform: translateX(calc(24vw*0.85)) rotateY(135deg) scale(1.4, 1.4);
    }

    100% {

        transform: translateX(24vw) rotateY(90deg) scale(1.6, 1.6);
        opacity: 1;


    }
}

.rect.l {
    animation: lmove 1.4s linear forwards;
}

@keyframes lmove {
    0% {
        opacity: 1;

    }

    30% {
        transform: translateX(calc(32vw*0.3)) rotateY(135deg) scale(1.2, 1.2);


    }

    60% {
        transform: translateX(calc(32vw*0.6)) rotateY(45deg) scale(1.3, 1.3);


    }

    85% {
        transform: translateX(calc(32vw*0.85)) rotateY(135deg) scale(1.3, 1.3);
    }

    100% {

        transform: translateX(32vw) rotateY(115deg) scale(1.4, 1.4);
        opacity: 1;


    }
}

.rect.e {
    animation: emove 1.6s linear forwards;
}

@keyframes emove {
    0% {
        opacity: 1;

    }

    30% {
        transform: translateX(calc(40vw*0.3)) rotateY(135deg) scale(1.1, 1.1);


    }

    60% {
        transform: translateX(calc(40vw*0.6)) rotateY(45deg) scale(1.1, 1.1);


    }

    85% {
        transform: translateX(calc(40vw*0.85)) rotateY(103deg) scale(1.2, 1.2);
    }

    100% {
        opacity: 1;
        transform: translateX(40vw) rotateY(135deg) scale(1.3, 1.3);


    }
}

.rect.x {
    animation: xmove 1.8s linear forwards;
}

@keyframes xmove {
    0% {
        opacity: 1;

    }

    30% {
        transform: translateX(calc(48vw*0.3)) rotateY(135deg);


    }

    60% {
        transform: translateX(calc(48vw*0.6)) rotateY(45deg);


    }

    85% {
        transform: translateX(calc(48vw*0.85)) rotateY(103deg);
    }

    100% {
        opacity: 1;
        transform: translateX(49.25vw) rotateY(360deg) scale(1.2, 1.2);


    }
}
.rect-p{
    position: absolute;
    width: 0.36vw;
    height: 10vw;
    background-color: #e93432;
    opacity: 0;
    animation: show 0s forwards;
    animation-delay: 1.2s;
}
@keyframes show{
    to{
        opacity: 1;
    }
}   

</style>
