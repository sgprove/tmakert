/**
 * sweetalert 공통함수
 * @param title 알림 메시지
 * @param additionalWork 추가작업(함수 or redirect URL
 */

// 알림 - alert (아이콘 - i)
function alertInfo(title, additionalWork) {
    /*let icon = 'info';*/
    let imageUrl = null;
    if(additionalWork !== undefined && additionalWork !== '') {
        runAdditionalWork(imageUrl, title, additionalWork);
    } else {
        Swal.fire(getSwalObject(imageUrl, title));
    }
}
// 성공 - alert (아이콘 - 체크)
function alertSuccess(title, additionalWork) {
    /*let icon = 'success';*/
    let imageUrl = null;
    if(additionalWork !== undefined && additionalWork !== '') {
        runAdditionalWork(imageUrl, title, additionalWork);
    } else {
        Swal.fire(getSwalObject(imageUrl, title));
    }
}
// 에러 - alert (아이콘 - X)
function alertError(title, additionalWork) {
    /*let icon = 'error';*/
    let imageUrl = null;
    if(additionalWork !== undefined && additionalWork !== '') {
        runAdditionalWork(imageUrl, title, additionalWork);
    } else {
        Swal.fire(getSwalObject(imageUrl, title));
    }
}
// 경고 - alert (아이콘 - !)
function alertWarning(title, additionalWork) {
    /*let icon = 'warning';*/
    let imageUrl = null;
    if(additionalWork !== undefined && additionalWork !== '') {
        runAdditionalWork(imageUrl, title, additionalWork);
    } else {
        Swal.fire(getSwalObject(imageUrl, title));
    }
}
// 의문 - alert (아이콘 - ?)
function alertQuest(title, additionalWork) {
    /*let icon = 'question';*/
    let imageUrl = null;
    if(additionalWork !== undefined && additionalWork !== '') {
        runAdditionalWork(imageUrl, title, additionalWork);
    } else {
        Swal.fire(getSwalObject(imageUrl, title));
    }
}

// sweet alert confirm 함수
// icon = (success = 체크, info = i, error = X, warning = !, question = ?)
// denyTF = 취소 버튼 유무 (true = 취소버튼 생성, false = 취소버튼 숨김)
// msg = 메시지 내용
// confirmFunc = 확인시 함수
function swConfirm(icon, denyTF , msg, confirmFunc, deniedFunc) {
    // icon 타입 별 이미지 설정
    let imageUrl = function(icon) {
            let url;
            switch (icon){
                case "info" :
                  url = null;
                case "warning" :
                  url = null;
                  break;
                case "success" :
                  url = null;
                  break;
                case "error" :
                  url = null;
                  break;
                case "question" :
                  url = null;
                  break;
                default :
                  url = null;
            }

            return url;
        }
    Swal.fire({
        //icon: icon,
        imageUrl:imageUrl(icon),
        imageWidth: 60,
        imageHeight: 60,
        title: msg,
        showDenyButton: denyTF,
        showCancelButton: false,
        confirmButtonText: '확인',
        denyButtonText: `취소`,
        cancelButtonText: `취소`,
        allowOutsideClick: false,
        allowEscapeKey: false
    }).then((result) => {
        if (result.isConfirmed) {
            if (isFunction(confirmFunc)) {
                window[confirmFunc]();
            } else if (typeof confirmFunc === 'function') {
                confirmFunc();
            }
        }
        if (result.isDenied) {
            if (isFunction(deniedFunc)) {
                window[deniedFunc]();
            } else if (typeof deniedFunc === 'function') {
                deniedFunc();
            }
            else {
                return false;
            }
        }
    })
}

function getSwalObject(imageUrl, title) {
    return {
        //icon: icon,
        imageUrl:imageUrl,
        imageWidth: 60,
        imageHeight: 60,
        confirmButtonText: '확인',
        title: title,
        text: '',
        allowOutsideClick: false,
        allowEscapeKey: false
    }
}

function runAdditionalWork(icon, title, additionalWork) {
    if (isFunction(additionalWork)) {
        Swal.fire(getSwalObject(icon, title)).then(function () {
            window[additionalWork]();
        });
    } else if (typeof additionalWork === 'function') {
        Swal.fire(getSwalObject(icon, title)).then(function () {
            additionalWork();
        });
    } else if (typeof additionalWork === 'string') {
        Swal.fire(getSwalObject(icon, title)).then(function () {
            goPage(additionalWork)
        });
    }
}
