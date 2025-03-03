import { useAppDispatch } from "../storage/hooks";
import { CategoryEntity, setActiveCategory } from "../storage/slices/categoriesSlice";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  categories: CategoryEntity[];
};

const Modal = ({ isOpen, setIsOpen, categories }: ModalProps) => {
  const dispatch = useAppDispatch();
  const closeModal = () => setIsOpen(false);
  const setCategory = (id: number) => () => {
          dispatch(setActiveCategory(id));
        };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50 transition-opacity duration-300"
            onClick={closeModal}
          ></div>

          <div className="bg-white rounded-lg shadow-lg p-6 z-50 transform transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-bold mb-4">Выберите категорию</h2>
            <div className="flex my-4 space-x-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={setCategory(category.id)}
                  className="rounded-xl border border-blue-600 text-blue-600 object-contain my-2 p-1"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
