import React, { useEffect } from 'react';

export default function InputControl(props) {
    useEffect(() => {
        /*=== Add focus ===*/
        function addFocus(event) {
            event.target.parentNode.parentNode.classList.add("focus");
        }

        /*=== Remove focus ===*/
        function removeFocus(event) {
            const value = event.target.value;
            const parent = event.target.parentNode.parentNode;
            if (value === "") {
                parent.classList.remove("focus");
            }
        }

        /*=== To call function===*/
        const inputs = document.querySelectorAll(".form__input");
        inputs.forEach(input => {
            input.addEventListener("focus", addFocus);
            input.addEventListener("blur", removeFocus);

            return () => {
                input.removeEventListener("focus", addFocus);
                input.removeEventListener("blur", removeFocus);
            };
        });
    }, []); // Empty dependency array to run this effect only once after initial render

    return (
        <>
            <div className="form__div form__div-one">
                <div className="form__icon">
                    <i className={`bx bx-${props.icon}`}></i>
                </div>

                <div className="form__div-input">
                    {props.label && <label htmlFor="" className="form__label">{props.label}</label>}
                    <input type="text" required {...props} className="form__input" />
                </div>
            </div>
        </>
    );
}
