import { FaRegClipboard } from "react-icons/fa";

interface Props {
  text: string;
  displayText: string;
}

export const CopyText: React.FC<Props> = ({ text, displayText }) => (
  <div
    className="flex items-center justify-center p-4 space-x-3 border rounded border-blue-400 hover:border-transparent bg-transparent hover:bg-blue-300 text-sm font-medium text-blue-400 hover:text-white"
    onClick={(e) => {
      e.preventDefault();
      navigator.clipboard.writeText(text);
    }}
  >
    <span>{displayText}</span>
    <FaRegClipboard />
  </div>
);
