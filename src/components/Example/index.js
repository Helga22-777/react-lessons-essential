import FirstComponent from "../FirstComponent/FirstComponent";
import FunctionComponent from "../FunctionComponents/FunctionComponent";

const isLogin = true;

export const Example = () => {
    return (
        <div>
        {isLogin ? <FunctionComponent /> : <FirstComponent />}
        </div>
    );
}