/*
  This component is used to display the password label and the forgot password button
*/

const PasswordLabel = () => {
  return (
    <div className="flex justify-between">
      <span>Password</span>
      <button className="text-primary border-none hover:underline cursor-pointer">
        Forgot password?
      </button>
    </div>
  );
};

export default PasswordLabel;
