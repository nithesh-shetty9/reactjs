export const Eventpropagation = () => {
  return (
    <>
    <div
      onClick={()=> console.log("Parent ubble")}>
      <button
        onClick={()=> console.log("Button Bubble")}
      >
        Click
      </button>
    </div>
    </>
  );
};