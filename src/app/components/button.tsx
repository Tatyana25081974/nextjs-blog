"use client";
import React from "react";
import clsx from "clsx"; //утиліта для умовного об’єднання CSS класів у рядок. Вона допомагає динамічно формувати клас, наприклад, додавати класи за умовами.

//Оголошуємо TypeScript інтерфейс ButtonProps, який описує пропси компонента.

export interface ButtonProps
  extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  disabled?: boolean; //означає, що проп disabled може бути булевим (true або false) або взагалі не передаватися (тому знак ? — необов’язковий проп).
}
//Оголошення функціонального компонента Button, який приймає пропси типу ButtonProps.
//disabled — окремо витягуємо цю властивість.
//...rest — всі інші пропси, що не вказані явно, збираються у об'єкт rest.Це робиться, щоб можна було передати будь-які додаткові атрибути (наприклад, onClick, type, id і т.п.) до кнопки.
export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        `py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded`,
        !disabled && "hover:bg-gray-800 active:bg-gray-950",
        disabled && "text-zinc-100",
      )}
    />
  );
}

//Класи py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded — це Tailwind CSS класи, що задають:

//py-2.5 — вертикальні падінги (padding-top і padding-bottom).

//px-5 — горизонтальні падінги.

//bg-gray-900 — темно-сірий (майже чорний) фон.

//text-zinc-50 — світлий (майже білий) колір тексту.

//text-base — базовий розмір тексту.

//text-center — вирівнювання тексту по центру.

//font-medium — середня товщина шрифту.

//rounded — скруглені кути.
