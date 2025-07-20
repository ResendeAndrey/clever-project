/*
  This component is used to show a loading spinner when the user is waiting for a response from the server
*/

const Loading = () => {
  return (
    <div
      data-testid="loading-component"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loading;
