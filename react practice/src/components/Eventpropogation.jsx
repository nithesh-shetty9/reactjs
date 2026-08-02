export const Eventpropagation = () => {
  return (
    <>
    <div
      onClick={()=> console.log("Parent bubble")}>
      <button
        onClick={()=> console.log("Button Bubble")}
      >
        Click
      </button>
    </div>
    </>
  );
};