function Idname(params) {
    return document.getElementById(params)
}

Idname('send').onclick = function (e) {
    e.preventDefault()
    Idname('messages').innerHTML+=`<div class="firstuser">
   ${Idname('mainmsg').value}
  </div>`
  alert('clicked')
}