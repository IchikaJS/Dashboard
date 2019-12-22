import io from 'socket.io-client'

const socket = io('http://localhost:3000', socket => {
  socket.emit('guilds', data => {
    console.log(data)
  })
})

export class Socket {
  
  handleCode(code, uri, scope) {
    return socket.emit('oauthCode', code, uri, scope, async(data) => {

      if (!data.access_token) return

      let accessToken = data.access_token
      
      socket.emit('login', accessToken)
    })
  }

  fetchUser() {
    return socket.emit('me', console.log)
  }
}