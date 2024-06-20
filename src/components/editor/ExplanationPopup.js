import useExplanation from '../../hooks/useExplanation';

function ExplanationPopup({ selection, onClose }) {
  const { explanation, isLoading, error } = useExplanation(selection);

  let content;
  if (isLoading) {
    content = 'Loading...';
  } else if (error) {
    content = error.message;
  } else if (explanation) {
    content = explanation;
  }

  const handleClose = () => {
    onClose(selection);
  };

  return (
    <div className="z-50 bg-gray-700 overflow-y-auto relative w-96 p-4 border rounded-lg shadow-lg">
      <pre className="whitespace-pre-wrap text-sm text-gray-200">{content}</pre>
      <button onClick={handleClose} className="text-sm border px-2 py-1 mt-2 bg-gray-600 text-gray-200 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
        Close
      </button>
    </div>
  );
}

export default ExplanationPopup;
