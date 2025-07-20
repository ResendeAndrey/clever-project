// custom hook to check if there is a user in local storage
const useCheckStorage = () => {
  return {
    userStorage: localStorage?.getItem("user")
  };
};

export default useCheckStorage;
