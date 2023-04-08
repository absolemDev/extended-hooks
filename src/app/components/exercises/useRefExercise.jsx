import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
const UseRefExercise = () => {
    const defaultConfigBlock = {
        text: "Блок",
        height: "40",
        width: "60"
    };
    const refButtonChangeBlock = useRef(null);
    const refBlock = useRef(null);
    let availableChange = false;

    const checkAvailableChange = (config, elements) => {
        availableChange = Object.keys(config).reduce(
            (acc, key) => acc || elements[key].value !== config[key],
            false
        );
    };

    const handleChange = (e) => {
        checkAvailableChange(defaultConfigBlock, e.target.form.elements);
        refButtonChangeBlock.current.disabled = !availableChange;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        Object.keys(defaultConfigBlock).forEach((key) => {
            defaultConfigBlock[key] = e.target.elements[key].value;
        });
        availableChange = false;
        refBlock.current.innerHTML = `<small>${defaultConfigBlock.text}</small>`;
        refBlock.current.style.height = defaultConfigBlock.height + "px";
        refBlock.current.style.width = defaultConfigBlock.width + "px";
        refButtonChangeBlock.current.disabled = !availableChange;
    };
    const handleClick = () => {
        refBlock.current.innerHTML = "<small>text</small>";
        defaultConfigBlock.text = "text";
        refBlock.current.style.height = "150px";
        defaultConfigBlock.height = "150";
        refBlock.current.style.width = "80px";
        defaultConfigBlock.width = "80";
        checkAvailableChange(
            defaultConfigBlock,
            document.forms.config.elements
        );
        refButtonChangeBlock.current.disabled = !availableChange;
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={refBlock}
            >
                <small>Блок</small>
            </div>
            <Divider />
            <form
                className="col-8 mx-auto"
                onChange={handleChange}
                onSubmit={handleSubmit}
                name="config"
            >
                <label className="form-label" htmlFor="text">
                    Текст
                </label>
                <input
                    className="form-control"
                    type="text"
                    name="text"
                    id="text"
                    defaultValue="Блок"
                />
                <div className="row my-3">
                    <div className="col">
                        <label className="form-label" htmlFor="width">
                            Ширина
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            name="width"
                            id="width"
                            defaultValue="60"
                        />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="height">
                            Высота
                        </label>
                        <input
                            className="form-control"
                            type="number"
                            name="height"
                            id="height"
                            defaultValue="40"
                        />
                    </div>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto my-4">
                    <button
                        className="btn btn-primary"
                        ref={refButtonChangeBlock}
                        disabled
                    >
                        Изменить текст и размер блока
                    </button>
                </div>
            </form>
            <Divider />
            <div className="d-grid gap-2 col-7 mx-auto my-4">
                <button
                    className="btn btn-primary"
                    name="static_block"
                    onClick={handleClick}
                >
                    Изменить текст на &quot;text&quot;, задать высоту 150px и
                    ширина 80px
                </button>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
