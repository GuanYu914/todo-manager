const modal = {
  DisplayModal: DisplayModal
}

// add modal flash message
function InsertFlashModal(modalName, cb) {
  if (modalName === 'emptyInput') {
    // select modal list container, then add relative modal
    $('.container:nth(1)').append(`
    <div class="modal fade" id="emptyInput" tabindex="-1" aria-labelledby="輸入注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">請輸入代辦事項內容</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            請輸入內容才能幫您紀錄喔
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return
  }
  if (modalName === 'registerUnsuccessfullyDueToExistedAccount') {
    $('.container:nth(1)').append(`
    <div class="modal fade" id="registerUnsuccessfullyDueToExistedAccount" tabindex="-1" aria-labelledby="註冊注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">註冊失敗</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            此帳號名稱已經被人使用，請換另外一組
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return
  }
  if (modalName === 'registerUnsuccessfullyDueToServerError') {
    $('.container:nth(1)').append(`
    <div class="modal fade" id="registerUnsuccessfullyDueToServerError" tabindex="-1" aria-labelledby="註冊注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">註冊失敗</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            伺服器發生錯誤，請稍後再試一次
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return
  }
  if (modalName === 'registerSuccessfully') {
    $('.container:nth(1)').append(`
    <div class="modal fade" id="registerSuccessfully" tabindex="-1" aria-labelledby="註冊注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">註冊成功</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            點擊 " 我知道了 "，將自動登入...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary btn-login" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return
  }
  if (modalName === 'loginUnsuccessfullyDueToServerError') {
    $('.container:nth(1)').append(`
    <div class="modal fade" id="loginUnsuccessfullyDueToServerError" tabindex="-1" aria-labelledby="登入注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">登入失敗</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            伺服器發生錯誤，請稍後再試一次
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return 
  }
  if (modalName === 'loginUnsuccessfullyDueToNotExistedAccount') {
    $('.container:nth(1)').append(`
    <div class="modal fade" id="loginUnsuccessfullyDueToNotExistedAccount" tabindex="-1" aria-labelledby="登入注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">登入失敗</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            找不到此用戶帳密，請確認帳密是否有誤
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return
  }
  if (modalName === 'loginSuccessfully') {
    $('.container:nth(1)').append(`
    <div class="modal fade" id="loginSuccessfully" tabindex="-1" aria-labelledby="登入注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">登入成功</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            成功登入
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return
  }
  if (modalName === 'emptyUploadTodoContent') {
    $('.container:nth(1)').append(`
    <div class="modal fade" id="emptyUploadTodoContent" tabindex="-1" aria-labelledby="上傳注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">上傳代辦事項</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            代辦事項沒有內容無法上傳
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return
  }
  if (modalName === 'ajaxSendErrorModal') {
    $('.container:nth(1)').append(`
    <div class="modal fade" id="ajaxSendErrorModal" tabindex="-1" aria-labelledby="注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">網路異常</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            無法與伺服器通訊，請稍後再試試
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return
  }
  if (modalName === 'uploadTodoSuccessfully') {
    $('.container:nth(1)').append(`
    <div class="modal fade" id="uploadTodoSuccessfully" tabindex="-1" aria-labelledby="上傳注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">上傳代辦事項</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            上傳代辦事項成功
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return
  }
  if (modalName === 'uploadTodoUnsuccessfully') {
    $('.container:nth(1)').append(`
    <div class="modal fade" id="uploadTodoUnsuccessfully" tabindex="-1" aria-labelledby="上傳注意事項" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">上傳代辦事項</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="關閉視窗"></button>
          </div>
          <div class="modal-body">
            無法上傳代辦事項，請稍後在試
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">我知道了</button>
          </div>
        </div>
      </div>
    </div>
    `)
    cb()
    return
  }
}

// remove modal flash message
function RemoveFlashModal(modalName, cb) {
  if (modalName === 'emptyInput') {
    $('#emptyInput').on('hidden.bs.modal', () => {
      cb()
      $('#emptyInput').remove()
    })
    return
  }
  if (modalName === 'registerUnsuccessfullyDueToExistedAccount') {
    $('#registerUnsuccessfullyDueToExistedAccount').on('hidden.bs.modal', () => {
      cb()
      $('#registerUnsuccessfullyDueToExistedAccount').remove()
    })
    return
  }
  if (modalName === 'registerUnsuccessfullyDueToServerError') {
    $('#registerUnsuccessfullyDueToServerError').on('hidden.bs.modal', () => {
      cb()
      $('#registerUnsuccessfullyDueToServerError').remove()
    })
    return
  }
  if (modalName === 'loginUnsuccessfullyDueToServerError') {
    $('#loginUnsuccessfullyDueToServerError').on('hidden.bs.modal', () => {
      cb()
      $('#loginUnsuccessfullyDueToServerError').remove()
    })
    return
  }
  if (modalName === 'registerSuccessfully') {
    $('#registerSuccessfully').on('hidden.bs.modal', () => {
      cb()
      $('#registerSuccessfully').remove()
    })
    return
  }
  if (modalName === 'loginUnsuccessfullyDueToNotExistedAccount') {
    $('#loginUnsuccessfullyDueToNotExistedAccount').on('hidden.bs.modal', () => {
      cb()
      $('#loginUnsuccessfullyDueToNotExistedAccount').remove()
    })
    return
  }
  if (modalName === 'loginSuccessfully') {
    $('#loginSuccessfully').on('hidden.bs.modal', () => {
      cb()
      $('#loginSuccessfully').remove()
    })
    return
  }
  if (modalName === 'emptyUploadTodoContent') {
    $('#emptyUploadTodoContent').on('hidden.bs.modal', () => {
      cb()
      $('#emptyUploadTodoContent').remove()
    })
    return
  }
  if (modalName === 'ajaxSendErrorModal') {
    $('#ajaxSendErrorModal').on('hidden.bs.modal', () => {
      cb()
      $('#ajaxSendErrorModal').remove()
    })
    return
  }
  if (modalName === 'uploadTodoSuccessfully') {
    $('#uploadTodoSuccessfully').on('hidden.bs.modal', () => {
      cb()
      $('#uploadTodoSuccessfully').remove()
    })
    return
  }
  if (modalName === 'uploadTodoUnsuccessfully') {
    $('#uploadTodoUnsuccessfully').on('hidden.bs.modal', () => {
      cb()
      $('#uploadTodoUnsuccessfully').remove()
    })
    return
  }
}

// display multiple modals
function DisplayModal(type, op, state) {
  if (type === 'input') {
    if (op === 'submit') {
      if (state === 'empty-content') {
        InsertFlashModal('emptyInput', () => {
          $('#emptyInput').modal('show')
        })
        RemoveFlashModal('emptyInput', () => {})
        return
      }
      return
    }
    return
  }
  if (type === 'form') {
    if (op === 'register') {
      if (state === 'done-existed-register-user') {
        $('#registerModal').modal('hide')
        InsertFlashModal('registerUnsuccessfullyDueToExistedAccount', () => {
          $('#registerUnsuccessfullyDueToExistedAccount').modal('show')
        })
        RemoveFlashModal('registerUnsuccessfullyDueToExistedAccount', () => {
          $('#registerModal').modal('show')
        })
        return
      }
      if (state === 'done-server-side-error') {
        $('#registerModal').modal('hide')
        InsertFlashModal('registerUnsuccessfullyDueToServerError', () => {
          $('#registerUnsuccessfullyDueToServerError').modal('show')
        })
        RemoveFlashModal('registerUnsuccessfullyDueToServerError', () => {
          $('#registerModal').modal('show')
        })
        return
      }
      if (state === 'done-enroll-successfully') {
        $('#registerModal').modal('hide')
        InsertFlashModal('registerSuccessfully', () => {
          $('#registerSuccessfully').modal('show')
        })
        RemoveFlashModal('registerSuccessfully', () => {})
        return
      }
      if (state === 'fail-ajax-error') {
        $('#registerModal').modal('hide')
        InsertFlashModal('ajaxSendErrorModal', () => {
          $('#ajaxSendErrorModal').modal('show')
        })
        RemoveFlashModal('ajaxSendErrorModal', () => {
          $('#registerModal').modal('show')
        })
        return
      }
      return
    }
    if (op === 'login-after-register') {
      if (state === 'done-server-side-error') {
        $('#registerModal').modal('hide')
        InsertFlashModal('registerUnsuccessfullyDueToServerError', () => {
          $('#registerUnsuccessfullyDueToServerError').modal('show')
        })
        RemoveFlashModal('registerUnsuccessfullyDueToServerError', () => {
          $('#registerModal').modal('show')
        })
        return
      }
      if (state === 'fail-ajax-error') {
        $('#registerModal').modal('hide')
        InsertFlashModal('ajaxSendErrorModal', () => {
          $('#ajaxSendErrorModal').modal('show')
        })
        RemoveFlashModal('ajaxSendErrorModal', () => {
          $('#registerModal').modal('show')
        })
        return
      }
      return
    }
    if (op === 'register-get-session') {
      if (state === 'done-server-side-error') {
        $('#loginModal').modal('hide')
        InsertFlashModal('loginUnsuccessfullyDueToServerError', () => {
        $('#loginUnsuccessfullyDueToServerError').modal('show')
        })
        RemoveFlashModal('loginUnsuccessfullyDueToServerError', () => {
          $('#loginModal').modal('show')
        })
        return
      }
      if (state === 'fail-ajax-error') {
        $('#registerModal').modal('hide')
        InsertFlashModal('ajaxSendErrorModal', () => {
          $('#ajaxSendErrorModal').modal('show')
        })
        RemoveFlashModal('ajaxSendErrorModal', () => {
          $('#registerModal').modal('show')
        })
        return
      }
      return
    }
    if (op === 'login') {
      if (state === 'done-not-existed-account') {
        $('#loginModal').modal('hide')
        InsertFlashModal('loginUnsuccessfullyDueToNotExistedAccount', () => {
          $('#loginUnsuccessfullyDueToNotExistedAccount').modal('show')
        })
        RemoveFlashModal('loginUnsuccessfullyDueToNotExistedAccount', () => {
          $('#loginModal').modal('show')
        })
        return
      }
      if (state === 'done-server-side-error') {
        $('#loginModal').modal('hide')
        InsertFlashModal('loginUnsuccessfullyDueToServerError', () => {
          $('#loginUnsuccessfullyDueToServerError').modal('show')
        })
        RemoveFlashModal('loginUnsuccessfullyDueToServerError', () => {
          $('#loginModal').modal('show')
        })
        return
      }
      if (state === 'fail-ajax-error') {
        $('#loginModal').modal('hide')
        InsertFlashModal('ajaxSendErrorModal', () => {
          $('#ajaxSendErrorModal').modal('show')
        })
        RemoveFlashModal('ajaxSendErrorModal', () => {
          $('#loginModal').modal('show')
        })
        return
      }
      return
    }
    if (op === 'login-get-session') {
      if (state === 'done-not-existed-account') {
        $('#loginModal').modal('hide')
        InsertFlashModal('loginUnsuccessfullyDueToNotExistedAccount', () => {
          $('#loginUnsuccessfullyDueToNotExistedAccount').modal('show')
        })
        RemoveFlashModal('loginUnsuccessfullyDueToNotExistedAccount', () => {
          $('#loginModal').modal('show')
        })
        return
      }
      if (state === 'done-server-side-error') {
        $('#loginModal').modal('hide')
        InsertFlashModal('loginUnsuccessfullyDueToServerError', () => {
          $('#loginUnsuccessfullyDueToServerError').modal('show')
        })
        RemoveFlashModal('loginUnsuccessfullyDueToServerError', () => {
          $('#loginModal').modal('show')
        })
        return
      }
      if (state === 'done-login-successfully') {
        $('#loginModal').modal('hide')
        InsertFlashModal('loginSuccessfully', () => {
          $('#loginSuccessfully').modal('show')
        })
        RemoveFlashModal('loginSuccessfully', () => {})
        return
      }
      if (state === 'fail-ajax-error') {
        $('#loginModal').modal('hide')
        InsertFlashModal('ajaxSendErrorModal', () => {
          $('#ajaxSendErrorModal').modal('show')
        })
        RemoveFlashModal('ajaxSendErrorModal', () => {
          $('#loginModal').modal('show')
        })
        return
      }
      return
    }
    return
  }
  if (type === 'button') {
    if (op === 'upload-todos') {
      if (state === 'empty-uploaded-content') {
        InsertFlashModal('emptyUploadTodoContent', () => {
          $('#emptyUploadTodoContent').modal('show')
        })
        RemoveFlashModal('emptyUploadTodoContent', () => {})
        return
      }
      if (state === 'fail-ajax-error') {
        InsertFlashModal('ajaxSendErrorModal', () => {
          $('#ajaxSendErrorModal').modal('show')
        })
        RemoveFlashModal('ajaxSendErrorModal', () => {})
        return
      }
      if (state === 'done-upload-todos-successfully') {
        InsertFlashModal('uploadTodoSuccessfully', () => {
          $('#uploadTodoSuccessfully').modal('show')
        })
        RemoveFlashModal('uploadTodoSuccessfully', () => {})
        return
      }
      if (state === 'done-upload-todos-unsuccessfully') {
        InsertFlashModal('uploadTodoUnsuccessfully', () => {
          $('#uploadTodoUnsuccessfully').modal('show')
        })
        RemoveFlashModal('uploadTodoUnsuccessfully', () => {})
        return
      }
      return
    }
    if (op === 'logout') {
      if (state === 'fail-ajax-error') {
        InsertFlashModal('ajaxSendErrorModal', () => {
          $('#ajaxSendErrorModal').modal('show')
        })
        RemoveFlashModal('ajaxSendErrorModal', () => {})
      }
      return
    }
    return
  }
  if (type === 'general') {
    if (op === 'reload-get-session') {
      if (state === 'fail-ajax-error') {
        InsertFlashModal('ajaxSendErrorModal', () => {
          $('#ajaxSendErrorModal').modal('show')
        })
        RemoveFlashModal('ajaxSendErrorModal', () => {})
        return
      }
      return
    }
    if (op === 'get-todos') {
      if (state === 'fail-ajax-error') {
        InsertFlashModal('ajaxSendErrorModal', () => {
          $('#ajaxSendErrorModal').modal('show')
        })
        RemoveFlashModal('ajaxSendErrorModal', () => {})
        return
      }
      if (state === 'done-upload-todos-unsuccessfully') {
        InsertFlashModal('uploadTodoUnsuccessfully', () => {
          $('#uploadTodoUnsuccessfully').modal('show')
        })
        RemoveFlashModal('uploadTodoUnsuccessfully', () => {})
        return
      }
      return
    }
    return
  }
}

module.exports = modal