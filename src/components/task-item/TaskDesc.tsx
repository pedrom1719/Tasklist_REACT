export interface TaskDescProps {
  disabled: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  attributes?: string;
}

function TaskDesc({ disabled, value, attributes, onChange }: TaskDescProps) {
  return (
    <>
      <textarea
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`mt-3 w-full resize-none bg-transparent text-xs text-gray-700 ${attributes}`}
      ></textarea>
    </>
  );
}

export default TaskDesc;
