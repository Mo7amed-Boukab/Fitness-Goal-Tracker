import ModalHeader from "./ModalHeader";
import InputField from "./InputField";
import SelectField from "./SelectField";
import ModalActions from "./ModalActions";

const Modal = ({ cancel, save }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <ModalHeader title="Ajouter un objectif" />
        <form>
          <InputField
            label="Titre"
            id="titre"
            placeholder="Ex: Marcher 10 000 pas"
          />

          <SelectField
            label="Catégorie"
            id="categorie"
            options={[
              "Cardio",
              "Musculation",
              "Hydratation",
              "Nutrition",
              "Sommeil",
            ]}
          />
            <InputField
            label="Objectif"
            id="objectif"
            placeholder="Ex: 10000"
          />


          <ModalActions onCancel={cancel} onSave={save} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
