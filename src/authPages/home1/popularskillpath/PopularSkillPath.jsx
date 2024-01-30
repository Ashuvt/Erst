import { Fragment, useEffect, useState } from "react";
import ModuleTitle from "../../components/moduletitle/ModuleTitle";
import { icon } from "../../../utils/images/icons";
import SkillPathCard from "../../components/skillpathcard/SkillPathCard";
import { baseUrl, explorePage } from "../../../utils/apidata";
import axios from "axios";

const PopularSkillPath = ({dummyNum, setDummyNum}) => {
  const [loader, setLoader] = useState(false);
  const [bundleList, setBundleList] = useState([]);
  const [savedList, setSavedList] = useState([]);

  const exploreApi = async () => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    setLoader(true);
    try {
      const response = await axios.get(
        `${baseUrl}/${explorePage}`,
        {
          headers,
        },
        {
          proffession: {},
          interest: {},
          tag: {},
        }
      );
      if (response?.data?.success) {
        setLoader(false);
        setBundleList(response?.data?.data?.bundle);
        setSavedList(response?.data?.data?.savedcourses);
      } else {
        setBundleList([]);
      }
    } catch (error) {
      console.log(error);
      setBundleList([]);
      setLoader(false);
    }
  };

  useEffect(() => {
    exploreApi();
  }, []);

  useEffect(() => {
    exploreApi();
  }, [dummyNum]);

const recallAfterSaveAPi = () => {
  exploreApi();
  setDummyNum(prev => prev - 1);
}

  return (
    <Fragment>
      <ModuleTitle
        title="Popular Bundles"
        text="Hi Rajat, Based on your intersect in ComTIA security we suggest you some of personally curated modules"
        btntext="Popular Bundles"
        icon={icon.blueRightArrow}
        redirectTo="/auth/explore"
        
      />

      {bundleList?.length > 0 ? (
        bundleList.slice(0, 3)?.map((info) => {
          return (
            <Fragment key={info.id}>
              <SkillPathCard {...info} recallAfterSaveAPi={recallAfterSaveAPi} savedList={savedList} />
            </Fragment>
          );
        })
      ) : (
        <p>Data Not Found...</p>
      )}
    </Fragment>
  );
};

export default PopularSkillPath;
