import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./app-header.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const AppHeader = () => {
    return <div className="flex-box-start app-header-container v-center">

        <div className="flex-box-start v-center left">
            Robo<span className="x">X</span>
        </div>
        
        <div className="right flex-box-end v-center">
            <FontAwesomeIcon icon={faBars}/>
        </div>

    </div>;
}

export default AppHeader;
