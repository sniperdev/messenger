import SocialMedia from "./SocialMedia";
const LoginWithSocialmedia = () => {
  return (
    <div className="text-center">
      <SocialMedia provider="Google" />
      <SocialMedia provider="Facebook" />
      <SocialMedia provider="Github" />
    </div>
  );
};

export default LoginWithSocialmedia;
