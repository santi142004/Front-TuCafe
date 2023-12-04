
import { Link } from 'react-router-dom';
import './index.css'; 

const SignUp = () => {
  return (
    <div className="book1"> {/* Apply the 'book' class to style the entire form */}
      <h2 className="heading">Registrar</h2>
      <form className='formL'>
        <label htmlFor="signupUsername" className="boxUS">
          Usuario:
          <input type="text" id="signupUsername" className="box1" />
        </label>

        <label htmlFor="signupEmail" className="boxUS">
          Correo electrónico:
          <input type="email" id="signupEmail" className="box1" />
        </label>

        <label htmlFor="signupPassword" className="boxUS">
          Contraseña:
          <input type="password" id="signupPassword" className="box1" />
        </label>

        <button type="submit" className="btn">
          Registrar
        </button>
      </form>
      <p className='registro'>
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login"><hr /><u><b>Inicia sesión aquí</b></u></Link>
      </p>
    </div>
  );
};

export default SignUp;
