import SocialMedia from "./SocialMedia";



const LoginWithSocialmedia = () => {


  return (
    <div className="text-center">
      <SocialMedia provider="google"/>
      <SocialMedia provider="facebook" />
      <SocialMedia provider="github" />
    </div>
  );
};

export default LoginWithSocialmedia;
