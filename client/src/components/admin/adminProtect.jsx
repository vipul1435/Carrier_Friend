const { useSelector } = require("react-redux");
const { useLocation } = require("react-router-dom");

const AdminProtect = ({ children }) => {
    const location = useLocation();
    const User = useSelector(state=>{return state.global.user});
    console.log(User);
    // retur
};