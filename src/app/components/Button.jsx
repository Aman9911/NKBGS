"use client";

const Button = ({
  label,
  classname,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative ${classname} disabled:opacity-70 shadow-md active:border-b-0 active:translate-y-1 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-1/4
      ${outline ? "bg-white" : "bg-indigo-600"}
      ${outline ? "border-black" : "border-indigo-600"} 
      ${outline ? "text-black" : "text-white"}
      ${small ? "py-1" : "py-3"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
