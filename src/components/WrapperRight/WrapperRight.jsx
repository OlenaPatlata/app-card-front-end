import s from './WrapperRight.module.scss';
import List from 'components/List';
import Button from 'components/Button';
import { listCards } from 'assets/const';
import useToggle from './../../hooks/useToggle';
import ModalDelCard from 'components/Modals/ModalDelCard';
import ModalEditCash from 'components/Modals/ModalEditCash';
import ModalAddCard from 'components/Modals/ModalAddCard';

const WrapperRight = () => {
  const [editModal, setEditModal] = useToggle();
  // const [elem, setElem] = useState({ amount: 0, ccy: '' });
  const [delModal, setDelModal] = useToggle();
  const [addModal, setAddModal] = useToggle();
  return (
    <div className={s.wrapperRight}>
      <div className={s.buttonWrapper}>
        <Button
          onClick={e => {
            setAddModal(true);
          }}
          text="Add cart"
          name="add"
        />
        <Button
          onClick={e => {
            setEditModal(true);
          }}
          text="Add cash"
          name="add"
        />
      </div>
      <List
        name="itemCard"
        text="Delete"
        arr={listCards}
        onClick={e => {
          setDelModal(true);
        }}
      />
      {addModal && (
        <ModalAddCard
          open={addModal}
          onClose={() => {
            setAddModal(false);
          }}
        />
      )}
      {delModal && (
        <ModalDelCard
          open={delModal}
          onClose={() => {
            setDelModal(false);
          }}
        />
      )}
      {editModal && (
        <ModalEditCash
          open={editModal}
          onClose={() => {
            setEditModal(false);
          }}
        />
      )}
    </div>
  );
};

export default WrapperRight;
