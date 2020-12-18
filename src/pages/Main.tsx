import React, {Fragment} from "react";
import {useTranslation} from "react-i18next";

const Main: React.FC = () => {
    const {t} = useTranslation();
    return (
        <Fragment>
            <p>Hello World!</p>
            <i className="fas fa-address-book"></i>
        </Fragment>
    );
};

export default Main
