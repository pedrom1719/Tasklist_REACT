function Select() {
  return (
    <>
      <select className="block w-full cursor-pointer rounded-md bg-white p-[10px] text-sm text-gray-400 outline-none">
        <option value="" disabled defaultChecked>
          Tipo de Tarefa
        </option>
        <option value={"Normal"}>Normal</option>
        <option value={"Importante"}>Importante</option>
        <option value={"Urgente"}>Urgente</option>
      </select>
    </>
  );
}

export default Select;
