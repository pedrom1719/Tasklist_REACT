export interface InputProps {
  placeholder: string;
  attributes?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

function Input({ placeholder, attributes, onChange, value }: InputProps) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`block w-full rounded border-x-4 border-transparent p-3 text-sm outline-none transition-all hover:border-r-gray-200 focus:border-r-violet-500 ${attributes}`}
      />
    </>
  );
}

export default Input;
