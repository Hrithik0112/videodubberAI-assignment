import Button from "./Button";

const Popup = ({ data, setShow }: any) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Submitted Data</h2>
        <div>
          <p>Checked: {data.checked.toString()}</p>
          <p>Text: {data.text}</p>
          <p>Slider Value: {data.sliderValue}</p>
        </div>
        <button onClick={setShow} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
