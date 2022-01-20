import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollTop(){

    // useLocation : 사용자가 현재 머물러 있는 페이지에 대한 정보를 알려주는 hook

    let { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollTop;