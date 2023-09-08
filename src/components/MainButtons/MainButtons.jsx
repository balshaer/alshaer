import React from "react";
import "./MainButtons.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Import the Link component from React Router
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button } from "@material-tailwind/react";

export default function MainButtons() {
  const { t } = useTranslation();

  const iconStyle = {
    height: "14px",
    width: "14px",
  };

  return (
    <div>
      <div className="row-buttons" id="MainButtons">
        <Link to="/projects" className="nav-link">
          <button>
            <span>{t("projects")}</span>
            <span>
              <OpenInNewIcon style={iconStyle} />
            </span>
          </button>
        </Link>

        <Link to="/about" className="nav-link">
          <button>
            <span>{t("About me")}</span>
            <span>
              <OpenInNewIcon style={iconStyle} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
