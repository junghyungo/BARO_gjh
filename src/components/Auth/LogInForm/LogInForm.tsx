import { Link } from 'react-router-dom';
import { FormWrapper, LinkWrapper } from './LogInForm.styles';

const LogInForm = () => {
  return (
    <FormWrapper>
        <input className='logInId' type="email" placeholder="이메일 혹은 아이디 입력" autoFocus />
        <input className='logInPw' type="password" placeholder="비밀번호 입력" />
          <button className='logInBtn'><Link to='/home' style={{textDecoration:"none", color:'#FFFFFF'}}>로그인</Link></button>
        <LinkWrapper>
          <button className='findPwBtn'>아이디 찾기</button>
          <div></div>
          <button className='findPwBtn'>비밀번호 찾기</button>
          <div></div>
          <button className='signUpBtn'>회원가입</button>
        </LinkWrapper>
    </FormWrapper>
  );
};
export default LogInForm;