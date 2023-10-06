const Input = ({
    title,
    placeHolder,
    }: {
    title: string;
    placeHolder: string;
}) => {
return (
    <div className="my-2">
        <h6 className="text-xs font-semibold tracking-widest font-bebas" >{title}</h6>
        <input
            className="flex justify-center my-1 w-96 h-12 rounded-md bg-gray-800 text-gray-50 p-2"
            type="text"
            name=""
            id=""
            placeholder={placeHolder}
        />
    </div>
    );
};

export default Input;