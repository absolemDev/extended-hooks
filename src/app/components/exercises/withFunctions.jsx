import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogIn = () => {
        localStorage.setItem("auth", "token");
        document.location.reload();
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
        document.location.reload();
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth === "token"}
                onLogIn={onLogIn}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
