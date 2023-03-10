import { Image } from "react-native";
import Logo from "./apple.png";

export const Apple = ({ ...rest }) => <Image source={Logo} {...rest} />;
