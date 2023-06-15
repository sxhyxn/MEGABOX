/* https://developers.google.com/youtube/iframe_api_reference?hl=ko    참조 */


//let body=$('body') 랑 같음
let $select = {
    body:$('body'),
    overlay:$('#blackout'),
    modal:$('#trailerModal'),
    showButton:$('#showTrailer'),
    hideButton:$('#hideTrailer')
}

let play = {
    obj:null,
    qeury:{
        autoplay: 1,//  1->true , 0-> (기본값) f
        controls: 0, //표시 x, 1 -> (기본값) 표시o
        iv_load_policy: 3 //1 ->(기본값) 표시 o, 3 -> 표시x
    }
}

/* 
$select.showButton.click(function(){
    showPlayer()
});
            줄여쓰기는 아래 
*/
$select.showButton.click(showPlayer);
$select.hideButton.click(hidePlayer);

function setPlayer(id){
    play.obj = new YT.Player('trailer', { //#trailer를 불러서 사용
        videoId: id,
        playerVars:play.qeury
      });
      resizePlayer();
      //리사이즈,화면이 회전되거나 화면의 사이즈를 바꿀때 다시 설정 필요
    $(window).on('resize orientationchange',function(){
        resizePlayer();
    })
}
function resizePlayer(){
    let viewport_w=$(window).width(); // 현재화면넓이
    let viewport_h=$(window).height(); //현재화면높이

    let frame_w=viewport_w;           //16
    let frame_h=viewport_w / 1.6;     //10
    //16:10 비율로 맞추기

    let modal_t=((viewport_h - frame_h)/2) + "px";
    let modal_l=0;

    $select.modal.css({top : modal_t, left : modal_l})
    play.obj.setSize(frame_w,frame_h);
}
function showPlayer(){
    if(!play.obj){
        setPlayer($select.showButton.data('youtube'));
    }
    //console.log($select.showButton.data('youtube'))
    $select.overlay.show();
}
function hidePlayer(){
    play.obj.stopVideo();
    $select.overlay.hide();
};