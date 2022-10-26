import React, { useRef, useState, useEffect } from "react";
import Button from "../button/Button";
import images from "../../assets/images";
import "./header.scss";
import { useDebounce } from "../../hooks";
import { search } from "../../api/musicApi";

//icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { THEME_2, THEME_ARTIST, THEME_DYNAMIC } from "../../consts/THEME";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import moment from "moment";

const Header = () => {
  const headerRef = useRef(null);
  const inputRef = useRef(null);
  const ulsRef = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isColapse, setIsColapse] = useState("");
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const debounced = useDebounce(searchValue, 800);

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };


  const onFocusInput = (isFocus) => {
    if (isFocus) {
      setIsColapse("is-copalse");
      setIsShow(true);
    } else {
      setIsColapse("");
      setIsShow(false);
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && inputRef.current.contains(event.target)) {
      return;
    }
    if (ulsRef.current && !ulsRef.current.contains(event.target)) {
      setIsColapse("");
      setIsShow(false);
    }
  };

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.getElementsByClassName("page-section")[0]?.scrollTop > 50 ||
        document.getElementById("boxm")[0]?.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    document.getElementById("boxm").addEventListener("scroll", shrinkHeader);
    return () => {
      document
        .getElementById("boxm")
        .removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, !isShow);
    return () => {
      document.removeEventListener("click", handleClickOutside, !isShow);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    search(debounced)
      .then((res) => {
        setSearchResult(res.data.songs.slice(0, 8));
        console.log(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [debounced]);

  return (
    <header ref={headerRef} className="header">
      <div className="level">
        <div className="level-left">
          <Button className="no-bg">
            <ArrowBackIcon
              className="icon"
              sx={{
                fontSize: 20,
                color: "var(--setting-icon-text)",
                marginRight: "20px",
              }}
            />
          </Button>
          <Button className="no-bg">
            <ArrowForwardIcon
              className="icon"
              sx={{
                fontSize: 20,
                color: "var(--setting-icon-text)",
                marginRight: "20px",
              }}
            />
          </Button>
          <form className="search">
            <div className={"search__container " + isColapse}>
              <Button className="no-bg pd-7">
                <SearchIcon
                  className="icon"
                  sx={{ fontSize: 25, color: "var(--text-placeholder)" }}
                />
              </Button>
              <div className="input-wrapper">
                <input
                  type="text"
                  ref={inputRef}
                  onFocus={() => onFocusInput(true)}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="input-placeholder"
                  placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                />
              </div>
              {searchValue.length > 0 && (
                <Button
                  className={"no-bg"}
                  onClick={handleClear}
                  style={{ right: "10px" }}
                >
                  {loading ? (
                    <img src={images.spiner} alt="loading" className="spiner" />
                  ) : (
                    <CloseRoundedIcon
                      sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}
                    />
                  )}
                </Button>
              )}
            </div>
            {isShow && (
              <ul className="suggest__list" ref={ulsRef}>
                <div className="suggest__list__container">
                  <div className="search-title">Gợi ý kết quả</div>
                  {searchResult?.map((item, i) => (
                    <li className="suggest__list__item" key={i}></li>
                  ))}
                </div>
              </ul>
            )}
          </form>
        </div>
        <RightHeader onOpenModal={handleOpenDialog}/>
      </div>
      <Modal onOpen={openDialog} onClose={handleCloseDialog} title="Giao Diện">
        <ModalTheme onClose={handleCloseDialog} />
      </Modal>
    </header>
  );
};

const RightHeader = ({onOpenModal}) => {
  return (
    <div className="level-right">
      <div className="setting-item">
        <Button  onClick={onOpenModal}>
          <ColorLensIcon
            sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}
          />
        </Button>
      </div>
      <div className="setting-item">
        <Button>
          <FileUploadOutlinedIcon
            sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}
          />
        </Button>
      </div>
      <div className="setting-item hide-on-mobile">
        <Button
          className={"bg-circle is-40"}
          onClick={() => console.log("gaga")}
        >
          <SettingsIcon
            sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}
          />
        </Button>
      </div>
      <div className="setting-item">
        <Button
          className={"bg-circle is-40"}
          onClick={() => console.log("gaga")}
        >
          <PersonIcon
            sx={{ fontSize: 20, color: "var(--setting-icon-text)" }}
          />
        </Button>
      </div>
    </div>
  );
};

const ModalTheme = ({onClose}) => {


  return (
    <div className="container-theme">
      <h3 className="title pad-rl-7">Dynamic</h3>
      <div className="columns">
        {THEME_DYNAMIC.map((item, i) => (
          <div className="column theme-modal mb-2" key={i}>
            <Card
              image={item.img}
              className=""
              customImg=""
             
            >
              <div className="title">
                {item.title}
              </div>
            </Card>
          </div>
        ))}
      </div>
      <h3 className="title pad-rl-7">Chủ Đề</h3>
      <div className="columns">
        {THEME_2.map((item, index) => (
          <div className="column theme-modal mb-2" key={index}>
            <Card
              image={item.img}
              className=""
              customImg=""

            >
               <div className="title">
                {item.title}
              </div>
            </Card>
          </div>
        ))}
      </div>
      <h3 className="title prl-7">Nghệ Sĩ</h3>
      <div className="columns">
        {THEME_ARTIST.map((item, index) => (
          <div className="column theme-modal mb-2" key={index}>
            <Card
              image={item.img}
              className=""
              customImg=""
              content={item.title}
            >
               <div className="title">
                {item.title}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
