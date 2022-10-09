import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageContainer from "../../components/PageContainer/PageContainer";
import Header from "../../components/Header";
import Content from "../../components/Content";
import History from "../../components/History";
import Popup from "../../components/Popup";
import useCategories from "../../hooks/useCategories";

const HomePage = () => {
  const [popup, setPopup] = useState(false);
  const [selectedTrans, setSelectedTrans] = useState(null);
  const categories = useCategories();
  const getTypeCate = (categoryId) => {
    const cat = categories.find((item) => item.id === categoryId);
    return cat.type;
  };
  const handleShowPopup = (trans, isUpdate = false) => {
    setPopup((prev) => {
      if (isUpdate) {
        setSelectedTrans({
          ...trans,
          old_amount: trans.amount,
          old_type: getTypeCate(trans.category),
        });
      } else {
        setSelectedTrans(null);
      }
      return !prev;
    });
  };

  return (
    <PageContainer>
      <Header actions={{ handleShowPopup }} />
      <Content />
      <History actions={{ handleShowPopup }} />
      <AnimatePresence>
        {popup && (
          <Popup actions={{ handleShowPopup }} selectedTrans={selectedTrans} />
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default HomePage;
