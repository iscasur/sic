import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MailchimpComponent extends React.Component {
  state = {
    fname: null,
    email: null,
    message: 'Únete a nuestro newsletter',
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault();

    console.log('submit', this.state)

    this.setState({ message: '¡Gracias por suscribirte! ⭐️' })

    addToMailchimp(this.state.email, this.state) // listFields are optional if you are only capturing the email address.
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`)

        if (result !== 'success') {
          throw msg
        }

        alert(msg)
      })
      .catch(err => {
        console.log('err', err)
        alert(err)
      })

    this.setState({ fname: null })
    this.setState({ email: null })
  }

  render() {
    return (
      <>
        <h3>{this.state.message}</h3>
        <p>Recibe nuestro contenido y libérate del estrés del trabajo.</p>
        <form onSubmit={this._handleSubmit}>
          <input type="text" onChange={this._handleChange} placeholder="Nombre (sin apellidos)" name="name" value={this.state.fname} />
          <input type="email" onChange={this._handleChange} placeholder="Correo electrónico" name="email" value={this.state.email} />
          <input type="submit" value="¡Me uno!" />
          <p><small>Puedes darte de baja en cualquier momento, sin resentimientos</small></p>
        </form>
      </>
    )
  }
}