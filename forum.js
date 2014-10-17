$(document)
  .ready(function() {

    $('.ui.icon')
      .popup({
        on: 'focus'
      })
    ;

    $('.reply.modal')
          .modal('setting', {
          closable  : false,
          onDeny    : function(){
            window.alert('Wait not yet!');
            return false;
          },
          onApprove : function() {
            window.alert('Approved!');
          }
        })
        .modal('attach events', '.reply.button', 'show')
    ;

    $('.share.modal')
          .modal('setting', {
          closable  : false,
          onDeny    : function(){
            window.alert('Wait not yet!');
            return false;
          },
          onApprove : function() {
            window.alert('Approved!');
          }
        })
        .modal('attach events', '.share.button', 'show')
    ;

    $('.editprofile.modal')
          .modal('hide dimmer')
          .modal('setting', {
          closable  : false,
          onDeny    : function(){
            window.alert('Wait not yet!');
            return false;
          },
          onApprove : function() {
            window.alert('Approved!');
          }
        })
        .modal('attach events', '.editprofile.button', 'show')
    ;

    $('.filter.menu .item')
      .tab()
    ;

    $('.ui.rating')
      .rating({
        clearable: true
      })
    ;

    $('.ui.sidebar')
      .sidebar('attach events', '.launch.button')
    ;

    $('.ui.dropdown')
      .dropdown()
    ;

  })
;