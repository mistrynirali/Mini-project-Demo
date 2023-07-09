import './index.css'
import {Componnent} from 'react'
class Login extends Component {
  render() {
    return (
      <div>
        <Form>
          <div>
            <h1 className="app-title">Tasty Kitchens</h1>
            <h1 className="login-text">Login</h1>
            <label htmlFor="USERNAME">>USER NAME</label>
            <input type="text" id="USERNAME" />
          </div>
        </Form>
      </div>
    )
  }
}
export default Login
