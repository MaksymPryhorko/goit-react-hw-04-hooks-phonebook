import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import style from "./Form.module.css";

export default function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: name,
      id: uuidv4(),
      number: number,
    });

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={style.mainForm} onSubmit={handleSubmit}>
      <label className={style.labelForm}>
        <input
          className={style.inputForm}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
        Name
      </label>
      <label className={style.labelForm}>
        <input
          className={style.inputForm}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />
        Number
      </label>
      <button className={style.buttonForm} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};
